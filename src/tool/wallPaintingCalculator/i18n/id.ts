import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-cat-tembok';
const title = 'Kalkulator Cat dan Pengenceran untuk Dinding';
const description =
  'Hitung dengan tepat berapa liter atau galon cat yang Anda butuhkan untuk dinding Anda. Sesuaikan lapisan, jenis permukaan, pengenceran dan dapatkan biaya nyata sebelum membeli.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung jumlah cat yang tepat?',
    answer:
      'Kalikan luas permukaan dinding dengan jumlah lapisan, lalu bagi dengan hasil cat dalam meter persegi atau kaki persegi per liter atau galon. Kurangi pintu dan jendela dari luas total terlebih dahulu.',
  },
  {
    question: 'Berapa banyak cat yang dibutuhkan untuk ruangan standar?',
    answer:
      'Ruangan 12 meter persegi dengan langit-langit setinggi 2,5 meter memiliki sekitar 30 meter persegi permukaan dinding. Dengan dua lapisan dan hasil 12 meter persegi per liter, Anda membutuhkan sekitar 5 liter cat.',
  },
  {
    question: 'Apakah saya harus mencairkan cat sebelum mengaplikasikannya?',
    answer:
      'Cat plastik berbasis air biasanya siap pakai atau membutuhkan 5 hingga 10 persen air pada lapisan pertama. Cat enamel atau minyak sering membutuhkan pelarut khusus yang tercantum pada kaleng.',
  },
  {
    question: 'Berapa banyak lapisan yang benar-benar diperlukan?',
    answer:
      'Permukaan baru atau sangat menyerap membutuhkan primer ditambah dua lapisan finishing. Mengecat ulang dinding yang sudah dicat dalam warna serupa biasanya hanya membutuhkan satu atau dua lapisan.',
  },
  {
    question: 'Apakah saya harus mengurangi pintu dan jendela?',
    answer:
      'Ya. Ukur setiap bukaan dan kurangi dari total luas dinding. Sebagai aturan cepat, pintu sekitar 2 meter persegi dan jendela sekitar 1,5 meter persegi masing-masing.',
  },
  {
    question: 'Apakah jenis permukaan mengubah hasil cat?',
    answer:
      'Ya. Dinding halus yang sudah disiapkan dapat menghasilkan hingga 14 meter persegi per liter. Beton kasar, plester bertekstur atau bata menyerap dapat menurunkan hasil menjadi 6 atau 8 meter persegi per liter.',
  },
];

const howToData = [
  {
    name: 'Ukur dinding Anda',
    text: 'Ukur lebar dan tinggi setiap dinding. Kalikan untuk mendapatkan luas setiap dinding, lalu jumlahkan semua dinding.',
  },
  {
    name: 'Kurangi bukaan',
    text: 'Ukur pintu dan jendela dan kurangi luasnya dari total untuk mendapatkan permukaan nyata untuk dicat.',
  },
  {
    name: 'Pilih jenis cat',
    text: 'Pilih jenis cat di kalkulator. Cat plastik matte, cat plastik satin dan enamel memiliki hasil dan rekomendasi pengenceran yang berbeda.',
  },
  {
    name: 'Tetapkan lapisan dan harga',
    text: 'Tunjukkan berapa banyak lapisan yang Anda rencanakan untuk diterapkan dan harga per liter atau galon. Kalkulator akan mengembalikan jumlah dan total biaya yang tepat.',
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
      text: 'Kalkulator Cat: Beli Persis yang Anda Butuhkan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Mengecat ruangan tanpa menghitung terlebih dahulu biasanya berakhir dengan <strong>kaleng setengah kosong</strong> atau perjalanan darurat ke toko. Alasannya sederhana: hasil cat bervariasi dengan porositas permukaan, perubahan warna dan jumlah lapisan. Dinding halus yang sebelumnya dicat dapat menghasilkan hingga 14 meter persegi per liter, sementara dinding plester kasar dapat menyerap jumlah yang sama dan hanya menutupi 6 meter persegi per liter.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Tinggi', label: 'Cakupan Standar', icon: 'mdi:format-paint' },
        { value: '2 lapisan', label: 'Direkomendasikan', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Pengenceran Tipikal', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Bagaimana Hasil Cat Benar-benar Bekerja',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Produsen menyatakan hasil teoritis pada kaleng. Angka itu mengasumsikan permukaan yang benar-benar halus, tidak menyerap, putih dan dioleskan dengan rol profesional dalam kondisi ideal. Di dunia nyata, <strong>dinding berpori, warna gelap, dan aplikasi DIY</strong> mengurangi hasil tersebut sebesar 20 hingga 40 persen. Kalkulator kami memungkinkan Anda memilih profil yang realistis sehingga Anda tidak kekurangan.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cat Plastik Matte',
          description: 'Pilihan paling umum untuk interior. Cakupan tinggi, mudah untuk retouch, dan dapat dicuci di sebagian besar kualitas.',
          icon: 'mdi:palette',
          points: ['Cakupan interior standar', 'Pengenceran: 5 hingga 10 persen air', 'Terbaik untuk: ruang tamu dan kamar tidur'],
        },
        {
          title: 'Cat Plastik Satin',
          description: 'Finish sedikit mengkilap dengan resistensi lebih besar terhadap kelembaban dan noda. Lebih sulit untuk retouch tanpa bekas.',
          icon: 'mdi:brightness-6',
          points: ['Cakupan sedikit lebih tinggi', 'Pengenceran: 5 persen air', 'Terbaik untuk: dapur dan kamar mandi'],
        },
        {
          title: 'Cat Enamel',
          description: 'Finish keras dan tahan lama untuk kayu, radiator dan area lalu lintas tinggi. Membutuhkan pelarut atau pengencer khusus.',
          icon: 'mdi:spray',
          points: ['Finish keras dan tahan lama', 'Pengenceran: 10 hingga 15 persen pelarut', 'Terbaik untuk: pintu, bingkai dan furnitur'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pengukuran Permukaan Praktis',
      icon: 'mdi:ruler-square',
      badge: 'Tip',
      html: '<p style="margin:0">Kalikan lebar dinding kali tinggi dinding untuk setiap dinding. Untuk total cepat, tambahkan semua lebar dan kalikan dengan tinggi ruangan. Kemudian kurangi sekitar 2 meter persegi untuk setiap pintu standar dan 1,5 meter persegi untuk setiap jendela.</p>',
    },
    {
      type: 'title',
      text: 'Aturan Pengenceran dan Aplikasi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Lapisan pertama pada permukaan baru atau yang diperbaiki selalu membutuhkan pengenceran ringan agar cat menembus dan mengikat. Lapisan finishing harus dioleskan tidak dicairkan atau dengan minimum yang diindikasikan oleh produsen. <strong>Pengenceran berlebihan merusak pigmen</strong> dan meninggalkan bercak transparan yang membutuhkan lapisan tambahan.',
    },
    {
      type: 'summary',
      title: 'Mengapa Menghitung Sebelum Membeli',
      items: [
        'Hindari sisa cat yang mengering di kaleng dan berakhir sebagai limbah.',
        'Cegah ketidakcocokan warna antara batch yang dibeli pada waktu berbeda.',
        'Anggaran dengan akurat: ketahui biaya nyata termasuk primer dan peralatan.',
        'Rencanakan pekerjaan sekaligus tanpa menginterupsi untuk material tambahan.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Permukaan dan Cat',
    labelMetric: 'Metrik',
    labelImperial: 'Imperial',
    labelArea: 'Luas total untuk dicat',
    labelAreaFt: 'Luas total untuk dicat',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Hasil cat',
    labelYieldFt: 'Hasil cat',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Pilih jenis cat',
    btnPlasticMatTitle: 'Plastik Matte',
    btnPlasticMatSub: 'Matte · Air 5%',
    btnPlasticSatinTitle: 'Plastik Satin',
    btnPlasticSatinSub: 'Satin · Air 5%',
    btnEnamelTitle: 'Enamel',
    btnEnamelSub: 'Enamel · Pelarut 10%',
    labelCoats: 'Jumlah lapisan',
    unitCoats: 'lapisan',
    labelPrice: 'Harga per liter',
    labelPriceFt: 'Harga per galon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Persentase pengenceran',
    unitDilution: '%',
    resultBadge: 'Perhitungan cat',
    labelPaint: 'Liter cat',
    labelPaintGal: 'Galon cat',
    labelCost: 'Biaya total',
    labelWater: 'Cairan pengencer',
    labelWaterGal: 'Cairan pengencer',
    labelTotalVolume: 'Campuran total',
    labelTotalVolumeGal: 'Campuran total',
    labelCurrency: 'Mata Uang',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: 'Rp',
  },
};
