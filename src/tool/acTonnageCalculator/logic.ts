export interface AcInput {
  area: number;
  ceilingHeight: number;
  people: number;
  heatSources: number;
  sunExposure: 'light' | 'medium' | 'heavy';
  roomType: 'bedroom' | 'living' | 'kitchen' | 'office' | 'server';
}

export interface AcResult {
  btu: number;
  frigorias: number;
  tons: number;
  breakdown: { key: string; value: number }[];
}

const BASE_BTU_PER_SQ_M = 600;

const SUN_MULT: Record<string, number> = {
  light: 1,
  medium: 1.15,
  heavy: 1.35,
};

const ROOM_MULT: Record<string, number> = {
  bedroom: 1,
  living: 1.1,
  kitchen: 1.25,
  office: 1.15,
  server: 1.6,
};

export function calculateAcTonnage(input: AcInput): AcResult {
  const areaFactor = input.area * BASE_BTU_PER_SQ_M;
  const heightFactor = input.ceilingHeight > 2.7 ? 1 + (input.ceilingHeight - 2.7) * 0.08 : 1;
  const peopleFactor = input.people * 500;
  const heatFactor = input.heatSources * 400;

  const rawBtu = (areaFactor * heightFactor * SUN_MULT[input.sunExposure] * ROOM_MULT[input.roomType]) + peopleFactor + heatFactor;
  const btu = Math.round(rawBtu / 1000) * 1000;
  const frigorias = Math.round(btu / 3.968 / 100) * 100;
  const tons = Math.round((btu / 12000) * 10) / 10;

  return {
    btu,
    frigorias,
    tons,
    breakdown: [
      { key: 'baseCooling', value: Math.round(areaFactor) },
      { key: 'ceilingHeight', value: Math.round(areaFactor * (heightFactor - 1)) },
      { key: 'people', value: peopleFactor },
      { key: 'heatSources', value: heatFactor },
      { key: 'sunRoom', value: Math.round(rawBtu - areaFactor - peopleFactor - heatFactor - (areaFactor * (heightFactor - 1))) },
    ],
  };
}
