import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'waterverzachter-calculator';
const title = 'Thuiswaterverzachter en zoutverbruikoptimalisator';
const description =
  'Analyseer uw waterhardheidsniveau, bereken optimale verzachterinstellingen en schat het jaarlijkse zoutverbruik. Bekijk voorspellingen over de impact van kalkaanslag, tijdlijnen voor zoutbijvulling en levensduurvoorspellingen van apparaten in één interactieve tool.';

const faqData = [
  {
    question: 'Wat is waterhardheid?',
    answer:
      'Waterhardheid is de concentratie opgeloste calcium- en magnesiummineralen in uw kraanwater. Het wordt gemeten in grains per gallon of Franse graden. Hard water veroorzaakt kalkaanslag in leidingen, vermindert de verwarmingsefficiëntie en verkort de levensduur van apparaten.',
  },
  {
    question: 'Hoe werkt een waterverzachter?',
    answer:
      'Een waterverzachter gebruikt ionenwisselharskorrels om calcium- en magnesiumionen te vervangen door natriumionen. Wanneer de hars verzadigd is, regenerert het systeem door een pekeloplossing door het reservoir te spoelen, waarbij de korrels worden hersteld en de harde mineralen worden afgevoerd.',
  },
  {
    question: 'Hoeveel zout gebruikt een verzachter per jaar?',
    answer:
      'Een typisch huishouden van vier personen met matig hard water gebruikt tussen de 80 en 120 kilo zout per jaar. Zeer hard water of grotere huishoudens kunnen dit boven de 200 kilo duwen. Moderne hoogrendementsverzachters gebruiken ongeveer 30 procent minder zout dan oudere modellen.',
  },
  {
    question: 'Hoe vaak moet ik het zoutreservoir bijvullen?',
    answer:
      'De meeste pekelreservoirs moeten elke 4 tot 8 weken worden bijgevuld. Controleer het zoutniveau maandelijks. Als het reservoir minder dan een derde vol is, voeg dan een nieuwe zak van 25 kilo toe. Laat het zout nooit helemaal opraken, anders zal de hars opharden en zijn effectiviteit verliezen.',
  },
  {
    question: 'Beschadigt hard water apparaten echt?',
    answer:
      'Ja. Kalkafzetting op verwarmingselementen zorgt ervoor dat ze harder moeten werken, wat de energierekening verhoogt en voortijdige storingen veroorzaakt. Een boiler in een gebied met zeer hard water kan tot 45 procent van zijn verwachte levensduur verliezen. Wasmachines en vaatwassers hebben ook last van verstopte kleppen en veraste trommels.',
  },
  {
    question: 'Kan ik gezuiverd water drinken?',
    answer:
      'Gezuiverd water is veilig voor de meeste mensen om te drinken. De natriumtoename is klein, ongeveer gelijk aan een snee brood per dag. Mensen die een strikt natriumarm dieet volgen, kunnen echter liever een aparte niet-verzachte kraan voor drinkwater hebben of kiezen voor een op kalium gebaseerd verzachterzout.',
  },
];

const howToData = [
  {
    name: 'Voer uw waterhardheid in',
    text: 'Typ de hardheidswaarde van uw waterkwaliteitsrapport of teststrip. Kies grains per gallon of Franse graden in de eenheidselector.',
  },
  {
    name: 'Stel de huishoudgrootte in',
    text: 'Selecteer het aantal mensen dat in uw huis woont. Meer bewoners betekenen hoger waterverbruik en snellere zoutdepletie.',
  },
  {
    name: 'Kies de verzachtercapaciteit',
    text: 'Voer de grain-capaciteit van uw verzachterharsreservoir in. Dit staat meestal op het regelventiel of in de handleiding. Veel voorkomende waarden zijn 24.000 of 32.000 grains.',
  },
  {
    name: 'Controleer de hardheidscategorie',
    text: 'Lees de interactieve hardheidsschaal om te begrijpen of uw water zacht, matig hard of extreem hard is.',
  },
  {
    name: 'Controleer de zoutvoorspelling',
    text: 'Bekijk de zoutzakstapelsimulator om te zien hoeveel zakken van 25 kilo u per jaar nodig heeft en wanneer de volgende bijvulling nodig is.',
  },
  {
    name: 'Controleer de impact op apparaten',
    text: 'Vergelijk de basislevensduur van uw wasmachine, boiler en koffiezetapparaat met de geschatte levensduur bij uw huidige onbehandelde water.',
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
      text: 'De verborgen kosten van hard water',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Hard water is een van de duurste verborgen problemen in een huis. Elke keer dat u de kraan opendraait, stromen opgeloste mineralen door uw leidingen en apparaten. Over maanden en jaren kristalliseren deze mineralen tot kalkaanslag, een harde witte korst die verwarmingselementen verstopt, de doorstroming vermindert en rubberen afdichtingen vernietigt. Het resultaat is hogere energierekeningen, een kortere levensduur van apparaten en frequente onderhoudsbezoeken. Een waterverzachter elimineert deze schade aan de bron.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Gem. jaarlijks zoutverbruik', icon: 'mdi:shaker-outline' },
        { value: '11jr', label: 'Basislevensduur wasmachine', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm kalk per GPG/jr', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Waarom kalkaanslag zo destructief is',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kalkaanslag is niet alleen een cosmetische vlek op uw waterkoker. In een boiler vormt het een isolerende laag op het verwarmingselement. Voor elke millimeter aanslag daalt de energieoverdrachtsefficiëntie met tot wel 10 procent. Dat betekent dat een laag van 3 millimeter uw verwarmingskosten voor water met bijna 30 procent kan verhogen. In wasmachines blokkeert kalk de wasmiddelactivering, waardoor u meer poeder gebruikt voor slechtere resultaten. In koffiezetapparaten verstoort het de thermostaat en produceert het bittere, ongelijkmatige extractie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Onbehandeld hard water',
          description: 'Mineralen slaan zich overal in het leidingsysteem en elk aangesloten apparaat neer.',
          icon: 'mdi:alert',
          points: ['Snelle kalkopbouw in boilers en verwarmers', 'Verhoogd wasmiddel- en zeepverbruik', 'Verkorte levensduur van apparaten met 30 tot 45 procent', 'Hogere energierekeningen door het isolerende effect van kalk'],
        },
        {
          title: 'Verzacht water',
          description: 'Calcium en magnesium worden verwijderd bij de toevoer voordat ze kranen en apparaten bereiken.',
          icon: 'mdi:check-circle',
          points: ['Geen kalkafzetting op verwarmingselementen', 'Normale wasmiddeldoseringen produceren betere resultaten', 'Apparaten bereiken hun volledige ontwerplevensduur', 'Lager energieverbruik voor waterverwarming'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle hardwaterstest',
      icon: 'mdi:clipboard-check',
      badge: 'Actie',
      html: '<p style="margin:0">Vul een heldere fles met kraanwater en voeg een paar druppels vloeibare zeep toe. Schud krachtig. Als het water troebel blijft en zeer weinig schuim produceert, is uw water hard. Helder water met dik stabiel schuim duidt op zacht water. Voor een exacte meting gebruikt u een totale hardheidsteststrip of vraagt u een rapport op bij uw waterleverancier.</p>',
    },
    {
      type: 'title',
      text: 'Bepaal uw zoutvoorraad op de juiste manier',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Zout opraken is de snelste manier om een verzachter te vernietigen. Wanneer het pekelreservoir leeg is, herstalt het harsbed binnen enkele dagen en stopt het systeem met het beschermen van uw huis. Gebruik deze calculator om exact te voorspellen hoeveel zakken van 25 kilo u per jaar nodig heeft. Als het resultaat meer dan 10 zakken is, overweeg dan om over te stappen op een groter harsreservoir of een hoogrendementsventiel dat minder zout per regeneratiecyclus gebruikt.',
    },
    {
      type: 'summary',
      title: 'Hoe beschermt u uw huis tegen hard water',
      items: [
        'Gebruik deze calculator om uw exacte waterhardheidscategorie en zoutbehoefte te bepalen.',
        'Installeer een correct bemeten waterverzachter bij de hoofdtoevoer.',
        'Vul het pekelreservoir bij voordat het onder een derde vol komt.',
        'Gebruik hoogzuivere geëvaporeerde zouttabletten voor de beste harsprestaties.',
        'Laat het ventiel en harsbed elke 3 tot 5 jaar onderhouden.',
        'Controleer de energierekeningen van apparaten op plotselinge stijgingen die kalkopbouw kunnen signaleren.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Waterhardheid',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Huishoudgrootte',
    unitPeople: 'personen',
    labelSoftenerCapacity: 'Verzachtercapaciteit',
    unitGrains: 'grains',
    hardnessSoft: 'Zacht',
    hardnessSlightly: 'Licht hard',
    hardnessModerate: 'Matig hard',
    hardnessHard: 'Hard',
    hardnessVery: 'Zeer hard',
    hardnessExtreme: 'Extreem hard',
    scaleTitle: 'Kalkopbouwsnelheid',
    scaleUnitMetric: 'mm/jr',
    scaleUnitImperial: 'in/jr',
    saltTitle: 'Jaarlijkse zoutvoorspelling',
    saltAnnual: 'Jaarlijks zout',
    saltBags: 'Zakken per jaar',
    saltDaysPerBag: 'Dagen per zak',
    saltWeeksPerBag: 'Weken per zak',
    applianceTitle: 'Levensduur apparaten',
    applianceWasher: 'Wasmachine',
    applianceHeater: 'Boiler',
    applianceCoffee: 'Koffiezetapparaat',
    applianceBaseline: 'Met verzachter',
    applianceWithHardness: 'Met hard water',
    applianceSaved: 'jr',
    badgeSaved: 'Verlengd met',
    labelUnitSystem: 'Eenheden',
    btnMetric: 'Metrisch',
    btnImperial: 'Imperiaal',
  },
};
