import type { ToolDefinition } from '../../types';
import { vampireDrawSimulator } from './entry';
export * from './entry';
export const VAMPIRE_DRAW_SIMULATOR_TOOL: ToolDefinition = {
  entry: vampireDrawSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
