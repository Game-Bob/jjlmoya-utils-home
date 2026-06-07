import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'w-lan-reichweiten-simulator';
const title = 'WLAN Reichweiten und Hindernis Simulator';
const description =
  'Skizzieren Sie Ihren Grundriss, platzieren Sie Waende, Tueren, Moebel und Geraete, und ziehen Sie Router und Endgeraet, um den besten Signalweg zu finden. Live-Verlustanzeige, Streaming-Urteil und Platzierungstipps fuer tote Winkel - ganz ohne neue Hardware.';

const faqData = [
  {
    question: 'Warum faellt mein WLAN-Signal in bestimmten Raeumen weg?',
    answer:
      'WLAN nutzt Radiowellen, die von Baumaterialien absorbiert, reflektiert oder blockiert werden. Massive Ziegel, Beton und Metall sind die schlimmsten Uebeltaeter - sie reduzieren die Signalstaerke drastisch. Auch Wasser und Glas koennen Teile des Signals reflektieren oder absorbieren.',
  },
  {
    question: 'Wie stark beeintraechtigt eine Beton- oder Steinwand das WLAN?',
    answer:
      'Eine Standard-Betonwand daempft ein 2,4 GHz-Signal um 10 bis 20 Dezibel. Dicke Steinwaende von 70 bis 80 Zentimetern erreichen 22 Dezibel oder mehr. Das bedeutet je nach Dicke und Dichte etwa 50 bis 90 Prozent Reichweitenverlust. Bei 5 GHz ist der Verlust noch groesser, weil hoehere Frequenzen von dichten Materialien schneller absorbiert werden.',
  },
  {
    question: 'Wo sollte ich meinen Router fuer die beste Abdeckung platzieren?',
    answer:
      'Zentral, erhoeht und offen. Platzieren Sie den Router in der Mitte Ihrer Wohnung, mindestens einen Meter von dicken Waenden und Metallgegenstaenden entfernt, und bringen Sie ihn auf Brusthoehe fuer eine horizontale Ausbreitung. Vermeiden Sie Ecken, Schraenke und niedrige Positionen hinter Moebeln.',
  },
  {
    question: 'Koennen Glastueren WLAN blockieren?',
    answer:
      'Klares Glas hat nur minimale Auswirkungen, aber beschichtete oder doppelt verglaste Fenster mit Metallfilmen koennen Signale reflektieren. Der Simulator behandelt Standardglas als leichtes Hindernis mit etwa 2 bis 3 Dezibel Verlust.',
  },
];

const howToData = [
  {
    name: 'Signalweg identifizieren',
    text: 'Stellen Sie sich eine gerade Linie zwischen Ihrem Router und dem gewuenschten Geraet vor. Jedes Objekt, das diese Linie kreuzt, ist relevant.',
  },
  {
    name: 'Hindernisse hinzufuegen',
    text: 'Klicken Sie auf die Material-Buttons im Simulator, um jede Wand, Tuer, jedes Geraet oder Moebelstueck hinzuzufuegen, das den Weg kreuzt.',
  },
  {
    name: 'Das Urteil ablesen',
    text: 'Beobachten Sie, wie sich der Signalring, die Wellenanimation und das Streaming-Dashboard sofort aktualisieren, wenn Sie Objekte hinzufuegen oder entfernen.',
  },
  {
    name: 'Den Kontexttipp anwenden',
    text: 'Folgen Sie den Platzierungskarten, die basierend auf Ihrer genauen Hinderniskombination erscheinen, um die Abdeckung ohne neue Hardware zu verbessern.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: 'Warum Ihr WLAN im Nebenzimmer stirbt',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Ihr Router sendet Radiowellen in alle Richtungen. Diese Wellen breiten sich problemlos durch Luft aus, aber jedes physische Objekt, dem sie begegnen, fordert seinen Tribut. Manche Materialien lassen den Grossteil des Signals passieren. Andere verschlingen es vollstaendig. Zu verstehen, welche Gegenstaende in Ihrem Zuhause heimlich Ihre Verbindung lahmlegen, ist der erste Schritt zur Behebung toter Winkel - ohne einen einzigen Euro fuer neue Hardware auszugeben.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Trockenbauwand', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Dicke Steinwand', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Metalltuer', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Die wahren Kosten jedes Gegenstands in Ihrem Zuhause',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nicht alle Hindernisse sind gleich. Eine einzelne Trockenbauwand daempft Ihr Signal vielleicht nur um ein paar Prozent, aber eine Betonsaeule oder eine Metalltuer kann Ihre effektive Reichweite halbieren. Hier sehen Sie, was wirklich los ist, wenn Sie Ihren Router hinter dem Fernseher, neben dem Kuehlschrank oder auf dem Boden unter einem Metallregal platzieren.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Leichte Hindernisse',
          description: 'Diese Objekte verursachen nur minimale Signalverluste und sind in der Naehe des Signalwegs unbedenklich. Ein einzelnes Fenster oder eine Glastuer sind kein Grund zur Sorge.',
          icon: 'mdi:window-open-variant',
          points: [
            'Glastuer: 2 bis 3 dB Verlust',
            'Standardfenster: 2 dB Verlust',
            'Trockenbauwand: 3 dB Verlust',
            'Holz-Innentuer: 4 dB Verlust',
          ],
        },
        {
          title: 'Mittlere Hindernisse',
          description: 'Diese Objekte hinterlassen eine spuerbare Delle in Ihrer Abdeckung. Eines oder zwei sind in Ordnung, aber drei oder mehr auf demselben Signalweg fuehren zu Puffern und Verzoegerungen.',
          icon: 'mdi:wardrobe',
          points: [
            'Holzschrank: 5 dB Verlust',
            'Grosser Spiegel: 6 dB Verlust',
            'Waschmaschine: 6 dB Verlust',
            'Mikrowelle: 5 dB Verlust',
          ],
        },
        {
          title: 'Schwere Hindernisse',
          description: 'Das sind die stillen Killer von Heimnetzwerken. Eine einzige Betonwand oder Metalltuer kann ein starkes Signal in ein schwaches verwandeln - mehrere davon erzeugen garantierte tote Winkel.',
          icon: 'mdi:wall',
          points: [
            'Massive Ziegelwand: 8 dB Verlust',
            'Boden oder Decke: 10 dB Verlust',
            'Kuehlschrank: 10 dB Verlust',
            'Aquarium: 12 dB Verlust',
          ],
        },
        {
          title: 'Extreme Hindernisse',
          description: 'Diese Materialien absorbieren oder reflektieren fast die gesamte Funkenergie. Wenn Ihr Signalweg eines davon kreuzt, muessen Sie Router oder Geraet versetzen. Es gibt keinen Workaround.',
          icon: 'mdi:shield',
          points: [
            'Dicke Steinwand (70-80 cm): 22 dB Verlust',
            'Betonwand: 15 dB Verlust',
            'Metallschrank: 12 dB Verlust',
            'Metalltuer oder -tor: 18 dB Verlust',
            'Aufzugsschacht: 20+ dB Verlust',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Wie sich verschiedene Frequenzen durch Waende verhalten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten modernen Router senden auf zwei Baendern: 2,4 GHz und 5 GHz. Die niedrigere Frequenz kommt weiter und dringt leichter durch Waende, aber sie ist langsamer und ueberlasteter. Die hoehere Frequenz ist rasant schnell, wird aber von jedem Hindernis auf ihrem Weg absorbiert.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: '2,4 GHz Durchdringung',
          description: 'Niedrigere Frequenzen kommen weiter und durchdringen Waende besser. Ideal fuer grosse Reichweite, aber ueberfuellt mit Nachbarnetzen.',
          icon: 'mdi:signal',
          points: [
            'Besser durch massive Ziegel und Beton',
            'Mehr Stoerungen durch Nachbar-Router',
            'Langsamere Hoechstgeschwindigkeiten, real etwa 150 Mbit/s',
            'Besser fuer Smart-Home-Geraete und IoT',
          ],
        },
        {
          title: '5 GHz Durchdringung',
          description: 'Hoehere Frequenzen bieten hoehere Geschwindigkeiten, werden aber von Baumaterialien viel schneller absorbiert. Am besten fuer offene Raeume und nahe Geraete.',
          icon: 'mdi:signal-5g',
          points: [
            'Schlecht durch Beton und Metall',
            'Weniger Stoerungen, sauberere Kanaele',
            'Gigabit-faehige Geschwindigkeiten im selben Raum',
            'Schlechtere Abdeckung, bessere Qualitaet wo es ankommt',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Versteckte Killer: Gegenstaende, die Sie nie verdaechtigt haetten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Leute geben Waenden die Schuld, aber einige der schlimmsten WLAN-Killer sind Alltagsgegenstaende. Ein Aquarium besteht hauptsaechlich aus Wasser, und Wasser absorbiert 2,4-GHz-Radiowellen nahezu perfekt. Ein großer Spiegel hat eine duenne Metallrueckseite, die das Signal von Ihrem Geraet wegreflektiert. Eine Mikrowelle strahlt auf 2,4 GHz ab - exakt derselben Frequenz wie Ihr Router - und verursacht jedes Mal Stoerungen, wenn Sie etwas aufwaermen.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die Aquariumfalle',
      icon: 'mdi:fish',
      badge: 'Ueberraschender Blocker',
      html: '<p>Ein grosses Aquarium kann Ihr WLAN-Signal um bis zu 12 Dezibel daempfen. Das ist so viel wie eine dicke Betonwand. Wenn Ihr Router auf einer Seite des Aquariums steht und Ihr Schreibtisch auf der anderen, richtet das Wasser mehr Schaden an als die Wand dahinter.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Der Spiegeleffekt',
      icon: 'mdi:mirror',
      badge: 'Reflektionsgefahr',
      html: '<p>Grosse Spiegel haben eine duenne Metallschicht auf der Rueckseite, die Licht reflektieren soll. Dieselbe Metallschicht reflektiert auch Radiowellen. Ein Spiegel, der auf Ihren Router zeigt, kann das Signal von dort weglenken, wo Sie es brauchen, oder Mehrwege Interferenzen erzeugen, die Datenpakete durcheinanderbringen.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die Mikrowellenstoerung',
      icon: 'mdi:microwave',
      badge: 'Aktiver Stoersender',
      html: '<p>Mikrowellenherde arbeiten bei 2,45 GHz und ueberlappen direkt mit dem 2,4-GHz-WLAN-Band. Im Betrieb kann eine Mikrowelle das 2,4-GHz-Signal in einem Umkreis von 3 bis 5 Metern komplett ausloeschen. Wenn Ihr Router nur 2,4 GHz unterstuetzt und Ihre Kueche in der Naehe ist, wechseln Sie zu einem Dualband-Router und nutzen Sie 5 GHz fuer wichtige Aufgaben.</p>',
    },
    {
      type: 'title',
      text: 'Raum fuer Raum: Wo Sie Ihren Router platzieren sollten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Der ideale Router-Standort ist nicht der bequemste. Es ist derjenige, der die klarste Sichtverbindung zu den Raeumen bietet, in denen Sie das Internet tatsaechlich nutzen. So sollten Sie jeden Raum bewerten.',
    },
    {
      type: 'table',
      headers: ['Raum', 'Risiko', 'Warum schwierig', 'Loesung'],
      rows: [
        ['Kueche', 'Hoch', 'Kuehlschrank, Mikrowelle, Metallschraenke, Wasserrohre', 'Router ausserhalb der Kueche platzieren, niemals darin.'],
        ['Badezimmer', 'Hoch', 'Spiegel, Wasserrohre, Fliesen mit Metallgewebe', 'Router nicht hinter einer Badezimmerwand positionieren.'],
        ['Schlafzimmer', 'Mittel', 'Schraenke, dicke Waende, Metallbetten', 'Router erhoehen, freien Weg ueber Moebeln schaffen.'],
        ['Wohnzimmer', 'Niedrig', 'Meist offen, aber auf TVs und Konsolen achten', 'Router sichtbar halten, nicht hinter dem Fernseher verstecken.'],
        ['Garage', 'Extrem', 'Metalltueren, Beton, Autos', 'Kein normaler Router erreicht die Garage.'],
        ['Garten / Terrasse', 'Hoch', 'Aussenwaende, Glas, Entfernung', 'Access Point oder Mesh-Knoten im Aussenbereich nutzen.'],
      ],
    },
    {
      type: 'title',
      text: 'Die Einmeterregel und andere Platzierungs Hacks',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Kleine Veraenderungen machen grosse Unterschiede. Sie muessen Ihr Haus nicht neu verlegen. Sie muessen nur verstehen, wie sich Radiowellen ausbreiten, und ihnen einen freien Weg geben.',
    },
    {
      type: 'tip',
      title: 'Die Einmeterregel',
      html: '<p>Wenn Sie Ihren Router nur einen Meter von einer Beton- oder Metallbarriere entfernen, koennen Sie bis zu 40 Prozent der verlorenen Signalstaerke zurueckgewinnen.</p>',
    },
    {
      type: 'tip',
      title: 'Hoeher fuer bessere Abdeckung',
      html: '<p>Stellen Sie den Router auf Brusthoehe auf ein Regal. Signale breiten sich horizontal von der Antenne aus. Wenn Sie ihn auf dem Boden platzieren, verschwenden Sie die Haelfte Ihrer Abdeckung in den Boden.</p>',
    },
    {
      type: 'tip',
      title: 'Halten Sie ihn sichtbar',
      html: '<p>Verstecken Sie den Router niemals in einem Schrank, einer Kommode oder hinter dem Fernseher. Das Gehaeuse wirkt wie ein Faradayscher Kaefig und faengt das Signal ein, bevor es Ihr Zimmer erreicht.</p>',
    },
    {
      type: 'tip',
      title: 'Antennenausrichtung',
      html: '<p>Wenn Ihr Router externe Antennen hat, richten Sie eine vertikal und eine horizontal aus. Das verbessert die Abdeckung fuer Geraete in unterschiedlichen Hoehen.</p>',
    },
    {
      type: 'tip',
      title: 'Stoerquellen vermeiden',
      html: '<p>Halten Sie den Router mindestens 1,5 Meter von Mikrowellen, schnurlosen Telefonen und Babyfonen entfernt. Diese Geraete teilen sich das 2,4-GHz-Spektrum und verursachen aktive Stoerungen.</p>',
    },
    {
      type: 'tip',
      title: 'Vorteil der mittleren Etage',
      html: '<p>Wenn Sie in einem mehrstoeckigen Haus wohnen, platzieren Sie den Router im mittleren Stockwerk. Signale breiten sich durch Betondecken nur schlecht nach oben und unten aus.</p>',
    },
    {
      type: 'title',
      text: 'Streaming-Urteile: Was Ihr Signal tatsaechlich bedeutet',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Prozentangaben sind abstrakt. Was Sie wirklich wissen wollen, ist, ob Sie Netflix schauen, ein Match gewinnen oder einen Videoanruf ohne Einfrieren beenden koennen. Hier sehen Sie, was jedes Signalniveau in der Praxis bedeutet.',
    },
    {
      type: 'table',
      headers: ['Signal', '4K-Streaming', 'Online-Gaming', 'Videoanrufe', 'Surfen'],
      rows: [
        ['80% bis 100%', 'Perfekt, sofortiges Laden', 'Niedrige Latenz, wettbewerbsfaehig', 'Gestochen scharf, keine Aussetzer', 'Sofort, keine Verzoegerung'],
        ['60% bis 79%', 'Gut, gelegentliches Puffern', 'Spielbar, kleine Lags', 'Stabil, selten Pixel', 'Schnell, keine Probleme'],
        ['40% bis 59%', 'Puffern alle paar Minuten', 'Lag-Warnungen, Rubberbanding', 'Verpixelt, einige Aussetzer', 'Brauchbar, langsameres Laden'],
        ['20% bis 39%', 'Unmoeglich, staendiges Einfrieren', 'Verbindungsabbrueche, unspielbar', 'Haeufige Aussetzer, unbrauchbar', 'Sehr langsam, Timeouts'],
        ['0% bis 19%', 'Startet nicht', 'Keine Verbindung moeglich', 'Keine Verbindung', 'Nutzlos'],
      ],
    },
    {
      type: 'title',
      text: 'Schnelle Loesungen bevor Sie etwas kaufen',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Checkliste fuer Optimierung ohne Kosten',
      items: [
        'Router in die Mitte der Wohnung stellen, nicht in die Ecke.',
        'Auf Brusthoehe auf einem Regal oder hohen Moebelstueck erhoehen.',
        'Aus Schraenken, Kommoden und von hinter dem Fernseher holen.',
        'Eine Antenne vertikal und eine horizontal ausrichten, wenn moeglich.',
        '5 GHz fuer nahe Geraete und 2,4 GHz fuer entfernte nutzen.',
        'WLAN-Kanal mit einer Scanner-App auf einen weniger ueberlasteten wechseln.',
        'Router-Firmware aktualisieren, um bekannte Signal-Probleme zu beheben.',
        'Router einmal im Monat neu starten, um Speicherlecks zu beseitigen.',
      ],
    },
    {
      type: 'title',
      text: 'Wann Sie Ihre Hardware aufruesten sollten',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Manchmal gewinnt die Umgebung. Wenn Sie alle Platzierungstricks ausprobiert haben und immer noch tote Winkel haben, ist es Zeit, das Netzwerk zu erweitern, statt gegen die Physik anzukämpfen.',
    },
    {
      type: 'proscons',
      title: 'WLAN Repeater vs Mesh System',
      items: [
        { pro: 'Repeater sind guenstig und einfach zu installieren.', con: 'Repeater erzeugen einen zweiten Netzwerknamen und halbieren die Geschwindigkeit.' },
        { pro: 'Repeater funktionieren fuer einen einzelnen toten Winkel.', con: 'Repeater benoetigen ein starkes bestehendes Signal zum Verstaerken.' },
        { pro: 'Mesh Systeme schaffen ein nahtloses Netzwerk.', con: 'Mesh Systeme sind in der Anschaffung teurer.' },
        { pro: 'Mesh eignet sich fuer mehrere Stockwerke und grosse Haeuser.', con: 'Mesh benoetigt einen Hauptknoten in der Naehe des Modems.' },
      ],
    },
    {
      type: 'tip',
      title: 'Wann Mesh die richtige Wahl ist',
      html: '<p>Fuer Haeuser ueber 120 Quadratmeter oder mit dicken Betonwaenden wird ein Mesh-System mit mindestens zwei Knoten jeden einzelnen Router uebertreffen, egal wie teuer.</p>',
    },
    {
      type: 'title',
      text: 'Dezibel einfach erklaert',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dezibel sind logarithmisch, was bedeutet, dass sie sich nicht wie normale Zahlen verhalten. Alle 3 dB Verlust halbieren Ihre Signalleistung. 6 dB Verlust bedeuten ein Viertel der urspruenglichen Leistung. 10 dB Verlust bedeuten, dass nur noch ein Zehntel uebrig ist. Deshalb ist eine Betonwand mit 15 dB so verheerend. Sie schwaect das Signal nicht nur - sie vernichtet es.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Daempfung', definition: 'Der allmähliche Verlust der Signalstaerke beim Durchgang durch ein Material. Hoehere Zahlen bedeuten mehr Signalverlust.' },
        { term: 'dBm', definition: 'Eine Masseinheit fuer die Signalstaerke von WLAN. 0 dBm entspricht einem Milliwatt. Negative Werte sind normal, wobei -30 ausgezeichnet und -80 kaum nutzbar ist.' },
        { term: 'Toter Winkel', definition: 'Ein Bereich, in dem das WLAN-Signal zu schwach ist, um eine zuverlaessige Verbindung aufzubauen oder aufrechtzuerhalten.' },
        { term: 'Mesh Netzwerk', definition: 'Ein System aus mehreren Router-Knoten, die zusammenarbeiten, um eine grosse Flaeche mit einem einzigen nahtlosen WLAN-Netzwerk abzudecken.' },
        { term: 'Mehrwege Interferenz', definition: 'Wenn Radiowellen von Waenden und Objekten abprallen und mehrere verzoegerte Kopien desselben Signals erzeugen, die den Empfaenger verwirren.' },
        { term: 'SSID', definition: 'Der Name Ihres WLAN-Netzwerks. Repeater erzeugen oft eine zweite SSID, waehrend Mesh-Systeme einen Namen ueber alle Knoten hinweg beibehalten.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die goldene Regel der Router Platzierung',
      icon: 'mdi:map-marker-radius',
      badge: 'Wichtiger Tipp',
      html: '<p>Wenn Ihr Router derzeit in einer Ecke, in einem Schrank oder auf dem Boden steht, verschenken Sie 50 bis 70 Prozent seiner potenziellen Reichweite, bevor das Signal den Raum ueberhaupt verlaesst. Das schnellste Upgrade, das Sie machen koennen, ist, ihn an einen offenen, zentralen, erhoehten Ort zu stellen. Diese eine Ae nderung behebt oft mehr Probleme als der Kauf neuer Geraete.</p>',
    },
    {
      type: 'summary',
      title: 'So verhindern Sie WLAN tote Winkel',
      items: [
        'Router zentral, erhoeht und offen platzieren.',
        'Anzahl der Waende zwischen Router und Geraet minimieren.',
        'Kuechen, Badezimmer und Garagen als Router-Standort vermeiden.',
        '5 GHz fuer Geschwindigkeit im selben Raum, 2,4 GHz fuer Distanz nutzen.',
        'Mesh fuer grosse Haeuser oder dicke Aussenwaende in Betracht ziehen.',
        'Monatlich neu starten und Firmware aktualisieren fr Spitzenleistung.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Haushaltgegenstaende, die WLAN blockieren',
    labelAddObstacle: 'Klicken zum Hinzufuegen zum Signalweg',
    labelRemove: 'Entfernen',
    labelSignalStrength: 'Signal',
    labelEffectiveRange: 'Effektive Reichweite',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Streaming-Urteil',
    verdictPerfect: 'Perfekt',
    verdictGood: 'Gut',
    verdictFair: 'Mittel',
    verdictPoor: 'Schlecht',
    verdictDead: 'Totpunkt',
    tipTitle: 'Platzierungstipp',
    label4kStreaming: '4K Streaming',
    labelOnlineGaming: 'Online Spiele',
    labelVideoCalls: 'Videoanrufe',
    labelBasicBrowsing: 'Normales Surfen',
    statusPerfect: 'Perfekt',
    statusGood: 'Gut',
    statusFair: 'Mittel',
    statusPoor: 'Schlecht',
    statusImpossible: 'Unmoeglich',
    statusLowLatency: 'Niedrige Latenz',
    statusLagWarning: 'Lag Warnung',
    statusDisconnect: 'Verbindungsabbruch',
    statusStable: 'Stabil',
    statusPixelated: 'Verpixelt',
    statusDropped: 'Abgebrochen',
    statusPass: 'Bestanden',
    statusUnusable: 'Unbrauchbar',
    tipMoveRouter: 'Wenn Sie Ihren Router nur einen Meter von dieser Barriere entfernen, koennte sich das Signal um bis zu 40% verbessern.',
    tipElevateRouter: 'Stellen Sie den Router auf Brusthoehe. Signale breiten sich horizontal aus, und der Boden absorbiert mehr, als Sie denken.',
    tipReduceObstacles: 'Jede zusaetzliche Wand halbiert das Signal. Versuchen Sie, die Anzahl der Hindernisse zwischen Router und Geraet zu reduzieren.',
  },
};
