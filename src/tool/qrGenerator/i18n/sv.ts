import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr';
const title = 'Offline QR-kod Generator';
const description =
  'Skapa QR-koder för WiFi, URL och Kontakter 100% säkert i din webbläsare. Dina data lämnar aldrig din enhet.';

const faqData = [
  {
    question: 'Går dessa QR-koder ut?',
    answer:
      'Nej. Koderna som genereras här är statiska. Informationen är kodad direkt i bilden. De kommer att fungera för alltid.',
  },
  {
    question: 'Sparar ni mina data?',
    answer:
      'Absolut inte. Hela processen sker i din webbläsare (Client-Side). Ingen data skickas till våra servrar.',
  },
  {
    question: 'Fungerar det på iPhone och Android?',
    answer:
      'Ja. De flesta moderna kameror i iOS och Android läser QR-koder nativt och föreslår rätt åtgärd (anslut till WiFi, öppna länk etc.).',
  },
  {
    question: 'Kan jag använda den utan internet?',
    answer:
      'Ja. När sidan väl har laddats kan du koppla bort nätet och generatorn fortsätter att fungera perfekt.',
  },
];

const howToData = [
  {
    name: 'Välj typ av QR',
    text: 'Välj om du vill skapa för WiFi, en URL eller en kontakt (vCard).',
  },
  {
    name: 'Fyll i uppgifter',
    text: 'Fyll i fälten som nätverksnamn och lösenord, eller webbadress.',
  },
  {
    name: 'Skapa och testa',
    text: 'Koden skapas direkt. Du kan testa att skanna den direkt från skärmen.',
  },
  {
    name: 'Ladda ner',
    text: 'Spara QR-koden som bild för att skriva ut eller dela digitalt.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Vanliga Frågor',
  faq: faqData,
  bibliographyTitle: 'Referenser',
  bibliography: [
    { name: 'node-qrcode bibliotek', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'vCard standard (RFC 6350)', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Sekretess Först: Lokal Generering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Det här verktyget skapar QR-koden i din enhet. Total säkerhet för dina <strong>WiFi-lösenord</strong> eller <strong>personuppgifter</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privat', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Ingen server', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Ladda ner', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Användningstips',
      items: [
        'Data bearbetas endast lokalt i webbläsaren.',
        'Var noga med stora/små bokstäver i WiFi-namnet.',
        'Statiska QR: om du byter lösenord måste du göra en ny kod.',
        'Testskanna alltid koden innan utskrift.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Kontakt',
    labelSsid: 'Nätverksnamn (SSID)',
    labelPassword: 'Lösenord',
    labelEncryption: 'Säkerhet',
    labelHidden: 'Dolt nätverk',
    labelUrl: 'Webbadress (URL)',
    labelName: 'Förnamn',
    labelSurname: 'Efternamn',
    labelPhone: 'Telefon',
    labelEmail: 'E-post',
    labelOrg: 'Organisation / Företag',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Ingen',
    downloadBtn: 'Ladda ner PNG',
    privacyMsg: 'Genererad 100% i webbläsaren. Dina data är säkra.',
    placeholderSsid: 'MittWiFi_5G',
    placeholderUrl: 'https://exempel.se',
    placeholderPassword: '••••••••',
  },
};
