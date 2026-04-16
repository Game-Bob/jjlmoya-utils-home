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
    de: async () => (await import('./i18n/de')).content,
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

export { HeatingComparatorComponent, HeatingComparatorSEO, HeatingComparatorBibliography };

export const HEATING_COMPARATOR_TOOL: ToolDefinition = {
  entry: heatingComparator,
  Component: HeatingComparatorComponent,
  SEOComponent: HeatingComparatorSEO,
  BibliographyComponent: HeatingComparatorBibliography,
};
