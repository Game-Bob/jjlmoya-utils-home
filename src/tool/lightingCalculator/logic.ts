export interface LightingInput {
  roomWidthM: number;
  roomLengthM: number;
  roomHeightM: number;
  roomType: string;
  bulbType: string;
  bulbWatt: number;
  fixtures: number;
  luxMultiplier: number;
}

export interface LightingResult {
  roomArea: number;
  targetLux: number;
  requiredLumens: number;
  bulbLumens: number;
  currentLux: number;
  bulbsNeeded: number;
  optimalBulbs: number;
  optimalWatt: number;
  utilizationFactor: number;
  status: 'optimal' | 'insufficient' | 'excess';
  luxRatio: number;
  sensoryContext: string;
  suggestedProducts: string;
}

const LUX_TARGETS: Record<string, number> = {
  living: 150,
  kitchen: 300,
  bedroom: 100,
  bathroom: 200,
  office: 500,
  hallway: 100,
};

const LUMENS_PER_WATT: Record<string, number> = {
  led: 100,
  cfl: 60,
  halogen: 20,
  incandescent: 15,
};

const UF_MAP: Record<string, number> = {
  low: 0.55,
  medium: 0.50,
  high: 0.45,
};

function getUF(roomHeightM: number): number {
  if (roomHeightM <= 2.5) return UF_MAP.low;
  if (roomHeightM <= 3.5) return UF_MAP.medium;
  return UF_MAP.high;
}

function getSensoryContext(currentLux: number, targetLux: number): string {
  const ratio = targetLux > 0 ? currentLux / targetLux : 0;
  if (ratio < 0.3) return 'Like a dark corridor. You need significantly more light.';
  if (ratio < 0.6) return 'Like a dim restaurant. Good for atmosphere, but not for daily tasks.';
  if (ratio < 0.9) return 'Getting there. Like a cozy evening, but slightly too dark for comfort.';
  if (ratio <= 1.3) return 'Perfectly balanced. Like a comfortable living room during the day.';
  if (ratio <= 1.8) return 'Bright and energetic. Like a well-lit office or kitchen.';
  return 'Very intense. Like a hospital or studio. Consider dimming for comfort.';
}

function getSuggestedProducts(
  bulbsNeeded: number,
  bulbType: string,
  optimalWatt: number,
): string {
  const typeName = bulbType.toUpperCase();
  const watt = Math.round(optimalWatt);
  const lumens = bulbsNeeded * watt * (LUMENS_PER_WATT[bulbType] ?? 100);
  return `${bulbsNeeded} x ${typeName} ${watt}W (${lumens} lm)`;
}

function getStatus(currentLux: number, targetLux: number): 'optimal' | 'insufficient' | 'excess' {
  if (currentLux < targetLux * 0.9) return 'insufficient';
  if (currentLux > targetLux * 1.3) return 'excess';
  return 'optimal';
}

function getLuxRatio(currentLux: number, targetLux: number): number {
  return targetLux > 0 ? currentLux / targetLux : 0;
}

function computeLighting(i: LightingInput) {
  const roomArea = i.roomWidthM * i.roomLengthM;
  const baseLux = LUX_TARGETS[i.roomType] ?? 150;
  const targetLux = Math.round(baseLux * i.luxMultiplier);
  const utilizationFactor = getUF(i.roomHeightM);
  const maintenanceFactor = 0.8;
  const requiredLumens = Math.ceil((targetLux * roomArea) / (utilizationFactor * maintenanceFactor));
  const bulbLumens = i.bulbWatt * (LUMENS_PER_WATT[i.bulbType] ?? 100);
  const currentLumens = bulbLumens * i.fixtures;
  const currentLux = Math.round(currentLumens * utilizationFactor * maintenanceFactor / roomArea);
  const bulbsNeeded = Math.ceil(requiredLumens / (bulbLumens || 1));
  const optimalBulbs = bulbsNeeded;
  const optimalWatt = Math.ceil(requiredLumens / (optimalBulbs * (LUMENS_PER_WATT[i.bulbType] ?? 100)));
  return {
    roomArea, targetLux, requiredLumens, bulbLumens, currentLux,
    bulbsNeeded, optimalBulbs, optimalWatt, utilizationFactor,
  };
}

export function calculateLighting(i: LightingInput): LightingResult {
  const c = computeLighting(i);
  const luxRatio = getLuxRatio(c.currentLux, c.targetLux);
  const status = getStatus(c.currentLux, c.targetLux);
  return {
    ...c,
    status,
    luxRatio,
    sensoryContext: getSensoryContext(c.currentLux, c.targetLux),
    suggestedProducts: getSuggestedProducts(c.optimalBulbs, i.bulbType, c.optimalWatt),
  };
}

export function fmt0(n: number): string { return String(Math.round(n)); }
export function fmt1(n: number): string { return n.toFixed(1); }
