import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'bekleme-modu-tuketim-simulatoru';
const title = 'Bekleme Güç Tüketimi Simülatörü';
const description =
  'Cihazlarınızın bekleme modunda ne kadar elektrik harcadığını keşfedin. TV\'ler, yönlendiriciler, şarj cihazları ve daha fazlasından gelen hayalet yüklerin gizli yıllık maliyetini hesaplayın.';

const faqData = [
  {
    question: 'Vampire power veya hayalet yük nedir?',
    answer:
      'Vampire power, elektronik cihazların kapalı veya bekleme modundayken tükettiği elektriktir. Bunun nedeni, birçok cihazın uzaktan kumandalara yanıt vermek, ağ bağlantılarını sürdürmek veya dahili saatleri çalıştırmak için kısmen aktif kalmasıdır.',
  },
  {
    question: 'Bekleme gücü yılda ne kadara mal olur?',
    answer:
      'Ortalama bir hane yılda yalnızca bekleme gücüne 50 ila 150 euro arası boşa harcar. Tek bir modern TV sürekli olarak 10 ila 20 watt tüketebilir; bu da elektrik fiyatınıza bağlı olarak yılda yaklaşık 15 ila 30 euroya denk gelir.',
  },
  {
    question: 'Beklemede en çok hangi cihazlar tüketir?',
    answer:
      'En büyük suçlular uydu alıcıları, oyun konsolları, uyku modunda bırakılan masaüstü bilgisayarlar, akıllı TV\'ler ve eski harici güç adaptörleridir. Kablo ve uydu kutuları özellikle israflıdır çünkü nadiren gerçek bekleme moduna girerler.',
  },
  {
    question: 'Cihazları fişten çekmek gerçekten para kazandırır mı?',
    answer:
      'Evet. Cihazları fişten çekmek veya ana prizli gelişmiş güç şeritleri kullanmak bekleme tüketimini tamamen ortadan kaldırır. 20 bekleme cihazı bulunan tipik bir ev için yıllık tasarruflar 40 ila 120 euro arasında olabilir.',
  },
  {
    question: 'Akıllı güç şeritleri buna değer mi?',
    answer:
      'Akıllı veya gelişmiş güç şeritleri, bir ana cihaz kapatıldığında çevre cihazlardaki gücü keser. Eğlence merkezleri veya bilgisayar istasyonları ile kullanıldığında birkaç ay içinde kendilerini amorti ederler.',
  },
  {
    question: 'Evde bekleme gücünü nasıl ölçebilirim?',
    answer:
      'Prizli bir güç ölçer (vatmetre) kullanarak her cihazın kapalı veya boşta olduğunda tam olarak kaç watt çektiğini ölçebilirsiniz. Alternatif olarak, bu simülatör üretici ortalamaları ve laboratuvar ölçümlerine dayalı standartlaştırılmış tahminler sunar.',
  },
];

const howToData = [
  {
    name: 'Her odayı dolaşın',
    text: 'Sürekli prize takılı kalan her cihazı sayın. TV\'ler, mikrodalga fırınlar, yönlendiriciler, yazıcılar, oyun konsolları ve telefon şarj cihazlarını dahil edin.',
  },
  {
    name: 'Günlük bekleme saatlerini tahmin edin',
    text: 'Çoğu cihaz günde 20 ila 24 saat bekleme modundadır. Her cihaz için ortalamayı girin veya varsayılan değer olan 24 saati kullanın.',
  },
  {
    name: 'Elektrik fiyatınızı ayarlayın',
    text: 'Kilovatsaat başına ödediğiniz fiyatı girin. Bu bilgi elektrik faturanızda yazılıdır.',
  },
  {
    name: 'Vampire draw özetinizi okuyun',
    text: 'Simülatör, toplam boşa harcanan watt, yıllık kilovatsaat ve gizli yıllık maliyeti gösterir. Evinizin düşük, orta, yüksek veya aşırı olduğunu görmek için kategori rozeti kullanın.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Hayalet Yük: Ödediğiniz ama Asla Kullanmadığınız Elektrik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Fişe takılı bir kablosu olan evinizdeki her priz potansiyel bir <strong>hayalet elektrik</strong> kaynağıdır. Anahtar kapalı olsa bile cihaz elektrik çekmeye devam eder. Belki sadece birkaç watt, ama günde 24 saat ve yılda 365 günle çarpıldığında bu wattlar yüzlerce kilovatsaat ve cebinizden çıkan gerçek paraya dönüşür.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Hane Faturasının', icon: 'mdi:flash' },
        { value: '23h', label: 'Günde Ort. Bekleme', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'En Yüksek Cihaz Ort.', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Asla Uyumayan Cihazlar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Modern evlerde ortalama 40 elektronik cihaz bulunur. Bunların yaklaşık yarısı sürekli olarak şebekeye bağlıdır. Son yıllarda enerji düzenlemeleri bekleme verimliliğini iyileştirmiş olsa da, cihaz sayısı artmıştır. Anında açık modundaki tek bir oyun konsolu 15 watt çekebilir. Hızlı başlatmalı bir TV 12 watt çekebilir. Yönlendiriciler, modemler, akıllı hoparlörler, saatli mikrodalga fırınlar, yazıcılar ve şarj cihazlarını eklediğinizde, toplam hızla 100 wattın üzerinde kalıcı arka plan tüketimine ulaşır.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Düşük Etki Evleri',
          description: 'Akıllı şeritler ve fişten çekme alışkanlıklarıyla bekleme gücünü aktif olarak yöneten haneler.',
          icon: 'mdi:leaf',
          points: ['Toplam bekleme gücü 50 wattın altında', 'Yıllık maliyet 50 euronun altında', 'Gelişmiş güç şeritleri kullanır'],
        },
        {
          title: 'Yüksek Etki Evleri',
          description: 'Eğlence merkezleri, çoklu oyun konsolları ve sürekli açık bilgisayarlar bulunan tipik haneler.',
          icon: 'mdi:lightning-bolt',
          points: ['Toplam bekleme gücü 150 wattın üzerinde', 'Yıllık maliyet 150 euronun üzerinde', 'Birçok cihaz hızlı başlatma modunda'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Tasarruf Kontrol Listesi',
      icon: 'mdi:check-circle',
      badge: 'Eylem',
      html: '<p style="margin:0">Kullanılmadığında telefon şarj cihazlarını fişten çekin. Eğlence merkeziniz için ana prizli bir güç şeridi kullanın. TV\'ler ve konsollarda hızlı başlatma veya anında açık modlarını devre dışı bırakın. Masaüstü bilgisayarları uyku modunda bırakmak yerine tamamen kapatın.</p>',
    },
    {
      type: 'title',
      text: 'Wattların Neden Düşündüğünüzden Hızlı Toplandığı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Watt enerji kullanım hızıdır. Bir saat boyunca çalışan bir watt, bir vatsaattir. Sürekli 10 watt çeken bir cihaz yılda 87,6 kilovatsaat kullanır. Kilovatsaat başına ortalama 0,25 euro fiyatla, bu tek cihaz yılda 21 euronun üzerine mal olur. Şimdi bunu evinizdeki her takılı cihazla çarpın.',
    },
    {
      type: 'summary',
      title: 'Vampire Load\'ınızı Nasıl Kesersiniz',
      items: [
        'En büyük tüketicileri bu simülatör veya bir priz ölçerle belirleyin.',
        'Ana cihaz kapalıyken bekleme gücünü kesen akıllı güç şeritlerinde cihazları gruplayın.',
        'Mümkün olan yerlerde her zaman açık, hızlı başlatma ve ağ bekleme özelliklerini devre dışı bırakın.',
        'Günlük kullanılmayan şarj cihazları ve küçük ev aletlerini fişten çekin.',
        'Çok eski harici güç adaptörlerini modern verimli modellerle değiştirmeyi düşünün.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Hayalet Yük Denetimi',
    labelDevices: 'Bağlı bekleme cihazları',
    labelHours: 'Günlük bekleme saati',
    unitHours: 'sa',
    labelPrice: 'Elektrik fiyatı',
    unitPrice: '/kWh',
    resultBadge: 'Vampire draw sonucu',
    labelAnnualKwh: 'Yılda boşa harcanan',
    labelAnnualCost: 'Gizli yıllık maliyet',
    labelMonthlyCost: 'Aylık eşdeğer',
    labelDevicesCount: 'Sayılan cihazlar',
    labelTotalWatts: 'Toplam bekleme wattı',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Para birimi',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Düşük tüketim',
    categoryModerate: 'Orta tüketim',
    categoryHigh: 'Yüksek tüketim',
    categoryExtreme: 'Aşırı tüketim',
    addDevice: 'Cihaz ekle',
    removeDevice: 'Kaldır',
    modalAddTitle: 'Bekleme cihazı ekle',
    labelDeviceName: 'Cihaz adı',
    labelDeviceWatts: 'Beklemedeki watt',
    btnSave: 'Kaydet',
    btnCancel: 'İptal',
  },
};
