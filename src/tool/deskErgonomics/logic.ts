export interface ErgoResult {
  chairHeight: number;
  deskHeight: number;
  monitorHeight: number;
  monitorDistance: number;
  viewAngle: number;
  elbowAngle: number;
  isGood: boolean;
}

function sitValues(h: number) {
  return {
    chairHeight: Math.round(h * 0.25),
    deskHeight: Math.round(h * 0.28),
    monitorHeight: Math.round(h * 0.48),
    monitorDistance: Math.round(h * 0.38),
    viewAngle: -15,
    elbowAngle: 90,
  };
}

function standValues(h: number) {
  return {
    chairHeight: 0,
    deskHeight: Math.round(h * 0.43),
    monitorHeight: Math.round(h * 0.72),
    monitorDistance: Math.round(h * 0.38),
    viewAngle: -15,
    elbowAngle: 90,
  };
}

export function calculateErgonomics(
  heightCm: number,
  gender: 'male' | 'female',
  mode: 'sit' | 'stand',
): ErgoResult {
  const ratio = gender === 'female' ? 0.96 : 1.0;
  const vals = mode === 'sit' ? sitValues(heightCm * ratio) : standValues(heightCm * ratio);
  return { ...vals, isGood: heightCm >= 150 && heightCm <= 200 };
}

export function fmt0(n: number): string {
  return Math.round(n).toString();
}

export function clamp(val: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, val));
}
