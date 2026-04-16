import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'qr';
const title = 'Generatore di Codici QR Offline';
const description =
  'Genera codici QR per WiFi, URL e Contatti in modo sicuro al 100% nel tuo browser. I tuoi dati non lasciano mai il tuo dispositivo.';

const faqData = [
  {
    question: 'Questi codici QR scadono?',
    answer:
      'No. I codici generati qui sono statici. Le informazioni sono codificate direttamente nell\'immagine. Funzioneranno per sempre.',
  },
  {
    question: 'Salvate i miei dati?',
    answer:
      'Assolutamente no. Tutto il processo avviene nel tuo browser (Client-Side). Nessun dato viene inviato ai nostri server.',
  },
  {
    question: 'Funziona su iPhone e Android?',
    answer:
      'Sì. La maggior parte delle fotocamere moderne di iOS e Android leggono i QR in modo nativo e suggeriscono l\'azione (connessione WiFi, apertura link, ecc.).',
  },
  {
    question: 'Posso usarlo senza internet?',
    answer:
      'Sì. Una volta caricata la pagina, puoi disconnetterti e il generatore continuerà a funzionare perfettamente.',
  },
];

const howToData = [
  {
    name: 'Scegli il tipo di QR',
    text: 'Seleziona se vuoi un codice per una rete WiFi, un link URL o un contatto (vCard).',
  },
  {
    name: 'Inserisci i dati',
    text: 'Compila i campi necessari, come il nome della rete e la password, o l\'indirizzo web.',
  },
  {
    name: 'Genera e controlla',
    text: 'Il codice viene generato all\'istante. Prova a scansionarlo direttamente dallo schermo.',
  },
  {
    name: 'Scarica',
    text: 'Salva il codice QR come immagine per stamparlo o condividerlo.',
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
  inLanguage: 'it',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'node-qrcode library', url: 'https://github.com/soldair/node-qrcode' },
    { name: 'RFC 6350: vCard Specification', url: 'https://www.rfc-editor.org/rfc/rfc6350' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Privacy al Primo Posto: Generazione Locale',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A differenza di altri sistemi, questa utility genera il QR direttamente sul tuo PC o smartphone utilizzando JavaScript. 0 rischi per le tue <strong>chiavi WiFi</strong> o <strong>contatti personali</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privato', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'No Server', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Download', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Casi d\'Uso',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'WiFi QR',
          description: 'Condividi la tua rete con gli ospiti senza dettare la password.',
          icon: 'mdi:wifi',
          points: ['Compatibile con iOS/Android', 'Supporta WPA2 e WEP'],
        },
        {
          title: 'vCard QR',
          description: 'Biglietto da visita digitale che si salva subito in rubrica.',
          icon: 'mdi:card-account-details',
          points: ['Nome, Tel, Email', 'Formato standard internazionale'],
        },
      ],
      columns: 2,
    },
    {
      type: 'summary',
      title: 'Consigli per l\'uso',
      items: [
        'Dati processati solo localmente.',
        'I nomi delle reti distinguono tra maiuscole e minuscole.',
        'I QR sono statici: se cambi dati, rigenera il codice.',
        'Testa il codice prima di stamparlo.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contatto',
    labelSsid: 'Nome Rete (SSID)',
    labelPassword: 'Password',
    labelEncryption: 'Sicurezza',
    labelHidden: 'Rete Nascosta',
    labelUrl: 'Indirizzo Web (URL)',
    labelName: 'Nome',
    labelSurname: 'Cognome',
    labelPhone: 'Telefono',
    labelEmail: 'Email',
    labelOrg: 'Azienda',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Nessuna',
    downloadBtn: 'Scarica PNG',
    privacyMsg: 'Generato 100% nel browser. Dati sicuri.',
    placeholderSsid: 'MiaRete_5G',
    placeholderUrl: 'https://esempio.it',
    placeholderPassword: '••••••••',
  },
};
