import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulator-konsumsi-daya-standby';
const title = 'Simulator Konsumsi Daya Siaga';
const description =
  'Temukan berapa banyak listrik yang dibuang perangkat Anda dalam mode siaga. Hitung biaya tahunan tersembunyi dari beban fantom pada TV, router, charger, dan lainnya.';

const faqData = [
  {
    question: 'Apa itu daya vampire atau beban fantom?',
    answer:
      'Daya vampire adalah listrik yang dikonsumsi perangkat elektronik saat dimatikan atau dalam mode siaga. Ini terjadi karena banyak perangkat tetap aktif sebagian untuk merespons remote control, mempertahankan koneksi jaringan, atau menjaga jam internal tetap berjalan.',
  },
  {
    question: 'Berapa biaya daya siaga per tahun?',
    answer:
      'Rata-rata rumah tangga membuang 50 hingga 150 euro per tahun hanya untuk daya siaga. Satu TV modern dapat mengonsumsi 10 hingga 20 watt secara terus-menerus, yang setara dengan sekitar 15 hingga 30 euro per tahun tergantung pada harga listrik Anda.',
  },
  {
    question: 'Perangkat apa yang paling banyak dikonsumsi dalam mode siaga?',
    answer:
      'Pelaku terbesar adalah set top box, konsol game, komputer desktop yang dibiarkan dalam mode tidur, TV pintar, dan adaptor daya eksternal lama. Kotak kabel dan satelit sangat boros karena jarang benar-benar masuk ke mode siaga.',
  },
  {
    question: 'Apakah mencabut perangkat benar-benar menghemat uang?',
    answer:
      'Ya. Mencabut perangkat atau menggunakan power strip lanjutan dengan stop kontak utama menghilangkan konsumsi siaga sepenuhnya. Untuk rumah biasa dengan 20 perangkat siaga, penghematan tahunan dapat berkisar dari 40 hingga 120 euro.',
  },
  {
    question: 'Apakah power strip pintar sepadan?',
    answer:
      'Power strip pintar atau lanjutan memutus daya ke perangkat peripheral saat perangkat utama dimatikan. Mereka akan membayar diri mereka sendiri dalam beberapa bulan jika Anda menggunakannya dengan pusat hiburan atau stasiun kerja komputer.',
  },
  {
    question: 'Bagaimana cara mengukur daya siaga di rumah?',
    answer:
      'Anda dapat menggunakan meter daya colok (wattmeter) yang tidak mahal untuk mengukur secara tepat berapa watt yang dikonsumsi setiap perangkat saat mati atau menganggur. Sebagai alternatif, simulator ini memberikan estimasi standar berdasarkan rata-rata pabrikan dan pengukuran laboratorium.',
  },
];

const howToData = [
  {
    name: 'Periksa setiap ruangan',
    text: 'Hitung setiap perangkat yang tetap tercolok sepanjang waktu. Termasuk TV, microwave, router, printer, konsol game, dan charger ponsel.',
  },
  {
    name: 'Perkirakan jam siaga harian',
    text: 'Sebagian besar perangkat berada dalam mode siaga selama 20 hingga 24 jam per hari. Masukkan rata-rata untuk setiap perangkat atau gunakan default 24 jam.',
  },
  {
    name: 'Tetapkan harga listrik Anda',
    text: 'Masukkan harga yang Anda bayar per kilowatt jam. Ini tercetak pada tagihan listrik Anda.',
  },
  {
    name: 'Baca ringkasan beban vampire Anda',
    text: 'Simulator menunjukkan total watt yang terbuang, kilowatt jam tahunan, dan biaya tahunan tersembunyi. Gunakan lencana kategori untuk melihat apakah rumah Anda rendah, sedang, tinggi, atau ekstrem.',
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
  inLanguage: 'id',
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
      text: 'Beban Fantom: Listrik yang Anda Bayar tetapi Tidak Pernah Digunakan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Setiap stop kontak di rumah Anda yang memiliki kabel tercolok adalah sumber potensial dari <strong>listrik fantom</strong>. Bahkan saat sakelar mati, perangkat terus menarik daya. Mungkin hanya beberapa watt, tetapi dikalikan 24 jam sehari dan 365 hari setahun, watt-watt tersebut menjadi ratusan kilowatt jam dan uang nyata keluar dari saku Anda.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Dari Tagihan Rumah Tangga', icon: 'mdi:flash' },
        { value: '23h', label: 'Rata-rata Siaga per Hari', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Rata-rata Perangkat Teratas', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perangkat yang Tidak Pernah Tidur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Rumah modern berisi rata-rata 40 perangkat elektronik. Sekitar separuh dari mereka terus terhubung ke jaringan listrik. Meskipun peraturan energi telah meningkatkan efisiensi siaga dalam beberapa tahun terakhir, jumlah perangkat telah meningkat. Satu konsol game dalam mode instan-on dapat menarik 15 watt. TV dengan quick start dapat menarik 12 watt. Tambahkan router, modem, speaker pintar, microwave dengan jam, printer, dan charger, dan totalnya dengan cepat melebihi 100 watt konsumsi latar belakang permanen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Rumah Dampak Rendah',
          description: 'Rumah tangga yang secara aktif mengelola daya siaga melalui strip pintar dan kebiasaan mencabut.',
          icon: 'mdi:leaf',
          points: ['Total siaga di bawah 50 watt', 'Biaya tahunan di bawah 50 euro', 'Menggunakan power strip lanjutan'],
        },
        {
          title: 'Rumah Dampak Tinggi',
          description: 'Rumah tangga khas dengan pusat hiburan, beberapa konsol game, dan komputer yang selalu menyala.',
          icon: 'mdi:lightning-bolt',
          points: ['Total siaga lebih dari 150 watt', 'Biaya tahunan melebihi 150 euro', 'Banyak perangkat dalam mode quick start'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Daftar Periksa Penghematan Cepat',
      icon: 'mdi:check-circle',
      badge: 'Tindakan',
      html: '<p style="margin:0">Cabut charger ponsel saat tidak digunakan. Gunakan power strip dengan kontrol master untuk pusat hiburan Anda. Nonaktifkan mode quick start atau instan-on pada TV dan konsol. Matikan komputer desktop alih-alih membiarkannya dalam mode tidur.</p>',
    },
    {
      type: 'title',
      text: 'Mengapa Watt Bertambah Lebih Cepat dari yang Anda Kira',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Watt adalah laju penggunaan energi. Satu watt yang berjalan selama satu jam adalah satu watt-jam. Perangkat yang menarik 10 watt secara terus-menerus menggunakan 87,6 kilowatt jam per tahun. Dengan harga rata-rata 0,25 euro per kilowatt jam, satu perangkat tersebut menghabiskan biaya lebih dari 21 euro per tahun. Sekarang kalikan itu dengan setiap gadget yang tercolok di rumah Anda.',
    },
    {
      type: 'summary',
      title: 'Cara Memangkas Beban Vampire Anda',
      items: [
        'Identifikasi konsumen terbesar dengan simulator ini atau meter colok.',
        'Kelompokkan perangkat pada power strip pintar yang memutus daya siaga saat perangkat utama mati.',
        'Nonaktifkan fitur always on, quick start, dan network standby jika memungkinkan.',
        'Cabut charger dan peralatan kecil yang tidak digunakan setiap hari.',
        'Pertimbangkan untuk mengganti adaptor daya eksternal yang sangat tua dengan model efisien modern.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Audit Beban Fantom',
    labelDevices: 'Perangkat siaga yang terhubung',
    labelHours: 'Jam siaga per hari',
    unitHours: 'h',
    labelPrice: 'Harga listrik',
    unitPrice: '/kWh',
    resultBadge: 'Hasil beban vampire',
    labelAnnualKwh: 'Terbuang per tahun',
    labelAnnualCost: 'Biaya tahunan tersembunyi',
    labelMonthlyCost: 'Setara bulanan',
    labelDevicesCount: 'Jumlah perangkat',
    labelTotalWatts: 'Total watt siaga',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Mata Uang',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Beban rendah',
    categoryModerate: 'Beban sedang',
    categoryHigh: 'Beban tinggi',
    categoryExtreme: 'Beban ekstrem',
    addDevice: 'Tambah perangkat',
    removeDevice: 'Hapus',
    modalAddTitle: 'Tambah perangkat siaga',
    labelDeviceName: 'Nama perangkat',
    labelDeviceWatts: 'Watt dalam mode siaga',
    btnSave: 'Simpan',
    btnCancel: 'Batal',
  },
};
