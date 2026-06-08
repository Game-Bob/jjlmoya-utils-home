import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'su-yumusatici-hesaplayici';
const title = 'Ev su yumuşatıcı ve tuz tüketimi optimizasyonu';
const description =
  'Su sertliği seviyenizi analiz edin, optimum yumuşatıcı ayarlarını hesaplayın ve yıllık tuz tüketimini tahmin edin. Kireç etkisi tahminlerini, tuz dolum zaman çizelgelerini ve cihaz ömür tahminlerini tek bir etkileşimli araçta görün.';

const faqData = [
  {
    question: 'Su sertliği nedir?',
    answer:
      'Su sertliği, musluk suyunuzda çözünmüş kalsiyum ve magnezyum minerallerinin konsantrasyonudur. Gallon başına grain veya Fransız derecesi olarak ölçülür. Sert su borularda kireç birikimine neden olur, ısıtma verimliliğini düşürür ve cihaz ömrünü kısaltır.',
  },
  {
    question: 'Su yumuşatıcı nasıl çalışır?',
    answer:
      'Bir su yumuşatıcı, iyon değişim reçinesi boncukları kullanarak kalsiyum ve magnezyum iyonlarını sodyum iyonlarıyla değiştirir. Reçine doygun hale geldiğinde, sistem bir tuzlu su çözeltisi ile tankı yıkayarak yenilenir; boncukları eski haline getirir ve sert mineralleri tahliye eder.',
  },
  {
    question: 'Bir yumuşatıcı yılda ne kadar tuz kullanır?',
    answer:
      'Orta sertlikte suyu olan tipik dört kişilik bir hane yılda 80 ila 120 kilogram tuz kullanır. Çok sert su veya daha büyük haneler bu miktarı 200 kilogramın üzerine çıkarabilir. Modern yüksek verimli yumuşatıcılar eski modellere göre yaklaşık yüzde 30 daha az tuz kullanır.',
  },
  {
    question: 'Tuz tankını ne sıklıkla doldurmalıyım?',
    answer:
      'Çoğu tuzlu su tankı 4 ila 8 haftada bir doldurulmalıdır. Tuz seviyesini aylık olarak kontrol edin. Tankın doluluk oranı üçte birin altına düşerse yeni bir 25 kilogramlık torba ekleyin. Tuzun tamamen bitmesine asla izin vermeyin; aksi takdirde reçine tekrar sertleşir ve etkinliğini kaybeder.',
  },
  {
    question: 'Sert su gerçekten cihazlara zarar verir mi?',
    answer:
      'Evet. Isıtma elemanları üzerindeki kireç birikimleri onların daha çok çalışmasına neden olarak enerji faturalarını artırır ve erken arızalara yol açar. Çok sert su bulunan bir bölgedeki bir su ısıtıcısı beklenen ömrünün yüzde 45\'ine kadar kaybedebilir. Çamaşır makineleri ve bulaşık makineleri de tıkanmış valfler ve kireçlenmiş tamburlardan etkilenir.',
  },
  {
    question: 'Yumuşatılmış su içilebilir mi?',
    answer:
      'Yumuşatılmış su çoğu insan için içmekte güvenlidir. Sodyum artışı küçüktür, kabaca günde bir dilim ekmekle eşdeğerdir. Ancak katı sodyum kısıtlı diyet uygulayan kişiler içme suyu için ayrı bir yumuşatılmamış musluk tercih edebilir veya potasyum bazlı bir yumuşatıcı tuzu seçebilir.',
  },
];

const howToData = [
  {
    name: 'Su sertliğinizi girin',
    text: 'Su kalitesi raporunuzdan veya test şeridinden sertlik değerini yazın. Birim seçiciden gallon başına grain veya Fransız derecesi seçin.',
  },
  {
    name: 'Hane büyüklüğünü ayarlayın',
    text: 'Evinizde yaşayan kişi sayısını seçin. Daha fazla kişi, daha yüksek su tüketimi ve daha hızlı tuz tüketimi anlamına gelir.',
  },
  {
    name: 'Yumuşatıcı kapasitesini seçin',
    text: 'Yumuşatıcı reçine tankının grain kapasitesini girin. Bu genellikle kontrol valfi veya kullanım kılavuzunda yazılıdır. Yaygın değerler 24.000 veya 32.000 graindir.',
  },
  {
    name: 'Sertlik kategorisini inceleyin',
    text: 'Suyunuzun yumuşak, orta sert veya aşırı sert olup olmadığını anlamak için etkileşimli sertlik ölçeğini okuyun.',
  },
  {
    name: 'Tuz tahminini kontrol edin',
    text: 'Yılda kaç adet 25 kilogramlık torbaya ihtiyacınız olacağını ve bir sonraki dolumun ne zaman yapılacağını görmek için torba yığını simülatörüne bakın.',
  },
  {
    name: 'Cihaz etkisini inceleyin',
    text: 'Çamaşır makinenizin, su ısıtıcınızın ve kahve makinenizin temel ömrünü, mevcut işlenmemiş suyunuzla tahmini ömürleriyle karşılaştırın.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'Sert Suyun Görünmeyen Maliyeti',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sert su, bir evdeki en pahalı gizli sorunlardan biridir. Musluğu her açtığınızda çözünmüş mineraller borularınızdan ve cihazlarınızdan akar. Aylar ve yıllar boyunca bu mineraller kirece kristalleşir; borularda ısıtma elemanlarını tıkayan, akış hızını düşüren ve lastik contaları yok eden sert beyaz bir tabaka. Sonuç olarak daha yüksek enerji faturaları, kısalan cihaz ömrü ve sık bakım çağrılarıdır. Su yumuşatıcı bu hasarı kaynağında ortadan kaldırır.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Yıllık Ortalama Tuz Kullanımı', icon: 'mdi:shaker-outline' },
        { value: '11 yıl', label: 'Çamaşır Makinesi Temel Ömrü', icon: 'mdi:washing-machine' },
        { value: '0,15', label: 'mm kireç/GPG/yıl', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Kireç Neden Bu Kadar Zararlı',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kireç, sadece çaydanlığınızdaki bir leke değildir. Bir su ısıtıcı içinde ısıtma elemanı üzerinde yalıtkan bir tabaka oluşturur. Her milimetre kireç için enerji transfer verimliliği yüzde 10\'a kadar düşer. Bu, 3 milimetrelik bir kaplamanın su ısıtma faturanızı yaklaşık yüzde 30 artırabileceği anlamına gelir. Çamaşır makinelerinde kireç deterjan aktivasyonunu engeller, böylece daha kötü sonuçlar için daha fazla toz kullanırsınız. Kahve makinelerinde termostata zarar verir ve acı, dengesiz ekstraksiyon üretir.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'İşlenmemiş Sert Su',
          description: 'Mineraller tesisat sisteminin tamamında ve her bağlı cihazda serbestçe birikir.',
          icon: 'mdi:alert',
          points: ['Isıtıcılarda ve kazanlarda hızlı kireç birikimi', 'Artan deterjan ve sabun tüketimi', 'Cihaz ömrünün yüzde 30 ila 45 oranında kısalması', 'Kirecin yalıtım etkisi nedeniyle daha yüksek enerji faturaları'],
        },
        {
          title: 'Yumuşatılmış Su',
          description: 'Kalsiyum ve magnezyum musluklara ve cihazlara ulaşmadan giriş noktasında çıkarılır.',
          icon: 'mdi:check-circle',
          points: ['Isıtma elemanları üzerinde sıfır kireç birikimi', 'Normal deterjan dozları daha iyi sonuç verir', 'Cihazlar tam tasarım ömürlerine ulaşır', 'Su ısıtma için daha düşük enerji tüketimi'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Hızlı Sert Su Kontrolü',
      icon: 'mdi:clipboard-check',
      badge: 'Eylem',
      html: '<p style="margin:0">Şeffaf bir şişeyi musluk suyuyla doldurun ve birkaç damla sıvı sabun ekleyin. Şiddetle çalkalayın. Su bulanık kalıyor ve çok az köpük oluşturuyorsa suyunuz sert demektir. Kristal berraklığında su kalın ve sabit köpükle yumuşak suyu gösterir. Kesin bir ölçüm için toplam sertlik test şeridi kullanın veya su tedarikçinizden rapor talep edin.</p>',
    },
    {
      type: 'title',
      text: 'Tuz Tedariğinizi Doğru Boyutlandırma',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tuzun bitmesi, bir yumuşatıcıyı mahvetmenin en hızlı yoludur. Tuzlu su tankı boşaldığında, reçine yatağı birkaç gün içinde tekrar sertleşir ve sistem evinizi korumayı bırakır. Yılda kaç adet 25 kilogramlık torba ihtiyacınız olduğunu tam olarak tahmin etmek için bu hesaplayıcıyı kullanın. Sonuç 10 torbadan fazlaysa, daha büyük kapasiteli bir reçine tankına veya rejenerasyon döngüsü başına daha az tuz kullanan yüksek verimli bir valfe geçmeyi düşünün.',
    },
    {
      type: 'summary',
      title: 'Evinizi Sert Suya Karşı Nasıl Korursunuz',
      items: [
        'Bu hesaplayıcıyı kullanarak tam su sertliği kategorinizi ve tuz ihtiyacınızı öğrenin.',
        'Ana su hattı girişine doğru boyutta bir su yumuşatıcı kurun.',
        'Tuzlu su tankı üçte birin altına düşmeden doldurun.',
        'En iyi reçine performansı için yüksek saflıkta buharlaştırılmış tuz peletleri kullanın.',
        'Valfi ve reçine yatağını her 3 ila 5 yılda bir servis ettirin.',
        'Kireç birikimini işaret edebilecek ani artışlar için cihaz enerji faturalarını izleyin.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Su Sertliği',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Hane Büyüklüğü',
    unitPeople: 'kişi',
    labelSoftenerCapacity: 'Yumuşatıcı Kapasitesi',
    unitGrains: 'grain',
    hardnessSoft: 'Yumuşak',
    hardnessSlightly: 'Hafif Sert',
    hardnessModerate: 'Orta Sert',
    hardnessHard: 'Sert',
    hardnessVery: 'Çok Sert',
    hardnessExtreme: 'Aşırı Sert',
    scaleTitle: 'Kireç Birikim Hızı',
    scaleUnitMetric: 'mm/yıl',
    scaleUnitImperial: 'in/yıl',
    saltTitle: 'Yıllık Tuz Tahmini',
    saltAnnual: 'Yıllık Tuz',
    saltBags: 'Yıllık torba sayısı',
    saltDaysPerBag: 'Torba başına gün',
    saltWeeksPerBag: 'Torba başına hafta',
    applianceTitle: 'Cihaz Ömrü',
    applianceWasher: 'Çamaşır Makinesi',
    applianceHeater: 'Su Isıtıcı',
    applianceCoffee: 'Kahve Makinesi',
    applianceBaseline: 'Yumuşatıcı ile',
    applianceWithHardness: 'Sert su ile',
    applianceSaved: 'yıl',
    badgeSaved: 'Uzatma',
    labelUnitSystem: 'Birimler',
    btnMetric: 'Metrik',
    btnImperial: 'İngiliz',
  },
};
