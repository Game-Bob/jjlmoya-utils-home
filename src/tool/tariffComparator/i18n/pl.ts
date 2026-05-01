import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'porownanie-taryf-pradu';
const title = 'Porównywarka Taryf Prądu: Rynek Wolny vs Regulowany';
const description =
  'Dowiedz się, która taryfa za prąd najbardziej Ci się opłaca. Porównaj rynek regulowany z ofertami wolnorynkowymi na podstawie Twojego zużycia.';

const faqData = [
  {
    question: 'Co jest lepsze, cena stała czy zmienna?',
    answer:
      'Cena stała daje przewidywalność. Taryfy zmienne (jak G11/G12 w Polsce) zależą od regulacji lub rynku hurtowego. Nasze narzędzie pomoże Ci zdecydować.',
  },
  {
    question: 'Gdzie znajdę roczne zużycie?',
    answer:
      'Informację tę znajdziesz na fakturze rozliczeniowej, oznaczoną jako "Zużycie roczne" w kWh.',
  },
  {
    question: 'Co to jest moc umowna?',
    answer:
      'To maksymalna ilość energii (kW), jaką możesz pobierać jednocześnie. W domach standard to 12.5–16 kW.',
  },
];

const howToData = [
  {
    name: 'Sprawdź fakturę',
    text: 'Znajdź zużycie roczne (kWh) i moc umowną (kW).',
  },
  {
    name: 'Wprowadź dane',
    text: 'Dopasuj suwaki do swoich realnych parametrów.',
  },
  {
    name: 'Porównaj wyniki',
    text: 'Zobacz szacunkową różnicę w kosztach rocznych.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
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
      text: 'Oszczędź na rachunkach za prąd',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Wybór odpowiedniej taryfy może oszczędzić Ci setki złotych rocznie.',
    },
    {
      type: 'summary',
      title: 'Klucze do oszczędzania',
      items: [
        'Regularnie sprawdzaj nowe oferty sprzedawców.',
        'Zmniejsz moc umowną, jeśli nigdy nie przekraczasz progu.',
        'Przenieś duże zużycie na tańsze godziny w taryfie G12.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Zużycie Roczne',
    unitKwhYear: 'kWh/rok',
    labelPower: 'Moc Umowna',
    unitKw: 'kW',
    labelMarket: 'Rynek Regulowany',
    labelFree: 'Cena Stała / Wolny Rynek',
    labelAnnualEst: 'Szacunek roczny',
    labelPowerTerm: 'Opłata za Moc (Stała)',
    labelEnergyTerm: 'Opłata za Prąd (Zmienna)',
    labelDashboard: 'Panel Energetyczny',
    labelMaxPower: 'Maks. Moc Pobierana',
    labelMaxPowerEst: 'Szacunkowy szczyt',
    labelCo2: 'Ślad CO₂',
    labelCo2Est: 'Szacunek roczny',
    labelSimulator: 'Symulator Scenariuszy',
    labelSolar: 'Fotowoltaika',
    labelSolarDesc: 'Symuluj zysk z paneli (30% redukcji)',
    labelShift: 'Przesunięcie na Tanią Strefę',
    labelShiftDesc: 'Zużycie przesunięte na tanią tano:',
    badgeBetter: 'Tańsza opcja',
    badgeWorseYear: 'rok',
    currencySign: 'zł',
    monthLabels: 'Sty,Lut,Mar,Kwi,Maj,Cze,Lip,Sie,Wrz,Paź,Lis,Gru',
  },
};
