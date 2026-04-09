import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import LedSavingCalculatorComponent from './component.astro';
import LedSavingCalculatorSEO from './seo.astro';
import LedSavingCalculatorBibliography from './bibliography.astro';

import type { LedSavingCalculatorUI } from './ui';

export type LedSavingCalculatorLocaleContent = ToolLocaleContent<LedSavingCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const ledSavingCalculator: HomeToolEntry<LedSavingCalculatorUI> = {
  id: 'led-saving-calculator',
  icons: {
    bg: 'mdi:lightbulb-on',
    fg: 'mdi:lightning-bolt',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { LedSavingCalculatorComponent, LedSavingCalculatorSEO, LedSavingCalculatorBibliography };

export const LED_SAVING_CALCULATOR_TOOL: ToolDefinition = {
  entry: ledSavingCalculator,
  Component: LedSavingCalculatorComponent,
  SEOComponent: LedSavingCalculatorSEO,
  BibliographyComponent: LedSavingCalculatorBibliography,
};
