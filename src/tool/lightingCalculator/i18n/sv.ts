import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'belysnings-och-lumenkalkylator-for-hemmet';
const title = 'Belysnings och Lumenkalkylator för Hemmet';
const description =
  'Beräkna exakt hur många lumen och lampor du behöver för varje rum. Välj rumstyp, dimensioner och lamptyp för att få en professionell belysningsplan med realtidsuppskattningar av lux.';

const faqData = [
  {
    question: 'Hur många lumen behöver jag för ett vardagsrum?',
    answer:
      'För ett typiskt vardagsrum, sikta på cirka 150 lux på golvet. Multiplicera rummets area i kvadratmeter med 150 för att få de nödvändiga lumenen. För ett rum på 20 kvadratmeter behöver du cirka 3000 lumen.',
  },
  {
    question: 'Vad är skillnaden mellan lux och lumen?',
    answer:
      'Lumen mäter den totala ljusutbytet från en lampa. Lux mäter det ljus som faktiskt når en yta. Ett rum med höga tak eller mörka väggar behöver fler lumen för att uppnå samma luxnivå eftersom ljus går förlorat till följd av avstånd och absorption.',
  },
  {
    question: 'Sparar LED-lampor verkligen energi?',
    answer:
      'Ja. LED-lampor producerar cirka 100 lumen per watt, medan glödlampor bara producerar cirka 15. En 10W LED-lampa ger samma ljus som en 60W glödlampa och använder en sjättedel av elen.',
  },
  {
    question: 'Hur påverkar rumsfärgen belysningsbehovet?',
    answer:
      'Mörka väggar och tak absorberar ljus. I ett rum med mörka ytor kan du behöva 50% fler lumen än standardrekommendationen.',
  },
  {
    question: 'Vilken luxnivå är bra för läsning?',
    answer:
      'För bekväm läsning behöver du 300 till 500 lux på sidan. Allmänbelysning ger vanligtvis 150 till 200 lux, så lägg till en arbetslampa vid din läsplats för extra ljusstyrka.',
  },
  {
    question: 'Kan jag dimma LED-lampor?',
    answer:
      'Bara om de är märkta som dimbara. Standard-LED kan blinka eller få förkortad livslängd när de ansluts till en dimmer. Kontrollera alltid förpackningen för dimbar-symbolen innan du installerar.',
  },
];

const howToData = [
  {
    name: 'Välj din rumstyp',
    text: 'Välj rummets funktion. Kök och kontor behöver ljusare ljus än sovrum eller hallar.',
  },
  {
    name: 'Ange dimensioner',
    text: 'Ange rummets bredd, längd och takhöjd. Kalkylatorn använder dessa för att bestämma rumsindexet och ljusutnyttjandefaktorn.',
  },
  {
    name: 'Välj lamptyp och antal',
    text: 'Välj din föredragna lampteknik och hur många armaturer du har. Kalkylatorn säger till om du behöver fler lampor.',
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
      text: 'Komplett Guide till Hemmabelysningsdesign och Lumenplanering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Rätt belysning förvandlar ett hus till ett hem. Bortom estetiken påverkar rätt mängd ljus humöret, produktiviteten och till och med ögonhälsan. <strong>Vår hem-belysningskalkylator</strong> hjälper dig att bestämma exakt hur många lumen du behöver för varje rum, med hänsyn till rummets storlek, takhöjd, ytfärger och lamptyp.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Rekommenderat Luxintervall', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'LED Effektivitet', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Underhållsfaktor', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Varm Omgivande Belysning',
          description: 'Idealisk för vardagsrum och sovrum. Skapar en mysig atmosfär och minskar ögontröttheten på kvällen.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Varm färgtemperatur (2700K)', 'Flera dimbara källor'],
        },
        {
          title: 'Ljus Arbetsbelysning',
          description: 'Viktigt för kök, kontor och badrum. Ger tydlig sikt för detaljarbete.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Kallvitt (4000K)', 'Fokuserad på arbetsytor'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Varför Rumsdimensioner Spelar Roll',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ljus sprider sig och försvagas med avståndet. En lampa som är tillräckligt ljus för ett 2,5 meter högt tak kan vara för svag för ett 4 meter högt tak. Kalkylatorn tar hänsyn till detta genom att använda rumsindex-formeln, som beaktar både golvarean och monteringshöjden för att uppskatta hur mycket ljus som faktiskt når arbetsplanet.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb Referenstabell för Lux',
      icon: 'mdi:table',
      badge: 'Referens',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Vardagsrum</strong> → 150 lux</li><li><strong>Kök</strong> → 300 lux</li><li><strong>Sovrum</strong> → 100 lux</li><li><strong>Badrum</strong> → 200 lux</li><li><strong>Kontor</strong> → 500 lux</li><li><strong>Hall</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Proffstips för Bättre Belysning',
      items: [
        'Varva tre typer av ljus: allmänt, arbets- och accentbelysning.',
        'Använd dimmers för att justera ljusstyrkan vid olika tider på dygnet.',
        'Välj LED-lampor för lång livslängd och låg energiförbrukning.',
        'Placera arbetslampor på motsatt sida om din dominanta hand för att undvika skuggor.',
        'Överväg smarta lampor för automatisk schemaläggning och färgtemperaturändringar.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Rumsbelysningskalkylator',
    labelRoomType: 'Rumstyp',
    labelRoomWidth: 'Bredd',
    labelRoomLength: 'Längd',
    labelHeight: 'Tak',
    labelBulbType: 'Lampa',
    labelBulbWatt: 'Effekt',
    labelFixtures: 'Armaturer',
    labelAmbient: 'Atmosfär',
    btnAmbientCozy: 'Mysig',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Ljus',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'st',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Mål lux',
    labelCurrentLux: 'Nuvarande lux',
    labelBulbsNeeded: 'Lampor behövs',
    labelRoomArea: 'Area',
    statusOptimal: 'Perfekt',
    statusInsufficient: 'För Mörkt',
    statusExcess: 'För Ljust',
    btnLiving: 'Vardagsrum',
    btnKitchen: 'Kök',
    btnBedroom: 'Sovrum',
    btnBathroom: 'Badrum',
    btnOffice: 'Kontor',
    btnHallway: 'Hall',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogen',
    btnBulbIncandescent: 'Glödlampa',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Din belysning är perfekt balanserad för detta rum.',
    tipInsufficient: 'Lägg till fler armaturer eller lampor med högre effekt.',
    tipExcess: 'Minska armaturer eller dimma för att spara energi.',
    labelManualAdjust: 'Manuell justering',
    labelSummary: 'Din belysningsplan',
    labelTotalLumens: 'Totalt lumen behövs',
    labelSuggestedSetup: 'Rekommenderad uppställning',
    btnExport: 'Exportera PDF',
  },
};
