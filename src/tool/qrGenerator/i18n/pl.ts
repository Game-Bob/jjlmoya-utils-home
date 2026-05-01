import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generator-kodow-qr-offline';
const title = 'Generator Kodów QR Offline';
const description =
  'Generuj kody QR dla WiFi, URL i Kontaktów w 100% bezpiecznie w swojej przeglądarce. Twoje dane nigdy nie opuszczają urządzenia.';

const faqData = [
  {
    question: 'Czy te kody QR wygasają?',
    answer:
      'Nie. Wygenerowane tutaj kody są statyczne. Informacja jest zakodowana bezpośrednio w obrazie. Będą działać na zawsze.',
  },
  {
    question: 'Czy zapisujecie moje dane?',
    answer:
      'Absolutnie nie. Cały proces odbywa się w Twojej przeglądarce (Client-Side). Żadne dane nie są wysyłane na serwer.',
  },
  {
    question: 'Czy to działa na iPhone i Android?',
    answer:
      'Tak. Większość nowoczesnych smartfonów czyta kody QR natywnie i sugeruje akcję (połącz z WiFi, otwórz link itp.).',
  },
  {
    question: 'Czy mogę używać tego bez internetu?',
    answer:
      'Tak. Gdy strona się załaduje, możesz odłączyć sieć, a generator nadal będzie tworzył kody.',
  },
];

const howToData = [
  {
    name: 'Wybierz typ QR',
    text: 'Wybierz czy chcesz kod dla sieci WiFi, linku URL czy kontaktu (vCard).',
  },
  {
    name: 'Wpisz dane',
    text: 'Wypełnij pola, takie jak nazwa sieci i hasło, lub adres strony.',
  },
  {
    name: 'Generuj i sprawdź',
    text: 'Kod powstaje natychmiast. Możesz go przetestować skanując go prosto z ekranu.',
  },
  {
    name: 'Pobierz',
    text: 'Zapisz kod QR jako obraz, aby go wydrukować lub udostępnić.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'PLN' },
  inLanguage: 'pl',
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
      text: 'Prywatność Przede Wszystkim: Generowanie Lokalne',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'To narzędzie tworzy kod QR bezpośrednio na Twoim urządzeniu. Pełne bezpieczeństwo dla Twoich <strong>haseł WiFi</strong> i <strong>danych kontaktowych</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Prywatnie', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Brak Serwera', icon: 'mdi:wifi-off' },
        { value: 'PNG', label: 'Pobieranie', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'summary',
      title: 'Porady',
      items: [
        'Dane przetwarzane wyłącznie lokalnie w przeglądarce.',
        'Pamiętaj o wielkości liter w nazwie WiFi.',
        'Kody statyczne: zmiana danych wymaga nowego kodu.',
        'Przetestuj kod przed drukowaniem.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Kontakt',
    labelSsid: 'Nazwa Sieci (SSID)',
    labelPassword: 'Hasło',
    labelEncryption: 'Zabezpieczenia',
    labelHidden: 'Ukryta Sieć',
    labelUrl: 'Adres WWW (URL)',
    labelName: 'Imię',
    labelSurname: 'Nazwisko',
    labelPhone: 'Telefon',
    labelEmail: 'Email',
    labelOrg: 'Organizacja / Firma',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Brak',
    downloadBtn: 'Pobierz PNG',
    privacyMsg: 'Wygenerowane w 100% w przeglądarce. Dane są bezpieczne.',
    placeholderSsid: 'MojaSiec_5G',
    placeholderUrl: 'https://przyklad.pl',
    placeholderPassword: '••••••••',
  },
};
