import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ciglesme-noktasi-hesaplama';
const title = 'Çiğleşme Noktası Hesaplayıcı';
const description = 'Nem ve oda sıcaklığını kullanarak duvarlarınızdaki yoğuşma sıcaklığını hesaplayın. Rutubeti önlemek ve evinizin yapı sağlığını korumak için hayati bir araç.';

const faqData = [
  {
    question: 'Çiğleşme noktası tam olarak nedir?',
    answer: 'Havadaki su buharının sıvı suya dönüşmesi (yoğuşması) için havanın soğutulması gereken sıcaklıktır. Bağıl nem ne kadar yüksekse, çiğleşme noktası mevcut sıcaklığa o kadar yakındır.',
  },
  {
    question: 'Evimin köşelerinde neden küf oluşuyor?',
    answer: 'Köşeler genellikle duvarın daha soğuk olduğu ısı köprüleridir. Eğer bu yüzeyin sıcaklığı çiğleşme noktasının altına düşerse, sıvı su oluşur. Küfün büyümek için bu sürekli neme ihtiyacı vardır.',
  },
  {
    question: 'Evdeki nemi nasıl düşürebilirim?',
    answer: 'En etkili yol havalandırmaktır (özellikle duştan veya yemek pişirdikten sonra) ve nem giderici cihazlar kullanmaktır. Sabit bir sıcaklık sağlamak da havanın yoğuşmadan daha fazla buhar tutmasına yardımcı olur.',
  },
  {
    question: 'Yoğuşma kaynaklı küf tehlikeli midir?',
    answer: 'Evet. Küf, solunum problemlerine, alerjilere ve astıma neden olabilen sporlar yayar. Bu hesaplayıcı ile yoğuşma riskini belirlemek, sağlıklı bir ev için ilk adımdır.',
  },
];

const howToData = [
  {
    name: 'Sıcaklık ve Nemi Ölçün',
    text: 'Odanın mevcut değerlerini öğrenmek için bir termometre ve higrometre kullanın.',
  },
  {
    name: 'Değerleri Girin',
    text: 'Hesaplayıcıda sıcaklığı Celsius ve nem yüzdesini ayarlayın.',
  },
  {
    name: 'Kritik Sıcaklığı Öğrenin',
    text: 'Araç size suyun yüzeylerde tam olarak hangi sıcaklıkta yoğuşmaya başlayacağını söyleyecektir.',
  },
  {
    name: 'Yüzeyleri Kontrol Edin',
    text: 'Lazer termometreniz varsa duvarların sıcaklığını ölçün. Sonuçtan düşükse, yalıtım veya havalandırma yapmanız gerekir.',
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
      text: 'Çiğleşme Noktası Nedir ve Eviniz İçin Neden Önemlidir?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çiğleşme noktası, havanın su buharını sıvıya dönüştürmesi için soğuması gereken sıcaklıktır. Ev içinde bu değer, sağlıklı bir yaşam alanı ile rutubetli bir bina arasındaki sınırı çizer. Duvar sıcaklığı bu noktanın altına düştüğünde su damlacıkları oluşur; bu da mantar ve küf için ideal üreme ortamıdır.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Güvenli Fark', icon: 'mdi:shield-check' },
        { value: '%40–60', label: 'İdeal Nem', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Aşırı Tehlike', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Magnus Tetens Formülü',
          description: 'Çiğleşme noktasını bilimsel hassasiyetle hesaplamak için WMO tarafından 0°C ile 50°C arası önerilen Magnus-Tetens yaklaşımını kullanıyoruz.',
          icon: 'mdi:calculator',
          points: ['Bilimsel olarak doğrulanmış hassasiyet', 'Ev sıcaklıkları için ideal'],
        },
        {
          title: 'Isı Köprüleri ve Küf',
          description: 'Köşeler ve pencere kasaları en soğuk noktalardır. Sıcaklıkları çiğleşme noktasının altına düşerse küf kaçınılmazdır.',
          icon: 'mdi:home-thermometer',
          points: ['Köşeler en hassas noktalardır', 'Isı yalıtımı yoğuşmayı önler'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Risk Seviyeleri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Düşük Risk (fark &gt; 5°C):</strong> Duvarlarınız güvende. <strong>Orta Risk (3–5°C):</strong> Köşeleri kontrol edin. <strong>Yüksek Risk (1–3°C):</strong> Camlarda yoğuşma muhtemel — hemen havalandırın. <strong>Aşırı Tehlike (&lt; 1°C):</strong> Aktif yoğuşma ve siyah küf riski.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Altın Kural',
      icon: 'mdi:thermometer-alert',
      badge: 'Anahtar Tavsiye',
      html: '<p>Duvar sıcaklığınız <strong>çiğleşme noktasından 3°C daha az</strong> farka sahipse, yoğuşma riski altındasınız demektir. Havalandırın ve nemi %40-60 arasında tutun.</p>',
    },
    {
      type: 'summary',
      title: 'Yoğuşma Nasıl Önlenir?',
      items: [
        'Her gün havalandırın, özellikle banyo ve yemek sonrası.',
        'Bağıl nemi %40 ile %60 arasında tutun.',
        'Mutfakta aspiratör kullanmaya özen gösterin.',
        'İçeride çamaşır kurutmaktan kaçının.',
        'Soğuk yüzeyleri önlemek için duvarları yalıtın.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Oda Sıcaklığı',
    labelHumidity: 'Bağıl Nem',
    labelDewPoint: 'Çiğleşme Noktası',
    riskLow: 'Düşük Risk',
    riskMedium: 'Orta Risk',
    riskHigh: 'Yüksek Risk',
    riskExtreme: 'Aşırı Tehlike',
    riskLowDesc: 'Fark > 5°C. Yüzeyler güvende.',
    riskMediumDesc: 'Fark 3–5°C. Köşelere dikkat.',
    riskHighDesc: 'Fark 1–3°C. Hemen havalandırın.',
    riskExtremeDesc: 'Fark < 1°C. Aktif yoğuşma.',
  },
};
