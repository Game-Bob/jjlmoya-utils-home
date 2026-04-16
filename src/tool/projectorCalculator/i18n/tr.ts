import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'projektsiyon-mesafe-hesaplama';
const title = 'Projeksiyon Mesafe Hesaplayıcı — Atım Oranı';
const description =
  'İstediğiniz ekran boyutuna ve projeksiyon cihazınızın Atım Oranı\'na (Throw Ratio) göre tam kurulum mesafesini hesaplayın.';

const faqData = [
  {
    question: 'Atım Oranı (Throw Ratio) nedir?',
    answer:
      'Projeksiyon cihazının belirli bir mesafeden ne kadar büyük bir görüntü oluşturacağını tanımlayan bir sayıdır. Mesafe bölü görüntü genişliği olarak hesaplanır. 1.5 oranı, 1.5m mesafeden 1m genişliğinde görüntü alacağınız anlamına gelir.',
  },
  {
    question: '100 inç görüntü için ne kadar mesafe gerekir?',
    answer:
      'Cihazınızın atım oranına bağlıdır. 1.5:1 gibi standart bir oranda yaklaşık 3.3m gerekir. Kısa atımlı (Short Throw) bir cihazla buna 1m\'den az mesafede ulaşabilirsiniz.',
  },
  {
    question: '16:9 ve 4:3 arasındaki fark nedir?',
    answer:
      '16:9 modern film ve diziler için geniş ekran formatıdır. 4:3 ise sunumlar için klasik formattır. Doğru olanı seçmek siyah bantları önler.',
  },
  {
    question: 'Kurulum yüksekliği önemli mi?',
    answer:
      'Evet. Cihazlarda dikey kaydırma (offset) veya keystone düzeltmesi bulunur. Deformasyonu önlemek için ekranın üst veya alt kenarına ortalı kurulmalıdır.',
  },
];

const howToData = [
  {
    name: 'Atım Oranını Öğrenin',
    text: 'Cihazın kılavuzunda veya kutusunda 1.2:1 veya 1.5-1.8:1 gibi bir değer arayın.',
  },
  {
    name: 'Ekran Boyutunu Girin',
    text: 'İstediğiniz köşegen inç değerini veya duvardaki genişliği girin.',
  },
  {
    name: 'Format Seçin',
    text: 'Filmler için 16:9, sunumlar için 4:3 veya sinema için 21:9 seçin.',
  },
  {
    name: 'Mesafeyi Alın',
    text: 'Hesaplayıcı, kurulum için gereken tam mesafeyi size verecektir.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson Kurulum Rehberi', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Projeksiyon Geometrisine Hakim Olun',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bir projeksiyonu rastgele kurmak deneyimi mahvedebilir. Anahtar nokta, mesafe ve görüntü boyutu arasındaki ilişkiyi belirleyen <strong>Atım Oranı\'dır</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: 'AO × G', label: 'Mesafe Formülü', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Kısa Atımlı', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Uzun Atımlı', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Atım Oranı (Throw Ratio) Nedir?',
          description: 'Mesafe ile genişlik arasındaki orandır. 1.5 AO, her 1 metre genişlik için 1.5 metre mesafe gerektiği anlamına gelir.',
          icon: 'mdi:ruler',
          points: ['AO < 1: Kısa atımlı, dar alanlar için ideal', 'AO 1–2: Oturma odaları için standart', 'AO > 2: Büyük salonlar için uzun atımlı'],
        },
        {
          title: 'Format ve En Boy Oranı',
          description: 'Format, görüntünün oranlarını belirler. Yanlış format siyah bantlara ve parlaklık kaybına neden olur.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: Sinema ve dizi için HD/4K standardı', '21:9: Geniş sinema formatı', '4:3: Ofis sunumları için'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Profesyonel Kurulum',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Eğer cihazınızda Lens Shift varsa, dijital Keystone yerine her zaman onu kullanın. Keystone çözünürlüğü düşürür.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ortam Işığı',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro İpucu',
      html: '<p>Aydınlık odalarda kontrast kaybını önlemek için yüksek kazançlı (>1.0) bir perde kullanın.</p>',
    },
    {
      type: 'summary',
      title: 'Kurulum Kontrol Listesi',
      items: [
        'Yer seçmeden önce cihazın Atım Oranı\'nı not edin.',
        'Duvardaki boş alanı ölçün.',
        'Cihazı ekrana göre dikeyde ortalayın.',
        'Dijital keystone\'dan kaçının: fiziksel konumu düzeltin.',
        'Ekrana doğrudan gelen ışık kaynaklarını engelleyin.',
      ],
    },
  ],
  ui: {
    configTitle: 'Yapılandırma',
    configSubtitle: 'Ekran ve cihazı tanımlayın',
    labelDiagonal: 'Ekran Köşegeni',
    labelDiagonalUnit: 'İnç (")',
    labelFormat: 'Format',
    labelThrowRatio: 'Atım Oranı (Throw Ratio)',
    throwRatioHint: 'Örnek: 1.50 değeri, 1m genişlik için 1.5m mesafe gerektiğini ifade eder.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Sinema',
    ratio43Sub: 'Retro',
    labelWidth: 'Ekran Genişliği',
    labelHeight: 'Ekran Yüksekliği',
    labelDistance: 'Gereken Mesafe',
    simulationBadge: 'Gerçek Zamanlı Simülasyon',
  },
};
