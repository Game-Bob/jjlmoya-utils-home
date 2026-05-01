import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-ekonomii-led';
const title = 'Калькулятор экономии LED';
const description =
  'Рассчитайте, сколько денег и кВт⋅ч вы сэкономите, заменив обычные лампочки на светодиодные. Узнайте точную годовую и месячную выгоду, а также сокращение выбросов CO2.';

const faqData = [
  {
    question: 'Сколько на самом деле экономят светодиодные лампы?',
    answer:
      'Светодиодная лампа экономит от 80% до 90% энергии по сравнению с лампой накаливания. Например, переход с 60 Вт на 9 Вт снижает затраты в этом светильнике почти до минимума при той же яркости.',
  },
  {
    question: 'Через какое время окупится замена на LED?',
    answer:
      'Благодаря низкой стоимости современных светодиодов и большой экономии инвестиции обычно окупаются менее чем за 4 месяца при обычном использовании. Если свет горит много часов, окупаемость наступит еще быстрее.',
  },
  {
    question: 'Что будет, если я поставлю LED-лампу большей мощности?',
    answer:
      'LED-лампы выделяют очень мало тепла. Поэтому вы можете ставить более яркие лампы в светильники, которые раньше были ограничены по мощности из-за нагрева ламп накаливания, соблюдая электрические пределы патрона.',
  },
  {
    question: 'Действительно ли они служат так долго, как написано на коробке?',
    answer:
      'Качественная LED-лампа служит от 15 000 до 50 000 часов. При среднем домашнем использовании 4 часа в день это означает, что лампа может прослужить более 15 лет.',
  },
  {
    question: 'Можно ли использовать LED в лампах с регулятором яркости (диммером)?',
    answer:
      'Только если на лампе явно указано "Dimmable" (диммируемая). Обычные LED не работают со старыми регуляторами и могут мерцать или гудеть.',
  },
  {
    question: 'Нужно ли менять весь светильник целиком?',
    answer:
      'В 99% случаев — нет. Достаточно заменить саму лампочку на светодиодную с тем же цоколем (E27, E14, GU10 и т.д.).',
  },
];

const howToData = [
  {
    name: 'Посчитайте точки света',
    text: 'Проверьте, сколько ламп накаливания или галогенных ламп у вас дома, и запишите их мощность в ваттах.',
  },
  {
    name: 'Выберите аналог LED',
    text: 'Выберите текущий тип лампы в калькуляторе. Соответствующие значения LED-аналога подставятся автоматически.',
  },
  {
    name: 'Укажите часы использования',
    text: 'Укажите, сколько часов в день в среднем включены лампы.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'Гид по экономии с LED: как сократить счет за электричество',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Замена традиционного освещения на технологию <strong>LED (светоизлучающий диод)</strong> — это одна из бытовых инвестиций с самым быстрым возвратом. Каждый сэкономленный ватт напрямую уменьшает сумму в квитанции в конце месяца. LED-лампа на 9 Вт дает тот же свет, что и лампа накаливания на 60 Вт, при этом <strong>потребляя на 85% меньше</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Экономия энергии', icon: 'mdi:lightning-bolt' },
        { value: '25 000ч', label: 'Срок службы LED', icon: 'mdi:clock-outline' },
        { value: '< 4 мес.', label: 'Окупаемость', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Лампы накаливания',
          description: 'Технология XX века, основанная на нагреве нити. 95% энергии тратится на тепло.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% энергии уходит в тепло', 'Срок службы: 1 000 часов', 'Высокие расходы'],
        },
        {
          title: 'Современные LED технологии',
          description: 'Текущий стандарт энергоэффективности. Мгновенное включение и минимум тепла.',
          icon: 'mdi:led-outline',
          points: ['85–90% прямой экономии', 'Срок службы: 25-50 тысяч часов', 'Минимальный нагрев'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Физика экономии',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Лампа накаливания переводит в свет лишь 5% энергии. Светодиоды используют полупроводники, что делает их радикально эффективнее. <strong>Смотрите не на ватты, а на люмены:</strong> старая лампа 60 Вт дает около 800 лм; сегодня их можно получить от LED всего на 8–9 Вт.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Таблица эквивалентов',
      icon: 'mdi:table',
      badge: 'Справка',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40 Вт (накал)</strong> → LED 5–6 Вт (450 лм)</li><li><strong>60 Вт (накал)</strong> → LED 8–10 Вт (800 лм)</li><li><strong>100 Вт (накал)</strong> → LED 13–15 Вт (1500 лм)</li><li><strong>50 Вт (галоген)</strong> → LED 6–7 Вт (450–500 лм)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Преимущества LED помимо денег',
      items: [
        'Экстремально долгий срок службы: до 15 лет и более.',
        'Мгновенный запуск на 100% яркости.',
        'Без нагрева: меньше нагрузка на кондиционер летом.',
        'Экологичность: без ртути и токсичных газов.',
        'Совместимость с большинством цоколей (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Настройки дома',
    labelBulbs: 'Кол-во ламп для замены',
    unitBulbs: 'шт.',
    labelType: 'Текущий тип ламп',
    labelHours: 'Часов работы в день',
    labelPrice: 'Цена за электричество',
    unitPrice: '₽/кВт⋅ч',
    resultBadge: 'Расчет реальной выгоды',
    labelAnnual: 'Экономия в год',
    labelMonthly: 'В месяц',
    labelEfficiency: 'Эффективность',
    labelCo2: 'Сокращение следа CO₂',
    unitLess: '% меньше',
    currencySign: '₽',
    btnInc60Title: 'Накаливания',
    btnInc60Sub: 'Классика (60Вт)',
    btnInc40Title: 'Накаливания',
    btnInc40Sub: 'Малая (40Вт)',
    btnInc100Title: 'Накаливания',
    btnInc100Sub: 'Большая (100Вт)',
    btnHalo50Title: 'Галогенная',
    btnHalo50Sub: 'Спот (50Вт)',
    usageNever: 'Почти никогда',
    usageLow: 'Редко',
    usageNormal: 'Обычное использование',
    usageModerate: 'Умеренно',
    usageHeavy: 'Интенсивно',
    usagePro: 'Профессионально',
    usageVeryHeavy: 'Очень интенсивно',
    usageAlways: 'Горит всегда',
  },
};
