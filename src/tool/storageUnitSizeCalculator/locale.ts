import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, SEOSection, ToolLocaleContent } from '../../types';
import { bibliography } from './bibliography';
import type { StorageUnitSizeCalculatorUI } from './ui';
import type { StorageInputs } from './logic';

export interface StorageLocaleCopy {
  locale: string;
  slug: string;
  title: string;
  description: string;
  labels: StorageUnitSizeCalculatorUI['labels'];
  presetLabels: [string, string, string];
  accessLabels: [string, string, string];
  result: StorageUnitSizeCalculatorUI['result'];
  seo: SEOSection[];
  faq: FAQItem[];
  howTo: HowToStep[];
}

const defaults: StorageInputs = {
  boxes: { small: 8, medium: 6, large: 2 },
  furniture: { sofa: 1, bed: 1, wardrobe: 1, desk: 1, chair: 2 },
  accessPercent: 25,
};

const presetInputs: [StorageInputs, StorageInputs, StorageInputs] = [
  { boxes: { small: 6, medium: 5, large: 1 }, furniture: { sofa: 1, bed: 1, wardrobe: 1, desk: 0, chair: 1 }, accessPercent: 25 },
  { boxes: { small: 8, medium: 6, large: 2 }, furniture: { sofa: 1, bed: 1, wardrobe: 1, desk: 1, chair: 2 }, accessPercent: 25 },
  { boxes: { small: 12, medium: 10, large: 4 }, furniture: { sofa: 0, bed: 0, wardrobe: 0, desk: 4, chair: 8 }, accessPercent: 40 },
];

const createAppSchema = (copy: StorageLocaleCopy): WithContext<SoftwareApplication> => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: copy.title,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Web',
    description: copy.description,
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
    inLanguage: copy.locale,
});

const createFaqSchema = (copy: StorageLocaleCopy): WithContext<FAQPage> => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: copy.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
});

const createHowToSchema = (copy: StorageLocaleCopy): WithContext<HowTo> => ({
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: copy.title,
    description: copy.description,
    step: copy.howTo.map((step) => ({
      '@type': 'HowToStep',
      name: step.name,
      text: step.text,
    })),
});

const createSchemas = (copy: StorageLocaleCopy): WithContext<FAQPage | HowTo | SoftwareApplication>[] => [
  createAppSchema(copy),
  createFaqSchema(copy),
  createHowToSchema(copy),
];

export const buildLocalizedContent = (copy: StorageLocaleCopy): ToolLocaleContent<StorageUnitSizeCalculatorUI> => ({
  slug: copy.slug,
  title: copy.title,
  description: copy.description,
  ui: {
    defaults,
    labels: copy.labels,
    presets: [
      { id: 'studio-move', label: copy.presetLabels[0], inputs: presetInputs[0] },
      { id: 'one-bedroom', label: copy.presetLabels[1], inputs: presetInputs[1] },
      { id: 'office-clearout', label: copy.presetLabels[2], inputs: presetInputs[2] },
    ],
    accessOptions: [
      { value: 15, label: copy.accessLabels[0] },
      { value: 25, label: copy.accessLabels[1] },
      { value: 40, label: copy.accessLabels[2] },
    ],
    result: copy.result,
  },
  seo: copy.seo,
  faq: copy.faq,
  bibliography,
  howTo: copy.howTo,
  schemas: createSchemas(copy),
});
