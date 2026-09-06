import { describe, expect, it } from 'vitest';
import { calculateBatteryAutonomy } from './logic';

describe('calculateBatteryAutonomy', () => {
  it('converts scheduled loads to energy and autonomy', () => {
    const result = calculateBatteryAutonomy({ capacityKwh: 5, initialChargePercent: 80, efficiencyPercent: 90, loads: [{ id: 1, name: 'Router', watts: 100, hours: 4 }] });
    expect(result.availableEnergyKwh).toBeCloseTo(3.6);
    expect(result.totalDemandKwh).toBeCloseTo(0.4);
    expect(result.autonomyHours).toBeCloseTo(36);
  });

  it('reports a shortfall when planned demand exceeds available energy', () => {
    const result = calculateBatteryAutonomy({ capacityKwh: 1, initialChargePercent: 50, efficiencyPercent: 80, loads: [{ id: 1, name: 'Heater', watts: 1000, hours: 2 }] });
    expect(result.deficitKwh).toBeCloseTo(1.6);
    expect(result.coveragePercent).toBeCloseTo(20);
    expect(result.biggestLoad?.name).toBe('Heater');
  });

  it('ignores empty or invalid loads without crashing', () => {
    const result = calculateBatteryAutonomy({ capacityKwh: 2, initialChargePercent: 100, efficiencyPercent: 90, loads: [{ id: 1, name: 'Empty', watts: 0, hours: 8 }, { id: 2, name: 'Bad', watts: -20, hours: 4 }] });
    expect(result.totalPowerW).toBe(0);
    expect(result.totalDemandKwh).toBe(0);
    expect(result.autonomyHours).toBe(0);
  });
});
