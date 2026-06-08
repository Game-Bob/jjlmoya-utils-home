import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kalkulator-kelembaban';
const title = 'Kalkulator Kelembaban Rumah dan Estimasi Waktu Pengeringan Dehumidifier';
const description =
  'Hitung berapa banyak air yang harus diekstrak dehumidifier Anda untuk membawa ruangan lembab ke tingkat kelembaban yang sehat. Lihat estimasi waktu operasi, peringatan risiko jamur, dan visual zona nyaman dalam satu alat interaktif.';

const faqData = [
  {
    question: 'Berapa lama seharusnya dehumidifier berjalan setiap hari?',
    answer:
      'Dalam ruangan yang agak lembab, dehumidifier domestik standar biasanya perlu berjalan antara 8 hingga 12 jam per hari untuk mempertahankan kelembaban relatif 50 persen. Dalam kondisi yang sangat lembab atau setelah kerusakan air, operasi berkelanjutan selama 24 hingga 48 jam mungkin diperlukan untuk mencapai kekeringan dasar.',
  },
  {
    question: 'Tingkat kelembaban dalam ruangan apa yang mencegah jamur?',
    answer:
      'Pertumbuhan jamur dihambat ketika kelembaban relatif dalam ruangan dijaga di bawah 60 persen. Zona nyaman ideal untuk kesehatan manusia dan pelestarian bangunan adalah antara 40 hingga 50 persen kelembaban relatif. Tingkat di atas 70 persen menciptakan lingkungan berisiko tinggi bagi spora jamur untuk berkecambah dalam 24 hingga 48 jam.',
  },
  {
    question: 'Berapa banyak air yang dapat ditahan udara?',
    answer:
      'Jumlah uap air yang dapat ditahan udara tergantung pada suhu. Pada 20 derajat Celsius, udara jenuh mengandung sekitar 17 gram air per meter kubik. Pada 25 derajat Celsius, angka ini naik menjadi sekitar 23 gram per meter kubik. Ruangan seluas 30 meter persegi pada suhu 25 derajat Celsius dan kelembaban 70 persen menampung sekitar 8 liter air tak terlihat di dalam udara.',
  },
  {
    question: 'Apakah suhu mempengaruhi efisiensi dehumidifier?',
    answer:
      'Ya. Dehumidifier berbasis kompresor bekerja paling baik di atas 18 derajat Celsius. Di bawah 15 derajat Celsius, kinerjanya menurun karena kumparan evaporator dapat membeku. Dehumidifier desikan lebih cocok untuk ruang dingin seperti garasi atau ruang bawah tanah karena menggunakan proses pengeringan kimia alih-alih kondensasi.',
  },
  {
    question: 'Ukuran dehumidifier apa yang saya butuhkan?',
    answer:
      'Untuk ruangan yang agak lembab hingga 50 meter persegi, unit dengan kapasitas 10 hingga 12 liter per hari biasanya sudah cukup. Untuk ruangan yang sangat lembab atau ruang di atas 50 meter persegi, pilih model 20 liter per hari. Setelah banjir atau kelembaban parah, unit industri 30 liter per hari akan memulihkan kondisi lebih cepat.',
  },
  {
    question: 'Apakah dehumidifier dapat mengeringkan pakaian?',
    answer:
      'Ya. Dehumidifier dengan mode pengeringan pakaian dapat mengeringkan pakaian di dalam ruangan secara efisien sambil mengekstrak kelembaban dari udara sekitarnya. Penggunaan energinya lebih sedikit daripada mesin pengering tumble dan mencegah kondensasi di jendela dan dinding. Perkirakan waktu pengeringan yang serupa dengan pengeringan di luar ruangan pada cuaca hangat.',
  },
];

const howToData = [
  {
    name: 'Masukkan ukuran ruangan',
    text: 'Ketik luas lantai ruangan dalam meter persegi. Kalkulator mengasumsikan tinggi langit-langit standar 2,5 meter untuk memperkirakan total volume udara.',
  },
  {
    name: 'Atur suhu',
    text: 'Masukkan suhu ruangan saat ini dalam derajat Celsius. Udara yang lebih hangat menampung lebih banyak kelembaban, sehingga suhu secara langsung mempengaruhi berapa banyak air yang harus dihilangkan.',
  },
  {
    name: 'Pilih kelembaban saat ini',
    text: 'Gunakan kenop kenyamanan atau input numerik untuk mengatur persentase kelembaban relatif saat ini. Nilai di atas 60 persen ditandai dengan warna peringatan.',
  },
  {
    name: 'Pilih target kelembaban',
    text: 'Tetapkan kelembaban relatif yang Anda inginkan. 50 persen direkomendasikan untuk kenyamanan dan pencegahan jamur. 40 persen ideal untuk penderita alergi.',
  },
  {
    name: 'Masukkan kapasitas dehumidifier',
    text: 'Masukkan laju ekstraksi mesin Anda dalam liter per hari. Ini biasanya tercetak pada label depan atau manual pengguna.',
  },
  {
    name: 'Tinjau hasil',
    text: 'Baca simulasi tangki ekstraksi air, estimasi waktu operasi, dan spanduk risiko jamur untuk memutuskan berapa lama menjalankan perangkat Anda.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Air Tersembunyi di Dinding Anda',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Sebagian besar pemilik rumah tidak menyadari bahwa udara lembab tidak hanya tidak nyaman, tetapi juga mahal dan berbahaya. Satu ruangan lembab dapat menampung beberapa liter uap air tak terlihat. Seiring waktu, kelembaban ini mengembun pada permukaan dingin, memberi makan koloni jamur dan merusak plester, cat, serta kayu. Memahami secara tepat berapa banyak air yang harus dihilangkan dan berapa lama waktunya adalah langkah pertama untuk melindungi rumah dan kesehatan Anda.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Kelembaban Dalam Ruangan Ideal', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Waktu Operasi Harian Rata-Rata', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Ambang Risiko Jamur', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Mengapa Kelembaban Relatif Penting',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kelembaban relatif bukanlah jumlah air di udara, melainkan persentase air yang ditampung udara relatif terhadap maksimum yang dapat ditampung pada suhu tersebut. Udara hangat seperti spons yang lebih besar. Pada 30 derajat Celsius, udara dapat menampung hampir dua kali lebih banyak kelembaban dibandingkan pada 15 derajat Celsius. Inilah sebabnya mengapa ruangan dapat terasa lengket bahkan setelah Anda membuka jendela. Kelembabannya masih ada, hanya kurang terlihat.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Kelembaban Tinggi',
          description: 'Di atas 60 persen kelembaban relatif. Risiko jamur, tungau debu, dan kerusakan akibat kondensasi.',
          icon: 'mdi:alert',
          points: ['Kondensasi pada jendela dan dinding', 'Bau apek dan pertumbuhan mikroba', 'Peningkatan iritasi pernapasan', 'Tagihan pemanasan yang lebih tinggi karena konduktivitas termal udara lembab'],
        },
        {
          title: 'Kelembaban Optimal',
          description: 'Antara 40 hingga 50 persen kelembaban relatif. Nyaman, sehat, dan hemat energi.',
          icon: 'mdi:check-circle',
          points: ['Tidak ada kondensasi pada permukaan dingin', 'Spora jamur tetap tidak aktif', 'Kenyamanan kulit dan pernapasan', 'Pelestrian perabot dan kayu'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Audit Kelembaban Cepat',
      icon: 'mdi:clipboard-check',
      badge: 'Tindakan',
      html: '<p style="margin:0">Periksa jendela untuk kondensasi setiap pagi. Jika tetesan air muncul secara teratur, kelembaban Anda terlalu tinggi. Jalankan dehumidifier selama 12 jam setiap hari hingga kondensasi berhenti. Pindahkan unit ke ruangan paling lembab, biasanya dapur, kamar mandi, atau ruang bawah tanah. Kosongkan tangki setiap hari dan bersihkan filter setiap dua minggu.</p>',
    },
    {
      type: 'title',
      text: 'Memilih Ukuran Dehumidifier yang Tepat',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kesalahan umum adalah membeli dehumidifier yang terlalu kecil untuk ruangan. Mesin 10 liter per hari di ruang bawah tanah lembab seluas 60 meter persegi akan berjalan terus menerus tanpa pernah mencapai target kelembaban. Gunakan kalkulator ini untuk melihat volume ekstraksi tepat yang dibutuhkan ruangan Anda. Jika estimasi waktu operasi melebihi 20 jam per hari, Anda memerlukan unit dengan kapasitas lebih besar atau ventilasi yang lebih baik.',
    },
    {
      type: 'summary',
      title: 'Cara Menjaga Rumah Anda Tetap Kering',
      items: [
        'Gunakan kalkulator ini untuk menentukan ekstraksi air tepat yang dibutuhkan untuk setiap ruangan.',
        'Pertahankan kelembaban relatif dalam ruangan antara 40 hingga 50 persen untuk kesehatan dan kenyamanan.',
        'Jalankan dehumidifier hingga spanduk risiko jamur berubah menjadi hijau.',
        'Kosongkan tangki air sebelum penuh untuk mencegah pematian otomatis.',
        'Bersihkan filter secara teratur untuk menjaga aliran udara dan laju ekstraksi tetap maksimal.',
        'Perbaiki ventilasi ruangan bersama dengan dehumidifikasi untuk hasil yang lebih cepat.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Ukuran Ruangan',
    unitM2: 'm2',
    labelTemperature: 'Suhu',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Kelembaban Saat Ini',
    labelTargetHumidity: 'Target Kelembaban',
    labelCapacity: 'Kapasitas Dehumidifier',
    unitLitersDay: 'L/hari',
    comfortDialTitle: 'Zona Nyaman',
    comfortCurrent: 'Saat Ini',
    comfortTarget: 'Target',
    tankTitle: 'Air di Udara',
    tankLiters: 'liter',
    runtimeTitle: 'Estimasi Waktu Operasi',
    runtimeUnitH: 'j',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Risiko Jamur',
    moldRiskHigh: 'Risiko Tinggi',
    moldRiskMedium: 'Risiko Sedang',
    moldRiskLow: 'Risiko Rendah',
    extractionLabel: 'untuk diekstrak',
    tipEnergy: 'Menjalankan dehumidifier Anda selama jam non-puncak dapat mengurangi biaya listrik secara signifikan.',
    tipMold: 'Menjaga kelembaban di bawah 50 persen mencegah spora jamur berkecambah pada permukaan.',
    unitPercent: '%',
    badgeHigh: 'Tinggi',
    badgeMedium: 'Sedang',
    badgeLow: 'Rendah',
  },
};
