import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'confronto-tariffe-luce';
const title = 'Confrontatore Tariffe Luce: Mercato Libero vs Tutelato';
const description =
  'Scopri quale tariffa luce ti conviene di più. Confronta il mercato tutelato vs mercato libero in base ai tuoi consumi reali.';

const faqData = [
  {
    question: 'È meglio il mercato libero o quello tutelato?',
    answer:
      'Il mercato tutelato ha prezzi variabili basati sull\'andamento dell\'energia. Il mercato libero offre stabilità con prezzi fissi. Dipende dalla tua propensione al rischio.',
  },
  {
    question: 'Dove trovo il mio consumo annuo?',
    answer:
      'Puoi trovarlo nell\'ultima bolletta della luce, solitamente indicato come "Consumo Annuo" in kWh.',
  },
  {
    question: 'Cos\'è la potenza impegnata?',
    answer:
      'È il limite massimo di kW che puoi usare contemporaneamente. Per una casa standard è solitamente 3 kW.',
  },
];

const howToData = [
  {
    name: 'Controlla la bolletta',
    text: 'Cerca il consumo annuo (kWh) e la potenza (kW).',
  },
  {
    name: 'Inserisci i dati',
    text: 'Regola i cursori con i tuoi valori reali.',
  },
  {
    name: 'Confronta i costi',
    text: 'Guarda la stima del costo annuo per le due opzioni.',
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
  inLanguage: 'it',
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
      text: 'Risparmiare sulla bolletta elettrica',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scegliere la tariffa corretta può farti risparmiare centinaia di euro. Confronta le opzioni in base al tuo profilo di consumo.',
    },
    {
      type: 'summary',
      title: 'Chiavi per decidere',
      items: [
        'Il mercato tutelato conviene se i prezzi all\'ingrosso scendono.',
        'Il prezzo fisso ti protegge dai rincari improvvisi.',
        'Ridurre la potenza può abbassare i costi fissi.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Consumo Annuo',
    unitKwhYear: 'kWh/anno',
    labelPower: 'Potenza Contrattuale',
    unitKw: 'kW',
    labelMarket: 'Mercato Tutelato',
    labelFree: 'Mercato Libero (Fisso)',
    labelAnnualEst: 'Stima costo annuo',
    labelPowerTerm: 'Quota Potenza (Fisso)',
    labelEnergyTerm: 'Quota Energia (Variabile)',
    labelDashboard: 'Dashboard Energetico',
    labelMaxPower: 'Picco di Potenza',
    labelMaxPowerEst: 'Stima picco',
    labelCo2: 'Impronta di CO₂',
    labelCo2Est: 'Stima annuale',
    labelSimulator: 'Simulatore di Scenari',
    labelSolar: 'Autoconsumo Solare',
    labelSolarDesc: 'Simula risparmio con pannelli (riduzione 30%)',
    labelShift: 'Spostamento in F3',
    labelShiftDesc: 'Consumo spostato in ore low-cost:',
    badgeBetter: 'Opzione più economica',
    badgeWorseYear: 'anno',
    currencySign: '€',
    monthLabels: 'Gen,Feb,Mar,Apr,Mag,Giu,Lug,Ago,Set,Ott,Nov,Dic',
  },
};
