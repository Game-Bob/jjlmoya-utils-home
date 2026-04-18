import { solarCalculator } from './entry';
export * from './entry';
export const SOLAR_CALCULATOR_TOOL: ToolDefinition = {
  entry: solarCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
