import type { HomeToolEntry, ToolLocaleContent } from '../../types';
import type { ApplianceCostCalculatorUI } from './ui';

export type ApplianceCostCalculatorLocaleContent = ToolLocaleContent<ApplianceCostCalculatorUI>;

export const applianceCostCalculator: HomeToolEntry<ApplianceCostCalculatorUI> = {
  id: 'appliance-cost-calculator',
  icons: {
    bg: 'mdi:washing-machine',
    fg: 'mdi:lightning-bolt',
  },
  i18n: {
    en: async () => (await import('./i18n/en')).content,
    es: async () => (await import('./i18n/es')).content,
    de: async () => (await import('./i18n/de')).content,
    fr: async () => (await import('./i18n/fr')).content,
    it: async () => (await import('./i18n/it')).content,
    pt: async () => (await import('./i18n/pt')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    sv: async () => (await import('./i18n/sv')).content,
    ru: async () => (await import('./i18n/ru')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    id: async () => (await import('./i18n/id')).content,
  },
};
