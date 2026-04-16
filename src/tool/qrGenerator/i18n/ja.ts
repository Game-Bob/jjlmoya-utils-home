import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr-generator';
const title = 'オフラインQRコード作成';
const description =
  'WiFi、URL、連絡先用のQRコードをブラウザ内で100%安全に作成。データがデバイスの外に送信されることはありません。';

const faqData = [
  {
    question: 'QRコードに有効期限はありますか？',
    answer:
      'いいえ。ここで作成されるコードは静的です。情報は画像内に直接埋め込まれているため、外部サーバーに依存せず、永久に機能します。',
  },
  {
    question: '入力したデータは保存されますか？',
    answer:
      'いいえ、一切保存されません。すべての処理はブラウザ内（クライアントサイド）で行われ、当社のサーバーに送信されることはありません。',
  },
  {
    question: 'iPhoneやAndroidで使えますか？',
    answer:
      'はい。最近のiOSやAndroidの標準カメラで読み取ることができ、WiFi接続やリンクを開くなどのアクションが自動的に提案されます。',
  },
  {
    question: 'オフラインでも使えますか？',
    answer:
      'はい。一度ページを読み込めば、インターネットを切断した状態でも問題なくQRコードを作成できます。',
  },
];

const howToData = [
  {
    name: '作成するタイプを選ぶ',
    text: 'WiFi、URL、連絡先（vCard）の中から作成したいものを選択します。',
  },
  {
    name: '情報を入力する',
    text: 'ネットワーク名やパスワード、ウェブアドレスなどの必要事項を入力します。',
  },
  {
    name: '作成・確認',
    text: 'QRコードが即座に生成されます。画面を直接スマホで読み取ってテストしてください。',
  },
  {
    name: 'ダウンロード',
    text: '作成したQRコードを画像として保存し、印刷や共有に利用します。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'JPY' },
  inLanguage: 'ja',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'よくある質問',
  faq: faqData,
  bibliographyTitle: '参考文献',
  bibliography: [
    { name: 'node-qrcode ライブラリ', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'RFC 6350: vCard 形式仕様', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'プライバシー重視：ローカル生成',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'このツールはQRコードをデバイス上で直接作成します。<strong>WiFiパスワード</strong>や<strong>個人情報</strong>がネットに流れる心配はありません。',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'プライベート', icon: 'mdi:shield-lock' },
        { value: 'オフライン', label: 'サーバー通信なし', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: '画像保存', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: '利用のコツ',
      items: [
        'データはブラウザ内でのみ処理されます。',
        'WiFiのSSIDやパスワードは大文字・小文字を区別します。',
        '静的QRのため、パスワードを変えたら新しく作成してください。',
        '印刷する前に必ず読み取りテストを行ってください。',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: '連絡先',
    labelSsid: 'ネットワーク名（SSID）',
    labelPassword: 'パスワード',
    labelEncryption: '暗号化',
    labelHidden: '非公開ネットワーク',
    labelUrl: 'ウェブサイトURL',
    labelName: '名前',
    labelSurname: '姓',
    labelPhone: '電話番号',
    labelEmail: 'メールアドレス',
    labelOrg: '会社・組織名',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'なし',
    downloadBtn: 'PNG保存',
    privacyMsg: 'ブラウザ内で100%生成。データは安全です。',
    placeholderSsid: 'MyWiFi_5G',
    placeholderUrl: 'https://example.jp',
    placeholderPassword: '••••••••',
  },
};
