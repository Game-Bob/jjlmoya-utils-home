import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'qr-generator';
const title = '离线 QR 码生成器';
const description =
  '在您的浏览器中 100% 安全地生成 WiFi、URL 和联系人的 QR 码。您的数据绝不会离开您的设备。';

const faqData = [
  {
    question: '这些 QR 码会过期吗？',
    answer:
      '不会。这里生成的代码是静态的。信息直接编码在图像中。它们将永久有效。',
  },
  {
    question: '你们会保存我的数据吗？',
    answer:
      '绝对不会。整个过程都在您的浏览器（客户端）中进行。任何数据都不会发送到我们的服务器。',
  },
  {
    question: '它在 iPhone 和 Android 上有效吗？',
    answer:
      '是的。iOS 和 Android 的大多数现代相机都原生支持读取 QR 码，并会建议相应的操作（连接 WiFi、打开链接等）。',
  },
  {
    question: '我可以在没有互联网的情况下使用它吗？',
    answer:
      '是的。页面加载后，您可以断开网络连接，生成器仍可正常工作。',
  },
];

const howToData = [
  {
    name: '选择 QR 类型',
    text: '选择您是要为 WiFi 网络、URL 链接还是联系人 (vCard) 生成代码。',
  },
  {
    name: '输入数据',
    text: '填写必要的字段，如网络名称和密码，或网址。',
  },
  {
    name: '生成与检查',
    text: '代码将即时生成。您可以直接从屏幕扫描进行测试。',
  },
  {
    name: '下载',
    text: '将 QR 码保存为图像，以便打印或共享。',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'CNY' },
  inLanguage: 'zh',
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
      text: '隐私至上：本地生成',
      level: 2,
    },
    {
      type: 'paragraph',
      html: '此工具直接在您的设备上生成 QR 码。为您的 <strong>WiFi 密码</strong>或<strong>个人数据</strong>提供全面安全保障。',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: '私密', icon: 'mdi:shield-lock' },
        { value: '离线', label: '无需服务器', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: '下载', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: '使用提示',
      items: [
        '数据仅在浏览器中处理。',
        '注意 WiFi 名称的大小写。',
        '静态 QR：如果更改了密码，请生成新的 QR。',
        '打印前请先进行扫描测试。',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: '联系人',
    labelSsid: '网络名称 (SSID)',
    labelPassword: '密码',
    labelEncryption: '安全',
    labelHidden: '隐藏网络',
    labelUrl: '网址 (URL)',
    labelName: '名字',
    labelSurname: '姓氏',
    labelPhone: '电话',
    labelEmail: '电子邮件',
    labelOrg: '组织 / 公司',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: '无',
    downloadBtn: '下载 PNG',
    privacyMsg: '100% 在浏览器中生成。您的数据是安全的。',
    placeholderSsid: '我的网络_5G',
    placeholderUrl: 'https://example.com',
    placeholderPassword: '••••••••',
  },
};
