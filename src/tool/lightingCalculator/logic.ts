export interface LightingInput {
  roomWidthM: number;
  roomLengthM: number;
  roomHeightM: number;
  workPlaneM: number;
  roomType: string;
  reflectance: 'low' | 'medium' | 'high';
  bulbType: string;
  bulbWatt: number;
  fixtures: number;
  dimmer: number;
}

export interface LightingResult {
  roomArea: number;
  targetLux: number;
  requiredLumens: number;
  bulbLumens: number;
  currentLumens: number;
  currentLux: number;
  bulbsNeeded: number;
  utilizationFactor: number;
  maintenanceFactor: number;
  status: 'optimal' | 'insufficient' | 'excess';
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

const UTILIZATION: Record<string, Record<string, number>> = {
  low: { low: 0.35, medium: 0.45, high: 0.55 },
  medium: { low: 0.45, medium: 0.55, high: 0.65 },
  high: { low: 0.55, medium: 0.65, high: 0.75 },
};

function getRoomIndex(roomHeightM: number): 'low' | 'medium' | 'high' {
  if (roomHeightM <= 2.5) return 'low';
  if (roomHeightM <= 3.5) return 'medium';
  return 'high';
}

export function calculateLighting(i: LightingInput): LightingResult {
  const roomArea = i.roomWidthM * i.roomLengthM;
  const targetLux = LUX_TARGETS[i.roomType] ?? 150;
  const roomIndex = getRoomIndex(i.roomHeightM);
  const utilizationFactor = UTILIZATION[roomIndex][i.reflectance] ?? 0.5;
  const maintenanceFactor = 0.8;
  const requiredLumens = Math.ceil((targetLux * roomArea) / (utilizationFactor * maintenanceFactor));
  const bulbLumens = i.bulbWatt * (LUMENS_PER_WATT[i.bulbType] ?? 100);
  const currentLumens = Math.round(bulbLumens * i.fixtures * (i.dimmer / 100));
  const currentLux = Math.round(currentLumens * utilizationFactor * maintenanceFactor / roomArea);
  const bulbsNeeded = Math.ceil(requiredLumens / (bulbLumens || 1));
  let status: 'optimal' | 'insufficient' | 'excess' = 'optimal';
  if (currentLux < targetLux * 0.9) status = 'insufficient';
  if (currentLux > targetLux * 1.3) status = 'excess';
  return {
    roomArea,
    targetLux,
    requiredLumens,
    bulbLumens,
    currentLumens,
    currentLux,
    bulbsNeeded,
    utilizationFactor,
    maintenanceFactor,
    status,
  };
}

export function fmt0(n: number): string { return String(Math.round(n)); }
export function fmt1(n: number): string { return n.toFixed(1); }
export function fmt2(n: number): string { return n.toFixed(2); }
