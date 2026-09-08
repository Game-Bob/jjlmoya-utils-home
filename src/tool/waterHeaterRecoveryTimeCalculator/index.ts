import type { ToolDefinition } from '../../types';
import { waterHeaterRecoveryTimeCalculator } from './entry';

export * from './entry';

export const WATER_HEATER_RECOVERY_TIME_CALCULATOR_TOOL: ToolDefinition = {
  entry: waterHeaterRecoveryTimeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
