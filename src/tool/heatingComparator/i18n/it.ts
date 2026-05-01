import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'confronto-riscaldamento-gas-pompa-calore-aria';
const title = 'Confronto Gas vs. Pompa di Calore vs. Aria Condizionata';
const description = 'Calcola quanto puoi risparmiare sostituendo la caldaia a gas con una pompa di calore o un condizionatore. Confronto reale su consumi energetici ed efficienza domestica.';

const faqData = [
  {
    question: 'Costa meno la pompa di calore o il gas naturale?',
    answer: 'A livello di costi operativi mensili, la pompa di calore è decisamente più conveniente del gas naturale. Grazie a un\'efficienza del 400% (COP di 4), il costo per ogni kWh di calore generato è solitamente inferiore del 30-50% rispetto al gas, nonostante il prezzo del kWh elettrico sia più alto.',
  },
  {
    question: 'Che differenza c\'è tra pompa di calore e un normale condizionatore?',
    answer: 'Tecnicamente sono entrambi pompe di calore. La differenza principale è il mezzo a cui cedono il calore: la pompa di calore classica è solitamente "aria-acqua" (riscalda l\'acqua per radiatori o pavimento radiante), mentre il condizionatore tradizionale è "aria-aria" (riscalda direttamente l\'aria tramite split).',
  },
  {
    question: 'Si può installare la pompa di calore in un appartamento con vecchi radiatori?',
    answer: 'Sì, è possibile installare una pompa di calore con radiatori convenzionali utilizzando modelli ad "alta temperatura". Tuttavia, per ottenere il massimo risparmio, l\'ideale è l\'abbinamento con pavimento radiante o radiatori a bassa temperatura.',
  },
  {
    question: 'In quanto tempo si ammortizza una pompa di calore?',
    answer: 'A seconda dei consumi della casa e degli incentivi fiscali (come l\'Ecobonus), il tempo di ammortamento è solitamente compreso tra i 5 e gli 8 anni. Se si dispone di un impianto fotovoltaico, questo periodo si riduce drasticamente.',
  },
];

const howToData = [
  {
    name: 'Superficie della casa',
    text: 'Inserisci i metri quadri calpestabili della tua abitazione per stimare il fabbisogno termico annuale.',
  },
  {
    name: 'Prezzi dell\'energia',
    text: 'Inserisci i prezzi di Gas ed Elettricità della tua ultima bolletta per una maggiore precisione.',
  },
  {
    name: 'Confronta i risultati',
    text: 'Metti a confronto i tre sistemi e scopri qual è il più efficiente e conveniente per te.',
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
      title: 'Chiavi per scegliere il tuo riscaldamento',
      items: [
        'La <strong>pompa di calore</strong> è fino al 400% più efficiente del gas.',
        'L\'<strong>isolamento termico</strong> riduce la bolletta più di ogni caldaia.',
        'L\'<strong>ammortamento</strong> dei sistemi elettrici è di circa 6-8 anni.',
        'Abbina i <strong>pannelli solari</strong> per un riscaldamento quasi gratuito.',
      ],
    },
    {
      type: 'title',
      text: 'Confronto Consumi: Gas vs. Pompa di Calore vs. Condizionatore',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Scegliere il sistema di climatizzazione giusto per la casa è una delle decisioni finanziarie e di comfort più importanti. In un contesto di prezzi energetici instabili e con la crescente attenzione alla sostenibilità, sapere quale sistema è più efficiente — e quale ti farà risparmiare di più — è fondamentale.',
    },
    {
      type: 'paragraph',
      html: 'Storicamente, il gas naturale è stato lo standard in Italia. Tuttavia, l\'avvento delle <strong>pompe di calore (aria-acqua)</strong> e il miglioramento dei <strong>condizionatori (aria-aria)</strong> hanno cambiato le regole. Il nostro calcolatore ti aiuta a visualizzare i costi operativi annuali basandosi su dati reali.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Efficienza Pompa di Calore',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'top', positive: true },
        },
        {
          label: 'Risparmio Annuo Medio',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'stimato', positive: true },
        },
        {
          label: 'Vita Utile Impianti',
          value: '20 anni',
          icon: 'mdi:calendar-check',
          trend: { value: 'standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. La Caldaia a Gas: Lo standard tradizionale',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Il riscaldamento a gas utilizza una caldaia che brucia combustibile per scaldare l\'acqua dei radiatori o del pavimento radiante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendimento:</strong> Le moderne caldaie a condensazione hanno rendimenti vicini al 100%.',
        '<strong>Vantaggi:</strong> Installazione capillare, calore rapido e costi iniziali contenuti.',
        '<strong>Svantaggi:</strong> Dipendenza da combustibili fossili, quote fisse in bolletta (spesa per la materia gas) ed emissioni di CO2.',
      ],
    },
    {
      type: 'title',
      text: '2. Pompa di Calore: Efficienza estrema (Aria-Acqua)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La pompa di calore estrae l\'energia termica dall\'aria esterna (anche con temperature sotto zero) e la trasferisce all\'interno per riscaldare l\'acqua (o l\'aria) e produrre acqua calda sanitaria.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efficienza (COP):</strong> Un sistema moderno ha spesso un COP di 4. Significa che per ogni 1 kWh di elettricità consumata, ne fornisce 4 kWh di calore alla casa.',
        '<strong>Vantaggi:</strong> Sostenibilità totale se abbinata al fotovoltaico, un unico impianto per caldo e freddo, e i minori costi di gestione sul mercato.',
        '<strong>Svantaggi:</strong> Investimento iniziale elevato (recuperabile in 5-8 anni) e necessità di spazio per l\'unità esterna.',
      ],
    },
    {
      type: 'tip',
      title: 'Consiglio per il Risparmio',
      html: 'La pompa di calore dà il meglio di sé con il pavimento radiante, poiché l\'acqua deve essere scaldata solo a 35°C, contro i 60-70°C dei radiatori classici.',
    },
    {
      type: 'proscons',
      title: 'Pompa di Calore vs Caldaia a Gas',
      proTitle: 'Perché Pompa di Calore?',
      conTitle: 'Perché Gas?',
      items: [
        { pro: 'Efficienza imbattibile (COP 4+)', con: 'Installazione più economica' },
        { pro: 'Indipendenza dal gas', con: 'Calore immediato ad alta potenza' },
        { pro: 'Riscaldamento e Raffrescamento', con: 'Compatibile con vecchi radiatori' },
        { pro: 'Ideale con fotovoltaico', con: 'Nessuna unità esterna richiesta' },
      ],
    },
    {
      type: 'title',
      text: '3. Condizionatore (Pompa di Calore Aria-Aria)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'È il classico "split". Utilizza lo stesso principio della pompa di calore ma scalda l\'aria invece dell\'acqua. È una soluzione comune per le seconde case o zone a clima mite. L\'efficienza (SCOP) è solitamente tra 3 e 3.5.',
    },
    {
      type: 'title',
      text: 'Capire la formula di calcolo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Per un confronto equo, convertiamo i consumi in costo per kWh utile fornito all\'ambiente:',
    },
    {
      type: 'code',
      code: 'Costo Annuo = (Fabbisogno Termico Casa / Efficienza Sistema) × Prezzo Energia',
      ariaLabel: 'Formula di calcolo costo annuo',
    },
    {
      type: 'paragraph',
      html: 'Dove:',
    },
    {
      type: 'list',
      items: [
        '<strong>Fabbisogno Termico:</strong> I kWh di calore necessari alla casa in un anno (dipende da isolamento e mq).',
        '<strong>Efficienza:</strong> 0.95 per Gas, 4.0 per Pompa di Calore e 3.2 per Aria.',
        '<strong>Prezzo Energia:</strong> Il costo al kWh incluse tasse e oneri.',
      ],
    },
    {
      type: 'card',
      title: 'Esempio Reale: Casa di 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Immaginiamo una casa con un fabbisogno di 7.000 kWh termici all\'anno:</p><ul><li><strong>Gas (0.08 €/kWh):</strong> (7.000 / 0.95) * 0.08 = 589 €/anno</li><li><strong>Pompa di Calore (0.18 €/kWh):</strong> (7.000 / 4) * 0.18 = 315 €/anno (Risparmi il 46%)</li><li><strong>Aria (0.18 €/kWh):</strong> (7.000 / 3.2) * 0.18 = 393 €/anno</li></ul>',
    },
    {
      type: 'title',
      text: 'Quando conviene ogni sistema?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Non c\'è una risposta valida per tutti, dipende dalla zona climatica e dal tipo di abitazione:',
    },
    {
      type: 'paragraph',
      html: '<strong>Case Indipendenti / Nuove Costruzioni:</strong> La pompa di calore è la scelta migliore. Le normative attuali spingono verso l\'energia rinnovabile e questo sistema permette di ammortizzare i costi rapidamente.',
    },
    {
      type: 'paragraph',
      html: '<strong>Piccoli Appartamenti in zone calde:</strong> Il condizionatore (split) è imbattibile per i bassi costi di installazione. Se l\'inverno è mite, il risparmio operativo non giustifica l\'investimento in una pompa di calore aria-acqua.',
    },
    {
      type: 'paragraph',
      html: '<strong>Ristrutturazioni con impianto a gas esistente:</strong> Se ci sono radiatori vecchi, la caldaia a condensazione è la via più semplice ed economica inizialmente. Tuttavia, passando all\'elettrico ci si libera del contatore del gas e dei suoi costi fissi.',
    },
    {
      type: 'title',
      text: 'L\'importanza dell\'isolamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nessun sistema è efficiente se la casa "perde" calore. Prima di investire migliaia di euro in un nuovo impianto, controlla infissi e isolamento. Coibentare bene può dimezzare il tuo fabbisogno energetico.',
    },
    {
      type: 'title',
      text: 'Miti da sfatare sulla Pompa di Calore',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"Non funziona se fa troppo freddo":</strong> Falso. Le tecnologie odierne mantengono ottime prestazioni fino a -15°C.',
        '<strong>"Secca l\'aria":</strong> Vale solo per i sistemi aria-aria. La pompa di calore con radiatori o pavimento radiante offre un comfort eccellente.',
        '<strong>"L\'elettricità costa troppo":</strong> Anche se il costo del kWh elettrico è superiore a quello del gas, l\'efficienza del 400% ribalta totalmente il calcolo a favore dell\'elettrico.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lo sapevi?',
      icon: 'mdi:lightbulb-on',
      badge: 'Curiosità',
      html: '<p>Il COP varia in base alla temperatura esterna. Per questo, in climi estremamente rigidi, il rendimento cala leggermente, pur restando molto superiore a caldaie o stufette elettriche.</p>',
    },
    {
      type: 'title',
      text: 'Conclusione: Il futuro è elettrico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tendenza in tutta Europa è la <strong>decarbonizzazione</strong>. La combinazione di fotovoltaico e pompa di calore è oggi il modo più intelligente per riscaldare casa, proteggendo l\'ambiente e il proprio portafoglio.',
    },
    {
      type: 'paragraph',
      html: 'Usa il nostro calcolatore per confrontare le tue bollette. Spesso la spesa maggiore non è dovuta a una finestra aperta, ma a una caldaia obsoleta.',
    },
  ],
  ui: {
    titleVivienda: '1. Dati della tua casa',
    helperVivienda: 'Configura le caratteristiche dell\'abitazione',
    labelM2: 'Superficie Totale',
    helperM2: 'Metri quadri della tua abitazione.',
    labelAislamiento: 'Livello di Isolamento',
    helperAislamiento: 'Quanto bene trattiene il calore la tua casa?',
    optExcelent: 'Eccellente (Classe A / CasaClima / Nuova)',
    optMedium: 'Medio (Doppi vetri / Isolamento standard)',
    optPoor: 'Scarso (Vecchia costruzione / Senza cappotto)',
    titleCoste: '2. Costo dell\'energia',
    descCoste: 'Cerca nella tua ultima bolletta il "Prezzo Materia Energia" o "Costo kWh".',
    labelGasPrice: 'Costo del Gas',
    helperGasPrice: 'Prezzo per ogni kWh di gas consumato.',
    labelElecPrice: 'Costo dell\'Elettricità',
    helperElecPrice: 'Prezzo per ogni kWh di luce consumato.',
    titleComparison: '3. Confronto Consumi Annuali',
    descComparison: 'Stima basata sulle prestazioni tecniche di ogni sistema.',
    systemGas: 'Caldaia a Gas',
    systemAero: 'Pompa di Calore',
    systemAir: 'Condizionatore (Split)',
    labelAnnualCost: 'Spesa Riscaldamento',
    labelEfficiency: 'Efficienza',
    labelSource: 'Fonte',
    labelEnergy: 'Energia',
    labelInstallation: 'Installazione',
    valGasSource: 'Gas Naturale',
    valAeroEnergy: 'Rinnovabile + Elettricità',
    valAirInstall: 'Aria-Aria',
    winnerBadge: 'Più Efficiente',
    unitCurrency: '€',
  },
};
