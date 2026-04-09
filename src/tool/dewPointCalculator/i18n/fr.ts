import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'calculateur-point-de-rosee';
const title = 'Calculateur de Point de Rosée';
const description =
  "Calculez la température de condensation sur vos murs à partir de l'humidité ambiante et de la température. Un outil essentiel pour prévenir l'humidité et protéger la santé structurale de votre domicile.";

const faqData = [
  {
    question: "Qu'est-ce que le point de rosée exactement ?",
    answer:
      "C'est la température à laquelle l'air doit refroidir pour que la vapeur d'eau se condense en eau liquide. Plus l'humidité relative est élevée, plus le point de rosée est proche de la température actuelle.",
  },
  {
    question: "Pourquoi de la moisissure apparaît-elle dans les coins de mon logement ?",
    answer:
      "Les coins sont souvent des ponts thermiques où le mur est plus froid. Si la température de cette surface descend sous le point de rosée, de l'eau liquide se forme. La moisissure a besoin de cette humidité constante pour se développer.",
  },
  {
    question: "Comment puis-je réduire l'humidité chez moi ?",
    answer:
      "La méthode la plus efficace est la ventilation — surtout après la douche ou la cuisine — et l'utilisation de déshumidificateurs. Maintenir une température constante aide aussi l'air à retenir plus de vapeur sans condenser.",
  },
  {
    question: "La moisissure par condensation est-elle dangereuse ?",
    answer:
      "Oui. La moisissure libère des spores qui peuvent provoquer des problèmes respiratoires, des allergies et de l'asthme. Détecter le risque de condensation avec cette calculatrice est la première étape vers un logement sain.",
  },
];

const howToData = [
  {
    name: "Mesurer la température et l'humidité",
    text: "Utilisez un thermomètre et un hygromètre pour connaître les valeurs actuelles de la pièce.",
  },
  {
    name: 'Saisir les valeurs',
    text: "Ajustez la température en degrés Celsius et le pourcentage d'humidité dans la calculatrice.",
  },
  {
    name: 'Obtenir la température critique',
    text: "L'outil vous indiquera à quelle température exacte l'eau commencera à se condenser sur les surfaces.",
  },
  {
    name: 'Vérifier les surfaces',
    text: "Si vous disposez d'un thermomètre laser, mesurez la température de vos murs. Si elle est égale ou inférieure au résultat, vous devez ventiler ou isoler.",
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: "Magnus Approximation of the Dew-Point — Meteorological Applications (2011)",
      url: 'https://es.scribd.com/document/331352069/dew-point',
    },
    {
      name: "Guide to Meteorological Instruments and Methods of Observation — WMO (2021)",
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Qu'est-ce que le Point de Rosée et Pourquoi est-il Important ?",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le point de rosée est la température à laquelle l'air doit refroidir pour que la vapeur d'eau se condense en eau liquide. Dans un logement, ce concept marque la frontière entre une maison saine et une maison avec des problèmes structurels d'humidité. Lorsque la température d'une surface (comme un mur mal isolé) descend sous le point de rosée, des gouttelettes d'eau apparaissent — le terrain idéal pour l'<em>Aspergillus</em> et autres champignons nocifs.",
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Différence Sûre', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Humidité Idéale', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Danger Extrême', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'La Formule de Magnus-Tetens',
          description: "Pour calculer le point de rosée avec précision scientifique, nous utilisons l'approximation de Magnus-Tetens, avec les constantes b=17,625 et c=243,04°C recommandées par l'Organisation Météorologique Mondiale pour des températures entre 0°C et 50°C.",
          icon: 'mdi:calculator',
          points: ["Précision scientifique validée par l'OMM", 'Valide pour les plages de température résidentielles'],
        },
        {
          title: 'Ponts Thermiques et Moisissures',
          description: "Les coins de pièces, les cadres de fenêtres et les murs extérieurs mal isolés sont les points les plus froids. Si leur température descend sous le point de rosée, la condensation et les moisissures sont inévitables.",
          icon: 'mdi:home-thermometer',
          points: ['Les coins sont les points les plus vulnérables', "L'isolation thermique prévient la condensation"],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Niveaux de Risque',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>Risque Faible (différence &gt; 5°C) :</strong> L'air est loin de la saturation. Vos murs sont sûrs. <strong>Risque Moyen (3–5°C) :</strong> Surveillez les coins et les ponts thermiques. <strong>Risque Élevé (1–3°C) :</strong> Condensation probable sur les vitres et les zones froides — ventilez immédiatement. <strong>Danger Extrême (&lt; 1°C) :</strong> Condensation active avec risque imminent de prolifération de moisissures noires.",
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La Règle d\'Or',
      icon: 'mdi:thermometer-alert',
      badge: 'Conseil Clé',
      html: "<p>Si la température de votre mur est à moins de <strong>3°C du point de rosée</strong>, vous faites face à un risque imminent de condensation. Ventilez, utilisez des extracteurs dans les salles de bain et les cuisines, et maintenez l'humidité relative entre 40% et 60%.</p>",
    },
    {
      type: 'summary',
      title: 'Comment Prévenir la Condensation',
      items: [
        'Ventilez quotidiennement, surtout après la douche ou la cuisine.',
        "Maintenez l'humidité relative entre 40% et 60%.",
        'Utilisez des extracteurs dans les salles de bain et les cuisines.',
        "Ne faites pas sécher le linge à l'intérieur sans ventilation.",
        'Isolez thermiquement les murs pour éviter les surfaces froides.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Température Ambiante',
    labelHumidity: 'Humidité Relative',
    labelDewPoint: 'Point de Rosée',
    riskLow: 'Risque Faible',
    riskMedium: 'Risque Moyen',
    riskHigh: 'Risque Élevé',
    riskExtreme: 'Danger Extrême',
    riskLowDesc: 'Différence > 5°C. Surfaces sûres.',
    riskMediumDesc: 'Différence 3–5°C. Surveillez les coins.',
    riskHighDesc: 'Différence 1–3°C. Ventilez immédiatement.',
    riskExtremeDesc: 'Différence < 1°C. Condensation active.',
  },
};
