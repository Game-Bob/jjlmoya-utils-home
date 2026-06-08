import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-osveshcheniya-i-lyumenov-dlya-doma';
const title = 'Калькулятор Освещения и Люменов для Дома';
const description =
  'Точно рассчитайте, сколько люменов и лампочек вам нужно для любой комнаты. Выберите тип комнаты, размеры и тип лампы, чтобы получить профессиональный план освещения с оценками люкс в реальном времени.';

const faqData = [
  {
    question: 'Сколько люменов мне нужно для гостиной?',
    answer:
      'Для типичной гостиной ориентируйтесь на примерно 150 люкс на полу. Умножьте площадь комнаты в квадратных метрах на 150, чтобы получить необходимое количество люменов. Для комнаты площадью 20 квадратных метров требуется примерно 3000 люменов.',
  },
  {
    question: 'В чём разница между люксами и люменами?',
    answer:
      'Люмены измеряют общий световой поток лампочки. Люксы измеряют свет, который действительно достигает поверхности. Комната с высокими потолками или тёмными стенами требует больше люменов для достижения того же уровня люкс, потому что свет теряется из-за расстояния и поглощения.',
  },
  {
    question: 'Действительно ли светодиодные лампы экономят энергию?',
    answer:
      'Да. Светодиодные лампы производят около 100 люменов на ватт, тогда как лампы накаливания производят только около 15. Светодиодная лампа 10W даёт такой же свет, как лампа накаливания 60W, используя одну шестую часть электроэнергии.',
  },
  {
    question: 'Как цвет комнаты влияет на потребность в освещении?',
    answer:
      'Тёмные стены и потолки поглощают свет. В комнате с тёмными поверхностями может потребоваться на 50% больше люменов, чем рекомендуется по стандарту.',
  },
  {
    question: 'Какой уровень люкс хорош для чтения?',
    answer:
      'Для комфортного чтения нужно 300-500 люкс на странице. Обычное общее освещение обычно обеспечивает 150-200 люкс, поэтому добавьте настольную лампу рядом с местом для чтения для дополнительной яркости.',
  },
  {
    question: 'Можно ли диммировать светодиодные лампы?',
    answer:
      'Только если они маркированы как диммируемые. Стандартные светодиоды могут мигать или иметь сокращённый срок службы при подключении к диммеру. Всегда проверяйте упаковку на наличие символа диммируемости перед установкой.',
  },
];

const howToData = [
  {
    name: 'Выберите тип комнаты',
    text: 'Выберите функцию комнаты. Кухням и офисам нужен более яркий свет, чем спальням или коридорам.',
  },
  {
    name: 'Введите размеры',
    text: 'Введите ширину, длину и высоту потолка комнаты. Калькулятор использует их для определения индекса помещения и коэффициента использования света.',
  },
  {
    name: 'Выберите тип лампы и их количество',
    text: 'Выберите предпочтительную технологию ламп и количество светильников. Калькулятор подскажет, нужны ли вам дополнительные лампы.',
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
  inLanguage: 'ru',
};

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Полное Руководство по Дизайну Домашнего Освещения и Планированию Люменов',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Правильное освещение превращает дом в уютное жилище. Помимо эстетики, правильное количество света влияет на настроение, продуктивность и даже здоровье глаз. <strong>Наш калькулятор домашнего освещения</strong> помогает точно определить, сколько люменов вам нужно для любой комнаты, учитывая размер комнаты, высоту потолка, цвета поверхностей и тип лампы.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Рекомендуемый Диапазон Люкс', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Эффективность LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Коэффициент Запаса', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Тёплое Окружающее Освещение',
          description: 'Идеально для гостиных и спален. Создаёт уютную атмосферу и снижает нагрузку на глаза вечером.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Тёплая цветовая температура (2700K)', 'Несколько диммируемых источников'],
        },
        {
          title: 'Яркое Рабочее Освещение',
          description: 'Необходимо для кухонь, офисов и ванных комнат. Обеспечивает чёткую видимость для детальной работы.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Холодный белый (4000K)', 'Сфокусировано на рабочих поверхностях'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Почему Размеры Комнаты Имеют Значение',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Свет распространяется и ослабевает с расстоянием. Лампочка, достаточно яркая для потолка высотой 2,5 метра, может быть слишком тусклой для потолка высотой 4 метра. Калькулятор учитывает это, используя формулу индекса помещения, которая учитывает как площадь пола, так и высоту монтажа, чтобы оценить, сколько света действительно достигает вашей рабочей поверхности.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Быстрая Справочная Таблица Люкс',
      icon: 'mdi:table',
      badge: 'Справка',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Гостиная</strong> → 150 lux</li><li><strong>Кухня</strong> → 300 lux</li><li><strong>Спальня</strong> → 100 lux</li><li><strong>Ванная</strong> → 200 lux</li><li><strong>Офис</strong> → 500 lux</li><li><strong>Коридор</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Профессиональные Советы для Лучшего Освещения',
      items: [
        'Используйте три типа освещения: общее, рабочее и акцентное.',
        'Используйте диммеры для регулировки яркости в разное время суток.',
        'Выбирайте светодиодные лампы для долгого срока службы и низкого энергопотребления.',
        'Размещайте рабочие лампы с противоположной стороны от вашей ведущей руки, чтобы избежать теней.',
        'Рассмотрите умные лампы для автоматического расписания и изменения цветовой температуры.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Калькулятор Освещения Комнаты',
    labelRoomType: 'Тип комнаты',
    labelRoomWidth: 'Ширина',
    labelRoomLength: 'Длина',
    labelHeight: 'Потолок',
    labelBulbType: 'Лампа',
    labelBulbWatt: 'Мощность',
    labelFixtures: 'Светильники',
    labelAmbient: 'Атмосфера',
    btnAmbientCozy: 'Уютная',
    btnAmbientNormal: 'Нормальная',
    btnAmbientBright: 'Яркая',
    unitMetricRoom: 'м',
    unitImperialRoom: 'ft',
    unitHeight: 'м',
    unitBulbs: 'шт',
    unitWatt: 'Вт',
    unitLux: 'люкс',
    labelTargetLux: 'Целевые люкс',
    labelCurrentLux: 'Текущие люкс',
    labelBulbsNeeded: 'Нужно ламп',
    labelRoomArea: 'Площадь',
    statusOptimal: 'Идеально',
    statusInsufficient: 'Слишком Тускло',
    statusExcess: 'Слишком Ярко',
    btnLiving: 'Гостиная',
    btnKitchen: 'Кухня',
    btnBedroom: 'Спальня',
    btnBathroom: 'Ванная',
    btnOffice: 'Офис',
    btnHallway: 'Коридор',
    btnBulbLED: 'LED',
    btnBulbCFL: 'КЛЛ',
    btnBulbHalogen: 'Галоген',
    btnBulbIncandescent: 'Лампа накал.',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Ваше освещение идеально сбалансировано для этой комнаты.',
    tipInsufficient: 'Добавьте больше светильников или ламп большей мощности.',
    tipExcess: 'Уменьшите количество светильников или приглушите, чтобы сэкономить энергию.',
    labelManualAdjust: 'Ручная корректировка',
    labelSummary: 'Ваш план освещения',
    labelTotalLumens: 'Всего люменов необходимо',
    labelSuggestedSetup: 'Рекомендуемая конфигурация',
    btnExport: 'Экспорт PDF',
  },
};
