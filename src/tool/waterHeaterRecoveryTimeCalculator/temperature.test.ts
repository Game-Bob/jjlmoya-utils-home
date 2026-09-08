import { describe, expect, it } from 'vitest';
import { fromCelsius, temperatureUnitSymbol, toCelsius } from './temperature';

describe('water heater temperature units', () => {
  it('converts Fahrenheit input to Celsius for the calculation', () => {
    expect(toCelsius(95, 'F')).toBeCloseTo(35, 5);
    expect(toCelsius(131, 'F')).toBeCloseTo(55, 5);
  });

  it('converts Celsius results back to Fahrenheit for display', () => {
    expect(fromCelsius(35, 'F')).toBeCloseTo(95, 5);
    expect(fromCelsius(55, 'F')).toBeCloseTo(131, 5);
  });

  it('uses an explicit symbol for each display unit', () => {
    expect(temperatureUnitSymbol('C')).toBe('°C');
    expect(temperatureUnitSymbol('F')).toBe('°F');
  });
});
