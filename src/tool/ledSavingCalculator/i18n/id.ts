import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-hemat-led';
const title = 'Kalkulator Hemat LED';
const description =
  'Hitung berapa banyak uang dan kWh yang Anda hemat dengan mengganti bohlam tradisional Anda ke LED. Temukan penghematan tahunan, bulanan, dan pengurangan CO2 Anda.';

const faqData = [
  {
    question: 'Berapa sebenarnya penghematan dari penggunaan bohlam LED?',
    answer:
      'Bohlam LED menghemat antara 80% hingga 90% energi dibandingkan dengan bohlam pijar (incandescent). Sebagai contoh, beralih dari 60W ke 9W mengurangi biaya listrik untuk lampu tersebut hingga hampir minimal dengan tingkat kecerahan yang sama.',
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk balik modal beralih ke LED?',
    answer:
      'Karena biaya LED saat ini rendah dan penghematannya besar, investasi tersebut biasanya kembali dalam waktu kurang dari 4 bulan untuk penggunaan normal. Jika lampu menyala berjam-jam, balik modal bisa lebih cepat.',
  },
  {
    question: 'Apa yang terjadi jika saya memasang bohlam LED dengan watt yang lebih besar?',
    answer:
      'LED menghasilkan panas yang sangat sedikit, sehingga Anda dapat memasang bohlam dengan lumen yang lebih tinggi pada lampu yang sebelumnya dibatasi oleh panas dari bohlam pijar, asalkan tetap mematuhi batas kelistrikan soket lampu.',
  },
  {
    question: 'Apakah masa pakainya benar-benar selama yang tertera pada kemasan?',
    answer:
      'LED berkualitas dapat bertahan antara 15.000 hingga 50.000 jam. Untuk penggunaan rumah tangga rata-rata 4 jam per hari, ini berarti satu bohlam dapat bertahan lebih dari 15 tahun.',
  },
  {
    question: 'Dapatkah saya menggunakan LED pada lampu dengan dimmer?',
    answer:
      'Hanya jika bohlam tersebut secara jelas menyatakan "Dimmable". LED standar tidak berfungsi dengan baik pada dimmer lama dan mungkin akan berkedip atau berdengung.',
  },
  {
    question: 'Apakah saya harus mengganti seluruh unit lampu?',
    answer:
      'Dalam 99% kasus, tidak perlu. Anda hanya perlu mengganti bohlamnya saja dengan bohlam LED yang memiliki soket yang sama (E27, E14, GU10, dll.).',
  },
];

const howToData = [
  {
    name: 'Hitung titik lampu Anda',
    text: 'Periksa berapa banyak bohlam pijar atau halogen yang Anda miliki di rumah dan catat dayanya dalam watt.',
  },
  {
    name: 'Pilih LED yang setara',
    text: 'Pilih jenis bohlam Anda saat ini di kalkulator. Nilai LED yang setara akan diberikan secara otomatis.',
  },
  {
    name: 'Atur jam penggunaan',
    text: 'Tentukan rata-rata berapa jam dalam sehari lampu-lampu tersebut menyala.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'IDR' },
  inLanguage: 'id',
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
      text: 'Panduan Hemat dengan LED: Cara Memangkas Tagihan Listrik Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengganti pencahayaan tradisional ke teknologi <strong>LED (Light Emitting Diode)</strong> adalah salah satu investasi rumah tangga dengan pengembalian tercepat. Setiap watt yang dihemat langsung mengurangi beban biaya listrik bulanan Anda. Bohlam LED 9W memberikan tingkat kecerahan yang sama dengan bohlam pijar 60W dengan <strong>konsumsi energi 85% lebih rendah</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Hemat Energi', icon: 'mdi:lightning-bolt' },
        { value: '25.000j', label: 'Masa Pakai LED', icon: 'mdi:clock-outline' },
        { value: '< 4 bulan', label: 'Balik Modal', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pencahayaan Pijar (Incandescent)',
          description: 'Teknologi abad ke-20 yang berbasis pada pemanasan filamen. 95% energi terbuang sebagai panas.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% energi terbuang sebagai panas', 'Masa pakai: 1.000 jam', 'Biaya operasional sangat tinggi'],
        },
        {
          title: 'Teknologi LED Modern',
          description: 'Standar efisiensi energi saat ini untuk rumah tangga. Menyala instan dan emisi panas yang minimal.',
          icon: 'mdi:led-outline',
          points: ['85–90% hemat langsung', 'Masa pakai: 25.000–50.000 jam', 'Emisi panas minimal'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Fisika di Balik Penghematan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Bohlam pijar bekerja dengan memanaskan filamen tungsten. Hanya 5% energi yang menjadi cahaya. LED mengubah listrik menjadi cahaya melalui semikonduktor dengan efisiensi yang jauh lebih tinggi. <strong>Jangan lihat watt, lihat lumen:</strong> bohlam 60W lama menghasilkan 800 lm; sekarang Anda bisa mendapatkannya dengan LED 8-9W.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabel Kesetaraan Cepat',
      icon: 'mdi:table',
      badge: 'Referensi',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W pijar</strong> → LED 5–6W (450 lm)</li><li><strong>60W pijar</strong> → LED 8–10W (800 lm)</li><li><strong>100W pijar</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogen</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Keuntungan LED Selain Uang',
      items: [
        'Masa pakai sangat lama: lebih dari 15 tahun dalam penggunaan normal.',
        'Menyala seketika 100% tanpa waktu tunggu.',
        'Tanpa emisi panas: mengurangi beban AC di musim panas.',
        'Tanpa merkuri atau gas beracun, aman bagi lingkungan.',
        'Kompatibel dengan soket lampu yang ada (E27, E14, GU10, dll.).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Konfigurasi Rumah',
    labelBulbs: 'Berapa bohlam yang diganti?',
    unitBulbs: 'buah',
    labelType: 'Jenis bohlam saat ini',
    labelHours: 'Lama lampu menyala (jam/hari)',
    labelPrice: 'Harga listrik',
    unitPrice: 'IDR/kWh',
    resultBadge: 'Hitungan hemat real',
    labelAnnual: 'Hemat per tahun',
    labelMonthly: 'Per bulan',
    labelEfficiency: 'Efisiensi',
    labelCo2: 'Pengurangan jejak CO₂',
    unitLess: '% lebih rendah',
    currencySign: 'Rp',
    btnInc60Title: 'Pijar',
    btnInc60Sub: 'Klasik (60W)',
    btnInc40Title: 'Pijar',
    btnInc40Sub: 'Kecil (40W)',
    btnInc100Title: 'Pijar',
    btnInc100Sub: 'Besar (100W)',
    btnHalo50Title: 'Halogen',
    btnHalo50Sub: 'Fokus/Spot (50W)',
    usageNever: 'Hampir tidak pernah',
    usageLow: 'Jarang digunakan',
    usageNormal: 'Penggunaan normal',
    usageModerate: 'Cukup sering',
    usageHeavy: 'Intensif',
    usagePro: 'Profesional',
    usageVeryHeavy: 'Sangat intensif',
    usageAlways: 'Selalu menyala',
  },
};
