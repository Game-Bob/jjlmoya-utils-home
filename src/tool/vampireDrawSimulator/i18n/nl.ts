import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'standby-verbruik-simulator';
const title = 'Standby Energieverbruik Simulator';
const description =
  'Ontdek hoeveel elektriciteit je apparaten verspillen in standby-modus. Bereken de verborgen jaarlijkse kosten van fantoomverbruik van tv\'s, routers, opladers en meer.';

const faqData = [
  {
    question: 'Wat is vampire power of fantoomverbruik?',
    answer:
      'Vampire power is de elektriciteit die elektronische apparaten verbruiken wanneer ze uit staan of in standby-modus staan. Dit gebeurt omdat veel apparaten gedeeltelijk actief blijven om te reageren op afstandsbedieningen, netwerkverbindingen te onderhouden of interne klokken te laten lopen.',
  },
  {
    question: 'Hoeveel kost standby-vermogen per jaar?',
    answer:
      'Het gemiddelde huishouden verspilt tussen de 50 en 150 euro per jaar aan standby-vermogen alleen. Een enkele moderne tv kan continu 10 tot 20 watt verbruiken, wat neerkomt op ongeveer 15 tot 30 euro per jaar, afhankelijk van je elektriciteitsprijs.',
  },
  {
    question: 'Welke apparaten verbruiken het meest in standby?',
    answer:
      'De grootste boosdoeners zijn settopboxen, spelcomputers, desktopcomputers in slaapstand, smart-tv\'s en oudere externe adapters. Kabel- en satellietboxen zijn bijzonder verslender omdat ze zelden in echte standby gaan.',
  },
  {
    question: 'Bespaart het uitrekken van stekkers echt geld?',
    answer:
      'Ja. Het uitrekken van stekkers of het gebruik van geavanceerde stekkerdozen met master-uitgangen elimineert standby-verbruik volledig. Voor een typisch huis met 20 standby-apparaten kunnen de jaarlijkse besparingen variëren van 40 tot 120 euro.',
  },
  {
    question: 'Zijn slimme stekkerdozen de moeite waard?',
    answer:
      'Slimme of geavanceerde stekkerdozen onderbreken de stroomtoevoer naar randapparatuur wanneer een master-apparaat wordt uitgezet. Ze verdienen zichzelf binnen een paar maanden terug als je ze gebruikt met entertainmentcentra of computerwerkplekken.',
  },
  {
    question: 'Hoe kan ik standby-vermogen thuis meten?',
    answer:
      'Je kunt een goedkope plug-in vermogensmeter (wattmeter) gebruiken om precies te meten hoeveel watt elk apparaat trekt wanneer het uit of inactief is. Als alternatief biedt deze simulator gestandaardiseerde schattingen op basis van fabrikantgemiddelden en laboratoriummetingen.',
  },
];

const howToData = [
  {
    name: 'Loop door elke kamer',
    text: 'Tel elk apparaat dat altijd in het stopcontact zit. Inclusief tv\'s, magnetrons, routers, printers, spelcomputers en telefoonopladers.',
  },
  {
    name: 'Schat dagelijkse standby-uren',
    text: 'De meeste apparaten staan 20 tot 24 uur per dag in standby. Voer het gemiddelde in voor elk apparaat of gebruik de standaardwaarde van 24 uur.',
  },
  {
    name: 'Stel je elektriciteitsprijs in',
    text: 'Voer de prijs in die je betaalt per kilowattuur. Dit staat op je elektriciteitsrekening.',
  },
  {
    name: 'Lees je samenvatting',
    text: 'De simulator toont het totaal verspilde watt, jaarlijkse kilowatturen en de verborgen jaarlijkse kosten. Gebruik de categoriebadge om te zien of je huis laag, matig, hoog of extreem scoort.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Phantom Load: De elektriciteit die je betaalt maar nooit gebruikt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elk stopcontact in huis met een ingeplugde kabel is een potentiële bron van <strong>fantoomelektriciteit</strong>. Zelfs wanneer de schakelaar uit staat, blijft het apparaat stroom trekken. Het zijn misschien maar een paar watt, maar vermenigvuldigd met 24 uur per dag en 365 dagen per jaar worden die watt honderden kilowatturen en echt geld uit je zak.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'Van het huishoudbudget', icon: 'mdi:flash' },
        { value: '23h', label: 'Gem. standby per dag', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Gem. topapparaat', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'De apparaten die nooit slapen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Moderne huizen bevatten gemiddeld 40 elektronische apparaten. Ongeveer de helft ervan is continu aangesloten op het net. Hoewel energiereguleringen de standby-efficiëntie de afgelopen jaren hebben verbeterd, is het totale aantal apparaten toegenomen. Een enkele spelcomputer in instant-on modus kan 15 watt trekken. Een tv met snelle start kan 12 watt trekken. Tel hier routers, modems, slimme speakers, magnetrons met klokken, printers en opladers bij op, en het totaal overstijgt al snel 100 watt aan permanente achtergrondconsumptie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Laagverbruikende huishoudens',
          description: 'Huishoudens die standby-vermogen actief beheren via slimme strips en het uittrekken van stekkers.',
          icon: 'mdi:leaf',
          points: ['Minder dan 50 watt totaal standby', 'Jaarlijkse kosten onder 50 euro', 'Gebruikt geavanceerde stekkerdozen'],
        },
        {
          title: 'Hoogverbruikende huishoudens',
          description: 'Typische huishoudens met entertainmentcentra, meerdere spelcomputers en altijd-aan computers.',
          icon: 'mdi:lightning-bolt',
          points: ['Meer dan 150 watt totaal standby', 'Jaarlijkse kosten boven 150 euro', 'Veel apparaten in snelle start modus'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle besparingschecklist',
      icon: 'mdi:check-circle',
      badge: 'Actie',
      html: '<p style="margin:0">Trek telefoonopladers uit het stopcontact wanneer ze niet in gebruik zijn. Gebruik een master-gecontroleerde stekkerdoos voor je entertainmentcentrum. Schakel snelle start of instant-on modi uit op tv\'s en consoles. Zet desktopcomputers uit in plaats van ze in slaapstand te laten staan.</p>',
    },
    {
      type: 'title',
      text: 'Waarom watt sneller oplopen dan je denkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een watt is een snelheid van energiegebruik. Eén watt gedurende één uur is één wattuur. Een apparaat dat continu 10 watt trekt, gebruikt 87,6 kilowattuur per jaar. Bij een gemiddelde prijs van 0,25 euro per kilowattuur kost dat ene apparaat meer dan 21 euro per jaar. Vermenigvuldig dat nu met elk ingeplugd apparaat in huis.',
    },
    {
      type: 'summary',
      title: 'Hoe je je vampire load vermindert',
      items: [
        'Identificeer de grootste verbruikers met deze simulator of een plug-in meter.',
        'Groepeer apparaten op slimme stekkerdozen die standby uitschakelen wanneer het hoofdapparaat uit is.',
        'Schakel altijd-aan, snelle start en netwerk standby-functies uit waar mogelijk.',
        'Trek opladers en kleine apparaten uit het stopcontact die niet dagelijks worden gebruikt.',
        'Overweeg om zeer oude externe adapters te vervangen door moderne efficiënte modellen.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Fantoomverbruik Audit',
    labelDevices: 'Aangesloten standby-apparaten',
    labelHours: 'Standby-uren per dag',
    unitHours: 'u',
    labelPrice: 'Elektriciteitsprijs',
    unitPrice: '/kWh',
    resultBadge: 'Vampire draw resultaat',
    labelAnnualKwh: 'Per jaar verspild',
    labelAnnualCost: 'Verborgen jaarlijkse kosten',
    labelMonthlyCost: 'Maandelijks equivalent',
    labelDevicesCount: 'Getelde apparaten',
    labelTotalWatts: 'Totaal standby watt',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Laag verbruik',
    categoryModerate: 'Matig verbruik',
    categoryHigh: 'Hoog verbruik',
    categoryExtreme: 'Extreem verbruik',
    addDevice: 'Apparaat toevoegen',
    removeDevice: 'Verwijderen',
    modalAddTitle: 'Standby-apparaat toevoegen',
    labelDeviceName: 'Apparaatnaam',
    labelDeviceWatts: 'Watt in standby',
    btnSave: 'Opslaan',
    btnCancel: 'Annuleren',
  },
};
