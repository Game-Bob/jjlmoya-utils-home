import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-rasstoyaniya-proektora';
const title = 'Калькулятор расстояния проектора — Проекция и Экран';
const description =
  'Рассчитайте точное расстояние для установки проектора на основе желаемого размера экрана и проекционного отношения (Throw Ratio).';

const faqData = [
  {
    question: 'Что такое Throw Ratio (проекционное отношение)?',
    answer:
      'Это число, которое определяет размер изображения на определенном расстоянии. Рассчитывается как отношение расстояния до экрана к его ширине. Коэффициент 1.5 означает, что с 1.5м вы получите 1м ширины экрана.',
  },
  {
    question: 'Какое расстояние нужно для экрана 100 дюймов?',
    answer:
      'Зависит от коэффициента проектора. При стандартном 1.5:1 потребуется около 3.3м. Короткофокусные (Short Throw) проекторы справятся с менее чем 1 метра.',
  },
  {
    question: 'В чем разница между 16:9 и 4:3?',
    answer:
      '16:9 — панорамный формат для современных фильмов. 4:3 — классика для презентаций. Выбор правильного формата исключает большие черные полосы.',
  },
  {
    question: 'Важна ли высота установки проектора?',
    answer:
      'Да. У проекторов есть вертикальный сдвиг или коррекция трапеции. В идеале его ставят по центру относительно верхней или нижней границы экрана.',
  },
];

const howToData = [
  {
    name: 'Узнайте Throw Ratio',
    text: 'Найдите в инструкции или на коробке значение, например 1.2:1 или 1.5-1.8:1.',
  },
  {
    name: 'Задайте размер экрана',
    text: 'Введите диагональ в дюймах или доступную ширину на стене.',
  },
  {
    name: 'Выберите формат',
    text: 'Выберите 16:9 для фильмов, 4:3 для офиса или 21:9 для кинотеатрального эффекта.',
  },
  {
    name: 'Получите результат',
    text: 'Калькулятор покажет точное расстояние для установки кронштейна.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'Освойте геометрию проекции',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Установка проектора "на глаз" может испортить всё. Слишком близко — экран мал; слишком далеко — не хватит яркости. Ключ к успеху — <strong>Throw Ratio</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Формула дистанции', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ультракороткофокусные', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Длиннофокусные', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Что такое Throw Ratio?',
          description: 'Соотношение расстояния к ширине изображения. TR 1.5 означает 1.5м дистанции на каждый метр ширины экрана.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, для малых комнат', 'TR 1–2: Стандарт для гостиных', 'TR > 2: Long Throw, для залов'],
        },
        {
          title: 'Формат (Aspect Ratio)',
          description: 'Формат задает пропорции. Ошибка ведет к черным полосам и «съедает» яркость.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: стандарт HD/4K для дома', '21:9: панорамный формат кино', '4:3: формат для офиса'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Профессиональный монтаж',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Если есть Lens Shift (сдвиг линз), используйте его. Он не портит разрешение в отличие от цифровой коррекции Keystone.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Свет в комнате',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>В светлых помещениях используйте экраны с высоким коэффициентом усиления (Gain > 1.0).</p>',
    },
    {
      type: 'summary',
      title: 'Чек лист установки',
      items: [
        'Проверьте Throw Ratio перед тем как сверлить стену.',
        'Замерьте свободное место на стене.',
        'Выровняйте проектор по центру экрана.',
        'Избегайте цифрового Keystone: лучше поправьте физически.',
        'Уберите источники света, бьющие на экран.',
      ],
    },
  ],
  ui: {
    configTitle: 'Настройки',
    configSubtitle: 'Задайте экран и проектор',
    labelDiagonal: 'Диагональ экрана',
    labelDiagonalUnit: 'Дюймы (")',
    labelFormat: 'Формат экрана',
    labelThrowRatio: 'Проекционное отношение (Throw Ratio)',
    throwRatioHint: 'Пример: 1.50 значит 1.5м дистанции на 1м ширины экрана.',
    ratio169Sub: 'ТВ / HD',
    ratio219Sub: 'Кино',
    ratio43Sub: 'Ретро',
    labelWidth: 'Ширина экрана',
    labelHeight: 'Высота экрана',
    labelDistance: 'Нужная дистанция',
    simulationBadge: 'Живая симуляция',
  },
};
