import type { WaterHeaterRecoveryInput } from './logic';

export type RecoveryStatus = 'ready' | 'no-rise' | 'invalid';

export function evaluateRecoveryInput(input: WaterHeaterRecoveryInput): RecoveryStatus {
  const required = [input.volumeL, input.powerKw, input.efficiencyPct];
  if (required.some((value) => !Number.isFinite(value) || value <= 0) || input.efficiencyPct > 100) return 'invalid';
  if (![input.currentTempC, input.targetTempC, input.startMinutes].every(Number.isFinite)) return 'invalid';
  if (input.startMinutes < 0 || input.startMinutes >= 1440) return 'invalid';
  return input.targetTempC <= input.currentTempC ? 'no-rise' : 'ready';
}
