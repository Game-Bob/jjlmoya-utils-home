import type { WaterHeaterRecoveryInput } from './logic';
import type { TemperatureUnit } from './temperature';

const STORAGE_KEY = 'jjlmoya-water-heater-recovery';
const UNIT_STORAGE_KEY = 'jjlmoya-water-heater-temperature-unit';

export function loadRecoveryInput(fallback: WaterHeaterRecoveryInput): WaterHeaterRecoveryInput {
  if (typeof localStorage === 'undefined') return fallback;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return fallback;
    const parsed = JSON.parse(stored) as Partial<WaterHeaterRecoveryInput>;
    return {
      ...fallback,
      ...parsed,
      comparePowerKw: typeof parsed.comparePowerKw === 'number' ? parsed.comparePowerKw : fallback.comparePowerKw,
      compareEfficiencyPct: typeof parsed.compareEfficiencyPct === 'number' ? parsed.compareEfficiencyPct : fallback.compareEfficiencyPct,
    };
  } catch {
    return fallback;
  }
}

export function saveRecoveryInput(input: WaterHeaterRecoveryInput): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
  } catch {}
}

export function loadTemperatureUnit(): TemperatureUnit {
  if (typeof localStorage === 'undefined') return 'C';
  try {
    return localStorage.getItem(UNIT_STORAGE_KEY) === 'F' ? 'F' : 'C';
  } catch {
    return 'C';
  }
}

export function saveTemperatureUnit(unit: TemperatureUnit): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.setItem(UNIT_STORAGE_KEY, unit);
  } catch {}
}
