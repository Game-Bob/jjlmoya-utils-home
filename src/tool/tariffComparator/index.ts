import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TariffComparatorComponent from './component.astro';
import TariffComparatorSEO from './seo.astro';
import TariffComparatorBibliography from './bibliography.astro';

import type { TariffComparatorUI } from './ui';

export type TariffComparatorLocaleContent = ToolLocaleContent<TariffComparatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const tariffComparator: HomeToolEntry<TariffComparatorUI> = {
  id: 'tariff-comparator',
  icons: {
    bg: 'mdi:lightning-bolt',
    fg: 'mdi:compare',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { TariffComparatorComponent, TariffComparatorSEO, TariffComparatorBibliography };

export const TARIFF_COMPARATOR_TOOL: ToolDefinition = {
  entry: tariffComparator,
  Component: TariffComparatorComponent,
  SEOComponent: TariffComparatorSEO,
  BibliographyComponent: TariffComparatorBibliography,
};
