export interface WaterSoftenerInput {
  hardnessValue: number;
  hardnessUnit: 'gpg' | 'fH';
  occupants: number;
  softenerGrains: number;
}

export interface HardnessCategory {
  key: string;
  label: string;
  color: string;
}

export interface SaltResult {
  annualSaltKg: number;
  bagsPerYear: number;
  daysPerBag: number;
  weeksPerBag: number;
}

export interface ApplianceResult {
  baseline: number;
  withHardness: number;
  saved: number;
}

export interface ScaleResult {
  rateMmPerYear: number;
}

const CATEGORIES: HardnessCategory[] = [
  { key: 'soft', label: 'Soft', color: '#60a5fa' },
  { key: 'slightly', label: 'Slightly Hard', color: '#818cf8' },
  { key: 'moderate', label: 'Moderately Hard', color: '#c084fc' },
  { key: 'hard', label: 'Hard', color: '#f472b6' },
  { key: 'very', label: 'Very Hard', color: '#fb923c' },
  { key: 'extreme', label: 'Extremely Hard', color: '#9ca3af' },
];

export function toGpg(value: number, unit: 'gpg' | 'fH'): number {
  return unit === 'fH' ? value * 0.584 : value;
}

export function getHardnessCategory(gpg: number): HardnessCategory {
  if (gpg < 3.5) return CATEGORIES[0];
  if (gpg < 7.0) return CATEGORIES[1];
  if (gpg < 10.5) return CATEGORIES[2];
  if (gpg < 14.0) return CATEGORIES[3];
  if (gpg < 21.0) return CATEGORIES[4];
  return CATEGORIES[5];
}

export function calculateScale(gpg: number): ScaleResult {
  return { rateMmPerYear: Math.round(gpg * 0.15 * 10) / 10 };
}

export function calculateSalt(input: WaterSoftenerInput): SaltResult {
  const gpg = toGpg(input.hardnessValue, input.hardnessUnit);
  const dailyGallons = input.occupants * 80;
  const dailyGrains = gpg * dailyGallons;
  const annualGrains = dailyGrains * 365;
  const regensPerYear = annualGrains / input.softenerGrains;
  const saltLbPerRegen = input.softenerGrains / 3333;
  const annualSaltLb = regensPerYear * saltLbPerRegen;
  const annualSaltKg = Math.round(annualSaltLb * 0.4536 * 10) / 10;
  const bagsPerYear = annualSaltKg / 25;
  const daysPerBag = bagsPerYear > 0 ? 365 / bagsPerYear : 0;
  return {
    annualSaltKg,
    bagsPerYear: Math.round(bagsPerYear * 10) / 10,
    daysPerBag: Math.round(daysPerBag),
    weeksPerBag: Math.round(daysPerBag / 7 * 10) / 10,
  };
}

export function calculateApplianceLifespan(gpg: number): Record<string, ApplianceResult> {
  const factor = Math.max(0, (gpg - 3.5) / 21);
  const f = (base: number, loss: number) => {
    const withH = Math.round(base * (1 - loss * factor) * 10) / 10;
    return { baseline: base, withHardness: withH, saved: Math.round((base - withH) * 10) / 10 };
  };
  return {
    washer: f(11, 0.35),
    heater: f(12, 0.45),
    coffee: f(6, 0.25),
  };
}

export function mmToInches(mm: number): number {
  return Math.round((mm / 25.4) * 100) / 100;
}

export function kgToLbs(kg: number): number {
  return Math.round(kg * 2.20462 * 10) / 10;
}

export function fmt1(n: number): string {
  return n.toFixed(1);
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
