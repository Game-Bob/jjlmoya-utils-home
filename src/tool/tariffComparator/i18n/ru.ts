import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'sravnenie-tarifov-elektrichestva';
const title = 'Сравнение тарифов ЖКХ: Свободный vs Регулируемый';
const description =
  'Узнайте, какой тариф на свет вам выгоднее. Сравните регулируемый рынок и свободные предложения на основе вашего потребления.';

const faqData = [
  {
    question: 'Где найти мое годовое потребление?',
    answer:
      'Эта информация должна быть в вашем последнем счете за электричество в графе "Годовое потребление" или "Итого за год" в кВт·ч.',
  },
];

const howToData = [
  {
    name: 'Изучите счет',
    text: 'Найдите потребление за год и вашу разрешенную мощность.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'RUB' },
  inLanguage: 'ru',
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
      text: 'Экономия на счетах за свет',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Правильный выбор тарифа может сэкономить тысячи в год.',
    },
  ],
  ui: {
    labelConsumption: 'Годовое потребление',
    unitKwhYear: 'кВт·ч/год',
    labelPower: 'Разрешенная мощность',
    unitKw: 'кВт',
    labelMarket: 'Регулируемый тариф',
    labelFree: 'Свободный рынок (Фикс)',
    labelAnnualEst: 'Оценка за год',
    labelPowerTerm: 'За мощность (Фикс)',
    labelEnergyTerm: 'За энергию (Перем)',
    labelDashboard: 'Энерго-панель',
    labelMaxPower: 'Пиковую нагрузку',
    labelMaxPowerEst: 'Оценка пика',
    labelCo2: 'Углеродный след',
    labelCo2Est: 'Оценка за год',
    labelSimulator: 'Симулятор сценариев',
    labelSolar: 'Солнечная энергия',
    labelSolarDesc: 'Сэкономить с панелями (снижение 30%)',
    labelShift: 'Перенос на ночь',
    labelShiftDesc: 'Потребление в дешевые часы:',
    badgeBetter: 'Лучший вариант',
    badgeWorseYear: 'год',
    currencySign: '₽',
    monthLabels: 'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек',
  },
};
