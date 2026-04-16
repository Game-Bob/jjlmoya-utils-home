import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'kalkulator-solar';
const title = 'Kalkulator Kemiringan Panel Surya';
const description =
  'Hitung sudut kemiringan optimal untuk panel surya Anda berdasarkan lintang geografis Anda. Dapatkan nilai untuk pemasangan tetap dan penyesuaian musiman.';

const faqData = [
  {
    question: 'Apa yang terjadi jika atap saya tidak memiliki kemiringan yang sempurna?',
    answer:
      'Ini bukan masalah serius. Kerugian dari penyimpangan kecil (5-10°) kurang dari 3% dari produksi tahunan. Lebih penting untuk menghindari bayangan parsial daripada terobsesi dengan sudut yang tepat.',
  },
  {
    question: 'Apakah sudut optimal sama di seluruh dunia?',
    answer:
      'Tidak. Ini sangat bergantung pada lintang Anda. Seseorang di Madrid (~40°LU) memiliki sudut optimal yang berbeda dari seseorang di Jakarta (~6°LS).',
  },
  {
    question: 'Kearah mana panel harus menghadap?',
    answer:
      'Di Belahan Bumi Utara, selalu menghadap ke Selatan (azimuth 180°). Di Belahan Bumi Selatan, menghadap ke Utara. Orientasi Timur-Barat dapat menyebabkan kerugian 15-20% dibandingkan optimal.',
  },
  {
    question: 'Apakah ini juga berlaku untuk pemanas air surya?',
    answer:
      'Ya. Formula untuk kemiringan adalah sama untuk kolektor termal dan panel fotovoltaik, karena keduanya bergantung pada prinsip geometris yang sama.',
  },
];

const howToData = [
  {
    name: 'Masukkan lintang Anda',
    text: 'Tulis lintang lokasi Anda dalam derajat desimal, atau gunakan tombol deteksi otomatis.',
  },
  {
    name: 'Lihat sudut optimalnya',
    text: 'Sudut optimal tahunan adalah nilai referensi utama untuk instalasi tetap.',
  },
  {
    name: 'Sesuaikan menurut musim (opsional)',
    text: 'Jika dudukan Anda memungkinkan, gunakan sudut musim dingin dan musim panas untuk memaksimalkan produksi.',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Daftar Pustaka',
  bibliography: [
    { name: 'NREL PVWatts Calculator', url: 'https://pvwatts.nrel.gov/' },
    { name: 'PVGIS — European Commission Solar Tool', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Sains Kemiringan Matahari',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Efisiensi panel surya Anda sangat bergantung pada sudutnya. Memahami geometri langit adalah langkah pertama untuk mengubah atap Anda menjadi pembangkit listrik berkinerja tinggi.',
    },
    {
      type: 'summary',
      title: 'Kunci Instalasi Efisien',
      items: [
        'Sudut optimal tahunan adalah referensi utama Anda.',
        'Penyimpangan ±5° hanya mengurangi produksi <3%.',
        'Prioritaskan menghindari bayangan daripada mencari sudut yang sempurna.',
        'Di Belahan Bumi Utara, arahkan panel ke Selatan.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Lintang Geografis',
    btnLocate: 'Deteksi lokasi saya',
    labelOptimal: 'Sudut Optimal Tahunan',
    labelEfficiency: 'Efisiensi Maksimal',
    labelWinter: 'Musim Dingin',
    labelSummer: 'Musim Panas',
    hemisphereNorth: 'Belahan Bumi Utara — Hadapkan ke SELATAN',
    hemisphereSouth: 'Belahan Bumi Selatan — Hadapkan ke UTARA',
    geoNotAvailable: 'Geolokasi tidak tersedia pada browser ini.',
  },
};
