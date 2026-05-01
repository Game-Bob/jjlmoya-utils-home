import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-distance-projecteur';
const title = 'Calculateur de Distance de Projection';
const description =
  "Calculez la distance exacte pour installer votre projecteur selon la taille d'écran souhaitée et le Throw Ratio. Outil visuel avec simulation en temps réel.";

const faqData = [
  {
    question: "Qu'est-ce que le Throw Ratio ?",
    answer:
      "Un nombre qui définit la taille de l'image à une distance donnée. Il se calcule en divisant la distance de projection par la largeur de l'écran. Un ratio de 1.5 signifie qu'en projetant depuis 1.5m, vous obtenez 1m de largeur d'image.",
  },
  {
    question: 'À quelle distance placer le projecteur pour un écran de 100 pouces ?',
    answer:
      "Cela dépend entièrement du Throw Ratio de votre projecteur. Avec un ratio standard de 1.5:1, il vous faudrait environ 3.3m. Avec un projecteur Short Throw, vous pouvez y parvenir à moins d'1m.",
  },
  {
    question: "Quelle est la différence entre 16:9 et 4:3 ?",
    answer:
      "16:9 est le format panoramique pour les films et séries modernes. 4:3 est le format classique pour les présentations et rétroprojecteurs. Choisir le bon format évite les bandes noires excessives.",
  },
  {
    question: "La hauteur d'installation du projecteur est-elle importante ?",
    answer:
      "Oui. Les projecteurs disposent d'un décalage vertical (offset) ou d'une correction trapézoïdale (keystone). L'idéal est de le monter centré par rapport au bord supérieur ou inférieur de l'écran pour éviter les déformations.",
  },
];

const howToData = [
  {
    name: 'Consulter le Throw Ratio',
    text: "Cherchez sur la boîte ou le manuel un nombre comme 1.2:1 ou 1.5-1.8:1.",
  },
  {
    name: "Définir la taille d'écran",
    text: "Entrez le nombre de pouces de diagonale souhaité ou la largeur disponible sur votre mur.",
  },
  {
    name: 'Choisir le format',
    text: 'Sélectionnez 16:9 pour les films et séries, 4:3 pour les présentations, ou 21:9 pour le format cinémascope.',
  },
  {
    name: 'Obtenir la distance',
    text: "La calculatrice vous donnera la distance exacte à laquelle monter le support du projecteur.",
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'Maîtriser la Géométrie de Projection',
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Installer un projecteur à l'œil peut gâcher l'expérience. Trop près et l'image est petite ; trop loin et vous perdez en luminosité. La clé est le <strong>Throw Ratio</strong>, un nombre qui définit précisément la relation entre distance et taille d'image.",
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × L', label: 'Formule de Distance', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: "Qu est ce que le Throw Ratio ?",
          description: "Le rapport entre la distance de projection et la largeur de l'image. Un TR de 1.5 signifie qu'il faut 1.5m de distance par mètre de largeur d'écran.",
          icon: 'mdi:ruler',
          points: ['TR < 1 : Short Throw, idéal pour les petits espaces', 'TR 1–2 : Standard pour salons et salles de réunion', "TR > 2 : Long Throw, pour les grands auditoriums"],
        },
        {
          title: "Format et Rapport d'Aspect",
          description: "Le format détermine les proportions de l'image. Utiliser le mauvais format crée des bandes noires qui gaspillent la surface d'écran et réduisent la luminosité perçue.",
          icon: 'mdi:aspect-ratio',
          points: ["16:9 (1.78:1) : standard HD/4K pour cinéma et séries", '21:9 (2.35:1) : format cinémascope pour home cinema', "4:3 (1.33:1) : pour présentations et projecteurs de bureau"],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: "Conseils d'Installation Professionnelle",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>Lens Shift vs Keystone :</strong> Si votre projecteur dispose d'un Lens Shift, utilisez-le toujours plutôt que la correction Keystone numérique. Le Keystone rogne des pixels et réduit la résolution effective. Un montage physique correct élimine tout besoin de correction.",
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: "Lumière Ambiante et Gain d'Écran",
      icon: 'mdi:lightbulb-on',
      badge: 'Conseil Pro',
      html: "<p>Dans les pièces avec lumière ambiante, envisagez un écran à gain élevé (>1.0) pour compenser la perte de contraste. Dans les salles sombres, un écran neutre (1.0) ou à gain négatif offre de meilleurs angles de vision et des couleurs plus uniformes.</p>",
    },
    {
      type: 'summary',
      title: "Checklist d'Installation",
      items: [
        "Notez le Throw Ratio de votre projecteur avant de choisir l'emplacement de montage.",
        "Vérifiez la taille maximale d'image permise par l'espace disponible.",
        "Montez le projecteur centré verticalement par rapport à l'écran.",
        "Évitez le Keystone numérique : utilisez le Lens Shift ou ajustez la position physique.",
        "Assurez-vous qu'aucune source lumineuse directe ne pointe vers l'écran.",
      ],
    },
  ],
  ui: {
    configTitle: 'Configuration',
    configSubtitle: 'Définissez votre écran et projecteur',
    labelDiagonal: "Diagonale d'Écran",
    labelDiagonalUnit: 'Pouces (")',
    labelFormat: "Format (Rapport d'Aspect)",
    labelThrowRatio: 'Throw Ratio',
    throwRatioHint: "Consultez le manuel de votre projecteur. Exemple : 1.50 signifie que pour 1m de largeur d'image, vous avez besoin de 1.5m de distance.",
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cinéma',
    ratio43Sub: 'Rétro',
    labelWidth: "Largeur d'Écran",
    labelHeight: "Hauteur d'Écran",
    labelDistance: 'Distance Requise',
    simulationBadge: 'Simulation en Temps Réel',
  },
};
