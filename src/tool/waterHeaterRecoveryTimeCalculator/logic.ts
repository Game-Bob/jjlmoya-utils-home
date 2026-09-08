export interface WaterHeaterRecoveryInput {
  volumeL: number;
  currentTempC: number;
  targetTempC: number;
  powerKw: number;
  efficiencyPct: number;
  startMinutes: number;
  comparePowerKw: number | null;
  compareEfficiencyPct: number | null;
}

export interface RecoveryScenario {
  energyKwh: number;
  effectivePowerKw: number;
  recoveryHours: number;
  recoveryMinutes: number;
  completionMinutes: number;
}

export interface WaterHeaterRecoveryResult {
  temperatureRiseC: number;
  scenario: RecoveryScenario;
  comparison: RecoveryScenario | null;
}

const WH_PER_LITRE_DEGREE = 1.16;
const MINUTES_PER_DAY = 24 * 60;

function positive(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function completionMinutes(startMinutes: number, durationHours: number): number {
  const safeStart = Math.min(Math.max(positive(startMinutes), 0), MINUTES_PER_DAY - 1);
  return (safeStart + durationHours * 60) % MINUTES_PER_DAY;
}

export function calculateRecoveryScenario(
  input: Pick<WaterHeaterRecoveryInput, 'volumeL' | 'currentTempC' | 'targetTempC' | 'powerKw' | 'efficiencyPct' | 'startMinutes'>,
): RecoveryScenario {
  const volume = positive(input.volumeL);
  const rise = Math.max(input.targetTempC - input.currentTempC, 0);
  const energyKwh = volume * rise * WH_PER_LITRE_DEGREE / 1000;
  const effectivePowerKw = positive(input.powerKw) * Math.min(Math.max(input.efficiencyPct, 0), 100) / 100;
  const recoveryHours = effectivePowerKw > 0 ? energyKwh / effectivePowerKw : 0;
  const recoveryMinutes = recoveryHours * 60;
  return {
    energyKwh,
    effectivePowerKw,
    recoveryHours,
    recoveryMinutes,
    completionMinutes: completionMinutes(input.startMinutes, recoveryHours),
  };
}

export function calculateWaterHeaterRecovery(input: WaterHeaterRecoveryInput): WaterHeaterRecoveryResult {
  const temperatureRiseC = Math.max(input.targetTempC - input.currentTempC, 0);
  const scenario = calculateRecoveryScenario(input);
  const hasComparison = positive(input.comparePowerKw ?? 0) > 0 && positive(input.compareEfficiencyPct ?? 0) > 0;
  const comparison = hasComparison
    ? calculateRecoveryScenario({ ...input, powerKw: input.comparePowerKw ?? 0, efficiencyPct: input.compareEfficiencyPct ?? 0 })
    : null;
  return { temperatureRiseC, scenario, comparison };
}
