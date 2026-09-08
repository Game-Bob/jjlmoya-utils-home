import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'it',
  slug: 'calcolatore-dimensioni-box-deposito',
  title: 'Calcolatore delle dimensioni del deposito',
  description: 'Stima le dimensioni del deposito necessarie in base a scatole, mobili e spazio di accesso.',
  labels: {
    inventory: 'Il tuo inventario', boxes: 'Scatole', furniture: 'Oggetti ingombranti', smallBoxes: 'Scatole piccole', mediumBoxes: 'Scatole medie', largeBoxes: 'Scatole grandi', sofa: 'Divano', bed: 'Letto', wardrobe: 'Armadio', desk: 'Scrivania', chair: 'Sedie', accessLane: 'Spazio di accesso', accessHint: 'Più spazio di accesso occupa superficie, ma mantiene raggiungibili gli oggetti che ti servono.', quickScenarios: 'Carica un inventario iniziale', reset: 'Reimposta',
  },
  presetLabels: ['Trasloco da monolocale', 'Un bilocale', 'Piccolo ufficio'],
  accessLabels: ['Stretto', 'Equilibrato', 'Accesso frequente'],
  result: {
    title: 'Il piano di carico', minimum: 'Dimensione minima', comfortable: 'Dimensione comoda', emptyStatus: 'Aggiungi gli oggetti', readyStatus: 'Piano equilibrato', tightStatus: 'Il minimo è risicato', emptyMessage: 'Il piano disegnerà le zone del deposito quando aggiungerai degli oggetti.', readyMessage: "La dimensione minima lascia spazio per l'accesso scelto.", tightMessage: 'La dimensione minima è quasi piena. La dimensione comoda sarà più facile da usare.', unit: 'm²', access: 'accesso', boxesZone: 'Scatole', furnitureZone: 'Ingombranti', laneZone: 'Accesso', floorPlanLabel: 'Pianta proporzionale del deposito con scatole, oggetti ingombranti e spazio di accesso', packedLabel: 'imballato', areaLabel: 'Superficie di progetto', volumeLabel: 'volume', emptyPlan: 'Aggiungi scatole o mobili per disegnare la pianta',
  },
  seo: [
    { type: 'title', level: 2, text: 'Scegli il deposito in base a ciò che possiedi' },
    { type: 'paragraph', html: 'Un calcolatore delle dimensioni del deposito è più utile quando parte dal tuo inventario reale. Inserisci scatole e mobili ingombranti, poi indica se vuoi impilare in modo compatto o raggiungere gli oggetti senza svuotare tutto il box.' },
    { type: 'title', level: 2, text: 'Cosa misura questa stima' },
    { type: 'list', items: ['Volume imballato di scatole e mobili', 'Superficie occupata dopo aver impilato le scatole', 'Spazio di accesso in base alla frequenza di recupero', 'Dimensioni minima e comoda arrotondate a misure comuni'] },
    { type: 'title', level: 2, text: 'Come leggere le due dimensioni' },
    { type: 'paragraph', html: 'La dimensione minima è la prima misura standard che contiene la superficie stimata. È un controllo della capacità, non la promessa che ogni mobile entri in qualsiasi stanza. La dimensione comoda aggiunge margine per evitare una parete compatta di scatole.' },
    { type: 'title', level: 2, text: 'Controlla prima di prenotare' },
    { type: 'paragraph', html: 'Usa il risultato per selezionare alcune offerte e confronta poi misure interne, larghezza della porta, altezza, colonne, scale e accesso per il carico. Un annuncio in metri cubi può sembrare ampio se l altezza non è utilizzabile.' },
    { type: 'list', items: ['Conta le scatole in base alla loro dimensione esterna approssimativa.', 'Inserisci divani e armadi anche se pensi di smontarli.', 'Scegli Accesso frequente per oggetti stagionali, scorte o strumenti di lavoro.', 'Chiedi la superficie interna utile e misura la porta prima di spostare mobili grandi.'] },
    { type: 'tip', title: 'Limite della pianificazione', html: 'È una stima trasparente basata su dimensioni rappresentative e ipotesi di impilamento. Non controlla il deposito reale, i carichi ammessi né il passaggio di un mobile irregolare dalla porta.' },
  ],
  faq: [
    { question: 'Scelgo la dimensione minima o quella comoda?', answer: "Scegli la minima se imballerai in modo compatto e accederai raramente. La comoda è preferibile se recupererai oggetti, l inventario può crescere o i mobili grandi si impilano male." },
    { question: 'Perché il calcolatore usa i metri quadrati?', answer: 'I fornitori indicano spesso la superficie del pavimento, che mostra se puoi disporre e raggiungere le cose. Il volume in metri cubi aiuta a confrontare gli annunci che usano il volume.' },
    { question: 'Posso usarlo per un garage o un container?', answer: 'Sì, come punto di partenza. Verifica però dimensioni interne, apertura, soffitto, ventilazione e limiti di peso o impilamento dello spazio reale.' },
    { question: 'Il calcolatore conosce le misure reali dei mobili?', answer: 'No. Usa ingombri e volumi rappresentativi. Misura gli oggetti insoliti, fragili o molto profondi e lascia margine se il percorso di accesso è incerto.' },
  ],
  howTo: [
    { name: 'Carica un inventario iniziale', text: 'Scegli uno scenario vicino al tuo trasloco o modifica direttamente l esempio.' },
    { name: 'Conta scatole e ingombranti', text: 'Inserisci scatole piccole, medie e grandi, poi aggiungi divani, letti, armadi, scrivanie e sedie.' },
    { name: 'Imposta lo spazio di accesso', text: 'Scegli Stretto, Equilibrato o Accesso frequente in base a quante volte dovrai entrare.' },
    { name: 'Confronta le raccomandazioni', text: 'Usa la minima come soglia di capacità e la comoda come soluzione più gestibile per l accesso regolare.' },
  ],
};

export const content = buildLocalizedContent(copy);
