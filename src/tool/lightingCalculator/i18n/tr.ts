import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ev-aydinlatma-ve-lumen-hesaplayici';
const title = 'Ev Aydınlatma ve Lümen Hesaplayıcı';
const description =
  'Herhangi bir oda için tam olarak kaç lümen ve ampule ihtiyacınız olduğunu hesaplayın. Oda tipi, boyutlar ve ampul tipini seçerek gerçek zamanlı lüks tahminleriyle profesyonel bir aydınlatma planı elde edin.';

const faqData = [
  {
    question: 'Oturma odası için kaç lümen gerekiyor?',
    answer:
      'Tipik bir oturma odası için zeminde yaklaşık 150 lüks hedefleyin. Oda alanını metrekare cinsinden 150 ile çarparak gerekli lümeni bulun. 20 metrekarelik bir oda için yaklaşık 3.000 lümen gereklidir.',
  },
  {
    question: 'Lüks ile lümen arasındaki fark nedir?',
    answer:
      'Lümen, bir ampulün toplam ışık çıktısını ölçer. Lüks, gerçekten bir yüzeye ulaşan ışığı ölçer. Yüksek tavanlı veya koyu duvarlı bir oda, mesafe ve emilim nedeniyle ışık kaybı yaşadığından aynı lüks seviyesine ulaşmak için daha fazla lümen gerektirir.',
  },
  {
    question: 'LED ampuller gerçekten enerji tasarrufu sağlar mı?',
    answer:
      'Evet. LED ampuller yaklaşık 100 lümen/watt üretirken, akkor ampuller sadece yaklaşık 15 lümen/watt üretir. 10W\'lık bir LED ampul, 60W\'lık bir akkor ampulle aynı ışığı verir ve elektriğin altıda birini kullanır.',
  },
  {
    question: 'Oda rengi aydınlatma ihtiyacını nasıl etkiler?',
    answer:
      'Koyu duvarlar ve tavanlar ışığı emer. Koyu yüzeylere sahip bir odada, standart öneriye göre yüzde 50 daha fazla lümen gerekebilir.',
  },
  {
    question: 'Okumak için iyi bir lüks seviyesi nedir?',
    answer:
      'Rahat okumak için sayfada 300 ila 500 lüks gerekir. Genel ortam aydınlatması genellikle 150 ila 200 lüks sağlar, bu nedenle ek parlaklık için okuma yerinizin yakınına bir çalışma lambası ekleyin.',
  },
  {
    question: 'LED ampulleri kısabilir miyim?',
    answer:
      'Yalnızca kısılabilir olarak işaretlenmişse. Standart LED\'ler bir kısıcıya bağlandığında titreyebilir veya ömrü kısalabilir. Kurulumdan önce her zaman ambalajdaki kısılabilir sembolünü kontrol edin.',
  },
];

const howToData = [
  {
    name: 'Oda tipinizi seçin',
    text: 'Oda işlevini seçin. Mutfaklar ve ofisler, yatak odaları veya koridorlardan daha parlak ışığa ihtiyaç duyar.',
  },
  {
    name: 'Boyutları girin',
    text: 'Oda genişliği, uzunluğu ve tavan yüksekliğini girin. Hesaplayıcı, bunları oda indeksini ve ışık kullanım faktörünü belirlemek için kullanır.',
  },
  {
    name: 'Ampul tipi ve sayısını seçin',
    text: 'Tercih ettiğiniz ampul teknolojisini ve sahip olduğunuz armatür sayısını seçin. Hesaplayıcı, daha fazla ampule ihtiyacınız olup olmadığını söyler.',
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
  inLanguage: 'tr',
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
      text: 'Ev Aydınlatma Tasarımı ve Lümen Planlaması için Tam Kılavuz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Doğru aydınlatma, bir evi yuva haline getirir. Estetiğin ötesinde, doğru ışık miktarı ruh halini, verimliliği ve hatta göz sağlığını etkiler. <strong>Ev aydınlatma hesaplayıcımız</strong>, oda büyüklüğü, tavan yüksekliği, yüzey renkleri ve ampul tipini göz önünde bulundurarak herhangi bir oda için tam olarak kaç lümen gerektiğini belirlemenize yardımcı olur.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Önerilen Lüks Aralığı', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED Verimliliği', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Bakım Faktörü', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Sıcak Ortam Aydınlatması',
          description: 'Oturma odaları ve yatak odaları için ideal. Rahat bir atmosfer yaratır ve akşamları göz yorgunluğunu azaltır.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Sıcak renk sıcaklığı (2700K)', 'Birden fazla kısılabilir kaynak'],
        },
        {
          title: 'Parlak Görev Aydınlatması',
          description: 'Mutfaklar, ofisler ve banyolar için zorunlu. Detaylı işler için net görünürlük sağlar.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Serin beyaz (4000K)', 'Çalışma yüzeylerine odaklanmış'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Neden Oda Boyutları Önemli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Işık yayılır ve mesafe ile zayıflar. 2,5 metrelik bir tavan için yeterince parlak olan bir ampul, 4 metrelik bir tavan için çok loş olabilir. Hesaplayıcı, bu durumu oda indeksi formülü kullanarak hesaba katar; formül hem zemin alanını hem de montaj yüksekliğini dikkate alarak gerçekten çalışma düzleminize ulaşan ışık miktarını tahmin eder.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Referans Lüks Tablosu',
      icon: 'mdi:table',
      badge: 'Referans',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Oturma odası</strong> → 150 lux</li><li><strong>Mutfak</strong> → 300 lux</li><li><strong>Yatak odası</strong> → 100 lux</li><li><strong>Banyo</strong> → 200 lux</li><li><strong>Ofis</strong> → 500 lux</li><li><strong>Koridor</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Daha İyi Aydınlatma için Uzman İpuçları',
      items: [
        'Ortam, görev ve vurgu olmak üzere üç aydınlatma türünü katmanlayın.',
        'Günün farklı saatlerinde parlaklığı ayarlamak için kısıcılar kullanın.',
        'Uzun ömür ve düşük enerji tüketimi için LED ampuller seçin.',
        'Gölge oluşumunu önlemek için çalışma lambalarını baskın elinizin karşı tarafına yerleştirin.',
        'Otomatik planlama ve renk sıcaklığı değişimi için akıllı ampulleri düşünün.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Oda Aydınlatma Hesaplayıcı',
    labelRoomType: 'Oda tipi',
    labelRoomWidth: 'Genişlik',
    labelRoomLength: 'Uzunluk',
    labelHeight: 'Tavan',
    labelBulbType: 'Ampul',
    labelBulbWatt: 'Güç',
    labelFixtures: 'Armatür',
    labelAmbient: 'Ortam',
    btnAmbientCozy: 'Rahat',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Parlak',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'ad',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Hedef lüks',
    labelCurrentLux: 'Mevcut lüks',
    labelBulbsNeeded: 'Gerekli ampul',
    labelRoomArea: 'Alan',
    statusOptimal: 'Mükemmel',
    statusInsufficient: 'Çok Loş',
    statusExcess: 'Çok Parlak',
    btnLiving: 'Oturma',
    btnKitchen: 'Mutfak',
    btnBedroom: 'Yatak',
    btnBathroom: 'Banyo',
    btnOffice: 'Ofis',
    btnHallway: 'Koridor',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halojen',
    btnBulbIncandescent: 'Akkor',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Aydınlatmanız bu oda için mükemmel dengelenmiş.',
    tipInsufficient: 'Daha fazla armatür veya daha yüksek güçte ampul ekleyin.',
    tipExcess: 'Enerji tasarrufu için armatür azaltın veya kısın.',
    labelManualAdjust: 'Manuel ayar',
    labelSummary: 'Aydınlatma planınız',
    labelTotalLumens: 'Toplam gerekli lümen',
    labelSuggestedSetup: 'Önerilen kurulum',
    btnExport: 'PDF İndir',
  },
};
