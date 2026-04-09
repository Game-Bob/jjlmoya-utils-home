import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SolarCalculatorComponent from './component.astro';
import SolarCalculatorSEO from './seo.astro';
import SolarCalculatorBibliography from './bibliography.astro';

import type { SolarCalculatorUI } from './ui';

export type SolarCalculatorLocaleContent = ToolLocaleContent<SolarCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const solarCalculator: HomeToolEntry<SolarCalculatorUI> = {
  id: 'solar-calculator',
  icons: {
    bg: 'mdi:solar-panel',
    fg: 'mdi:weather-sunny',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { SolarCalculatorComponent, SolarCalculatorSEO, SolarCalculatorBibliography };

export const SOLAR_CALCULATOR_TOOL: ToolDefinition = {
  entry: solarCalculator,
  Component: SolarCalculatorComponent,
  SEOComponent: SolarCalculatorSEO,
  BibliographyComponent: SolarCalculatorBibliography,
};
