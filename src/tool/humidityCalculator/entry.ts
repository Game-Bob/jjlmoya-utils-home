import type { HomeToolEntry, ToolLocaleContent } from '../../types';
import type { HumidityCalculatorUI } from './ui';

export type HumidityCalculatorLocaleContent = ToolLocaleContent<HumidityCalculatorUI>;

export const humidityCalculator: HomeToolEntry<HumidityCalculatorUI> = {
  id: 'humidity-calculator',
  icons: {
    bg: 'mdi:water-percent',
    fg: 'mdi:air-filter',
  },
  i18n: {
    en: async () => (await import('./i18n/en')).content,
    de: async () => (await import('./i18n/de')).content,
    es: async () => (await import('./i18n/es')).content,
    fr: async () => (await import('./i18n/fr')).content,
    id: async () => (await import('./i18n/id')).content,
    it: async () => (await import('./i18n/it')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    pt: async () => (await import('./i18n/pt')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};
