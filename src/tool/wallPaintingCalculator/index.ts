import type { ToolDefinition } from '../../types';
import { wallPaintingCalculator } from './entry';
export * from './entry';
export const WALL_PAINTING_CALCULATOR_TOOL: ToolDefinition = {
  entry: wallPaintingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
