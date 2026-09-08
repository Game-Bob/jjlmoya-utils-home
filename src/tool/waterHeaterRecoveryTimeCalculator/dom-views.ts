import type { RecoveryScenario, WaterHeaterRecoveryResult } from './logic';
import { fromCelsius, temperatureUnitSymbol, type TemperatureUnit } from './temperature';
import type { WaterHeaterRecoveryTimeCalculatorUI } from './ui';

export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/gu, (character) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character] ?? character);
}

export function formatNumber(value: number, maximumFractionDigits = 1, locale = 'en'): string {
  return new Intl.NumberFormat(locale, { maximumFractionDigits }).format(value);
}

export function formatDuration(minutes: number, ui: WaterHeaterRecoveryTimeCalculatorUI): string {
  if (minutes < 1) return `<strong>&lt;1</strong> ${escapeHtml(ui.minutesUnit)}`;
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = Math.round(minutes % 60);
  const parts = hours > 0 ? [`<strong>${hours}</strong> ${escapeHtml(ui.hoursUnit)}`] : [];
  if (remainingMinutes > 0) parts.push(`<strong>${remainingMinutes}</strong> ${escapeHtml(ui.minutesUnit)}`);
  return parts.join(' ');
}

function temperatureFill(current: number, target: number): number {
  if (target <= 0) return 0;
  return Math.min(Math.max(current / target * 100, 0), 100);
}

interface TemperatureDisplayOptions {
  locale?: string;
  unit?: TemperatureUnit;
}

function formatTemperature(valueC: number, unit: TemperatureUnit, locale: string): string {
  return `${formatNumber(fromCelsius(valueC, unit), 1, locale)}${temperatureUnitSymbol(unit)}`;
}

export function renderTank(current: number, target: number, ui: WaterHeaterRecoveryTimeCalculatorUI, options: TemperatureDisplayOptions = {}): string {
  const { locale = 'en', unit = 'C' } = options;
  const fill = temperatureFill(current, target);
  return `<div class="n-tank" style="--n-fill:${fill}%" aria-label="${escapeHtml(ui.tankCurrent)} ${escapeHtml(formatTemperature(current, unit, locale))}, ${escapeHtml(ui.tankTarget)} ${escapeHtml(formatTemperature(target, unit, locale))}"><div class="n-tank-water"></div><div class="n-tank-mark n-tank-mark-current"><span>${escapeHtml(ui.tankCurrent)}</span><b>${escapeHtml(formatTemperature(current, unit, locale))}</b></div><div class="n-tank-mark n-tank-mark-target"><span>${escapeHtml(ui.tankTarget)}</span><b>${escapeHtml(formatTemperature(target, unit, locale))}</b></div><div class="n-tank-coil"></div></div>`;
}

function scenarioSummary(scenario: RecoveryScenario, ui: WaterHeaterRecoveryTimeCalculatorUI, locale: string): string {
  return `<div class="n-scenario-time">${formatDuration(scenario.recoveryMinutes, ui)}</div><div class="n-scenario-meta"><span>${formatNumber(scenario.energyKwh, 2, locale)} ${escapeHtml(ui.kilowattHoursUnit)}</span><span>${formatNumber(scenario.effectivePowerKw, 2, locale)} ${escapeHtml(ui.kilowattsUnit)} ${escapeHtml(ui.effectivePowerLabel).toLowerCase()}</span></div>`;
}

export function renderResult(result: WaterHeaterRecoveryResult, ui: WaterHeaterRecoveryTimeCalculatorUI, locale: string, unit: TemperatureUnit = 'C'): string {
  const time = result.scenario.recoveryMinutes;
  const readyAt = new Intl.DateTimeFormat(locale, { hour: '2-digit', minute: '2-digit' }).format(new Date(1970, 0, 1, 0, result.scenario.completionMinutes));
  const comparisonLabel = result.comparison ? `${ui.comparisonTitle} · ${result.comparison.recoveryMinutes < time ? ui.comparisonFaster : ui.comparisonSlower}` : '';
  const comparison = result.comparison ? `<div class="n-comparison"><span>${escapeHtml(comparisonLabel)}</span><div>${scenarioSummary(result.comparison, ui, locale)}</div></div>` : '';
  return `<div class="n-result-headline"><span>${escapeHtml(ui.recoveryTimeLabel)}</span><strong>${time > 0 ? formatDuration(time, ui) : escapeHtml(ui.noHeatingNeeded)}</strong></div><div class="n-result-facts"><div><span>${escapeHtml(ui.energyLabel)}</span><strong>${formatNumber(result.scenario.energyKwh, 2, locale)} ${escapeHtml(ui.kilowattHoursUnit)}</strong></div><div><span>${escapeHtml(ui.readyAtLabel)}</span><strong>${readyAt}</strong></div><div><span>${escapeHtml(ui.temperatureRiseLabel)}</span><strong>${escapeHtml(formatTemperature(result.temperatureRiseC, unit, locale))}</strong></div></div>${comparison}<p class="n-result-note">${time > 0 ? escapeHtml(ui.calculateNote) : escapeHtml(ui.noHeatingNeeded)}</p>`;
}
