import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calcolatore-umidita';
const title = 'Calcolatore di umidità e stima del tempo di funzionamento del deumidificatore';
const description =
  'Calcola quanta acqua il tuo deumidificatore deve estrarre per portare una stanza umida a un livello di umidità sano. Visualizza il tempo di funzionamento stimato, gli avvisi di rischio di muffa e le zone di comfort in un unico strumento interattivo.';

const faqData = [
  {
    question: 'Quanto tempo dovrebbe funzionare un deumidificatore al giorno?',
    answer:
      'In una stanza moderatamente umida, un deumidificatore domestico standard di solito deve funzionare tra 8 e 12 ore al giorno per mantenere il 50 per cento di umidità relativa. In condizioni molto umide o dopo un danno da acqua, può essere necessario un funzionamento continuo per 24 o 48 ore per raggiungere un livello di essiccazione di base.',
  },
  {
    question: 'Quale livello di umidità interna previene la muffa?',
    answer:
      'La crescita della muffa è inibita quando l\'umidità relativa interna è mantenuta al di sotto del 60 per cento. La zona di comfort ideale per la salute umana e la conservazione degli edifici è tra il 40 e il 50 per cento di umidità relativa. Livelli superiori al 70 per cento creano un ambiente ad alto rischio per le spore di muffa affinché germinino entro 24 o 48 ore.',
  },
  {
    question: 'Quanta acqua può trattenere l\'aria?',
    answer:
      'La quantità di vapore acqueo che l\'aria può trattenere dipende dalla temperatura. A 20 gradi Celsius, l\'aria satura contiene circa 17 grammi di acqua per metro cubo. A 25 gradi Celsius questo sale a circa 23 grammi per metro cubo. Una stanza di 30 metri quadrati a 25 gradi Celsius e 70 per cento di umidità contiene circa 8 litri di acqua invisibile nell\'aria.',
  },
  {
    question: 'La temperatura influenza l\'efficienza del deumidificatore?',
    answer:
      'Sì. I deumidificatori a compressore funzionano meglio al di sopra dei 18 gradi Celsius. Al di sotto dei 15 gradi Celsius le loro prestazioni calano perché le serpentine dell\'evaporatore possono ghiacciarsi. I deumidificatori ad assorbimento sono più adatti per spazi freddi come garage o cantine perché utilizzano un processo di essiccazione chimica invece della condensa.',
  },
  {
    question: 'Che capacità deve avere il mio deumidificatore?',
    answer:
      'Per una stanza moderatamente umida fino a 50 metri quadrati, un\'unità da 10 o 12 litri al giorno è solitamente sufficiente. Per stanze molto umide o spazi superiori a 50 metri quadrati, scegliete un modello da 20 litri al giorno. Dopo un allagamento o un danno grave da umidità, un\'unità industriale da 30 litri al giorno ripristinerà le condizioni più rapidamente.',
  },
  {
    question: 'Un deumidificatore può asciugare i panni?',
    answer:
      'Sì. Un deumidificatore con modalità bucato può asciugare i vestiti al chiuso in modo efficiente estraendo umidità dall\'aria circostante. Utilizza meno energia di un\'asciugatrice e previene la condensa su finestre e pareti. Aspettatevi tempi di asciugatura simili all\'essiccazione all\'aperto in tempo caldo.',
  },
];

const howToData = [
  {
    name: 'Inserire la dimensione della stanza',
    text: 'Inserite la superficie del pavimento della stanza in metri quadrati. Il calcolatore assume un\'altezza standard del soffitto di 2,5 metri per stimare il volume totale d\'aria.',
  },
  {
    name: 'Impostare la temperatura',
    text: 'Inserite la temperatura attuale della stanza in gradi Celsius. L\'aria più calda può contenere più umidità, quindi la temperatura influenza direttamente quanta acqua deve essere rimossa.',
  },
  {
    name: 'Selezionare l\'umidità attuale',
    text: 'Utilizzate la manopola del comfort o l\'input numerico per impostare la percentuale di umidità relativa attuale. I valori sopra il 60 per cento sono evidenziati in toni di avvertimento.',
  },
  {
    name: 'Scegliere l\'umidità desiderata',
    text: 'Impostate l\'umidità relativa desiderata. Il 50 per cento è consigliato per il comfort e la prevenzione della muffa. Il 40 per cento è ideale per chi soffre di allergie.',
  },
  {
    name: 'Inserire la capacità del deumidificatore',
    text: 'Inserite la capacità di estrazione della vostra macchina in litri al giorno. Questa è solitamente indicata sull\'etichetta anteriore o nel manuale d\'uso.',
  },
  {
    name: 'Rivedere i risultati',
    text: 'Leggete la simulazione del serbatoio di estrazione dell\'acqua, la stima del tempo di funzionamento e il banner di rischio di muffa per decidere quanto tempo far funzionare l\'apparecchio.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'L\'acqua nascosta nei tuoi muri',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte dei proprietari di casa non si rende mai conto che l\'aria umida non è solo scomoda, è costosa e pericolosa. Una singola stanza umida può contenere diversi litri di vapore acqueo invisibile. Con il tempo questa umidità si condensa sulle superfici fredde, alimenta le colonie di muffa e degrada l\'intonaco, la vernice e il legno. Capire esattamente quanta acqua deve essere rimossa e quanto tempo ci vuole è il primo passo per proteggere la vostra casa e la vostra salute.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Umidità interna ideale', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Tempo di funzionamento medio giornaliero', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Soglia di rischio di muffa', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perché l\'umidità relativa è importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'umidità relativa non è la quantità di acqua nell\'aria, è la percentuale di acqua che l\'aria sta trattenendo rispetto al massimo che potrebbe trattenere a quella temperatura. L\'aria calda è come una spugna più grande. A 30 gradi Celsius, l\'aria può trattenere quasi il doppio dell\'umidità rispetto a 15 gradi Celsius. Per questo una stanza può sembrare appiccicosa anche dopo aver aperto le finestre. L\'umidità è ancora lì, solo meno visibile.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Umidità alta',
          description: 'Sopra il 60 per cento di umidità relativa. Rischio di muffa, acari della polvere e danni da condensa.',
          icon: 'mdi:alert',
          points: ['Condensa su finestre e pareti', 'Odori di muffa e crescita microbica', 'Aumento dell\'irritazione respiratoria', 'Bollette di riscaldamento più alte a causa della conducibilità termica dell\'aria umida'],
        },
        {
          title: 'Umidità ottimale',
          description: 'Tra il 40 e il 50 per cento di umidità relativa. Confortevole, salubre ed energeticamente efficiente.',
          icon: 'mdi:check-circle',
          points: ['Nessuna condensa su superfici fredde', 'Le spore di muffa rimangono inattive', 'Comfort della pelle e delle vie respiratorie', 'Preservazione di mobili e legno'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Controllo rapido dell\'umidità',
      icon: 'mdi:clipboard-check',
      badge: 'Azione',
      html: '<p style="margin:0">Controllate le finestre per la condensa ogni mattina. Se le gocce appaiono regolarmente, la vostra umidità è troppo alta. Fate funzionare un deumidificatore per 12 ore al giorno finché la condensa non si ferma. Spostate l\'unità nella stanza più umida, solitamente la cucina, il bagno o la cantina. Svuotate il serbatoio ogni giorno e pulite il filtro ogni due settimane.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionare correttamente il deumidificatore',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un errore comune è acquistare un deumidificatore troppo piccolo per lo spazio. Un\'unità da 10 litri al giorno in una cantina umida di 60 metri quadrati funzionerà continuamente senza mai raggiungere l\'umidità obiettivo. Usate questo calcolatore per vedere il volume di estrazione esatto richiesto dalla vostra stanza. Se la stima del tempo di funzionamento supera le 20 ore al giorno, avete bisogno di un\'unità più grande o di una migliore ventilazione.',
    },
    {
      type: 'summary',
      title: 'Come mantenere la vostra casa asciutta',
      items: [
        'Usate questo calcolatore per determinare il volume esatto di estrazione dell\'acqua necessario per ogni stanza.',
        'Mantenete l\'umidità relativa interna tra il 40 e il 50 per cento per salute e comfort.',
        'Fate funzionare il deumidificatore finché il banner di rischio di muffa non diventa verde.',
        'Svuotate il serbatoio d\'acqua prima che si riempia per evitare lo spegnimento automatico.',
        'Pulite regolarmente i filtri per mantenere il flusso d\'aria e i tassi di estrazione al massimo.',
        'Migliorate la ventilazione della stanza insieme alla deumidificazione per risultati più rapidi.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Dimensione stanza',
    unitM2: 'm2',
    labelTemperature: 'Temperatura',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Umidità attuale',
    labelTargetHumidity: 'Umidità desiderata',
    labelCapacity: 'Capacità deumidificatore',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Zona di comfort',
    comfortCurrent: 'Attuale',
    comfortTarget: 'Obiettivo',
    tankTitle: 'Acqua nell\'aria',
    tankLiters: 'litri',
    runtimeTitle: 'Tempo di funzionamento stimato',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Rischio di muffa',
    moldRiskHigh: 'Rischio alto',
    moldRiskMedium: 'Rischio moderato',
    moldRiskLow: 'Rischio basso',
    extractionLabel: 'da estrarre',
    tipEnergy: 'Far funzionare il deumidificatore durante le ore di minor consumo può ridurre significativamente i costi dell\'elettricità.',
    tipMold: 'Mantenere l\'umidità al di sotto del 50 per cento impedisce alle spore di muffa di germinare sulle superfici.',
    unitPercent: '%',
    badgeHigh: 'Alto',
    badgeMedium: 'Medio',
    badgeLow: 'Basso',
  },
};
