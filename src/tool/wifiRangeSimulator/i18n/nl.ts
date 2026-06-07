import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'wifi-bereik-simulator';
const title = 'WiFi Bereik en Obstakel Simulator';
const description =
  'Teken de plattegrond van je huis, plaats muren, deuren, meubels en apparaten en sleep je router en apparaat naar de beste signaalroute. Bekijk live het bereikverlies, de streaming-beoordeling en plaatsingstips om dode zones te verhelpen zonder nieuwe hardware te kopen.';

const faqData = [
  {
    question: 'Waarom valt mijn wifi-signaal weg in bepaalde kamers?',
    answer:
      'Wifi maakt gebruik van radiogolven die worden geabsorbeerd, gereflecteerd of geblokkeerd door fysieke materialen. Massief baksteen, beton en metaal zijn de grootste boosdoeners en verminderen de signaalsterkte aanzienlijk. Water en glas kunnen ook delen van het signaal reflecteren of absorberen.',
  },
  {
    question: 'Hoeveel invloed heeft een betonnen of stenen muur op wifi?',
    answer:
      'Een standaard betonnen muur kan een 2,4 GHz-signaal met 10 tot 20 decibel verzwakken. Dikke stenen muren van 70 tot 80 centimeter kunnen 22 decibel of meer halen. Dit vertaalt zich naar ruwweg 50 tot 90 procent bereikverlies, afhankelijk van dikte en dichtheid. Bij 5 GHz is het verlies nog groter omdat hogere frequenties sneller worden geabsorbeerd door dichte materialen.',
  },
  {
    question: 'Waar moet ik mijn router plaatsen voor de beste dekking?',
    answer:
      'Centraal, verhoogd en open. Plaats de router in het midden van je huis, minstens een meter verwijderd van dikke muren en metalen voorwerpen, en breng hem op borsthoogte voor horizontale verspreiding. Vermijd hoeken, kasten en lage posities achter meubels.',
  },
  {
    question: 'Kunnen glazen deuren wifi blokkeren?',
    answer:
      'Helder glas heeft minimale impact, maar gecoate of dubbel glazen ramen met metaalfolies kunnen signalen reflecteren. De simulator behandelt standaard glas als een licht obstakel met ongeveer 2 tot 3 decibel verlies.',
  },
];

const howToData = [
  {
    name: 'Identificeer het signaalpad',
    text: 'Stel je een rechte lijn voor tussen je router en het apparaat dat je belangrijk vindt. Elk object dat deze lijn kruist, is van belang.',
  },
  {
    name: 'Voeg elk obstakel toe',
    text: 'Klik op de materiaalknoppen in de simulator om elke muur, deur, apparaat of meubelstuk toe te voegen dat het pad kruist.',
  },
  {
    name: 'Lees de beoordeling',
    text: 'Zie hoe de signaalring, wave-animatie en het streamingdashboard direct worden bijgewerkt terwijl je objecten toevoegt of verwijdert.',
  },
  {
    name: 'Pas de contextuele tip toe',
    text: 'Volg de plaatsingskaarten die verschijnen op basis van jouw exacte obstakelcombinatie om de dekking te verbeteren zonder nieuwe hardware te kopen.',
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
      text: 'Waarom je wifi doodgaat in de kamer ernaast',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Je router zendt radiogolven in alle richtingen uit. Die golven reizen gemakkelijk door de lucht, maar elk fysiek object dat ze tegenkomen eist zijn tol. Sommige materialen laten het grootste deel van het signaal door. Andere verslinden het volledig. Begrijpen welke objecten in je huis stilletjes je verbinding doden, is de eerste stap om dode zones te repareren zonder een cent uit te geven aan nieuwe hardware.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Gipsplaat verlies', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Dikke stenen muur', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metalen deur', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'De echte kosten van elk object in je huis',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Niet alle obstakels zijn gelijk. Een enkele gipsplaat kan een paar procent van je signaal afsnoepen, maar een betonnen pilaar of een metalen deur kan je effectieve bereik halveren. Dit is waar je echt tegenaan loopt wanneer je je router achter de tv, naast de koelkast of op de vloer onder een metalen plank plaatst.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lichte obstakels',
          description: 'Deze objecten veroorzaken minimaal signaalverlies en zijn meestal veilig in de buurt van het signaalpad. Je hoeft je geen zorgen te maken over een enkel raam of glazen deur.',
          icon: 'mdi:window-open-variant',
          points: [
            'Glazen deur: 2 tot 3 dB verlies',
            'Standaard raam: 2 dB verlies',
            'Gipsplaat wand: 3 dB verlies',
            'Houten binnendeur: 4 dB verlies',
          ],
        },
        {
          title: 'Matige obstakels',
          description: 'Deze objecten zorgen voor een merkbare deuk in je dekking. Een of twee is prima, maar drie of meer op hetzelfde signaalpad stapelen zal bufferen en vertraging veroorzaken.',
          icon: 'mdi:wardrobe',
          points: [
            'Houten kledingkast: 5 dB verlies',
            'Grote spiegel: 6 dB verlies',
            'Wasmachine: 6 dB verlies',
            'Magnetron: 5 dB verlies',
          ],
        },
        {
          title: 'Zware obstakels',
          description: 'Dit zijn de stille moordenaars van thuisnetwerken. Een enkele betonnen muur of metalen deur kan een sterk signaal in een zwak signaal veranderen, en ze stapelen creëert gegarandeerde dode zones.',
          icon: 'mdi:wall',
          points: [
            'Massieve bakstenen muur: 8 dB verlies',
            'Vloer of plafond: 10 dB verlies',
            'Koelkast: 10 dB verlies',
            'Aquarium: 12 dB verlies',
          ],
        },
        {
          title: 'Extreme obstakels',
          description: 'Deze materialen absorberen of reflecteren bijna alle radio-energie. Als je signaalpad een van deze kruist, moet je de router of het apparaat verplaatsen. Er is geen oplossing.',
          icon: 'mdi:shield',
          points: [
            'Dikke stenen muur (70-80 cm): 22 dB verlies',
            'Betonnen muur: 15 dB verlies',
            'Metalen kast: 12 dB verlies',
            'Metalen deur of poort: 18 dB verlies',
            'Liftkoker: 20+ dB verlies',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Hoe verschillende frequenties door muren gaan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste moderne routers zenden uit op twee banden: 2,4 GHz en 5 GHz. De lagere frequentie reist verder en glipt gemakkelijker door muren, maar is langzamer en drukker. De hogere frequentie is razendsnel maar wordt geabsorbeerd door elk obstakel op zijn pad.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2,4 GHz penetratie',
          description: 'Lagere frequenties reizen verder en dringen beter door muren. Ideaal voor lange afstanden maar druk met naburige netwerken.',
          icon: 'mdi:signal',
          points: [
            'Beter door massief baksteen en beton',
            'Meer interferentie van buren hun routers',
            'Lagere topsnelheden, ongeveer 150 Mbps in de praktijk',
            'Beter voor smart home-apparaten en IoT',
          ],
        },
        {
          title: '5 GHz penetratie',
          description: 'Hogere frequenties bieden hogere snelheden maar worden veel sneller geabsorbeerd door bouwmaterialen. Het beste voor open ruimtes en nabije apparaten.',
          icon: 'mdi:signal-5g',
          points: [
            'Slecht door beton en metaal',
            'Minder interferentie, schonere kanalen',
            'Gigabit-snelheden in dezelfde kamer',
            'Slechter bereik, betere kwaliteit waar het komt',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Verborgen moordenaars: objecten die je nooit hebt vermoed',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De meeste mensen geven muren de schuld, maar sommige van de ergste wifi-moordenaars zijn alledaagse objecten. Een aquarium bestaat voornamelijk uit water en water absorbeert 2,4 GHz radiogolven bijna perfect. Een grote spiegel heeft een dunne metalen achterkant die het signaal van je apparaat wegkaatst. Een magnetron straalt uit op 2,4 GHz, exact dezelfde frequentie als je router, wat elke keer interferentie veroorzaakt wanneer je soep opwarmt.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'De aquariumval',
      icon: 'mdi:fish',
      badge: 'Verrassingsblokkeerder',
      html: '<p>Een groot aquarium kan je wifi-signaal tot 12 decibel verzwakken. Dat is hetzelfde als een dikke betonnen muur. Als je router aan de ene kant van het aquarium staat en je bureau aan de andere, doet het water meer schade dan de muur erachter.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Het spiegeleffect',
      icon: 'mdi:mirror',
      badge: 'Reflectiegevaar',
      html: '<p>Grote spiegels hebben een dunne metaallaag aan de achterkant die is ontworpen om licht te reflecteren. Diezelfde metaallaag reflecteert ook radiogolven. Een spiegel die naar je router wijst, kan het signaal wegkaatsen van waar je het nodig hebt, of verwarrende multipath-interferentie creëren die datapakketten door elkaar gooit.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'De magnetroninterferentie',
      icon: 'mdi:microwave',
      badge: 'Actieve stoorzender',
      html: '<p>Magnetrons werken op 2,45 GHz en overlappen direct met de 2,4 GHz wifi-band. Tijdens gebruik kan een magnetron het 2,4 GHz-signaal binnen een straal van 3 tot 5 meter volledig uitschakelen. Als je router alleen 2,4 GHz ondersteunt en je keuken dichtbij is, schakel dan over naar een dual-band router en gebruik 5 GHz voor kritieke taken.</p>',
    },
    {
      type: 'title',
      text: 'Kamer voor kamer: waar je router plaatsen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De ideale routerlocatie is niet de handigste. Het is degene die het duidelijkste zicht biedt op de kamers waar je daadwerkelijk internet gebruikt. Zo moet je over elke kamer denken.',
    },
    {
      type: 'table',
      headers: ['Kamer', 'Risico', 'Waarom moeilijk', 'Oplossing'],
      rows: [
        ['Keuken', 'Hoog', 'Koelkast, magnetron, metalen kasten, waterleidingen', 'Plaats de router buiten de keuken, nooit erin.'],
        ['Badkamer', 'Hoog', 'Spiegels, waterleidingen, tegels met metaalgaas', 'Vermijd het plaatsen van de router achter een badkamermuur.'],
        ['Slaapkamer', 'Middel', 'Kasten, dikke muren, metalen bedframes', 'Verhoog de router, maak pad vrij boven meubels.'],
        ['Woonkamer', 'Laag', 'Meestal open, maar let op tv\'s en consoles', 'Houd de router zichtbaar, niet verborgen achter de tv.'],
        ['Garage', 'Extreem', 'Metalen deuren, beton, auto\'s', 'Verwacht niet dat een binnenrouter de garage bereikt.'],
        ['Tuin / Terras', 'Hoog', 'Buitenmuren, glas, afstand', 'Gebruik een buitenaccesspoint of mesh-node.'],
      ],
    },
    {
      type: 'title',
      text: 'De één-meterregel en andere plaatsingstrucs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kleine verplaatsingen maken grote verschillen. Je hoeft je huis niet opnieuw te bedraden. Je moet alleen begrijpen hoe radiogolven bewegen en ze een vrij pad geven.',
    },
    {
      type: 'tip',
      title: 'De één meterregel',
      html: '<p>Je router slechts één meter van een betonnen of metalen barrière verplaatsen, kan tot 40 procent van de verloren signaalsterkte terugwinnen.</p>',
    },
    {
      type: 'tip',
      title: 'Verhoog voor dekking',
      html: '<p>Plaats de router op borsthoogte op een plank. Signalen stralen horizontaal uit vanaf de antenne. Door hem op de vloer te plaatsen, verspil je de helft van je dekking aan de grond.</p>',
    },
    {
      type: 'tip',
      title: 'Houd hem zichtbaar',
      html: '<p>Verberg de router nooit in een kast, kledingkast of achter de tv. De behuizing werkt als een kooi van Faraday en vangt het signaal op voordat het je kamer bereikt.</p>',
    },
    {
      type: 'tip',
      title: 'Antenne positionering',
      html: '<p>Als je router externe antennes heeft, plaats er dan een verticaal en een horizontaal. Dit geeft betere dekking voor apparaten op verschillende hoogtes.</p>',
    },
    {
      type: 'tip',
      title: 'Vermijd interferentie',
      html: '<p>Houd de router minstens 1,5 meter verwijderd van magnetrons, draadloze telefoons en babyfoons. Deze apparaten delen het 2,4 GHz-spectrum en veroorzaken actieve interferentie.</p>',
    },
    {
      type: 'tip',
      title: 'Middelste verdieping voordeel',
      html: '<p>Als je in een huis met meerdere verdiepingen woont, plaats de router dan op de middelste verdieping. Signalen verspreiden zich slecht naar boven en beneden door betonnen vloeren.</p>',
    },
    {
      type: 'title',
      text: 'Streamingbeoordelingen: wat je signaal echt betekent',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Percentages zijn abstract. Waar je echt om geeft, is of je Netflix kunt kijken, een wedstrijd kunt winnen of een videogesprek kunt voeren zonder haperingen. Dit is wat elk signaalniveau in de echte wereld betekent.',
    },
    {
      type: 'table',
      headers: ['Signaal', '4K-streaming', 'Online gamen', 'Videogesprekken', 'Surfen'],
      rows: [
        ['80% tot 100%', 'Perfect, direct laden', 'Lage latentie, competitief', 'Haarscherp, geen uitval', 'Direct, geen vertraging'],
        ['60% tot 79%', 'Goed, af en toe bufferen', 'Speelbaar, kleine lags', 'Stabiel, zelden pixelig', 'Snel, geen problemen'],
        ['40% tot 59%', 'Bufferen om de paar minuten', 'Lag-waarschuwingen, rubber banding', 'Pixelig, wat uitval', 'Bruikbaar, langzamer laden'],
        ['20% tot 39%', 'Onmogelijk, constant vastlopen', 'Verbreekt, onbespeelbaar', 'Vaak uitval, onbruikbaar', 'Erg traag, time-outs'],
        ['0% tot 19%', 'Start niet', 'Kan geen verbinding maken', 'Geen verbinding', 'Onbruikbaar'],
      ],
    },
    {
      type: 'title',
      text: 'Snelle oplossingen voordat je iets koopt',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Gratis optimalisatie checklist',
      items: [
        'Verplaats de router naar het midden van je huis, niet de hoek.',
        'Breng hem op borsthoogte op een plank of hoge meubel.',
        'Haal hem uit kasten en van achter de tv.',
        'Zet indien mogelijk een antenne verticaal en een horizontaal.',
        'Gebruik 5 GHz voor nabije apparaten en 2,4 GHz voor verre.',
        'Wissel van wifi-kanaal naar een minder drukke met een scanner-app.',
        'Werk de routerfirmware bij om bekende signaalfouten te verhelpen.',
        'Start de router een keer per maand opnieuw op om geheugenlekken te wissen.',
      ],
    },
    {
      type: 'title',
      text: 'Wanneer je hardware moet upgraden',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Soms wint de omgeving. Als je alle plaatsingstrucs hebt geprobeerd en nog steeds last hebt van dode zones, is het tijd om het netwerk uit te breiden in plaats van tegen de natuurkunde te vechten.',
    },
    {
      type: 'proscons',
      title: 'Wifi versterker vs Mesh systeem',
      items: [
        { pro: 'Versterkers zijn goedkoop en eenvoudig te installeren.', con: 'Versterkers creëren een tweede netwerknaam en halveren de snelheid.' },
        { pro: 'Versterkers werken voor een enkele dode zone.', con: 'Versterkers hebben een sterk bestaand signaal nodig om te versterken.' },
        { pro: 'Mesh-systemen creëren een naadloos netwerk.', con: 'Mesh-systemen zijn duurder in aanschaf.' },
        { pro: 'Mesh werkt voor meerdere verdiepingen en grote huizen.', con: 'Mesh heeft een hoofdknooppunt nodig bij de modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Wanneer mesh te gebruiken',
      html: '<p>Voor huizen groter dan 120 vierkante meter of met dikke betonnen muren, zal een mesh-systeem met ten minste twee nodes elke afzonderlijke router overtreffen, hoe duur ook.</p>',
    },
    {
      type: 'title',
      text: 'Decibellen in eenvoudig Nederlands',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Decibellen zijn logaritmisch, wat betekent dat ze zich niet gedragen zoals normale getallen. Elke 3 dB verlies halveert je signaalsterkte. 6 dB verlies betekent dat slechts een kwart van de oorspronkelijke sterkte overblijft. 10 dB verlies betekent dat slechts een tiende overleeft. Daarom is een betonnen muur van 15 dB verwoestend. Het verzwakt het signaal niet alleen. Het vernietigt het.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Verzwakking', definition: 'Het geleidelijke verlies van signaalsterkte bij het passeren van een materiaal. Hogere getallen betekenen meer signaalverlies.' },
        { term: 'dBm', definition: 'Een eenheid van vermogen gebruikt om wifi-signaalsterkte te meten. 0 dBm is één milliwatt. Negatieve waarden zijn normaal, waarbij -30 uitstekend is en -80 nauwelijks bruikbaar.' },
        { term: 'Dode zone', definition: 'Een gebied waar het wifi-signaal te zwak is om een betrouwbare verbinding op te zetten of te onderhouden.' },
        { term: 'Mesh-netwerk', definition: 'Een systeem van meerdere routerknooppunten die samenwerken om een groot gebied te bedekken met een enkel naadloos wifi-netwerk.' },
        { term: 'Multipath-interferentie', definition: 'Wanneer radiogolven weerkaatsen tegen muren en objecten, waardoor meerdere vertraagde kopieën van hetzelfde signaal ontstaan die de ontvanger in de war brengen.' },
        { term: 'SSID', definition: 'De naam van je wifi-netwerk. Versterkers maken vaak een tweede SSID, terwijl mesh-systemen één naam behouden op alle knooppunten.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'De gouden regel van routerplaatsing',
      icon: 'mdi:map-marker-radius',
      badge: 'Belangrijke tip',
      html: '<p>Als je router zich momenteel in een hoek, in een kast of op de vloer bevindt, gooi je 50 tot 70 procent van zijn potentiële bereik weg voordat het signaal de kamer überhaupt verlaat. De snelste upgrade die je kunt doen, is hem verplaatsen naar een open, centrale, verhoogde locatie. Die ene verandering lost vaak meer problemen op dan het kopen van nieuwe apparatuur.</p>',
    },
    {
      type: 'summary',
      title: 'Hoe voorkom je wifi dode zones',
      items: [
        'Plaats de router centraal, verhoogd en in de open ruimte.',
        'Minimaliseer het aantal muren tussen router en apparaat.',
        'Vermijd keukens, badkamers en garages als routerlocatie.',
        'Gebruik 5 GHz voor snelheid in dezelfde kamer, 2,4 GHz voor afstand.',
        'Overweeg mesh voor grote huizen of dikke buitenmuren.',
        'Start maandelijks opnieuw op en werk firmware bij voor topprestaties.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Huishoudelijke objecten die wifi blokkeren',
    labelAddObstacle: 'Klik om toe te voegen aan het signaalpad',
    labelRemove: 'Verwijderen',
    labelSignalStrength: 'Signaal',
    labelEffectiveRange: 'Effectief bereik',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Streaming-beoordeling',
    verdictPerfect: 'Perfect',
    verdictGood: 'Goed',
    verdictFair: 'Redelijk',
    verdictPoor: 'Slecht',
    verdictDead: 'Dode zone',
    tipTitle: 'Plaatsingstip',
    label4kStreaming: '4K-streaming',
    labelOnlineGaming: 'Online gamen',
    labelVideoCalls: 'Videogesprekken',
    labelBasicBrowsing: 'Basis surfen',
    statusPerfect: 'Perfect',
    statusGood: 'Goed',
    statusFair: 'Redelijk',
    statusPoor: 'Slecht',
    statusImpossible: 'Onmogelijk',
    statusLowLatency: 'Lage latentie',
    statusLagWarning: 'Lag-waarschuwing',
    statusDisconnect: 'Verbinding verbroken',
    statusStable: 'Stabiel',
    statusPixelated: 'Pixelig',
    statusDropped: 'Onderbroken',
    statusPass: 'Geslaagd',
    statusUnusable: 'Onbruikbaar',
    tipMoveRouter: 'Je router slechts 1 meter van die massieve barrière verplaatsen kan het signaal tot 40% verbeteren.',
    tipElevateRouter: 'Plaats de router op borsthoogte. Signalen verspreiden zich horizontaal en de vloer absorbeert meer dan je denkt.',
    tipReduceObstacles: 'Elke extra muur halveert het signaal. Probeer het aantal obstakels tussen router en apparaat te verminderen.',
  },
};
