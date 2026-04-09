import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ProjectorCalculatorComponent from './component.astro';
import ProjectorCalculatorSEO from './seo.astro';
import ProjectorCalculatorBibliography from './bibliography.astro';

import type { ProjectorCalculatorUI } from './ui';

export type ProjectorCalculatorLocaleContent = ToolLocaleContent<ProjectorCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const projectorCalculator: HomeToolEntry<ProjectorCalculatorUI> = {
  id: 'projector-calculator',
  icons: {
    bg: 'mdi:projector',
    fg: 'mdi:ruler',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { ProjectorCalculatorComponent, ProjectorCalculatorSEO, ProjectorCalculatorBibliography };

export const PROJECTOR_CALCULATOR_TOOL: ToolDefinition = {
  entry: projectorCalculator,
  Component: ProjectorCalculatorComponent,
  SEOComponent: ProjectorCalculatorSEO,
  BibliographyComponent: ProjectorCalculatorBibliography,
};
