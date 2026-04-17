import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'perbandingan-pemanas-gas-pompa-panas-aircond';
const title = 'Perbandingan Gas vs. Pompa Panas vs. AC: Hemat & Konsumsi';
const description = 'Hitung berapa banyak Anda berhemat dengan mengganti boiler gas ke pompa panas atau AC. Perbandingan nyata konsumsi energi dan efisiensi untuk rumah Anda.';

const faqData = [
  {
    question: 'Mana yang lebih murah, pompa panas atau gas alam?',
    answer: 'Secara operasional bulanan, pompa panas jauh lebih murah daripada gas alam. Berkat efisiensi 400% (COP 4), biaya per kWh panas yang dihasilkan biasanya 30% hingga 50% lebih rendah daripada gas, meskipun harga listrik per kWh lebih tinggi.',
  },
  {
    question: 'Apa perbedaan antara pompa panas (heat pump) dan AC biasa?',
    answer: 'Secara teknis keduanya adalah pompa panas. Perbedaan utamanya adalah media tempat mereka menyalurkan panas: pompa panas biasanya sistem "udara-ke-air" (memanaskan air untuk radiator atau pemanas lantai), sedangkan AC konvensional adalah "udara-ke-udara" (memanaskan udara secara langsung melalui unit split).',
  },
  {
    question: 'Apakah pompa panas bisa dipasang di rumah dengan radiator lama?',
    answer: 'Ya, pompa panas bisa dipasang dengan radiator konvensional menggunakan peralatan "suhu tinggi". Namun, untuk penghematan maksimal, kombinasi dengan pemanas lantai (underfloor heating) atau radiator suhu rendah adalah yang paling ideal.',
  },
  {
    question: 'Berapa lama waktu yang dibutuhkan untuk balik modal pemasangan pompa panas?',
    answer: 'Tergantung pada konsumsi rumah dan ketersediaan subsidi, masa balik modal (payback period) biasanya antara 5 hingga 8 tahun. Jika digabungkan dengan panel surya, periode ini bisa berkurang drastis.',
  },
];

const howToData = [
  {
    name: 'Luas Rumah',
    text: 'Masukkan luas bangunan dalam meter persegi untuk memperkirakan kebutuhan panas tahunan.',
  },
  {
    name: 'Harga Energi',
    text: 'Atur harga Gas dan Listrik sesuai dengan tagihan asli Anda untuk akurasi yang lebih tinggi.',
  },
  {
    name: 'Lihat Hasil',
    text: 'Bandingkan ketiga sistem secara berdampingan dan temukan pemenangnya dalam hal efisiensi dan biaya tahunan.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Daftar Pustaka',
  bibliography: [
    {
      name: 'IEA: Masa Depan Pompa Panas',
      url: 'https://www.iea.org/reports/the-future-of-heat-pumps',
    },
    {
      name: 'Energy Saving Trust: Panduan Pompa Panas',
      url: 'https://energysavingtrust.org.uk/advice/air-source-heat-pumps/',
    },
    {
      name: 'Pusat Data dan Teknologi Informasi ESDM',
      url: 'https://www.esdm.go.id/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Kunci Memilih Sistem Pemanas Anda',
      items: [
        '<strong>Pompa panas</strong> hingga 400% lebih efisien daripada boiler gas.',
        '<strong>Isolasi rumah</strong> mengurangi tagihan lebih efektif daripada boiler apa pun.',
        '<strong>Masa balik modal</strong> sistem listrik sekitar 6-8 tahun.',
        'Gunakan <strong>panel surya</strong> untuk pemanasan yang hampir gratis.',
      ],
    },
    {
      type: 'title',
      text: 'Perbandingan Konsumsi: Gas vs. Pompa Panas vs. AC',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memilih sistem iklim yang tepat untuk rumah adalah salah satu keputusan keuangan dan kenyamanan terpenting. Di tengah harga energi yang fluktuatif dan meningkatnya kepedulian terhadap keberlanjutan, mengetahui sistem mana yang paling efisien—dan mana yang paling hemat—sangatlah penting.',
    },
    {
      type: 'paragraph',
      html: 'Secara historis, gas alam telah menjadi pilihan utama karena kemudahannya. Namun, munculnya <strong>pompa panas (air source heat pump)</strong> dan peningkatan teknologi <strong>AC (pompa panas udara-ke-udara)</strong> telah mengubah keadaan. Kalkulator kami membantu Anda memvisualisasikan biaya operasional tahunan dengan data nyata.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Efisiensi Pompa Panas',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'terbaik', positive: true },
        },
        {
          label: 'Rata-rata Hemat/Tahun',
          value: 'Rp 7,5 Juta',
          icon: 'mdi:piggy-bank',
          trend: { value: 'estimasi', positive: true },
        },
        {
          label: 'Masa Pakai Alat',
          value: '20 Tahun',
          icon: 'mdi:calendar-check',
          trend: { value: 'standar', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Boiler Gas Alam: Standar Tradisional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pemanas gas alam menggunakan boiler untuk membakar bahan bakar guna memanaskan air, yang kemudian dialirkan melalui radiator atau pemanas lantai.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efisiensi:</strong> Boiler kondensasi modern memiliki efisiensi mendekati 100%.',
        '<strong>Kelebihan:</strong> Pemasangan luas, panas merata dengan cepat, dan biaya per kWh yang kompetitif.',
        '<strong>Kekurangan:</strong> Ketergantungan pada bahan bakar fosil, biaya berlangganan gas, dan emisi CO2.',
      ],
    },
    {
      type: 'title',
      text: '2. Pompa Panas: Efisiensi Maksimal (Udara-ke-Air)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pompa panas menyerap energi termal dari udara luar (bahkan dalam suhu dingin) dan memindahkannya ke dalam rumah untuk memanaskan air.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efisiensi (COP):</strong> Sistem pompa panas biasanya memiliki rata-rata COP 4. Artinya, untuk setiap 1 kWh listrik yang digunakan, ia menghasilkan 4 kWh panas.',
        '<strong>Kelebihan:</strong> Ramah lingkungan (terutama dengan panel surya), satu alat untuk pemanas dan pendingin, dan biaya operasional terendah.',
        '<strong>Kekurangan:</strong> Investasi awal tinggi (meskipun balik modal dalam 5-8 tahun) dan butuh ruang untuk unit luar.',
      ],
    },
    {
      type: 'tip',
      title: 'Tips Berhemat',
      html: 'Pompa panas bekerja paling baik jika dikombinasikan dengan pemanas lantai, karena air hanya perlu dipanaskan hingga 35°C, berbeda dengan 60-70°C pada radiator biasa.',
    },
    {
      type: 'proscons',
      title: 'Pompa Panas vs Boiler Gas',
      proTitle: 'Kenapa Pompa Panas?',
      conTitle: 'Kenapa Gas?',
      items: [
        { pro: 'Efisiensi tak terkalahkan (COP 4+)', con: 'Instalasi jauh lebih murah' },
        { pro: 'Bebas dari bahan bakar fosil', con: 'Panas instan daya tinggi' },
        { pro: 'Bisa Pemanas & Pendingin', con: 'Kompatibel dengan radiator lama' },
        { pro: 'Ideal dengan panel surya', con: 'Tanpa perlu unit luar ruangan' },
      ],
    },
    {
      type: 'title',
      text: '3. AC (Pompa Panas Udara-ke-Udara)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Biasa dikenal sebagai AC "split". Menggunakan siklus termodinamika yang sama dengan pompa panas tetapi memanaskan udara secara langsung, bukan air. Solusi yang sangat umum untuk daerah beriklim sedang. Efisiensinya (SCOP) biasanya antara 3 hingga 3.5.',
    },
    {
      type: 'title',
      text: 'Memahami Rumus Perhitungan',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Untuk membandingkan sistem ini secara adil, kita harus mengubah semua konsumsi ke satuan yang sama: biaya per kWh panas yang dihasilkan. Rumus alat kami adalah:',
    },
    {
      type: 'code',
      code: 'Biaya Tahunan = (Kebutuhan Panas Rumah / Efisiensi Sistem) × Harga Energi',
      ariaLabel: 'Rumus perhitungan biaya tahunan',
    },
    {
      type: 'paragraph',
      html: 'Keterangan:',
    },
    {
      type: 'list',
      items: [
        '<strong>Kebutuhan Panas:</strong> kWh panas yang dibutuhkan rumah per tahun (tergantung isolasi dan luas m2).',
        '<strong>Efisiensi:</strong> 0.95 untuk Gas, 4.0 untuk Pompa Panas, dan 3.2 untuk AC.',
        '<strong>Harga Energi:</strong> Biaya per kWh termasuk pajak.',
      ],
    },
    {
      type: 'card',
      title: 'Contoh Nyata: Rumah 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Bayangkan sebuah rumah yang butuh 7.000 kWh panas per tahun:</p><ul><li><strong>Gas:</strong> Rp 5,8 Juta/tahun</li><li><strong>Pompa Panas:</strong> Rp 3,1 Juta/tahun (Anda hemat 46%)</li><li><strong>AC:</strong> Rp 3,9 Juta/tahun</li></ul>',
    },
    {
      type: 'title',
      text: 'Kapan Tiap Sistem Menguntungkan?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tidak ada jawaban tunggal, karena tergantung pada lokasi dan jenis rumah Anda.',
    },
    {
      type: 'title',
      text: 'Dampak Isolasi Rumah',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Sistem pemanas apa pun tidak akan efisien jika rumah Anda "bocor" panas. Sebelum berinvestasi besar pada sistem baru, cek jendela dan isolasi dinding. Isolasi yang baik bisa memangkas kebutuhan energi hingga setengahnya.',
    },
    {
      type: 'title',
      text: 'Mitos Pompa Panas dan Konsumsi',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"Tidak berfungsi di cuaca sangat dingin":</strong> Salah. Unit modern bekerja hingga -20°C.',
        '<strong>"Membuat udara kering":</strong> Hanya jika menggunakan sistem AC (split). Pemanas lantai tidak demikian.',
        '<strong>"Listrik terlalu mahal":</strong> Efisiensi 400% jauh lebih menguntungkan dibanding biaya gas.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tahukah Anda?',
      icon: 'mdi:lightbulb-on',
      badge: 'Fakta',
      html: '<p>Nilai COP berubah sesuai suhu luar. Pada cuaca sangat dingin, efisiensi sedikit menurun namun tetap jauh lebih unggul dibandingkan boiler gas atau pemanas listrik biasa.</p>',
    },
    {
      type: 'title',
      text: 'Kesimpulan: Masa Depan adalah Elektrik',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tren global sangat jelas: dekarbonisasi rumah. Gas alam mulai ditinggalkan karena harganya akan terus naik. Kombinasi panel surya dan pompa panas adalah solusi cerdas untuk kenyamanan dan penghematan.',
    },
    {
      type: 'paragraph',
      html: 'Gunakan kalkulator kami untuk membandingkan tagihan Anda. Terkadang "kebocoran uang" terbesar bukan dari jendela yang terbuka, tetapi dari sistem pemanas yang sudah jadul.',
    },
  ],
  ui: {
    titleVivienda: '1. Data Rumah',
    helperVivienda: 'Atur karakteristik tempat tinggal Anda',
    labelM2: 'Luas Total',
    helperM2: 'Luas bangunan dalam meter persegi.',
    labelAislamiento: 'Tingkat Isolasi',
    helperAislamiento: 'Seberapa baik rumah Anda menahan panas?',
    optExcelent: 'Luar Biasa (Bangunan Baru / Passivhaus)',
    optMedium: 'Sedang (Kaca Ganda / Isolasi Standar)',
    optPoor: 'Kurang (Lama / Tanpa Isolasi Dinding)',
    titleCoste: '2. Biaya Energi',
    descCoste: 'Cek harga per kWh pada tagihan terakhir Anda.',
    labelGasPrice: 'Biaya Gas',
    helperGasPrice: 'Harga per kWh gas yang dikonsumsi.',
    labelElecPrice: 'Biaya Listrik',
    helperElecPrice: 'Harga per kWh listrik yang dikonsumsi.',
    titleComparison: '3. Perbandingan Konsumsi Tahunan',
    descComparison: 'Estimasi berdasarkan performa teknis tiap perangkat.',
    systemGas: 'Boiler Gas',
    systemAero: 'Pompa Panas',
    systemAir: 'AC (Split)',
    labelAnnualCost: 'Biaya Pemanasan',
    labelEfficiency: 'Efisiensi',
    labelSource: 'Sumber',
    labelEnergy: 'Energi',
    labelInstallation: 'Instalasi',
    valGasSource: 'Gas Alam',
    valAeroEnergy: 'Terbarukan + Listrik',
    valAirInstall: 'Udara-ke-Udara',
    winnerBadge: 'Ter-Efisien',
    unitCurrency: 'Rp',
  },
};
