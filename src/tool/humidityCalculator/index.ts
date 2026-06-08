import type { ToolDefinition } from '../../types';
import { humidityCalculator } from './entry';
export * from './entry';
export const HUMIDITY_CALCULATOR_TOOL: ToolDefinition = {
  entry: humidityCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
