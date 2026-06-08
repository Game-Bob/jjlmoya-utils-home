import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-tata-letak-ubin';
const title = 'Kalkulator Tata Letak dan Sisa Ubin';
const description =
  'Rencanakan lantai ruangan Anda dengan presisi milimeter. Hitung jumlah ubin yang tepat, kotak yang diperlukan, total biaya, dan visualisasikan tata letak secara real-time dengan pratinjau kisi interaktif.';

const faqData = [
  {
    question: 'Bagaimana cara menghitung jumlah ubin yang dibutuhkan untuk sebuah ruangan?',
    answer:
      'Ukur lebar dan panjang ruangan, pilih ukuran ubin, dan masukkan lebar nat. Kalkulator akan membagi dimensi ruangan dengan ukuran ubin ditambah nat untuk memberikan jumlah ubin yang tepat per baris dan kolom.',
  },
  {
    question: 'Berapa persentase sisa yang harus saya tambahkan saat membeli ubin?',
    answer:
      'Untuk ruangan persegi panjang standar, tambahkan 10% sisa. Untuk ruangan dengan banyak sudut, pola diagonal, atau potongan yang rumit, naikkan menjadi 15%. Ini mencakup kerusakan dan kesalahan pemotongan.',
  },
  {
    question: 'Apakah ketebalan nat benar-benar mengubah jumlah ubin?',
    answer:
      'Ya. Nat yang lebih lebar mengurangi cakupan efektif setiap ubin, sehingga sedikit meningkatkan jumlah total yang dibutuhkan. Kalkulator memperhitungkan ini secara otomatis di setiap baris dan kolom.',
  },
  {
    question: 'Apakah saya harus membeli kotak tambahan di luar persentase sisa?',
    answer:
      'Adalah bijaksana untuk membeli satu kotak ekstra jika tersedia. Batch warna dapat bervariasi antar produksi, dan memiliki cadangan yang cocok memudahkan perbaikan di masa depan.',
  },
  {
    question: 'Bagaimana cara memasang ubin di ruangan dengan bentuk tidak beraturan?',
    answer:
      'Bagi ruangan menjadi persegi panjang yang lebih kecil. Hitung setiap bagian secara terpisah dan jumlahkan totalnya. Selalu bulatkan kotak parsial ke atas untuk memastikan cakupan penuh.',
  },
  {
    question: 'Apa perbedaan sisa antara keramik dan ubin porselen?',
    answer:
      'Porselen lebih padat dan sulit dipotong, yang dapat meningkatkan sisa pemotongan 2% hingga 3% dibandingkan keramik standar. Kedua material harus mengikuti proses pengukuran yang sama.',
  },
  {
    question: 'Bisakah saya mengembalikan kotak ubin yang tidak terpakai?',
    answer:
      'Kebanyakan pengecer menerima kotak yang belum dibuka dalam 30 hari. Selalu simpan struk dan jangan membuka kotak cadangan hingga pemasangan sepenuhnya selesai.',
  },
];

const howToData = [
  {
    name: 'Ukur ruangan',
    text: 'Catat lebar dan panjang area lantai dalam sistem unit yang Anda pilih.',
  },
  {
    name: 'Pilih ubin dan nat',
    text: 'Pilih dimensi ubin dan lebar nat yang diinginkan.',
  },
  {
    name: 'Hitung dan visualisasikan',
    text: 'Masukkan nilai ke kalkulator, sesuaikan margin sisa, dan tinjau pratinjau tata letak live.',
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
      text: 'Panduan Lengkap untuk Perencanaan Lantai Ubin dan Pengendalian Sisa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Proyek pemasangan ubin yang sukses dimulai jauh sebelum lem pertama dioleskan. Pengukuran yang akurat, perencanaan tata letak yang cerdas, dan estimasi sisa yang tepat menentukan apakah renovasi Anda tetap sesuai anggaran dan jadwal. <strong>Kalkulator tata letak ubin interaktif kami</strong> mengubah dimensi mentah menjadi rencana lantai visual yang menunjukkan dengan tepat berapa banyak ubin yang muat per baris, berapa kotak yang harus dibeli, dan ke mana uang Anda pergi.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Sisa Standar', icon: 'mdi:alert-circle' },
        { value: '30+ tahun', label: 'Umur Ubin', icon: 'mdi:clock-outline' },
        { value: '48 jam', label: 'Pemasangan Rata-rata', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ubin Format Besar',
          description: 'Ubin lebih dari 60 cm menciptakan tampilan modern yang mulus, tetapi memerlukan alas yang benar-benar rata dan menghasilkan sisa potong lebih tinggi di ruangan kecil.',
          icon: 'mdi:arrow-expand',
          points: ['Lebih sedikit nat', 'Efek visual premium', 'Sisa lebih tinggi di ruang sempit'],
        },
        {
          title: 'Mosaik Kecil',
          description: 'Ideal untuk kamar mandi dan pola yang rumit. Menyesuaikan dengan bentuk tidak beraturan, tetapi memerlukan lebih banyak nat dan waktu pengerjaan.',
          icon: 'mdi:apps',
          points: ['Fleksibel di sekitar rintangan', 'Lebih banyak nat diperlukan', 'Waktu pemasangan lebih lama'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Mengapa Visualisasi Tata Letak Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Melihat kisi ubin sebelum pembelian mencegah kejutan yang mahal. Pratinjau live mengungkapkan apakah ukuran ubin yang Anda pilih meninggalkan strip sempit yang canggung di tepi atau menciptakan lantai yang seimbang dan simetris. Dengan menyesuaikan lebar nat dan orientasi ubin dalam kalkulator, Anda dapat mengoptimalkan tata letak untuk estetika dan efisiensi sebelum memesan.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabel Referensi Cakupan Cepat',
      icon: 'mdi:table',
      badge: 'Referensi',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 ubin per m²</li><li><strong>45 x 45 cm</strong> → 5 ubin per m²</li><li><strong>60 x 60 cm</strong> → 3 ubin per m²</li><li><strong>60 x 120 cm</strong> → 1,5 ubin per m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Tips Profesional untuk Meminimalkan Sisa',
      items: [
        'Pesan 10% ekstra untuk pemasangan lurus dan 15% untuk diagonal atau herringbone.',
        'Simpan semua kotak dari batch produksi yang sama untuk memastikan konsistensi warna.',
        'Ukur secara diagonal di ruangan untuk memeriksa kesikuhan sebelum merencanakan baris.',
        'Gunakan format besar hanya di ruangan yang lebih lebar dari panjang ubin untuk menghindari potongan berlebihan.',
        'Selalu bulatkan jumlah kotak ke atas; lebih murah daripada pengiriman kedua.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Konfigurasi Ruangan',
    labelRoomWidth: 'Lebar ruangan',
    labelRoomLength: 'Panjang ruangan',
    labelTileWidth: 'Lebar ubin',
    labelTileLength: 'Panjang ubin',
    labelGrout: 'Lebar nat',
    labelWaste: 'Margin sisa',
    labelTilesPerBox: 'Ubin per kotak',
    labelPrice: 'Harga per kotak',
    labelPattern: 'Pola pemasangan',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'pcs',
    unitPrice: '/kotak',
    resultBadge: 'Pratinjau live',
    labelArea: 'Luas lantai',
    labelTiles: 'Total ubin',
    labelBoxes: 'Kotak yang diperlukan',
    labelCost: 'Total biaya',
    labelWasteCount: 'Ubin sisa',
    labelCuts: 'Potongan parsial',
    currency: 'IDR',
    btnMetric: 'Metrik',
    btnImperial: 'Imperial',
    btnPatternStraight: 'Lurus',
    btnPatternBrick: 'Bata',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Tata letak optimal',
    badgeWarning: 'Peringatan sisa tinggi',
    visualTitle: 'Pratinjau tata letak',
  },
};
