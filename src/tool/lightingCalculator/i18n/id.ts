import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-pencahayaan-dan-lumen-untuk-rumah';
const title = 'Kalkulator Pencahayaan dan Lumen untuk Rumah';
const description =
  'Hitung secara tepat berapa lumen dan bola lampu yang Anda butuhkan untuk setiap ruangan. Pilih jenis ruangan, dimensi, dan jenis bola lampu untuk mendapatkan rencana pencahayaan profesional dengan estimasi lux real-time.';

const faqData = [
  {
    question: 'Berapa lumen yang saya butuhkan untuk ruang tamu?',
    answer:
      'Untuk ruang tamu yang umum, targetkan sekitar 150 lux di lantai. Kalikan luas ruangan dalam meter persegi dengan 150 untuk mendapatkan lumen yang dibutuhkan. Untuk ruangan 20 meter persegi, Anda membutuhkan sekitar 3.000 lumen.',
  },
  {
    question: 'Apa perbedaan antara lux dan lumen?',
    answer:
      'Lumen mengukur total output cahaya dari sebuah bola lampu. Lux mengukur cahaya yang benar-benar mencapai sebuah permukaan. Ruangan dengan langit-langit tinggi atau dinding gelap membutuhkan lebih banyak lumen untuk mencapai level lux yang sama karena cahaya hilang karena jarak dan absorpsi.',
  },
  {
    question: 'Apakah bola lampu LED benar-benar menghemat energi?',
    answer:
      'Ya. Bola lampu LED menghasilkan sekitar 100 lumen per watt, sementara bola lampu pijar hanya menghasilkan sekitar 15. Bola lampu LED 10W memberikan cahaya yang sama dengan bola lampu pijar 60W, menggunakan seperenam dari listriknya.',
  },
  {
    question: 'Bagaimana warna ruangan mempengaruhi kebutuhan pencahayaan?',
    answer:
      'Dinding dan langit-langit gelap menyerap cahaya. Di ruangan dengan permukaan gelap, Anda mungkin membutuhkan 50% lebih banyak lumen dari rekomendasi standar.',
  },
  {
    question: 'Berapa level lux yang baik untuk membaca?',
    answer:
      'Untuk membaca yang nyaman, Anda butuh 300 hingga 500 lux di halaman. Pencahayaan ambient umum biasanya menyediakan 150 hingga 200 lux, jadi tambahkan lampu tugas di dekat tempat membaca Anda untuk kecerahan tambahan.',
  },
  {
    question: 'Bisakah saya meredupkan bola lampu LED?',
    answer:
      'Hanya jika mereka ditandai sebagai dapat-diredupkan. LED standar mungkin berkedip atau memiliki umur pakai yang lebih pendek ketika terhubung ke dimmer. Selalu periksa kemasan untuk simbol dapat-diredupkan sebelum memasang.',
  },
];

const howToData = [
  {
    name: 'Pilih jenis ruangan Anda',
    text: 'Pilih fungsi ruangan. Dapur dan kantor membutuhkan cahaya yang lebih terang daripada kamar tidur atau lorong.',
  },
  {
    name: 'Masukkan dimensi',
    text: 'Masukkan lebar, panjang, dan tinggi langit-langit ruangan. Kalkulator menggunakan ini untuk menentukan indeks ruangan dan faktor pemanfaatan cahaya.',
  },
  {
    name: 'Pilih jenis bola lampu dan jumlahnya',
    text: 'Pilih teknologi bola lampu yang Anda sukai dan berapa banyak fixture yang Anda miliki. Kalkulator akan memberi tahu Anda jika Anda butuh lebih banyak bola lampu.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Panduan Lengkap Desain Pencahayaan Rumah dan Perencanaan Lumen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pencahayaan yang tepat mengubah rumah menjadi tempat tinggal. Di luar estetika, jumlah cahaya yang tepat mempengaruhi suasana hati, produktivitas, dan bahkan kesehatan mata. <strong>Kalkulator pencahayaan rumah kami</strong> membantu Anda menentukan secara tepat berapa lumen yang Anda butuhkan untuk setiap ruangan, dengan mempertimbangkan ukuran ruangan, tinggi langit-langit, warna permukaan, dan jenis bola lampu.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Rentang Lux yang Direkomendasikan', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Efisiensi LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Faktor Pemeliharaan', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pencahayaan Ambien Hangat',
          description: 'Ideal untuk ruang tamu dan kamar tidur. Menciptakan atmosfer yang nyaman dan mengurangi kelelahan mata di malam hari.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Suhu warna hangat (2700K)', 'Beberapa sumber yang dapat-diredupkan'],
        },
        {
          title: 'Pencahayaan Tugas Terang',
          description: 'Penting untuk dapur, kantor, dan kamar mandi. Memberikan visibilitas yang jelas untuk pekerjaan detail.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Putih dingin (4000K)', 'Fokus pada permukaan kerja'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Mengapa Dimensi Ruangan Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Cahaya menyebar dan melemah dengan jarak. Sebuah bola lampu yang cukup terang untuk langit-langit 2,5 meter mungkin terlalu redup untuk langit-langit 4 meter. Kalkulator memperhitungkan ini dengan menggunakan rumus indeks ruangan, yang mempertimbangkan baik luas lantai maupun tinggi pemasangan untuk memperkirakan berapa banyak cahaya yang benar-benar mencapai bidang kerja Anda.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabel Referensi Lux Cepat',
      icon: 'mdi:table',
      badge: 'Referensi',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Ruang tamu</strong> → 150 lux</li><li><strong>Dapur</strong> → 300 lux</li><li><strong>Kamar tidur</strong> → 100 lux</li><li><strong>Kamar mandi</strong> → 200 lux</li><li><strong>Kantor</strong> → 500 lux</li><li><strong>Lorong</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Tips Profesional untuk Pencahayaan yang Lebih Baik',
      items: [
        'Lapiskan tiga jenis cahaya: ambien, tugas, dan aksen.',
        'Gunakan dimmer untuk menyesuaikan kecerahan pada waktu yang berbeda dalam sehari.',
        'Pilih bola lampu LED untuk umur pakai yang panjang dan konsumsi energi yang rendah.',
        'Tempatkan lampu tugas di sisi berlawanan dari tangan dominan Anda untuk menghindari bayangan.',
        'Pertimbangkan bola lampu pintar untuk penjadwalan otomatis dan perubahan suhu warna.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Kalkulator Pencahayaan Ruangan',
    labelRoomType: 'Jenis ruangan',
    labelRoomWidth: 'Lebar',
    labelRoomLength: 'Panjang',
    labelHeight: 'Langit-langit',
    labelBulbType: 'Bola lampu',
    labelBulbWatt: 'Watt',
    labelFixtures: 'Fixture',
    labelAmbient: 'Suasana',
    btnAmbientCozy: 'Nyaman',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Terang',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'pcs',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Lux target',
    labelCurrentLux: 'Lux saat ini',
    labelBulbsNeeded: 'Bola lampu dibutuhkan',
    labelRoomArea: 'Luas',
    statusOptimal: 'Sempurna',
    statusInsufficient: 'Terlalu Redup',
    statusExcess: 'Terlalu Terang',
    btnLiving: 'Ruang Tamu',
    btnKitchen: 'Dapur',
    btnBedroom: 'Kamar Tidur',
    btnBathroom: 'Kamar Mandi',
    btnOffice: 'Kantor',
    btnHallway: 'Lorong',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogen',
    btnBulbIncandescent: 'Pijar',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Pencahayaan Anda seimbang sempurna untuk ruangan ini.',
    tipInsufficient: 'Tambahkan lebih banyak fixture atau bola lampu dengan watt yang lebih tinggi.',
    tipExcess: 'Kurangi fixture atau redupkan untuk menghemat energi.',
    labelManualAdjust: 'Penyesuaian manual',
    labelSummary: 'Rencana pencahayaan Anda',
    labelTotalLumens: 'Total lumen yang dibutuhkan',
    labelSuggestedSetup: 'Konfigurasi yang direkomendasikan',
    btnExport: 'Ekspor PDF',
  },
};
