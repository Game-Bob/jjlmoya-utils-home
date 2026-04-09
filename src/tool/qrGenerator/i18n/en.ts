import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr-generator';
const title = 'Offline QR Code Generator';
const description =
  'Generate QR codes for WiFi, URLs and Contacts 100% securely in your browser. Your data never leaves your device.';

const faqData = [
  {
    question: 'Do these QR codes expire?',
    answer:
      'No. The codes generated here are static. The information is encoded directly in the image and does not depend on any external link or redirect. They will work forever.',
  },
  {
    question: 'Do you store my data?',
    answer:
      'Absolutely not. The entire process happens in your browser (Client-Side). No data is sent to our servers. It is 100% private and secure.',
  },
  {
    question: 'Does it work on iPhone and Android?',
    answer:
      'Yes. Most modern iOS and Android cameras read QR codes natively and suggest the corresponding action (connect to WiFi, open link, etc.).',
  },
  {
    question: 'Can I use it without internet?',
    answer:
      'Yes. Once the page is loaded, you can disconnect WiFi or data and the generator will continue working perfectly as it does not depend on external servers.',
  },
];

const howToData = [
  {
    name: 'Choose QR type',
    text: 'Select whether you want a code for a WiFi network, a URL link or a contact (vCard).',
  },
  {
    name: 'Enter data',
    text: 'Fill in the required fields, such as the network name and password, or the web address.',
  },
  {
    name: 'Generate and check',
    text: 'The code is generated instantly. You can try scanning it directly from the screen.',
  },
  {
    name: 'Download',
    text: 'Save the QR code as an image (.webp) to print or share digitally.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Frequently Asked Questions',
  faq: faqData,
  bibliographyTitle: 'Bibliography',
  bibliography: [
    {
      name: 'node-qrcode: QR code generator library',
      url: 'https://github.com/soldair/node-qrcode',
    },
    {
      name: 'RFC 6350: vCard Format Specification',
      url: 'https://www.rfc-editor.org/rfc/rfc6350',
    },
    {
      name: 'ZXing: Barcode Contents — WiFi, vCard and URL',
      url: 'https://github.com/zxing/zxing/wiki/Barcode-Contents',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Why Offline? Privacy First',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most online QR generators send your data to a server. This is a risk, especially for <strong>WiFi passwords</strong> or <strong>personal data</strong>. This tool uses JavaScript to generate the QR code directly on your device. You can even disconnect the internet and it will keep working.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Private', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'No Server', icon: 'mdi:wifi-off' },
        { value: 'WebP', label: 'Direct Download', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Open Source and Transparent',
      icon: 'mdi:github',
      badge: 'Open Source',
      html: '<p>Do not trust it? The code for this tool is 100% open source. You can review how it works or download the project to run it on your own computer without internet.</p>',
    },
    {
      type: 'title',
      text: 'Use Cases',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'WiFi QR',
          description: 'Share your WiFi network with guests without having to dictate the password. They scan and connect automatically.',
          icon: 'mdi:wifi',
          points: ['Natively supported by iOS and Android', 'Supports WPA2, WEP and open networks'],
        },
        {
          title: 'URL QR',
          description: 'Convert any web link into a scannable code. Ideal for printing on physical materials.',
          icon: 'mdi:link',
          points: ['Any valid URL', 'No expiry date'],
        },
        {
          title: 'vCard QR',
          description: 'Digital business card. When scanned, the phone will suggest "Add contact" with all fields pre-filled.',
          icon: 'mdi:card-account-details',
          points: ['Name, phone, email and company', 'Standard vCard 3.0 format'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Use Case Guide',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>For Home (WiFi):</strong> Tired of hunting for the WiFi password note every time friends visit? Generate a QR with your SSID and password. Print it and stick it somewhere visible. Your guests just need to open their camera app, point and done — they connect without typing anything.',
    },
    {
      type: 'paragraph',
      html: '<strong>For Professionals (vCard):</strong> At networking events, paper business cards are a thing of the past. Generate a QR with your contact details. Carry it on your phone or print it on the back of your badge. When scanned, your new contact can save your name, phone, email and company directly to their address book.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'QR Code',
          definition: '2D barcode that can store up to 4,296 alphanumeric characters. Modern cameras read it in under a second.',
        },
        {
          term: 'vCard',
          definition: 'Standard format for digital contact cards (RFC 6350). Compatible with iOS, Android, Outlook and most contact managers.',
        },
        {
          term: 'SSID',
          definition: 'Service Set Identifier. The visible name of a WiFi network that appears when searching for available networks on your device.',
        },
        {
          term: 'WPA2',
          definition: 'Wi-Fi Protected Access 2. The most widely used WiFi security protocol. Uses AES encryption to protect communications.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Keys to Getting the Most from This Tool',
      items: [
        'All data is processed in your browser, never on an external server.',
        'The WiFi QR requires the exact SSID and password (case sensitive).',
        'Generated QR codes are static: if you change your WiFi password, generate a new one.',
        'Download in WebP for maximum quality when printing or sharing.',
        'Try scanning the QR from the screen itself before printing it.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contact',
    labelSsid: 'Network Name (SSID)',
    labelPassword: 'Password',
    labelEncryption: 'Security',
    labelHidden: 'Hidden Network',
    labelUrl: 'Web Address (URL)',
    labelName: 'First Name',
    labelSurname: 'Last Name',
    labelPhone: 'Phone',
    labelEmail: 'Email',
    labelOrg: 'Organisation / Company',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'None',
    downloadBtn: 'Download PNG',
    privacyMsg: 'Generated 100% in your browser. Your data never travels to the Internet.',
    placeholderSsid: 'MyHome_5G',
    placeholderUrl: 'https://example.com',
    placeholderPassword: '••••••••',
  },
};
