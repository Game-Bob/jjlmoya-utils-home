import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'duvar-boya-hesaplayici';
const title = 'Duvar Boyası ve Seyreltme Hesaplayıcısı';
const description =
  'Duvarlarınız için tam olarak kaç litre veya galon boyaya ihtiyacınız olduğunu hesaplayın. Katlar, yüzey türü, seyreltme için ayar yapın ve satın almadan önce gerçek maliyeti öğrenin.';

const faqData = [
  {
    question: 'Tam boya miktarını nasıl hesaplarım?',
    answer:
      'Duvar yüzey alanını kat sayısı ile çarpın ve ardından litreye veya galona göre metrekare veya feetkare başına boya verimine bölün. Önce kapı ve pencereleri toplam alandan çıkarın.',
  },
  {
    question: 'Standart bir oda ne kadar boya ister?',
    answer:
      'Tavan yüksekliği 2,5 metre olan 12 metrekarelik bir odanın duvar yüzeyi yaklaşık 30 metrekaredir. İki kat ve litreye başına 12 metrekare verim ile yaklaşık 5 litre boyaya ihtiyacınız olur.',
  },
  {
    question: 'Boyayı uygulamadan önce seyreltmeli miyim?',
    answer:
      'Su bazlı plastik boyalar genellikle kullanıma hazırdır veya ilk kat için yüzde 5 ila 10 su gerektirir. Emaye veya yağlı boyalar genellikle kutuda belirtilen özel bir çözücü gerektirir.',
  },
  {
    question: 'Gerçekten kaç kat gerekli?',
    answer:
      'Yeni veya yüksek derecede emici yüzeyler astar artı iki son kat boya ister. Benzer renkte zaten boyalı bir duvarı boyamak genellikle sadece bir veya iki kat ister.',
  },
  {
    question: 'Kapı ve pencere alanını çıkarıyor muyum?',
    answer:
      'Evet. Her açıklığı ölçün ve duvar toplam alanından çıkarın. Hızlı bir kural olarak kapılar yaklaşık 2 metrekare ve pencereler yaklaşık 1,5 metrekaredir.',
  },
  {
    question: 'Yüzey türü verimi değiştirir mi?',
    answer:
      'Evet. Pürüzsüz hazırlanmış duvarlar litreye başına 14 metrekareye kadar verim sağlayabilir. Pürüzlü beton, dokulu sıva veya emici tuğla verimi litreye başına 6 veya 8 metrekareye düşürebilir.',
  },
];

const howToData = [
  {
    name: 'Duvarlarınızı ölçün',
    text: 'Her duvarın genişliğini ve yüksekliğini ölçün. Her duvarın alanını bulmak için çarpın ve ardından tüm duvarları toplayın.',
  },
  {
    name: 'Açıklıkları çıkarın',
    text: 'Kapı ve pencereleri ölçün ve toplamdan alanlarını çıkararak boyanacak gerçek yüzeyi bulun.',
  },
  {
    name: 'Boya türünüzü seçin',
    text: 'Hesaplayıcıda boya türünü seçin. Plastik mat, plastik saten ve emaye farklı verimlere ve seyrelme önerilerine sahiptir.',
  },
  {
    name: 'Katları ve fiyatı ayarlayın',
    text: 'Uygulamayı planladığınız kat sayısını ve litre veya galon başına fiyatı belirtin. Hesaplayıcı tam miktarı ve toplam maliyeti döndürecektir.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Boya Hesaplayıcı: Tam Olarak İhtiyacınız Olan Kadar Satın Alın',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Önceden hesaplamadan bir odayı boyamak genellikle <strong>yarım dolu tenekelerle</strong> veya acil mağaza ziyaretleriyle sonuçlanır. Neden basit: boya verimi yüzey gözenekliliği, renk değişimi ve kat sayısı ile değişir. Pürüzsüz, önceden boyalı bir duvar litreye başına 14 metrekareye kadar verim sağlayabilir, ancak dokulu sıva duvarı aynı miktarı emebilir ve sadece 6 metrekare kaplayabilir.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Yüksek', label: 'Standart Kaplama', icon: 'mdi:format-paint' },
        { value: '2 kat', label: 'Önerilen', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Tipik Seyreltme', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Boya Verimi Nasıl Gerçekten Çalışır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Üreticiler kutuda teorik verim belirtir. Bu sayı, ideal koşullarda profesyonel bir rulo ile uygulanan mükemmel düz, emici olmayan, beyaz bir yüzeyi varsayar. Gerçek dünyada <strong>gözenekli duvarlar, koyu renkler ve kendi kendine uygulama</strong> bu verimi yüzde 20 ila 40 azaltır. Hesaplayıcımız eksik kalmamanız için gerçekçi profiller seçmenize olanak tanır.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Plastik Mat Boya',
          description: 'İç mekanlar için en yaygın seçim. Yüksek kapatıcılık, kolay rötuşlanabilir ve çoğu kalitede yıkanabilir.',
          icon: 'mdi:palette',
          points: ['Standart iç mekan kapatıcılığı', 'Seyreltme: yüzde 5 ila 10 su', 'En iyi: salonlar ve yatak odaları için'],
        },
        {
          title: 'Plastik Saten Boya',
          description: 'Hafif parlak bitiş ile nem ve lekelere karşı daha büyük direnç. Dikişsiz rötuşlanması daha zor.',
          icon: 'mdi:brightness-6',
          points: ['Biraz daha yüksek kapatıcılık', 'Seyreltme: yüzde 5 su', 'En iyi: mutfaklar ve banyolar için'],
        },
        {
          title: 'Emaye Boya',
          description: 'Marangozluk, radyatörler ve yoğun trafikli alanlar için sert ve dayanıklı bitiş. Çözücü veya özel inceltici gerektirir.',
          icon: 'mdi:spray',
          points: ['Sert ve dayanıklı bitiş', 'Seyreltme: yüzde 10 ila 15 çözücü', 'En iyi: kapılar, çerçeveler ve mobilya için'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pratik Yüzey Ölçümü',
      icon: 'mdi:ruler-square',
      badge: 'İpucu',
      html: '<p style="margin:0">Her duvarın genişliğini yüksekliğiyle çarpın. Hızlı bir toplam için tüm genişlikleri ekleyin ve oda yüksekliğiyle çarpın. Ardından her standart kapı için yaklaşık 2 metrekare ve her pencere için 1,5 metrekare çıkarın.</p>',
    },
    {
      type: 'title',
      text: 'Seyreltme ve Uygulama Kuralları',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Yeni veya onarılmış yüzeylerde ilk katlar boyanın nüfuz etmesi ve yapışması için her zaman hafif seyreltme gerektirir. Son katlar seyreltilmemiş veya üreticinin belirttiği minimum miktarda uygulanmalıdır. <strong>Aşırı seyreltme pigmenti kırar</strong> ve ekstra kat gerektiren saydam lekeler bırakır.',
    },
    {
      type: 'summary',
      title: 'Neden Satın Almadan Önce Hesaplamalısınız',
      items: [
        'Tenede kuruyan ve atık haline gelen fazla boyadan kaçının.',
        'Farklı zamanlarda satın alınan partiler arasında renk uyuşmazlığını önleyin.',
        'Doğru bütçeleme: astar ve araçlar dahil gerçek maliyeti bilin.',
        'Ek malzeme için kesintiye uğratmadan işi tek seferde planlayın.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Yüzey ve Boya',
    labelMetric: 'Metrik',
    labelImperial: 'İmparatorluk',
    labelArea: 'Boyanacak toplam alan',
    labelAreaFt: 'Boyanacak toplam alan',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Boya verimi',
    labelYieldFt: 'Boya verimi',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Boya türü seçin',
    btnPlasticMatTitle: 'Plastik Mat',
    btnPlasticMatSub: 'Mat · Su yüzde 5',
    btnPlasticSatinTitle: 'Plastik Saten',
    btnPlasticSatinSub: 'Saten · Su yüzde 5',
    btnEnamelTitle: 'Emaye',
    btnEnamelSub: 'Emaye · Çözücü yüzde 10',
    labelCoats: 'Kat sayısı',
    unitCoats: 'kat',
    labelPrice: 'Litre başına fiyat',
    labelPriceFt: 'Galon başına fiyat',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Seyreltme yüzdesi',
    unitDilution: '%',
    resultBadge: 'Boya hesaplaması',
    labelPaint: 'Boya litresi',
    labelPaintGal: 'Boya galonu',
    labelCost: 'Toplam maliyet',
    labelWater: 'Seyreltme sıvısı',
    labelWaterGal: 'Seyreltme sıvısı',
    labelTotalVolume: 'Toplam karışım',
    labelTotalVolumeGal: 'Toplam karışım',
    labelCurrency: 'Para Birimi',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '₺',
  },
};
