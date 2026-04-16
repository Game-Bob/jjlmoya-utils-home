import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr';
const title = 'Çevrimdışı QR Kod Oluşturucu';
const description =
  'WiFi, URL ve Kişiler için tarayıcınızda %100 güvenli QR kodları oluşturun. Verileriniz asla cihazınızdan dışarı çıkmaz.';

const faqData = [
  {
    question: 'Bu QR kodlarının süresi dolar mı?',
    answer:
      'Hayır. Burada oluşturulan kodlar statiktir. Bilgi doğrudan görüntünün içine kodlanmıştır. Sonsuza kadar çalışırlar.',
  },
  {
    question: 'Verilerimi kaydediyor musunuz?',
    answer:
      'Kesinlikle hayır. Tüm süreç tarayıcınızda (istemci tarafında) gerçekleşir. Sunucularımıza hiçbir veri gönderilmez.',
  },
  {
    question: 'iPhone ve Android\'de çalışır mı?',
    answer:
      'Evet. iOS ve Android\'deki çoğu modern kamera QR kodlarını yerel olarak okur ve ilgili işlemi (WiFi\'ye bağlan, linki aç vb.) önerir.',
  },
  {
    question: 'İnternet olmadan kullanabilir miyim?',
    answer:
      'Evet. Sayfa yüklendikten sonra bağlantınızı kesebilirsiniz, oluşturucu çalışmaya devam edecektir.',
  },
];

const howToData = [
  {
    name: 'QR Tipini Seçin',
    text: 'WiFi ağı, URL veya kişi (vCard) oluşturmak istediğinizi seçin.',
  },
  {
    name: 'Verileri Girin',
    text: 'Ağ adı, şifre veya web adresi gibi gerekli alanları doldurun.',
  },
  {
    name: 'Oluştur ve Kontrol Et',
    text: 'Kod anında oluşturulur. Ekrandan taratarak test edebilirsiniz.',
  },
  {
    name: 'İndir',
    text: 'QR kodu yazdırmak veya paylaşmak için görüntü olarak kaydedin.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'TRY' },
  inLanguage: 'tr',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Sıkça Sorulan Sorular',
  faq: faqData,
  bibliographyTitle: 'Kaynakça',
  bibliography: [
    { name: 'node-qrcode kütüphanesi', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'RFC 6350: vCard Spesifikasyonu', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Önce Gizlilik: Yerel Oluşturma',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Bu araç QR kodlarını doğrudan cihazınızda oluşturur. <strong>WiFi şifreleriniz</strong> veya <strong>kişisel verileriniz</strong> için tam güvenlik.',
    },
    {
      type: 'stats',
      items: [
        { value: '%100', label: 'Gizli', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Sunucusuz', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'İndir', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Kullanım İpuçları',
      items: [
        'Veriler sadece tarayıcıda işlenir.',
        'WiFi adında büyük/küçük harf duyarlılığına dikkat edin.',
        'Statik QR: Şifre değişirse yeni kod oluşturun.',
        'Yazdırmadan önce mutlaka kodu test edin.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Kişi',
    labelSsid: 'Ağ Adı (SSID)',
    labelPassword: 'Şifre',
    labelEncryption: 'Güvenlik',
    labelHidden: 'Gizli Ağ',
    labelUrl: 'Web Adresi (URL)',
    labelName: 'Ad',
    labelSurname: 'Soyad',
    labelPhone: 'Telefon',
    labelEmail: 'E-posta',
    labelOrg: 'Kurum / Şirket',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Yok',
    downloadBtn: 'PNG İndir',
    privacyMsg: '%100 tarayıcıda oluşturuldu. Verileriniz güvende.',
    placeholderSsid: 'EvAgim_5G',
    placeholderUrl: 'https://ornek.com',
    placeholderPassword: '••••••••',
  },
};
