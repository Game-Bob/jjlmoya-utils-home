import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';

const slug = 'offline-qr-code-generator-de';
const title = 'Offline QR Code Generator';
const description =
  'Erstellen Sie QR-Codes für WLAN, URLs und Kontakte 100 % sicher in Ihrem Browser. Ihre Daten verlassen niemals Ihr Gerät.';

const faqData = [
  {
    question: 'Laufen diese QR-Codes ab?',
    answer:
      'Nein. Die hier generierten Codes sind statisch. Die Informationen sind direkt im Bild kodiert und hängen nicht von externen Links ab. Sie funktionieren für immer.',
  },
  {
    question: 'Werden meine Daten gespeichert?',
    answer:
      'Absolut nicht. Der gesamte Prozess findet in Ihrem Browser statt (Client-Side). Es werden keine Daten an unsere Server gesendet. Es ist 100 % privat und sicher.',
  },
  {
    question: 'Funktioniert es auf iPhone und Android?',
    answer:
      'Ja. Die meisten modernen Kameras von iOS und Android lesen QR-Codes nativ und schlagen die entsprechende Aktion vor (WLAN verbinden, Link öffnen etc.).',
  },
  {
    question: 'Kann ich es ohne Internet verwenden?',
    answer:
      'Ja. Sobald die Seite geladen ist, können Sie das Internet trennen. Der Generator arbeitet vollständig lokal in Ihrem Browser.',
  },
];

const howToData = [
  {
    name: 'Typ wählen',
    text: 'Wählen Sie, ob Sie einen Code für WLAN, eine URL oder einen Kontakt (vCard) erstellen möchten.',
  },
  {
    name: 'Daten eingeben',
    text: 'Füllen Sie die Felder aus, wie z. B. Netzwerkname und Passwort oder die Webadresse.',
  },
  {
    name: 'Generieren und prüfen',
    text: 'Der Code wird sofort erstellt. Testen Sie ihn direkt durch Scannen vom Bildschirm.',
  },
  {
    name: 'Herunterladen',
    text: 'Speichern Sie den QR-Code als Bilddatei (.webp), um ihn zu drucken oder digital zu teilen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<QRGeneratorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Quellen',
  bibliography: [
    {
      name: 'node-qrcode: QR-Code Generator Bibliothek',
      url: 'https://github.com/soldair/node-qrcode',
    },
    {
      name: 'RFC 6350: vCard Format Spezifikation',
      url: 'https://www.rfc-editor.org/rfc/rfc6350',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Warum Offline? Datenschutz an erster Stelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Online-QR-Generatoren senden Ihre Daten an einen Server. Dies ist ein Risiko, besonders bei <strong>WLAN-Passwörtern</strong> oder <strong>persönlichen Daten</strong>. Dieses Tool nutzt JavaScript, um den Code direkt auf Ihrem Gerät zu erzeugen.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privat', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Kein Server', icon: 'mdi:wifi-off' },
        { value: 'WebP', label: 'Download', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Open Source und Transparent',
      icon: 'mdi:github',
      badge: 'Open Source',
      html: '<p>Der Code dieses Tools ist zu 100 % Open Source. Sie können prüfen, wie er funktioniert, oder ihn herunterladen, um ihn ohne Internet auszuführen.</p>',
    },
    {
      type: 'title',
      text: 'Anwendungsfälle',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'WLAN QR',
          description: 'Teilen Sie Ihr WLAN mit Gästen, ohne das Passwort diktieren zu müssen.',
          icon: 'mdi:wifi',
          points: ['Kompatibel mit iOS und Android', 'Unterstützt WPA2, WEP und offene Netze'],
        },
        {
          title: 'URL QR',
          description: 'Wandeln Sie Web Links in scanbare Codes um. Ideal für Flyer oder Visitenkarten.',
          icon: 'mdi:link',
          points: ['Jede gültige URL', 'Kein Ablaufdatum'],
        },
        {
          title: 'vCard QR',
          description: 'Digitale Visitenkarte. Beim Scannen wird der Kontakt direkt im Adressbuch vorgeschlagen.',
          icon: 'mdi:card-account-details',
          points: ['Name, Nummer, E Mail, Firma', 'vCard 3.0 Standard'],
        },
      ],
      columns: 3,
    },
    {
      type: 'glossary',
      items: [
        { term: 'QR-Code', definition: '2D-Barcode, der bis zu 4.296 Zeichen speichern kann.' },
        { term: 'vCard', definition: 'Standardformat für digitale Visitenkarten.' },
        { term: 'SSID', definition: 'Der sichtbare Name eines WLAN-Netzwerks.' },
      ],
    },
    {
      type: 'summary',
      title: 'Tipps für die Nutzung',
      items: [
        'Alle Daten werden lokal in Ihrem Browser verarbeitet.',
        'Achten Sie bei WLAN-Daten auf Groß- und Kleinschreibung.',
        'Statische QR-Codes: Bei Passwortänderung neuen Code erstellen.',
        'Laden Sie das Bild für beste Druckqualität herunter.',
        'Testen Sie den Code vor dem Ausdrucken auf dem Bildschirm.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WLAN',
    tabUrl: 'URL',
    tabContact: 'Kontakt',
    labelSsid: 'Netzwerkname (SSID)',
    labelPassword: 'Passwort',
    labelEncryption: 'Verschlüsselung',
    labelHidden: 'Verstecktes Netz',
    labelUrl: 'Web-Adresse (URL)',
    labelName: 'Vorname',
    labelSurname: 'Nachname',
    labelPhone: 'Telefon',
    labelEmail: 'E-Mail',
    labelOrg: 'Organisation / Firma',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Keine',
    downloadBtn: 'PNG herunterladen',
    privacyMsg: 'Zu 100 % im Browser generiert. Ihre Daten bleiben bei Ihnen.',
    placeholderSsid: 'MeinWLAN_5G',
    placeholderUrl: 'https://beispiel.de',
    placeholderPassword: '••••••••',
  },
};
