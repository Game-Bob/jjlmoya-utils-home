export interface BatteryLoad {
  id: number;
  name: string;
  watts: number;
  hours: number;
}

export interface BatteryAutonomyInput {
  capacityKwh: number;
  initialChargePercent: number;
  efficiencyPercent: number;
  loads: BatteryLoad[];
}

export interface BatteryAutonomyResult {
  storedEnergyKwh: number;
  availableEnergyKwh: number;
  totalDemandKwh: number;
  totalPowerW: number;
  autonomyHours: number;
  remainingEnergyKwh: number;
  deficitKwh: number;
  coveragePercent: number;
  biggestLoad?: BatteryLoad;
}

const nonNegative = (value: number): number => (Number.isFinite(value) ? Math.max(0, value) : 0);

export const calculateBatteryAutonomy = (input: BatteryAutonomyInput): BatteryAutonomyResult => {
  const capacityKwh = nonNegative(input.capacityKwh);
  const charge = Math.min(100, nonNegative(input.initialChargePercent));
  const efficiency = Math.min(100, nonNegative(input.efficiencyPercent)) / 100;
  const loads = input.loads.filter((load) => nonNegative(load.watts) > 0 && nonNegative(load.hours) > 0);
  const totalPowerW = loads.reduce((sum, load) => sum + nonNegative(load.watts), 0);
  const totalDemandKwh = loads.reduce((sum, load) => sum + (nonNegative(load.watts) * nonNegative(load.hours)) / 1000, 0);
  const storedEnergyKwh = capacityKwh * (charge / 100);
  const availableEnergyKwh = storedEnergyKwh * efficiency;
  const autonomyHours = totalPowerW > 0 ? (availableEnergyKwh * 1000) / totalPowerW : 0;
  const remainingEnergyKwh = availableEnergyKwh - totalDemandKwh;
  const deficitKwh = Math.max(0, -remainingEnergyKwh);
  const coveragePercent = totalDemandKwh > 0 ? Math.min(100, (availableEnergyKwh / totalDemandKwh) * 100) : 0;
  const biggestLoad = loads.reduce<BatteryLoad | undefined>((biggest, load) => {
    if (!biggest || load.watts * load.hours > biggest.watts * biggest.hours) return load;
    return biggest;
  }, undefined);
  return { storedEnergyKwh, availableEnergyKwh, totalDemandKwh, totalPowerW, autonomyHours, remainingEnergyKwh, deficitKwh, coveragePercent, ...(biggestLoad ? { biggestLoad } : {}) };
};
