import type { ToolDefinition } from "../../types";
import { householdWaterUsageCalculator } from "./entry";

export * from "./entry";

export const HOUSEHOLD_WATER_USAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: householdWaterUsageCalculator,
  Component: () => import("./component.astro"),
  SEOComponent: () => import("./seo.astro"),
  BibliographyComponent: () => import("./bibliography.astro"),
};
