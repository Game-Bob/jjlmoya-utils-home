import { describe, expect, it } from 'vitest';
import { calculateStoragePlan, sanitizeInputs } from './logic';

describe('storage unit size calculator logic', () => {
  it('calculates a useful one bedroom reference case', () => {
    const plan = calculateStoragePlan({
      boxes: { small: 8, medium: 6, large: 2 },
      furniture: { sofa: 1, bed: 1, wardrobe: 1, desk: 1, chair: 2 },
      accessPercent: 25,
    });

    expect(plan.itemCount).toBe(22);
    expect(plan.packedVolumeM3).toBeCloseTo(6.75, 2);
    expect(plan.occupiedFloorM2).toBeCloseTo(8.24, 2);
    expect(plan.accessFloorM2).toBeCloseTo(2.06, 2);
    expect(plan.minimumSizeM2).toBe(12);
    expect(plan.comfortableSizeM2).toBe(15);
  });

  it('returns an empty plan without recommending a unit', () => {
    const plan = calculateStoragePlan({
      boxes: { small: 0, medium: 0, large: 0 },
      furniture: { sofa: 0, bed: 0, wardrobe: 0, desk: 0, chair: 0 },
      accessPercent: 25,
    });

    expect(plan.itemCount).toBe(0);
    expect(plan.minimumSizeM2).toBe(0);
    expect(plan.comfortableSizeM2).toBe(0);
    expect(plan.targetFloorM2).toBe(0);
  });

  it('clamps invalid counts and access percentages safely', () => {
    const inputs = sanitizeInputs({
      boxes: { small: -2, medium: 2.7, large: Number.NaN },
      furniture: { sofa: -1, bed: 1.9, wardrobe: 0, desk: 0, chair: 0 },
      accessPercent: 99,
    });

    expect(inputs).toEqual({
      boxes: { small: 0, medium: 3, large: 0 },
      furniture: { sofa: 0, bed: 2, wardrobe: 0, desk: 0, chair: 0 },
      accessPercent: 60,
    });
  });

  it('never recommends below the target floor area', () => {
    const plan = calculateStoragePlan({
      boxes: { small: 100, medium: 100, large: 100 },
      furniture: { sofa: 10, bed: 10, wardrobe: 10, desk: 10, chair: 10 },
      accessPercent: 40,
    });

    expect(plan.minimumSizeM2).toBeGreaterThanOrEqual(plan.targetFloorM2);
    expect(plan.comfortableSizeM2).toBeGreaterThan(plan.minimumSizeM2);
  });
});
