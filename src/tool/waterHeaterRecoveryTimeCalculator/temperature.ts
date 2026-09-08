export type TemperatureUnit = 'C' | 'F';

export function toCelsius(value: number, unit: TemperatureUnit): number {
  return unit === 'F' ? (value - 32) * 5 / 9 : value;
}

export function fromCelsius(value: number, unit: TemperatureUnit): number {
  return unit === 'F' ? value * 9 / 5 + 32 : value;
}

export function temperatureUnitSymbol(unit: TemperatureUnit): string {
  return unit === 'F' ? '°F' : '°C';
}

export function isTemperatureUnit(value: string): value is TemperatureUnit {
  return value === 'C' || value === 'F';
}
