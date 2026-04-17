import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'oflayn-qr-kod-generator';
const title = 'Оффлайн Генератор QR кодов';
const description =
  'Создавайте QR-коды для WiFi, URL и Контактов полностью безопасно в вашем браузере. Ваши данные никогда не покидают устройство.';

const faqData = [
  {
    question: 'Имеют ли эти QR-коды срок годности?',
    answer:
      'Нет. Сгенерированные здесь коды являются статическими. Информация закодирована прямо в изображении. Они будут работать вечно.',
  },
  {
    question: 'Сохраняете ли вы мои данные?',
    answer:
      'Абсолютно нет. Весь процесс происходит в вашем браузере (Client-Side). Никакие данные не отправляются на сервер.',
  },
  {
    question: 'Работает ли это на iPhone и Android?',
    answer:
      'Да. Большинство современных камер смартфонов читают QR-коды нативно и предлагают действие (подключиться к WiFi, открыть ссылку и т.д.).',
  },
  {
    question: 'Могу ли я использовать это без интернета?',
    answer:
      'Да. После загрузки страницы вы можете отключить сеть, и генератор продолжит работать идеально.',
  },
];

const howToData = [
  {
    name: 'Выберите тип QR',
    text: 'Выберите, нужен ли вам код для WiFi, URL или контактов (vCard).',
  },
  {
    name: 'Введите данные',
    text: 'Заполните нужные поля: название сети и пароль или веб-адрес.',
  },
  {
    name: 'Создайте и проверьте',
    text: 'Код создается мгновенно. Проверьте его, отсканировав прямо с экрана.',
  },
  {
    name: 'Скачайте',
    text: 'Сохраните QR-код как изображение, чтобы распечатать или поделиться.',
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

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Часто Задаваемые Вопросы',
  faq: faqData,
  bibliographyTitle: 'Библиография',
  bibliography: [
    { name: 'библиотека node-qrcode', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'vCard стандарт RFC 6350', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Приватность Превыше Всего: Локальная Генерация',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Этот инструмент создает QR прямо на вашем устройстве. Полная безопасность для ваших <strong>паролей WiFi</strong> или <strong>персональных данных</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Приватно', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Без сервера', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Скачать', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Советы по использованию',
      items: [
        'Данные обрабатываются только в браузере.',
        'Соблюдайте регистр в названии WiFi сети.',
        'Статичные QR: при смене пароля создайте новый код.',
        'Проверьте сканирование перед печатью.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Контакт',
    labelSsid: 'Имя сети (SSID)',
    labelPassword: 'Пароль',
    labelEncryption: 'Защита',
    labelHidden: 'Скрытая сеть',
    labelUrl: 'Веб-адрес (URL)',
    labelName: 'Имя',
    labelSurname: 'Фамилия',
    labelPhone: 'Телефон',
    labelEmail: 'Email',
    labelOrg: 'Организация',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Нет',
    downloadBtn: 'Скачать PNG',
    privacyMsg: 'Создано на 100% в браузере. Данные в безопасности.',
    placeholderSsid: 'MoyaSet_5G',
    placeholderUrl: 'https://primer.ru',
    placeholderPassword: '••••••••',
  },
};
