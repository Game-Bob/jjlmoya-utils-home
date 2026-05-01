import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'projector-afstand-calculator';
const title = 'Projector Afstand Calculator — Throw Ratio';
const description =
  'Bereken de exacte afstand voor uw projector aan de hand van de gewenste schermgrootte en de throw ratio van uw apparaat.';

const faqData = [
  {
    question: 'Wat is de throw ratio van een projector?',
    answer:
      'Dit is een getal dat de relatie tussen de projectieafstand en de breedte van het beeld aangeeft. Een ratio van 1.5 betekent dat je voor 1 meter beeldbreedte de projector op 1,5 meter afstand moet plaatsen.',
  },
  {
    question: 'Welke afstand heb ik nodig voor een 100 inch scherm?',
    answer:
      'Dit hangt af van de throw ratio. Bij een standaard ratio van 1.5:1 is dat ongeveer 3,3 meter. Met een Short Throw projector kan dit al vanaf minder dan 1 meter.',
  },
  {
    question: 'Wat is het verschil tussen 16:9 en 4:3?',
    answer:
      '16:9 is het breedbeeldformaat voor moderne films en TV. 4:3 is het klassieke formaat voor presentaties. Het juiste formaat voorkomt grote zwarte balken.',
  },
  {
    question: 'Is de hoogte van de projector belangrijk?',
    answer:
      'Ja. Projectoren hebben een verticale offset of keystone-correctie. Voor het beste beeld hangt de projector idealiter in het midden van de boven- of onderkant van het scherm.',
  },
];

const howToData = [
  {
    name: 'Throw ratio opzoeken',
    text: 'Kijk in de handleiding of op de doos van uw projector naar een getal zoals 1.2:1 of 1.5-1.8:1.',
  },
  {
    name: 'Schermgrootte bepalen',
    text: 'Voer de gewenste diagonaal in inches in of de beschikbare breedte op uw muur.',
  },
  {
    name: 'Formaat kiezen',
    text: 'Kies 16:9 voor films en TV, 4:3 voor presentaties of 21:9 voor bioscoopformaat.',
  },
  {
    name: 'Afstand berekenen',
    text: 'De calculator geeft de exacte afstand aan voor de montage van de projector.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'Beheers de Projectiegeometrie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Een projector op gevoel installeren kan de ervaring verpesten. De sleutel is de <strong>Throw Ratio</strong>, die de verhouding tussen afstand en beeldgrootte bepaalt.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Afstandsformule', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Wat is Throw Ratio?',
          description: 'De verhouding tussen afstand en breedte. Een TR van 1.5 betekent 1,5m afstand per meter beeldbreedte.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, voor kleine kamers', 'TR 1–2: Standaard voor woonkamers', 'TR > 2: Long Throw, voor grote zalen'],
        },
        {
          title: 'Beeldverhouding (Formaat)',
          description: 'Het formaat bepaalt de proporties. Een verkeerd formaat zorgt voor zwarte balken en lichtverlies.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: standaard voor TV en films', '21:9: bioscoopformaat', '4:3: voor kantoorgebruik'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Professionele Installatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Gebruik altijd Lens Shift indien beschikbaar. Keystone vermindert de resolutie.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Omgevingslicht',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>Gebruik in lichte kamers een scherm met meer gain om het contrast te behouden.</p>',
    },
    {
      type: 'summary',
      title: 'Installatie Checklist',
      items: [
        'Check de throw ratio voor de montage.',
        'Meet de ruimte op de muur.',
        'Hang de projector precies in het midden.',
        'Vermijd digitale keystone: kies de juiste plek.',
        'Voorkom direct licht op het scherm.',
      ],
    },
  ],
  ui: {
    configTitle: 'Instellingen',
    configSubtitle: 'Definieer uw scherm en projector',
    labelDiagonal: 'Schermdiagonaal',
    labelDiagonalUnit: 'Inch (")',
    labelFormat: 'Formaat',
    labelThrowRatio: 'Throw Ratio',
    throwRatioHint: 'Voorbeeld: 1.50 betekent 1,5m afstand per meter breedte.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Bioscoop',
    ratio43Sub: 'Documenten',
    labelWidth: 'Schermbreedte',
    labelHeight: 'Schermhoogte',
    labelDistance: 'Vereiste Afstand',
    simulationBadge: 'Real-time Simulatie',
  },
};
