import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomie-am-schreibtisch';
const title = 'Schreibtischergonomie und Ausrichtung des Arbeitsplatzes';
const description =
  'Gib deine Körpergröße ein und sieh sofort, wie du deinen Stuhl, Schreibtisch und Monitor anpassen kannst, um Rücken- und Nackenschmerzen im Homeoffice zu beseitigen.';

const faqData = [
  {
    question: 'Warum ist die Schreibtischhöhe wichtig?',
    answer:
      'Ein zu hoher Schreibtisch zwingt die Schultern nach oben und verursacht Spannungen im Nacken und oberen Rücken. Ein zu niedriger Schreibtisch lässt dich nach vorne krümmen und komprimiert die Lendenwirbelscheiben. Die richtige Höhe hält die Unterarme parallel zum Boden und die Ellbogen im 90-Grad-Winkel.',
  },
  {
    question: 'Wie hoch sollte mein Monitor sein?',
    answer:
      'Die Oberkante des Monitors sollte auf Augenhöhe oder leicht darunter liegen, wobei der Bildschirm um 10 bis 20 Grad nach hinten geneigt ist. Dies hält den Nacken in einer neutralen Position und reduziert die Augenbelastung, da leicht nach unten geschaut wird, was der natürliche Ruhewinkel des menschlichen Sehens ist.',
  },
  {
    question: 'Wie weit sollte ich von meinem Bildschirm entfernt sitzen?',
    answer:
      'Die ideale Entfernung beträgt eine Armlänge, also etwa 50 bis 70 Zentimeter. In dieser Entfernung müssen deine Augen nicht hart arbeiten, um zu fokussieren, und du kannst den gesamten Bildschirm sehen, ohne den Kopf zu bewegen. Bei größeren Bildschirmen erhöhe die Entfernung proportional.',
  },
  {
    question: 'Ist ein Stehschreibtisch besser?',
    answer:
      'Stehschreibtische reduzieren langes Sitzen, das mit Herz-Kreislauf- und Stoffwechselproblemen verbunden ist. Das ganze Tag über Stehen kann jedoch Venen- und Fußprobleme verursachen. Der beste Ansatz ist das Wechseln: 30 Minuten sitzen, 15 bis 30 Minuten stehen und regelmäßig Bewegung einbauen.',
  },
  {
    question: 'Sollten meine Füße den Boden berühren?',
    answer:
      'Ja. Deine Füße sollten flach auf dem Boden aufliegen und die Knie im 90-Grad-Winkel gebeugt sein. Ist der Stuhl zu hoch, verwende eine Fußstütze. Hängen die Füße herab, baut sich Druck hinter den Oberschenkeln auf, der die Durchblutung einschränkt und Taubheitsgefühle verursacht.',
  },
  {
    question: 'Was ist die beste Stuhlhöhe?',
    answer:
      'Der Sitz sollte es ermöglichen, dass die Knie in etwa im 90-Grad-Winkel gebeugt sind und die Füße flach auf dem Boden stehen. Die Hüften sollten auf Höhe der Knie oder leicht darüber sein. Dies verteilt das Gewicht gleichmäßig auf die Sitzbeine und verringert den Druck auf den unteren Rücken.',
  },
];

const howToData = [
  {
    name: 'Messe deine Körpergröße',
    text: 'Stelle dich barfuß an eine Wand und markiere die Oberseite deines Kopfes. Messe vom Boden bis zur Marke in Zentimetern.',
  },
  {
    name: 'Wähle deinen Arbeitsplatzmodus',
    text: 'Entscheide, ob du Empfehlungen für einen Sitz- oder Stehschreibtisch möchtest. Jeder Modus verwendet unterschiedliche Körperproportionen.',
  },
  {
    name: 'Passe zuerst deinen Stuhl an',
    text: 'Stelle den Stuhl so ein, dass deine Füße flach auf dem Boden aufliegen und deine Knie einen 90-Grad-Winkel bilden. Deine Hüften sollten auf Höhe der Knie oder leicht darüber sein.',
  },
  {
    name: 'Stelle die Schreibtischhöhe ein',
    text: 'Hebe oder senke deinen Schreibtisch, sodass deine Unterarme beim Tippen parallel zum Boden liegen. Deine Ellbogen sollten im 90-Grad-Winkel sein.',
  },
  {
    name: 'Positioniere deinen Monitor',
    text: 'Platziere den Monitor in einer Armlänge Entfernung. Die Oberkante des Bildschirms sollte auf Augenhöhe oder leicht darunter liegen und um 10 bis 20 Grad nach hinten geneigt sein.',
  },
  {
    name: 'Überprüfe mit dem Avatar',
    text: 'Verwende den Avatar auf dem Bildschirm, um zu prüfen, dass alle Winkel grün sind. Ist ein Gelenk rot, passe das entsprechende Möbelstück an.',
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
      text: 'Die versteckten Kosten einer schlechten Schreibtischeinrichtung',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Die meisten Menschen verbringen mehr als acht Stunden täglich an einem Schreibtisch, doch nur wenige prüfen, ob ihr Stuhl, Schreibtisch oder Monitor zu ihrem Körper passen. Eine Abweichung von nur wenigen Zentimetern kann chronische Spannungen im Nacken, den Schultern und im unteren Rücken verursachen. Über Monate und Jahre wird diese Spannung zu Schmerzen und Schmerzen zu Verletzungen. Die gute Nachricht: Optimale Ergonomie lässt sich aus einer einzigen Messung präzise berechnen: deiner Körpergröße.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '8h',
          label: 'Durchschnittliche Schreibtischzeit',
          icon: 'mdi:desk',
        },
        {
          value: '90°',
          label: 'Idealer Ellbogenwinkel',
          icon: 'mdi:angle-acute',
        },
        {
          value: '60cm',
          label: 'Beste Bildschirm-Entfernung',
          icon: 'mdi:monitor',
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Warum Einheitsgrößen nie für alle passen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standard-Schreibtische sind 73 Zentimeter hoch und Standard-Stühle 45 Zentimeter. Diese Maße wurden vor Jahrzehnten für durchschnittlich große männliche Büroangestellte entwickelt. Bist du kleiner als 175 Zentimeter oder größer als 185 Zentimeter, schaden dir diese Standardwerte aktiv. Frauen, Jugendliche und Menschen mit längerem oder kürzerem Oberkörper als der Durchschnitt werden von Möbeln aus der Serie besonders schlecht bedient.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Schlechte Einrichtung',
          description: 'Häufige Möbel-Standardwerte, die mit der Zeit Spannungen erzeugen.',
          icon: 'mdi:alert',
          points: [
            'Monitor zu hoch oder zu niedrig',
            'Schreibtisch zwingt Schultern hoch',
            'Füße erreichen den Boden nicht',
            'Stuhl bietet keine Lendenwirbelstütze',
          ],
        },
        {
          title: 'Optimale Einrichtung',
          description: 'Personalisierte Maße basierend auf deinen Körperproportionen.',
          icon: 'mdi:check-circle',
          points: [
            'Monitor auf Augenhöhe',
            'Ellbogen im 90-Grad-Winkel',
            'Füße flach auf dem Boden',
            'Unterer Rücken vollständig gestützt',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Schnelle Haltungs Checkliste',
      icon: 'mdi:clipboard-check',
      badge: 'Aktion',
      html: '<p style="margin:0">Setze dich mit dem Rücken gegen den Stuhl. Prüfe, dass ein kleiner Zwischenraum zwischen der Rückseite deiner Knie und der Sitzkante besteht. Achte darauf, dass deine Handgelenke beim Tippen gerade sind. Die Oberkante deines Monitors sollte nicht höher als deine Augen sein. Mache alle 30 Minuten eine 2-minütige Gehpause.</p>',
    },
    {
      type: 'title',
      text: 'Die Wissenschaft des Sitzen und Stehens',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menschliche Körper sind nicht dafür ausgelegt, stundenlang in einer Position zu verharren. Beim Sitzen erhöht sich der Druck auf die Lendenwirbelscheiben um 40 Prozent im Vergleich zum Stehen. Beim stillen Stehen sammelt sich Blut in den Beinen und das Herz muss härter arbeiten, um es wieder nach oben zu pumpen. Der gesündeste Arbeitsrhythmus ist das Wechseln zwischen Sitzen und Stehen alle 30 bis 60 Minuten, kombiniert mit kurzen Spaziergängen. Dieses Tool berechnet beide Modi, damit du einen höhenverstellbaren Schreibtisch richtig einrichten kannst.',
    },
    {
      type: 'summary',
      title: 'Wie du einen ergonomischen Arbeitsplatz einrichtest',
      items: [
        'Messe deine Körpergröße barfuß in Zentimetern.',
        'Nutze diesen Simulator, um die exakten Höhen für Stuhl, Schreibtisch und Monitor zu erhalten.',
        'Passe zuerst den Stuhl an, dann den Schreibtisch, dann den Monitor.',
        'Bei einem Stehschreibtisch stelle ihn 30 Zentimeter über die Sitzhöhe ein.',
        'Platziere den Monitor in einer Armlänge Entfernung und neige ihn um 10 bis 20 Grad nach hinten.',
        'Mache alle 30 Minuten eine 2-minütige Pause zum Gehen oder Dehnen.',
      ],
    },
  ],
  ui: {
    labelMode: 'Arbeitsplatzmodus',
    modeSit: 'Sitzend',
    modeStand: 'Stehend',
    labelHeight: 'Deine Körpergröße',
    unitCm: 'cm',
    labelGender: 'Körperbau',
    genderMale: 'Männlich',
    genderFemale: 'Weiblich',
    labelChair: 'Stuhl',
    labelDesk: 'Schreibtisch',
    labelMonitor: 'Monitor',
    labelDistance: 'Entfernung',
    labelAngle: 'Winkel',
    labelGood: 'Gut',
    labelAdjust: 'Anpassen',
    badgeChair: 'Sitz',
    badgeDesk: 'Oberfläche',
    badgeMonitor: 'Bildschirm',
    tipScreenLow: 'Hebe deinen Monitor an',
    tipScreenHigh: 'Senke deinen Monitor ab',
    tipDeskLow: 'Hebe deinen Schreibtisch an',
    tipDeskHigh: 'Senke deinen Schreibtisch ab',
    tipChairLow: 'Hebe deinen Stuhl an',
    tipChairHigh: 'Senke deinen Stuhl ab',
    tipDistance: 'Bewege den Bildschirm auf Armlänge',
  },
};