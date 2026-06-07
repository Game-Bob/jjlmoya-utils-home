import { wifiRangeSimulator } from './entry';
export * from './entry';
export const WIFI_RANGE_SIMULATOR_TOOL = {
  entry: wifiRangeSimulator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
