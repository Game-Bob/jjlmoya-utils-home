import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-tonase-ac';
const title = 'Kalkulator Tonase dan Kapasitas Pendinginan AC';
const description =
  'Hitung ukuran AC yang tepat untuk ruangan Anda dalam BTU, frigoria, dan ton. Masukkan luas ruangan, tinggi langit-langit, penghuni, dan sumber panas.';

const faqData = [
  { question: 'Berapa BTU per meter persegi?', answer: 'Dasar standarnya adalah 600 BTU per meter persegi untuk langit-langit 2,5 m di iklim sedang. Meningkat dengan tinggi, sinar matahari, dan orang.' },
  { question: 'Apa itu frigoria?', answer: 'Frigoria adalah unit pendingin lama yang umum di Spanyol dan Amerika Latin. Satu frigoria setara dengan sekitar 3,968 BTU per jam.' },
  { question: 'Bagaimana mengonversi BTU ke ton?', answer: 'Satu ton refrigerasi sama dengan 12.000 BTU per jam. Bagilah total BTU dengan 12.000.' },
  { question: 'Apakah tinggi langit-langit penting?', answer: 'Ya. Setiap meter di atas 2,7 m meningkatkan kebutuhan pendinginan sekitar 8%.' },
];

const howToData = [
  { name: 'Ukur ruangan', text: 'Ukur panjang dan lebar dalam meter lalu kalikan untuk mendapatkan luas.' },
  { name: 'Hitung orang dan perangkat', text: 'Tambahkan jumlah orang dan sumber panas seperti komputer dan TV.' },
  { name: 'Pilih paparan sinar matahari', text: 'Pilih ringan, sedang, atau berat berdasarkan sinar matahari langsung.' },
  { name: 'Baca rekomendasi', text: 'Kalkulator menampilkan BTU, frigoria, dan ton untuk pasar mana pun.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'id',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Berapa ukuran AC yang saya butuhkan?', level: 2 },
    { type: 'paragraph', html: 'Ukuran yang tepat tergantung pada luas, tinggi langit-langit, orang, dan sinar matahari. Gunakan kalkulator ini untuk BTU, frigoria, dan ton yang tepat.' },
    { type: 'table', headers: ['Luas', 'BTU yang direkomendasikan', 'Tonase', 'Penggunaan umum'], rows: [['10 m² (kamar kecil)', '6.000 - 7.000 BTU', '0,5 - 0,75 t', 'Kamar tamu'], ['15 m² (kamar tidur)', '9.000 - 10.000 BTU', '0,75 - 1 t', 'Kamar utama'], ['20 m² (ruang tamu)', '12.000 - 14.000 BTU', '1 - 1,25 t', 'Ruang tamu kecil'], ['30 m² (ruang terbuka)', '18.000 - 21.000 BTU', '1,5 - 1,75 t', 'Studio'], ['40 m² (ruang tamu besar)', '24.000 - 28.000 BTU', '2 - 2,5 t', 'Ruang tamu + makan besar']] },
    { type: 'title', text: 'Mengapa ukuran yang salah menghabiskan uang', level: 2 },
    { type: 'paragraph', html: 'AC yang terlalu kecil bekerja terus-menerus, tidak pernah mencapai suhu yang diinginkan, dan merusak kompresor lebih awal. Yang terlalu besar meniupkan udara dingin dalam semburan pendek dan meninggalkan ruangan lembab.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU per m² dasar', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU per ton', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU per frigoria', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Luas ruangan', labelRoomSizeFt: 'Luas', labelCeilingHeight: 'Tinggi langit-langit', labelCeilingHeightFt: 'Tinggi',
    labelPeople: 'Orang', labelHeatSources: 'Sumber panas', labelSunExposure: 'Paparan sinar matahari', labelRoomType: 'Tipe ruangan',
    labelCalculate: 'Hitung', labelResult: 'Hasil', labelBtus: 'BTU/jam', labelFrigorias: 'Frigoria', labelTons: 'Ton',
    labelRequired: 'Dibutuhkan', labelRecommended: 'Direkomendasikan', labelUnitBtu: 'BTU/jam', labelUnitFrigorias: 'Frigoria', labelUnitTons: 'Ton',
    labelMetric: 'Metrik', labelImperial: 'Imperial', labelRoomCozy: 'Nyaman', labelRoomWarm: 'Hangat', labelRoomHot: 'Panas',
    bdBaseCooling: 'Pendinginan dasar', bdCeilingHeight: 'Tinggi langit-langit', bdPeople: 'Orang', bdHeatSources: 'Sumber panas', bdSunRoom: 'Matahari & tipe ruangan',
    sunLight: 'Ringan', sunMedium: 'Sedang', sunHeavy: 'Berat',
    roomBedroom: 'Kamar tidur', roomLiving: 'Ruang tamu', roomKitchen: 'Dapur', roomOffice: 'Kantor', roomServer: 'Ruang server',
    errorRequired: 'Harap isi semua bidang',
  },
};
