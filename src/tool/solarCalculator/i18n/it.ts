import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'calcolatore-solare';
const title = 'Calcolatore Inclinazione Pannelli Solari';
const description =
  'Calcola l\'angolo di inclinazione ottimale per i tuoi pannelli solari in base alla tua latitudine. Ottieni i valori per installazioni fisse e stagionali.';

const faqData = [
  {
    question: 'Cosa succede se il mio tetto non ha l\'inclinazione perfetta?',
    answer:
      'Non è un problema grave. Perdite per deviazioni di 5-10° sono inferiori al 3% della produzione annua. È più importante evitare le ombre che ossessionarsi con l\'angolo esatto.',
  },
  {
    question: 'L\'angolo ottimale è lo stesso in tutto il mondo?',
    answer:
      'No. Dipende direttamente dalla tua latitudine. A Roma (~41°N) l\'angolo ottimale è diverso da quello di Oslo (~60°N).',
  },
  {
    question: 'Verso dove devono guardare i pannelli?',
    answer:
      'Nell\'emisfero nord, sempre verso sud (azimut 180°). Nell\'emisfero sud, verso nord.',
  },
  {
    question: 'Serve anche per il solare termico (acqua calda)?',
    answer:
      'Sì. Le formule di inclinazione sono le stesse sia per i collettori termici che per i pannelli fotovoltaici.',
  },
];

const howToData = [
  {
    name: 'Inserisci la latitudine',
    text: 'Scrivi la latitudine in gradi decimali o usa il pulsante per rilevarla automaticamente.',
  },
  {
    name: 'Verifica l\'angolo ottimale',
    text: 'L\'angolo ottimale annuo è il riferimento principale per installazioni fisse.',
  },
  {
    name: 'Regola per stagione (opzionale)',
    text: 'Se il supporto è regolabile, usa gli angoli di inverno e estate per massimizzare la resa.',
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Domande Frequenti',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'PVGIS — Commissione Europea', url: 'https://re.jrc.ec.europa.eu/pvgis/' },
    { name: 'PVWatts Calculator', url: 'https://pvwatts.nrel.gov/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'La Scienza dell\'Inclinazione Solare',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'efficienza di un impianto solare dipende fortemente dall\'angolazione. Un pannello funziona al massimo quando è perpendicolare ai raggi del sole.',
    },
    {
      type: 'summary',
      title: 'Chiavi per un\'installazione efficiente',
      items: [
        'L\'angolo ottimale annuo è il punto di partenza.',
        'Piccole deviazioni non danneggiano significativamente la resa.',
        'Evitare ombre è la priorità assoluta.',
        'Orientamento a Sud nell\'emisfero nord.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Latitudine Geografica',
    btnLocate: 'Rileva posizione',
    labelOptimal: 'Angolo Ottimale Annuo',
    labelEfficiency: 'Efficienza Massima',
    labelWinter: 'Inverno',
    labelSummer: 'Estate',
    hemisphereNorth: 'Emisfero Nord — Orientare a SUD',
    hemisphereSouth: 'Emisfero Sud — Orientare a NORD',
    geoNotAvailable: 'Geolocalizzazione non supportata.',
  },
};
