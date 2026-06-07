import { acTonnageCalculator } from './entry';
export * from './entry';
export const AC_TONNAGE_CALCULATOR_TOOL: ToolDefinition = {
  entry: acTonnageCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
