import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'vattenavhardningskalkylator';
const title = 'Vattenavhärdare och saltförbrukningsoptimerare';
const description =
  'Analysera din vattenhårdhetsnivå, beräkna optimala avhärdningsinställningar och uppskatta årlig saltförbrukning. Se prognoser för kalkpåverkan, tidslinjer för saltpåfyllning och livslängdsprediktioner för apparater i ett interaktivt verktyg.';

const faqData = [
  {
    question: 'Vad är vattenhårdhet?',
    answer:
      'Vattenhårdhet är koncentrationen av upplösta kalcium- och magnesiummineraler i ditt kranvatten. Det mäts i grains per gallon eller franska grader. Hårt vatten orsakar kalkavlagringar i rör, minskar värmeeffektiviteten och förkortar apparaternas livslängd.',
  },
  {
    question: 'Hur fungerar en vattenavhärdare?',
    answer:
      'En vattenavhärdare använder jonbyteshartsperlor för att byta ut kalcium- och magnesiumjoner mot natriumjoner. När hartset blir mättat regenererar systemet genom att spola en saltlösning genom tanken, vilket återställer pärlorna och skickar de hårda mineralerna ut i avloppet.',
  },
  {
    question: 'Hur mycket salt använder en avhärdare per år?',
    answer:
      'Ett typiskt hushåll på fyra personer med måttligt hårt vatten använder mellan 80 och 120 kilo salt per år. Mycket hårt vatten eller större hushåll kan driva upp detta över 200 kilo. Moderna högeffektiva avhärdare använder cirka 30 procent mindre salt än äldre modeller.',
  },
  {
    question: 'Hur ofta bör jag fylla på salttanken?',
    answer:
      'De flesta saltlösningstankar behöver fyllas på var 4:e till 8:e vecka. Kontrollera saltnivån månadsvis. Om tanken är mindre än en tredjedel full, lägg till en ny 25 kilos säck. Låt aldrig saltet ta helt slut, annars återhärdas hartset och förlorar effektivitet.',
  },
  {
    question: 'Skadar hårt vatten verkligen apparater?',
    answer:
      'Ja. Kalkavlagringar på värmeelement tvingar dem att arbeta hårdare, vilket ökar energiräkningarna och orsakar för tidiga fel. En varmvattenberedare i ett område med mycket hårt vatten kan förlora upp till 45 procent av sin förväntade livslängd. Tvättmaskiner och diskmaskiner lider också av igensatta ventiler och kalkbelagda trummor.',
  },
  {
    question: 'Kan jag dricka avhärdat vatten?',
    answer:
      'Avhärdat vatten är säkert för de flesta att dricka. Natriumökningen är liten, ungefär motsvarande en skiva bröd per dag. Personer med strikt natriumfattig kost kan dock föredra en separat oavhärdad kran för dricksvatten eller välja ett kaliumbaserat avhärdarsalt.',
  },
];

const howToData = [
  {
    name: 'Ange din vattenhårdhet',
    text: 'Skriv in hårdhetsvärdet från din vattenkvalitetsrapport eller teststicka. Välj grains per gallon eller franska grader från enhetsväljaren.',
  },
  {
    name: 'Ställ in hushållsstorlek',
    text: 'Välj antalet personer som bor i ditt hem. Fler boende innebär högre vattenförbrukning och snabbare saltförbrukning.',
  },
  {
    name: 'Välj avhärdarkapacitet',
    text: 'Ange grains-kapaciteten för ditt avhärdarharts. Detta står vanligtvis på ventilen eller i bruksanvisningen. Vanliga värden är 24 000 eller 32 000 grains.',
  },
  {
    name: 'Granska hårdhetskategori',
    text: 'Läs den interaktiva hårdhetsskalan för att förstå om ditt vatten är mjukt, måttligt hårt eller extremt hårt.',
  },
  {
    name: 'Kontrollera saltprognos',
    text: 'Titta på saltsäckssimuleringen för att se hur många 25 kilossäckar du behöver per år och när nästa påfyllning är due.',
  },
  {
    name: 'Inspektera apparatpåverkan',
    text: 'Jämför baslinjelivslängden för din tvättmaskin, varmvattenberedare och kaffebryggare mot deras uppskattade livslängd med ditt nuvarande obehandlade vatten.',
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
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'Den osynliga kostnaden för hårt vatten',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hårt vatten är ett av de dyraste dolda problemen i ett hem. Varje gång du öppnar kranen rinner upplösta mineraler genom dina rör och apparater. Över månader och år kristalliseras dessa mineraler till kalkavlagringar, en hård vit skorpa som täpper till värmeelement, minskar flödeshastigheten och förstör gummipackningar. Resultatet är högre energiräkningar, kortare apparatlivslängd och frekventa underhållsbesök. En vattenavhärdare eliminerar denna skada vid källan.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Genomsnittlig årlig saltanvändning', icon: 'mdi:shaker-outline' },
        { value: '11 år', label: 'Tvättmaskinens baslivslängd', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm kalk per GPG/år', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varför kalkavlagringar är så destruktiva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkavlagringar är inte bara en kosmetisk fläck på din vattenkokare. Inuti en varmvattenberedare bildar det ett isolerande lager på värmeelementet. För varje millimeter kalk sjunker energiöverföringseffektiviteten med upp till 10 procent. Det innebär att ett 3 millimeter tjockt lager kan öka din varmvattenräkning med nästan 30 procent. I tvättmaskiner blockerar kalk tvättmedelsaktiveringen, så du använder mer pulver för sämre resultat. I kaffebryggare förstör det termostaten och producerar bitter, ojämn extraktion.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Obehandlat hårt vatten',
          description: 'Mineraler avlagras fritt i hela rörsystemet och varje ansluten apparat.',
          icon: 'mdi:alert',
          points: ['Snabb kalkuppbyggnad i beredare och pannor', 'Ökad förbrukning av tvättmedel och tvål', 'Förkortad apparatlivslängd med 30 till 45 procent', 'Högre energiräkningar på grund av isoleringseffekten av kalk'],
        },
        {
          title: 'Avhärdat vatten',
          description: 'Kalcium och magnesium avlägsnas vid inloppspunkten innan de når kranar och apparater.',
          icon: 'mdi:check-circle',
          points: ['Ingen kalkavlagring på värmeelement', 'Normala tvättmedelsdoser ger bättre resultat', 'Apparater når sin fulla konstruerade livslängd', 'Lägre energiförbrukning för uppvärmning av vatten'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb hårdvattenskontroll',
      icon: 'mdi:clipboard-check',
      badge: 'Åtgärd',
      html: '<p style="margin:0">Fyll en genomskinlig flaska med kranvatten och tillsätt några droppar flytande tvål. Skaka kraftigt. Om vattnet förblir grumligt och producerar mycket lite skum är ditt vatten hårt. Kristallklart vatten med tjockt stabilt skum indikerar mjukt vatten. För en exakt mätning använd ett teststicka för total hårdhet eller begär en rapport från din vattenleverantör.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionera din saltförsörjning korrekt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att sluta på salt är det snabbaste sättet att förstöra en avhärdare. När saltlösningstanken är tom återhärdas hartsbädden inom några dagar och systemet slutar skydda ditt hem. Använd denna kalkylator för att förutse exakt hur många 25 kilossäckar du behöver per år. Om resultatet är mer än 10 säckar, överväg att uppgradera till ett större hartstank eller en högeffektiv ventil som använder mindre salt per regenereringscykel.',
    },
    {
      type: 'summary',
      title: 'Så skyddar du ditt hem från hårt vatten',
      items: [
        'Använd denna kalkylator för att ta reda på din exakta vattenhårdhetskategori och saltbehov.',
        'Installera en korrekt dimensionerad vattenavhärdare vid huvudvatteninloppen.',
        'Fyll på saltlösningstanken innan den sjunker under en tredjedel full.',
        'Använd högpurerade avdunstade saltpellets för bästa hartsprestanda.',
        'Serva ventilen och hartsbädden vart 3:e till 5:e år.',
        'Övervaka apparaternas energiräkningar för plötsliga ökningar som kan signalera kalkuppbyggnad.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Vattenhårdhet',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Hushållsstorlek',
    unitPeople: 'personer',
    labelSoftenerCapacity: 'Avhärdarkapacitet',
    unitGrains: 'grains',
    hardnessSoft: 'Mjukt',
    hardnessSlightly: 'Lätt hårt',
    hardnessModerate: 'Måttligt hårt',
    hardnessHard: 'Hårt',
    hardnessVery: 'Mycket hårt',
    hardnessExtreme: 'Extremt hårt',
    scaleTitle: 'Kalkuppbyggnadsfrekvens',
    scaleUnitMetric: 'mm/år',
    scaleUnitImperial: 'in/år',
    saltTitle: 'Årlig saltprognos',
    saltAnnual: 'Årligt salt',
    saltBags: 'Säckar per år',
    saltDaysPerBag: 'Dagar per säck',
    saltWeeksPerBag: 'Veckor per säck',
    applianceTitle: 'Apparatlivslängd',
    applianceWasher: 'Tvättmaskin',
    applianceHeater: 'Varmvattenberedare',
    applianceCoffee: 'Kaffebryggare',
    applianceBaseline: 'Med avhärdare',
    applianceWithHardness: 'Med hårt vatten',
    applianceSaved: 'år',
    badgeSaved: 'Förlängd med',
    labelUnitSystem: 'Enheter',
    btnMetric: 'Metrisk',
    btnImperial: 'Imperial',
  },
};
