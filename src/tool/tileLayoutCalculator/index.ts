import type { ToolDefinition } from '../../types';
import { tileLayoutCalculator } from './entry';
export * from './entry';
export const TILE_LAYOUT_CALCULATOR_TOOL: ToolDefinition = {
  entry: tileLayoutCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
