import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'stromtarif-vergleich';
const title = 'Stromtarif Vergleich: Festpreis vs. Dynamisch';
const description =
  'Finden Sie heraus, welcher Stromtarif am besten zu Ihnen passt. Vergleichen Sie Festpreise mit dynamischen Tarifen basierend auf Ihrem Verbrauch.';

const faqData = [
  {
    question: 'Was ist besser, ein Festpreis oder ein dynamischer Tarif?',
    answer:
      'Festpreise bieten Planbarkeit. Dynamische Tarife (wie PVPC in Spanien) nutzen günstige Börsenpreise, sind aber volatil. Unser Rechner hilft Ihnen bei der Entscheidung.',
  },
  {
    question: 'Wie finde ich meinen Jahresverbrauch heraus?',
    answer:
      'Diesen Wert finden Sie auf Ihrer letzten Jahresabrechnung, angegeben in kWh.',
  },
  {
    question: 'Was ist die vertraglich vereinbarte Leistung?',
    answer:
      'Das ist die maximale Last (kW), die Sie gleichzeitig nutzen können. Zu hohe Werte kosten unnötig Geld, zu niedrige lassen die Sicherung rausfliegen.',
  },
];

const howToData = [
  {
    name: 'Abrechnung prüfen',
    text: 'Suchen Sie Ihren Jahresverbrauch in kWh und Ihre Leistung in kW.',
  },
  {
    name: 'Werte einstellen',
    text: 'Passen Sie die Schieberegler an Ihre realen Daten an.',
  },
  {
    name: 'Ergebnisse vergleichen',
    text: 'Sehen Sie die geschätzten Jahreskosten für beide Tarifmodelle.',
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
  inLanguage: 'de',
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
      text: 'Stromkosten verstehen und sparen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Wahl des richtigen Tarifs kann Hunderte von Euro im Jahr sparen. Vergleichen Sie basierend auf Ihrem individuellen Profil.',
    },
    {
      type: 'summary',
      title: 'Entscheidungshilfen',
      items: [
        'Dynamische Tarife lohnen sich bei flexiblem Verbrauch.',
        'Festpreise schützen vor Preissprüngen.',
        'Die Leistungskostensenkung ist oft der schnellste Weg zum Sparen.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Jahresverbrauch',
    unitKwhYear: 'kWh/Jahr',
    labelPower: 'Vertragsleistung',
    unitKw: 'kW',
    labelMarket: 'Dynamischer Tarif',
    labelFree: 'Festpreis-Tarif',
    labelAnnualEst: 'Geschätzte Jahreskosten',
    labelPowerTerm: 'Grundpreis (Leistung)',
    labelEnergyTerm: 'Arbeitspreis (Verbrauch)',
    labelDashboard: 'Energie-Dashboard',
    labelMaxPower: 'Spitzenlast',
    labelMaxPowerEst: 'Geschätzte Spitze',
    labelCo2: 'CO₂-Fußabdruck',
    labelCo2Est: 'Jährliche Schätzung',
    labelSimulator: 'Szenario-Simulator',
    labelSolar: 'Solar-Eigenverbrauch',
    labelSolarDesc: 'Ersparnis mit Photovoltaik simulieren (30 % Reduktion)',
    labelShift: 'Lastverschiebung',
    labelShiftDesc: 'In günstige Zeiten verschoben:',
    badgeBetter: 'Günstigste Option',
    badgeWorseYear: 'Jahr',
    currencySign: '€',
    monthLabels: 'Jan,Feb,Mär,Apr,Mai,Jun,Jul,Aug,Sep,Okt,Nov,Dez',
  },
};
