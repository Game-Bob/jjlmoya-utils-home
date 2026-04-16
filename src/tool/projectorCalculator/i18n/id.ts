import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'kalkulator-jarak-proyektor';
const title = 'Kalkulator Jarak Proyektor — Tembakan dan Layar';
const description =
  'Hitung jarak tepat untuk memasang proyektor Anda berdasarkan ukuran layar yang diinginkan dan Throw Ratio. Alat visual dengan simulasi real-time.';

const faqData = [
  {
    question: 'Apa itu Throw Ratio atau rasio tembakan?',
    answer:
      'Ini adalah angka yang menentukan seberapa besar gambar pada jarak tertentu. Dihitung dengan membagi jarak proyeksi dengan lebar layar. Rasio 1.5 berarti jika Anda memproyeksikan dari 1.5m, Anda akan mendapatkan lebar gambar 1m.',
  },
  {
    question: 'Berapa jarak yang saya butuhkan untuk layar 100 inci?',
    answer:
      'Tergantung pada Throw Ratio proyektor Anda. Dengan rasio standar 1.5:1, Anda membutuhkan sekitar 3.3m. Dengan proyektor tembakan pendek (Short Throw), Anda bisa mencapainya dalam jarak kurang dari 1m.',
  },
  {
    question: 'Apa perbedaan antara 16:9 dan 4:3?',
    answer:
      '16:9 adalah format layar lebar untuk film dan serial modern. 4:3 adalah format klasik untuk presentasi. Memilih yang benar akan menghindari bilah hitam yang berlebihan.',
  },
  {
    question: 'Apakah tinggi pemasangan proyektor berpengaruh?',
    answer:
      'Ya. Proyektor memiliki offset vertikal atau koreksi keystone. Idealnya dipasang terpusat terhadap tepi atas atau bawah layar untuk menghindari distorsi.',
  },
];

const howToData = [
  {
    name: 'Lihat Throw Ratio',
    text: 'Cari di kotak atau manual proyektor Anda untuk angka seperti 1.2:1 atau 1.5-1.8:1.',
  },
  {
    name: 'Tentukan ukuran layar',
    text: 'Masukkan jumlah inci diagonal yang ingin Anda capai atau lebar yang tersedia di dinding Anda.',
  },
  {
    name: 'Pilih format',
    text: 'Pilih 16:9 untuk menonton film dan serial, 4:3 untuk presentasi, atau 21:9 untuk cinemascope.',
  },
  {
    name: 'Dapatkan jaraknya',
    text: 'Kalkulator akan memberi Anda jarak tepat untuk memasang braket proyektor.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Pertanyaan Umum',
  faq: faqData,
  bibliographyTitle: 'Daftar Pustaka',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson — Panduan Jarak Proyeksi', url: 'https://epson.com/' },
    { name: 'BenQ — Pusat Pengetahuan', url: 'https://www.benq.com/en-us/knowledge-center/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Kuasai Geometri Proyeksi',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Memasang proyektor hanya dengan perkiraan bisa merusak pengalaman menonton. Terlalu dekat dan gambar akan kecil; terlalu jauh dan Anda akan kehilangan kecerahan. Kuncinya ada pada <strong>Throw Ratio</strong>, angka yang menentukan hubungan antara jarak dan ukuran gambar secara tepat.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Formula Jarak', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Apa itu Throw Ratio?',
          description: 'Ini adalah hubungan antara jarak proyeksi dan lebar gambar. TR 1.5 berarti Anda butuh jarak 1.5m untuk setiap meter lebar layar.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, ideal untuk ruang sempit', 'TR 1–2: Standar untuk ruang tamu', 'TR > 2: Long Throw, untuk auditorium besar'],
        },
        {
          title: 'Format dan Rasio Aspek',
          description: 'Format menentukan proporsi gambar. Menggunakan format yang salah akan menghasilkan bilah hitam yang membuang bagian layar.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: standar HD/4K untuk bioskop rumah', '21:9: format cinemascope untuk film', '4:3: untuk presentasi kantoran'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Pemasangan Profesional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Jika proyektor Anda memiliki fitur Lens Shift, selalu gunakan itu daripada Keystone digital. Keystone memotong piksel dan mengurangi resolusi efektif.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Cahaya Sekitar dan Gain Layar',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>Di ruangan dengan cahaya sekitar, pertimbangkan layar high-gain (>1.0) untuk mengompensasi hilangnya kontras.</p>',
    },
    {
      type: 'summary',
      title: 'Daftar Periksa Pemasangan',
      items: [
        'Catat Throw Ratio proyektor sebelum memilih lokasi.',
        'Verifikasi ukuran gambar maksimum berdasarkan ruang dinding yang tersedia.',
        'Pasang proyektor secara terpusat secara vertikal terhadap layar.',
        'Hindari digital Keystone: gunakan Lens Shift atau sesuaikan posisi fisik.',
        'Pastikan tidak ada sumber cahaya langsung yang mengarah ke layar.',
      ],
    },
  ],
  ui: {
    configTitle: 'Konfigurasi',
    configSubtitle: 'Tentukan layar dan proyektor Anda',
    labelDiagonal: 'Diagonal Layar',
    labelDiagonalUnit: 'Inci (")',
    labelFormat: 'Format (Rasio Aspek)',
    labelThrowRatio: 'Rasio Tembakan (Throw Ratio)',
    throwRatioHint: 'Lihat manual proyektor Anda. Contoh: 1.50 berarti untuk lebar 1m, Anda butuh jarak 1.5m.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Bioskop',
    ratio43Sub: 'Dokumen',
    labelWidth: 'Lebar Layar',
    labelHeight: 'Tinggi Layar',
    labelDistance: 'Jarak yang Diperlukan',
    simulationBadge: 'Simulasi Real-Time',
  },
};
