import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-disposition-carrelage';
const title = 'Calculateur de Disposition et de Pertes de Carrelage';
const description =
  'Planifiez le sol de votre pièce avec précision. Calculez la quantité exacte de carreaux, le nombre de boîtes nécessaire, le coût total et visualisez la disposition en temps réel avec un aperçu de grille interactif.';

const faqData = [
  {
    question: 'Comment calculer le nombre de carreaux nécessaires pour une pièce ?',
    answer:
      'Mesurez la largeur et la longueur de la pièce, choisissez la dimension du carreau et indiquez la largeur du joint. Le calculateur divise les dimensions de la pièce par la taille du carreau plus le joint pour donner le nombre exact de pièces par rangée et colonne.',
  },
  {
    question: 'Quel pourcentage de pertes dois-je prévoir lors de l\'achat de carrelage ?',
    answer:
      'Pour les pièces rectangulaires standard, ajoutez 10% de pertes. Pour les pièces avec de nombreux coins, des dispositions en diagonale ou des découpes complexes, augmentez à 15%. Cela couvre les cassures et les erreurs de coupe.',
  },
  {
    question: 'L\'épaisseur du joint change-t-elle vraiment le nombre de carreaux ?',
    answer:
      'Oui. Des joints plus larges réduisent la couverture effective de chaque carreau, augmentant légèrement le nombre total nécessaire. Le calculateur prend cela en compte automatiquement dans chaque rangée et colonne.',
  },
  {
    question: 'Dois-je acheter des boîtes supplémentaires au-delà du pourcentage de pertes ?',
    answer:
      'Il est prudent d\'acheter une boîte supplémentaire si disponible. Les teintes de lot peuvent varier d\'une production à l\'autre, et disposer de pièces de rechange correspondantes facilite les réparations futures.',
  },
  {
    question: 'Comment carreler une pièce de forme irrégulière ?',
    answer:
      'Divisez la pièce en rectangles plus petits. Calculez chaque section séparément et additionnez les totaux. Arrondissez toujours les boîtes partielles au supérieur pour garantir une couverture complète.',
  },
  {
    question: 'Quelle est la différence de pertes entre le grès cérame et la céramique ?',
    answer:
      'Le grès cérame est plus dense et difficile à couper, ce qui peut augmenter les pertes de coupe de 2% à 3% par rapport à la céramique standard. Les deux matériaux doivent suivre le même processus de mesure.',
  },
  {
    question: 'Puis-je retourner les boîtes de carrelage non utilisées ?',
    answer:
      'La plupart des détaillants acceptent les boîtes non ouvertes dans un délai de 30 jours. Conservez toujours le reçu et n\'ouvrez pas les boîtes excédentaires tant que l\'installation n\'est pas entièrement terminée.',
  },
];

const howToData = [
  {
    name: 'Mesurer la pièce',
    text: 'Relevez la largeur et la longueur du sol dans le système d\'unités de votre choix.',
  },
  {
    name: 'Choisir le carreau et le joint',
    text: 'Choisissez les dimensions de vos carreaux et la largeur de joint souhaitée.',
  },
  {
    name: 'Calculer et visualiser',
    text: 'Saisissez les valeurs dans le calculateur, ajustez la marge de pertes et examinez l\'aperçu de la disposition en direct.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Guide Complet pour Planifier un Sol Carrelé et Maîtriser les Pertes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un projet de carrelage réussi commence bien avant la première couche d\'adhésif. Le mesurage précis, la planification intelligente de la disposition et l\'estimation exacte des pertes déterminent si votre rénovation reste dans le budget et dans les délais. <strong>Notre calculateur de disposition de carrelage interactif</strong> transforme les dimensions brutes en un plan de sol visuel, montrant exactement combien de carreaux s\'insèrent par rangée, combien de boîtes acheter et où va votre argent.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Pertes Standard', icon: 'mdi:alert-circle' },
        { value: '30+ ans', label: 'Durée de Vie du Carrelage', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Pose Moyenne', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Grands Formats',
          description: 'Les carreaux de plus de 60 cm créent un rendu moderne et continu, mais nécessitent un support parfaitement plat et génèrent plus de pertes de coupe dans les petites pièces.',
          icon: 'mdi:arrow-expand',
          points: ['Moins de joints visibles', 'Effet visuel premium', 'Pertes élevées dans les espaces restreints'],
        },
        {
          title: 'Petits Mosaïques',
          description: 'Idéaux pour les salles de bain et les motifs complexes. Ils s\'adaptent aux formes irrégulières, mais demandent plus de joint et de temps de pose.',
          icon: 'mdi:apps',
          points: ['Flexibles autour des obstacles', 'Plus de joint requis', 'Temps de pose plus long'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Pourquoi la Visualisation de la Disposition est Essentielle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Voir votre grille de carrelage avant l\'achat évite les surprises coûteuses. Un aperçu en direct révèle si la taille choisie laisse des bandes étroites maladroites sur les bords ou crée un sol équilibré et symétrique. En ajustant la largeur de joint et l\'orientation du carreau dans le calculateur, vous pouvez optimiser la disposition pour l\'esthétique et l\'efficacité avant de passer commande.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tableau de Référence Rapide de Couverture',
      icon: 'mdi:table',
      badge: 'Référence',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 carreaux par m²</li><li><strong>45 x 45 cm</strong> → 5 carreaux par m²</li><li><strong>60 x 60 cm</strong> → 3 carreaux par m²</li><li><strong>60 x 120 cm</strong> → 1,5 carreaux par m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Conseils Pros pour Minimiser les Pertes',
      items: [
        'Commandez 10% de plus pour les poses droites et 15% pour les diagonales ou en chevrons.',
        'Conservez toutes les boîtes du même lot de production pour garantir la cohérence des teintes.',
        'Mesurez en diagonale dans la pièce pour vérifier l\'équerrage avant de planifier les rangées.',
        'Utilisez les grands formats uniquement dans les pièces plus larges que la longueur du carreau pour éviter les coupes excessives.',
        'Arrondissez toujours les quantités de boîtes au supérieur ; c\'est moins cher qu\'une deuxième livraison.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuration de la Pièce',
    labelRoomWidth: 'Largeur de la pièce',
    labelRoomLength: 'Longueur de la pièce',
    labelTileWidth: 'Largeur du carreau',
    labelTileLength: 'Longueur du carreau',
    labelGrout: 'Joint',
    labelWaste: 'Marge de pertes',
    labelTilesPerBox: 'Carreaux par boîte',
    labelPrice: 'Prix par boîte',
    labelPattern: 'Motif de pose',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'pcs',
    unitPrice: '/boîte',
    resultBadge: 'Aperçu en direct',
    labelArea: 'Surface du sol',
    labelTiles: 'Carreaux total',
    labelBoxes: 'Boîtes nécessaires',
    labelCost: 'Coût total',
    labelWasteCount: 'Pertes de carreaux',
    labelCuts: 'Coupe partielle',
    currency: 'EUR',
    btnMetric: 'Métrique',
    btnImperial: 'Impérial',
    btnPatternStraight: 'Droit',
    btnPatternBrick: 'Décalé',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Disposition optimale',
    badgeWarning: 'Alerte pertes élevées',
    visualTitle: 'Aperçu de la disposition',
  },
};
