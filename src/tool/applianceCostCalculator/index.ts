import type { ToolDefinition } from '../../types';
import { applianceCostCalculator } from './entry';
export * from './entry';
export const APPLIANCE_COST_CALCULATOR_TOOL: ToolDefinition = {
  entry: applianceCostCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
