export interface ApplianceProfile {
  id: 'washer' | 'dishwasher' | 'dryer';
  kwhEco: number;
  kwhNormal: number;
  kwhIntensive: number;
  litersEco: number;
  litersNormal: number;
  litersIntensive: number;
  detergentEco: number;
  detergentNormal: number;
  detergentIntensive: number;
}

export interface CostResult {
  electricityCost: number;
  waterCost: number;
  detergentCost: number;
  totalCost: number;
  annualCost: number;
  kwhUsed: number;
  litersUsed: number;
  isPeak: boolean;
  ecoSavingsPerYear: number;
  ecoSavingsMonthsDetergent: number;
}

export interface CostInput {
  applianceId: string;
  cycle: 'eco' | 'normal' | 'intensive';
  electricityPrice: number;
  waterPrice: number;
  detergentEnabled: boolean;
  hour: number;
  cyclesPerWeek: number;
}

export const APPLIANCE_PROFILES: Record<string, ApplianceProfile> = {
  washer: {
    id: 'washer',
    kwhEco: 0.45, kwhNormal: 0.75, kwhIntensive: 1.2,
    litersEco: 40, litersNormal: 55, litersIntensive: 70,
    detergentEco: 0.15, detergentNormal: 0.25, detergentIntensive: 0.4,
  },
  dishwasher: {
    id: 'dishwasher',
    kwhEco: 0.6, kwhNormal: 1.0, kwhIntensive: 1.5,
    litersEco: 8, litersNormal: 12, litersIntensive: 16,
    detergentEco: 0.2, detergentNormal: 0.3, detergentIntensive: 0.5,
  },
  dryer: {
    id: 'dryer',
    kwhEco: 1.5, kwhNormal: 2.5, kwhIntensive: 3.5,
    litersEco: 0, litersNormal: 0, litersIntensive: 0,
    detergentEco: 0, detergentNormal: 0, detergentIntensive: 0,
  },
};

export const PEAK_HOURS = new Set([8, 9, 10, 11, 18, 19, 20, 21]);
export const PEAK_MULTIPLIER = 1.35;

function getProfileValue(profile: ApplianceProfile, cycle: string, prefix: string): number {
  return profile[`${prefix}${cycle.charAt(0).toUpperCase()}${cycle.slice(1)}` as keyof ApplianceProfile] as number;
}

interface SavingsInput {
  profile: ApplianceProfile;
  hour: number;
  elec: number;
  water: number;
  det: boolean;
  cycles: number;
}

function calcSavings(s: SavingsInput): number {
  const kwhNormal = s.profile.kwhNormal;
  const litersNormal = s.profile.litersNormal;
  const detergentNormal = s.profile.detergentNormal;
  const isPeak = PEAK_HOURS.has(s.hour);
  const mult = isPeak ? PEAK_MULTIPLIER : 1;
  const normalTotal = (kwhNormal * s.elec * mult) + (litersNormal * s.water) + (s.det ? detergentNormal : 0);
  const ecoTotal = (s.profile.kwhEco * s.elec * mult) + (s.profile.litersEco * s.water) + (s.det ? s.profile.detergentEco : 0);
  return (normalTotal - ecoTotal) * s.cycles * 52;
}

export function calculateCycleCost(input: CostInput): CostResult {
  const profile = APPLIANCE_PROFILES[input.applianceId];
  if (!profile) {
    return {
      electricityCost: 0, waterCost: 0, detergentCost: 0, totalCost: 0, annualCost: 0,
      kwhUsed: 0, litersUsed: 0, isPeak: false, ecoSavingsPerYear: 0, ecoSavingsMonthsDetergent: 0,
    };
  }

  const kwh = getProfileValue(profile, input.cycle, 'kwh');
  const liters = getProfileValue(profile, input.cycle, 'liters');
  const detergentUnit = getProfileValue(profile, input.cycle, 'detergent');

  const isPeak = PEAK_HOURS.has(input.hour);
  const multiplier = isPeak ? PEAK_MULTIPLIER : 1;

  const electricityCost = kwh * input.electricityPrice * multiplier;
  const waterCost = liters * input.waterPrice;
  const detergentCost = input.detergentEnabled ? detergentUnit : 0;
  const totalCost = electricityCost + waterCost + detergentCost;
  const annualCost = totalCost * input.cyclesPerWeek * 52;

  const ecoSavingsPerYear = calcSavings({
    profile, hour: input.hour, elec: input.electricityPrice,
    water: input.waterPrice, det: input.detergentEnabled, cycles: input.cyclesPerWeek,
  });
  const monthlyDetergentCost = (profile.detergentNormal * input.cyclesPerWeek * 52) / 12;
  const ecoSavingsMonthsDetergent = ecoSavingsPerYear > 0 && monthlyDetergentCost > 0 ? Math.floor(ecoSavingsPerYear / monthlyDetergentCost) : 0;

  return {
    electricityCost, waterCost, detergentCost, totalCost, annualCost,
    kwhUsed: kwh, litersUsed: liters, isPeak, ecoSavingsPerYear, ecoSavingsMonthsDetergent,
  };
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
