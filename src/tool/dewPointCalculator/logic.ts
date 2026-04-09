export type MoldRisk = 'low' | 'medium' | 'high' | 'extreme';

export function calculateDewPoint(temp: number, humidity: number): number {
  const b = 17.625;
  const c = 243.04;
  const alpha = Math.log(humidity / 100) + (b * temp) / (c + temp);
  return (c * alpha) / (b - alpha);
}

export function getMoldRisk(temp: number, dewPoint: number): MoldRisk {
  const diff = temp - dewPoint;
  if (diff > 5) return 'low';
  if (diff > 3) return 'medium';
  if (diff > 1) return 'high';
  return 'extreme';
}
