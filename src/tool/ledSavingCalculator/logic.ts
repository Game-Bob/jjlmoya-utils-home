export interface LedSavingInput {
  numBulbs: number;
  oldWatts: number;
  ledWatts: number;
  hoursPerDay: number;
  pricePerKwh: number;
}

export interface LedSavingResult {
  annualKwh: number;
  annualEuro: number;
  monthlyEuro: number;
  co2Kg: number;
  efficiency: number;
}

export function calculateLedSaving(input: LedSavingInput): LedSavingResult {
  const { numBulbs, oldWatts, ledWatts, hoursPerDay, pricePerKwh } = input;
  const oldAnnualKwh = (numBulbs * oldWatts * hoursPerDay * 365) / 1000;
  const ledAnnualKwh = (numBulbs * ledWatts * hoursPerDay * 365) / 1000;
  const annualKwh = oldAnnualKwh - ledAnnualKwh;
  const annualEuro = annualKwh * pricePerKwh;
  const monthlyEuro = annualEuro / 12;
  const co2Kg = annualKwh * 0.25;
  const efficiency = oldWatts > 0 ? Math.round(((oldWatts - ledWatts) / oldWatts) * 100) : 0;
  return { annualKwh, annualEuro, monthlyEuro, co2Kg, efficiency };
}

export function fmt2(n: number): string {
  return n.toFixed(2);
}
