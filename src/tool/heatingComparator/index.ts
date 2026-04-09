import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import HeatingComparatorComponent from './component.astro';
import HeatingComparatorSEO from './seo.astro';
import HeatingComparatorBibliography from './bibliography.astro';

import type { HeatingComparatorUI } from './ui';

export type HeatingComparatorLocaleContent = ToolLocaleContent<HeatingComparatorUI>;

export const heatingComparator: HomeToolEntry<HeatingComparatorUI> = {
  id: 'heating-comparator',
  icons: {
    bg: 'mdi:home-thermometer',
    fg: 'mdi:heating-coil',
  },
  i18n: {
    es: async () => (await import('./i18n/es')).content,
    en: async () => (await import('./i18n/en')).content,
    fr: async () => (await import('./i18n/fr')).content,
  },
};

export { HeatingComparatorComponent, HeatingComparatorSEO, HeatingComparatorBibliography };

export const HEATING_COMPARATOR_TOOL: ToolDefinition = {
  entry: heatingComparator,
  Component: HeatingComparatorComponent,
  SEOComponent: HeatingComparatorSEO,
  BibliographyComponent: HeatingComparatorBibliography,
};
