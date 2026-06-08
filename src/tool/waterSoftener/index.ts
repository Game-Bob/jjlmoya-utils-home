import type { ToolDefinition } from '../../types';
import { waterSoftener } from './entry';
export * from './entry';
export const WATER_SOFTENER_TOOL: ToolDefinition = {
  entry: waterSoftener,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
