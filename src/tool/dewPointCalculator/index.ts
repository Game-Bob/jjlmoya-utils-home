export * from './entry';
export const DEW_POINT_CALCULATOR_TOOL: ToolDefinition = {
  entry: dewPointCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
