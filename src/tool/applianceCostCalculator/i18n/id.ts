import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-biaya-peralatan';
const title = 'Kalkulator Biaya Siklus Air dan Energi Peralatan Rumah';
const description =
  'Hitung biaya sebenarnya per muat untuk mesin cuci, mesin pencuci piring, dan mesin pengering. Lihat persis berapa biaya listrik, air, dan deterjen untuk setiap siklus dan temukan berapa banyak yang dapat Anda hemat dengan beralih ke mode Eco.';

const faqData = [
  {
    question: 'Berapa biaya satu siklus mesin cuci?',
    answer:
      'Siklus Eco 40°C tipikal menggunakan sekitar 0,45 kWh listrik dan 40 liter air. Dengan harga rata-rata Eropa, ini membebani biaya sekitar 0,10 hingga 0,15 euro per muat. Siklus intensif 60°C dapat menggunakan lebih dari 1,2 kWh dan 70 liter, mendorong biaya di atas 0,30 euro per muat.',
  },
  {
    question: 'Apakah lebih murah menjalankan mesin pencuci piring di malam hari?',
    answer:
      'Jika penyedia listrik Anda menggunakan tarif berbasis waktu, menjalankan mesin pencuci piring di luar jam puncak dapat mengurangi biaya energi sebesar 30 persen atau lebih. Jam puncak biasanya pada pagi dan malam hari kerja. Periksa kontrak atau data meter pintar Anda untuk mengonfirmasi jendela di luar jam puncak Anda.',
  },
  {
    question: 'Apakah mesin pengering menggunakan banyak listrik?',
    answer:
      'Ya. Mesin pengering adalah salah satu peralatan rumah tangga paling boros energi. Satu muat penuh dapat mengonsumsi 2,5 hingga 3,5 kWh, dengan biaya 0,50 hingga 0,80 euro per siklus. Menggunakan mesin pengering dengan pompa panas atau menjemur pakaian di luar ruangan dapat mengurangi biaya ini sebesar 60 hingga 80 persen.',
  },
  {
    question: 'Berapa banyak air yang digunakan mesin pencuci piring?',
    answer:
      'Mesin pencuci piring modern sangat efisien. Siklus Eco standar hanya menggunakan 8 hingga 12 liter air per muat, sementara program intensif dapat menggunakan 14 hingga 16 liter. Ini jauh lebih sedikit daripada mencuci piring yang sama dengan tangan di bawah keran yang mengalir, yang biasanya mengonsumsi 40 hingga 60 liter.',
  },
  {
    question: 'Kapan waktu termurah untuk menggunakan peralatan rumah?',
    answer:
      'Di bawah tarif berbasis waktu, periode termurah biasanya pada larut malam, dini hari, dan akhir pekan. Slot di luar jam puncak ini dapat lebih murah 30 hingga 50 persen daripada jam puncak pada hari kerja. Beberapa penyedia juga menawarkan jam gratis di akhir pekan.',
  },
  {
    question: 'Apakah beralih ke mode Eco benar-benar menghemat uang?',
    answer:
      'Sangat. Mode Eco menggunakan suhu lebih rendah, fase pemanasan lebih singkat, dan lebih sedikit air. Selama satu tahun penuh, beralih dari Normal ke Eco pada mesin cuci dan mesin pencuci piring dapat menghemat 50 hingga 100 euro untuk listrik dan air gabungan, tergantung pada frekuensi penggunaan dan harga lokal.',
  },
];

const howToData = [
  {
    name: 'Pilih peralatan Anda',
    text: 'Ketuk ikon mesin cuci, mesin pencuci piring, atau mesin pengering di bagian atas kalkulator. Setiap peralatan memiliki profil konsumsi energi dan air yang berbeda.',
  },
  {
    name: 'Pilih jenis siklus',
    text: 'Gunakan penggeser Eco, Normal, atau Intensif untuk mengatur program cuci. Eco menggunakan lebih sedikit energi dan air. Intensif menggunakan paling banyak.',
  },
  {
    name: 'Masukkan harga lokal Anda',
    text: 'Ketik harga listrik per kWh dan harga air per liter. Anda dapat menemukan ini di tagihan utilitas atau situs web penyedia.',
  },
  {
    name: 'Atur frekuensi penggunaan',
    text: 'Masukkan berapa siklus yang Anda jalankan per minggu. Ini memungkinkan kalkulator untuk memperkirakan biaya tahunan dan potensi penghematan tahunan Anda.',
  },
  {
    name: 'Pilih jam penggunaan',
    text: 'Pilih jam saat Anda berencana menjalankan peralatan. Jam puncak disorot dengan warna merah. Jam di luar puncak berwarna hijau dan lebih murah jika Anda memiliki tarif berbasis waktu.',
  },
  {
    name: 'Aktifkan biaya deterjen',
    text: 'Aktifkan sakelar deterjen jika Anda ingin struk menyertakan perkiraan untuk bubuk, cairan, atau kapsul per siklus.',
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
      text: 'Biaya Tersembunyi Setiap Muat',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan orang tidak tahu berapa biaya sebenarnya satu siklus mesin cuci. Mereka melihat tagihan listrik tiga bulanan dan mengira peralatan murah untuk dijalankan. Kenyataannya adalah bahwa keluarga yang mencuci lima muat per minggu dapat menghabiskan lebih dari 200 euro per tahun hanya untuk mencuci. Tambahkan mesin pencuci piring tiga kali seminggu dan mesin pengering dua kali seminggu dan totalnya melonjak di atas 500 euro setiap tahun. Kalkulator ini menguraikan setiap sen sehingga Anda dapat mengoptimalkan kebiasaan Anda.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Cuci Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Air Cuci Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Biaya Tambah Puncak', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Mengapa Perubahan Kecil Menumpuk',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Satu derajat suhu atau beberapa liter air tampak sepele untuk satu siklus. Namun selama 250 siklus per tahun, perbedaan kecil itu berkumpul menjadi uang serius. Menurunkan dari 60°C menjadi 40°C mengurangi penggunaan energi sekitar 40 persen per muat. Beralih dari Normal ke Eco pada mesin pencuci piring menghemat sekitar 3 liter air dan 0,3 kWh setiap kali. Ini bukan keuntungan marjinal. Ini adalah cara tercepat untuk mengecilkan tagihan utilitas Anda tanpa membeli peralatan baru.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Siklus Intensif',
          description: 'Panas dan air maksimum untuk muat yang sangat kotor.',
          icon: 'mdi:alert',
          points: ['1,2 hingga 3,5 kWh per muat', '70 liter untuk mesin cuci', 'Biaya tambah jam puncak berlaku', 'Biaya tahunan tertinggi'],
        },
        {
          title: 'Siklus Eco',
          description: 'Suhu lebih rendah, durasi dioptimalkan, air minimal.',
          icon: 'mdi:check-circle',
          points: ['0,45 hingga 1,5 kWh per muat', 'Hanya 8 hingga 40 liter', 'Penjadwalan di luar puncak mungkin', 'Biaya tahunan terendah'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Audit Peralatan Cepat',
      icon: 'mdi:clipboard-check',
      badge: 'Tindakan',
      html: '<p style="margin:0">Jalankan mesin cuci hanya dengan muatan penuh. Gunakan program Eco untuk noda normal. Atur mesin pencuci piring ke penundaan mulai hingga setelah 22:00 jika Anda memiliki tarif berbasis waktu. Bersihkan filter serat mesin pengering setelah setiap siklus untuk menjaga efisiensi. Jemur pakaian di luar ruangan atau di rak kapan pun cuaca memungkinkan.</p>',
    },
    {
      type: 'title',
      text: 'Waktu Penggunaan dan Harga Puncak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Banyak penyedia listrik sekarang mengenakan tarif berbeda tergantung pada jam dalam sehari. Periode puncak, biasanya pagi dan malam hari kerja, dapat dikenakan biaya 30 hingga 50 persen lebih mahal daripada periode di luar puncak. Satu muat yang dijalankan pada pukul 20:00 mungkin berbiaya 0,18 euro sementara muat yang sama pada pukul 02:00 hanya berbiaya 0,12 euro. Selama setahun, menyesuaikan waktu penggunaan peralatan Anda dengan benar dapat menghemat 50 hingga 100 euro tanpa mengubah apa pun. Kalkulator ini menyorot jam puncak dengan warna merah dan jam di luar puncak dengan warna hijau sehingga Anda dapat merencanakan ke depan.',
    },
    {
      type: 'summary',
      title: 'Cara Memotong Biaya Peralatan',
      items: [
        'Gunakan kalkulator ini untuk menemukan biaya sebenarnya per siklus untuk peralatan Anda.',
        'Beralih ke mode Eco kapan pun mungkin untuk menghemat hingga 40 persen energi.',
        'Jalankan muat penuh, bukan muat sebagian, untuk memaksimalkan efisiensi.',
        'Tunda siklus ke jam di luar puncak jika tarif Anda mendukung harga berbasis waktu.',
        'Jemur pakaian di luar ruangan alih-alih menggunakan mesin pengering untuk menghilangkan biayanya sepenuhnya.',
        'Bersihkan filter dan delime secara teratur agar peralatan tetap berjalan pada efisiensi yang dinilai.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Peralatan',
    applianceWasher: 'Mesin Cuci',
    applianceDishwasher: 'Mesin Pencuci Piring',
    applianceDryer: 'Mesin Pengering',
    labelCycle: 'Program',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensif',
    labelElectricityPrice: 'Harga Listrik',
    unitPriceKwh: 'Rp/kWh',
    labelWaterPrice: 'Harga Air',
    unitPriceLiter: 'Rp/L',
    labelDetergent: 'Deterjen',
    labelDetergentToggle: 'Sertakan biaya deterjen',
    labelHour: 'Jam yang Direncanakan',
    peakBadge: 'Tarif puncak aktif',
    offPeakBadge: 'Tarif di luar puncak',
    receiptTitle: 'Rincian Biaya',
    receiptElectricity: 'Listrik',
    receiptWater: 'Air',
    receiptDetergent: 'Deterjen',
    receiptTotal: 'Total per siklus',
    receiptPerYear: 'Perkiraan per tahun',
    comparisonTitle: 'Pintar Beralih',
    comparisonText: 'Beralih dari Normal ke Eco menghemat uang untuk setiap muatan.',
    comparisonSavings: 'Penghematan tahunan',
    comparisonMonths: 'bulan deterjen',
    badgePeak: 'Puncak',
    badgeOffPeak: 'Luar Puncak',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'tahun',
    labelCyclesPerWeek: 'Siklus per minggu',
    currencySign: 'Rp',
    labelCurrency: 'Mata Uang',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
