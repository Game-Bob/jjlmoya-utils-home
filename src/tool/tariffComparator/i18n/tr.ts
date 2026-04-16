import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';

const slug = 'elektrik-tarifesi-karsilastirma';
const title = 'Elektrik Tarifesi Karşılaştırıcı: Sabit vs Değişken';
const description =
  'Hangi elektrik tarifesinin size daha uygun olduğunu keşfedin. Tüketiminize göre sabit fiyatlı ve değişken tarifeleri karşılaştırın.';

const faqData = [
  {
    question: 'Sabit fiyat mı yoksa değişken tarife mi daha iyidir?',
    answer:
      'Sabit fiyatlar öngörülebilirlik sağlar. Değişken tarifeler piyasa fiyatları düştüğünde avantajlı olabilir ancak risklidir.',
  },
  {
    question: 'Yıllık tüketimimi nasıl öğrenebilirim?',
    answer:
      'Bu bilgiyi elektrik faturanızda "Yıllık Tüketim" (kWh) başlığı altında bulabilirsiniz.',
  },
  {
    question: 'Sözleşme gücü nedir?',
    answer:
      'Aynı anda kullanabileceğiniz maksimum elektrik yüküdür (kW).',
  },
];

const howToData = [
  {
    name: 'Faturanızı kontrol edin',
    text: 'Yıllık tüketim (kWh) ve gücü (kW) bulun.',
  },
  {
    name: 'Değerleri girin',
    text: 'Sürgüleri gerçek verilerinize göre ayarlayın.',
  },
  {
    name: 'Sonuçları karşılaştırın',
    text: 'İki seçenek arasındaki yıllık maliyet farkını görün.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    { name: 'EPDK — Enerji Piyasası Düzenleme Kurumu', url: 'https://www.epdk.gov.tr' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Elektrik faturasında tasarruf edin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru tarifeyi seçmek yılda önemli miktarda tasarruf sağlayabilir. Karşılaştırıcımızı kullanarak karar verin.',
    },
    {
      type: 'summary',
      title: 'Tasarruf ipuçları',
      items: [
        'Piyasadaki yeni teklifleri düzenli olarak takip edin.',
        'İhtiyacınızdan fazla sözleşme gücü bedeli ödemeyin.',
        'Mümkünse tüketiminizi ucuz saatlere kaydırın.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Yıllık Tüketim',
    unitKwhYear: 'kWh/yıl',
    labelPower: 'Sözleşme Gücü',
    unitKw: 'kW',
    labelMarket: 'Değişken Tarife',
    labelFree: 'Sabit Fiyatlı Tarife',
    labelAnnualEst: 'Yıllık Tahmin',
    labelPowerTerm: 'Güç Bedeli (Sabit)',
    labelEnergyTerm: 'Enerji Bedeli (Değişken)',
    labelDashboard: 'Enerji Paneli',
    labelMaxPower: 'Güç Zirvesi',
    labelMaxPowerEst: 'Zirve tahmini',
    labelCo2: 'CO₂ Ayak İzi',
    labelCo2Est: 'Yıllık tahmin',
    labelSimulator: 'Senaryo Simülatörü',
    labelSolar: 'Güneş Paneli',
    labelSolarDesc: 'Panel ile tasarruf simülasyonu (%30 düşüş)',
    labelShift: 'Ucuz Saate Kaydırma',
    labelShiftDesc: 'Ucuz saatlere kaydırılan tüketim:',
    badgeBetter: 'En ucuz seçenek',
    badgeWorseYear: 'yıl',
    currencySign: '₺',
    monthLabels: 'Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara',
  },
};
