import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'projektor-avstands-kalkylator';
const title = 'Projektor Avståndskalkylator — Kastförhållande och Skärm';
const description =
  'Beräkna exakt avstånd för att installera din projektor baserat på önskad skärmstorlek och kastförhållande (Throw Ratio).';

const faqData = [
  {
    question: 'Vad är Throw Ratio (kastförhållande)?',
    answer:
      'Det är ett tal som definierar hur stor bilden blir på ett visst avstånd. Det beräknas genom att dela projektionsavståndet med bildbredden. Ett förhållande på 1.5 betyder att 1.5m avstånd ger 1m bildbredd.',
  },
  {
    question: 'Vilket avstånd behöver jag för 100 tum?',
    answer:
      'Det beror på projektorns kastförhållande. Med ett standardförhållande på 1.5:1 behövs ca 3.3m. Med en Short Throw-projektor kan det gå på under 1m.',
  },
  {
    question: 'Vad är skillnaden mellan 16:9 och 4:3?',
    answer:
      '16:9 är bredbild för moderna filmer. 4:3 är det klassiska formatet för presentationer. Genom att välja rätt format undviker man stora svarta kanter.',
  },
  {
    question: 'Är höjden på projektorn viktig?',
    answer:
      'Ja. Projektorer har offset eller keystone-korrigering. Det är bäst att montera den centrerat mot skärmens övre eller nedre kant för att undvika förvrängning.',
  },
];

const howToData = [
  {
    name: 'Kolla Throw Ratio',
    text: 'Leta i manualen eller på lådan efter ett värde som 1.2:1 eller 1.5-1.8:1.',
  },
  {
    name: 'Ange skärmstorlek',
    text: 'Fyll i tum på diagonalen eller den bredd du har tillgänglig på väggen.',
  },
  {
    name: 'Välj format',
    text: 'Välj 16:9 för film, 4:3 för kontor eller 21:9 för biokänsla.',
  },
  {
    name: 'Få fram avståndet',
    text: 'Kalkylatorn ger dig det exakta avståndet för ditt fäste.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson — Guide för Projektionsavstånd', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Bemästra Projektionens Geometri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att installera på känn kan förstöra upplevelsen. För nära ger liten bild; för långt bort ger sämre ljusstyrka. Nyckeln är <strong>Throw Ratio</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Formel för avstånd', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Vad är Throw Ratio?',
          description: 'Förhållandet mellan avstånd och bildbredd. TR 1.5 betyder 1.5m avstånd per meter skärmbredd.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, för små rum', 'TR 1–2: Standard för vardagsrum', 'TR > 2: Long Throw, för hörsalar'],
        },
        {
          title: 'Format och Proproportioner',
          description: 'Formatet styr bildens form. Fel val ger svarta sorgkanter och slösar ljusstyrka.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: standard HD/4K för hemmet', '21:9: biografformat', '4:3: för kontorsbruk'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Professionell Installation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Om din projektor har Lens Shift, använd den istället för digital Keystone. Keystone sänker upplösningen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ljus i Rummet',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>I ljusa rum bör du ha en skärm med högre gain för att minska kontrastförlusten.</p>',
    },
    {
      type: 'summary',
      title: 'Checklista för Installation',
      items: [
        'Kolla Throw Ratio innan du borrar i väggen.',
        'Mät upp ytan på väggen för att få plats.',
        'Sätt projektorn centrerat mot skärmen.',
        'Undvik digital Keystone: flytta enheten fysiskt.',
        'Se till att ingen direkt belysning träffar skärmen.',
      ],
    },
  ],
  ui: {
    configTitle: 'Konfiguration',
    configSubtitle: 'Definiera skärm och projektor',
    labelDiagonal: 'Skärmdiagonal',
    labelDiagonalUnit: 'Tum (")',
    labelFormat: 'Bildformat',
    labelThrowRatio: 'Kastförhållande (Throw Ratio)',
    throwRatioHint: 'Exempel: 1.50 betyder 1.5m avstånd per meter bredd.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Bio',
    ratio43Sub: 'Dokument',
    labelWidth: 'Skärmbredd',
    labelHeight: 'Skärmhöjd',
    labelDistance: 'Nödvändigt Avstånd',
    simulationBadge: 'Realtidssimulering',
  },
};
