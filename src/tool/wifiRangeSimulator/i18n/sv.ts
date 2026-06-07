import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-rackvidd-simulator';
const title = 'WiFi räckvidds och hindersimulator';
const description =
  'Skissera din hemplan, placera väggar, dörrar, möbler och apparater, dra sedan din router och enhet för att hitta den bästa signalvägen. Se täckningsförlust, strömningsomdöme och placeringstips i realtid för att åtgärda döda zoner utan att köpa ny hårdvara.';

const faqData = [
  {
    question: 'Varför tappar mitt Wi-Fi-signal i vissa rum?',
    answer:
      'Wi-Fi använder radiovågor som absorberas, reflekteras eller blockeras av fysiska material. Massivt tegel, betong och metall är värst, var och en minskar signalstyrkan avsevärt. Vatten och glas kan också reflektera eller absorbera delar av signalen.',
  },
  {
    question: 'Hur mycket påverkar en betong- eller stenvägg Wi-Fi?',
    answer:
      'En standard betongvägg kan dämpa en 2,4 GHz-signal med 10 till 20 decibel. Tjocka stenväggar på 70 till 80 centimeter kan nå 22 decibel eller mer. Detta innebär ungefär 50 till 90 procents räckviddsförlust beroende på tjocklek och densitet. Vid 5 GHz är förlusten ännu större eftersom högre frekvenser absorberas snabbare av täta material.',
  },
  {
    question: 'Var ska jag placera min router för bästa täckning?',
    answer:
      'Centralt, högt och öppet. Placera routern i mitten av ditt hem, minst en meter från tjocka väggar och metallföremål, och höj den till brösthöjd för horisontell spridning. Undvik hörn, skåp och låga positioner bakom möbler.',
  },
  {
    question: 'Kan glasdörrar blockera Wi-Fi?',
    answer:
      'Klart glas har minimal påverkan, men belagda eller tvåglasfönster med metallfilmer kan reflektera signaler. Simulatorn behandlar standardglas som ett lätt hinder med ungefär 2 till 3 decibels förlust.',
  },
];

const howToData = [
  {
    name: 'Identifiera signalvägen',
    text: 'Föreställ dig en rak linje mellan din router och enheten du bryr dig om. Varje objekt som korsar denna linje är viktigt.',
  },
  {
    name: 'Lägg till varje hinder',
    text: 'Klicka på materialknapparna i simulatorn för att lägga till varje vägg, dörr, apparat eller möbel som korsar vägen.',
  },
  {
    name: 'Läs omdömet',
    text: 'Se signalringen, våganimationen och strömningspanelen uppdateras omedelbart när du lägger till eller tar bort objekt.',
  },
  {
    name: 'Tillämpa det kontextuella tipset',
    text: 'Följ placeringskorten som visas baserat på din exakta hinderkombination för att förbättra täckningen utan att köpa ny hårdvara.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: 'Varför ditt Wi-Fi dör i rummet bredvid',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Din router sänder radiovågor i alla riktningar. Dessa vågor färdas lätt genom luften, men varje fysiskt föremål de möter tar ut sin tribut. Vissa material släpper igenom det mesta av signalen. Andra slukar den helt. Att förstå vilka föremål i ditt hem som tyst dödar din anslutning är det första steget för att åtgärda döda zoner utan att spendera en enda krona på ny hårdvara.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Gipsväggsförlust', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Tjock stenmur', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metalldörr', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Den verkliga kostnaden för varje föremål i ditt hem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Alla hinder är inte lika. En enda gipsskiva kan ta bort några procent av din signal, men en betongpelare eller en metalldörr kan halvera din effektiva räckvidd. Här är vad du verkligen har att göra med när du placerar din router bakom TV:n, bredvid kylskåpet eller på golvet under en metallhylla.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lätta hinder',
          description: 'Dessa föremål orsakar minimal signalförlust och är vanligtvis säkra att ha nära signalvägen. Du bör inte oroa dig för ett enstaka fönster eller en glasdörr.',
          icon: 'mdi:window-open-variant',
          points: [
            'Glasdörr: 2 till 3 dB förlust',
            'Standardfönster: 2 dB förlust',
            'Gipsvägg: 3 dB förlust',
            'Träinnerdörr: 4 dB förlust',
          ],
        },
        {
          title: 'Måttliga hinder',
          description: 'Dessa föremål skapar en märkbar minskning i din täckning. En eller två är okej, men tre eller fler på samma signalväg kommer att orsaka buffring och fördröjning.',
          icon: 'mdi:wardrobe',
          points: [
            'Trägarderob: 5 dB förlust',
            'Stor spegel: 6 dB förlust',
            'Tvättmaskin: 6 dB förlust',
            'Mikrovågsugn: 5 dB förlust',
          ],
        },
        {
          title: 'Tunga hinder',
          description: 'Dessa är de tysta mördarna av hemnätverk. En enda betongvägg eller metalldörr kan förvandla en stark signal till en svag, och att stapla dem skapar garanterade döda zoner.',
          icon: 'mdi:wall',
          points: [
            'Massiv tegelvägg: 8 dB förlust',
            'Golv eller tak: 10 dB förlust',
            'Kylskåp: 10 dB förlust',
            'Akvarium: 12 dB förlust',
          ],
        },
        {
          title: 'Extrema hinder',
          description: 'Dessa material absorberar eller reflekterar nästan all radioenergi. Om din signalväg korsar ett av dessa måste du flytta routern eller enheten. Det finns ingen lösning.',
          icon: 'mdi:shield',
          points: [
            'Tjock stenmur (70-80 cm): 22 dB förlust',
            'Betongvägg: 15 dB förlust',
            'Metallskåp: 12 dB förlust',
            'Metalldörr eller -grind: 18 dB förlust',
            'Hisschakt: 20+ dB förlust',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Hur olika frekvenser beter sig genom väggar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta moderna routrar sänder på två band: 2,4 GHz och 5 GHz. Den lägre frekvensen färdas längre och smyger lättare genom väggar, men den är långsammare och trångbodd. Den högre frekvensen är blixtsnabb men absorberas av varje hinder på sin väg.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2,4 GHz genomträngning',
          description: 'Lägre frekvenser färdas längre och penetrerar väggar bättre. Idealisk för lång räckvidd men trångbodd med grannnätverk.',
          icon: 'mdi:signal',
          points: [
            'Bättre genom massivt tegel och betong',
            'Mer störningar från grannarnas routrar',
            'Långsammare topphastigheter, cirka 150 Mbps i verkligheten',
            'Bättre för smarta hem-enheter och IoT',
          ],
        },
        {
          title: '5 GHz genomträngning',
          description: 'Högre frekvenser erbjuder högre hastigheter men absorberas mycket snabbare av byggmaterial. Bäst för öppna ytor och närliggande enheter.',
          icon: 'mdi:signal-5g',
          points: [
            'Dålig genom betong och metall',
            'Mindre störningar, renare kanaler',
            'Gigabit-hastigheter i samma rum',
            'Sämre täckning, bättre kvalitet där den når',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Dolda mördare: föremål du aldrig misstänkt',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De flesta skyller på väggar, men några av de värsta Wi-Fi-mördarna är vardagliga föremål. Ett akvarium består mestadels av vatten, och vatten absorberar 2,4 GHz-radiovågor nästan perfekt. En stor spegel har ett tunt metallager på baksidan som reflekterar signalen bort från din enhet. En mikrovågsugn strålar på 2,4 GHz, exakt samma frekvens som din router, och orsakar störningar varje gång du värmer soppa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Akvariefällan',
      icon: 'mdi:fish',
      badge: 'Överraskningsblockerare',
      html: '<p>Ett stort akvarium kan dämpa din Wi-Fi-signal med upp till 12 decibel. Det är samma som en tjock betongvägg. Om din router är på ena sidan av akvariet och ditt skrivbord på den andra, gör vattnet mer skada än väggen bakom.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Spegeleffekten',
      icon: 'mdi:mirror',
      badge: 'Reflektionsrisk',
      html: '<p>Stora speglar har ett tunt metallager på baksidan utformat för att reflektera ljus. Samma metallager reflekterar också radiovågor. En spegel som vetter mot din router kan studsa signalen bort från där du behöver den, eller skapa förvirrande flervägsinterferens som stör datapaket.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Mikrovågsstörningen',
      icon: 'mdi:microwave',
      badge: 'Aktiv störsändare',
      html: '<p>Mikrovågsugnar arbetar på 2,45 GHz och överlappar direkt med 2,4 GHz Wi-Fi-bandet. När den är igång kan en mikrovågsugn utradera 2,4 GHz-signalen inom en radie på 3 till 5 meter. Om din router bara stöder 2,4 GHz och ditt kök är i närheten, byt till en dubbelbandsrouter och använd 5 GHz för kritiska uppgifter.</p>',
    },
    {
      type: 'title',
      text: 'Rum för rum: var du ska placera din router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Den idealiska routerplaceringen är inte den mest bekväma. Det är den som ger den klaraste siktlinjen till rummen där du faktiskt använder internet. Så här bör du tänka om varje rum.',
    },
    {
      type: 'table',
      headers: ['Rum', 'Risknivå', 'Varför det är svårt', 'Lösning'],
      rows: [
        ['Kök', 'Hög', 'Kylskåp, mikrovågsugn, metallskåp, vattenrör', 'Placera routern utanför köket, aldrig inuti.'],
        ['Badrum', 'Hög', 'Speglar, vattenrör, kakel med metallnät', 'Undvik att placera routern bakom en badrumsvägg.'],
        ['Sovrum', 'Medel', 'Garderober, tjocka väggar, metall-sängramar', 'Höj routern, rensa vägen ovanför möbler.'],
        ['Vardagsrum', 'Låg', 'Vanligtvis öppet, men se upp för TV och konsoler', 'Håll routern synlig, inte gömd bakom TV:n.'],
        ['Garage', 'Extrem', 'Metalldörrar, betong, bilar', 'Förvänta dig inte att en inomhusrouter når garaget.'],
        ['Trädgård / Terrass', 'Hög', 'Ytterväggar, glas, avstånd', 'Använd en utomhusaccesspunkt eller mesh-nod.'],
      ],
    },
    {
      type: 'title',
      text: 'Enmetersregeln och andra placeringsknep',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Små flyttningar skapar stora skillnader. Du behöver inte kabel om ditt hus. Du behöver bara förstå hur radiovågor rör sig och ge dem en fri väg.',
    },
    {
      type: 'tip',
      title: 'Enmetersregeln',
      html: '<p>Att flytta din router bara en meter från en betong- eller metallbarriär kan återställa upp till 40 procent av förlorad signalstyrka.</p>',
    },
    {
      type: 'tip',
      title: 'Höj för täckning',
      html: '<p>Höj routern till brösthöjd på en hylla. Signaler strålar horisontellt från antennen. Att placera den på golvet slösar hälften av täckningen i marken.</p>',
    },
    {
      type: 'tip',
      title: 'Håll den synlig',
      html: '<p>Göm aldrig routern i ett skåp, garderob eller bakom TV:n. Höljet fungerar som en Faraday-bur och fångar signalen innan den når ditt rum.</p>',
    },
    {
      type: 'tip',
      title: 'Antennpositionering',
      html: '<p>Om din router har externa antenner, placera en vertikalt och en horisontellt. Detta ger bättre täckning för enheter på olika höjder.</p>',
    },
    {
      type: 'tip',
      title: 'Undvik störningar',
      html: '<p>Håll routern minst 1,5 meter från mikrovågsugnar, trådlösa telefoner och babymonitorer. Dessa enheter delar 2,4 GHz-spektrumet och orsakar aktiva störningar.</p>',
    },
    {
      type: 'tip',
      title: 'Mellanvåningsfördel',
      html: '<p>Om du bor i ett flervåningshus, placera routern på mellanvåningen. Signaler sprids dåligt uppåt och nedåt genom betongbjälklag.</p>',
    },
    {
      type: 'title',
      text: 'Strömningsomdömen: vad din signal faktiskt betyder',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Procentsatser är abstrakta. Vad du verkligen bryr dig om är om du kan titta på Netflix, vinna en match eller avsluta ett videosamtal utan frysningar. Här är vad varje signalnivå betyder i verkligheten.',
    },
    {
      type: 'table',
      headers: ['Signal', '4K-strömning', 'Onlinespel', 'Videosamtal', 'Surfning'],
      rows: [
        ['80% till 100%', 'Perfekt, omedelbar laddning', 'Låg latens, konkurrenskraftigt', 'Kristallklart, inga avbrott', 'Omedelbart, ingen fördröjning'],
        ['60% till 79%', 'Bra, tillfällig buffring', 'Spelbart, mindre laggtoppar', 'Stabilt, sällan pixligt', 'Snabbt, inga problem'],
        ['40% till 59%', 'Buffring varannan minut', 'Laggvarningar, rubber banding', 'Pixligt, vissa avbrott', 'Användbart, långsammare laddning'],
        ['20% till 39%', 'Omöjligt, konstant frysning', 'Frånkopplingar, ospelbart', 'Frekventa avbrott, oanvändbart', 'Väldigt långsamt, timeouts'],
        ['0% till 19%', 'Startar inte', 'Kan inte ansluta', 'Ingen anslutning', 'Oanvändbart'],
      ],
    },
    {
      type: 'title',
      text: 'Snabba lösningar innan du köper något',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Checklista för gratisoptimering',
      items: [
        'Flytta routern till mitten av ditt hem, inte hörnet.',
        'Höj den till brösthöjd på en hylla eller hög möbel.',
        'Ta ut den ur skåp, garderober och bakom TV:n.',
        'Vinkla en antenn vertikalt och en horisontellt om möjligt.',
        'Använd 5 GHz för närliggande enheter och 2,4 GHz för avlägsna.',
        'Byt Wi-Fi-kanal till en mindre trångbodd med en skannerapp.',
        'Uppdatera routerfirmware för att åtgärda kända signalbuggar.',
        'Starta om routern en gång i månaden för att rensa minnesläckor.',
      ],
    },
    {
      type: 'title',
      text: 'När du ska uppgradera din hårdvara',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ibland vinner omgivningen. Om du har provat alla placeringsknep och fortfarande lider av döda zoner, är det dags att utöka nätverket istället för att kämpa mot fysiken.',
    },
    {
      type: 'proscons',
      title: 'WiFi förlängare vs Mesh system',
      items: [
        { pro: 'Förlängare är billiga och enkla att installera.', con: 'Förlängare skapar ett andra nätverksnamn och halverar hastigheten.' },
        { pro: 'Förlängare fungerar för en enda död zon.', con: 'Förlängare behöver en stark befintlig signal att förstärka.' },
        { pro: 'Mesh-system skapar ett sömlöst nätverk.', con: 'Mesh-system är dyrare i inköp.' },
        { pro: 'Mesh hanterar flera våningar och stora hem.', con: 'Mesh kräver en huvudnod nära modemet.' },
      ],
    },
    {
      type: 'tip',
      title: 'När du ska använda mesh',
      html: '<p>För hem över 120 kvadratmeter eller med tjocka betongväggar kommer ett mesh-system med minst två noder att överträffa vilken enskild router som helst, oavsett hur dyr.</p>',
    },
    {
      type: 'title',
      text: 'Förstå decibel i enkla termer',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decibel är logaritmiska, vilket innebär att de inte beter sig som vanliga tal. Var 3:e dB förlust halverar din signaleffekt. 6 dB förlust innebär att endast en fjärdedel av den ursprungliga effekten finns kvar. 10 dB förlust innebär att endast en tiondel överlever. Det är därför en betongvägg på 15 dB är förödande. Den försvagar inte bara signalen. Den utplånar den.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Dämpning', definition: 'Den gradvisa förlusten av signalstyrka när den passerar genom ett material. Högre siffror innebär mer signal som går förlorad.' },
        { term: 'dBm', definition: 'En effektenhet som används för att mäta Wi-Fi-signalstyrka. 0 dBm är en milliwatt. Negativa värden är normala, där -30 är utmärkt och -80 knappt användbart.' },
        { term: 'Död zon', definition: 'Ett område där Wi-Fi-signalen är för svag för att upprätta eller upprätthålla en tillförlitlig anslutning.' },
        { term: 'Mesh-nätverk', definition: 'Ett system med flera router-noder som samarbetar för att täcka ett stort område med ett enda sömlöst Wi-Fi-nätverk.' },
        { term: 'Flervägsinterferens', definition: 'När radiovågor studsar mot väggar och föremål och skapar flera fördröjda kopior av samma signal som förvirrar mottagaren.' },
        { term: 'SSID', definition: 'Namnet på ditt Wi-Fi-nätverk. Förlängare skapar ofta en andra SSID, medan mesh-system behåller ett namn på alla noder.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Gyllene regeln för routerplacering',
      icon: 'mdi:map-marker-radius',
      badge: 'Viktigt tips',
      html: '<p>Om din router för närvarande står i ett hörn, i ett skåp eller på golvet, slänger du 50 till 70 procent av dess potentiella räckvidd innan signalen ens lämnar rummet. Den snabbaste uppgraderingen du kan göra är att flytta den till en öppen, central, förhöjd plats. Den enda förändringen löser ofta fler problem än att köpa ny utrustning.</p>',
    },
    {
      type: 'summary',
      title: 'Hur du förhindrar WiFi döda zoner',
      items: [
        'Placera routern centralt, högt och i öppet utrymme.',
        'Minimera antalet väggar mellan router och enhet.',
        'Undvik kök, badrum och garage som routerplacering.',
        'Använd 5 GHz för hastighet i samma rum, 2,4 GHz för avstånd.',
        'Överväg mesh för stora hem eller tjocka ytterväggar.',
        'Starta om månatligen och uppdatera firmware för topprestanda.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Hemföremål som blockerar Wi-Fi',
    labelAddObstacle: 'Klicka för att lägga till i signalvägen',
    labelRemove: 'Ta bort',
    labelSignalStrength: 'Signal',
    labelEffectiveRange: 'Effektiv räckvidd',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Strömningsomdöme',
    verdictPerfect: 'Perfekt',
    verdictGood: 'Bra',
    verdictFair: 'Godtagbar',
    verdictPoor: 'Dålig',
    verdictDead: 'Död zon',
    tipTitle: 'Placeringstips',
    label4kStreaming: '4K-strömning',
    labelOnlineGaming: 'Onlinespel',
    labelVideoCalls: 'Videosamtal',
    labelBasicBrowsing: 'Grundläggande surfning',
    statusPerfect: 'Perfekt',
    statusGood: 'Bra',
    statusFair: 'Godtagbar',
    statusPoor: 'Dålig',
    statusImpossible: 'Omöjlig',
    statusLowLatency: 'Låg latens',
    statusLagWarning: 'Laggvarning',
    statusDisconnect: 'Koppla från',
    statusStable: 'Stabil',
    statusPixelated: 'Pixlig',
    statusDropped: 'Bruten',
    statusPass: 'Godkänd',
    statusUnusable: 'Oanvändbar',
    tipMoveRouter: 'Att flytta din router bara 1 meter från den solida barriären kan förbättra signalen med upp till 40%.',
    tipElevateRouter: 'Höj routern till brösthöjd. Signaler sprids horisontellt och golvet absorberar mer än du tror.',
    tipReduceObstacles: 'Varje extra vägg halverar signalen. Försök att minska antalet hinder mellan router och enhet.',

    tipFishTank: 'Ett akvarium blockerar Wi-Fi som en betongvägg. Flytta routern eller enheten bort från det.',
    tipMicrowave: 'Mikrovågsugnar stör 2,4 GHz-bandet när de är igång. Använd 5 GHz eller flytta routern längre från köket.',
    labelMove: 'Flytta',
    labelWalls: 'Väggar',
    labelDrywall: 'Gips',
    labelBrick: 'Tegel',
    labelConcrete: 'Betong',
    labelStone: 'Sten',
    labelObjects: 'Objekt',
    labelWood: 'Trä',
    labelMetal: 'Metall',
    labelWindow: 'Fönster',
    labelFridge: 'Kylskåp',
    labelFish: 'Fisk',
    labelMicro: 'Micro',
    labelMirror: 'Spegel',
    labelFurn: 'Möbel',
    labelActions: 'Åtgärder',
    labelUndo: 'Ångra',
    labelAddDevice: '+ Enhet',
    labelClearWalls: 'Rensa väggar',
    labelClearObjects: 'Rensa objekt',
    labelClearAll: 'Rensa alla',
    labelZoomIn: 'Zooma in',
    labelZoomOut: 'Zooma ut',
    labelRouter: 'Router',
    labelAverageSignal: 'Medelsignal',
    labelScaleMeters: '5 m',
    hintText: 'Dra router eller enheter för att flytta dem. Dubbelklicka på väggar eller objekt för att ta bort. Ctrl+Z för att ångra.',
    labelMaxDevices: 'Max 4 enheter',
    labelDevicePrefix: 'Enhet',
    labelPerDevice: 'Per enhet',
    labelDb: 'dB',
  },
};
