import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import DewPointCalculatorComponent from './component.astro';
import DewPointCalculatorSEO from './seo.astro';
import DewPointCalculatorBibliography from './bibliography.astro';

import type { DewPointCalculatorUI } from './ui';

export type DewPointCalculatorLocaleContent = ToolLocaleContent<DewPointCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const dewPointCalculator: HomeToolEntry<DewPointCalculatorUI> = {
  id: 'dew-point-calculator',
  icons: {
    bg: 'mdi:water-thermometer',
    fg: 'mdi:home-thermometer',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { DewPointCalculatorComponent, DewPointCalculatorSEO, DewPointCalculatorBibliography };

export const DEW_POINT_CALCULATOR_TOOL: ToolDefinition = {
  entry: dewPointCalculator,
  Component: DewPointCalculatorComponent,
  SEOComponent: DewPointCalculatorSEO,
  BibliographyComponent: DewPointCalculatorBibliography,
};
