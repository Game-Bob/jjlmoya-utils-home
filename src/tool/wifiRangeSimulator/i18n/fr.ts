import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulateur-de-portee-wifi';
const title = 'Simulateur de Portée et d\'Obstacles WiFi';
const description =
  'Dessinez votre plan de maison, placez murs, portes, meubles et appareils, puis faites glisser votre routeur et votre appareil pour trouver le meilleur chemin de signal. Visualisez en direct la perte de couverture, le verdict streaming et des conseils de placement pour éliminer les zones mortes sans acheter de nouveau matériel.';

const faqData = [
  {
    question: 'Pourquoi mon signal WiFi chute-t-il dans certaines pièces ?',
    answer:
      'Le WiFi utilise des ondes radio qui sont absorbées, réfléchies ou bloquées par les matériaux physiques. Les briques pleines, le béton et le métal sont les pires, chacun réduisant considérablement la force du signal. L\'eau et le verre peuvent également réfléchir ou absorber une partie du signal.',
  },
  {
    question: 'Quel est l\'impact d\'un mur en béton ou en pierre sur le WiFi ?',
    answer:
      'Un mur en béton standard peut atténuer un signal 2,4 GHz de 10 à 20 décibels. Les murs épais en pierre de 70 à 80 centimètres peuvent atteindre 22 décibels ou plus. Cela se traduit par une perte de portée d\'environ 50 à 90 pour cent selon l\'épaisseur et la densité. À 5 GHz, la perte est encore plus importante car les fréquences plus élevées sont absorbées plus rapidement par les matériaux denses.',
  },
  {
    question: 'Où dois-je placer mon routeur pour une meilleure couverture ?',
    answer:
      'Central, surélevé et dégagé. Placez le routeur au milieu de votre maison, au moins à un mètre des murs épais et des objets métalliques, et montez-le à hauteur de poitrine pour une dispersion horizontale. Évitez les coins, les placards et les positions basses derrière les meubles.',
  },
  {
    question: 'Les portes en verre peuvent-elles bloquer le WiFi ?',
    answer:
      'Le verre clair a un impact minime, mais les fenêtres à double vitrage ou à revêtement métallique peuvent réfléchir les signaux. Le simulateur traite le verre standard comme un obstacle léger avec environ 2 à 3 décibels de perte.',
  },
];

const howToData = [
  {
    name: 'Identifier le chemin du signal',
    text: 'Imaginez une ligne droite entre votre routeur et l\'appareil qui vous intéresse. Chaque objet qui croise cette ligne est important.',
  },
  {
    name: 'Ajouter chaque obstacle',
    text: 'Cliquez sur les boutons de matériau dans le simulateur pour ajouter chaque mur, porte, appareil électroménager ou meuble qui croise le chemin.',
  },
  {
    name: 'Lire le verdict',
    text: 'Regardez l\'anneau de signal, l\'animation d\'onde et le tableau de bord streaming se mettre à jour instantanément à mesure que vous ajoutez ou retirez des objets.',
  },
  {
    name: 'Appliquer le conseil contextuel',
    text: 'Suivez les fiches de placement qui apparaissent en fonction de votre combinaison exacte d\'obstacles pour améliorer la couverture sans acheter de nouveau matériel.',
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
  inLanguage: 'fr',
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
      text: 'Pourquoi votre WiFi meurt dans la pièce d\'à côté',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Votre routeur émet des ondes radio dans toutes les directions. Ces ondes traversent l\'air facilement, mais chaque objet physique qu\'elles rencontrent laisse des traces. Certains matériaux laissent passer la majeure partie du signal. D\'autres le dévorent complètement. Comprendre quels objets de votre maison tuent silencieusement votre connexion est la première étape pour éliminer les zones mortes sans dépenser un seul euro en nouveau matériel.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Perte cloison sèche', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Mur épais en pierre', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Porte métallique', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Le coût réel de chaque objet dans votre maison',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tous les obstacles ne se valent pas. Une simple cloison sèche peut vous faire perdre quelques pour cent de signal, mais un pilier en béton ou une porte métallique peut réduire votre portée effective de moitié. Voici à quoi vous faites vraiment face lorsque vous placez votre routeur derrière la télé, à côté du frigo ou au sol sous une étagère métallique.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Obstacles légers',
          description: 'Ces objets causent une perte de signal minimale et sont généralement sans danger près du chemin du signal. Une fenêtre ou une porte vitrée ne devrait pas vous inquiéter.',
          icon: 'mdi:window-open-variant',
          points: [
            'Porte vitrée: 2 à 3 dB de perte',
            'Fenêtre standard: 2 dB de perte',
            'Cloison sèche: 3 dB de perte',
            'Porte intérieure en bois: 4 dB de perte',
          ],
        },
        {
          title: 'Obstacles modérés',
          description: 'Ces objets créent une entaille notable dans votre couverture. Un ou deux vont bien, mais en accumuler trois ou plus sur le même chemin de signal commencera à causer des mises en mémoire tampon et des ralentissements.',
          icon: 'mdi:wardrobe',
          points: [
            'Armoire en bois: 5 dB de perte',
            'Grand miroir: 6 dB de perte',
            'Machine à laver: 6 dB de perte',
            'Four à micro-ondes: 5 dB de perte',
          ],
        },
        {
          title: 'Obstacles lourds',
          description: 'Ce sont les tueurs silencieux des réseaux domestiques. Un seul mur en béton ou une porte métallique peut transformer un signal fort en signal faible, et les accumuler crée des zones mortes garanties.',
          icon: 'mdi:wall',
          points: [
            'Mur en brique pleine: 8 dB de perte',
            'Sol ou plafond: 10 dB de perte',
            'Réfrigérateur: 10 dB de perte',
            'Aquarium: 12 dB de perte',
          ],
        },
        {
          title: 'Obstacles extrêmes',
          description: 'Ces matériaux absorbent ou réfléchissent presque toute l\'énergie radio. Si votre chemin de signal en croise un, vous devez déplacer le routeur ou l\'appareil. Il n\'y a pas de solution de contournement.',
          icon: 'mdi:shield',
          points: [
            'Mur épais en pierre (70-80 cm): 22 dB de perte',
            'Mur en béton: 15 dB de perte',
            'Armoire métallique: 12 dB de perte',
            'Porte ou grille métallique: 18 dB de perte',
            'Cage d\'ascenseur: 20+ dB de perte',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Comment les différentes fréquences traversent les murs',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La plupart des routeurs modernes émettent sur deux bandes: 2,4 GHz et 5 GHz. La fréquence la plus basse voyage plus loin et se faufile plus facilement à travers les murs, mais elle est plus lente et encombrée. La fréquence la plus haute est ultra-rapide mais est absorbée par chaque obstacle sur son chemin.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pénétration 2,4 GHz',
          description: 'Les fréquences plus basses voyagent plus loin et pénètrent mieux les murs. Idéales pour la longue portée mais encombrées par les réseaux voisins.',
          icon: 'mdi:signal',
          points: [
            'Meilleure à travers la brique pleine et le béton',
            'Plus d\'interférences des routeurs voisins',
            'Vitesses maximales plus lentes, environ 150 Mbps réels',
            'Meilleure pour les appareils domotiques et l\'IoT',
          ],
        },
        {
          title: 'Pénétration 5 GHz',
          description: 'Les fréquences plus élevées offrent des vitesses plus rapides mais sont absorbées beaucoup plus rapidement par les matériaux de construction. Meilleures pour les espaces ouverts et les appareils proches.',
          icon: 'mdi:signal-5g',
          points: [
            'Mauvaise à travers le béton et le métal',
            'Moins d\'interférences, canaux plus propres',
            'Vitesses gigabit dans la même pièce',
            'Moins bonne couverture, meilleure qualité là où elle arrive',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Tueurs cachés: des objets que vous n\'auriez jamais soupçonnés',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La plupart des gens accusent les murs, mais certains des pires ennemis du WiFi sont des objets du quotidien. Un aquarium est principalement rempli d\'eau, et l\'eau absorbe les ondes radio 2,4 GHz presque parfaitement. Un grand miroir a un mince revêtement métallique au dos qui réfléchit le signal loin de votre appareil. Un four à micro-ondes émet des radiations à 2,4 GHz, exactement la même fréquence que votre routeur, provoquant des interférences chaque fois que vous réchauffez quelque chose.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le piège de l\'aquarium',
      icon: 'mdi:fish',
      badge: 'Bloqueur surprise',
      html: '<p>Un grand aquarium peut atténuer votre signal WiFi jusqu\'à 12 décibels. C\'est l\'équivalent d\'un mur en béton épais. Si votre routeur est d\'un côté de l\'aquarium et votre bureau de l\'autre, l\'eau fait plus de dégâts que le mur derrière.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'L\'effet miroir',
      icon: 'mdi:mirror',
      badge: 'Danger de réflexion',
      html: '<p>Les grands miroirs ont une fine couche de métal au dos conçue pour réfléchir la lumière. Cette même couche métallique réfléchit également les ondes radio. Un miroir orienté vers votre routeur peut dévier le signal loin de l\'endroit où vous en avez besoin, ou créer des interférences multi-trajets qui brouillent les paquets de données.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'L\'interférence du micro ondes',
      icon: 'mdi:microwave',
      badge: 'Brouilleur actif',
      html: '<p>Les fours à micro-ondes fonctionnent à 2,45 GHz, chevauchant directement la bande WiFi 2,4 GHz. En fonctionnement, un micro-ondes peut anéantir le signal 2,4 GHz dans un rayon de 3 à 5 mètres. Si votre routeur ne supporte que le 2,4 GHz et que votre cuisine est proche, passez à un routeur double bande et utilisez le 5 GHz pour les tâches critiques.</p>',
    },
    {
      type: 'title',
      text: 'Pièce par pièce: où placer votre routeur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'emplacement idéal du routeur n\'est pas le plus pratique. C\'est celui qui offre la ligne de vue la plus dégagée vers les pièces où vous utilisez réellement Internet. Voici comment réfléchir à chaque pièce.',
    },
    {
      type: 'table',
      headers: ['Pièce', 'Risque', 'Pourquoi c\'est difficile', 'Solution'],
      rows: [
        ['Cuisine', 'Élevé', 'Frigo, micro-ondes, armoires métalliques, canalisations', 'Placez le routeur hors de la cuisine, jamais à l\'intérieur.'],
        ['Salle de bain', 'Élevé', 'Miroirs, canalisations, carrelage avec treillis métallique', 'Évitez de placer le routeur derrière un mur de salle de bain.'],
        ['Chambre', 'Moyen', 'Armoires, murs épais, cadres de lit métalliques', 'Surélevez le routeur, dégagez le chemin au-dessus des meubles.'],
        ['Salon', 'Faible', 'Généralement ouvert, mais attention aux télés et consoles', 'Gardez le routeur visible, pas caché derrière la télé.'],
        ['Garage', 'Extrême', 'Portes métalliques, béton, voitures', 'N\'attendez pas d\'un routeur standard d\'atteindre le garage.'],
        ['Jardin / Terrasse', 'Élevé', 'Murs extérieurs, verre, distance', 'Utilisez un point d\'accès extérieur ou un nœud mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'La règle du mètre et autres astuces de placement',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De petits mouvements créent de grandes différences. Vous n\'avez pas besoin de recâbler votre maison. Vous devez juste comprendre comment les ondes radio se déplacent et leur donner un chemin dégagé.',
    },
    {
      type: 'tip',
      title: 'La règle du mètre',
      html: '<p>Déplacer votre routeur d\'à peine un mètre d\'une barrière en béton ou en métal peut récupérer jusqu\'à 40 pour cent de la puissance du signal perdue.</p>',
    },
    {
      type: 'tip',
      title: 'Surélevez pour la couverture',
      html: '<p>Surélevez le routeur à hauteur de poitrine sur une étagère. Les signaux rayonnent horizontalement depuis l\'antenne. Le placer au sol gaspille la moitié de votre couverture dans le sol.</p>',
    },
    {
      type: 'tip',
      title: 'Gardez le visible',
      html: '<p>Ne cachez jamais le routeur dans une armoire, un placard ou derrière la télé. L\'enceinte agit comme une cage de Faraday, piégeant le signal avant qu\'il n\'atteigne votre pièce.</p>',
    },
    {
      type: 'tip',
      title: 'Positionnement des antennes',
      html: '<p>Si votre routeur a des antennes externes, positionnez-en une à la verticale et une à l\'horizontale. Cela offre une meilleure couverture pour les appareils à différentes hauteurs.</p>',
    },
    {
      type: 'tip',
      title: 'Évitez les interférences',
      html: '<p>Gardez le routeur à au moins 1,5 mètre des micro-ondes, téléphones sans fil et moniteurs pour bébé. Ces appareils partagent le spectre 2,4 GHz et causent des interférences actives.</p>',
    },
    {
      type: 'tip',
      title: 'Avantage de l\'étage intermédiaire',
      html: '<p>Si vous vivez dans une maison à plusieurs étages, placez le routeur à l\'étage du milieu. Les signaux se propagent mal vers le haut et le bas à travers les planchers en béton.</p>',
    },
    {
      type: 'title',
      text: 'Verdicts streaming: ce que votre signal signifie vraiment',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les pourcentages sont abstraits. Ce qui vous importe vraiment, c\'est de savoir si vous pouvez regarder Netflix, gagner un match ou terminer un appel vidéo sans freezing. Voici ce que chaque niveau de signal signifie dans le monde réel.',
    },
    {
      type: 'table',
      headers: ['Signal', 'Streaming 4K', 'Jeux en ligne', 'Appels vidéo', 'Navigation'],
      rows: [
        ['80% à 100%', 'Parfait, chargement instantané', 'Faible latence, jeu compétitif', 'Cristallin, aucune coupure', 'Instantané, sans délai'],
        ['60% à 79%', 'Bon, mise en tampon occasionnelle', 'Jouable, pics de latence mineurs', 'Stable, rarement pixelisé', 'Rapide, sans problème'],
        ['40% à 59%', 'Tampon toutes les quelques minutes', 'Avertissements de latence, rubber banding', 'Pixelisé, quelques coupures', 'Utilisable, chargement plus lent'],
        ['20% à 39%', 'Impossible, gel constant', 'Déconnexions, injouable', 'Coupures fréquentes, inutilisable', 'Très lent, timeouts'],
        ['0% à 19%', 'Ne démarre pas', 'Impossible de se connecter', 'Pas de connexion', 'Inutilisable'],
      ],
    },
    {
      type: 'title',
      text: 'Solutions rapides avant d\'acheter quoi que ce soit',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Checklist d\'optimisation gratuite',
      items: [
        'Déplacez le routeur au centre de votre maison, pas dans un coin.',
        'Surélevez-le à hauteur de poitrine sur une étagère ou un meuble haut.',
        'Sortez-le des armoires, placards et de derrière la télé.',
        'Orientez une antenne à la verticale et une à l\'horizontale si possible.',
        'Utilisez le 5 GHz pour les appareils proches et le 2,4 GHz pour les éloignés.',
        'Changez de canal WiFi pour un moins encombré avec une application scanner.',
        'Mettez à jour le firmware du routeur pour corriger les bugs de signal.',
        'Redémarrez le routeur une fois par mois pour vider les fuites mémoire.',
      ],
    },
    {
      type: 'title',
      text: 'Quand mettre à niveau votre matériel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Parfois, l\'environnement gagne. Si vous avez essayé toutes les astuces de placement et que vous souffrez toujours de zones mortes, il est temps d\'étendre le réseau au lieu de lutter contre la physique.',
    },
    {
      type: 'proscons',
      title: 'Répéteur WiFi vs Système Mesh',
      items: [
        { pro: 'Les répéteurs sont bon marché et faciles à installer.', con: 'Les répéteurs créent un deuxième nom de réseau et divisent la vitesse par deux.' },
        { pro: 'Les répéteurs fonctionnent pour une seule zone morte.', con: 'Les répéteurs ont besoin d\'un signal existant fort à amplifier.' },
        { pro: 'Les systèmes mesh créent un réseau unique et transparent.', con: 'Les systèmes mesh sont plus chers à l\'achat.' },
        { pro: 'Le mesh gère plusieurs étages et grandes maisons.', con: 'Le mesh nécessite un nœud principal près du modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Quand utiliser le mesh',
      html: '<p>Pour les maisons de plus de 120 mètres carrés ou avec des murs en béton épais, un système mesh avec au moins deux nœuds surpassera n\'importe quel routeur individuel, aussi cher soit-il.</p>',
    },
    {
      type: 'title',
      text: 'Comprendre les décibels en termes simples',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les décibels sont logarithmiques, ce qui signifie qu\'ils ne se comportent pas comme des nombres normaux. Chaque perte de 3 dB réduit votre puissance de signal de moitié. Une perte de 6 dB signifie qu\'il ne reste qu\'un quart de la puissance d\'origine. Une perte de 10 dB signifie qu\'il ne reste qu\'un dixième. C\'est pourquoi un mur en béton à 15 dB est dévastateur. Il n\'affaiblit pas seulement le signal: il l\'anéantit.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Atténuation', definition: 'La perte progressive de puissance du signal lors de son passage à travers un matériau. Plus le nombre est élevé, plus le signal perdu est important.' },
        { term: 'dBm', definition: 'Une unité de puissance utilisée pour mesurer la force du signal WiFi. 0 dBm équivaut à un milliwatt. Les valeurs négatives sont normales: -30 est excellent et -80 est à peine utilisable.' },
        { term: 'Zone morte', definition: 'Une zone où le signal WiFi est trop faible pour établir ou maintenir une connexion fiable.' },
        { term: 'Réseau mesh', definition: 'Un système de plusieurs nœuds routeurs qui travaillent ensemble pour couvrir une grande surface avec un seul réseau WiFi transparent.' },
        { term: 'Interférence multi-trajets', definition: 'Lorsque les ondes radio rebondissent sur les murs et les objets, créant plusieurs copies retardées du même signal qui perturbent le récepteur.' },
        { term: 'SSID', definition: 'Le nom de votre réseau WiFi. Les répéteurs créent souvent un second SSID, tandis que les systèmes mesh conservent un seul nom sur tous les nœuds.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La règle d\'or du placement du routeur',
      icon: 'mdi:map-marker-radius',
      badge: 'Conseil clé',
      html: '<p>Si votre routeur est actuellement dans un coin, dans une armoire ou au sol, vous gaspillez 50 à 70 pour cent de sa portée potentielle avant même que le signal ne quitte la pièce. La mise à niveau la plus rapide que vous puissiez faire est de le déplacer vers un endroit ouvert, central et surélevé. Ce seul changement résout souvent plus de problèmes que l\'achat de nouveaux équipements.</p>',
    },
    {
      type: 'summary',
      title: 'Comment prévenir les zones mortes WiFi',
      items: [
        'Placez le routeur au centre, surélevé et à découvert.',
        'Réduisez au minimum le nombre de murs entre le routeur et l\'appareil.',
        'Évitez les cuisines, salles de bain et garages comme emplacement du routeur.',
        'Utilisez le 5 GHz pour la vitesse dans la même pièce, le 2,4 GHz pour la distance.',
        'Envisagez un mesh pour les grandes maisons ou les murs extérieurs épais.',
        'Redémarrez mensuellement et mettez à jour le firmware pour des performances optimales.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Objets domestiques qui bloquent le WiFi',
    labelAddObstacle: 'Cliquez pour ajouter au chemin du signal',
    labelRemove: 'Retirer',
    labelSignalStrength: 'Signal',
    labelEffectiveRange: 'Portée effective',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Verdict streaming',
    verdictPerfect: 'Parfait',
    verdictGood: 'Bon',
    verdictFair: 'Moyen',
    verdictPoor: 'Mauvais',
    verdictDead: 'Zone morte',
    tipTitle: 'Conseil de placement',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Jeux en ligne',
    labelVideoCalls: 'Appels vidéo',
    labelBasicBrowsing: 'Navigation de base',
    statusPerfect: 'Parfait',
    statusGood: 'Bon',
    statusFair: 'Moyen',
    statusPoor: 'Mauvais',
    statusImpossible: 'Impossible',
    statusLowLatency: 'Faible latence',
    statusLagWarning: 'Avertissement de latence',
    statusDisconnect: 'Déconnexion',
    statusStable: 'Stable',
    statusPixelated: 'Pixelisé',
    statusDropped: 'Interrompu',
    statusPass: 'Réussi',
    statusUnusable: 'Inutilisable',
    tipMoveRouter: 'Déplacer votre routeur d\'à peine 1 mètre de cette barrière solide pourrait améliorer le signal jusqu\'à 40%.',
    tipElevateRouter: 'Surélevez le routeur à hauteur de poitrine. Les signaux se propagent horizontalement, et le sol absorbe plus que vous ne le pensez.',
    tipReduceObstacles: 'Chaque mur supplémentaire divise le signal par deux. Essayez de réduire le nombre d\'obstacles entre le routeur et l\'appareil.',
  },
};
