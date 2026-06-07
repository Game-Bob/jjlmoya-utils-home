export interface DeviceInput {
  name: string;
  watts: number;
  hoursPerDay: number;
}

export interface VampireDrawResult {
  totalWatts: number;
  annualKwh: number;
  annualCost: number;
  monthlyCost: number;
  deviceCount: number;
  category: 'low' | 'moderate' | 'high' | 'extreme';
}

export function calculateVampireDraw(devices: DeviceInput[], pricePerKwh: number): VampireDrawResult {
  const totalWatts = devices.reduce((sum, d) => sum + d.watts, 0);
  const annualKwh = devices.reduce((sum, d) => sum + (d.watts * d.hoursPerDay * 365) / 1000, 0);
  const annualCost = annualKwh * pricePerKwh;
  const monthlyCost = annualCost / 12;
  const deviceCount = devices.length;
  let category: 'low' | 'moderate' | 'high' | 'extreme' = 'low';
  if (annualKwh > 500) category = 'extreme';
  else if (annualKwh > 250) category = 'high';
  else if (annualKwh > 100) category = 'moderate';
  return { totalWatts, annualKwh, annualCost, monthlyCost, deviceCount, category };
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
