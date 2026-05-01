import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'gunes-paneli-egim-hesaplama';
const title = 'Güneş Paneli Eğim Hesaplayıcı';
const description =
  'Bulunduğunuz enleme göre güneş panelleriniz için en iyi eğim açısını hesaplayın. Sabit ve mevsimsel kurulum değerlerini öğrenin.';

const faqData = [
  {
    question: 'Çatımın eğimi mükemmel değilse ne olur?',
    answer:
      'Büyük bir sorun değil. 5-10 derecelik sapmalar yıllık üretimde %3\'ten az kayba neden olur. Tam açıya odaklanmaktan çok gölgelenmeyi önlemek daha önemlidir.',
  },
  {
    question: 'En iyi açı dünyanın her yerinde aynı mıdır?',
    answer:
      'Hayır. Doğrudan enleminize bağlıdır. İstanbul (~41°K) ile Oslo (~60°K) arasındaki ideal açılar farklıdır.',
  },
  {
    question: 'Paneller hangi yöne bakmalı?',
    answer:
      'Kuzey Yarımküre\'de her zaman Güney\'e bakmalıdır. Güney Yarımküre\'de ise Kuzey\'e.',
  },
];

const howToData = [
  {
    name: 'Enlemi girin',
    text: 'Enleminizi ondalık derece olarak yazın veya otomatik konum bulmayı kullanın.',
  },
  {
    name: 'En iyi açıyı kontrol edin',
    text: 'Yıllık en iyi açı, sabit kurulumlar için ana değerdir.',
  },
  {
    name: 'Mevsimsel ayar (isteğe bağlı)',
    text: 'Desteğiniz uygunsa, kış ve yaz açılarını kullanarak verimi artırın.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
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
      text: 'Güneş Eğimi Bilimi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Panellerin güneşe dik açıyla bakması verimliliğin temelidir. Konumunuz, güneşin gökyüzündeki yerini belirler.',
    },
    {
      type: 'summary',
      title: 'Verimli kurulum için anahtarlar',
      items: [
        'Yıllık en uygun açı temel referanstır.',
        'Küçük sapmalar verimi çok düşürmez.',
        'Gölge en büyük engeldir.',
        'Kuzey yarımkürede Güney\'e yönelin.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Coğrafi Enlem',
    btnLocate: 'Konumumu bul',
    labelOptimal: 'Yıllık En İyi Açı',
    labelEfficiency: 'Maksimum Verim',
    labelWinter: 'Kış',
    labelSummer: 'Yaz',
    hemisphereNorth: 'Kuzey Yarımküre — GÜNEY\'e yöneltin',
    hemisphereSouth: 'Güney Yarımküre — KUZEY\'e yöneltin',
    geoNotAvailable: 'Konum servisleri kullanılamıyor.',
  },
};
