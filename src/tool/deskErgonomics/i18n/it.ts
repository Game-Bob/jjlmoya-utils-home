import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomia-della-scrivania';
const title = 'Ergonomia della Scrivania e Allineamento dello Spazio di Lavoro';
const description =
  'Inserisci la tua altezza e vedi immediatamente come regolare sedia, scrivania e monitor per eliminare il mal di schiena e al collo nel tuo ufficio in casa.';

const faqData = [
  {
      question: 'Perché l\'altezza della scrivania è importante?',
    answer:
      'Una scrivania troppo alta costringe le spalle a sollevarsi, causando tensione nel collo e nella parte superiore della schiena. Una scrivania troppo bassa fa curvare in avanti, comprimendo i dischi lombari. L\'altezza corretta mantiene gli avambracci paralleli al pavimento e i gomiti a un angolo di 90 gradi.',
  },
  {
    question: 'A quale altezza dovrebbe essere il mio monitor?',
    answer:
      'La parte superiore del monitor dovrebbe essere all\'altezza degli occhi o leggermente al di sotto, con lo schermo inclinato all\'indietro di 10-20 gradi. Questo mantiene il collo in una posizione neutra e riduce l\'affaticamento degli occhi guardando leggermente verso il basso, che è l\'angolo di riposo naturale della visione umana.',
  },
  {
    question: 'A quale distanza dovrei sedermi dallo schermo?',
    answer:
      'La distanza ideale è la lunghezza di un braccio, circa 50-70 centimetri. A questa distanza gli occhi non devono sforzarsi per mettere a fuoco e puoi vedere l\'intero schermo senza muovere la testa. Per schermi più grandi, aumenta la distanza proporzionalmente.',
  },
  {
    question: 'Una scrivania in piedi è migliore?',
    answer:
      'Le scrivanie in piedi riducono la seduta prolungata, che è collegata a problemi cardiovascolari e metabolici. Tuttavia, stare in piedi tutto il giorno può causare problemi alle vene e ai piedi. Il miglior approccio è alternare: seduti per 30 minuti, in piedi per 15-30 minuti e muoversi regolarmente.',
  },
  {
    question: 'I miei piedi dovrebbero toccare il pavimento?',
    answer:
      'Sì. I piedi dovrebbero poggiare piatti sul pavimento con le ginocchia a un angolo di 90 gradi. Se la sedia è troppo alta, usa un poggiapiedi. Se i piedi penzolano, la pressione si accumula dietro le cosce, restringendo il flusso sanguigno e causando intorpidimento.',
  },
  {
    question: 'Qual è l\'altezza ottimale della sedia?',
    answer:
      'Il sedile dovrebbe permettere alle ginocchia di piegarsi a circa 90 gradi con i piedi piatti sul pavimento. I fianchi dovrebbero essere all\'altezza delle ginocchia o leggermente al di sopra. Questo distribuisce il peso uniformemente sulle tuberosità ischiatiche e riduce la pressione sulla parte bassa della schiena.',
  },
];

const howToData = [
  {
    name: 'Misura la tua altezza',
    text: 'Statti scalzo contro un muro e segna la sommità della testa. Misura dal pavimento fino al segno in centimetri.',
  },
  {
    name: 'Seleziona la modalità del tuo spazio di lavoro',
    text: 'Scegli se vuoi raccomandazioni per una scrivania da seduto o in piedi. Ogni modalità utilizza diverse proporzioni corporee.',
  },
  {
    name: 'Regola prima la sedia',
    text: 'Imposta la sedia in modo che i piedi poggino piatti sul pavimento e le ginocchia formino un angolo di 90 gradi. I fianchi dovrebbero essere all\'altezza delle ginocchia o leggermente al di sopra.',
  },
  {
    name: 'Imposta l\'altezza della scrivania',
    text: 'Alza o abbassa la scrivania in modo che gli avambracci poggino paralleli al pavimento durante la digitazione. I gomiti dovrebbero essere a un angolo di 90 gradi.',
  },
  {
    name: 'Posiziona il monitor',
    text: 'Posiziona il monitor alla distanza di un braccio. La parte superiore dello schermo dovrebbe essere all\'altezza degli occhi o leggermente al di sotto, inclinato all\'indietro di 10-20 gradi.',
  },
  {
    name: 'Verifica con l\'avatar',
    text: 'Usa l\'avatar sullo schermo per controllare che tutti gli angoli siano verdi. Se qualche articolazione è rossa, regola il relativo elemento d\'arredamento.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'Il Costo Nascosto di una Cattiva Configurazione della Scrivania',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La maggior parte delle persone trascorre più di otto ore al giorno a una scrivania, ma pochi misurano se sedia, scrivania o monitor si adattino al proprio corpo. Una discrepanza di pochi centimetri può creare tensione cronica nel collo, nelle spalle e nella parte bassa della schiena. Nel corso dei mesi e degli anni, questa tensione diventa dolore, e il dolore diventa infortunio. La buona notizia è che l\'ergonomia ottimale può essere calcolata con precisione da una sola misurazione: la tua altezza.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '8h',
          label: 'Tempo Medio alla Scrivania',
          icon: 'mdi:desk',
        },
        {
          value: '90°',
          label: 'Angolo Ideale del Gomito',
          icon: 'mdi:angle-acute',
        },
        {
          value: '60cm',
          label: 'Migliore Distanza dallo Schermo',
          icon: 'mdi:monitor',
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Perché Una Misura Unica Non Va Mai Bene per Tutti',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le scrivanie standard sono alte 73 centimetri e le sedie standard 45 centimetri. Queste dimensioni sono state progettate decenni fa per impiegati d\'ufficio maschi di statura media. Se sei più basso di 175 centimetri o più alto di 185 centimetri, questi valori predefiniti stanno danneggiando attivamente la tua postura. Le donne, gli adolescenti e le persone con il busto più lungo o più corto della media sono particolarmente penalizzate dai mobili di serie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Configurazione Scadente',
          description: 'Valori predefiniti comuni dei mobili che creano tensione nel tempo.',
          icon: 'mdi:alert',
          points: [
            'Monitor troppo alto o troppo basso',
            'Scrivania che costringe le spalle a sollevarsi',
            'I piedi non toccano il pavimento',
            'La sedia non offre supporto lombare',
          ],
        },
        {
          title: 'Configurazione Ottimale',
          description: 'Misure personalizzate basate sulle proporzioni del tuo corpo.',
          icon: 'mdi:check-circle',
          points: [
            'Monitor all\'altezza degli occhi',
            'Gomiti a 90 gradi',
            'Piedi piatti sul pavimento',
            'Parte bassa della schiena completamente supportata',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista di Controllo Rapida della Postura',
      icon: 'mdi:clipboard-check',
      badge: 'Azione',
      html: '<p style="margin:0">Siediti con la schiena contro la sedia. Verifica che ci sia un piccolo spazio dietro le ginocchia e il bordo del sedile. Assicurati che i polsi siano dritti durante la digitazione. La parte superiore del monitor non dovrebbe essere più alta dei tuoi occhi. Fai una pausa di 2 minuti per camminare ogni 30 minuti.</p>',
    },
    {
      type: 'title',
      text: 'La Scienza di Sedersi e Stare in Piedi',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'I corpi umani non sono progettati per rimanere nella stessa posizione per ore. Quando si è seduti, la pressione sui dischi lombari aumenta del 40 per cento rispetto a stare in piedi. Quando si sta fermi in piedi, il sangue si accumula nelle gambe e il cuore deve lavorare di più per pomparlo di nuovo verso l\'alto. Il ritmo di lavoro più sano è alternare seduta e posizione eretta ogni 30-60 minuti, combinato con brevi passeggiate. Questo strumento calcola entrambe le modalità per poter configurare correttamente una scrivania convertibile.',
    },
    {
      type: 'summary',
      title: 'Come Costruire uno Spazio di Lavoro Ergonomico',
      items: [
        'Misura la tua altezza a piedi nudi in centimetri.',
        'Usa questo simulatore per ottenere le altezze esatte di sedia, scrivania e monitor.',
        'Regola prima la sedia, poi la scrivania, poi il monitor.',
        'Se usi una scrivania in piedi, impostala 30 centimetri sopra l\'altezza della scrivania da seduto.',
        'Posiziona il monitor alla distanza di un braccio e inclinalo all\'indietro di 10-20 gradi.',
        'Fai una pausa di 2 minuti per camminare o stiracchiarti ogni 30 minuti.',
      ],
    },
  ],
  ui: {
    labelMode: 'Modalità dello spazio di lavoro',
    modeSit: 'Seduto',
    modeStand: 'In piedi',
    labelHeight: 'La tua altezza',
    unitCm: 'cm',
    labelGender: 'Corporatura',
    genderMale: 'Uomo',
    genderFemale: 'Donna',
    labelChair: 'Sedia',
    labelDesk: 'Scrivania',
    labelMonitor: 'Monitor',
    labelDistance: 'Distanza',
    labelAngle: 'Angolo',
    labelGood: 'Corretto',
    labelAdjust: 'Regola',
    badgeChair: 'Sedile',
    badgeDesk: 'Superficie',
    badgeMonitor: 'Schermo',
    tipScreenLow: 'Alza il monitor',
    tipScreenHigh: 'Abbassa il monitor',
    tipDeskLow: 'Alza la scrivania',
    tipDeskHigh: 'Abbassa la scrivania',
    tipChairLow: 'Alza la sedia',
    tipChairHigh: 'Abbassa la sedia',
    tipDistance: 'Sposta lo schermo alla distanza di un braccio',
  },
};