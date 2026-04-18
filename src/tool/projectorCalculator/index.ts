import { projectorCalculator } from './entry';
export * from './entry';
export const PROJECTOR_CALCULATOR_TOOL: ToolDefinition = {
  entry: projectorCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
