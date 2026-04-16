import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'heizungs-vergleich-gas-vs-waermepumpe';
const title = 'Heizungsvergleich: Gas vs. Wärmepumpe vs. Klimaanlage';
const description = 'Berechnen Sie, wie viel Sie sparen können, wenn Sie Ihre Gasheizung durch eine Luft-Wasser-Wärmepumpe oder eine Klimaanlage ersetzen. Realistischer Vergleich von Energieverbrauch und Effizienz.';

const faqData = [
  {
    question: 'Was ist günstiger: Wärmepumpe oder Erdgas?',
    answer: 'Im monatlichen Betrieb ist die Wärmepumpe deutlich günstiger als Erdgas. Dank einer Effizienz von 400 % (COP von 4) liegen die Kosten pro gelieferter kWh Wärme meist 30 % bis 50 % unter denen von Gas, obwohl der Strompreis pro kWh höher ist.',
  },
  {
    question: 'Was ist der Unterschied zwischen einer Wärmepumpe und einer normalen Klimaanlage?',
    answer: 'Technisch gesehen sind beides Wärmepumpen. Der Hauptunterschied liegt im Medium, an das sie die Wärme abgeben: Eine klassische Wärmepumpe ist meist ein „Luft-Wasser“-System (erwärmt das Wasser in Heizkörpern oder der Fußbodenheizung), während eine herkömmliche Klimaanlage ein „Luft-Luft“-System ist (erwärmt die Luft direkt über Innengeräte).',
  },
  {
    question: 'Kann man eine Wärmepumpe in einer Wohnung mit alten Heizkörpern installieren?',
    answer: 'Ja, es ist möglich, eine Wärmepumpe mit herkömmlichen Heizkörpern zu nutzen, indem man Hochtemperatur-Geräte einsetzt. Um jedoch die maximale Ersparnis zu erzielen, ist die Kombination mit einer Fußbodenheizung oder Niedertemperatur-Heizkörpern ideal.',
  },
  {
    question: 'Wie viele Jahre dauert es, bis sich eine Wärmepumpe amortisiert?',
    answer: 'Abhängig vom Verbrauch des Hauses und möglichen Förderungen liegt die Amortisationszeit meist zwischen 5 und 8 Jahren. In Kombination mit einer Photovoltaikanlage kann sich dieser Zeitraum drastisch verkürzen.',
  },
];

const howToData = [
  {
    name: 'Wohnfläche',
    text: 'Geben Sie die Wohnfläche Ihres Hauses in Quadratmetern an, um den jährlichen Wärmebedarf zu schätzen.',
  },
  {
    name: 'Energiepreise',
    text: 'Passen Sie die Gas- und Strompreise an Ihre aktuelle Abrechnung an, um genauere Ergebnisse zu erhalten.',
  },
  {
    name: 'Ergebnisse vergleichen',
    text: 'Vergleichen Sie alle drei Systeme direkt miteinander und finden Sie den Sieger in Sachen Effizienz und Kosten.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Häufig gestellte Fragen',
  faq: faqData,
  bibliographyTitle: 'Literaturverzeichnis',
  bibliography: [
    {
      name: 'Verband der deutschen Heizungsindustrie',
      url: 'https://www.vdzev.de/',
    },
    {
      name: 'Verbraucherzentrale: Heizungsvergleich',
      url: 'https://www.verbraucherzentrale.de/wissen/energie/heizen-und-warmwasser/welche-heizung-fuer-ihr-haus-welche-moeglichkeiten-gibt-es-13009',
    },
    {
      name: 'Bundesamt für Wirtschaft und Ausfuhrkontrolle (BAFA): Förderung',
      url: 'https://www.bafa.de/DE/Energie/Energieeffizienz/Waermentz/waermentz_node.html',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Wichtige Tipps zur Wahl Ihrer Heizung',
      items: [
        'Eine <strong>Wärmepumpe</strong> ist bis zu 400 % effizienter als eine Gasheizung.',
        'Eine gute <strong>Dämmung</strong> senkt Ihre Rechnung stärker als jeder Kessel.',
        'Die <strong>Amortisation</strong> elektrischer Systeme liegt bei etwa 6–8 Jahren.',
        'Kombinieren Sie <strong>Solaranlagen</strong> für fast kostenlose Wärme.',
      ],
    },
    {
      type: 'title',
      text: 'Verbrauchsvergleich: Gas vs. Wärmepumpe vs. Klimaanlage',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die Wahl des richtigen Heizsystems ist eine der wichtigsten finanziellen Entscheidungen für Ihr Zuhause. In Zeiten schwankender Energiepreise und wachsender Bedeutung von Nachhaltigkeit ist es entscheidend zu wissen, welches System am effizientesten ist – und womit Sie am meisten Geld sparen.',
    },
    {
      type: 'paragraph',
      html: 'Lange Zeit war Erdgas die erste Wahl. Doch der Einzug der <strong>Wärmepumpe (Luft-Wasser)</strong> und die technologische Verbesserung von <strong>Inverter-Klimaanlagen (Luft-Luft)</strong> haben den Markt verändert. Unser Rechner hilft Ihnen, die jährlichen Betriebskosten auf Basis realer Daten zu visualisieren.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Effizienz Wärmepumpe',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'top', positive: true },
        },
        {
          label: 'Ø Jährliche Ersparnis',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'geschätzt', positive: true },
        },
        {
          label: 'Lebensdauer',
          value: '20 Jahre',
          icon: 'mdi:calendar-check',
          trend: { value: 'Standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Die Gastherme: Der traditionelle Standard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Gasheizung verbrennt Brennstoff, um Wasser zu erwärmen, das dann durch Heizkörper oder Fußbodenheizung zirkuliert.',
    },
    {
      type: 'list',
      items: [
        '<strong>Wirkungsgrad:</strong> Moderne Brennwertthermen haben einen Wirkungsgrad von fast 100 %.',
        '<strong>Vorteile:</strong> Bewährte Technologie, schnelle Wärme und oft geringe Anschaffungskosten.',
        '<strong>Nachteile:</strong> Abhängigkeit von fossilen Brennstoffen, CO2-Emissionen und steigende CO2-Steuern.',
      ],
    },
    {
      type: 'title',
      text: '2. Wärmepumpe: Extreme Effizienz (Luft-Wasser)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Eine Wärmepumpe entzieht der Außenluft Wärmeenergie und nutzt diese, um Wasser für Heizung und Warmwasser aufzubereiten.',
    },
    {
      type: 'list',
      items: [
        '<strong>Effizienz (COP):</strong> Ein modernes System erreicht oft einen COP von 4. Das bedeutet: Aus 1 kWh Strom werden 4 kWh Wärme für Ihr Haus.',
        '<strong>Vorteile:</strong> Nachhaltig (besonders mit Photovoltaik), ein Gerät für Heizung und Kühlung, niedrigste Betriebskosten.',
        '<strong>Nachteile:</strong> Hohe Anfangsinvestition (die sich aber meist in 5–8 Jahren amortisiert).',
      ],
    },
    {
      type: 'tip',
      title: 'Spartipp',
      html: 'Die Wärmepumpe arbeitet am effizientesten mit einer Fußbodenheizung, da die Vorlauftemperatur nur etwa 35 °C betragen muss, statt der 60–70 °C bei klassischen Heizkörpern.',
    },
    {
      type: 'proscons',
      title: 'Wärmepumpe vs. Gasheizung',
      proTitle: 'Warum Wärmepumpe?',
      conTitle: 'Warum Gas?',
      items: [
        { pro: 'Unschlagbare Effizienz (COP 4+)', con: 'Günstigere Installation' },
        { pro: 'Unabhängigkeit von Gas', con: 'Konstant hohe Vorlauftemperaturen' },
        { pro: 'Heizen und Kühlen in einem', con: 'Keine Außeneinheit nötig' },
        { pro: 'Ideal mit Solarenergie', con: 'Einfacher Austausch in Altbauten' },
      ],
    },
    {
      type: 'title',
      text: '3. Klimaanlage mit Heizfunktion (Luft-Luft-Wärmepumpe)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dies ist das klassische Split-Gerät. Es nutzt den gleichen thermodynamischen Zyklus wie die Wärmepumpe, erwärmt aber direkt die Luft statt Wasser. Eine hervorragende Lösung für mildere Klimazonen oder als Ergänzung. Die Effizienz (SCOP) liegt meist zwischen 3 und 3.5.',
    },
    {
      type: 'title',
      text: 'Die Berechnungsformel verstehen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um die Systeme fair zu vergleichen, rechnen wir alles auf die Kosten pro genutzte kWh Wärme um:',
    },
    {
      type: 'code',
      code: 'Jährliche Kosten = (Wärmebedarf Haus / Systemeffizienz) × Energiepreis',
      ariaLabel: 'Formel zur Berechnung der jährlichen Kosten',
    },
    {
      type: 'paragraph',
      html: 'Dabei gilt:',
    },
    {
      type: 'list',
      items: [
        '<strong>Wärmebedarf:</strong> Die kWh Wärme, die Ihr Haus pro Jahr benötigt (abhängig von Dämmung und m²).',
        '<strong>Effizienz:</strong> 0.95 für Gas, 4.0 für Wärmepumpe und 3.2 für Klimaanlage.',
        '<strong>Energiepreis:</strong> Die Kosten pro kWh inklusive Steuern und Gebühren.',
      ],
    },
    {
      type: 'card',
      title: 'Praxisbeispiel 100 m² Wohnung',
      icon: 'mdi:home-analytics',
      html: '<p>Angenommen, ein Haushalt benötigt 7.000 kWh Wärme pro Jahr:</p><ul><li><strong>Gas (0,08 €/kWh):</strong> (7.000 / 0,95) * 0,08 = 589 €/Jahr</li><li><strong>Wärmepumpe (0,18 €/kWh):</strong> (7.000 / 4) * 0,18 = 315 €/Jahr (Ersparnis: 46 %)</li><li><strong>Klima (0,18 €/kWh):</strong> (7.000 / 3,2) * 0,18 = 393 €/Jahr</li></ul>',
    },
    {
      type: 'title',
      text: 'Wann lohnt sich welches System?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Es gibt keine Universallösung; es hängt stark vom Standort und dem Gebäudetyp ab:',
    },
    {
      type: 'paragraph',
      html: '<strong>Einfamilienhäuser / Neubau:</strong> Die Wärmepumpe ist fast schon Pflicht. Sie ist der einfachste Weg, gesetzliche Anforderungen an erneuerbare Energien zu erfüllen und vom ersten Tag an zu sparen.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kleine Wohnungen in milden Regionen:</strong> Eine Klimaanlage (Split) ist durch die geringen Installationskosten unschlagbar. Wenn der Winter kurz ist, rechtfertigt die Betriebskostenersparnis oft nicht die hohen Kosten einer Luft-Wasser-Wärmepumpe.',
    },
    {
      type: 'paragraph',
      html: '<strong>Altbausanierung mit Gasanschluss:</strong> Wenn das Gebäude bereits Gas und alte Heizkörper hat, ist die Brennwerttherme anfangs am günstigsten. Wer jedoch zukunftssicher planen will, sollte bei einer Sanierung den Umstieg auf Strom in Betracht ziehen.',
    },
    {
      type: 'title',
      text: 'Der Einfluss der Dämmung',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kein System ist effizient, wenn die Wärme ungenutzt entweicht. Bevor Sie viel Geld in eine neue Heizung investieren, prüfen Sie Fenster und Dämmung. Eine gute Isolierung kann den Wärmebedarf halbieren.',
    },
    {
      type: 'title',
      text: 'Mythen über Wärmepumpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Häufige Vorurteile im Check:',
    },
    {
      type: 'list',
      items: [
        '<strong>„Wärmepumpen funktionieren bei Frost nicht“:</strong> Falsch. Moderne Geräte arbeiten bis -15 °C oder sogar -20 °C zuverlässig.',
        '<strong>„Heizungsluft macht die Augen trocken“:</strong> Das gilt nur für Luft-Systeme. Eine Wärmepumpe mit Fußbodenheizung bietet höchsten Komfort ohne Luftzug.',
        '<strong>„Strom ist zu teuer“:</strong> Obwohl Strom teurer als Gas ist, macht die Effizienz von 400 % diesen Preisunterschied mehr als wett.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wussten Sie schon?',
      icon: 'mdi:lightbulb-on',
      badge: 'Fakt',
      html: '<p>Der COP (Coefficient of Performance) sinkt bei extremer Kälte ab. Dennoch bleibt die Wärmepumpe effizienter als jede Gasheizung oder Elektroheizung.</p>',
    },
    {
      type: 'title',
      text: 'Fazit: Die Zukunft ist elektrisch',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Trend in Europa ist klar: Weg von fossilen Brennstoffen. Die Kombination aus Photovoltaik und Wärmepumpe ist heute die beste Lösung für maximalen Komfort bei minimalen Kosten.',
    },
    {
      type: 'paragraph',
      html: 'Nutzen Sie unseren Rechner, um Ihre aktuellen Kosten mit modernen Alternativen zu vergleichen. Oft liegt das größte Sparpotenzial nicht bei der Raumtemperatur, sondern beim Heizsystem selbst.',
    },
  ],
  ui: {
    titleVivienda: '1. Gebäudedaten',
    helperVivienda: 'Konfigurieren Sie die Merkmale Ihres Hauses',
    labelM2: 'Gesamtfläche',
    helperM2: 'Wohnfläche in Quadratmetern.',
    labelAislamiento: 'Dämmstandard',
    helperAislamiento: 'Wie gut hält Ihr Haus die Wärme?',
    optExcelent: 'Exzellent (Neubau / KfW 40 / Passivhaus)',
    optMedium: 'Mittel (Isolierglas / Standarddämmung)',
    optPoor: 'Schlecht (Altbau / keine Wanddämmung)',
    titleCoste: '2. Energiekosten',
    descCoste: 'Schauen Sie auf Ihrer letzten Abrechnung nach dem Arbeitspreis pro kWh.',
    labelGasPrice: 'Gaspreis',
    helperGasPrice: 'Kosten pro verbrauchter kWh Gas.',
    labelElecPrice: 'Strompreis',
    helperElecPrice: 'Kosten pro verbrauchter kWh Strom.',
    titleComparison: '3. Jährlicher Verbrauchsvergleich',
    descComparison: 'Schätzung basierend auf der technischen Effizienz der Geräte.',
    systemGas: 'Gasheizung',
    systemAero: 'Wärmepumpe',
    systemAir: 'Klimaanlage (Split)',
    labelAnnualCost: 'Heizkosten pro Jahr',
    labelEfficiency: 'Effizienz',
    labelSource: 'Energiequelle',
    labelEnergy: 'Energieart',
    labelInstallation: 'Installationstyp',
    valGasSource: 'Erdgas',
    valAeroEnergy: 'Erneuerbar + Strom',
    valAirInstall: 'Luft-Luft',
    winnerBadge: 'Am effizientesten',
    unitCurrency: '€',
  },
};
