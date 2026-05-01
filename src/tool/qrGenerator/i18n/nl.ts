import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'offline-qr-code-generator-dutch';
const title = 'Offline QR Code Generator';
const description =
  'Genereer 100% veilig QR-codes voor WiFi, URL\'s en contacten in uw browser. Uw gegevens ver laten uw apparaat nooit.';

const faqData = [
  {
    question: 'Verlopen deze QR-codes?',
    answer:
      'Nee. Deze codes zijn statisch. De informatie is direct in de afbeelding gecodeerd. Ze werken voor altijd.',
  },
  {
    question: 'Worden mijn gegevens bewaard?',
    answer:
      'Absoluut niet. Het proces vindt volledig plaats in uw browser (Client-Side). Geen gegevens worden naar onze servers gestuurd.',
  },
  {
    question: 'Werkt het op iPhone en Android?',
    answer:
      'Ja. Moderne camera\'s op iOS en Android herkennen QR-codes direct en suggereren de actie (verbinden met WiFi, link openen, etc.).',
  },
  {
    question: 'Kan ik het zonder internet gebruiken?',
    answer:
      'Ja. Zodra de pagina geladen is, kunt u de verbinding verbreken en de generator blijft gewoon werken.',
  },
];

const howToData = [
  {
    name: 'Kies type QR',
    text: 'Selecteer of u een code wilt voor WiFi, een URL of een contact (vCard).',
  },
  {
    name: 'Voer gegevens in',
    text: 'Vul de velden in, zoals netwerknaam en wachtwoord, of het webadres.',
  },
  {
    name: 'Genereer en test',
    text: 'De code wordt direct gemaakt. Scan hem direct vanaf het scherm om te testen.',
  },
  {
    name: 'Downloaden',
    text: 'Sla de QR-code op als afbeelding om te printen of te delen.',
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
  inLanguage: 'nl',
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
      text: 'Privacy Eerst: Lokale Generatie',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Deze tool genereert QR-codes direct op uw toestel. Veilig voor uw <strong>WiFi-wachtwoorden</strong> of <strong>persoonlijke gegevens</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privé', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Geen Server', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Download', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Gebruikstips',
      items: [
        'Gegevens worden alleen in de browser verwerkt.',
        'Let op hoofdletters bij de WiFi-naam.',
        'Statische QR: bij een nieuw wachtwoord moet u een nieuwe QR maken.',
        'Test de code altijd even voor u hem print.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contact',
    labelSsid: 'Netwerknaam (SSID)',
    labelPassword: 'Wachtwoord',
    labelEncryption: 'Beveiliging',
    labelHidden: 'Verborgen netwerk',
    labelUrl: 'Webadres (URL)',
    labelName: 'Voornaam',
    labelSurname: 'Achternaam',
    labelPhone: 'Telefoon',
    labelEmail: 'Email',
    labelOrg: 'Organisatie / Bedrijf',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Geen',
    downloadBtn: 'PNG downloaden',
    privacyMsg: '100% gegenereerd in de browser. Veilig en privé.',
    placeholderSsid: 'MijnWiFi_5G',
    placeholderUrl: 'https://voorbeeld.nl',
    placeholderPassword: '••••••••',
  },
};
