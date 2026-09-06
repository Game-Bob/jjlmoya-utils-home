import type { ToolDefinition } from '../../types';
import { wallpaperRollCalculator } from './entry';

export * from './entry';

export const WALLPAPER_ROLL_CALCULATOR_TOOL: ToolDefinition = {
  entry: wallpaperRollCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
