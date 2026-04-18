import { qrGenerator } from './entry';
export * from './entry';
export const QR_GENERATOR_TOOL: ToolDefinition = {
  entry: qrGenerator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
