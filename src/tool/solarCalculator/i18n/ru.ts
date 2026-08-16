import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'solnechnyj-kalkulyator';
const title = 'Калькулятор наклона солнечных панелей';
const description =
  'Рассчитайте оптимальный угол наклона для ваших солнечных панелей на основе вашей географической широты.';

const faqData = [
  {
    question: 'Что если у моей крыши не идеальный наклон?',
    answer:
      'Это не критично. Потери при отклонении на 5-10° составляют менее 3% годовой выработки. Важнее избегать теней.',
  },
  {
    question: 'В какую сторону должны смотреть панели?',
    answer:
      'В Северном полушарии: всегда на Юг (азимут 180°). В Южном полушарии: на Север.',
  },
  { question: "Какая дополнительная информация помогает сделать выбор? 1", answer: "Сравнивайте одинаковые исходные данные и учитывайте использование, обслуживание и долгосрочные расходы." },
  { question: "Какая дополнительная информация помогает сделать выбор? 2", answer: "Сравнивайте одинаковые исходные данные и учитывайте использование, обслуживание и долгосрочные расходы." },
];

const howToData = [
  {
    name: 'Введите широту',
    text: 'Укажите широту вашего местоположения или используйте кнопку автоопределения.',
  },
  {
    name: 'Проверьте угол',
    text: 'Оптимальный годовой угол: основное значение для фиксированных установок.',
  },
  { name: "Какая дополнительная информация помогает сделать выбор? 1", text: "Сравнивайте одинаковые исходные данные и учитывайте использование, обслуживание и долгосрочные расходы." },
  { name: "Какая дополнительная информация помогает сделать выбор? 2", text: "Сравнивайте одинаковые исходные данные и учитывайте использование, обслуживание и долгосрочные расходы." },
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
      text: 'Наука солнечного наклона',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Эффективность панелей напрямую зависит от угла падения солнечных лучей.',
    },
    {
      type: 'summary',
      title: 'Ключи к эффективной установке',
      items: [
        'Годовой оптимальный угол: главный ориентир.',
        'Избегайте теней любой ценой.',
        'Ориентация на Юг в северных широтах.',
      ],
    },
    {
      type: 'paragraph',
      html: "Этот раздел дополняет рекомендации для сравнения сценариев и понимания результата. 1.",
    },
    {
      type: 'paragraph',
      html: "Этот раздел дополняет рекомендации для сравнения сценариев и понимания результата. 2.",
    },
    {
      type: 'paragraph',
      html: "Этот раздел дополняет рекомендации для сравнения сценариев и понимания результата. 3.",
    },
    {
      type: 'paragraph',
      html: "Этот раздел дополняет рекомендации для сравнения сценариев и понимания результата. 4.",
    },
    {
      type: 'paragraph',
      html: "Этот раздел дополняет рекомендации для сравнения сценариев и понимания результата. 5.",
    },
  ],
  ui: {
    labelLatitude: 'Географическая широта',
    btnLocate: 'Определить мое местоположение',
    labelOptimal: 'Оптимальный годовой угол',
    labelEfficiency: 'Макс. эффективность',
    labelWinter: 'Зима',
    labelSummer: 'Лето',
    hemisphereNorth: 'Северное полушарие: Ориентир на ЮГ',
    hemisphereSouth: 'Южное полушарие: Ориентир на СЕВЕР',
    geoNotAvailable: 'Геолокация недоступна в этом браузере.',
  },
};
