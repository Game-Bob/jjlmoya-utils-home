import { describe, expect, it } from 'vitest';
import { calculateWallpaperRolls, formatLength, formatMetres, fromCentimetres, getCutLengthCm, toCentimetres } from './logic';

describe('wallpaper roll calculator', () => {
  it('rounds a patterned wall height to the next full repeat', () => {
    expect(getCutLengthCm(250, 53)).toBe(265);
    expect(getCutLengthCm(250, 0)).toBe(250);
  });

  it('calculates rolls from drops, repeat and waste allowance', () => {
    const result = calculateWallpaperRolls({
      roomWidthCm: 350,
      wallHeightCm: 250,
      rollWidthCm: 53,
      rollLengthCm: 1000,
      patternRepeatCm: 53,
      wasteAllowancePercent: 10,
    });

    expect(result).toMatchObject({
      dropsNeeded: 7,
      cutLengthCm: 265,
      dropsPerRoll: 3,
      rollsNeeded: 3,
      purchasedLengthCm: 3000,
      leftoverLengthCm: 1145,
    });
  });

  it('returns null for impossible or invalid measurements', () => {
    expect(calculateWallpaperRolls({
      roomWidthCm: 350,
      wallHeightCm: 250,
      rollWidthCm: 53,
      rollLengthCm: 200,
      patternRepeatCm: 53,
      wasteAllowancePercent: 10,
    })).toBeNull();

    expect(calculateWallpaperRolls({
      roomWidthCm: 0,
      wallHeightCm: 250,
      rollWidthCm: 53,
      rollLengthCm: 1000,
      patternRepeatCm: 0,
      wasteAllowancePercent: 10,
    })).toBeNull();
  });

  it('formats lengths for the result panel', () => {
    expect(formatMetres(265)).toBe('2.65 m');
    expect(formatLength(304.8, 'imperial')).toBe('10.00 ft');
  });

  it('converts displayed metric and imperial measurements without changing the calculation model', () => {
    expect(toCentimetres(10, 'imperial', 'surface')).toBeCloseTo(25.4);
    expect(toCentimetres(10, 'imperial', 'rollLength')).toBeCloseTo(304.8);
    expect(fromCentimetres(25.4, 'imperial', 'surface')).toBeCloseTo(10);
    expect(fromCentimetres(304.8, 'imperial', 'rollLength')).toBeCloseTo(10);
  });
});
