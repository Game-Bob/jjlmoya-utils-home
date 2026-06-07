import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ev-aletleri-maliyet-hesaplayici';
const title = 'Ev Aletleri Su ve Enerji Döngü Maliyet Hesaplayıcı';
const description =
  'Çamaşır makinesi, bulaşık makinesi ve çamaşır kurutma makinesinin her döngüsünün gerçek maliyetini hesaplayın. Her döngünün ne kadar elektrik, su ve deterjan maliyetini gösterin ve Eco moduna geçerek ne kadar tasarruf edebileceğinizi keşfedin.';

const faqData = [
  {
    question: 'Bir çamaşır makinesi döngüsü ne kadar mal olur?',
    answer:
      'Tipik bir Eco 40°C döngüsü yaklaşık 0,45 kWh elektrik ve 40 litre su kullanır. Ortalama Avrupa fiyatlarında bu, başına yaklaşık 0,10 ila 0,15 euroya mal olur. Yoğun bir 60°C döngüsü 1,2 kWh ve 70 litrenin üzerine çıkabilir, maliyeti başına 0,30 euroyu aşır.',
  },
  {
    question: 'Bulaşık makinesini gece çalıştırmak daha ucuz mu?',
    answer:
      'Elektrik sağlayıcınız zaman tarifeli fiyatlandırma kullanıyorsa, bulaşık makinesini pik saatler dışında çalıştırmak enerji maliyetini yüzde 30 veya daha fazla azaltabilir. Pik saatler genellikle hafta içi sabah ve akşamlardır. Kesin pik dışı aralığınızı doğrulamak için sözleşmenizi veya akıllı sayaç verilerinizi kontrol edin.',
  },
  {
    question: 'Kurutma makinesi çok elektrik kullanır mı?',
    answer:
      'Evet. Çamaşır kurutma makinesi en enerji yoğun ev aletlerinden biridir. Tek bir tam yük 2,5 ila 3,5 kWh tüketebilir, başına 0,50 ila 0,80 euroya mal olur. Isı pompası kurutma makinesi kullanmak veya giysileri açık havada asmak bu maliyeti yüzde 60 ila 80 oranında kesebilir.',
  },
  {
    question: 'Bir bulaşık makinesi ne kadar su kullanır?',
    answer:
      'Modern bulaşık makineleri şaşırtıcı derecede verimlidir. Standart bir Eco döngüsü başına yalnızca 8 ila 12 litre su kullanırken, yoğun bir program 14 ila 16 litre kullanabilir. Bu, aynı bulaşıkları akan musluk altında elde yıkamaktan çok daha azdır, bu da genellikle 40 ila 60 litre tüketir.',
  },
  {
    question: 'Ev aletlerini kullanmak için en ucuz zaman nedir?',
    answer:
      'Zaman tarifeli fiyatlandırma altında en ucuz dönemler genellikle gece yarısı, çok erken sabah ve hafta sonlarıdır. Bu pik dışı aralıklar, hafta içi pik saatlerden yüzde 30 ila 50 daha ucuz olabilir. Bazı sağlayıcılar hafta sonları ücretsiz saatler de sunar.',
  },
  {
    question: 'Eco moduna geçmek gerçekten para kazandırır mı?',
    answer:
      'Kesinlikle. Eco modları daha düşük sıcaklıklar, daha kısa ısıtma fazları ve daha az su kullanır. Tam bir yıl boyunca, çamaşır makinesi ve bulaşık makinesinde Normalden Eco\'ya geçmek, kullanım sıklığına ve yerel fiyatlara bağlı olarak, elektrik ve suda birlikte 50 ila 100 euro tasarruf edebilir.',
  },
];

const howToData = [
  {
    name: 'Cihazınızı seçin',
    text: 'Hesaplayıcının üst kısmındaki çamaşır makinesi, bulaşık makinesi veya çamaşır kurutma makinesi simgesine dokunun. Her cihazın farklı enerji ve su tüketim profilleri vardır.',
  },
  {
    name: 'Döngü türü seçin',
    text: 'Yıkama programını ayarlamak için Eco, Normal veya Yoğun kaydırıcısını kullanın. Eco daha az enerji ve su kullanır. Yoğun en fazlasını kullanır.',
  },
  {
    name: 'Yerel fiyatlarınızı girin',
    text: 'kWh başına elektrik fiyatınızı ve litre başına su fiyatınızı yazın. Bunları fatura veya sağlayıcı web sitesinde bulabilirsiniz.',
  },
  {
    name: 'Kullanım sıklığını ayarlayın',
    text: 'Haftada kaç döngü çalıştırdığınızı girin. Bu, hesaplayıcının yıllık maliyetinizi ve potansiyel yıllık tasarrufunuzu tahmin etmesini sağlar.',
  },
  {
    name: 'Kullanım saatini seçin',
    text: 'Cihazı çalıştırmayı planladığınız saati seçin. Pik saatler kırmızıyla vurgulanır. Pik dışı saatler yeşildir ve zaman tarifeli fiyatlandırmanız varsa daha ucuzdur.',
  },
  {
    name: 'Deterjan maliyetlerini açın/kapatın',
    text: 'Fişe toz, sıvı veya kapsül başına bir tahmin eklenmesini istiyorsanız deterjan anahtarını etkinleştirin.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Her Yükün Gizli Maliyeti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Çoğu insan tek bir çamaşır makinesi döngüsünün gerçekte ne kadara mal olduğu hakkında hiçbir fikre sahip değil. Üç aylık bir elektrik faturası görür ve aletlerin çalıştırmasının ucuz olduğunu varsayar. Gerçek şu ki, haftada beş yük çamaşır yıkayan bir aile yılda sadece yıkama için 200 eurodan fazla harcayabilir. Haftada üç kez bulaşık makinesi ve haftada iki kez kurutma makinesi ekleyin ve toplam yıllık 500 euroyu aşar. Bu hesaplayıcı her kuruşu ayrıntılandırır, böylece alışkanlıklarınızı optimize edebilirsiniz.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Eco Yıkama', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Su Eco Yıkama', icon: 'mdi:water' },
        { value: '%30', label: 'Pik Ek Ücreti', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Neden Küçük Değişiklikler Çoğalır',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tek bir döngü için bir derece sıcaklık veya birkaç litre su önemsiz görünür. Ancak yılda 250 döngü boyunca, bu küçük farklar ciddi paraya dönüşür. 60°C\'den 40°C\'ye düşmek, başına yaklaşık yüzde 40 enerji tasarrufu sağlar. Bulaşık makinesinde Normalden Eco\'ya geçmek her seferinde yaklaşık 3 litre su ve 0,3 kWh tasarruf eder. Bunlar marjinal kazançlar değil. Yeni alet satın almadan faturanızı küçültmenin en hızlı yoludur.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Yoğun Döngü',
          description: 'Ağır kirli yükler için maksimum ısı ve su.',
          icon: 'mdi:alert',
          points: ['1,2 ila 3,5 kWh başına', '70 litre çamaşır makineleri için', 'Pik saat ek ücreti uygulanır', 'En yüksek yıllık maliyet'],
        },
        {
          title: 'Eco Döngü',
          description: 'Daha düşük sıcaklık, optimize edilmiş süre, minimum su.',
          icon: 'mdi:check-circle',
          points: ['0,45 ila 1,5 kWh başına', 'Yalnızca 8 ila 40 litre', 'Pik dışı zamanlama mümkün', 'En düşük yıllık maliyet'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Cihaz Denetimi',
      icon: 'mdi:clipboard-check',
      badge: 'Eylem',
      html: '<p style="margin:0">Çamaşır makinesini yalnızca tam dolu çalıştırın. Normal kirlilik için Eco programını kullanın. Zaman tarifeli fiyatlandırmanız varsa, bulaşık makinesini 22:00\'dan sonra gecikmeli başlatma için ayarlayın. Her döngüden sonra kurutma makinesi tüy filtresini temizleyerek verimliliği koruyun. Hava müsait olduğunda giysileri açık havada veya askıda kurutun.</p>',
    },
    {
      type: 'title',
      text: 'Kullanım Zamanı ve Pik Fiyatlandırma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Birçok elektrik sağlayıcısı artık günün saatine bağlı olarak farklı ücretler alıyor. Pik dönemler, genellikle hafta içi sabah ve akşamlar, pik dışı dönemlerden yüzde 30 ila 50 daha pahalı olabilir. 20:00\'de çalıştırılan tek bir yük 0,18 euroya mal olabilirken, aynı yük 02:00\'de sadece 0,12 euroya mal olur. Yıl boyunca, cihazlarınızı doğru zamanlayarak başka bir şey değiştirmeden 50 ila 100 euro tasarruf edebilirsiniz. Bu hesaplayıcı pik saatleri kırmızı ve pik dışı saatleri yeşil olarak vurgular, böylece önceden planlayabilirsiniz.',
    },
    {
      type: 'summary',
      title: 'Cihaz Maliyetlerini Nasıl Düşürürsünüz',
      items: [
        'Bu hesaplayıcıyı cihazlarınız için başına gerçek döngü maliyetini bulmak için kullanın.',
        'Mümkün olduğunda Eco moduna geçerek yüzde 40\'a kadar enerji tasarrufu sağlayın.',
        'Verimliliği en üst düzeye çıkarmak için tam yükler çalıştırın, kısmi yükler değil.',
        'Tarifanız zaman tarifeli fiyatlandırmayı destekliyorsa, döngüleri pik dışı saatlere ertelemeye çalışın.',
        'Çamaşır kurutma makinesi kullanmak yerine giysileri havada kurutarak bu maliyeti tamamen ortadan kaldırın.',
        'Filtreleri temizleyin ve düzenli olarak kireç çözün, böylece cihazlar belirtilen verimlilikte çalışır.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Cihaz',
    applianceWasher: 'Çamaşır Makinesi',
    applianceDishwasher: 'Bulaşık Makinesi',
    applianceDryer: 'Kurutma Makinesi',
    labelCycle: 'Program',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Yoğun',
    labelElectricityPrice: 'Elektrik Fiyatı',
    unitPriceKwh: '₺/kWh',
    labelWaterPrice: 'Su Fiyatı',
    unitPriceLiter: '₺/L',
    labelDetergent: 'Deterjan',
    labelDetergentToggle: 'Deterjan maliyetini dahil et',
    labelHour: 'Planlanan Saat',
    peakBadge: 'Pik tarife aktif',
    offPeakBadge: 'Pik dışı tarife',
    receiptTitle: 'Maliyet Dağılımı',
    receiptElectricity: 'Elektrik',
    receiptWater: 'Su',
    receiptDetergent: 'Deterjan',
    receiptTotal: 'Döngü başına toplam',
    receiptPerYear: 'Yıllık tahmini',
    comparisonTitle: 'Akıllı Değişim',
    comparisonText: 'Normalden Eco\'ya geçmek her yükte para kazandırır.',
    comparisonSavings: 'Yıllık tasarruf',
    comparisonMonths: 'deterjan ayları',
    badgePeak: 'Pik',
    badgeOffPeak: 'Pik Dışı',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'yıl',
    labelCyclesPerWeek: 'Haftalık döngü',
    currencySign: '₺',
    labelCurrency: 'Para Birimi',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
