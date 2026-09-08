import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'warmwasser-speicher-aufheizzeit-rechner';
const title = 'Rechner für die Aufheizzeit eines Warmwasserspeichers';
const description = 'Schätze, wie lange dein Warmwasserspeicher vom aktuellen auf das gewünschte Temperaturniveau braucht - anhand von Volumen, Nutzleistung und Wirkungsgrad.';
const faq = [
  { question: 'Was bedeutet die Aufheizzeit hier?', answer: 'Es ist die geschätzte Zeit, die das eingegebene Wasservolumen vom aktuellen bis zum gewünschten Temperaturniveau benötigt. Die Rechnung nutzt die Wärmekapazität von Wasser, die Nutzleistung und den geschätzten Wirkungsgrad.' },
  { question: 'Welche Formel verwendet der Rechner?', answer: 'Die benötigte Wärme wird aus Litern, Temperaturanstieg und 1,16 Wattstunden pro Liter und Grad Celsius geschätzt. Diese Energie wird durch Heizleistung mal Wirkungsgrad geteilt.' },
  { question: 'Sagt das Ergebnis die genaue Zeit meines Geräts voraus?', answer: 'Nein. Es ist eine transparente Planungsschätzung. Wärmeverluste, Thermostatzyklen, Schichtung, Durchmischung, Rohrverluste und Leistungsgrenzen können die echte Zeit verlängern.' },
  { question: 'Welchen Wirkungsgrad soll ich eingeben?', answer: 'Verwende einen dokumentierten Nutz- oder Aufheizwirkungsgrad. Wenn du keinen Wert hast, nimm eine vorsichtige Schätzung und vergleiche sie mit der Anleitung oder einem gemessenen Aufheizzyklus.' },
];
const howTo = [
  { name: 'Gespeichertes Wasservolumen eingeben', text: 'Gib das Speichervolumen in Litern ein, um die zu erwärmende Wassermenge zu bestimmen.' },
  { name: 'Aktuelle und gewünschte Temperatur setzen', text: 'Trage die Temperatur zu Beginn und die gewünschte Zieltemperatur ein.' },
  { name: 'Nutzleistung und Wirkungsgrad eingeben', text: 'Verwende die Heizleistung in Kilowatt und den Anteil der Energie, der das Wasser erreicht.' },
  { name: 'Aufheizfenster ablesen', text: 'Nutze Dauer und Endzeit für deine Planung und vergleiche das Ergebnis mit der Gerätedokumentation.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'de' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Gespeichertes Wasservolumen', volumeHint: 'Speicherkapazität', temperatureUnitLabel: 'Temperatureinheiten', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Aktuelle Wassertemperatur', targetTempLabel: 'Zieltemperatur', powerLabel: 'Nutzleistung des Heizgeräts', efficiencyLabel: 'Geschätzter Wirkungsgrad', startTimeLabel: 'Aufheizen beginnt um', compareTitle: 'Andere Einstellung vergleichen', comparePowerLabel: 'Andere Nutzleistung', compareEfficiencyLabel: 'Anderer Wirkungsgrad', compareOptional: 'Optional: beide Felder für den Vergleich ausfüllen', calculateNote: 'Nutze dies als Planungsschätzung und prüfe die Gerätedokumentation, bevor du dich auf die Zeit verlässt.', tankCurrent: 'Aktuell', tankTarget: 'Ziel', resultTitle: 'Aufheizfenster', recoveryTimeLabel: 'Geschätzte Aufheizzeit', energyLabel: 'Benötigte Wärme', effectivePowerLabel: 'Nutzleistung', readyAtLabel: 'Voraussichtlich bereit um', temperatureRiseLabel: 'Temperaturanstieg', comparisonTitle: 'Alternative Einstellung', comparisonFaster: 'schneller', comparisonSlower: 'langsamer', noHeatingNeeded: 'Zieltemperatur bereits erreicht', invalidInputs: 'Gib positive Werte für Volumen, Leistung und Wirkungsgrad ein, um die Schätzung zu sehen.', insufficientPower: 'Eine positive Nutzleistung ist erforderlich.', limitsTitle: 'Was diese Schätzung nicht berücksichtigt', limitsText: 'Das Modell kennt Dämmung, Bereitschaftsverluste, Thermostatzyklen, Schichtung, Durchmischung, Rohrverluste und die tatsächliche Leistungskurve deines Geräts nicht.', hoursUnit: 'Std.', minutesUnit: 'Min.', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Wann ist dein Warmwasser wieder bereit?', level: 2 },
    { type: 'paragraph', html: 'Nach dem Duschen, Baden oder einer größeren Entnahme zählt nicht nur die Größe des Speichers. Entscheidend ist, wie viel Energie zurück ins Wasser muss und wie schnell das Heizgerät sie liefert. Dieser Rechner macht daraus ein Aufheizfenster für deine nächste Nutzung.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Benötigte Wärme in Wh', icon: 'mdi:water-boiler' }, { value: 'kW × Wirkungsgrad', label: 'Nutzbare Heizleistung', icon: 'mdi:flash-outline' }, { value: 'Wärme ÷ Leistung', label: 'Aufheizzeit', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'So entsteht die Aufheizschätzung', level: 2 },
    { type: 'paragraph', html: 'Die Rechnung nutzt die Wärmekapazität von Wasser. Pro Liter und Grad Temperaturanstieg werden etwa 1,16 Wattstunden angesetzt. Das Modell multipliziert diesen Faktor mit Volumen und Temperaturanstieg und teilt anschließend durch die nach Wirkungsgrad verbleibende Nutzleistung.' },
    { type: 'comparative', items: [{ title: 'Gut für die Planung', description: 'Wähle eine Startzeit, beschreibe den Zustand des Speichers und erhalte eine voraussichtliche Endzeit. Mit einer alternativen Leistungs- und Wirkungsgradkombination kannst du Einstellungen vergleichen.', icon: 'mdi:calendar-clock', points: ['Nächsten Aufheizzyklus testen', 'Nutzleistung statt nur Nennleistung vergleichen', 'Temperaturanstieg sichtbar halten'] }, { title: 'Keine Servicegarantie', description: 'Ein echtes Gerät kann wegen Wärmeverlusten, Thermostatzyklen, Durchmischung oder begrenzter Dauerleistung langsamer sein. Vergleiche die Schätzung mit Anleitung oder Messung.', icon: 'mdi:thermometer-alert', points: ['Bereitschaftsverluste sind nicht modelliert', 'Keine Herstellerdaten werden abgerufen', 'Keine Sicherheits- oder Installationsberatung'] }], columns: 2 },
    { type: 'title', text: 'Welche Eingaben die Aufheizzeit am stärksten ändern', level: 2 },
    { type: 'paragraph', html: 'Ein größerer Temperaturanstieg erhöht den Energiebedarf direkt. Ein größerer Speicher braucht bei gleichem Anstieg proportional mehr Energie. Nutzleistung und Wirkungsgrad wirken umgekehrt: Ein doppelt so großes Produkt verkürzt die ideale Aufheizzeit ungefähr um die Hälfte.' },
    { type: 'title', text: 'Das Ergebnis ohne Scheingenauigkeit nutzen', level: 2 },
    { type: 'paragraph', html: 'Die Tool eignet sich zum Planen und Vergleichen von Annahmen, nicht zum Zertifizieren eines Heizgeräts oder zur Auslegung einer Installation. Technische Leitfäden und Prüfverfahren berücksichtigen zusätzliche Verluste und Messbedingungen; deshalb kann ein beobachteter Zyklus vom Idealwert abweichen.' },
  ],
};
