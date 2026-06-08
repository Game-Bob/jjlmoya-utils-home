import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'fayans-doseme-hesaplayici';
const title = 'Fayans Döşeme ve Fire Hesaplayıcı';
const description =
  'Oda zeminini milimetrik hassasiyetle planlayın. Gereken fayans sayısını, koli miktarını, toplam maliyeti hesaplayın ve etkileşimli ızgara önizlemesiyle döşemeyi gerçek zamanlı görselleştirin.';

const faqData = [
  {
    question: 'Bir oda için kaç fayans gerektiğini nasıl hesaplarım?',
    answer:
      'Odanın genişliğini ve uzunluğunu ölçün, fayans boyutunu seçin ve derz genişliğini girin. Hesaplayıcı, oda boyutlarını fayans artı derz genişliğine bölerek her sıra ve kolonda kaç adet gerektiğini tam olarak verir.',
  },
  {
    question: 'Fayans alırken ne kadar fire payı eklemeliyim?',
    answer:
      'Standart dikdörtgen odalar için %10 fire payı ekleyin. Çok köşeli odalar, çapraz döşeme veya karmaşık kesimler gerektiren durumlarda %15\'e çıkarın. Bu, kırılmaları ve kesim hatalarını karşılar.',
  },
  {
    question: 'Derz kalınlığı gerçekten fayans sayısını değiştirir mi?',
    answer:
      'Evet. Daha geniş derzler her fayansın etkili kaplama alanını azaltır, bu da toplam sayıyı hafifçe artırır. Hesaplayıcı bunu her sıra ve kolonda otomatik olarak hesaba katar.',
  },
  {
    question: 'Fire payının üzerine ekstra koli almalı mıyım?',
    answer:
      'Mevcutsa bir koli fazla almak akıllıcadır. Üretim partileri arasında renk tonu farklılıkları olabilir; eşleşen yedek parçalar gelecekteki tamiratları kolaylaştırır.',
  },
  {
    question: 'Düzgün olmayan şekilli bir odaya fayans nasıl döşenir?',
    answer:
      'Odayı daha küçük dikdörtgenlere ayırın. Her bölgeyi ayrı hesaplayıp toplamları birleştirin. Kısmi kolileri her zaman yukarı yuvarlayarak tam kapsama sağlayın.',
  },
  {
    question: 'Seramik ve porselen fayans arasındaki fire farkı nedir?',
    answer:
      'Porselen daha yoğun ve kesilmesi daha zordur; bu da standart seramiğe göre kesim firelerini %2 ile %3 artırabilir. Her iki malzeme de aynı ölçüm sürecini takip etmelidir.',
  },
  {
    question: 'Kullanılmamış fayans kolilerini iade edebilir miyim?',
    answer:
      'Çoğu perakendeci, açılmamış kolileri 30 gün içinde iade alır. Her zaman fişi saklayın ve kurulum tamamen bitene kadar fazla kolileri açmayın.',
  },
];

const howToData = [
  {
    name: 'Odayı ölçün',
    text: 'Tercih ettiğiniz birim sisteminde zemin genişliğini ve uzunluğunu kaydedin.',
  },
  {
    name: 'Fayans ve derz seçin',
    text: 'Fayans boyutlarınızı ve istediğiniz derz genişliğini seçin.',
  },
  {
    name: 'Hesaplayın ve görselleştirin',
    text: 'Değerleri hesaplayıcıya girin, fire payını ayarlayın ve canlı döşeme önizlemesini inceleyin.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Fayans Döşeme Planlama ve Fire Kontrolü İçin Tam Rehber',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Başarılı bir fayans döşeme projesi, ilk yapıştırıcı sürülmeden çok önce başlar. Hassas ölçüm, akıllı döşeme planlaması ve doğru fire hesabı, tadilatınızın bütçe ve programa uymasını belirler. <strong>Etkileşimli fayans döşeme hesaplayıcımız</strong>, ham boyutları görsel bir zemin planına dönüştürerek, her sırada kaç fayans sığacağını, kaç koli almanız gerektiğini ve paranızın nereye gittiğini tam olarak gösterir.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standart Fire', icon: 'mdi:alert-circle' },
        { value: '30+ yıl', label: 'Fayans Ömrü', icon: 'mdi:clock-outline' },
        { value: '48 saat', label: 'Ortalama Döşeme', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Büyük Format Fayanslar',
          description: '60 cm\'den büyük fayanslar kesintisiz, modern bir görünüm sunar ancak mükemmel düz zemin gerektirir ve küçük odalarda kesim firelerini artırır.',
          icon: 'mdi:arrow-expand',
          points: ['Daha az derz', 'Premium görsel etki', 'Dar alanlarda yüksek fire'],
        },
        {
          title: 'Küçük Mozaikler',
          description: 'Banyolar ve karmaşık desenler için ideal. Düzgün olmayan şekillere uyum sağlar ancak daha fazla derz ve işçilik zamanı gerektirir.',
          icon: 'mdi:apps',
          points: ['Engellerin etrafında esneklik', 'Daha fazla derz gerekli', 'Daha uzun döşeme süresi'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Döşeme Görselleştirmesi Neden Önemli',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Satın almadan önce fayans ızgarasını görmek, maliyetli sürprizleri önler. Canlı önizleme, seçtiğiniz fayans boyutunun kenarlarda hoş olmayan dar şeritler bırakıp bırakmadığını veya dengeli, simetrik bir zemin oluşturup oluşturmadığını gösterir. Hesaplayıcıda derz genişliği ve fayans yönünü ayarlayarak, sipariş vermeden önce estetik ve verimlilik açısından en iyi döşemeyi oluşturabilirsiniz.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Kaplama Referans Tablosu',
      icon: 'mdi:table',
      badge: 'Referans',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → m² başına 11 fayans</li><li><strong>45 x 45 cm</strong> → m² başına 5 fayans</li><li><strong>60 x 60 cm</strong> → m² başına 3 fayans</li><li><strong>60 x 120 cm</strong> → m² başına 1,5 fayans</li></ul>',
    },
    {
      type: 'summary',
      title: 'Fireyi En Aza İndirmek için Profesyonel İpuçları',
      items: [
        'Düz döşeme için %10, çapraz veya balıksırtı için %15 fazla sipariş verin.',
        'Renk tutarlılığını sağlamak için tüm kolileri aynı üretim partisinden saklayın.',
        'Sıraları planlamadan önce odanın kareliğini kontrol etmek için çapraz ölçüm yapın.',
        'Aşırı kesimden kaçınmak için büyük format fayansları yalnızca fayans uzunluğundan geniş odalarda kullanın.',
        'Koli sayısını her zaman yukarı yuvarlayın; ikinci bir teslimattan daha ucuzdur.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Oda Yapılandırması',
    labelRoomWidth: 'Oda genişliği',
    labelRoomLength: 'Oda uzunluğu',
    labelTileWidth: 'Fayans genişliği',
    labelTileLength: 'Fayans uzunluğu',
    labelGrout: 'Derz genişliği',
    labelWaste: 'Fire payı',
    labelTilesPerBox: 'Koli başına fayans',
    labelPrice: 'Koli başına fiyat',
    labelPattern: 'Döşeme deseni',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'ad',
    unitPrice: '/koli',
    resultBadge: 'Canlı döşeme önizlemesi',
    labelArea: 'Zemin alanı',
    labelTiles: 'Toplam fayans',
    labelBoxes: 'Gerekli koliler',
    labelCost: 'Toplam maliyet',
    labelWasteCount: 'Fire fayansları',
    labelCuts: 'Kısmi kesimler',
    currency: 'TRY',
    btnMetric: 'Metrik',
    btnImperial: 'Emperyal',
    btnPatternStraight: 'Düz',
    btnPatternBrick: 'Rastıklı',
    btnPatternDiagonal: 'Çapraz',
    badgeOptimal: 'En uygun döşeme',
    badgeWarning: 'Yüksek fire uyarısı',
    visualTitle: 'Döşeme önizlemesi',
  },
};
