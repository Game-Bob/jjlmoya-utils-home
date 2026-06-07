import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'apparaatkosten-rekenmachine';
const title = 'Apparaatkosten Rekenmachine voor Water en Energie per Cyclus';
const description =
  'Bereken de werkelijke kosten per lading van uw wasmachine, vaatwasser en wasdroger. Zie precies hoeveel elektriciteit, water en wasmiddel elk programma kost en ontdek hoeveel u kunt besparen door over te schakelen naar de Eco modus.';

const faqData = [
  {
    question: 'Hoeveel kost een wasmachine programma?',
    answer:
      'Een typisch Eco 40C programma gebruikt ongeveer 0,45 kWh elektriciteit en 40 liter water. Met gemiddelde Europese prijzen kost dit ongeveer 0,10 tot 0,15 euro per lading. Een intensief 60C programma kan meer dan 1,2 kWh en 70 liter gebruiken, waardoor de kosten boven de 0,30 euro uitkomen.',
  },
  {
    question: 'Is het goedkoper om de vaatwasser \'s nachts te draaien?',
    answer:
      'Als uw elektriciteitsleverancier tijdgebonden tarieven hanteert, kan het draaien van de vaatwasser buiten de piekuren de energiekosten met 30 procent of meer verminderen. Piekuren zijn doorgaans doordeweeks \'s ochtends en \'s avonds.',
  },
  {
    question: 'Gebruikt de droger veel elektriciteit?',
    answer:
      'Ja. Een wasdroger is een van de meest energieintensieve huishoudelijke apparaten. Een volle lading kan 2,5 tot 3,5 kWh verbruiken, wat 0,50 tot 0,80 euro per programma kost. Het gebruik van een warmtepompdroger of het buiten drogen van kleding kan deze kosten met 60 tot 80 procent verminderen.',
  },
  {
    question: 'Hoeveel water gebruikt een vaatwasser?',
    answer:
      'Moderne vaatwassers zijn verrassend efficiënt. Een standaard Eco programma gebruikt slechts 8 tot 12 liter water per lading, terwijl een intensief programma 14 tot 16 liter kan gebruiken. Dit is veel minder dan het met de hand afwassen van dezelfde vaat onder een stromende kraan, wat doorgaans 40 tot 60 liter verbruikt.',
  },
  {
    question: 'Wat is het goedkoopste tijdstip om apparaten te gebruiken?',
    answer:
      'Met tijdgebonden tarieven zijn de goedkoopste periodes meestal laat in de nacht, heel vroeg in de ochtend en tijdens het weekend. Deze daluren kunnen 30 tot 50 procent goedkoper zijn dan doordeweekse piekuren.',
  },
  {
    question: 'Bespaart overstappen naar de Eco modus echt geld?',
    answer:
      'Absoluut. Eco programma\'s gebruiken lagere temperaturen, kortere verwarmingsfasen en minder water. Gedurende een heel jaar kan het overschakelen van Normaal naar Eco op de wasmachine en vaatwasser 50 tot 100 euro besparen in elektriciteit en water, afhankelijk van het gebruik en de lokale prijzen.',
  },
];

const howToData = [
  {
    name: 'Selecteer uw apparaat',
    text: 'Tik op het pictogram van de wasmachine, vaatwasser of wasdroger bovenaan de rekenmachine. Elk apparaat heeft verschillende energie en waterverbruiksprofielen.',
  },
  {
    name: 'Kies een programma type',
    text: 'Gebruik de Eco, Normaal of Intensief schuifregelaar om het wasprogramma in te stellen. Eco gebruikt minder energie en water. Intensief verbruikt het meest.',
  },
  {
    name: 'Voer uw lokale prijzen in',
    text: 'Typ uw elektriciteitsprijs per kWh en uw waterprijs per liter. U kunt deze vinden op uw nutsvoorschrift of de website van uw leverancier.',
  },
  {
    name: 'Stel het gebruik in',
    text: 'Geef aan hoeveel programma\'s u per week draait. Hierdoor kan de rekenmachine uw jaarlijkse kosten en potentiële jaarlijkse besparingen schatten.',
  },
  {
    name: 'Kies het uur van gebruik',
    text: 'Selecteer het uur waarop u van plan bent het apparaat te gebruiken. Piekuren zijn rood gemarkeerd. DALuren zijn groen en goedkoper als u een tijdgebonden tarief heeft.',
  },
  {
    name: 'Schakel wasmiddelkosten in',
    text: 'Schakel de wasmiddel schakelaar in als u wilt dat het bonnetje een schatting bevat voor poeder, vloeibaar of capsules per programma.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'De Verborgen Kosten van Elke Lading',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meeste mensen hebben geen idee hoeveel een enkel wasmachine programma daadwerkelijk kost. Ze zien het driemaandelijkse elektriciteitsvoorschrift en nemen aan dat apparaten goedkoop zijn in gebruik. De realiteit is dat een gezin dat vijf ladingen per week wast meer dan 200 euro per jaar kan uitgeven alleen al voor wassen. Voeg de vaatwasser drie keer per week en de droger twee keer per week toe en het totaal stijgt boven de 500 euro per jaar. Deze rekenmachine breekt elke cent af zodat u uw gewoonten kunt optimaliseren.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Eco Was', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Water Eco Was', icon: 'mdi:water' },
        { value: '30%', label: 'Piektoeslag', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Waarom Kleine Veranderingen zich Vermenigvuldigen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eén graad temperatuur of een paar liter water lijkt triviaal voor één programma. Maar over 250 programma\'s per jaar, zorgen die kleine verschillen voor serieus geld. Zakken van 60C naar 40C vermindert het energieverbruik met ongeveer 40 procent per lading. Overschakelen van Normaal naar Eco op de vaatwasser bespaart ongeveer 3 liter water en 0,3 kWh elke keer. Dit zijn geen marginale winsten. Het is de snelste manier om uw nutsvoorschrift te verkleinen zonder nieuwe apparaten te kopen.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Intensief Programma',
          description: 'Maximale hitte en water voor sterk vervuilde ladingen.',
          icon: 'mdi:alert',
          points: ['1,2 tot 3,5 kWh per lading', '70 liter voor wasmachines', 'Piekurtoeslag van toepassing', 'Hoogste jaarlijkse kosten'],
        },
        {
          title: 'Eco Programma',
          description: 'Lagere temperatuur, geoptimaliseerde duur, minimaal water.',
          icon: 'mdi:check-circle',
          points: ['0,45 tot 1,5 kWh per lading', 'Slechts 8 tot 40 liter', 'DALuur timing mogelijk', 'Laagste jaarlijkse kosten'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle Apparatuur Audit',
      icon: 'mdi:clipboard-check',
      badge: 'Actie',
      html: '<p style="margin:0">Gebruik de wasmachine alleen met een volle lading. Gebruik het Eco programma voor normale vervuiling. Stel uw vaatwasser in om pas na 22:00 te starten als u een tijdgebonden tarief heeft. Maak het filter van de droger na elk programma schoon om de efficiëntie te behouden. Hang wasgoed buiten of op een droogrek wanneer het weer dit toelaat.</p>',
    },
    {
      type: 'title',
      text: 'Tijdgebonden Tarieven en Piektijden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Veel elektriciteitsleveranciers rekenen tegenwoordig verschillende tarieven afhankelijk van het uur van de dag. Piektijden, meestal doordeweeks \'s ochtends en \'s avonds, kunnen 30 tot 50 procent meer kosten dan DALuren. Dezelfde lading om 20:00 kan 0,18 euro kosten, terwijl dezelfde lading om 02:00 slechts 0,12 euro kost. Over een jaar kan het correct plannen van apparaten 50 tot 100 euro besparen zonder iets anders te veranderen. Deze rekenmachine markeert piekuren in rood en DALuren in groen zodat u vooruit kunt plannen.',
    },
    {
      type: 'summary',
      title: 'Hoe Apparaatkosten te Verminderen',
      items: [
        'Gebruik deze rekenmachine om de werkelijke kosten per programma voor uw apparaten te vinden.',
        'Schakel over op de Eco modus wanneer mogelijk om tot 40 procent energie te besparen.',
        'Draai volle ladingen in plaats van gedeeltelijke ladingen om de efficiëntie te maximaliseren.',
        'Vertraag programma\'s naar DALuren als uw tarief tijdgebonden prijzen ondersteunt.',
        'Hang wasgoed buiten in plaats van de wasdroger te gebruiken om die kosten volledig te elimineren.',
        'Maak filters schoon en ontkalk regelmatig om apparaten op nominale efficiëntie te laten draaien.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Apparaat',
    applianceWasher: 'Wasmachine',
    applianceDishwasher: 'Vaatwasser',
    applianceDryer: 'Wasdroger',
    labelCycle: 'Programma',
    cycleEco: 'Eco',
    cycleNormal: 'Normaal',
    cycleIntensive: 'Intensief',
    labelElectricityPrice: 'Elektriciteitsprijs',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Waterprijs',
    unitPriceLiter: '€/L',
    labelDetergent: 'Wasmiddel',
    labelDetergentToggle: 'Inclusief wasmiddelkosten',
    labelHour: 'Gepland Uur',
    peakBadge: 'Piektarief actief',
    offPeakBadge: 'DALuur tarief',
    receiptTitle: 'Kostenoverzicht',
    receiptElectricity: 'Elektriciteit',
    receiptWater: 'Water',
    receiptDetergent: 'Wasmiddel',
    receiptTotal: 'Totaal per programma',
    receiptPerYear: 'Geschat per jaar',
    comparisonTitle: 'Slimme Wissel',
    comparisonText: 'Van Normaal naar Eco schakelen bespaart geld bij elke lading.',
    comparisonSavings: 'Jaarlijkse besparing',
    comparisonMonths: 'maanden wasmiddel',
    badgePeak: 'Piek',
    badgeOffPeak: 'DAL',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'jaar',
    labelCyclesPerWeek: 'Programma\'s per week',
    currencySign: '€',
    labelCurrency: 'Valuta',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
