import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'perbandingan-tarif-listrik';
const title = 'Perbandingan Tarif Listrik: Pasar Bebas vs Teratur';
const description =
  'Temukan tarif listrik mana yang paling cocok bagi Anda. Bandingkan pasar teratur dengan pasar bebas berdasarkan konsumsi Anda.';

const faqData = [
  {
    question: 'Mana yang lebih baik, tarif tetap atau dinamis?',
    answer:
      'Tarif tetap memberikan kepastian harga. Tarif dinamis mengikuti harga pasar grosir yang bisa sangat murah atau sangat mahal. Alat ini membantu Anda memutuskan.',
  },
  {
    question: 'Bagaimana cara mengetahui konsumsi tahunan saya?',
    answer:
      'Anda dapat menemukan data ini di tagihan listrik terakhir Anda, biasanya dalam kWh.',
  },
  {
    question: 'Apa itu daya yang dikontrak?',
    answer:
      'Ini adalah batas beban maksimum (kW) yang dapat Anda gunakan secara bersamaan.',
  },
  { question: "Informasi tambahan apa yang membantu pemilihan? 1", answer: "Bandingkan masukan yang sama dan pertimbangkan penggunaan, perawatan, serta biaya jangka panjang." },
];

const howToData = [
  {
    name: 'Periksa tagihan',
    text: 'Cari konsumsi tahunan (kWh) dan daya (kW) pada tagihan Anda.',
  },
  {
    name: 'Atur nilai',
    text: 'Geser pengatur untuk mencocokkan dengan data asli Anda.',
  },
  {
    name: 'Bandingkan hasil',
    text: 'Lihat perkiraan biaya tahunan untuk kedua skema tarif.',
  },
  { name: "Informasi tambahan apa yang membantu pemilihan? 1", text: "Bandingkan masukan yang sama dan pertimbangkan penggunaan, perawatan, serta biaya jangka panjang." },
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
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
      text: 'Hemat tagihan listrik Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memilih tarif yang tepat dapat membantu menghemat pengeluaran. Gunakan kalkulator kami untuk simulasi.',
    },
    {
      type: 'summary',
      title: 'Tips Berhemat',
      items: [
        'Bandingkan penawaran pasar bebas secara rutin.',
        'Sesuaikan daya kontrak agar tidak membayar yang tidak perlu.',
        'Gunakan listrik di jam hemat jika tarifnya berbeda.',
      ],
    },
    {
      type: 'paragraph',
      html: "Bagian ini melengkapi panduan untuk membandingkan skenario dan memahami hasilnya. 1.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini melengkapi panduan untuk membandingkan skenario dan memahami hasilnya. 2.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini melengkapi panduan untuk membandingkan skenario dan memahami hasilnya. 3.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini melengkapi panduan untuk membandingkan skenario dan memahami hasilnya. 4.",
    },
    {
      type: 'paragraph',
      html: "Bagian ini melengkapi panduan untuk membandingkan skenario dan memahami hasilnya. 5.",
    },
  ],
  ui: {
    labelConsumption: 'Konsumsi Tahunan',
    unitKwhYear: 'kWh/tahun',
    labelPower: 'Daya Kontrak',
    unitKw: 'kW',
    labelMarket: 'Pasar Teratur (Dinamis)',
    labelFree: 'Pasar Bebas (Tetap)',
    labelAnnualEst: 'Perkiraan tahunan',
    labelPowerTerm: 'Biaya Daya (Tetap)',
    labelEnergyTerm: 'Biaya Energi (Variabel)',
    labelDashboard: 'Dashboard Energi',
    labelMaxPower: 'Puncak Beban',
    labelMaxPowerEst: 'Perkiraan puncak',
    labelCo2: 'Jejak CO₂',
    labelCo2Est: 'Perkiraan tahunan',
    labelSimulator: 'Simulasi Skenario',
    labelSolar: 'Panel Surya',
    labelSolarDesc: 'Simulasi hemat dengan panel (reduksi 30%)',
    labelShift: 'Geser ke Waktu Murah',
    labelShiftDesc: 'Konsumsi yang digeser ke jam murah:',
    badgeBetter: 'Pilihan termurah',
    badgeWorseYear: 'tahun',
    currencySign: 'Rp',
    monthLabels: 'Jan,Feb,Mar,Apr,Mei,Jun,Jul,Agu,Sep,Okt,Nov,Des',
  },
};
