export * from './entry';
export const TARIFF_COMPARATOR_TOOL: ToolDefinition = {
  entry: tariffComparator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
