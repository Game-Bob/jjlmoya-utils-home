export { homeCategory } from './category';
export const homeCategorySEO = () => import('./category/seo.astro').then((m) => m.default);

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  HomeToolEntry,
  HomeCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_ENTRIES, ALL_TOOLS } from './tools';

export { QR_GENERATOR_TOOL } from './tool/qrGenerator';
export { SOLAR_CALCULATOR_TOOL } from './tool/solarCalculator';
export { PROJECTOR_CALCULATOR_TOOL } from './tool/projectorCalculator';
export { DEW_POINT_CALCULATOR_TOOL } from './tool/dewPointCalculator';
export { LED_SAVING_CALCULATOR_TOOL } from './tool/ledSavingCalculator';
export { TARIFF_COMPARATOR_TOOL } from './tool/tariffComparator';
export { HEATING_COMPARATOR_TOOL } from './tool/heatingComparator';

