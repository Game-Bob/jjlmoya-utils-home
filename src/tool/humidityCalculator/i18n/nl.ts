import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vochtrekenmachine-calculator';
const title = 'Woningvochtigheid en Ontvochtigingsduur Schatter';
const description =
  'Bereken hoeveel water uw ontvochtiger moet afvoeren om een vochtige kamer tot een gezond vochtigheidsniveau te brengen. Bekijk geschatte looptijd, schimmelrisicowaarschuwingen en comfortzone visuals in een interactief hulpmiddel.';

const faqData = [
  {
    question: 'Hoe lang moet een ontvochtiger per dag draaien?',
    answer:
      'In een matig vochtige kamer moet een standaard huishoudelijke ontvochtiger meestal tussen 8 en 12 uur per dag draaien om 50 procent relatieve vochtigheid te handhaven. Bij zeer vochtige omstandigheden of na waterschade kan continue werking gedurende 24 tot 48 uur nodig zijn om een basis droogte te bereiken.',
  },
  {
    question: 'Welk binnenvochtigheidsniveau voorkomt schimmel?',
    answer:
      'Schimmelgroei wordt geremd wanneer de binnen relatieve vochtigheid onder 60 procent wordt gehouden. De ideale comfortzone voor menselijke gezondheid en gebouwbehoud ligt tussen 40 en 50 procent relatieve vochtigheid. Niveaus boven 70 procent creeren een omgeving met hoog risico voor schimmelsporen om binnen 24 tot 48 uur te kiemen.',
  },
  {
    question: 'Hoeveel water kan lucht bevatten?',
    answer:
      'De hoeveelheid waterdamp die lucht kan bevatten hangt af van de temperatuur. Bij 20 graden Celsius bevat verzadigde lucht ongeveer 17 gram water per kubieke meter. Bij 25 graden Celsius stijgt dit tot ongeveer 23 gram per kubieke meter. Een kamer van 30 vierkante meter bij 25 graden Celsius en 70 procent vochtigheid bevat ongeveer 8 liter onzichtbaar water in de lucht.',
  },
  {
    question: 'Beinvloedt temperatuur de efficientie van een ontvochtiger?',
    answer:
      'Ja. Compressor gebaseerde ontvochtigers werken het beste boven 18 graden Celsius. Onder 15 graden Celsius daalt hun prestatie omdat de verdamper spoelen kunnen bevriezen. Dessicant ontvochtigers zijn beter geschikt voor koude ruimtes zoals garages of kelders omdat ze een chemisch droogproces gebruiken in plaats van condensatie.',
  },
  {
    question: 'Welk formaat ontvochtiger heb ik nodig?',
    answer:
      'Voor een matig vochtige kamer tot 50 vierkante meter is een 10 tot 12 liter per dag apparaat meestal voldoende. Voor zeer vochtige kamers of ruimtes boven 50 vierkante meter, kies een 20 liter per dag model. Na overstroming of ernstige vochtigheid zal een 30 liter per dag industriele unit de omstandigheden sneller herstellen.',
  },
  {
    question: 'Kan een ontvochtiger wasgoed drogen?',
    answer:
      'Ja. Een ontvochtiger met een wasmodus kan kleding binnenshuis efficient drogen terwijl het vocht uit de omgeving onttrekt. Het gebruikt minder energie dan een wasdroger en voorkomt condensatie op ramen en muren. Verwacht droogtijden vergelijkbaar met buiten drogen in warm weer.',
  },
];

const howToData = [
  {
    name: 'Voer kamergrootte in',
    text: 'Typ de vloeroppervlakte van de kamer in vierkante meters. De calculator gaat uit van een standaard plafondhoogte van 2,5 meter om het totale luchtvolume te schatten.',
  },
  {
    name: 'Stel temperatuur in',
    text: 'Voer de huidige kamertemperatuur in graden Celsius in. Warmere lucht bevat meer vocht, dus temperatuur beinvloedt direct hoeveel water er verwijderd moet worden.',
  },
  {
    name: 'Selecteer huidige vochtigheid',
    text: 'Gebruik de comfortdraaischijf of de numerieke invoer om het huidige percentage relatieve vochtigheid in te stellen. Waarden boven 60 procent worden gemarkeerd in waarschuwingskleuren.',
  },
  {
    name: 'Kies doelvochtigheid',
    text: 'Stel uw gewenste relatieve vochtigheid in. 50 procent wordt aanbevolen voor comfort en schimmelpreventie. 40 procent is ideaal voor mensen met allergieen.',
  },
  {
    name: 'Voer ontvochtigingscapaciteit in',
    text: 'Voer het afvoertempo van uw apparaat in liters per dag in. Dit staat meestal op het voorste label of in de gebruiksaanwijzing.',
  },
  {
    name: 'Bekijk resultaten',
    text: 'Lees de waterafvoer tanksimulatie, de looptijdschatting en de schimmelrisicobanner om te beslissen hoe lang u uw apparaat moet laten draaien.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'Het verborgen water in uw muren',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meeste huiseigenaren beseffen nooit dat vochtige lucht niet alleen oncomfortabel is, maar ook duur en gevaarlijk. Een enkele vochtige kamer kan meerdere liters onzichtbare waterdamp bevatten. Na verloop van tijd condenseert dit vocht op koude oppervlakken, voedt schimmelkolonien en degradeert pleisterwerk, verf en hout. Precies begrijpen hoeveel water er verwijderd moet worden en hoe lang dit duurt, is de eerste stap om uw woning en uw gezondheid te beschermen.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Ideale binnenvochtigheid', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Gem. dagelijkse looptijd', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Schimmelrisicodrempel', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Waarom relatieve vochtigheid belangrijk is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Relatieve vochtigheid is niet de hoeveelheid water in de lucht, maar het percentage water dat de lucht bevat ten opzichte van het maximum dat het bij die temperatuur kan bevatten. Warme lucht is als een grotere spons. Bij 30 graden Celsius kan lucht bijna twee keer zoveel vocht bevatten als bij 15 graden Celsius. Daarom kan een kamer klam aanvoelen, zelfs nadat u de ramen heeft geopend. Het vocht is er nog steeds, alleen minder zichtbaar.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hoge vochtigheid',
          description: 'Boven 60 procent relatieve vochtigheid. Risico op schimmel, huisstofmijten en condensatieschade.',
          icon: 'mdi:alert',
          points: ['Condensatie op ramen en muren', 'Mufgeur en microbiële groei', 'Toegenomen ademhalingsirritatie', 'Hogere stookkosten door thermische geleidbaarheid van vochtige lucht'],
        },
        {
          title: 'Optimale vochtigheid',
          description: 'Tussen 40 en 50 procent relatieve vochtigheid. Comfortabel, gezond en energiezuinig.',
          icon: 'mdi:check-circle',
          points: ['Geen condensatie op koude oppervlakken', 'Schimmelsporen blijven inactief', 'Huid en ademhalingscomfort', 'Meubelbehoud en houtbehoud'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle vochtaudit',
      icon: 'mdi:clipboard-check',
      badge: 'Actie',
      html: '<p style="margin:0">Controleer elke ochtend ramen op condensatie. Als er regelmatig druppels verschijnen, is uw vochtigheid te hoog. Laat een ontvochtiger 12 uur per dag draaien totdat de condensatie stopt. Verplaats het apparaat naar de vochtigste kamer, meestal de keuken, badkamer of kelder. Leeg de tank dagelijks en reinig het filter elke twee weken.</p>',
    },
    {
      type: 'title',
      text: 'Uw ontvochtiger correct dimensioneren',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een veelgemaakte fout is het kopen van een ontvochtiger die te klein is voor de ruimte. Een 10 liter per dag machine in een 60 vierkante meter vochtige kelder zal continu draaien zonder ooit de doelvochtigheid te bereiken. Gebruik deze calculator om het exacte afvoervolume te zien dat uw kamer vereist. Als de looptijdschatting meer dan 20 uur per dag overschrijdt, heeft u een groter capaciteitsapparaat of betere ventilatie nodig.',
    },
    {
      type: 'summary',
      title: 'Hoe u uw woning droog houdt',
      items: [
        'Gebruik deze calculator om de exacte waterafvoer te bepalen die nodig is voor elke kamer.',
        'Handhaaf binnen relatieve vochtigheid tussen 40 en 50 procent voor gezondheid en comfort.',
        'Laat de ontvochtiger draaien totdat de schimmelrisicobanner groen wordt.',
        'Leeg de watertank voordat deze vol raakt om automatisch uitschakelen te voorkomen.',
        'Reinig filters regelmatig om luchtstroming en afvoertempo op maximaal te houden.',
        'Verbeter de kamer ventilatie naast ontvochtiging voor snellere resultaten.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Kamergrootte',
    unitM2: 'm2',
    labelTemperature: 'Temperatuur',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Huidige vochtigheid',
    labelTargetHumidity: 'Doelvochtigheid',
    labelCapacity: 'Ontvochtigingscapaciteit',
    unitLitersDay: 'L/dag',
    comfortDialTitle: 'Comfortzone',
    comfortCurrent: 'Huidig',
    comfortTarget: 'Doel',
    tankTitle: 'Water in de lucht',
    tankLiters: 'liter',
    runtimeTitle: 'Geschatte looptijd',
    runtimeUnitH: 'u',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Schimmelrisico',
    moldRiskHigh: 'Hoog risico',
    moldRiskMedium: 'Matig risico',
    moldRiskLow: 'Laag risico',
    extractionLabel: 'af te voeren',
    tipEnergy: 'Het laten draaien van uw ontvochtiger tijdens daluren kan de elektriciteitskosten aanzienlijk verlagen.',
    tipMold: 'Het onder de 50 procent houden van de vochtigheid voorkomt dat schimmelsporen oppervlakken besmetten.',
    unitPercent: '%',
    badgeHigh: 'Hoog',
    badgeMedium: 'Matig',
    badgeLow: 'Laag',
  },
};
