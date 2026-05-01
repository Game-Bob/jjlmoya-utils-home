import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'jamforelse-uppvarmning-gas-varmepump-luftkonditionering';
const title = 'Jämför Gas vs Värmepump vs Luftkonditionering: Spara & Förbrukning';
const description = 'Beräkna hur mycket du sparar genom att byta din gaspanna mot en luft/vatten-värmepump eller luftvärmepump. Verklig jämförelse av energiförbrukning och effektivitet.';

const faqData = [
  {
    question: 'Vad är billigast: värmepump eller naturgas?',
    answer: 'När det gäller månatliga driftskostnader är en värmepump betydligt billigare än naturgas. Tack vare en effektivitet på 400 % (COP på 4) är kostnaden per levererad kWh värme vanligtvis 30 % till 50 % lägre än med gas, trots att elpriset per kWh är högre.',
  },
  {
    question: 'Vad är skillnaden mellan en värmepump och en vanlig luftkonditionering?',
    answer: 'Tekniskt sett är båda värmepumpar. Den största skillnaden är mediet de levererar värme till: luft/vatten-värmepumpar värmer vatten för radiatorer eller golvvärme, medan en vanlig luftvärmepump (luft/luft) värmer luften direkt via inomhusenheter.',
  },
  {
    question: 'Går det att installera en värmepump i ett hus med gamla radiatorer?',
    answer: 'Ja, det är möjligt att använda värmepump med konventionella radiatorer om man väljer en högtemperaturmodell. För största möjliga besparing är dock golvvärme eller lågtemperaturradiatorer det bästa valet.',
  },
  {
    question: 'Hur lång tid tar det att tjäna in en värmepump?',
    answer: 'Beroende på husets förbrukning och eventuella bidrag ligger återbetalningstiden vanligtvis mellan 5 och 8 år. Kombinerat med solceller kan denna tid förkortas avsevärt.',
  },
];

const howToData = [
  {
    name: 'Bostadsyta',
    text: 'Ange husets boarea i kvadratmeter för att uppskatta det årliga värmebehovet.',
  },
  {
    name: 'Energipriser',
    text: 'Justera priserna för gas och el enligt din senaste faktura för högre noggrannhet.',
  },
  {
    name: 'Se resultat',
    text: 'Jämför de tre systemen sida vid sida och se vilket som är mest effektivt och prisvärt.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Tips för att välja rätt uppvärmning',
      items: [
        'En <strong>värmepump</strong> är upp till 400 % mer effektiv än en gaspanna.',
        'Bra <strong>isolering</strong> sänker dina fakturor mer än någon panna.',
        '<strong>Återbetalningstiden</strong> för elsystem är ca 6–8 år.',
        'Kombinera med <strong>solceller</strong> för nästan gratis värme.',
      ],
    },
    {
      type: 'title',
      text: 'Förbrukningsjämförelse: Gas vs Värmepump vs Luftkonditionering',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Att välja rätt klimatsystem för sitt hem är ett av de viktigaste besluten för både plånboken och komforten. Med volatila energipriser och ett ökat fokus på hållbarhet är det avgörande att veta vilket system som är mest effektivt — och vilket som sparar mest pengar varje månad.',
    },
    {
      type: 'paragraph',
      html: 'Naturgas har länge varit ett vanligt alternativ, men intåget av <strong>luft/vatten-värmepumpar</strong> och den tekniska utvecklingen av <strong>luftvärmepumpar (luft/luft)</strong> har förändrat spelplanen helt. Vår kalkylator hjälper dig att se de årliga driftskostnaderna baserat på verkliga data.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Värmepumpseffektivitet',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'topp', positive: true },
        },
        {
          label: 'Genomsnittlig besparing',
          value: '5 000 kr',
          icon: 'mdi:piggy-bank',
          trend: { value: 'årligen', positive: true },
        },
        {
          label: 'Livslängd utrustning',
          value: '20 år',
          icon: 'mdi:calendar-check',
          trend: { value: 'standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Gaspanna: Den traditionella standarden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uppvärmning med gas använder en panna som bränner bränsle för att värma vatten, som sedan cirkulerar genom radiatorer eller golvvärme.',
    },
    {
      type: 'list',
      items: [
        '<strong>Verkningsgrad:</strong> Moderna kondenserande pannor har en verkningsgrad nära 100 %.',
        '<strong>Fördelar:</strong> Stabil teknik, snabb uppvärmning och ofta lägre installationskostnad.',
        '<strong>Nackdelar:</strong> Beroende av fossila bränslen, fasta avgifter och CO2-utsläpp.',
      ],
    },
    {
      type: 'title',
      text: '2. Värmepump: Extrem effektivitet (Luft/Vatten)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'En värmepump utvinner värmeenergi från uteluften (även vid minusgrader) och flyttar den in i huset för att värma vatten för uppvärmning och varmvatten.',
    },
    {
      type: 'list',
      items: [
        '<strong>Effektivitet (COP):</strong> En värmepump har ofta ett genomsnittligt COP på 4. Det betyder att för varje 1 kWh el du stoppar in får du 4 kWh värme i huset.',
        '<strong>Fördelar:</strong> Mycket hållbart med solceller, ett system för både värme och kyla, samt marknadens lägsta driftskostnad.',
        '<strong>Nackdelar:</strong> Hög investeringskostnad (som dock tjänas in på 5–8 år) och behov av plats för utomhusenhet.',
      ],
    },
    {
      type: 'tip',
      title: 'Sparatips',
      html: 'Värmepumpen fungerar bäst ihop med golvvärme eftersom vattnet bara behöver värmas till ca 35 °C, till skillnad från 60–70 °C i vanliga radiatorer.',
    },
    {
      type: 'proscons',
      title: 'Värmepump vs Gaspanna',
      proTitle: 'Varför Värmepump?',
      conTitle: 'Varför Gas?',
      items: [
        { pro: 'Oslagbar effektivitet (COP 4+)', con: 'Billigare installation inledningsvis' },
        { pro: 'Fossilt oberoende', con: 'Snabb värme med hög effekt' },
        { pro: 'Värme och kyla i ett', con: 'Fungerar med gamla radiatorer' },
        { pro: 'Perfekt med solceller', con: 'Ingen utomhusenhet krävs' },
      ],
    },
    {
      type: 'title',
      text: '3. Luftvärmepump (Luft/Luft)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Detta är det klassiska "split"-systemet. Det använder samma princip som luft/vatten-värmepumpen men värmer luften direkt istället för vatten. En utmärkt lösning för mindre hus eller som komplement. Effektiviteten (SCOP) ligger ofta mellan 3 och 3,5.',
    },
    {
      type: 'title',
      text: 'Förstå beräkningsformeln',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'För att jämföra systemen rättvist räknar vi om all förbrukning till kostnaden per levererad nyttig kWh värme:',
    },
    {
      type: 'code',
      code: 'Årlig kostnad = (Husets värmebehov / Systemeffektivitet) × Energipris',
      ariaLabel: 'Formel för årlig kostnad',
    },
    {
      type: 'paragraph',
      html: 'Där:',
    },
    {
      type: 'list',
      items: [
        '<strong>Värmebehov:</strong> Antal kWh värme ditt hus behöver per år (beror på isolering och kvm).',
        '<strong>Effektivitet:</strong> 0,95 för gas, 4,0 för värmepump och 3,2 för luftkonditionering.',
        '<strong>Energipris:</strong> Kostnad per kWh inklusive skatter och avgifter.',
      ],
    },
    {
      type: 'card',
      title: 'Exempel: Hus på 100 kvm',
      icon: 'mdi:home-analytics',
      html: '<p>Tänk dig ett hus som behöver 7 000 kWh värme per år:</p><ul><li><strong>Gas (0,80 kr/kWh):</strong> ca 5 900 kr/år</li><li><strong>Värmepump (1,80 kr/kWh):</strong> ca 3 150 kr/år (Du sparar 46 %)</li><li><strong>Luftkonditionering (1,80 kr/kWh):</strong> ca 3 900 kr/år</li></ul>',
    },
    {
      type: 'title',
      text: 'Vikten av isolering',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Inget värmesystem är effektivt i ett otätt hus. Se över dina fönster och din isolering innan du investerar stora pengar i ett nytt system. Bra isolering kan halvera ditt värmebehov.',
    },
    {
      type: 'title',
      text: 'Myter om värmepumpar',
      level: 2,
    },
    {
      type: 'list',
      items: [
        { label: 'De funkar inte i kyla', text: 'Fel. Moderna nordiska modeller funkar ner till -25 °C.' },
        { label: 'Det blir torr luft', text: 'Gäller bara luft/luft. Vattenburen värme med värmepump är mycket behagligt.' },
        { label: 'El är för dyrt', text: 'Även om elpriset är högre än gaspriset gör effektiviteten på 400 % att det lönar sig ändå.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Visste du att?',
      icon: 'mdi:lightbulb-on',
      badge: 'Fakta',
      html: '<p>COP ändras med utomhustemperaturen. Vid extrem kyla sjunker effektiviteten något, men den är fortfarande långt högre än direktverkande el eller en gaspanna.</p>',
    },
    {
      type: 'title',
      text: 'Slutsats: Framtiden är elektrisk',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Trenden i Europa är tydlig: avkolning av hemmet. Gaspriser kommer troligen öka på sikt. Kombinationen av solceller och värmepump är den smartaste lösningen för både plånbok och miljö.',
    },
  ],
  ui: {
    titleVivienda: '1. Husdata',
    helperVivienda: 'Ställ in husets egenskaper',
    labelM2: 'Totalyta',
    helperM2: 'Husets boarea i kvadratmeter.',
    labelAislamiento: 'Isoleringsnivå',
    helperAislamiento: 'Hur väl behåller huset värmen?',
    optExcelent: 'Utmärkt (Nybygge / Passivhus)',
    optMedium: 'Medel (Tvåglasfönster / Standardisolering)',
    optPoor: 'Dålig (Gammalt hus / Ingen väggisolering)',
    titleCoste: '2. Energikostnad',
    descCoste: 'Se efter pris per kWh på din senaste faktura.',
    labelGasPrice: 'Gaskostnad',
    helperGasPrice: 'Pris för varje förbrukad kWh gas.',
    labelElecPrice: 'Elkostnad',
    helperElecPrice: 'Pris för varje förbrukad kWh el.',
    titleComparison: '3. Årlig jämförelse',
    descComparison: 'Uppskattning baserad på teknisk prestanda.',
    systemGas: 'Gaspanna',
    systemAero: 'Luft/Vatten-värmepump',
    systemAir: 'Luftvärmepump (Split)',
    labelAnnualCost: 'Uppvärmningskostnad',
    labelEfficiency: 'Effektivitet',
    labelSource: 'Källa',
    labelEnergy: 'Energi',
    labelInstallation: 'Installation',
    valGasSource: 'Naturgas',
    valAeroEnergy: 'Förnybart + El',
    valAirInstall: 'Luft-Luft',
    winnerBadge: 'Mest Effektiv',
    unitCurrency: 'kr',
  },
};
