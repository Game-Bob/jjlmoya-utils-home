import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'kakel-layout-berakning';
const title = 'Kakellayout och Spillberäknare';
const description =
  'Planera ditt rumsgolv med millimeterprecision. Beräkna exakt antal kakel, lådor som behövs, total kostnad och visualisera layouten i realtid med en interaktiv rutnätsförhandsvisning.';

const faqData = [
  {
    question: 'Hur beräknar jag hur många kakelplattor jag behöver för ett rum?',
    answer:
      'Mät rummets bredd och längd, välj kakelstorlek och ange fogbredden. Kalkylatorn delar rummets mått med kakel plus fog för att ge exakt antal plattor per rad och kolumn.',
  },
  {
    question: 'Vilken spillprocent bör jag lägga till vid köp av kakel?',
    answer:
      'För standard rektangulära rum, lägg till 10% spill. För rum med många hörn, diagonala mönster eller komplexa snitt, öka till 15%. Detta täcker sönder och snittfel.',
  },
  {
    question: 'Påverkar fogtjockleken verkligen antalet kakelplattor?',
    answer:
      'Ja. Bredare fogar minskar varje plattas effektiva täckning, vilket ökar det totala antalet något. Kalkylatorn tar hänsyn till detta automatiskt i varje rad och kolumn.',
  },
  {
    question: 'Bör jag köpa extra lådor utöver spillprocenten?',
    answer:
      'Det är klokt att köpa en extra låda om sådan finns. Färgbad kan variera mellan produktionsomgångar, och matchande reservdelar gör framtida reparationer sömlösa.',
  },
  {
    question: 'Hur kaklar jag ett rum med oregelbunden form?',
    answer:
      'Dela upp rummet i mindre rektanglar. Beräkna varje sektion separat och summera resultaten. Avrunda alltid delvisa lådor uppåt för att säkerställa full täckning.',
  },
  {
    question: 'Vad är skillnaden i spill mellan keramik och porslin?',
    answer:
      'Porslin är tätare och svårare att skära, vilket kan öka skärtspill med 2% till 3% jämfört med standardkeramik. Båda materialen bör följa samma mätprocess.',
  },
  {
    question: 'Kan jag returnera oanvända kakellådor?',
    answer:
      'De flesta återförsäljare accepterar oöppnade lådor inom 30 dagar. Spara alltid kvittot och öppna inte överskottslådor förrän installationen är helt klar.',
  },
];

const howToData = [
  {
    name: 'Mät rummet',
    text: 'Anteckna bredd och längd på golvyta i ditt föredragna måttsystem.',
  },
  {
    name: 'Välj kakel och fog',
    text: 'Välj dina kakeldimensioner och önskad fogbredd.',
  },
  {
    name: 'Beräkna och visualisera',
    text: 'Mata in värdena i kalkylatorn, justera spillmarginalen och granska live-layout-förhandsvisningen.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
};

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Komplett Guide för Kakelgolvplanering och Spillkontroll',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ett lyckat kakelprojekt börjar långt innan det första limmet läggs på. Noggrann mätning, intelligent layoutplanering och korrekt spilluppskattning avgör om din renovering håller sig inom budget och tidsplan. <strong>Vår interaktiva kakel-layoutkalkylator</strong> omvandlar råa mått till en visuell golvplan som visar exakt hur många plattor som får plats per rad, hur många lådor du behöver köpa och vart dina pengar går.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Standardspill', icon: 'mdi:alert-circle' },
        { value: '30+ år', label: 'Kakellivslängd', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Genomsnittlig montering', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Storformat Kakel',
          description: 'Kakel större än 60 cm skapar en sömlös, modern look men kräver perfekt plana underlag och ger högre skärspill i små rum.',
          icon: 'mdi:arrow-expand',
          points: ['Färre fogar', 'Premium visuell effekt', 'Högre spill i trånga utrymmen'],
        },
        {
          title: 'Små Mosaikplattor',
          description: 'Idealiska för badrum och intrikata mönster. De anpassar sig till oregelbundna former men kräver mer fog och arbetstid.',
          icon: 'mdi:apps',
          points: ['Flexibla runt hinder', 'Mer fog krävs', 'Längre monteringstid'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Varför Layoutvisualisering Betyder Något',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Att se ditt kakelnät innan köp förhindrar dyra överraskningar. En live-förhandsvisning avslöjar om din valda kakelstorlek lämnar obehagliga smala strimmor vid kanterna eller skapar ett balanserat, symmetriskt golv. Genom att justera fogbredd och kakelorientering i kalkylatorn kan du optimera layouten för estetik och effektivitet innan du beställer.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb Referenstabell för Täckning',
      icon: 'mdi:table',
      badge: 'Referens',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 plattor per m²</li><li><strong>45 x 45 cm</strong> → 5 plattor per m²</li><li><strong>60 x 60 cm</strong> → 3 plattor per m²</li><li><strong>60 x 120 cm</strong> → 1,5 plattor per m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Proffstips för att Minimera Spill',
      items: [
        'Beställ 10% extra för raka mönster och 15% för diagonala eller fiskbensmönster.',
        'Förvara alla lådor från samma produktionsbatch för att säkerställa färgkonsekvens.',
        'Mät diagonalt över rummet för att kontrollera vinkelräthet innan du planerar rader.',
        'Använd storformat endast i rum som är bredare än plattans längd för att undvika överdriven skärning.',
        'Avrunda alltid lådor uppåt; det är billigare än en andra leverans.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Rumskonfiguration',
    labelRoomWidth: 'Rumsbredd',
    labelRoomLength: 'Rumslängd',
    labelTileWidth: 'Kakelbredd',
    labelTileLength: 'Kakellängd',
    labelGrout: 'Fogbredd',
    labelWaste: 'Spillmarginal',
    labelTilesPerBox: 'Plattor per låda',
    labelPrice: 'Pris per låda',
    labelPattern: 'Kakelmonstret',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'st',
    unitPrice: '/låda',
    resultBadge: 'Live layout-förhandsvisning',
    labelArea: 'Golvyta',
    labelTiles: 'Totalt antal plattor',
    labelBoxes: 'Lådor som behövs',
    labelCost: 'Total kostnad',
    labelWasteCount: 'Spillplattor',
    labelCuts: 'Delvisa snitt',
    currency: 'SEK',
    btnMetric: 'Metriskt',
    btnImperial: 'Imperialiskt',
    btnPatternStraight: 'Rakt',
    btnPatternBrick: 'Förskjutet',
    btnPatternDiagonal: 'Diagonalt',
    badgeOptimal: 'Optimal layout',
    badgeWarning: 'Högt spill',
    visualTitle: 'Layout förhandsvisning',
  },
};
