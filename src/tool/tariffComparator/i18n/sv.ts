import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jamfor-deltra-priser';
const title = 'Jämför Elavtal: Rörligt vs Fast Pris';
const description =
  'Se vilket elavtal som lönar sig mest för dig. Jämför det rörliga marknadspriset mot fasta avtal baserat på din årsförbrukning.';

const faqData = [
  {
    question: 'Vad är bäst, fast eller rörligt elpris?',
    answer:
      'Fast pris ger trygghet och förutsägbarhet. Rörligt pris är oftast billigast i längden men kan svänga kraftigt.',
  },
  {
    question: 'Var hittar jag min årsförbrukning?',
    answer:
      'Denna siffra hittar du på din senaste årsfaktura från ditt elbolag, angivet i kWh.',
  },
];

const howToData = [
  {
    name: 'Kolla fakturan',
    text: 'Leta upp årsförbrukning (kWh) och din säkringsstorlek (kW).',
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
      text: 'Sänk din elkostnad',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att välja rätt avtal kan spara tusenlappar per år.',
    },
  ],
  ui: {
    labelConsumption: 'Årsförbrukning',
    unitKwhYear: 'kWh/år',
    labelPower: 'Säkringsstorlek',
    unitKw: 'kW',
    labelMarket: 'Rörligt / Marknadspris',
    labelFree: 'Fast Pris',
    labelAnnualEst: 'Beräknad årskostnad',
    labelPowerTerm: 'Fasta Avgifter',
    labelEnergyTerm: 'Elkostnad (Rörlig)',
    labelDashboard: 'Energiöversikt',
    labelMaxPower: 'Toppbelastning',
    labelMaxPowerEst: 'Beräknad topp',
    labelCo2: 'Klimatavtryck',
    labelCo2Est: 'Beräknat per år',
    labelSimulator: 'Scenarie-simulator',
    labelSolar: 'Solenergi',
    labelSolarDesc: 'Simulera vinst med paneler (30% minskning)',
    labelShift: 'Tidsförflyttning',
    labelShiftDesc: 'Förbrukning flyttad till lågpris:',
    badgeBetter: 'Billigaste alternativet',
    badgeWorseYear: 'år',
    currencySign: 'kr',
    monthLabels: 'Jan,Feb,Mar,Apr,Maj,Jun,Jul,Aug,Sep,Okt,Nov,Dec',
  },
};
