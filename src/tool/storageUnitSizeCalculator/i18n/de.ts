import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'de',
  slug: 'lagerraum-groessenrechner',
  title: 'Lagerraum Größenrechner',
  description: 'Schätze anhand deiner Kartons, Möbel und benötigten Zugangsfläche, wie groß dein Lagerraum sein sollte.',
  labels: {
    inventory: 'Dein Inventar', boxes: 'Kartons', furniture: 'Sperrige Gegenstände', smallBoxes: 'Kleine Kartons', mediumBoxes: 'Mittlere Kartons', largeBoxes: 'Große Kartons', sofa: 'Sofa', bed: 'Bett', wardrobe: 'Kleiderschrank', desk: 'Schreibtisch', chair: 'Stühle', accessLane: 'Zugangsfläche', accessHint: 'Mehr Zugangsfläche braucht mehr Raum, hält aber wichtige Gegenstände erreichbar.', quickScenarios: 'Startinventar laden', reset: 'Zurücksetzen',
  },
  presetLabels: ['Studio-Umzug', 'Ein Schlafzimmer', 'Kleines Büro'],
  accessLabels: ['Eng', 'Ausgewogen', 'Häufiger Zugriff'],
  result: {
    title: 'Der Ladeplan', minimum: 'Mindestgröße', comfortable: 'Komfortable Größe', emptyStatus: 'Gegenstände hinzufügen', readyStatus: 'Ausgewogener Plan', tightStatus: 'Mindestgröße ist knapp', emptyMessage: 'Der Plan zeichnet deine Lagerzonen, sobald du Gegenstände hinzufügst.', readyMessage: 'Die Mindestgröße lässt Raum für den gewählten Zugang.', tightMessage: 'Die Mindestgröße ist fast voll. Die komfortable Größe lässt sich leichter nutzen.', unit: 'm²', access: 'Zugang', boxesZone: 'Kartons', furnitureZone: 'Sperrige Gegenstände', laneZone: 'Zugangsfläche', floorPlanLabel: 'Proportionaler Lagerplan mit Kartons, sperrigen Gegenständen und Zugangsfläche', packedLabel: 'gepackt', areaLabel: 'Planungsfläche', volumeLabel: 'Volumen', emptyPlan: 'Füge Kartons oder Möbel hinzu, um den Plan zu zeichnen',
  },
  seo: [
    { type: 'title', level: 2, text: 'Finde die passende Lagerraumgröße für dein Inventar' },
    { type: 'paragraph', html: 'Ein Größenrechner für Lagerräume ist besonders hilfreich, wenn du mit deinem echten Inventar beginnst. Gib Kartons und sperrige Möbel ein und entscheide, ob du eng stapeln oder Gegenstände ohne komplettes Ausräumen erreichen möchtest.' },
    { type: 'title', level: 2, text: 'Was diese Schätzung misst' },
    { type: 'list', items: ['Gepacktes Volumen aus Kartons und Möbeln', 'Bodenfläche nach dem Stapeln der Kartons', 'Zugangsfläche abhängig von der Zugriffshäufigkeit', 'Mindest- und Komfortgröße in üblichen Quadratmeterstufen'] },
    { type: 'title', level: 2, text: 'Mindestgröße und Komfortgröße verstehen' },
    { type: 'paragraph', html: 'Die Mindestgröße ist die erste Standardgröße, die die geplante Fläche aufnimmt. Sie ist eine Kapazitätsprüfung und keine Garantie für jeden Raumgrundriss. Die Komfortgröße fügt Puffer hinzu, damit häufig geöffnete Lagerräume nicht zu einer festen Kartonwand werden.' },
    { type: 'title', level: 2, text: 'Vor der Buchung prüfen' },
    { type: 'paragraph', html: 'Nutze das Ergebnis als Vorauswahl und vergleiche danach Innenmaße, Türbreite, Deckenhöhe, Säulen, Treppen und Zufahrt des Anbieters. Kubikmeter können großzügig wirken, wenn die Höhe kaum nutzbar ist.' },
    { type: 'list', items: ['Kartons nach ihrer ungefähren Außengröße zählen.', 'Schränke und Sofas eintragen, auch wenn du sie zerlegen willst.', 'Häufiger Zugriff wählen, wenn du Saisonartikel, Waren oder Arbeitsmaterial holst.', 'Nutzbare Innenfläche und Türöffnung beim Anbieter bestätigen.'] },
    { type: 'tip', title: 'Planungsgrenze', html: 'Die Schätzung nutzt typische Maße und Stapelannahmen. Sie prüft keine konkrete Einheit, keine Traglast und nicht, ob ein ungewöhnliches Möbelstück durch die Tür passt.' },
  ],
  faq: [
    { question: 'Soll ich die Mindestgröße oder die Komfortgröße wählen?', answer: 'Wähle die Mindestgröße nur bei engem Packen und seltenem Zugriff. Die Komfortgröße ist besser, wenn du Dinge regelmäßig holst, dein Inventar wachsen kann oder Möbel schlecht stapelbar sind.' },
    { question: 'Warum verwendet der Rechner Quadratmeter?', answer: 'Anbieter nennen oft die Bodenfläche. Sie zeigt, ob du Gegenstände platzieren und erreichen kannst. Das zusätzliche Volumen hilft beim Vergleich mit Angeboten in Kubikmetern.' },
    { question: 'Kann ich den Rechner für eine Garage nutzen?', answer: 'Ja, als Ausgangspunkt. Prüfe aber Innenmaße, Toröffnung, Decke, Belüftung sowie Gewichts- und Stapelregeln des konkreten Raums.' },
    { question: 'Kennt der Rechner die echten Möbelmaße?', answer: 'Nein. Er verwendet typische Stellflächen und Volumen. Miss ungewöhnliche, zerbrechliche oder besonders tiefe Gegenstände selbst und plane einen Puffer ein.' },
  ],
  howTo: [
    { name: 'Startinventar laden', text: 'Wähle ein Szenario für deinen Umzug oder deine Räumung oder bearbeite das Beispiel direkt.' },
    { name: 'Kartons und Möbel zählen', text: 'Trage kleine, mittlere und große Kartons ein und ergänze Sofas, Betten, Schränke, Schreibtische und Stühle.' },
    { name: 'Zugangsfläche festlegen', text: 'Wähle Eng, Ausgewogen oder Häufiger Zugriff passend dazu, wie oft du die gelagerten Dinge erreichen musst.' },
    { name: 'Empfehlungen vergleichen', text: 'Verwende die Mindestgröße als Kapazitätsgrenze und die Komfortgröße als praktischere Wahl für regelmäßigen Zugriff.' },
  ],
};

export const content = buildLocalizedContent(copy);
