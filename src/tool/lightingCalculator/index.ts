import type { ToolDefinition } from '../../types';
import { lightingCalculator } from './entry';
export * from './entry';
export const LIGHTING_CALCULATOR_TOOL: ToolDefinition = {
  entry: lightingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
