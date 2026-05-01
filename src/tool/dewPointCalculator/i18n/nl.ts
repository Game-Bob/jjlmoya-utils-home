import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'dauwpunt-calculator';
const title = 'Dauwpunt Calculator';
const description = 'Bereken de condensatietemperatuur op uw muren met behulp van luchtvochtigheid und kamertemperatuur. Een essentieel hulpmiddel om schimmel te voorkomen en uw woning te beschermen.';

const faqData = [
  {
    question: 'Wat is precies het dauwpunt?',
    answer: 'Het dauwpunt is de temperatuur waarbij de lucht verzadigd raakt met waterdamp, waardoor er condensatie (waterdruppels) ontstaat. Hoe hoger de luchtvochtigheid, hoe dichter het dauwpunt bij de huidige temperatuur ligt.',
  },
  {
    question: 'Waarom ontstaat er schimmel in de hoeken van mijn huis?',
    answer: 'Hoeken zijn vaak koudebruggen waar de muur kouder is. Als de temperatuur van dat oppervlak onder het dauwpunt zakt, ontstaat er vloeibaar water. Schimmel heeft dit vocht nodig om te kunnen groeien.',
  },
  {
    question: 'Hoe kan ik de luchtvochtigheid in huis verlagen?',
    answer: 'De meest effectieve manier is ventileren (vooral na het douchen of koken) en het gebruik van luchtontvochtigers. Een constante temperatuur aanhouden helpt ook, omdat warme lucht meer vocht kan vasthouden.',
  },
  {
    question: 'Is schimmel door condensatie gevaarlijk?',
    answer: 'Ja. Schimmel verspreidt sporen die ademhalingsproblemen, allergieën en astma kunnen veroorzaken. Het risico op condensatie opsporen is de eerste stap naar een gezond huis.',
  },
];

const howToData = [
  {
    name: 'Temperatuur en vochtigheid meten',
    text: 'Gebruik een thermometer en hygrometer om de huidige waarden in de kamer te bepalen.',
  },
  {
    name: 'Waarden invoeren',
    text: 'Stel de temperatuur in Celsius en het luchtvochtigheidspercentage in op de calculator.',
  },
  {
    name: 'Kritieke temperatuur bepalen',
    text: 'De tool vertelt u de exacte temperatuur waarbij water begint te condenseren op oppervlakken.',
  },
  {
    name: 'Oppervlakken controleren',
    text: 'Meet met een infraroodthermometer de temperatuur van uw muren. Is deze gelijk aan of lager dan het resultaat? Dan moet u isoleren of extra ventileren.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
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
      text: 'Wat is het dauwpunt en waarom is het belangrijk voor uw woning?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Het dauwpunt is de temperatuur waarbij waterdamp in de lucht vloeibaar wordt. In huis markeert dit de grens tussen een gezonde woning en een woning met vochtproblemen. Wanneer de temperatuur van een oppervlak onder het dauwpunt zakt, ontstaan er waterdruppels — de ideale voedingsbodem voor schimmels.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Veilige Marge', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Ideale Vochtigheid', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Groot Risico', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'De Magnus Tetens Formule',
          description: 'Voor een wetenschappelijk nauwkeurige berekening gebruiken we de Magnus-Tetens benadering, aanbevolen door de WMO voor temperaturen tussen 0°C en 50°C.',
          icon: 'mdi:calculator',
          points: ['Wetenschappelijk gevalideerd', 'Ideaal voor woontemperaturen'],
        },
        {
          title: 'Koudebruggen en Schimmel',
          description: 'Hoeken en kozijnen zijn vaak de koudste punten. Als hun temperatuur onder het dauwpunt zakt, is schimmel onvermijdelijk.',
          icon: 'mdi:home-thermometer',
          points: ['Hoeken zijn kwetsbare punten', 'Isolatie voorkomt condensatie'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Risiconiveaus',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Laag Risico (verschil &gt; 5°C):</strong> Uw muren zijn veilig. <strong>Gemiddeld Risico (3–5°C):</strong> Let op de hoeken. <strong>Hoog Risico (1–3°C):</strong> Condensatie op ramen waarschijnlijk — ventileer direct. <strong>Groot Gevaar (&lt; 1°C):</strong> Actieve condensatie met risico op zwarte schimmel.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'De Gouden Regel',
      icon: 'mdi:thermometer-alert',
      badge: 'Belangrijk Advies',
      html: '<p>Ligt uw muurtemperatuur minder dan <strong>3°C boven het dauwpunt</strong>? Dan heeft u een acuut risico op condensatie. Ventileer vaker en houd de luchtvochtigheid tussen 40% en 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Hoe condensatie te voorkomen',
      items: [
        'Ventileer dagelijks, zeker na het douchen of koken.',
        'Houd de luchtvochtigheid tussen 40% und 60%.',
        'Gebruik de afzuigkap tijdens het koken.',
        'Droog geen was binnenshuis zonder extra ventilatie.',
        'Isoleer muren om koude oppervlakken te voorkomen.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Kamertemperatuur',
    labelHumidity: 'Luchtvochtigheid',
    labelDewPoint: 'Dauwpunt',
    riskLow: 'Laag Risico',
    riskMedium: 'Matig Risico',
    riskHigh: 'Hoog Risico',
    riskExtreme: 'Groot Risico',
    riskLowDesc: 'Verschil > 5°C. Oppervlakken veilig.',
    riskMediumDesc: 'Verschil 3–5°C. Controleer hoeken.',
    riskHighDesc: 'Verschil 1–3°C. Direct ventileren.',
    riskExtremeDesc: 'Verschil < 1°C. Actieve condensatie.',
  },
};
