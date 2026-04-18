export * from './entry';
export const HEATING_COMPARATOR_TOOL: ToolDefinition = {
  entry: heatingComparator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
