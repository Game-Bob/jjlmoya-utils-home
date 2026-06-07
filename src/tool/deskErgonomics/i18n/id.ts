import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'meja-ergonomi';
const title = 'Ergonomi Meja dan Penjajaran Tata Letak Ruang Kerja';
const description =
  'Masukkan tinggi badan Anda dan langsung lihat cara menyesuaikan kursi, meja, dan monitor untuk menghilangkan nyeri punggung dan leher di kantor rumah Anda.';

const faqData = [
  {
    question: 'Mengapa tinggi meja itu penting?',
    answer:
      'Meja yang terlalu tinggi memaksa bahu naik, menyebabkan ketegangan pada leher dan punggung atas. Meja yang terlalu rendah membuat Anda membungkuk ke depan, menekan diskus lumbal. Tinggi yang tepat menjaga lengan bawah sejajar dengan lantai dan siku Anda pada sudut 90 derajat.',
  },
  {
    question: 'Seberapa tinggi monitor saya seharusnya?',
    answer:
      'Bagian atas monitor Anda harus setinggi mata atau sedikit lebih rendah, dengan layar dimiringkan ke belakang 10 hingga 20 derajat. Ini menjaga leher dalam posisi netral dan mengurangi ketegangan mata dengan melihat sedikit ke bawah, yang merupakan sudut istirahat alami penglihatan manusia.',
  },
  {
    question: 'Seberapa jauh saya harus duduk dari layar?',
    answer:
      'Jarak ideal adalah sepanjang lengan, kira-kira 50 hingga 70 sentimeter. Pada jarak ini mata Anda tidak perlu bekerja keras untuk fokus, dan Anda dapat melihat seluruh layar tanpa menggerakkan kepala. Untuk layar yang lebih besar, tingkatkan jarak secara proporsional.',
  },
  {
    question: 'Apakah meja berdiri lebih baik?',
    answer:
      'Meja berdiri mengurangi duduk terlalu lama, yang dikaitkan dengan masalah kardiovaskular dan metabolik. Namun, berdiri sepanjang hari dapat menyebabkan masalah pembuluh darah dan kaki. Pendekatan terbaik adalah bergantian: duduk 30 menit, berdiri 15 hingga 30 menit, dan bergerak secara teratur.',
  },
  {
    question: 'Apakah kaki saya harus menyentuh lantai?',
    answer:
      'Ya. Kaki Anda harus bersandar rata di lantai dengan lutut pada sudut 90 derajat. Jika kursi Anda terlalu tinggi, gunakan penopang kaki. Jika kaki Anda menggantung, tekanan terkumpul di belakang paha, membatasi aliran darah dan menyebabkan kebas.',
  },
  {
    question: 'Berapa tinggi kursi terbaik?',
    answer:
      'Kursi harus memungkinkan lutut Anda menekuk kira-kira 90 derajat dengan kaki rata di lantai. Pinggul Anda harus sejajar dengan lutut atau sedikit lebih tinggi. Ini mendistribusikan berat secara merata di tulang duduk dan mengurangi tekanan pada punggung bawah.',
  },
];

const howToData = [
  {
    name: 'Ukur tinggi badan Anda',
    text: 'Berdiri bertelanjang kaki menghadap dinding dan tandai bagian atas kepala Anda. Ukur dari lantai ke tanda dalam sentimeter.',
  },
  {
    name: 'Pilih mode ruang kerja Anda',
    text: 'Pilih apakah Anda ingin rekomendasi untuk meja duduk atau meja berdiri. Setiap mode menggunakan proporsi tubuh yang berbeda.',
  },
  {
    name: 'Sesuaikan kursi Anda terlebih dahulu',
    text: 'Atur kursi Anda sehingga kaki bersandar rata di lantai dan lutut Anda membentuk sudut 90 derajat. Pinggul Anda harus sejajar dengan lutut atau sedikit lebih tinggi.',
  },
  {
    name: 'Atur permukaan meja Anda',
    text: 'Naikkan atau turunkan meja Anda sehingga lengan bawah bersandar sejajar dengan lantai saat mengetik. Siku Anda harus pada sudut 90 derajat.',
  },
  {
    name: 'Posisikan monitor Anda',
    text: 'Tempatkan monitor pada jarak sepanjang lengan. Bagian atas layar harus setinggi mata atau sedikit lebih rendah, dimiringkan ke belakang 10 hingga 20 derajat.',
  },
  {
    name: 'Verifikasi dengan avatar',
    text: 'Gunakan avatar di layar untuk memeriksa bahwa semua sudut berwarna hijau. Jika ada sendi yang berwarna merah, sesuaikan perabotan yang sesuai.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'Biaya Tersembunyi dari Penataan Meja yang Buruk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Kebanyakan orang menghabiskan lebih dari delapan jam sehari di meja, namun sedikit yang mengukur apakah kursi, meja, atau monitor mereka sesuai dengan tubuh mereka. Ketidaksesuaian hanya beberapa sentimeter dapat menciptakan ketegangan kronis pada leher, bahu, dan punggung bawah. Selama berbulan-bulan dan bertahun-tahun, ketegangan ini menjadi rasa sakit, dan rasa sakit menjadi cedera. Kabar baiknya adalah ergonomi optimal dapat dihitung dengan tepat dari satu pengukuran: tinggi badan Anda.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Rata-rata Waktu di Meja', icon: 'mdi:desk' },
        { value: '90°', label: 'Sudut Siku Ideal', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'Jarak Layar Terbaik', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Mengapa Satu Ukuran Tidak Pernah Cocok untuk Semua',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Meja standar memiliki tinggi 73 sentimeter dan kursi standar 45 sentimeter. Dimensi ini dirancang beberapa dekade lalu untuk pekerja kantor pria rata-rata. Jika Anda lebih pendek dari 175 sentimeter atau lebih tinggi dari 185 sentimeter, nilai default tersebut secara aktif merusak postur Anda. Wanita, remaja, dan orang dengan torsi lebih panjang atau lebih pendek dari rata-rata secara khusus kurang terlayani oleh furnitur siap pakai.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penataan Buruk',
          description: 'Nilai default furnitur umum yang menciptakan ketegangan seiring waktu.',
          icon: 'mdi:alert',
          points: ['Monitor terlalu tinggi atau terlalu rendah', 'Meja memaksa bahu naik', 'Kaki tidak menyentuh lantai', 'Kursi tidak memberikan penyangga lumbal'],
        },
        {
          title: 'Penataan Optimal',
          description: 'Pengukuran personal berdasarkan proporsi tubuh Anda.',
          icon: 'mdi:check-circle',
          points: ['Monitor setinggi mata', 'Siku pada 90 derajat', 'Kaki rata di lantai', 'Punggung bawah sepenuhnya tertopang'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Daftar Periksa Postur Cepat',
      icon: 'mdi:clipboard-check',
      badge: 'Tindakan',
      html: '<p style="margin:0">Duduk dengan punggung bersandar pada kursi. Periksa bahwa ada celah kecil di antara bagian belakang lutut dan tepi kursi. Pastikan pergelangan tangan Anda lurus saat mengetik. Bagian atas monitor Anda tidak boleh lebih tinggi dari mata Anda. Ambil istirahat berjalan selama 2 menit setiap 30 menit.</p>',
    },
    {
      type: 'title',
      text: 'Ilmu Duduk dan Berdiri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tubuh manusia tidak dirancang untuk bertahan dalam satu posisi selama berjam-jam. Saat duduk, tekanan pada diskus lumbal meningkat 40 persen dibandingkan saat berdiri. Saat berdiri diam, darah menggenang di kaki dan jantung harus bekerja lebih keras untuk memompanya kembali. Ritme kerja tersehat adalah bergantian antara duduk dan berdiri setiap 30 hingga 60 menit, dikombinasikan dengan jalan pendek. Alat ini menghitung kedua mode sehingga Anda dapat menata meja yang dapat dikonversi dengan benar.',
    },
    {
      type: 'summary',
      title: 'Cara Membangun Ruang Kerja yang Ergonomis',
      items: [
        'Ukur tinggi badan Anda bertelanjang kaki dalam sentimeter.',
        'Gunakan simulator ini untuk mendapatkan tinggi kursi, meja, dan monitor yang tepat.',
        'Sesuaikan kursi Anda terlebih dahulu, kemudian meja, kemudian monitor.',
        'Jika Anda menggunakan meja berdiri, atur 30 sentimeter lebih tinggi dari tinggi meja duduk.',
        'Tempatkan monitor pada jarak sepanjang lengan dan miringkan ke belakang 10 hingga 20 derajat.',
        'Ambil istirahat 2 menit untuk berjalan atau meregangkan setiap 30 menit.',
      ],
    },
  ],
  ui: {
    labelMode: 'Mode ruang kerja',
    modeSit: 'Duduk',
    modeStand: 'Berdiri',
    labelHeight: 'Tinggi badan Anda',
    unitCm: 'cm',
    labelGender: 'Bentuk tubuh',
    genderMale: 'Pria',
    genderFemale: 'Wanita',
    labelChair: 'Kursi',
    labelDesk: 'Meja',
    labelMonitor: 'Monitor',
    labelDistance: 'Jarak',
    labelAngle: 'Sudut',
    labelGood: 'Baik',
    labelAdjust: 'Sesuaikan',
    badgeChair: 'Duduk',
    badgeDesk: 'Permukaan',
    badgeMonitor: 'Layar',
    tipScreenLow: 'Naikkan monitor Anda',
    tipScreenHigh: 'Turunkan monitor Anda',
    tipDeskLow: 'Naikkan meja Anda',
    tipDeskHigh: 'Turunkan meja Anda',
    tipChairLow: 'Naikkan kursi Anda',
    tipChairHigh: 'Turunkan kursi Anda',
    tipDistance: 'Pindahkan layar ke jarak sepanjang lengan',
  },
};
