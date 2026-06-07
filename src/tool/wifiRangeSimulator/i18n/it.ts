import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulatore-copertura-wifi';
const title = 'Simulatore di Copertura e Ostacoli WiFi';
const description =
  'Disegna la pianta di casa, posiziona muri, porte, mobili ed elettrodomestici, poi trascina il router e il dispositivo per trovare il miglior percorso del segnale. Visualizza in tempo reale la perdita di copertura, il verdetto sullo streaming e consigli di posizionamento per eliminare le zone morte senza acquistare nuovo hardware.';

const faqData = [
  {
    question: 'Perché il segnale WiFi cala in alcune stanze?',
    answer:
      'Il WiFi utilizza onde radio che vengono assorbite, riflesse o bloccate dai materiali fisici. Mattoni pieni, cemento e metallo sono i peggiori, ognuno riduce significativamente la potenza del segnale. Anche acqua e vetro possono riflettere o assorbire parte del segnale.',
  },
  {
    question: 'Quanto influisce un muro di cemento o pietra sul WiFi?',
    answer:
      'Un muro di cemento standard può attenuare un segnale a 2,4 GHz da 10 a 20 decibel. Muri spessi in pietra da 70 a 80 centimetri possono raggiungere 22 decibel o più. Ciò si traduce in una perdita di portata dal 50 al 90 percento circa, a seconda di spessore e densità. A 5 GHz la perdita è ancora maggiore perché le frequenze più alte vengono assorbite più rapidamente dai materiali densi.',
  },
  {
    question: 'Dove devo posizionare il router per la migliore copertura?',
    answer:
      'Centrale, rialzato e aperto. Posiziona il router al centro della casa, ad almeno un metro da muri spessi e oggetti metallici, e sollevalo all\'altezza del petto per una dispersione orizzontale. Evita angoli, armadi e posizioni basse dietro i mobili.',
  },
  {
    question: 'Le porte in vetro possono bloccare il WiFi?',
    answer:
      'Il vetro trasparente ha un impatto minimo, ma le finestre rivestite o con doppi vetri con pellicole metalliche possono riflettere i segnali. Il simulatore tratta il vetro standard come un ostacolo leggero con circa 2 o 3 decibel di perdita.',
  },
];

const howToData = [
  {
    name: 'Identifica il percorso del segnale',
    text: 'Immagina una linea retta tra il router e il dispositivo che ti interessa. Ogni oggetto che incrocia questa linea è importante.',
  },
  {
    name: 'Aggiungi ogni ostacolo',
    text: 'Clicca sui pulsanti dei materiali nel simulatore per aggiungere ogni muro, porta, elettrodomestico o mobile che incrocia il percorso.',
  },
  {
    name: 'Leggi il verdetto',
    text: 'Guarda l\'anello del segnale, l\'animazione delle onde e il dashboard dello streaming aggiornarsi istantaneamente mentre aggiungi o rimuovi oggetti.',
  },
  {
    name: 'Applica il suggerimento contestuale',
    text: 'Segui le schede di posizionamento che appaiono in base alla tua combinazione esatta di ostacoli per migliorare la copertura senza acquistare nuovo hardware.',
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
  inLanguage: 'it',
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
      text: 'Perché il tuo WiFi muore nella stanza accanto',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Il tuo router trasmette onde radio in tutte le direzioni. Queste onde viaggiano facilmente nell\'aria, ma ogni oggetto fisico che incontrano lascia il segno. Alcuni materiali lasciano passare la maggior parte del segnale. Altri lo divorano completamente. Capire quali oggetti in casa tua stanno silenziosamente uccidendo la connessione è il primo passo per risolvere le zone morte senza spendere un solo euro in nuovo hardware.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Perdita cartongesso', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Muro spesso in pietra', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Porta metallica', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Il costo reale di ogni oggetto in casa tua',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Non tutti gli ostacoli sono uguali. Un pannello di cartongesso potrebbe ridurre il segnale di qualche punto percentuale, ma un pilastro di cemento o una porta metallica possono dimezzare la portata effettiva. Ecco cosa affronti veramente quando posizioni il router dietro la TV, accanto al frigo o sul pavimento sotto una mensola metallica.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ostacoli leggeri',
          description: 'Questi oggetti causano una perdita di segnale minima e di solito sono sicuri vicino al percorso del segnale. Non dovresti preoccuparti di una singola finestra o porta di vetro.',
          icon: 'mdi:window-open-variant',
          points: [
            'Porta in vetro: da 2 a 3 dB di perdita',
            'Finestra standard: 2 dB di perdita',
            'Tramezzo in cartongesso: 3 dB di perdita',
            'Porta interna in legno: 4 dB di perdita',
          ],
        },
        {
          title: 'Ostacoli moderati',
          description: 'Questi oggetti creano un notevole calo nella copertura. Uno o due vanno bene, ma accumularne tre o più sullo stesso percorso del segnale inizierà a causare buffering e lag.',
          icon: 'mdi:wardrobe',
          points: [
            'Armadio in legno: 5 dB di perdita',
            'Grande specchio: 6 dB di perdita',
            'Lavatrice: 6 dB di perdita',
            'Forno a microonde: 5 dB di perdita',
          ],
        },
        {
          title: 'Ostacoli pesanti',
          description: 'Questi sono i killer silenziosi delle reti domestiche. Un singolo muro di cemento o una porta metallica possono trasformare un segnale forte in uno debole, e accumularli crea zone morte garantite.',
          icon: 'mdi:wall',
          points: [
            'Muro in mattoni pieni: 8 dB di perdita',
            'Pavimento o soffitto: 10 dB di perdita',
            'Frigorifero: 10 dB di perdita',
            'Acquario: 12 dB di perdita',
          ],
        },
        {
          title: 'Ostacoli estremi',
          description: 'Questi materiali assorbono o riflettono quasi tutta l\'energia radio. Se il percorso del segnale ne incrocia uno, devi spostare il router o il dispositivo. Non c\'è soluzione alternativa.',
          icon: 'mdi:shield',
          points: [
            'Muro spesso in pietra (70-80 cm): 22 dB di perdita',
            'Muro di cemento: 15 dB di perdita',
            'Armadietto metallico: 12 dB di perdita',
            'Porta o cancello metallico: 18 dB di perdita',
            'Vanello ascensore: 20+ dB di perdita',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Come si comportano le diverse frequenze attraverso i muri',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei router moderni trasmette su due bande: 2,4 GHz e 5 GHz. La frequenza più bassa viaggia più lontano e si infila attraverso i muri più facilmente, ma è più lenta e affollata. La frequenza più alta è velocissima ma viene assorbita da ogni ostacolo sul suo cammino.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penetrazione 2,4 GHz',
          description: 'Le frequenze più basse viaggiano più lontano e penetrano meglio i muri. Ideali per lunga distanza ma affollate dalle reti vicine.',
          icon: 'mdi:signal',
          points: [
            'Meglio attraverso mattoni pieni e cemento',
            'Più interferenze dai router vicini',
            'Velocità massime più lente, circa 150 Mbps reali',
            'Meglio per dispositivi smart home e IoT',
          ],
        },
        {
          title: 'Penetrazione 5 GHz',
          description: 'Le frequenze più alte offrono velocità maggiori ma vengono assorbite molto più rapidamente dai materiali da costruzione. Ideali per spazi aperti e dispositivi vicini.',
          icon: 'mdi:signal-5g',
          points: [
            'Male attraverso cemento e metallo',
            'Meno interferenze, canali più puliti',
            'Velocità Gigabit nella stessa stanza',
            'Copertura peggiore, qualità migliore dove arriva',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Killer nascosti: oggetti che non avresti mai sospettato',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle persone dà la colpa ai muri, ma alcuni dei peggiori nemici del WiFi sono oggetti di uso quotidiano. Un acquario è principalmente acqua, e l\'acqua assorbe le onde radio a 2,4 GHz quasi perfettamente. Un grande specchio ha un sottile strato metallico sul retro che riflette il segnale lontano dal dispositivo. Un forno a microonde emette radiazioni a 2,4 GHz, esattamente la stessa frequenza del tuo router, causando interferenze ogni volta che riscaldi qualcosa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La trappola dell\'acquario',
      icon: 'mdi:fish',
      badge: 'Blocco sorpresa',
      html: '<p>Un grande acquario può attenuare il segnale WiFi fino a 12 decibel. È come un muro di cemento spesso. Se il router è da un lato dell\'acquario e la scrivania dall\'altro, l\'acqua fa più danni del muro dietro.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'L\'effetto specchio',
      icon: 'mdi:mirror',
      badge: 'Pericolo riflessione',
      html: '<p>Gli specchi grandi hanno un sottile strato di metallo sul retro progettato per riflettere la luce. Quello stesso strato metallico riflette anche le onde radio. Uno specchio rivolto verso il router può deviare il segnale lontano da dove serve, o creare interferenze multi-percorso che confondono i pacchetti di dati.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'L\'interferenza del microonde',
      icon: 'mdi:microwave',
      badge: 'Disturbo attivo',
      html: '<p>I forni a microonde operano a 2,45 GHz, sovrapponendosi direttamente alla banda WiFi 2,4 GHz. Quando è in funzione, un microonde può cancellare il segnale 2,4 GHz in un raggio da 3 a 5 metri. Se il tuo router supporta solo 2,4 GHz e la cucina è vicina, passa a un router dual-band e usa il 5 GHz per le attività critiche.</p>',
    },
    {
      type: 'title',
      text: 'Stanza per stanza: dove posizionare il router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La posizione ideale del router non è la più comoda. È quella che offre la linea di vista più chiara verso le stanze dove usi realmente Internet. Ecco come ragionare su ogni stanza.',
    },
    {
      type: 'table',
      headers: ['Stanza', 'Rischio', 'Perché è difficile', 'Soluzione'],
      rows: [
        ['Cucina', 'Alto', 'Frigo, microonde, mobili metallici, tubature', 'Posiziona il router fuori dalla cucina, mai dentro.'],
        ['Bagno', 'Alto', 'Specchi, tubature, piastrelle con rete metallica', 'Evita di posizionare il router dietro un muro del bagno.'],
        ['Camera da letto', 'Medio', 'Armadi, muri spessi, letti metallici', 'Solleva il router, libera il percorso sopra i mobili.'],
        ['Soggiorno', 'Basso', 'Di solito aperto, ma attenzione a TV e console', 'Tieni il router visibile, non nascosto dietro la TV.'],
        ['Garage', 'Estremo', 'Porte metalliche, cemento, auto', 'Non aspettarti che un router da interno raggiunga il garage.'],
        ['Giardino / Terrazzo', 'Alto', 'Muri esterni, vetro, distanza', 'Usa un punto di accesso esterno o un nodo mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'La regola del metro e altri trucchi di posizionamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Piccoli spostamenti creano grandi differenze. Non devi ricablare casa. Devi solo capire come si muovono le onde radio e dare loro un percorso libero.',
    },
    {
      type: 'tip',
      title: 'La regola del metro',
      html: '<p>Spostare il router di appena un metro da una barriera di cemento o metallo può recuperare fino al 40 percento della potenza del segnale persa.</p>',
    },
    {
      type: 'tip',
      title: 'Solleva per la copertura',
      html: '<p>Solleva il router all\'altezza del petto su uno scaffale. I segnali si irradiano orizzontalmente dall\'antenna. Metterlo sul pavimento spreca metà della copertura nel terreno.</p>',
    },
    {
      type: 'tip',
      title: 'Tienilo visibile',
      html: '<p>Non nascondere mai il router dentro un armadio, un mobile o dietro la TV. L\'involucro agisce come una gabbia di Faraday, intrappolando il segnale prima che raggiunga la stanza.</p>',
    },
    {
      type: 'tip',
      title: 'Posizionamento antenne',
      html: '<p>Se il router ha antenne esterne, posizionane una in verticale e una in orizzontale. Questo offre una copertura migliore per dispositivi a diverse altezze.</p>',
    },
    {
      type: 'tip',
      title: 'Evita le interferenze',
      html: '<p>Tieni il router ad almeno 1,5 metri da microonde, telefoni cordless e monitor per bambini. Questi dispositivi condividono lo spettro 2,4 GHz e causano interferenze attive.</p>',
    },
    {
      type: 'tip',
      title: 'Vantaggio del piano intermedio',
      html: '<p>Se vivi in una casa a più piani, posiziona il router al piano intermedio. I segnali si propagano male verso l\'alto e il basso attraverso i solai in cemento.</p>',
    },
    {
      type: 'title',
      text: 'Verdetti sullo streaming: cosa significa realmente il tuo segnale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le percentuali sono astratte. Quello che ti interessa davvero è se puoi guardare Netflix, vincere una partita o finire una videochiamata senza blocchi. Ecco cosa significa ogni livello di segnale nel mondo reale.',
    },
    {
      type: 'table',
      headers: ['Segnale', 'Streaming 4K', 'Gaming Online', 'Videochiamate', 'Navigazione'],
      rows: [
        ['da 80% a 100%', 'Perfetto, caricamento istantaneo', 'Bassa latenza, gioco competitivo', 'Cristallino, senza cadute', 'Immediato, senza ritardi'],
        ['da 60% a 79%', 'Buono, buffer occasionale', 'Giocabile, piccoli lag', 'Stabile, raramente pixelato', 'Veloce, nessun problema'],
        ['da 40% a 59%', 'Buffer ogni pochi minuti', 'Avvisi di lag, rubber banding', 'Pixelato, qualche caduta', 'Usabile, caricamenti lenti'],
        ['da 20% a 39%', 'Impossibile, freeze continuo', 'Disconnessioni, ingiocabile', 'Cadute frequenti, inutilizzabile', 'Molto lento, timeout'],
        ['da 0% a 19%', 'Non si avvia', 'Impossibile connettersi', 'Nessuna connessione', 'Inutilizzabile'],
      ],
    },
    {
      type: 'title',
      text: 'Soluzioni rapide prima di comprare qualsiasi cosa',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Checklist di ottimizzazione gratuita',
      items: [
        'Sposta il router al centro della casa, non nell\'angolo.',
        'Sollevalo all\'altezza del petto su uno scaffale o mobile alto.',
        'Tiralo fuori da armadi, mobili e da dietro la TV.',
        'Inclina un\'antenna in verticale e una in orizzontale se possibile.',
        'Usa 5 GHz per i dispositivi vicini e 2,4 GHz per quelli lontani.',
        'Cambia canale WiFi con un\'app scanner per uno meno affollato.',
        'Aggiorna il firmware del router per correggere bug del segnale.',
        'Riavvia il router una volta al mese per pulire le perdite di memoria.',
      ],
    },
    {
      type: 'title',
      text: 'Quando aggiornare l\'hardware',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A volte vince l\'ambiente. Se hai provato tutti i trucchi di posizionamento e soffri ancora di zone morte, è il momento di estendere la rete invece di combattere la fisica.',
    },
    {
      type: 'proscons',
      title: 'WiFi Extender vs Sistema Mesh',
      items: [
        { pro: 'Gli extender sono economici e facili da installare.', con: 'Gli extender creano un secondo nome di rete e dimezzano la velocità.' },
        { pro: 'Gli extender funzionano per una singola zona morta.', con: 'Gli extender hanno bisogno di un segnale esistente forte da amplificare.' },
        { pro: 'I sistemi mesh creano un\'unica rete senza interruzioni.', con: 'I sistemi mesh sono più costosi inizialmente.' },
        { pro: 'Il mesh gestisce più piani e grandi case.', con: 'Il mesh richiede un nodo principale vicino al modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Quando usare il mesh',
      html: '<p>Per case oltre 120 metri quadrati o con spessi muri di cemento, un sistema mesh con almeno due nodi supererà qualsiasi router singolo, per quanto costoso.</p>',
    },
    {
      type: 'title',
      text: 'Capire i decibel in parole semplici',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I decibel sono logaritmici, il che significa che non si comportano come i numeri normali. Ogni 3 dB di perdita dimezza la potenza del segnale. Una perdita di 6 dB significa che rimane solo un quarto della potenza originale. Una perdita di 10 dB significa che sopravvive solo un decimo. Ecco perché un muro di cemento a 15 dB è devastante. Non indebolisce solo il segnale. Lo annienta.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Atenuazione', definition: 'La progressiva perdita di potenza del segnale mentre attraversa un materiale. Numeri più alti significano più segnale perso.' },
        { term: 'dBm', definition: 'Un\'unità di potenza usata per misurare la potenza del segnale WiFi. 0 dBm equivale a un milliwatt. I valori negativi sono normali, con -30 considerato eccellente e -80 appena utilizzabile.' },
        { term: 'Zona morta', definition: 'Un\'area in cui il segnale WiFi è troppo debole per stabilire o mantenere una connessione affidabile.' },
        { term: 'Rete mesh', definition: 'Un sistema di più nodi router che lavorano insieme per coprire una vasta area con un\'unica rete WiFi senza interruzioni.' },
        { term: 'Interferenza multi-percorso', definition: 'Quando le onde radio rimbalzano su muri e oggetti, creando copie multiple ritardate dello stesso segnale che confondono il ricevitore.' },
        { term: 'SSID', definition: 'Il nome della tua rete WiFi. Gli extender spesso creano un secondo SSID, mentre i sistemi mesh mantengono un unico nome su tutti i nodi.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La regola d\'oro del posizionamento del router',
      icon: 'mdi:map-marker-radius',
      badge: 'Consiglio chiave',
      html: '<p>Se il tuo router è attualmente in un angolo, dentro un armadio o sul pavimento, stai buttando via dal 50 al 70 percento della sua portata potenziale prima ancora che il segnale lasci la stanza. L\'aggiornamento più rapido che puoi fare è spostarlo in una posizione aperta, centrale e rialzata. Questo singolo cambiamento risolve spesso più problemi dell\'acquisto di nuove apparecchiature.</p>',
    },
    {
      type: 'summary',
      title: 'Come prevenire le zone morte WiFi',
      items: [
        'Posiziona il router al centro, rialzato e all\'aperto.',
        'Riduci al minimo il numero di muri tra router e dispositivo.',
        'Evita cucine, bagni e garage come posizione del router.',
        'Usa 5 GHz per la velocità nella stessa stanza, 2,4 GHz per la distanza.',
        'Considera il mesh per grandi case o muri esterni spessi.',
        'Riavvia mensilmente e aggiorna il firmware per prestazioni ottimali.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Oggetti domestici che bloccano il WiFi',
    labelAddObstacle: 'Clicca per aggiungere al percorso del segnale',
    labelRemove: 'Rimuovi',
    labelSignalStrength: 'Segnale',
    labelEffectiveRange: 'Portata effettiva',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Verdetto streaming',
    verdictPerfect: 'Perfetto',
    verdictGood: 'Buono',
    verdictFair: 'Discreto',
    verdictPoor: 'Scarso',
    verdictDead: 'Zona morta',
    tipTitle: 'Consiglio di posizionamento',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Gaming Online',
    labelVideoCalls: 'Videochiamate',
    labelBasicBrowsing: 'Navigazione base',
    statusPerfect: 'Perfetto',
    statusGood: 'Buono',
    statusFair: 'Discreto',
    statusPoor: 'Scarso',
    statusImpossible: 'Impossibile',
    statusLowLatency: 'Bassa latenza',
    statusLagWarning: 'Avviso lag',
    statusDisconnect: 'Disconnessione',
    statusStable: 'Stabile',
    statusPixelated: 'Pixelato',
    statusDropped: 'Caduto',
    statusPass: 'OK',
    statusUnusable: 'Inutilizzabile',
    tipMoveRouter: 'Spostare il router di solo 1 metro da quella barriera solida potrebbe migliorare il segnale fino al 40%.',
    tipElevateRouter: 'Solleva il router all\'altezza del petto. I segnali si propagano orizzontalmente e il pavimento assorbe più di quanto pensi.',
    tipReduceObstacles: 'Ogni muro aggiuntivo dimezza il segnale. Cerca di ridurre il numero di ostacoli tra router e dispositivo.',
  },
};
