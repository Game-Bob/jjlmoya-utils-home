export interface HumidityInput {
  roomM2: number;
  tempC: number;
  currentRH: number;
  targetRH: number;
  capacityLPerDay: number;
}

export interface HumidityResult {
  litersToExtract: number;
  runtimeHours: number;
  runtimeMinutes: number;
  moldRisk: 'high' | 'medium' | 'low';
  currentAbsHumidity: number;
  targetAbsHumidity: number;
}

function esTetens(t: number): number {
  return 6.112 * Math.exp((17.67 * t) / (t + 243.5));
}

function absHumidity(rh: number, t: number): number {
  const esPa = esTetens(t) * 100;
  return (esPa * (rh / 100) * 2.16679) / (t + 273.15);
}

export function calculateHumidity(input: HumidityInput): HumidityResult {
  const volume = input.roomM2 * 2.5;
  const currentAbs = absHumidity(input.currentRH, input.tempC);
  const targetAbs = absHumidity(input.targetRH, input.tempC);
  const liters = Math.max(0, (volume * (currentAbs - targetAbs)) / 1000);
  const capPerHour = input.capacityLPerDay / 24;
  const totalHours = capPerHour > 0 ? liters / capPerHour : 0;
  const hours = Math.floor(totalHours);
  const minutes = Math.round((totalHours - hours) * 60);

  let risk: 'high' | 'medium' | 'low' = 'low';
  if (input.currentRH >= 70 && input.tempC >= 18) {
    risk = 'high';
  } else if (input.currentRH >= 60 || (input.currentRH >= 55 && input.tempC >= 20)) {
    risk = 'medium';
  }

  return {
    litersToExtract: Math.round(liters * 100) / 100,
    runtimeHours: hours,
    runtimeMinutes: minutes,
    moldRisk: risk,
    currentAbsHumidity: Math.round(currentAbs * 100) / 100,
    targetAbsHumidity: Math.round(targetAbs * 100) / 100,
  };
}

export function fmt1(n: number): string {
  return n.toFixed(1);
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
