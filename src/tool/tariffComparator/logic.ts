export const SEASONAL_WEIGHTS = [1.2, 1.1, 0.9, 0.8, 0.7, 0.8, 1.3, 1.4, 0.9, 0.8, 1.0, 1.1];

const PRICES = {
  market: { power: 32.5, energy: 0.145 },
  free: { power: 38.0, energy: 0.165 },
};

export interface TariffInput {
  consumptionKwh: number;
  powerKw: number;
  solarReduction: boolean;
  shiftPercent: number;
}

export interface TariffResult {
  effectiveConsumption: number;
  marketTotal: number;
  marketPower: number;
  marketEnergy: number;
  freeTotal: number;
  freePower: number;
  freeEnergy: number;
  maxPowerKw: number;
  co2Kg: number;
  monthlyData: number[];
}

export function calculateTariffs(input: TariffInput): TariffResult {
  const eff = input.solarReduction ? input.consumptionKwh * 0.7 : input.consumptionKwh;
  const shift = input.shiftPercent / 100;
  const mp = input.powerKw * PRICES.market.power;
  const me = eff * (PRICES.market.energy * (1 - shift * 0.2));
  const fp = input.powerKw * PRICES.free.power;
  const fe = eff * PRICES.free.energy;
  return {
    effectiveConsumption: eff,
    marketTotal: mp + me,
    marketPower: mp,
    marketEnergy: me,
    freeTotal: fp + fe,
    freePower: fp,
    freeEnergy: fe,
    maxPowerKw: input.powerKw * 0.9,
    co2Kg: Math.round(eff * 0.19),
    monthlyData: SEASONAL_WEIGHTS.map(w => (eff / 12) * w),
  };
}
