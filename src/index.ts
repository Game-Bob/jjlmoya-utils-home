export { homeCategory } from './category';
export { default as homeCategorySEO } from './category/seo.astro';

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

export { ALL_TOOLS } from './tools';

export { QRGeneratorComponent, QRGeneratorSEO, QRGeneratorBibliography } from './tool/qrGenerator';
export { SolarCalculatorComponent, SolarCalculatorSEO, SolarCalculatorBibliography } from './tool/solarCalculator';
export { ProjectorCalculatorComponent, ProjectorCalculatorSEO, ProjectorCalculatorBibliography } from './tool/projectorCalculator';
export { DewPointCalculatorComponent, DewPointCalculatorSEO, DewPointCalculatorBibliography } from './tool/dewPointCalculator';
export { LedSavingCalculatorComponent, LedSavingCalculatorSEO, LedSavingCalculatorBibliography } from './tool/ledSavingCalculator';
export { TariffComparatorComponent, TariffComparatorSEO, TariffComparatorBibliography } from './tool/tariffComparator';

