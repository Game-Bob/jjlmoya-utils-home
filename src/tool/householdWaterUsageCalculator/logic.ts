export type UsageCategoryKey =
  | "showers"
  | "toilets"
  | "taps"
  | "washing"
  | "dishwasher"
  | "leaks";

export interface WaterUsageInput {
  people: number;
  showersPerPersonPerWeek: number;
  showerMinutes: number;
  showerFlowLpm: number;
  flushesPerPersonPerDay: number;
  flushLitres: number;
  tapMinutesPerPersonPerDay: number;
  tapFlowLpm: number;
  washingLoadsPerWeek: number;
  washingLitres: number;
  dishwasherLoadsPerWeek: number;
  dishwasherLitres: number;
  leakLitresPerDay: number;
}

export interface UsageCategoryResult {
  key: UsageCategoryKey;
  litresPerDay: number;
  monthlyLitres: number;
  share: number;
  savingsLitresPerMonth: number;
}

export interface WaterUsageResult {
  categories: UsageCategoryResult[];
  totalDailyLitres: number;
  monthlyLitres: number;
  annualLitres: number;
  efficientMonthlyLitres: number;
  monthlySavingsLitres: number;
  perPersonDailyLitres: number;
  referenceDifferencePercent: number;
}

export const DEFAULT_WATER_USAGE: WaterUsageInput = {
  people: 3,
  showersPerPersonPerWeek: 7,
  showerMinutes: 6,
  showerFlowLpm: 8,
  flushesPerPersonPerDay: 5,
  flushLitres: 6,
  tapMinutesPerPersonPerDay: 4,
  tapFlowLpm: 6,
  washingLoadsPerWeek: 3,
  washingLitres: 50,
  dishwasherLoadsPerWeek: 3,
  dishwasherLitres: 10,
  leakLitresPerDay: 5,
};

export const REFERENCE_LITRES_PER_PERSON_PER_DAY = 128;
const DAYS_PER_MONTH = 365 / 12;

const EFFICIENT_TARGETS: WaterUsageInput = {
  people: 3,
  showersPerPersonPerWeek: 5,
  showerMinutes: 5,
  showerFlowLpm: 6,
  flushesPerPersonPerDay: 4,
  flushLitres: 4.5,
  tapMinutesPerPersonPerDay: 2,
  tapFlowLpm: 5,
  washingLoadsPerWeek: 2,
  washingLitres: 45,
  dishwasherLoadsPerWeek: 2,
  dishwasherLitres: 9,
  leakLitresPerDay: 0,
};

const EFFICIENT_FIELDS: Record<
  UsageCategoryKey,
  Array<keyof WaterUsageInput>
> = {
  showers: ["showersPerPersonPerWeek", "showerMinutes", "showerFlowLpm"],
  toilets: ["flushesPerPersonPerDay", "flushLitres"],
  taps: ["tapMinutesPerPersonPerDay", "tapFlowLpm"],
  washing: ["washingLoadsPerWeek", "washingLitres"],
  dishwasher: ["dishwasherLoadsPerWeek", "dishwasherLitres"],
  leaks: ["leakLitresPerDay"],
};

function finiteOrZero(value: number): number {
  return Number.isFinite(value) && value > 0 ? value : 0;
}

function normalizeInput(input: WaterUsageInput): WaterUsageInput {
  return {
    people: Math.max(1, Math.round(finiteOrZero(input.people))),
    showersPerPersonPerWeek: finiteOrZero(input.showersPerPersonPerWeek),
    showerMinutes: finiteOrZero(input.showerMinutes),
    showerFlowLpm: finiteOrZero(input.showerFlowLpm),
    flushesPerPersonPerDay: finiteOrZero(input.flushesPerPersonPerDay),
    flushLitres: finiteOrZero(input.flushLitres),
    tapMinutesPerPersonPerDay: finiteOrZero(input.tapMinutesPerPersonPerDay),
    tapFlowLpm: finiteOrZero(input.tapFlowLpm),
    washingLoadsPerWeek: finiteOrZero(input.washingLoadsPerWeek),
    washingLitres: finiteOrZero(input.washingLitres),
    dishwasherLoadsPerWeek: finiteOrZero(input.dishwasherLoadsPerWeek),
    dishwasherLitres: finiteOrZero(input.dishwasherLitres),
    leakLitresPerDay: finiteOrZero(input.leakLitresPerDay),
  };
}

function dailyBreakdown(
  input: WaterUsageInput,
): Record<UsageCategoryKey, number> {
  const value = normalizeInput(input);
  return {
    showers:
      (value.people *
        value.showersPerPersonPerWeek *
        value.showerMinutes *
        value.showerFlowLpm) /
      7,
    toilets: value.people * value.flushesPerPersonPerDay * value.flushLitres,
    taps: value.people * value.tapMinutesPerPersonPerDay * value.tapFlowLpm,
    washing: (value.washingLoadsPerWeek * value.washingLitres) / 7,
    dishwasher: (value.dishwasherLoadsPerWeek * value.dishwasherLitres) / 7,
    leaks: value.leakLitresPerDay,
  };
}

function efficientInput(
  input: WaterUsageInput,
  key: UsageCategoryKey,
): WaterUsageInput {
  const value = normalizeInput(input);
  const efficient = { ...value };
  EFFICIENT_FIELDS[key].forEach((field) => {
    efficient[field] = Math.min(value[field], EFFICIENT_TARGETS[field]);
  });
  return efficient;
}

function categoryResult(
  key: UsageCategoryKey,
  dailyLitres: number,
  totalDailyLitres: number,
  input: WaterUsageInput,
): UsageCategoryResult {
  const efficientDaily = dailyBreakdown(efficientInput(input, key))[key];
  const monthlyLitres = dailyLitres * DAYS_PER_MONTH;
  return {
    key,
    litresPerDay: dailyLitres,
    monthlyLitres,
    share: totalDailyLitres > 0 ? dailyLitres / totalDailyLitres : 0,
    savingsLitresPerMonth: Math.max(
      0,
      (dailyLitres - efficientDaily) * DAYS_PER_MONTH,
    ),
  };
}

export function calculateWaterUsage(input: WaterUsageInput): WaterUsageResult {
  const value = normalizeInput(input);
  const breakdown = dailyBreakdown(value);
  const keys = Object.keys(breakdown) as UsageCategoryKey[];
  const totalDailyLitres = keys.reduce((sum, key) => sum + breakdown[key], 0);
  const categories = keys.map((key) =>
    categoryResult(key, breakdown[key], totalDailyLitres, value),
  );
  const monthlyLitres = totalDailyLitres * DAYS_PER_MONTH;
  const monthlySavingsLitres = categories.reduce(
    (sum, category) => sum + category.savingsLitresPerMonth,
    0,
  );
  const efficientMonthlyLitres = Math.max(
    0,
    monthlyLitres - monthlySavingsLitres,
  );
  const perPersonDailyLitres = totalDailyLitres / value.people;
  return buildResult({
    categories,
    totalDailyLitres,
    monthlyLitres,
    efficientMonthlyLitres,
    monthlySavingsLitres,
    perPersonDailyLitres,
  });
}

function buildResult(values: {
  categories: UsageCategoryResult[];
  totalDailyLitres: number;
  monthlyLitres: number;
  efficientMonthlyLitres: number;
  monthlySavingsLitres: number;
  perPersonDailyLitres: number;
}): WaterUsageResult {
  return {
    categories: values.categories,
    totalDailyLitres: values.totalDailyLitres,
    monthlyLitres: values.monthlyLitres,
    annualLitres: values.totalDailyLitres * 365,
    efficientMonthlyLitres: values.efficientMonthlyLitres,
    monthlySavingsLitres: values.monthlySavingsLitres,
    perPersonDailyLitres: values.perPersonDailyLitres,
    referenceDifferencePercent:
      ((values.perPersonDailyLitres - REFERENCE_LITRES_PER_PERSON_PER_DAY) /
        REFERENCE_LITRES_PER_PERSON_PER_DAY) *
      100,
  };
}

export function presetInput(
  name: "everyday" | "waterAware" | "lowFlow",
): WaterUsageInput {
  if (name === "waterAware") {
    return {
      ...DEFAULT_WATER_USAGE,
      showerMinutes: 5,
      showerFlowLpm: 6,
      tapMinutesPerPersonPerDay: 3,
      tapFlowLpm: 5,
      washingLoadsPerWeek: 2,
      dishwasherLoadsPerWeek: 2,
      leakLitresPerDay: 0,
    };
  }
  if (name === "lowFlow") return { ...EFFICIENT_TARGETS };
  return { ...DEFAULT_WATER_USAGE };
}
