import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'tochka-rosy';
const title = 'Калькулятор Точки Росы';
const description = 'Рассчитайте температуру образования конденсата на стенах на основе влажности и комнатной температуры. Важный инструмент для профилактики плесени и защиты вашего дома.';

const faqData = [
  {
    question: 'Что такое точка росы?',
    answer: 'Это температура, до которой должен охладиться воздух, чтобы содержащийся в нем водяной пар сконденсировался в жидкость. Чем выше влажность, тем ближе точка росы к текущей температуре.',
  },
  {
    question: 'Почему в углах комнат появляется плесень?',
    answer: 'Углы — это «мостики холода», где стена холоднее всего. Если температура поверхности падает ниже точки росы, образуется конденсат. Плесень нуждается в этой постоянной влаге для роста.',
  },
  {
    question: 'Как снизить влажность в доме?',
    answer: 'Самый эффективный способ — проветривание (особенно после душа или готовки) и использование осушителей. Поддержание стабильной температуры также помогает воздуху удерживать больше пара без конденсации.',
  },
  {
    question: 'Опасна ли плесень от конденсата?',
    answer: 'Да. Плесень выделяет споры, вызывающие респираторные заболевания и аллергии. Определение риска конденсации — первый шаг к здоровому дому.',
  },
];

const howToData = [
  {
    name: 'Измерьте температуру и влажность',
    text: 'Используйте термометр и гигрометр, чтобы узнать текущие значения в комнате.',
  },
  {
    name: 'Введите значения',
    text: 'Укажите температуру и процент влажности в калькуляторе.',
  },
  {
    name: 'Узнайте критическую температуру',
    text: 'Инструмент покажет точную температуру, при которой на поверхностях начнет выпадать роса.',
  },
  {
    name: 'Проверьте поверхности',
    text: 'Если у вас есть ИК-термометр, замерьте температуру стен. Если она ниже или равна результату, нужно проветривание или утепление.',
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
      text: 'Что такое точка росы и почему она важна?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Точка росы — это температура перехода влаги из воздуха в жидкое состояние. В быту это граница между здоровым домом и сырым помещением. Когда стена холоднее точки росы, на ней выпадает конденсат — идеальная среда для плесени.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Безопасно', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Идеал влажности', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Высокий риск', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Формула Магнуса Тетенса',
          description: 'Для расчетов используется метод Магнуса-Тетенса, рекомендованный ВМО для температур от 0°C до 50°C.',
          icon: 'mdi:calculator',
          points: ['Научная точность подтверждена', 'Оптимально для жилых помещений'],
        },
        {
          title: 'Мостики холода',
          description: 'Углы и оконные рамы — самые холодные места. Если их температура ниже точки росы, плесень неизбежна.',
          icon: 'mdi:home-thermometer',
          points: ['Углы наиболее уязвимы', 'Утепление предотвращает конденсат'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Уровни риска',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Низкий (разница &gt; 5°C):</strong> Стены в безопасности. <strong>Средний (3–5°C):</strong> Следите за углами. <strong>Высокий (1–3°C):</strong> Возможен конденсат на окнах — проветрите. <strong>Опасно (&lt; 1°C):</strong> Активный конденсат, риск черной плесени.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Золотое правило',
      icon: 'mdi:thermometer-alert',
      badge: 'Совет эксперта',
      html: '<p>Если температура стены менее чем на <strong>3°C выше точки росы</strong>, риск конденсации критический. Проветривайте и держите влажность 40–60%.</p>',
    },
    {
      type: 'summary',
      title: 'Как избежать конденсата',
      items: [
        'Проветривайте ежедневно после душа или готовки.',
        'Держите влажность в пределах 40–60%.',
        'Включайте вытяжку на кухне.',
        'Не сушите белье в комнате без вентиляции.',
        'Утеплите стены для устранения холодных поверхностей.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Температура воздуха',
    labelHumidity: 'Относит. влажность',
    labelDewPoint: 'Точка росы',
    riskLow: 'Низкий риск',
    riskMedium: 'Средний риск',
    riskHigh: 'Высокий риск',
    riskExtreme: 'Опасно',
    riskLowDesc: 'Разница > 5°C. Безопасно.',
    riskMediumDesc: 'Разница 3–5°C. Проверьте углы.',
    riskHighDesc: 'Разница 1–3°C. Проветрите сейчас.',
    riskExtremeDesc: 'Разница < 1°C. Идет конденсация.',
  },
};
