import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'zonnepanelen-hellingshoek-calculator';
const title = 'Zonnepanelen Hellingshoek Calculator';
const description =
  'Bereken de optimale hellingshoek voor uw zonnepanelen op basis van uw breedtegraad. Voor vaste installaties en seizoensgebonden aanpassingen.';

const faqData = [
  {
    question: 'Wat als mijn dak niet de perfecte hoek heeft?',
    answer:
      'Dat is geen groot probleem. Het verlies bij afwijkingen van 5-10° is minder dan 3% van de jaarlijkse opbrengst. Het voorkomen van schaduw is belangrijker.',
  },
  {
    question: 'Is de hoek overal ter wereld hetzelfde?',
    answer:
      'Nee, dit hangt af van de breedtegraad. In Amsterdam (~52°N) is de ideale hoek anders dan in Madrid (~40°N).',
  },
  {
    question: 'Welke kant moeten de panelen op staan?',
    answer:
      'Op het noordelijk halfrond altijd naar het zuiden. Op het zuidelijk halfrond naar het noorden.',
  },
];

const howToData = [
  {
    name: 'Voer breedtegraad in',
    text: 'Voer uw breedtegraad in of gebruik de locatieknop.',
  },
  {
    name: 'Check de optimale hoek',
    text: 'De jaarlijkse hoek is het belangrijkste voor vaste systemen.',
  },
  {
    name: 'Seizoensaanpassing (optioneel)',
    text: 'Gebruik de winter- en zomerhoeken voor extra rendement bij verstelbare systemen.',
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howToData.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'De Wetenschap van de Zonnehoek',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De juiste hoek bepaalt hoeveel energie u echt opvraagt. Hoe meer loodrecht de zon op de panelen staat, hoe hoger de opbrengst.',
    },
    {
      type: 'summary',
      title: 'Tips voor een efficiënte installatie',
      items: [
        'Jaarlijkse hoek is de basis.',
        'Kleine afwijkingen zijn niet erg.',
        'Schaduw is de grootste vijand.',
        'Richt op het zuiden op het noordelijk halfrond.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Breedtegraad',
    btnLocate: 'Vind mijn locatie',
    labelOptimal: 'Optimale Jaarlijkse Hoek',
    labelEfficiency: 'Maximale Efficiëntie',
    labelWinter: 'Winter',
    labelSummer: 'Zomer',
    hemisphereNorth: 'Noordelijk Halfrond — Richt op ZUIDEN',
    hemisphereSouth: 'Zuidelijk Halfrond — Richt op NOORDEN',
    geoNotAvailable: 'Locatiebepaling niet beschikbaar.',
  },
};
