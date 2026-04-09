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

export { QRGeneratorComponent, QRGeneratorSEO, QRGeneratorBibliography, QR_GENERATOR_TOOL } from './tool/qrGenerator';
export { SolarCalculatorComponent, SolarCalculatorSEO, SolarCalculatorBibliography, SOLAR_CALCULATOR_TOOL } from './tool/solarCalculator';
export { ProjectorCalculatorComponent, ProjectorCalculatorSEO, ProjectorCalculatorBibliography, PROJECTOR_CALCULATOR_TOOL } from './tool/projectorCalculator';
export { DewPointCalculatorComponent, DewPointCalculatorSEO, DewPointCalculatorBibliography, DEW_POINT_CALCULATOR_TOOL } from './tool/dewPointCalculator';
export { LedSavingCalculatorComponent, LedSavingCalculatorSEO, LedSavingCalculatorBibliography, LED_SAVING_CALCULATOR_TOOL } from './tool/ledSavingCalculator';
export { TariffComparatorComponent, TariffComparatorSEO, TariffComparatorBibliography, TARIFF_COMPARATOR_TOOL } from './tool/tariffComparator';
export { HeatingComparatorComponent, HeatingComparatorSEO, HeatingComparatorBibliography, HEATING_COMPARATOR_TOOL } from './tool/heatingComparator';

