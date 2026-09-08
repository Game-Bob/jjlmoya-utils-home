import { describe, expect, it } from 'vitest';
import { calculateRecoveryScenario, calculateWaterHeaterRecovery } from './logic';

describe('water heater recovery time', () => {
  it('converts volume and temperature rise into ideal recovery time', () => {
    const result = calculateWaterHeaterRecovery({ volumeL: 150, currentTempC: 35, targetTempC: 55, powerKw: 2, efficiencyPct: 90, startMinutes: 420, comparePowerKw: null, compareEfficiencyPct: null });
    expect(result.temperatureRiseC).toBe(20);
    expect(result.scenario.energyKwh).toBeCloseTo(3.48, 5);
    expect(result.scenario.effectivePowerKw).toBeCloseTo(1.8, 5);
    expect(result.scenario.recoveryMinutes).toBeCloseTo(116, 3);
    expect(result.scenario.completionMinutes).toBeCloseTo(536, 3);
  });

  it('returns no heat when the tank is already at or above target', () => {
    const scenario = calculateRecoveryScenario({ volumeL: 100, currentTempC: 60, targetTempC: 55, powerKw: 2, efficiencyPct: 90, startMinutes: 100 });
    expect(scenario.energyKwh).toBe(0);
    expect(scenario.recoveryMinutes).toBe(0);
  });

  it('keeps an optional comparison separate from the main setup', () => {
    const result = calculateWaterHeaterRecovery({ volumeL: 100, currentTempC: 20, targetTempC: 50, powerKw: 2, efficiencyPct: 80, startMinutes: 0, comparePowerKw: 3, compareEfficiencyPct: 90 });
    expect(result.comparison).not.toBeNull();
    expect(result.comparison!.recoveryMinutes).toBeLessThan(result.scenario.recoveryMinutes);
  });

  it('does not divide by zero when useful power is unavailable', () => {
    const scenario = calculateRecoveryScenario({ volumeL: 100, currentTempC: 20, targetTempC: 50, powerKw: 0, efficiencyPct: 90, startMinutes: 0 });
    expect(scenario.energyKwh).toBeCloseTo(3.48, 5);
    expect(scenario.recoveryMinutes).toBe(0);
    expect(Number.isFinite(scenario.recoveryHours)).toBe(true);
  });
});
