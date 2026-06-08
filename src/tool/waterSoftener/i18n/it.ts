import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-addolcitore';
const title = 'Ottimizzatore di Addolcitore Acqua Domestica e Consumo di Sale';
const description =
  'Analizza il livello di durezza dell\'acqua, calcola le impostazioni ottimali dell\'addolcitore e stima il consumo annuo di sale. Visualizza previsioni di accumulo di calcare, tempistiche di ricarica del sale e stime della durata degli elettrodomestici in uno strumento interattivo.';

const faqData = [
  {
    question: 'Che cos\'è la durezza dell\'acqua?',
    answer:
      'La durezza dell\'acqua è la concentrazione di minerali di calcio e magnesio disciolti nell\'acqua del rubinetto. Si misura in grani per gallone o gradi francesi. L\'acqua dura causa l\'accumulo di calcare nelle tubature, riduce l\'efficienza del riscaldamento e accorcia la vita degli elettrodomestici.',
  },
  {
    question: 'Come funziona un addolcitore d\'acqua?',
    answer:
      'Un addolcitore d\'acqua utilizza perline di resina a scambio ionico per sostituire gli ioni di calcio e magnesio con ioni di sodio. Quando la resina si satura, il sistema si rigenera sciacquando una soluzione salina attraverso il serbatoio, ripristinando le perline e inviando i minerali duri nello scarico.',
  },
  {
    question: 'Quanto sale usa un addolcitore all\'anno?',
    answer:
      'Una tipica famiglia di quattro persone con acqua moderatamente dura usa tra 80 e 120 chilogrammi di sale all\'anno. L\'acqua molto dura o famiglie più numerose possono superare i 200 chilogrammi. Gli addolcitori moderni ad alta efficienza usano circa il 30 per cento in meno di sale rispetto ai modelli più vecchi.',
  },
  {
    question: 'Quanto spesso devo rabboccare il serbatoio del sale?',
    answer:
      'La maggior parte dei serbatoi di salamoia necessita di rabbocco ogni 4 o 8 settimane. Controllate il livello del sale mensilmente. Se il serbatoio è pieno meno di un terzo, aggiungete un nuovo sacco da 25 chilogrammi. Non lasciate mai che il sale si esaurisca completamente o la resina si indurirà di nuovo e perderà efficacia.',
  },
  {
    question: 'L\'acqua dura danneggia davvero gli elettrodomestici?',
    answer:
      'Sì. I depositi di calcare sui elementi riscaldanti li costringono a lavorare di più, aumentando le bollette energetiche e causando guasti prematuri. Uno scaldabagno in una zona con acqua molto dura può perdere fino al 45 per cento della sua durata attesa. Anche lavatrici e lavastoviglie soffrono di valvole intasate e cestelli incrostanti.',
  },
  {
    question: 'Posso bere acqua addolcita?',
    answer:
      'L\'acqua addolcita è sicura per la maggior parte delle persone. L\'aumento di sodio è piccolo, all\'incirca equivalente a una fetta di pane al giorno. Tuttavia, le persone con diete rigorosamente povere di sodio potrebbero preferire un rubinetto separato non addolcito per bere o scegliere un sale per addolcitore a base di potassio.',
  },
];

const howToData = [
  {
    name: 'Inserisci la durezza dell\'acqua',
    text: 'Digita il valore di durezza dalla tua relazione sulla qualità dell\'acqua o dalla striscia reattiva. Scegli grani per gallone o gradi francesi dal selettore delle unità.',
  },
  {
    name: 'Imposta la dimensione del nucleo familiare',
    text: 'Seleziona il numero di persone che vivono in casa tua. Più occupanti significano maggiore consumo di acqua e esaurimento più rapido del sale.',
  },
  {
    name: 'Scegli la capacità dell\'addolcitore',
    text: 'Inserisci la capacità in grani del serbatoio di resina del tuo addolcitore. Questa è solitamente stampata sulla valvola di controllo o sul manuale utente. I valori comuni sono 24.000 o 32.000 grani.',
  },
  {
    name: 'Verifica la categoria di durezza',
    text: 'Leggi la scala interattiva di durezza per capire se la tua acqua è morbida, moderatamente dura o estremamente dura.',
  },
  {
    name: 'Controlla la previsione del sale',
    text: 'Guarda il simulatore di pila di sacchi di sale per vedere quanti sacchi da 25 chilogrammi ti serviranno all\'anno e quando è previsto il prossimo rabbocco.',
  },
  {
    name: 'Ispeziona l\'impatto sui elettrodomestici',
    text: 'Confronta la durata base della tua lavatrice, scaldabagno e macchina del caffè con la loro durata stimata con la tua attuale acqua non trattata.',
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
      text: 'Il costo invisibile dell\'acqua dura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'acqua dura è uno dei problemi nascosti più costosi in una casa. Ogni volta che aprite il rubinetto, minerali disciolti scorrono attraverso le tubature e gli elettrodomestici. Nel corso di mesi e anni questi minerali cristallizzano in calcare, una crosta bianca e dura che ostruisce gli elementi riscaldanti, riduce le portate e distrugge le guarnizioni in gomma. Il risultato è bollette energetiche più alte, vita utile degli elettrodomestici più breve e frequenti chiamate di manutenzione. Un addolcitore d\'acqua elimina questo danno alla fonte.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Consumo medio annuo di sale', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Durata base lavatrice', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm calcare per GPG/anno', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perché il calcare è così distruttivo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il calcare non è solo una macchia cosmetica sul bollitore. All\'interno di uno scaldabagno forma uno strato isolante sull\'elemento riscaldante. Per ogni millimetro di calcare, l\'efficienza del trasferimento energetico diminuisce fino al 10 per cento. Ciò significa che uno strato di 3 millimetri può aumentare la bolletta del riscaldamento dell\'acqua di quasi il 30 per cento. Nelle lavatrici il calcare blocca l\'attivazione del detersivo, quindi usate più polvere per ottenere risultati peggiori. Nelle macchine del caffè rovina il termostato e produce estrazione amara e irregolare.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Acqua dura non trattata',
          description: 'I minerali si depositano liberamente in tutto l\'impianto idraulico e in ogni elettrodomestico collegato.',
          icon: 'mdi:alert',
          points: ['Rapido accumulo di calcare in scaldabagni e caldaie', 'Aumento del consumo di detersivo e sapone', 'Durata degli elettrodomestici ridotta del 30 al 45 per cento', 'Bollette energetiche più alte per l\'effetto isolante del calcare'],
        },
        {
          title: 'Acqua addolcita',
          description: 'Il calcio e il magnesio vengono rimossi al punto d\'ingresso prima di raggiungere rubinetti e elettrodomestici.',
          icon: 'mdi:check-circle',
          points: ['Zero deposizione di calcare sugli elementi riscaldanti', 'Dosi normali di detersivo producono risultati migliori', 'Gli elettrodomestici raggiungono la loro piena durata di vita progettuale', 'Minore consumo energetico per il riscaldamento dell\'acqua'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Test rapido per acqua dura',
      icon: 'mdi:clipboard-check',
      badge: 'Azione',
      html: '<p style="margin:0">Riempite una bottiglia trasparente con acqua del rubinetto e aggiungete alcune gocce di sapone liquido. Agitate vigorosamente. Se l\'acqua rimane torbida e produce pochissima schiuma, la vostra acqua è dura. Acqua cristallina con schiuma densa e stabile indica acqua morbida. Per una misurazione precisa utilizzate una striscia reattiva per la durezza totale o richiedete un rapporto al vostro fornitore di acqua.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionare correttamente la scorta di sale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Avere esaurito il sale è il modo più veloce per rovinare un addolcitore. Quando il serbatoio di salamoia si svuota, il letto di resina si indurisce entro pochi giorni e il sistema smette di proteggere la vostra casa. Utilizzate questo calcolatore per prevedere esattamente quanti sacchi da 25 chilogrammi vi servono all\'anno. Se il risultato è superiore a 10 sacchi, considerate l\'aggiornamento a un serbatoio di resina più grande o a una valvola ad alta efficienza che usa meno sale per ciclo di rigenerazione.',
    },
    {
      type: 'summary',
      title: 'Come proteggere la casa dall\'acqua dura',
      items: [
        'Utilizzate questo calcolatore per trovare la vostra categoria esatta di durezza dell\'acqua e i fabbisogni di sale.',
        'Installate un addolcitore d\'acqua correttamente dimensionato al punto di ingresso principale dell\'alimentazione.',
        'Rabboccate il serbatoio di salamoia prima che scenda al di sotto di un terzo.',
        'Utilizzate pellet di sale evaporato ad alta purezza per le migliori prestazioni della resina.',
        'Manutenete la valvola e il letto di resina ogni 3 o 5 anni.',
        'Monitorate le bollette energetiche degli elettrodomestici per incrementi improvvisi che potrebbero segnalare accumulo di calcare.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Durezza dell\'acqua',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Dimensione nucleo familiare',
    unitPeople: 'persone',
    labelSoftenerCapacity: 'Capacità dell\'addolcitore',
    unitGrains: 'grani',
    hardnessSoft: 'Morbida',
    hardnessSlightly: 'Leggermente dura',
    hardnessModerate: 'Moderatamente dura',
    hardnessHard: 'Dura',
    hardnessVery: 'Molto dura',
    hardnessExtreme: 'Estremamente dura',
    scaleTitle: 'Velocità di accumulo di calcare',
    scaleUnitMetric: 'mm/anno',
    scaleUnitImperial: 'in/anno',
    saltTitle: 'Previsione annuale di sale',
    saltAnnual: 'Sale annuale',
    saltBags: 'Sacchi all\'anno',
    saltDaysPerBag: 'Giorni per sacco',
    saltWeeksPerBag: 'Settimane per sacco',
    applianceTitle: 'Durata degli elettrodomestici',
    applianceWasher: 'Lavatrice',
    applianceHeater: 'Scaldabagno',
    applianceCoffee: 'Macchina del caffè',
    applianceBaseline: 'Con addolcitore',
    applianceWithHardness: 'Con acqua dura',
    applianceSaved: 'anni',
    badgeSaved: 'Esteso di',
    labelUnitSystem: 'Unità',
    btnMetric: 'Metrico',
    btnImperial: 'Imperiale',
  },
};
