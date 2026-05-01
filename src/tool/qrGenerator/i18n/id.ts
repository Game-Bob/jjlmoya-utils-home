import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'pembuat-kode-qr-offline';
const title = 'Pembuat Kode QR Offline';
const description =
  'Buat kode QR untuk WiFi, URL, dan Kontak secara 100% aman di browser Anda. Data Anda tidak pernah meninggalkan perangkat Anda.';

const faqData = [
  {
    question: 'Apakah kode QR ini akan kedaluwarsa?',
    answer:
      'Tidak. Kode yang dihasilkan di sini bersifat statis. Informasi tersebut dikodekan langsung ke dalam gambar. Kode tersebut akan berfungsi selamanya.',
  },
  {
    question: 'Apakah Anda menyimpan data saya?',
    answer:
      'Sama sekali tidak. Seluruh proses terjadi di browser Anda (Client-Side). Tidak ada data yang dikirim ke server kami.',
  },
  {
    question: 'Apakah ini berfungsi di iPhone dan Android?',
    answer:
      'Ya. Sebagian besar kamera modern di iOS dan Android membaca kode QR secara asli dan menyarankan tindakan yang sesuai (sambungkan ke WiFi, buka tautan, dll.).',
  },
  {
    question: 'Bisakah saya menggunakannya tanpa internet?',
    answer:
      'Ya. Setelah halaman dimuat, Anda dapat mematikan internet dan pembuat kode QR tetap akan berfungsi dengan sempurna.',
  },
];

const howToData = [
  {
    name: 'Pilih tipe QR',
    text: 'Pilih apakah Anda ingin membuat kode untuk jaringan WiFi, tautan URL, atau kontak (vCard).',
  },
  {
    name: 'Masukkan data',
    text: 'Isi bidang yang diperlukan, seperti nama jaringan dan kata sandi, atau alamat web.',
  },
  {
    name: 'Buat dan periksa',
    text: 'Kode akan dibuat secara instan. Anda dapat mencobanya dengan memindai langsung dari layar.',
  },
  {
    name: 'Unduh',
    text: 'Simpan kode QR sebagai gambar untuk dicetak atau dibagikan secara digital.',
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

export const content: ToolLocaleContent<QRGeneratorUI> = {
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
      text: 'Privasi Utama: Pembuatan Lokal',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Alat ini menghasilkan kode QR langsung di perangkat Anda. Keamanan total untuk <strong>kata sandi WiFi</strong> atau <strong>data pribadi</strong> Anda.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privat', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Tanpa Server', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Unduh', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Tips Penggunaan',
      items: [
        'Data hanya diproses di browser Anda.',
        'Perhatikan huruf besar/kecil pada nama jaringan WiFi.',
        'Kode QR statis: jika kata sandi diubah, buat kode baru.',
        'Selalu uji pemindaian sebelum mencetak.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Kontak',
    labelSsid: 'Nama Jaringan (SSID)',
    labelPassword: 'Kata Sandi',
    labelEncryption: 'Keamanan',
    labelHidden: 'Jaringan Tersembunyi',
    labelUrl: 'Alamat Web (URL)',
    labelName: 'Nama Depan',
    labelSurname: 'Nama Belakang',
    labelPhone: 'Telepon',
    labelEmail: 'Email',
    labelOrg: 'Organisasi / Perusahaan',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Tidak ada',
    downloadBtn: 'Unduh PNG',
    privacyMsg: 'Dibuat 100% di browser Anda. Data Anda aman.',
    placeholderSsid: 'WiFiSaya_5G',
    placeholderUrl: 'https://contoh.com',
    placeholderPassword: '••••••••',
  },
};
