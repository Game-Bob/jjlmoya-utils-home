import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "haushaltswasserverbrauch-rechner",
  title: "Wasserverbrauchsrechner für den Haushalt",
  description:
    "Schätze den Wasserverbrauch deines Haushalts anhand täglicher Gewohnheiten, finde die größten Verbraucher und vergleiche deine Routine mit einem realistischen Szenario mit geringerem Verbrauch.",
  language: "de",
  ui: {
    presetLabel: "Mit einem Muster starten",
    presetEveryday: "Alltag",
    presetWaterAware: "Wasserbewusst",
    presetLowFlow: "Niedriger Durchfluss",
    controlsLabel: "Wassereingaben für den Haushalt",
    optionalInputsTitle: "Geräte und Lecks",
    peopleLabel: "Personen im Haushalt",
    peopleUnit: "Personen",
    showerTitle: "Duschen",
    showersPerWeekLabel: "Duschen pro Person",
    showerMinutesLabel: "Minuten pro Dusche",
    showerFlowLabel: "Durchfluss",
    toiletTitle: "Toilette",
    flushesPerDayLabel: "Spülungen pro Person",
    flushVolumeLabel: "Volumen pro Spülung",
    tapTitle: "Wasserhähne",
    tapMinutesLabel: "Nutzungszeit pro Person",
    tapFlowLabel: "Durchfluss",
    washingLoadsLabel: "Waschladungen",
    washingVolumeLabel: "Liter pro Waschladung",
    dishwasherLoadsLabel: "Spülmaschinenladungen",
    dishwasherVolumeLabel: "Liter pro Spülgang",
    leakLabel: "Schätzung vermeidbarer Lecks",
    litresPerDay: "geschätzte Liter pro Tag",
    litresPerMonth: "Liter pro Monat",
    litresPerYear: "Liter pro Jahr",
    perPerson: "Liter pro Person und Tag",
    reference: "Referenzwert",
    aboveReference: "Über dem Referenzwert",
    belowReference: "Unter dem Referenzwert",
    nearReference: "Nahe am Referenzwert",
    referenceDescription:
      "Der spanische Haushaltsdurchschnitt des INE liegt in der neuesten veröffentlichten Reihe bei 128 Litern pro Person und Tag. Nutze ihn als Kontext, nicht als Bestehensgrenze.",
    savingTitle: "Mögliche Verringerung",
    savingDescription:
      "Das ist die gemeinsame Differenz zwischen deinen aktuellen Gewohnheiten und den Annahmen für einen geringeren Verbrauch. Ändere jeweils nur eine Gewohnheit.",
    currentScenario: "Dein aktuelles Muster",
    efficientScenario: "Szenario mit geringerem Verbrauch",
    monthlySaving: "mögliche eingesparte Liter pro Monat",
    categoryShowers: "Duschen",
    categoryToilets: "Toilette",
    categoryTaps: "Wasserhähne",
    categoryWashing: "Waschen",
    categoryDishwasher: "Spülmaschine",
    categoryLeaks: "Lecks",
    breakdownTitle: "Verteilung im Monat",
    usageShare: "des Gesamtwerts",
  },
  faq: [
    {
      question: "Was schätzt dieser Wasserverbrauchsrechner?",
      answer:
        "Er schätzt Liter pro Tag, Monat und Jahr aus deinen Angaben zu Duschen, Toilettenspülungen, Wasserhähnen, Wäsche, Spülmaschine und Lecks. Zusätzlich zeigt er ein Szenario mit geringerem Verbrauch auf Basis moderater Änderungen.",
    },
    {
      question: "Ist das Ergebnis identisch mit meiner Wasserrechnung?",
      answer:
        "Nein. Das Ergebnis ist eine Planungsschätzung aus deinen Gewohnheiten. Eine Rechnung enthält auch Außenverbrauch, gemeinsam genutzte Leitungen, den Zählerzeitpunkt, Lecks außerhalb der Wohnung und den tatsächlichen Durchfluss deiner Armaturen.",
    },
    {
      question: "Welche Eingabe verändert das Ergebnis meistens am stärksten?",
      answer:
        "Lange Duschen mit hohem Durchfluss dominieren oft, aber das hängt von der Personenzahl, der Toilettenspülung, der Wasserhahnzeit und der Häufigkeit von Wäsche und Spülmaschine ab. Die Aufschlüsselung bewertet deine eigenen Angaben.",
    },
    {
      question: "Was bedeutet das Szenario mit geringerem Verbrauch?",
      answer:
        "Es verwendet nachvollziehbare Ziele wie fünfminütige Duschen, geringeren Durchfluss, sparsame Spülmengen, kürzere Wasserhahnnutzung, volle Ladungen und kein vermeidbares Leck. Es ist ein Vergleich, keine Garantie für ein bestimmtes Gerät.",
    },
    {
      question: "Warum zeigt der Rechner einen Referenzwert?",
      answer:
        "Der Referenzwert ist der aktuelle spanische Haushaltsdurchschnitt aus der Wasserstatistik des INE, angegeben pro Person und Tag. Er ist weder Zielwert noch Diagnose, weil regionale Bedingungen und nicht erfasste Nutzung stark variieren.",
    },
  ],
  howTo: [
    {
      name: "Personenzahl eingeben",
      text: "Beginne mit den Personen, die den Haushalt regelmäßig nutzen. Der Rechner teilt das Ergebnis pro Person auf, damit Haushalte unterschiedlicher Größe vergleichbar bleiben.",
    },
    {
      name: "Die wichtigsten Gewohnheiten beschreiben",
      text: "Gib Häufigkeit, Dauer und Durchfluss der Duschen ein und ergänze Spülungen, Wasserhahnzeit, Wäsche und Spülmaschine. Nutze möglichst Messwerte oder Angaben vom Gerät.",
    },
    {
      name: "Tageswert lesen",
      text: "Die große Zahl ist der geschätzte Haushaltsverbrauch pro Tag. Monats- und Jahreswerte verwenden dieselben Gewohnheiten und aktualisieren sich sofort.",
    },
    {
      name: "Den größten Hebel finden",
      text: "Lies die Aufschlüsselung in Monatslitern und Anteilen. Die Einsparung neben jeder Aktivität zeigt, was sich bei einer Annäherung an das Szenario mit geringerem Verbrauch ändern könnte.",
    },
    {
      name: "Ein realistisches Muster testen",
      text: "Probiere Wasserbewusst oder Niedriger Durchfluss und kehre danach zu deinen eigenen Werten zurück. Ändere nur eine Gewohnheit, um ihre Wirkung zu prüfen.",
    },
  ],
  seo: {
    introTitle: "Von der Wasserrechnung zu den Gewohnheiten dahinter",
    introOne:
      "Eine Wasserrechnung zeigt, wie viel durch den Zähler geflossen ist, aber selten, welche Gewohnheit die Veränderung verursacht hat. Dieser Rechner macht wiederkehrende Teile des Haushaltsalltags als nachvollziehbare Schätzung sichtbar: Personen, Duschen, Spülungen, Wasserhähne, Wäsche, Spülmaschine und vermeidbare Lecks. Jede Eingabe bleibt überprüfbar, damit du Annahmen ändern kannst.",
    introTwo:
      "Die jüngste INE-Reihe nennt für spanische Haushalte 128 Liter pro Person und Tag im Jahr 2024. Das ist nützlicher Kontext, aber kein universelles Ziel: Außenverbrauch, Klima, gemeinsam genutzte Zähler oder ein verborgenes Leck können einen Haushalt verständlicherweise deutlich vom Durchschnitt entfernen.",
    averageLabel: "Spanischer Haushaltsdurchschnitt pro Person und Tag",
    groupsLabel: "Verbrauchsgruppen in der Aufschlüsselung",
    daysLabel: "Tage für die Monatsschätzung",
    readTitle: "So liest du die Schätzung",
    readText:
      "Beginne mit dem längsten Monatsbalken und nicht mit der auffälligsten Zahl. Eine lange Dusche kann ein größerer Hebel sein als eine kleine, seltene Aktivität, während ein kleines Leck jeden Tag unbemerkt laufen kann. Der Rechner ordnet die Kategorien nach deinen Eingaben und zeigt eine mögliche monatliche Einsparung.",
    currentTitle: "Aktuelles Muster",
    currentText:
      "Deine Häufigkeiten, Dauern, Durchflüsse und Gerätemengen werden in tägliche und monatliche Liter umgerechnet.",
    currentPoints: [
      "Macht die Haushaltsgröße sichtbar",
      "Zeigt den Anteil jeder Aktivität",
      "Aktualisiert sich beim Ändern eines Feldes",
    ],
    lowerTitle: "Szenario mit geringerem Verbrauch",
    lowerText:
      "Ein transparenter Vergleich verwendet moderate Ziele wie kürzere Duschen, geringeren Durchfluss und volle Ladungen.",
    lowerPoints: [
      "Verspricht keine garantierte Einsparung",
      "Berechnet keinen Rechnungsbetrag",
      "Lässt dich Änderungen vorab testen",
    ],
    chooseTitle: "Wähle eine konkrete Änderung",
    chooseText:
      "Ein nützliches Szenario ist konkret genug zum Ausprobieren. Verkürze die Dusche um eine Minute, miss einen Durchfluss oder entferne die Leckschätzung nach einer Reparatur. Wenn sich kaum etwas ändert, prüfe die nächste Kategorie.",
    actions: [
      "Miss den Durchfluss eines Wasserhahns oder einer Dusche mit Behälter und Timer.",
      "Vergleiche das Geräteetikett mit den eingegebenen Litern pro Ladung.",
      "Starte ein Preset, um die Richtung der Veränderung zu verstehen.",
      "Ändere eine Gewohnheit und speichere ein realistisches Haushaltsziel.",
    ],
    limitsTitle: "Was diese Schätzung nicht sagen kann",
    limitsText:
      "Sie kann deinen Zähler nicht nachbilden, keinen Rohrbruch erkennen, nicht jede Außenwassermenge erfassen und keinen Etikettwert deiner Armatur garantieren. Nutze das Ergebnis als Entscheidungshilfe. Wenn Schätzung und Zähler abweichen, suche nach fehlender Nutzung oder einem Leck, statt Gewohnheitswerte blind zu erhöhen.",
    flowTitle: "Warum Durchfluss und Häufigkeit zusammen zählen",
    flowText:
      "Dieselbe Armatur kann je nach Laufzeit und Häufigkeit sehr unterschiedliche Mengen verursachen. Die Duschschätzung multipliziert Personen, Duschen pro Woche, Minuten und Liter pro Minute. Wäsche und Spülmaschine verwenden Ladungen pro Woche und Liter pro Ladung. So wird klarer, ob eine Gewohnheit, eine Armatur oder eine bessere Messung der nächste Schritt ist.",
  },
});

export { content };
