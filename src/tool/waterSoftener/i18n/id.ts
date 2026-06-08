import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-penyaring-air';
const title = 'Kalkulator Penyaring Air Rumah dan Optimasi Konsumsi Garam';
const description =
  'Analisis tingkat kesadahan air Anda, hitung pengaturan optimal penyaring air dan perkiraan konsumsi garam tahunan. Lihat prakiraan dampak kerak, jadwal pengisian ulang garam dan prediksi umur peralatan dalam satu alat interaktif.';

const faqData = [
  {
    question: 'Apa itu kesadahan air?',
    answer:
      'Kesadahan air adalah konsentrasi mineral kalsium dan magnesium terlarut dalam air keran Anda. Dihitung dalam grain per gallon atau derajat kesadahan Prancis. Air keras menyebabkan penumpukan kerak dalam pipa, mengurangi efisiensi pemanasan dan memperpendek umur peralatan.',
  },
  {
    question: 'Bagaimana cara kerja penyaring air?',
    answer:
      'Penyaring air menggunakan manik-manik resin penukar ion untuk menukar ion kalsium dan magnesium dengan ion natrium. Ketika resin jenuh, sistem meregenerasi dengan menyiramkan larutan garam melalui tangki, memulihkan manik-manik dan mengirim mineral keras ke saluran pembuangan.',
  },
  {
    question: 'Berapa banyak garam yang digunakan penyaring air per tahun?',
    answer:
      'Rumah tangga tipikal empat orang dengan air sedang keras menggunakan antara 80 dan 120 kilogram garam per tahun. Air sangat keras atau rumah tangga lebih besar dapat mendorong angka ini di atas 200 kilogram. Penyaring air efisiensi tinggi modern menggunakan sekitar 30 persen lebih sedikit garam daripada model lama.',
  },
  {
    question: 'Seberapa sering saya harus mengisi ulang tangki garam?',
    answer:
      'Sebagian besar tangki larutan garam perlu diisi ulang setiap 4 hingga 8 minggu. Periksa tingkat garam setiap bulan. Jika tangki kurang dari sepertiga penuh, tambahkan kantong baru 25 kilogram. Jangan biarkan garam habis sepenuhnya atau resin akan mengeras kembali dan kehilangan efektivitas.',
  },
  {
    question: 'Apakah air keras benar-benar merusak peralatan?',
    answer:
      'Ya. Kerak yang menumpuk pada elemen pemanas memaksa mereka bekerja lebih keras, meningkatkan tagihan energi dan menyebabkan kegagalan dini. Pemanas air di area air sangat keras dapat kehilangan hingga 45 persen dari umur harapannya. Mesin cuci dan mesin pencuci piring juga menderita dari katup tersumbat dan drum berskala.',
  },
  {
    question: 'Bisakah saya minum air yang telah disaring?',
    answer:
      'Air yang telah disaring aman diminum oleh kebanyakan orang. Peningkatan natrium kecil, kira-kira setara dengan sepotong roti per hari. Namun, orang dengan diet rendah natrium ketat mungkin lebih suka keran terpisah yang tidak disaring untuk air minum atau memilih garam penyaring berbasis kalium.',
  },
];

const howToData = [
  {
    name: 'Masukkan kesadahan air Anda',
    text: 'Ketik nilai kesadahan dari laporan kualitas air atau strip uji Anda. Pilih grain per gallon atau derajat kesadahan Prancis dari pemilih unit.',
  },
  {
    name: 'Atur ukuran rumah tangga',
    text: 'Pilih jumlah orang yang tinggal di rumah Anda. Lebih banyak penghuni berarti konsumsi air lebih tinggi dan deplesi garam lebih cepat.',
  },
  {
    name: 'Pilih kapasitas penyaring',
    text: 'Masukkan kapasitas grain tangki resin penyaring Anda. Ini biasanya tercetak pada katup kontrol atau manual pengguna. Nilai umum adalah 24.000 atau 32.000 grain.',
  },
  {
    name: 'Tinjau kategori kesadahan',
    text: 'Baca skala kesadahan interaktif untuk memahami apakah air Anda lunak, sedang keras, atau sangat keras.',
  },
  {
    name: 'Periksa prakiraan garam',
    text: 'Lihat simulator tumpukan kantong garam untuk melihat berapa banyak kantong 25 kilogram yang Anda perlukan per tahun dan kapan pengisian ulang berikutnya jatuh tempo.',
  },
  {
    name: 'Periksa dampak peralatan',
    text: 'Bandingkan umur dasar mesin cuci Anda, pemanas air, dan pembuat kopi dengan estimasi umur mereka dengan air mentah Anda saat ini.',
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
      text: 'Biaya Tersembunyi Air Keras',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Air keras adalah salah satu masalah tersembunyi paling mahal di rumah. Setiap kali Anda membuka keran, mineral terlarut mengalir melalui pipa dan peralatan Anda. Selama berbulan-bulan dan bertahun-tahun mineral ini mengkristal menjadi kerak, kerak putih keras yang menyumbat elemen pemanas, mengurangi laju aliran dan merusak segel karet. Hasilnya adalah tagihan energi lebih tinggi, umur peralatan lebih pendek dan panggilan perawatan yang sering. Penyaring air menghilangkan kerusakan ini dari sumbernya.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Penggunaan Garam Tahunan Rata-rata', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Umur Dasar Mesin Cuci', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm Kerak per GPG/tahun', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Mengapa Kerak Sangat Merusak',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kerak bukan hanya noda kosmetik pada ketel Anda. Di dalam pemanas air, ini membentuk lapisan isolasi pada elemen pemanas. Untuk setiap milimeter kerak, efisiensi transfer energi turun hingga 10 persen. Itu berarti lapisan 3 milimeter dapat meningkatkan tagihan pemanasan air Anda hampir 30 persen. Di mesin cuci kerak menghambat aktivasi detergen, sehingga Anda menggunakan lebih banyak bubuk untuk hasil yang lebih buruk. Di pembuat kopi, ini merusak termostat dan menghasilkan ekstraksi pahit yang tidak merata.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Air Keras Tanpa Perlakuan',
          description: 'Mineral menumpuk dengan bebas di seluruh sistem perpipaan dan setiap peralatan yang terhubung.',
          icon: 'mdi:alert',
          points: ['Penumpukan kerak cepat pada pemanas dan ketel', 'Peningkatan konsumsi detergen dan sabun', 'Umur peralatan dipersingkat 30 hingga 45 persen', 'Tagihan energi lebih tinggi karena efek isolasi kerak'],
        },
        {
          title: 'Air yang Telah Disaring',
          description: 'Kalsium dan magnesium dihapus pada titik masuk sebelum mencapai keran dan peralatan.',
          icon: 'mdi:check-circle',
          points: ['Deposisi kerak nol pada elemen pemanas', 'Dosis detergen normal menghasilkan hasil lebih baik', 'Peralatan mencapai umur rancangan penuh mereka', 'Konsumsi energi lebih rendah untuk pemanasan air'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Pemeriksaan Cepat Air Keras',
      icon: 'mdi:clipboard-check',
      badge: 'Tindakan',
      html: '<p style="margin:0">Isi botol bening dengan air keran dan tambahkan beberapa tetes sabun cair. Kocok dengan kuat. Jika air tetap keruh dan menghasilkan sangat sedikit busa, air Anda keras. Air bening kristal dengan busa tebal stabil menunjukkan air lunak. Untuk pengukuran yang tepat gunakan strip uji kesadahan total atau minta laporan dari pemasok air Anda.</p>',
    },
    {
      type: 'title',
      text: 'Menentukan Ukuran Pasokan Garam dengan Benar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kehabisan garam adalah cara tercepat untuk merusak penyaring. Ketika tangki larutan garam kosong, tempat tidur resin mengeras kembali dalam beberapa hari dan sistem berhenti melindungi rumah Anda. Gunakan kalkulator ini untuk memperkirakan berapa banyak kantong 25 kilogram yang Anda butuhkan per tahun. Jika hasilnya lebih dari 10 kantong, pertimbangkan untuk meningkatkan ke tangki resin kapasitas lebih besar atau katup efisiensi tinggi yang menggunakan lebih sedikit garam per siklus regenerasi.',
    },
    {
      type: 'summary',
      title: 'Cara Melindungi Rumah Anda dari Air Keras',
      items: [
        'Gunakan kalkulator ini untuk menemukan kategori kesadahan air Anda yang tepat dan kebutuhan garam.',
        'Pasang penyaring air dengan ukuran yang tepat di titik masuk suplai utama.',
        'Isi ulang tangki larutan garam sebelum turun di bawah sepertiga penuh.',
        'Gunakan pelet garam evaporasi kemurnian tinggi untuk performa resin terbaik.',
        'Lakukan servis katup dan tempat tidur resin setiap 3 hingga 5 tahun.',
        'Pantau tagihan energi peralatan untuk peningkatan mendadak yang mungkin menandakan penumpukan kerak.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Kesadahan Air',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Ukuran Rumah Tangga',
    unitPeople: 'orang',
    labelSoftenerCapacity: 'Kapasitas Penyaring',
    unitGrains: 'grains',
    hardnessSoft: 'Lunak',
    hardnessSlightly: 'Agak Keras',
    hardnessModerate: 'Sedang Keras',
    hardnessHard: 'Keras',
    hardnessVery: 'Sangat Keras',
    hardnessExtreme: 'Sangat Keras Sekali',
    scaleTitle: 'Tingkat Penumpukan Kerak',
    scaleUnitMetric: 'mm/tahun',
    scaleUnitImperial: 'in/tahun',
    saltTitle: 'Prakiraan Garam Tahunan',
    saltAnnual: 'Garam Tahunan',
    saltBags: 'Kantong per tahun',
    saltDaysPerBag: 'Hari per kantong',
    saltWeeksPerBag: 'Minggu per kantong',
    applianceTitle: 'Umur Peralatan',
    applianceWasher: 'Mesin Cuci',
    applianceHeater: 'Pemanas Air',
    applianceCoffee: 'Pembuat Kopi',
    applianceBaseline: 'Dengan penyaring',
    applianceWithHardness: 'Dengan air keras',
    applianceSaved: 'thn',
    badgeSaved: 'Diperpanjang',
    labelUnitSystem: 'Satuan',
    btnMetric: 'Metrik',
    btnImperial: 'Imperial',
  },
};
