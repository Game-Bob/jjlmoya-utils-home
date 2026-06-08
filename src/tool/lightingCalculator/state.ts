import { calculateLighting } from './logic';
import type { LightingInput, LightingResult } from './logic';

const LS_KEY = 'lighting-calc';

export interface State {
  unitSys: 'metric' | 'imperial';
  roomType: string;
  bulbType: string;
  luxMultiplier: number;
}

export const defaultState: State = {
  unitSys: 'metric',
  roomType: 'living',
  bulbType: 'led',
  luxMultiplier: 1,
};

export function loadState(): State {
  const s = localStorage.getItem(LS_KEY);
  if (!s) return { ...defaultState };
  try {
    const v = JSON.parse(s);
    return {
      unitSys: v.unit || defaultState.unitSys,
      roomType: v.room || defaultState.roomType,
      bulbType: v.bulb || defaultState.bulbType,
      luxMultiplier: typeof v.ambient === 'number' ? v.ambient : defaultState.luxMultiplier,
    };
  } catch {
    return { ...defaultState };
  }
}

export function saveState(
  st: State,
  getNum: (id: string) => number,
) {
  const v = {
    unit: st.unitSys,
    room: st.roomType,
    bulb: st.bulbType,
    ambient: st.luxMultiplier,
    w: getNum('lc-w'),
    l: getNum('lc-l'),
    h: getNum('lc-h'),
    bw: getNum('lc-bw'),
    f: getNum('lc-f'),
  };
  localStorage.setItem(LS_KEY, JSON.stringify(v));
}

export function restoreInputs(
  getNum: (id: string) => number,
  setVal: (id: string, v: string) => void,
) {
  const s = localStorage.getItem(LS_KEY);
  if (!s) return;
  try {
    const v = JSON.parse(s);
    const ids = ['lc-w', 'lc-l', 'lc-h', 'lc-bw', 'lc-f'];
    const keys = ['w', 'l', 'h', 'bw', 'f'];
    ids.forEach((id, i) => {
      if (v[keys[i]] !== undefined) setVal(id, String(v[keys[i]]));
    });
  } catch {}
}

export function factors(unitSys: 'metric' | 'imperial') {
  return unitSys === 'metric'
    ? { rm: 1, hm: 1 }
    : { rm: 0.3048, hm: 0.3048 };
}

export function runCalc(
  st: State,
  getNum: (id: string) => number,
): LightingResult {
  const f = factors(st.unitSys);
  const input: LightingInput = {
    roomWidthM: getNum('lc-w') * f.rm,
    roomLengthM: getNum('lc-l') * f.rm,
    roomHeightM: getNum('lc-h') * f.hm,
    roomType: st.roomType,
    bulbType: st.bulbType,
    bulbWatt: getNum('lc-bw'),
    fixtures: getNum('lc-f'),
    luxMultiplier: st.luxMultiplier,
  };
  return calculateLighting(input);
}

export function updateUnitLabels(
  unitSys: 'metric' | 'imperial',
  setTxt: (id: string, v: string) => void,
) {
  const isM = unitSys === 'metric';
  setTxt('lc-w-u', isM ? 'm' : 'ft');
  setTxt('lc-l-u', isM ? 'm' : 'ft');
  setTxt('lc-h-u', isM ? 'm' : 'ft');
}

export function convertValue(
  id: string,
  getNum: (id: string) => number,
  setVal: (id: string, v: string) => void,
  toMetric: boolean,
) {
  const factor = toMetric ? 0.3048 : 1 / 0.3048;
  const v = getNum(id);
  setVal(id, String(Math.round(v * factor * 10) / 10));
}
