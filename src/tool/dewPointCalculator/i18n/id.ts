import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'titik-embun';
const title = 'Kalkulator Titik Embun';
const description = 'Hitung suhu kondensasi pada dinding Anda menggunakan kelembapan dan suhu ruangan. Alat vital untuk mencegah jamur dan menjaga kesehatan bangunan rumah Anda.';

const faqData = [
  {
    question: 'Apa sebenarnya titik embun itu?',
    answer: 'Titik embun adalah suhu di mana udara harus didinginkan agar uap air di dalamnya mengembun menjadi air cair. Semakin tinggi kelembapan relatif, semakin dekat titik embun dengan suhu saat ini.',
  },
  {
    question: 'Mengapa jamur muncul di sudut-sudut rumah saya?',
    answer: 'Sudut ruangan sering kali menjadi "jembatan termal" di mana dinding lebih dingin. Jika suhu permukaan tersebut turun di bawah titik embun, maka akan terbentuk embun/air. Jamur membutuhkan kelembapan konstan ini untuk tumbuh.',
  },
  {
    question: 'Bagaimana cara menurunkan kelembapan di rumah?',
    answer: 'Cara paling efektif adalah dengan ventilasi (terutama setelah mandi atau memasak) dan menggunakan alat penyerap lembap (dehumidifier). Menjaga suhu tetap stabil juga membantu udara menahan lebih banyak uap tanpa mengembun.',
  },
  {
    question: 'Apakah jamur akibat kondensasi berbahaya?',
    answer: 'Ya. Jamur melepaskan spora yang dapat menyebabkan masalah pernapasan, alergi, dan asma. Mendeteksi risiko kondensasi adalah langkah pertama menuju rumah yang sehat.',
  },
];

const howToData = [
  {
    name: 'Ukur suhu dan kelembapan',
    text: 'Gunakan termometer dan higrometer untuk mengetahui nilai saat ini di dalam ruangan.',
  },
  {
    name: 'Masukkan nilai',
    text: 'Atur suhu dalam Celsius dan persentase kelembapan pada kalkulator.',
  },
  {
    name: 'Dapatkan suhu kritis',
    text: 'Alat ini akan memberi tahu Anda suhu tepat di mana air akan mulai mengembun pada permukaan.',
  },
  {
    name: 'Verifikasi permukaan',
    text: 'Jika Anda memiliki termometer laser, ukur suhu dinding. Jika sama atau lebih rendah dari hasil kalkulator, Anda perlu ventilasi atau isolasi tambahan.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Daftar Pustaka',
  bibliography: [
    {
      name: 'Aproksimasi Magnus untuk Titik Embun',
      url: 'https://id.wikipedia.org/wiki/Titik_embun',
    },
    {
      name: 'WMO Guide to Meteorological Instruments',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Apa itu Titik Embun dan Mengapa Penting untuk Rumah Anda?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Titik embun adalah suhu di mana uap air di udara berubah menjadi cair. Di dalam rumah, nilai ini menandai batas antara rumah yang sehat dan rumah dengan masalah kelembapan struktural. Ketika suhu permukaan (seperti dinding yang kurang isolasi) jatuh di bawah titik embun, tetesan air muncul — tempat berkembang biak yang ideal bagi jamur berbahaya.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Selisih Aman', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Kelembapan Ideal', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Bahaya Ekstrem', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Formula Magnus Tetens',
          description: 'Untuk menghitung titik embun dengan akurasi ilmiah, kami menggunakan pendekatan Magnus-Tetens yang direkomendasikan oleh WMO untuk suhu antara 0°C dan 50°C.',
          icon: 'mdi:calculator',
          points: ['Akurasi ilmiah tervalidasi', 'Ideal untuk suhu hunian'],
        },
        {
          title: 'Jembatan Termal dan Jamur',
          description: 'Sudut ruangan dan bingkai jendela adalah titik terdingin. Jika suhunya turun di bawah titik embun, kondensasi dan jamur tidak dapat dihindari.',
          icon: 'mdi:home-thermometer',
          points: ['Sudut ruangan adalah titik paling rentan', 'Isolasi termal mencegah embun'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Tingkat Risiko',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Risiko Rendah (selisih &gt; 5°C):</strong> Dinding Anda aman. <strong>Risiko Sedang (3–5°C):</strong> Perhatikan sudut-sudut ruangan. <strong>Risiko Tinggi (1–3°C):</strong> Embun mungkin muncul di kaca — segera ventilasi. <strong>Bahaya Ekstrem (&lt; 1°C):</strong> Kondensasi aktif dengan risiko jamur hitam.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Aturan Emas',
      icon: 'mdi:thermometer-alert',
      badge: 'Saran Kunci',
      html: '<p>Jika suhu dinding Anda kurang dari <strong>3°C dari titik embun</strong>, Anda berisiko terkena kondensasi. Gunakan ventilasi dan jaga kelembapan antara 40% dan 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Cara Mencegah Kondensasi',
      items: [
        'Ventilasi setiap hari, terutama setelah mandi atau memasak.',
        'Jaga kelembapan relatif antara 40% dan 60%.',
        'Gunakan kipas penyedot (exhaust) di kamar mandi dan dapur.',
        'Jangan menjemur pakaian di dalam ruangan tanpa ventilasi.',
        'Berikan isolasi pada dinding untuk menghindari permukaan dingin.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Suhu Ruangan',
    labelHumidity: 'Kelembapan Relatif',
    labelDewPoint: 'Titik Embun',
    riskLow: 'Risiko Rendah',
    riskMedium: 'Risiko Sedang',
    riskHigh: 'Risiko Tinggi',
    riskExtreme: 'Bahaya Ekstrem',
    riskLowDesc: 'Selisih > 5°C. Permukaan aman.',
    riskMediumDesc: 'Selisih 3–5°C. Pantau sudut ruangan.',
    riskHighDesc: 'Selisih 1–3°C. Segera ventilasi.',
    riskExtremeDesc: 'Selisih < 1°C. Kondensasi aktif.',
  },
};
