import { REFERENCE_LITRES_PER_PERSON_PER_DAY } from "./logic";
import type { WaterUsageResult } from "./logic";

export type UsageBand = "below" | "near" | "above";

export interface UsageEvaluation {
  band: UsageBand;
  difference: number;
}

export function evaluateUsage(result: WaterUsageResult): UsageEvaluation {
  const difference =
    result.perPersonDailyLitres - REFERENCE_LITRES_PER_PERSON_PER_DAY;
  const tolerance = REFERENCE_LITRES_PER_PERSON_PER_DAY * 0.1;
  if (difference < -tolerance) return { band: "below", difference };
  if (difference > tolerance) return { band: "above", difference };
  return { band: "near", difference };
}
