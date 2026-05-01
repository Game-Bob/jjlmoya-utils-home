import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'solkalkylator';
const title = 'Lutningskalkylator för Solpaneler';
const description =
  'Beräkna optimal lutningsvinkel för dina solpaneler baserat på din geografiska breddgrad.';

const faqData = [
  {
    question: 'Vad händer om mitt tak inte har perfekt lutning?',
    answer:
      'Det är inte ett stort problem. Förluster vid avvikelser på 5-10° är mindre än 3% av årsproduktionen. Det är viktigare att undvika skugga.',
  },
  {
    question: 'Vilket håll ska panelerna vara vända mot?',
    answer:
      'På norra halvklotet, alltid mot söder (azimut 180°). På södra halvklotet, mot norr.',
  },
];

const howToData = [
  {
    name: 'Ange breddgrad',
    text: 'Skriv in din breddgrad eller använd knappen för att hitta din plats.',
  },
  {
    name: 'Se optimal vinkel',
    text: 'Den årliga optimala vinkeln är huvudreferensen för fasta installationer.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
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
      text: 'Vetenskapen bakom Sollutning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Panelernas effektivitet beror på hur vinkelrätt solens strålar träffar dem.',
    },
    {
      type: 'summary',
      title: 'Nycklar till en effektiv installation',
      items: [
        'Årlig optimal vinkel är din referens.',
        'Undvik skugga till varje pris.',
        'Riktning mot Söder på norra halvklotet.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Geografisk Breddgrad',
    btnLocate: 'Hitta min plats',
    labelOptimal: 'Optimal Årlig Vinkel',
    labelEfficiency: 'Maximal Effektivitet',
    labelWinter: 'Vinter',
    labelSummer: 'Sommar',
    hemisphereNorth: 'Norra Halvklotet — Rikta mot SÖDER',
    hemisphereSouth: 'Södra Halvklotet — Rikta mot NORR',
    geoNotAvailable: 'Positionering är inte tillgänglig i denna webbläsare.',
  },
};
