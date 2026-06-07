import type { ToolDefinition } from '../../types';
import { deskErgonomics } from './entry';
export * from './entry';
export const DESK_ERGONOMICS_TOOL: ToolDefinition = {
  entry: deskErgonomics,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
