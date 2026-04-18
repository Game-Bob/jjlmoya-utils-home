export * from './entry';
export const LED_SAVING_CALCULATOR_TOOL: ToolDefinition = {
  entry: ledSavingCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
