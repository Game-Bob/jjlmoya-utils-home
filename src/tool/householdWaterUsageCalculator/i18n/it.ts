import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "calcolatore-consumo-acqua-domestico",
  title: "Calcolatore del consumo d'acqua domestico",
  description:
    "Stima il consumo d'acqua della tua casa in base alle abitudini quotidiane, scopri quali attività pesano di più e confronta la routine attuale con uno scenario realistico a consumo ridotto.",
  language: "it",
  ui: {
    presetLabel: "Inizia da un profilo",
    presetEveryday: "Quotidiano",
    presetWaterAware: "Attento all'acqua",
    presetLowFlow: "Basso flusso",
    controlsLabel: "Dati dell'acqua domestica",
    optionalInputsTitle: "Elettrodomestici e perdite",
    peopleLabel: "Persone che usano la casa",
    peopleUnit: "persone",
    showerTitle: "Docce",
    showersPerWeekLabel: "Docce per persona",
    showerMinutesLabel: "Minuti per doccia",
    showerFlowLabel: "Portata",
    toiletTitle: "Toilette",
    flushesPerDayLabel: "Scarichi per persona",
    flushVolumeLabel: "Volume per scarico",
    tapTitle: "Rubinetti",
    tapMinutesLabel: "Tempo di apertura per persona",
    tapFlowLabel: "Portata",
    washingLoadsLabel: "Carichi della lavatrice",
    washingVolumeLabel: "Litri per lavaggio",
    dishwasherLoadsLabel: "Carichi della lavastoviglie",
    dishwasherVolumeLabel: "Litri per ciclo",
    leakLabel: "Stima della perdita evitabile",
    litresPerDay: "litri stimati ogni giorno",
    litresPerMonth: "litri al mese",
    litresPerYear: "litri all'anno",
    perPerson: "litri per persona al giorno",
    reference: "Riferimento",
    aboveReference: "Sopra il riferimento",
    belowReference: "Sotto il riferimento",
    nearReference: "Vicino al riferimento",
    referenceDescription:
      "La media delle famiglie spagnole dell'INE è di 128 litri per persona al giorno nell'ultima serie pubblicata. Usala come contesto, non come soglia di promozione.",
    savingTitle: "Margine di riduzione",
    savingDescription:
      "È la differenza complessiva tra le abitudini attuali e le ipotesi a consumo ridotto. Prova una modifica alla volta prima di considerarla un impegno.",
    currentScenario: "Il tuo profilo attuale",
    efficientScenario: "Scenario a consumo ridotto",
    monthlySaving: "litri potenzialmente risparmiati al mese",
    categoryShowers: "Docce",
    categoryToilets: "Toilette",
    categoryTaps: "Rubinetti",
    categoryWashing: "Lavatrice",
    categoryDishwasher: "Lavastoviglie",
    categoryLeaks: "Perdite",
    breakdownTitle: "Dove finiscono i litri del mese",
    usageShare: "del totale",
  },
  faq: [
    {
      question: "Che cosa stima questo calcolatore dell'acqua domestica?",
      answer:
        "Stima i litri al giorno, al mese e all'anno in base a docce, scarichi, rubinetti, lavatrice, lavastoviglie e perdite. Mostra anche uno scenario a consumo ridotto basato su cambiamenti moderati.",
    },
    {
      question: "Il risultato è uguale alla mia bolletta dell'acqua?",
      answer:
        "No. È una stima per pianificare costruita sulle tue abitudini. La bolletta include anche usi esterni, servizi condivisi, tempi di lettura del contatore, perdite fuori casa e portata reale degli impianti.",
    },
    {
      question: "Quale dato modifica di solito di più il risultato?",
      answer:
        "Le docce lunghe e con alta portata spesso incidono di più, ma conta anche il numero di persone, il volume dello scarico, il tempo dei rubinetti e la frequenza di lavatrice e lavastoviglie. Il riepilogo usa i tuoi dati.",
    },
    {
      question: "Che cos'è lo scenario a consumo ridotto?",
      answer:
        "Applica obiettivi trasparenti: docce di cinque minuti, portate inferiori, scarichi efficienti, meno tempo di rubinetto, carichi completi e nessuna perdita evitabile. È un confronto, non una promessa su un elettrodomestico.",
    },
    {
      question: "Perché viene mostrato un valore di riferimento?",
      answer:
        "È la più recente media delle famiglie spagnole nella serie INE su fornitura e depurazione dell'acqua, espressa per persona al giorno. Non è un obiettivo né una diagnosi: clima e usi non misurati cambiano il valore.",
    },
  ],
  howTo: [
    {
      name: "Inserisci il numero di persone",
      text: "Parti dalle persone che usano regolarmente la casa. Il calcolatore divide il totale per persona per confrontare famiglie di dimensioni diverse.",
    },
    {
      name: "Descrivi le abitudini principali",
      text: "Inserisci frequenza, durata e portata delle docce, poi aggiungi scarichi, tempo dei rubinetti, lavatrice e lavastoviglie. Usa una misura o l'etichetta dell'apparecchio quando disponibile.",
    },
    {
      name: "Leggi la stima giornaliera",
      text: "Il numero grande è la stima dei litri domestici al giorno. I valori mensili e annuali usano le stesse abitudini e si aggiornano subito.",
    },
    {
      name: "Trova la leva maggiore",
      text: "Guarda la ripartizione in litri e percentuali mensili. Il risparmio accanto a ogni attività indica cosa potrebbe cambiare avvicinandola allo scenario ridotto.",
    },
    {
      name: "Prova un profilo realistico",
      text: "Prova Attento all'acqua o Basso flusso, poi torna ai tuoi valori e modifica una sola abitudine. Capirai quale intervento vale la pena verificare per primo.",
    },
  ],
  seo: {
    introTitle: "Dalla bolletta dell'acqua alle abitudini che la determinano",
    introOne:
      "La bolletta mostra quanta acqua è passata dal contatore, ma raramente quale abitudine ha causato la variazione. Questo calcolatore trasforma le parti ripetibili della routine domestica in una stima trasparente: persone, docce, scarichi, rubinetti, lavatrice, lavastoviglie e perdite evitabili. Ogni dato resta visibile per poter controllare le ipotesi.",
    introTwo:
      "L'ultima serie INE indica una media di 128 litri per persona al giorno per le famiglie spagnole nel 2024. È un contesto utile, non un obiettivo universale: uso esterno, clima, contatore condiviso o perdita nascosta possono spiegare una distanza dalla media.",
    averageLabel: "Media delle famiglie spagnole per persona al giorno",
    groupsLabel: "Gruppi di abitudini nel riepilogo",
    daysLabel: "Giorni usati per la stima mensile",
    readTitle: "Come leggere la stima",
    readText:
      "Parti dalla barra mensile più lunga, non dal numero più evidente. Una doccia lunga può essere una leva maggiore di un'attività piccola e poco frequente, mentre una perdita ridotta può scorrere ogni giorno. Il calcolatore ordina le categorie sui tuoi dati e indica un possibile risparmio mensile.",
    currentTitle: "Profilo attuale",
    currentText:
      "Frequenze, durate, portate e volumi per carico vengono convertiti in litri giornalieri e mensili.",
    currentPoints: [
      "Mantiene visibile la dimensione della casa",
      "Mostra il contributo di ogni attività",
      "Si aggiorna mentre modifichi un campo",
    ],
    lowerTitle: "Scenario a consumo ridotto",
    lowerText:
      "Il confronto applica obiettivi moderati e trasparenti, come docce più brevi, portata minore e carichi completi.",
    lowerPoints: [
      "Non garantisce un risparmio",
      "Non calcola l'importo della bolletta",
      "Permette di provare prima di agire",
    ],
    chooseTitle: "Scegli una sola modifica",
    chooseText:
      "Uno scenario utile deve essere abbastanza concreto da poterlo provare. Riduci la doccia di un minuto, misura una portata stimata o rimuovi la perdita dopo averla riparata e controllata. Se cambia poco, passa alla categoria successiva.",
    actions: [
      "Misura la portata di un rubinetto o di una doccia con un recipiente e un timer.",
      "Confronta l'etichetta dell'elettrodomestico con i litri per carico inseriti.",
      "Avvia un profilo per capire la direzione della variazione.",
      "Cambia un'abitudine e fissa un obiettivo domestico realistico.",
    ],
    limitsTitle: "Che cosa questa stima non può dirti",
    limitsText:
      "Non riproduce il contatore, non identifica un guasto, non include ogni uso esterno e non certifica che un dispositivo fornisca la portata dichiarata. Usala per decidere. Se diverge dal contatore, cerca un uso mancante o una perdita invece di aumentare alla cieca i valori delle abitudini.",
    flowTitle: "Perché portata e frequenza contano insieme",
    flowText:
      "Lo stesso dispositivo può produrre totali molto diversi in base alla durata e alla frequenza. La doccia moltiplica persone, docce settimanali, minuti e litri al minuto. Lavatrice e lavastoviglie usano carichi settimanali e litri per carico. Questa relazione aiuta a decidere se cambiare abitudine, fare manutenzione o misurare meglio.",
  },
});

export { content };
