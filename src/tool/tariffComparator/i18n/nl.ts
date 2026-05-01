import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'energietarief-vergelijker';
const title = 'Energietarief Vergelijker: Vast vs. Variabel';
const description =
  'Ontdek welk energietarief het beste bij u past. Vergelijk vaste prijzen met variabele/dynamische tarieven op basis van uw verbruik.';

const faqData = [
  {
    question: 'Wat is beter, een vast of een variabel tarief?',
    answer:
      'Vaste tarieven bieden zekerheid. Variabele of dynamische tarieven kunnen goedkoper zijn als de marktprijzen dalen. Het hangt af van hoeveel risico u wilt nemen.',
  },
  {
    question: 'Waar vind ik mijn jaarverbruik?',
    answer:
      'Dit staat op uw laatste jaarrekening van uw energieleverancier, uitgedrukt in kWh.',
  },
  {
    question: 'Wat is vastrecht of vast leveringstarief?',
    answer:
      'Dit zijn de vaste kosten die u betaalt aan de leverancier, ongeacht hoeveel stroom u verbruikt.',
  },
];

const howToData = [
  {
    name: 'Jaarrekening checken',
    text: 'Zoek uw jaarverbruik (kWh) en uw gecontracteerd vermogen.',
  },
  {
    name: 'Gegevens invoeren',
    text: 'Stel de sliders in op uw werkelijke waarden.',
  },
  {
    name: 'Vergelijk de kosten',
    text: 'Bekijk de geschatte jaarlijkse kosten voor beide opties.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
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
      text: 'Bespaar op uw energierekening',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De juiste keuze kan u honderden euro\'s per jaar besparen. Gebruik onze tool om de beste optie voor uw profiel te vinden.',
    },
    {
      type: 'summary',
      title: 'Bespaartips',
      items: [
        'Dynamische tarieven zijn voordelig bij verbruik buiten de piekuren.',
        'Vaste tarieven geven rust bij stijgende prijzen.',
        'Controleer of uw aansluitwaarde niet te hoog is.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Jaarverbruik',
    unitKwhYear: 'kWh/jaar',
    labelPower: 'Aansluitwaarde',
    unitKw: 'kW',
    labelMarket: 'Variabel/Dynamisch',
    labelFree: 'Vast Tarief',
    labelAnnualEst: 'Jaarlijkse schatting',
    labelPowerTerm: 'Vaste kosten (Fijo)',
    labelEnergyTerm: 'Verbruikskosten (Variabel)',
    labelDashboard: 'Energie Dashboard',
    labelMaxPower: 'Piekvermogen',
    labelMaxPowerEst: 'Geschatte piek',
    labelCo2: 'CO₂-voetafdruk',
    labelCo2Est: 'Jaarlijkse schatting',
    labelSimulator: 'Scenario Simulator',
    labelSolar: 'Zonne-energie',
    labelSolarDesc: 'Simuleer besparing met panelen (30% reductie)',
    labelShift: 'Verschuiving naar daluren',
    labelShiftDesc: 'Verbruik verplaatst naar goedkope uren:',
    badgeBetter: 'Goedkoopste optie',
    badgeWorseYear: 'jaar',
    currencySign: '€',
    monthLabels: 'Jan,Feb,Mär,Apr,Mei,Jun,Jul,Aug,Sep,Okt,Nov,Dec',
  },
};
