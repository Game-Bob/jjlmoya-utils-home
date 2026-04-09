import type { HomeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import QRGeneratorComponent from './component.astro';
import QRGeneratorSEO from './seo.astro';
import QRGeneratorBibliography from './bibliography.astro';

import type { QRGeneratorUI } from './ui';

export type QRGeneratorLocaleContent = ToolLocaleContent<QRGeneratorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const qrGenerator: HomeToolEntry<QRGeneratorUI> = {
  id: 'qr-generator',
  icons: {
    bg: 'mdi:qrcode',
    fg: 'mdi:wifi',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { QRGeneratorComponent, QRGeneratorSEO, QRGeneratorBibliography };

export const QR_GENERATOR_TOOL: ToolDefinition = {
  entry: qrGenerator,
  Component: QRGeneratorComponent,
  SEOComponent: QRGeneratorSEO,
  BibliographyComponent: QRGeneratorBibliography,
};
