import type { ToolDefinition } from '../../types';
import { storageUnitSizeCalculator } from './entry';
import type { StorageUnitSizeCalculatorUI } from './ui';

export * from './entry';

export const STORAGE_UNIT_SIZE_CALCULATOR_TOOL: ToolDefinition<StorageUnitSizeCalculatorUI> = {
  entry: storageUnitSizeCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
