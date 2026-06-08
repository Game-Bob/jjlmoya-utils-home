import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'verlichtings-en-lumenrekenmachine-voor-thuis';
const title = 'Verlichtings en Lumenrekenmachine voor Thuis';
const description =
  'Bereken exact hoeveel lumen en lampen u nodig heeft voor elke kamer. Selecteer het kamertype, de dimensies en het lamptype om een professioneel verlichtingsplan te krijgen met real-time lux-schattingen.';

const faqData = [
  {
    question: 'Hoeveel lumen heb ik nodig voor een woonkamer?',
    answer:
      'Voor een typische woonkamer, richt u op ongeveer 150 lux op de vloer. Vermenigvuldig de kamerooppervlakte in vierkante meters met 150 om de benodigde lumen te krijgen. Voor een kamer van 20 vierkante meter heeft u ongeveer 3.000 lumen nodig.',
  },
  {
    question: 'Wat is het verschil tussen lux en lumen?',
    answer:
      'Lumen meten de totale lichtopbrengst van een lamp. Lux meten het licht dat daadwerkelijk een oppervlak bereikt. Een kamer met hoge plafonds of donkere muren heeft meer lumen nodig om dezelfde luxniveau te bereiken omdat licht verloren gaat door afstand en absorptie.',
  },
  {
    question: 'Besparen LED-lampen echt energie?',
    answer:
      'Ja. LED-lampen produceren ongeveer 100 lumen per watt, terwijl gloeilampen slechts ongeveer 15 produceren. Een 10W LED-lamp geeft evenveel licht als een 60W gloeilamp en gebruikt slechts een zesde van de elektriciteit.',
  },
  {
    question: 'Hoe beïnvloedt de kamerkleur de verlichtingsbehoefte?',
    answer:
      'Donkere muren en plafonds absorberen licht. In een kamer met donkere oppervlakken heeft u mogelijk 50% meer lumen nodig dan de standaardaanbeveling.',
  },
  {
    question: 'Wat is een goed lux-niveau voor lezen?',
    answer:
      'Voor comfortabel lezen heeft u 300 tot 500 lux op de pagina nodig. Algemene omgevingsverlichting levert meestal 150 tot 200 lux, dus voeg een taa lamp toe bij uw leesplek voor extra lichtsterkte.',
  },
  {
    question: 'Kan ik LED-lampen dimmen?',
    answer:
      'Alleen als ze gemarkeerd zijn als dimbaar. Standaard LEDs kunnen knipperen of een verkorte levensduur hebben wanneer ze op een dimmer worden aangesloten. Controleer altijd de verpakking voor het dimbaar-symbool voordat u installeert.',
  },
];

const howToData = [
  {
    name: 'Kies uw kamertype',
    text: 'Selecteer de kamerfunctie. Keukens en kantoren hebben helderder licht nodig dan slaapkamers of hallen.',
  },
  {
    name: 'Voer de afmetingen in',
    text: 'Voer de kamerbreedte, -lengte en plafondhoogte in. De rekenmachine gebruikt deze om de kamerindex en het lichtutilisatiefactor te bepalen.',
  },
  {
    name: 'Selecteer lamptype en aantal',
    text: 'Kies uw favoriete lamptechnologie en hoeveel armaturen u heeft. De rekenmachine zal u vertellen of u meer lampen nodig heeft.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Complete Gids voor Woningverlichtingsontwerp en Lumenplanning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Goede verlichting verandert een huis in een thuis. Buiten de esthetiek om beïnvloedt de juiste hoeveelheid licht het humeur, de productiviteit en zelfs de ooggezondheid. <strong>Onze woningverlichtingsrekenmachine</strong> helpt u exact te bepalen hoeveel lumen u nodig heeft voor elke kamer, rekening houdend met de kamerafmetingen, plafondhoogte, oppervlaktekleuren en lamptype.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Aanbevolen Lux Bereik', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED Efficiëntie', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Onderhoudsfactor', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Warme Sfeerverlichting',
          description: 'Ideaal voor woonkamers en slaapkamers. Creëert een gezellige sfeer en vermindert \'s avonds oogvermoeidheid.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Warme kleurtemperatuur (2700K)', 'Meerdere dimbare bronnen'],
        },
        {
          title: 'Helder Taakverlichting',
          description: 'Essentieel voor keukens, kantoren en badkamers. Biedt duidelijk zicht voor gedetailleerd werk.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Koel wit (4000K)', 'Gericht op werkoppervlakken'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Waarom Kamerafmetingen Belangrijk Zijn',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Licht verspreidt zich en wordt zwakker met de afstand. Een lamp die helder genoeg is voor een 2,5 meter hoog plafond, kan te dof zijn voor een 4 meter hoog plafond. De rekenmachine houdt hier rekening mee door de kamerindex-formule te gebruiken, die zowel de vloeroppervlakte als de montagehoogte meeneemt om te schatten hoeveel licht daadwerkelijk uw werkvlak bereikt.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle Referentie Lux Tabel',
      icon: 'mdi:table',
      badge: 'Referentie',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Woonkamer</strong> → 150 lux</li><li><strong>Keuken</strong> → 300 lux</li><li><strong>Slaapkamer</strong> → 100 lux</li><li><strong>Badkamer</strong> → 200 lux</li><li><strong>Kantoor</strong> → 500 lux</li><li><strong>Hall</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Pro Tips voor Betere Verlichting',
      items: [
        'Combineer drie soorten licht: algemeen, taak- en accentverlichting.',
        'Gebruik dimmers om de helderheid aan te passen aan verschillende momenten van de dag.',
        'Kies LED-lampen voor een lange levensduur en laag energieverbruik.',
        'Plaats taaklampen aan de tegenoverliggende kant van uw dominante hand om schaduw te voorkomen.',
        'Overweeg smart lamps voor geautomatiseerde planning en kleurtemperatuurwijzigingen.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Kamerverlichtingsrekenmachine',
    labelRoomType: 'Kamertype',
    labelRoomWidth: 'Breedte',
    labelRoomLength: 'Lengte',
    labelHeight: 'Plafond',
    labelBulbType: 'Lamp',
    labelBulbWatt: 'Vermogen',
    labelFixtures: 'Armaturen',
    labelAmbient: 'Sfeer',
    btnAmbientCozy: 'Gezellig',
    btnAmbientNormal: 'Normaal',
    btnAmbientBright: 'Helder',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'st',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Doel lux',
    labelCurrentLux: 'Huidige lux',
    labelBulbsNeeded: 'Lampen nodig',
    labelRoomArea: 'Oppervlakte',
    statusOptimal: 'Perfect',
    statusInsufficient: 'Te Donker',
    statusExcess: 'Te Helder',
    btnLiving: 'Woonkamer',
    btnKitchen: 'Keuken',
    btnBedroom: 'Slaapkamer',
    btnBathroom: 'Badkamer',
    btnOffice: 'Kantoor',
    btnHallway: 'Gang',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogeen',
    btnBulbIncandescent: 'Gloeilamp',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Uw verlichting is perfect in evenwicht voor deze kamer.',
    tipInsufficient: 'Voeg meer armaturen of lampen met hoger vermogen toe.',
    tipExcess: 'Verminder armaturen of dim om energie te besparen.',
    labelManualAdjust: 'Handmatige aanpassing',
    labelSummary: 'Uw verlichtingsplan',
    labelTotalLumens: 'Totaal benodigde lumen',
    labelSuggestedSetup: 'Aanbevolen opstelling',
    btnExport: 'PDF exporteren',
  },
};
