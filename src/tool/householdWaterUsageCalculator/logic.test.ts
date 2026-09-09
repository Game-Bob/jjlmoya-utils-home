import { describe, expect, it } from "vitest";
import {
  DEFAULT_WATER_USAGE,
  REFERENCE_LITRES_PER_PERSON_PER_DAY,
  calculateWaterUsage,
  presetInput,
} from "./logic";

describe("household water usage calculator", () => {
  it("calculates the reference household breakdown", () => {
    const result = calculateWaterUsage(DEFAULT_WATER_USAGE);
    expect(result.categories).toHaveLength(6);
    expect(result.totalDailyLitres).toBeCloseTo(336.71, 2);
    expect(result.monthlyLitres).toBeCloseTo(10241.73, 2);
    expect(result.annualLitres).toBeCloseTo(122900.71, 2);
    expect(result.perPersonDailyLitres).toBeCloseTo(112.24, 2);
  });

  it("returns zero usage for zero activity while keeping one person", () => {
    const result = calculateWaterUsage({
      ...DEFAULT_WATER_USAGE,
      people: 0,
      showersPerPersonPerWeek: 0,
      flushesPerPersonPerDay: 0,
      tapMinutesPerPersonPerDay: 0,
      washingLoadsPerWeek: 0,
      dishwasherLoadsPerWeek: 0,
      leakLitresPerDay: 0,
    });
    expect(result.totalDailyLitres).toBe(0);
    expect(result.perPersonDailyLitres).toBe(0);
    expect(result.categories.every((category) => category.share === 0)).toBe(
      true,
    );
  });

  it("normalizes invalid values without producing negative or non-finite output", () => {
    const result = calculateWaterUsage({
      ...DEFAULT_WATER_USAGE,
      people: Number.NaN,
      showerMinutes: -3,
      tapFlowLpm: Number.POSITIVE_INFINITY,
      leakLitresPerDay: -5,
    });
    expect(Number.isFinite(result.totalDailyLitres)).toBe(true);
    expect(result.totalDailyLitres).toBeGreaterThanOrEqual(0);
    expect(
      result.categories.every((category) => category.litresPerDay >= 0),
    ).toBe(true);
  });

  it("exposes a savings scenario for every category", () => {
    const result = calculateWaterUsage(DEFAULT_WATER_USAGE);
    expect(result.monthlySavingsLitres).toBeGreaterThan(0);
    expect(result.efficientMonthlyLitres).toBeLessThan(result.monthlyLitres);
    expect(
      result.categories.every(
        (category) => category.savingsLitresPerMonth >= 0,
      ),
    ).toBe(true);
  });

  it("does not suggest savings below already efficient habits", () => {
    const result = calculateWaterUsage(presetInput("lowFlow"));
    expect(result.monthlySavingsLitres).toBe(0);
    expect(result.efficientMonthlyLitres).toBeCloseTo(result.monthlyLitres, 5);
  });

  it("keeps the reference comparison anchored to the published benchmark", () => {
    const result = calculateWaterUsage({
      ...DEFAULT_WATER_USAGE,
      people: 1,
      showersPerPersonPerWeek: 0,
      flushesPerPersonPerDay: 0,
      tapMinutesPerPersonPerDay:
        REFERENCE_LITRES_PER_PERSON_PER_DAY / DEFAULT_WATER_USAGE.tapFlowLpm,
      washingLoadsPerWeek: 0,
      dishwasherLoadsPerWeek: 0,
      leakLitresPerDay: 0,
    });
    expect(result.perPersonDailyLitres).toBeCloseTo(
      REFERENCE_LITRES_PER_PERSON_PER_DAY,
      5,
    );
    expect(result.referenceDifferencePercent).toBeCloseTo(0, 5);
  });
});
