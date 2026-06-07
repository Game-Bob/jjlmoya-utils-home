import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulyator-moshchnosti-konditsionera';
const title = 'Калькулятор мощности и тоннажа кондиционера';
const description =
  'Рассчитайте точный размер кондиционера для вашей комнаты в BTU, фригориях и тоннах. Укажите площадь, высоту потолка, количество людей и источники тепла.';

const faqData = [
  { question: 'Сколько BTU нужно на квадратный метр?', answer: 'Стандартная база - 600 BTU на квадратный метр при высоте потолка 2,5 м в умеренном климате. Она увеличивается с высотой, солнцем и количеством людей.' },
  { question: 'Что такое фригория?', answer: 'Фригория - старая единица охлаждения, распространённая в Испании и Латинской Америке. Одна фригория равна примерно 3,968 BTU в час.' },
  { question: 'Как перевести BTU в тонны?', answer: 'Одна тонна охлаждения равна 12 000 BTU в час. Разделите общее количество BTU на 12 000.' },
  { question: 'Влияет ли высота потолка?', answer: 'Да. Каждый метр выше 2,7 м увеличивает потребность в охлаждении примерно на 8%.' },
];

const howToData = [
  { name: 'Измерьте комнату', text: 'Измерьте длину и ширину в метрах и перемножьте, чтобы получить площадь.' },
  { name: 'Учтите людей и приборы', text: 'Добавьте количество людей и источники тепла, такие как компьютеры и телевизоры.' },
  { name: 'Выберите освещённость', text: 'Выберите лёгкую, среднюю или сильную в зависимости от прямого солнечного света.' },
  { name: 'Получите рекомендацию', text: 'Калькулятор покажет BTU, фригории и тонны для любого рынка.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'ru',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Какой размер кондиционера мне нужен?', level: 2 },
    { type: 'paragraph', html: 'Правильный размер зависит от площади, высоты потолка, количества людей и солнечного света. Используйте этот калькулятор для точных BTU, фригорий и тонн.' },
    { type: 'table', headers: ['Площадь', 'Рекомендуемые BTU', 'Тоннаж', 'Типичное использование'], rows: [['10 м² (маленькая спальня)', '6 000 - 7 000 BTU', '0,5 - 0,75 т', 'Гостевая комната'], ['15 м² (спальня)', '9 000 - 10 000 BTU', '0,75 - 1 т', 'Главная спальня'], ['20 м² (гостиная)', '12 000 - 14 000 BTU', '1 - 1,25 т', 'Маленькая гостиная'], ['30 м² (открытая планировка)', '18 000 - 21 000 BTU', '1,5 - 1,75 т', 'Студия'], ['40 м² (большая гостиная)', '24 000 - 28 000 BTU', '2 - 2,5 т', 'Большая гостиная + столовая']] },
    { type: 'title', text: 'Почему неправильный размер стоит денег', level: 2 },
    { type: 'paragraph', html: 'Слишком маленький кондиционер работает без остановки, никогда не достигает нужной температуры и преждевременно изнашивает компрессор. Слишком большой выбрасывает холодный воздух короткими порывами и оставляет комнату влажной.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU на м² база', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU на тонну', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU на фригорию', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Площадь комнаты', labelRoomSizeFt: 'Площадь', labelCeilingHeight: 'Высота потолка', labelCeilingHeightFt: 'Высота',
    labelPeople: 'Люди', labelHeatSources: 'Источники тепла', labelSunExposure: 'Освещённость', labelRoomType: 'Тип комнаты',
    labelCalculate: 'Рассчитать', labelResult: 'Результат', labelBtus: 'BTU/ч', labelFrigorias: 'Фригории', labelTons: 'Тонны',
    labelRequired: 'Требуется', labelRecommended: 'Рекомендуется', labelUnitBtu: 'BTU/ч', labelUnitFrigorias: 'Фригории', labelUnitTons: 'Тонны',
    labelMetric: 'Метрическая', labelImperial: 'Имперская', labelRoomCozy: 'Уютно', labelRoomWarm: 'Тепло', labelRoomHot: 'Жарко',
    bdBaseCooling: 'Базовое охлаждение', bdCeilingHeight: 'Высота потолка', bdPeople: 'Люди', bdHeatSources: 'Источники тепла', bdSunRoom: 'Солнце и тип комнаты',
    sunLight: 'Лёгкая', sunMedium: 'Средняя', sunHeavy: 'Сильная',
    roomBedroom: 'Спальня', roomLiving: 'Гостиная', roomKitchen: 'Кухня', roomOffice: 'Офис', roomServer: 'Серверная',
    errorRequired: 'Заполните все поля',
  },
};
