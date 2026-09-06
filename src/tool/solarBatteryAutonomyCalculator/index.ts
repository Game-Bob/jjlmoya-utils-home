import type { ToolDefinition } from '../../types';
import { solarBatteryAutonomyCalculator } from './entry';

export * from './entry';

export const SOLAR_BATTERY_AUTONOMY_CALCULATOR_TOOL: ToolDefinition = {
  entry: solarBatteryAutonomyCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
