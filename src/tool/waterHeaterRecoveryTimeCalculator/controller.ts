import { renderResult, renderTank } from './dom-views';
import { evaluateRecoveryInput } from './evaluator';
import { calculateWaterHeaterRecovery, type WaterHeaterRecoveryInput } from './logic';
import { loadRecoveryInput, loadTemperatureUnit, saveRecoveryInput, saveTemperatureUnit } from './storage';
import { fromCelsius, isTemperatureUnit, temperatureUnitSymbol, toCelsius, type TemperatureUnit } from './temperature';
import type { WaterHeaterRecoveryTimeCalculatorUI } from './ui';

interface RecoveryData {
  initialInput: WaterHeaterRecoveryInput;
  ui: WaterHeaterRecoveryTimeCalculatorUI;
  locale: string;
}

function numberValue(root: HTMLElement, id: string): number {
  const field = root.querySelector<HTMLInputElement>(`#${id}`);
  return field?.value.trim() ? Number(field.value) : Number.NaN;
}

function timeValue(root: HTMLElement): number {
  const value = root.querySelector<HTMLInputElement>('#n-start-time')?.value ?? '';
  const parts = value.split(':');
  const hours = Number(parts[0] ?? '');
  const minutes = Number(parts[1] ?? '');
  return Number.isFinite(hours) && Number.isFinite(minutes) ? hours * 60 + minutes : Number.NaN;
}

function readInput(root: HTMLElement, unit: TemperatureUnit): WaterHeaterRecoveryInput {
  const comparePower = numberValue(root, 'n-compare-power');
  const compareEfficiency = numberValue(root, 'n-compare-efficiency');
  const currentTemp = numberValue(root, 'n-current-temp');
  const targetTemp = numberValue(root, 'n-target-temp');
  return {
    volumeL: numberValue(root, 'n-volume'), currentTempC: toCelsius(currentTemp, unit), targetTempC: toCelsius(targetTemp, unit), powerKw: numberValue(root, 'n-power'), efficiencyPct: numberValue(root, 'n-efficiency'), startMinutes: timeValue(root),
    comparePowerKw: Number.isFinite(comparePower) ? comparePower : null,
    compareEfficiencyPct: Number.isFinite(compareEfficiency) ? compareEfficiency : null,
  };
}

function setField(root: HTMLElement, id: string, value: string): void {
  const field = root.querySelector<HTMLInputElement>(`#${id}`);
  if (field) field.value = value;
}

function displayTemperature(valueC: number, unit: TemperatureUnit): string {
  return String(Number(fromCelsius(valueC, unit).toFixed(1)));
}

function setInputValues(root: HTMLElement, input: WaterHeaterRecoveryInput, unit: TemperatureUnit): void {
  setField(root, 'n-volume', String(input.volumeL));
  setField(root, 'n-current-temp', displayTemperature(input.currentTempC, unit));
  setField(root, 'n-target-temp', displayTemperature(input.targetTempC, unit));
  setField(root, 'n-power', String(input.powerKw));
  setField(root, 'n-efficiency', String(input.efficiencyPct));
  setField(root, 'n-start-time', `${String(Math.floor(input.startMinutes / 60)).padStart(2, '0')}:${String(input.startMinutes % 60).padStart(2, '0')}`);
  setField(root, 'n-compare-power', input.comparePowerKw === null ? '' : String(input.comparePowerKw));
  setField(root, 'n-compare-efficiency', input.compareEfficiencyPct === null ? '' : String(input.compareEfficiencyPct));
}

function updateUnitLabels(root: HTMLElement, unit: TemperatureUnit): void {
  const symbol = temperatureUnitSymbol(unit);
  root.querySelectorAll<HTMLElement>('[data-temperature-unit]').forEach((label) => { label.textContent = symbol; });
  root.querySelectorAll<HTMLInputElement>('input[name="n-temperature-unit"]').forEach((field) => { field.checked = field.value === unit; });
}

function updateStatus(root: HTMLElement, input: WaterHeaterRecoveryInput, ui: WaterHeaterRecoveryTimeCalculatorUI): void {
  const status = root.querySelector<HTMLElement>('#n-status');
  if (!status) return;
  const state = evaluateRecoveryInput(input);
  status.className = `n-status n-status--${state}`;
  status.textContent = statusMessage(state, ui, input);
}

function statusMessage(state: ReturnType<typeof evaluateRecoveryInput>, ui: WaterHeaterRecoveryTimeCalculatorUI, input: WaterHeaterRecoveryInput): string {
  if (state === 'invalid') return input.powerKw <= 0 || !Number.isFinite(input.powerKw) ? ui.insufficientPower : ui.invalidInputs;
  if (state === 'no-rise') return ui.noHeatingNeeded;
  return '';
}

function renderTankView(root: HTMLElement, input: WaterHeaterRecoveryInput, ui: WaterHeaterRecoveryTimeCalculatorUI, unit: TemperatureUnit): void {
  const tank = root.querySelector<HTMLElement>('#n-tank-visual');
  const current = Number.isFinite(input.currentTempC) ? input.currentTempC : 0;
  const target = Number.isFinite(input.targetTempC) ? input.targetTempC : 0;
  if (tank) tank.innerHTML = renderTank(current, target, ui, { locale: root.dataset.locale ?? 'en', unit });
}

function renderResultView(root: HTMLElement, data: RecoveryData, input: WaterHeaterRecoveryInput, unit: TemperatureUnit): void {
  const resultContent = root.querySelector<HTMLElement>('#n-result-content');
  const delta = root.querySelector<HTMLElement>('#n-delta');
  const state = evaluateRecoveryInput(input);
  const result = state === 'invalid' ? null : calculateWaterHeaterRecovery(input);
  if (resultContent) resultContent.innerHTML = result ? renderResult(result, data.ui, data.locale, unit) : `<p class="n-result-invalid">${data.ui.invalidInputs}</p>`;
  if (delta) delta.textContent = result ? `+${new Intl.NumberFormat(data.locale, { maximumFractionDigits: 1 }).format(fromCelsius(result.temperatureRiseC, unit))}${temperatureUnitSymbol(unit)}` : '—';
}

function render(root: HTMLElement, data: RecoveryData, input: WaterHeaterRecoveryInput, unit: TemperatureUnit): void {
  updateUnitLabels(root, unit);
  renderTankView(root, input, data.ui, unit);
  renderResultView(root, data, input, unit);
  updateStatus(root, input, data.ui);
}

function parseData(root: HTMLElement): RecoveryData | null {
  const script = root.querySelector<HTMLScriptElement>('#n-water-heater-data');
  if (!script?.textContent) return null;
  try {
    return JSON.parse(script.textContent) as RecoveryData;
  } catch {
    return null;
  }
}

function mount(root: HTMLElement): void {
  const data = parseData(root);
  if (!data) return;
  const input = loadRecoveryInput(data.initialInput);
  let unit = loadTemperatureUnit();
  setInputValues(root, input, unit);
  render(root, data, input, unit);
  root.querySelectorAll('input:not([name="n-temperature-unit"])').forEach((field) => field.addEventListener('input', () => {
    const nextInput = readInput(root, unit);
    saveRecoveryInput(nextInput);
    render(root, data, nextInput, unit);
  }));
  root.querySelectorAll<HTMLInputElement>('input[name="n-temperature-unit"]').forEach((field) => field.addEventListener('change', () => {
    const nextInput = readInput(root, unit);
    const nextUnit = isTemperatureUnit(field.value) ? field.value : 'C';
    unit = nextUnit;
    setInputValues(root, nextInput, unit);
    saveRecoveryInput(nextInput);
    saveTemperatureUnit(unit);
    render(root, data, nextInput, unit);
  }));
}

export function mountWaterHeaterRecovery(): void {
  document.querySelectorAll<HTMLElement>('[data-water-heater-recovery]').forEach(mount);
}
