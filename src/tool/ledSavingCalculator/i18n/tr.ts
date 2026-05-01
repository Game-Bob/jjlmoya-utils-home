import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'led-tasarruf-hesaplama';
const title = 'LED Tasarruf Hesaplayıcı';
const description =
  'Geleneksel ampullerinizi LED ile değiştirerek ne kadar para ve kWh tasarruf edeceğinizi hesaplayın. Yıllık ve aylık tam kazancınızı ve CO2 azalımını keşfedin.';

const faqData = [
  {
    question: 'Bir LED ampul gerçekten ne kadar tasarruf sağlar?',
    answer:
      'LED ampul, akkor ampule göre %80 ile %90 arasında enerji tasarrufu sağlar. Örneğin, 60W\'tan 9W\'a geçmek, aynı parlaklığı korurken o lambanın elektrik maliyetini minimuma indirir.',
  },
  {
    question: 'LED\'e geçiş kendisini ne kadar sürede amorti eder?',
    answer:
      'LED\'lerin düşük maliyeti ve yüksek tasarrufu sayesinde, yatırım normal kullanımda genellikle 4 aydan kısa sürede geri döner. Uzun süre yanan lambalarda bu süre daha da kısalır.',
  },
  {
    question: 'Daha yüksek watt değerine sahip bir LED ampul takarsam ne olur?',
    answer:
      'LED\'ler çok az ısı yayar, bu nedenle elektrik sınırlarına uymak kaydıyla, eski ampullerin ısısı nedeniyle sınırlı olan lambalara daha yüksek lümenli LED\'ler takabilirsiniz.',
  },
  {
    question: 'Kutuların üzerinde yazan kadar uzun dayanıyorlar mı?',
    answer:
      'Kaliteli bir LED 15.000 ile 50.000 saat arası dayanır. Günde 4 saatlik ev kullanımıyla bir ampul 15 yıldan fazla dayanabilir.',
  },
  {
    question: 'LED\'leri dimmer (ışık ayarlı) anahtar ile kullanabilir miyim?',
    answer:
      'Sadece ampul "Dimmable" (Kısılabilir) olarak belirtilmişse. Standart LED\'ler eski dimmerlarla iyi çalışmayabilir ve titreyebilir.',
  },
  {
    question: 'Tüm lambayı değiştirmek mi gerekiyor?',
    answer:
      'Vakaların %99\'unda hayır. Sadece ampulü aynı duy tipine (E27, E14, GU10 vb.) sahip bir LED ile değiştirmeniz yeterlidir.',
  },
];

const howToData = [
  {
    name: 'Işık noktalarını sayın',
    text: 'Evdeki akkor veya halojen ampullerinizi kontrol edin ve watt değerlerini not edin.',
  },
  {
    name: 'Eşdeğer LED\'i seçin',
    text: 'Hesaplayıcıda mevcut ampul tipini seçin. Eşdeğer LED değerleri otomatik olarak atanacaktır.',
  },
  {
    name: 'Kullanım saatlerini ayarlayın',
    text: 'Ampullerin günde ortalama kaç saat açık kaldığını belirtin.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'LED ile Tasarruf Rehberi: Elektrik Faturasını Nasıl Düşürürsünüz?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Geleneksel aydınlatmadan <strong>LED (Light Emitting Diode)</strong> teknolojisine geçiş, eviniz için en hızlı geri dönüşü olan yatırımlardan biridir. Tasarruf edilen her watt doğrudan cebinize kazanç olarak döner. 9W bir LED, 60W akkor ampul ile aynı parlaklığı <strong>%85 daha az tüketimle</strong> sunar.',
    },
    {
      type: 'stats',
      items: [
        { value: '%85–90', label: 'Enerji Tasarrufu', icon: 'mdi:lightning-bolt' },
        { value: '25.000s', label: 'LED Ömrü', icon: 'mdi:clock-outline' },
        { value: '< 4 ay', label: 'Amortisman', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Akkor Aydınlatma',
          description: 'Isı yoluyla ışık üreten 20. yüzyıl teknolojisi. Enerjinin %95\'i ısı olarak boşa gider.',
          icon: 'mdi:lightbulb-outline',
          points: ['%95 ısı kaybı', 'Ömür: 1.000 saat', 'Yüksek işletme maliyeti'],
        },
        {
          title: 'Modern LED Teknolojisi',
          description: 'Güncel enerji verimliliği standardı. Anında tam parlaklık ve düşük ısı yayılımı.',
          icon: 'mdi:led-outline',
          points: ['%85–90 doğrudan tasarruf', 'Ömür: 25.000–50.000 saat', 'Minimum ısı yayılımı'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Tasarrufun Arkasındaki Fizik',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Akkor ampul enerjinin sadece %5\'ini ışığa dönüştürür. LED\'ler ise yarı iletkenler yardımıyla çok daha yüksek verimlilik sunar. <strong>Watt değerine değil, lümene bakın:</strong> eski bir 60W ampul 800 lm verir; bugün bu ışığı 8-9W LED ile alabilirsiniz.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Değişim Tablosu',
      icon: 'mdi:table',
      badge: 'Referans',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W Akkor</strong> → LED 5–6W (450 lm)</li><li><strong>60W Akkor</strong> → LED 8–10W (800 lm)</li><li><strong>100W Akkor</strong> → LED 13–15W (1500 lm)</li><li><strong>50W Halojen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Paranın Ötesinde LED Avantajları',
      items: [
        'Aşırı uzun ömür: 15 yılı aşkın kullanım süresi.',
        'Anında %100 parlaklık, bekleme süresi yok.',
        'Düşük ısı: Yazın klima yükünü azaltır.',
        'Cıva içermez, daha kolay geri dönüştürülür.',
        'E27, E14 gibi mevcut tüm duy tipleriyle uyumlu.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Ev Yapılandırması',
    labelBulbs: 'Değiştirilecek ampul sayısı',
    unitBulbs: 'adet',
    labelType: 'Şu anki ampul tipi',
    labelHours: 'Günde kaç saat açık?',
    labelPrice: 'Elektrik fiyatı',
    unitPrice: '₺/kWh',
    resultBadge: 'Gerçek tasarruf hesabı',
    labelAnnual: 'Yıllık kazancınız',
    labelMonthly: 'Aylık',
    labelEfficiency: 'Verimlilik',
    labelCo2: 'CO2 ayak izi azalımı',
    unitLess: '% daha az',
    currencySign: '₺',
    btnInc60Title: 'Akkor',
    btnInc60Sub: 'Klasik (60W)',
    btnInc40Title: 'Akkor',
    btnInc40Sub: 'Küçük (40W)',
    btnInc100Title: 'Akkor',
    btnInc100Sub: 'Büyük (100W)',
    btnHalo50Title: 'Halojen',
    btnHalo50Sub: 'Spot (50W)',
    usageNever: 'Neredeyse hiç',
    usageLow: 'Az kullanım',
    usageNormal: 'Normal kullanım',
    usageModerate: 'Orta seviye',
    usageHeavy: 'Yoğun kullanım',
    usagePro: 'Profesyonel kullanım',
    usageVeryHeavy: 'Çok yoğun',
    usageAlways: 'Sürekli açık',
  },
};
