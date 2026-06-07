import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-peinture-murs';
const title = 'Calculateur de Peinture et de Dilution pour Murs';
const description =
  'Calculez exactement combien de litres ou de gallons de peinture vous avez besoin pour vos murs. Ajustez les couches, le type de surface, la dilution et obtenez le coût réel avant d\'acheter.';

const faqData = [
  {
    question: 'Comment calculer la quantité exacte de peinture?',
    answer:
      'Multipliez la surface du mur par le nombre de couches, puis divisez par le rendement de la peinture en mètres carrés ou pieds carrés par litre ou gallon. Soustrayez d\'abord les portes et fenêtres de la surface totale.',
  },
  {
    question: 'Quelle quantité de peinture faut-il pour une pièce standard?',
    answer:
      'Une pièce de 12 mètres carrés avec des plafonds de 2,5 mètres a environ 30 mètres carrés de surface murale. Avec deux couches et un rendement de 12 mètres carrés par litre, il vous faut environ 5 litres de peinture.',
  },
  {
    question: 'Dois-je diluer la peinture avant de l\'appliquer?',
    answer:
      'Les peintures plastiques à base d\'eau sont généralement prêtes à l\'emploi ou nécessitent 5 à 10 pour cent d\'eau sur la première couche. Les peintures émaillées ou à l\'huile nécessitent souvent un solvant spécifique indiqué sur le pot.',
  },
  {
    question: 'Combien de couches sont vraiment nécessaires?',
    answer:
      'Les surfaces neuves ou très absorbantes ont besoin d\'une sous-couche plus deux couches de finition. Repeindre un mur déjà peint dans une couleur similaire nécessite généralement une à deux couches.',
  },
  {
    question: 'Dois-je soustraire les portes et fenêtres?',
    answer:
      'Oui. Mesurez chaque ouverture et soustrayez-la de la surface murale totale. En règle générale, une porte fait environ 2 mètres carrés et une fenêtre environ 1,5 mètre carré.',
  },
  {
    question: 'Le type de surface change-t-il le rendement?',
    answer:
      'Oui. Les murs lisses et préparés offrent un rendement allant jusqu\'à 14 mètres carrés par litre. Le béton brut, le crépi ou la brique absorbante peuvent faire chuter le rendement à 6 ou 8 mètres carrés par litre.',
  },
];

const howToData = [
  {
    name: 'Mesurez vos murs',
    text: 'Mesurez la largeur et la hauteur de chaque mur. Multipliez-les pour obtenir la surface de chaque mur, puis additionnez tous les murs.',
  },
  {
    name: 'Soustrayez les ouvertures',
    text: 'Mesurez les portes et fenêtres et soustrayez leur surface du total pour obtenir la surface réelle à peindre.',
  },
  {
    name: 'Choisissez le type de peinture',
    text: 'Sélectionnez le type de peinture dans le calculateur. La peinture plastique mate, la peinture plastique satinée et la peinture émaillée ont des rendements et des recommandations de dilution différents.',
  },
  {
    name: 'Indiquez les couches et le prix',
    text: 'Indiquez le nombre de couches que vous prévoyez d\'appliquer et le prix par litre ou gallon. Le calculateur vous donnera la quantité exacte et le coût total.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Calculateur de Peinture: Achetez Exactement ce dont Vous Avez Besoin',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Peindre une pièce sans calculer au préalable se termine souvent par des <strong>pots à moitié pleins</strong> ou des courses d\'urgence au magasin. La raison est simple: le rendement de la peinture varie avec la porosité de la surface, le changement de couleur et le nombre de couches. Un mur lisse et déjà peint peut offrir un rendement allant jusqu\'à 14 mètres carrés par litre, tandis qu\'un mur crépi peut absorber la même quantité et ne couvrir que 6 mètres carrés par litre.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Élevé', label: 'Couverture standard', icon: 'mdi:format-paint' },
        { value: '2 couches', label: 'Recommandé', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Dilution typique', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Comment Fonctionne Vraiment le Rendement de la Peinture',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les fabricants indiquent un rendement théorique sur le pot. Ce chiffre suppose une surface parfaitement lisse, non absorbante, blanche et appliquée avec un rouleau professionnel dans des conditions idéales. Dans la réalité, <strong>murs poreux, couleurs foncées et application bricolage</strong> réduisent ce rendement de 20 à 40 pour cent. Notre calculateur vous permet de choisir des profils réalistes pour ne pas être en manque.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Peinture Plastique Mate',
          description: 'Le choix le plus courant pour les intérieurs. Bonne couverture, facile à retoucher et lavable dans la plupart des qualités.',
          icon: 'mdi:palette',
          points: ['Couverture standard pour intérieurs', 'Dilution: 5 à 10 pour cent d\'eau', 'Idéal pour: salons et chambres'],
        },
        {
          title: 'Peinture Plastique Satinée',
          description: 'Fini légèrement brillant avec une plus grande résistance à l\'humidité et aux taches. Plus difficile à retoucher sans traces.',
          icon: 'mdi:brightness-6',
          points: ['Couverture légèrement supérieure', 'Dilution: 5 pour cent d\'eau', 'Idéal pour: cuisines et salles de bain'],
        },
        {
          title: 'Peinture Émaillée',
          description: 'Fini dur et durable pour la menuiserie, les radiateurs et les zones à fort passage. Nécessite un solvant ou un diluant spécifique.',
          icon: 'mdi:spray',
          points: ['Fini dur et durable', 'Dilution: 10 à 15 pour cent de solvant', 'Idéal pour: portes, cadres et meubles'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Mesure Pratique des Surfaces',
      icon: 'mdi:ruler-square',
      badge: 'Conseil',
      html: '<p style="margin:0">Multipliez la largeur par la hauteur de chaque mur. Pour un total rapide, additionnez toutes les largeurs et multipliez-les par la hauteur de la pièce. Soustrayez ensuite environ 2 mètres carrés par porte standard et 1,5 mètre carré par fenêtre.</p>',
    },
    {
      type: 'title',
      text: 'Règles de Dilution et d\'Application',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les premières couches sur des surfaces neuves ou réparées nécessitent toujours une légère dilution pour que la peinture pénètre et accroche. Les couches de finition doivent être appliquées non diluées ou avec le minimum indiqué par le fabricant. <strong>Une dilution excessive casse le pigment</strong> et laisse des zones transparentes qui nécessitent une couche supplémentaire.',
    },
    {
      type: 'summary',
      title: 'Pourquoi Calculer Avant d\'Acheter',
      items: [
        'Évitez les restes de peinture qui sèchent dans le pot et finissent en déchet.',
        'Prévenez les différences de teinte entre les lots achetés à des moments différents.',
        'Budgetisez avec précision: connaissez le coût réel incluant sous-couche et outils.',
        'Planifiez le travail en une seule fois sans l\'interrompre pour du matériel supplémentaire.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Surface et Peinture',
    labelMetric: 'Métrique',
    labelImperial: 'Impérial',
    labelArea: 'Surface totale à peindre',
    labelAreaFt: 'Surface totale à peindre',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Rendement de la peinture',
    labelYieldFt: 'Rendement de la peinture',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Sélectionnez le type de peinture',
    btnPlasticMatTitle: 'Plastique Mat',
    btnPlasticMatSub: 'Mat · Eau 5%',
    btnPlasticSatinTitle: 'Plastique Satiné',
    btnPlasticSatinSub: 'Satiné · Eau 5%',
    btnEnamelTitle: 'Émail',
    btnEnamelSub: 'Émail · Solvant 10%',
    labelCoats: 'Nombre de couches',
    unitCoats: 'couches',
    labelPrice: 'Prix par litre',
    labelPriceFt: 'Prix par gallon',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Pourcentage de dilution',
    unitDilution: '%',
    resultBadge: 'Calcul de peinture',
    labelPaint: 'Litres de peinture',
    labelPaintGal: 'Gallons de peinture',
    labelCost: 'Coût total',
    labelWater: 'Liquide de dilution',
    labelWaterGal: 'Liquide de dilution',
    labelTotalVolume: 'Mélange total',
    labelTotalVolumeGal: 'Mélange total',
    labelCurrency: 'Devise',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
