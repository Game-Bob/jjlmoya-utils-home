import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'comparateur-consommation-chauffage';
const title = 'Comparateur Gaz vs. Aérothermie vs. Air: Économies et Consommation';
const description =
  'Calculez combien vous économisez en remplaçant votre chaudière à gaz par une pompe à chaleur aérothermique ou une clim. Comparaison réelle de consommation et efficacité.';

const faqData = [
  {
    question: 'Qu\'est-ce qui est moins cher, l\'aérothermie ou le gaz naturel ?',
    answer:
      'Au niveau opérationnel mensuel, l\'aérothermie est nettement moins chère que le gaz naturel. Grâce à son efficacité de 400% (COP de 4), le coût par kWh de chaleur fournie est généralement 30% à 50% inférieur à celui du gaz, malgré un prix du kWh électrique plus élevé.',
  },
  {
    question: 'Quelle est la différence entre l\'aérothermie et une pompe à chaleur normale ?',
    answer:
      'Techniquement, les deux sont des pompes à chaleur. La principale différence réside dans le milieu auquel elles fournissent la chaleur : l\'aérothermie est généralement "air-eau", tandis que la pompe à chaleur conventionnelle est "air-air".',
  },
  {
    question: 'Peut-on installer l\'aérothermie dans un appartement avec d\'anciens radiateurs ?',
    answer:
      'Oui, il est possible d\'installer l\'aérothermie avec des radiateurs conventionnels en utilisant des équipements "haute température". Cependant, pour obtenir un maximum d\'économies, l\'idéal est de la combiner avec un plancher chauffant.',
  },
  {
    question: 'Combien d\'années faut-il pour amortir un équipement d\'aérothermie ?',
    answer:
      'Selon la consommation du logement et l\'existence de subventions, le délai d\'amortissement se situe généralement entre 5 et 8 ans. Si l\'on dispose de panneaux solaires, cette période peut être considérablement réduite.',
  },
];

const howToData = [
  {
    name: 'Surface de la maison',
    text: 'Entrez les mètres carrés utiles de votre logement pour estimer la demande thermique annuelle.',
  },
  {
    name: 'Prix de l\'énergie',
    text: 'Ajustez les prix du Gaz et de l\'Électricité selon votre facture réelle pour plus de précision.',
  },
  {
    name: 'Voir les résultats',
    text: 'Comparez les trois systèmes côte à côte et découvrez le gagnant en efficacité et coût annuel.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: 'ADEME: La pompe à chaleur',
      url: 'https://librairie.ademe.fr/chaleur-climatisation-et-ventilation/1429-pompe-a-chaleur.html',
    },
    {
      name: 'Service-Public: Chauffage et climatisation',
      url: 'https://www.service-public.fr/particuliers/vosdroits/F1710',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Clés pour choisir votre chauffage',
      items: [
        'L\'<strong>aérothermie</strong> est jusqu\'à 400% plus efficace que le gaz.',
        'L\'<strong>isolation</strong> réduit votre facture plus que n\'importe quelle chaudière.',
        'L\'<strong>amortissement</strong> des systèmes électriques est d\'environ 6-8 ans.',
        'Combinez avec des <strong>panneaux solaires</strong> pour un chauffage presque gratuit.',
      ],
    },
    {
      type: 'title',
      text: 'Comparaison de consommation : Gaz vs Aérothermie vs Air climatisé',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Choisir le bon système de climatisation pour votre maison est l\'une des décisions financières et de confort plus importantes. Dans un contexte de prix de l\'énergie volatils, savoir quel système est le plus efficace est essentiel.',
    },
    {
      type: 'paragraph',
      html: 'Historiquement, le gaz naturel a été le roi incontesté. Cependant, l\'émergence de l\'<strong>aérothermie</strong> et l\'amélioration des <strong>pompes à chaleur (air-air)</strong> ont changé la donne.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Efficacité Aérothermie',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'meilleur', positive: true },
        },
        {
          label: 'Économie annuelle moy.',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'estimé', positive: true },
        },
        {
          label: 'Vie de l\'équipement',
          value: '20 ans',
          icon: 'mdi:calendar-check',
          trend: { value: 'standard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. Chaudière à gaz naturel : la norme traditionnelle',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le chauffage au gaz naturel utilise une chaudière qui brûle du combustible pour chauffer l\'eau circulaient dans des radiateurs.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendement :</strong> Les chaudières modernes ont un rendement proche de 100%.',
        '<strong>Avantages :</strong> Installation répandue, chaleur rapide.',
        '<strong>Inconvénients :</strong> Dépendance aux énergies fossiles et émissions de CO2.',
      ],
    },
    {
      type: 'title',
      text: '2. Aérothermie : Efficacité extrême (Air-Eau)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les pompes à chaleur aérothermiques extraient l\'énergie thermique de l\'air extérieur et la transfèrent à l\'intérieur.',
    },
    {
      type: 'list',
      items: [
        '<strong>Efficacité (COP) :</strong> Un système aérothermique a généralement un COP moyen de 4.',
        '<strong>Avantages :</strong> Durabilité totale avec panneaux solaires.',
        '<strong>Inconvénients :</strong> Investissement initial élevé.',
      ],
    },
    {
      type: 'tip',
      title: 'Conseil d\'économie',
      html: 'L\'aérothermie brille particulièrement lorsqu\'elle est combinée avec un plancher chauffant.',
    },
    {
      type: 'proscons',
      title: 'Aérothermie vs Gaz Naturel',
      proTitle: 'Pourquoi l\'Aérothermie ?',
      conTitle: 'Pourquoi le Gaz ?',
      items: [
        { pro: 'Efficacité imbattable (COP 4+)', con: 'Installation moins chère' },
        { pro: 'Indépendance fossile', con: 'Chauffage instantané' },
        { pro: 'Froid et Chaud', con: 'Compatibilité anciens radiateurs' },
        { pro: 'Idéal avec solaire', con: 'Pas d\'unités extérieures complexes' },
      ],
    },
    {
      type: 'title',
      text: '3. Pompe à chaleur Air-Air (Climatisation Split)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Communément appelé "split". Son efficacité (SCOP) se situe généralement entre 3 et 3,5.',
    },
    {
      type: 'title',
      text: 'Comprendre la formule de calcul',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pour comparer ces systèmes, nous utilisons la formule suivante :',
    },
    {
      type: 'code',
      code: 'Coût annuel = (Demande thermique / Efficacité système) × Prix énergie',
      ariaLabel: 'Formule de calcul du coût annuel',
    },
    {
      type: 'paragraph',
      html: 'Où :',
    },
    {
      type: 'list',
      items: [
        '<strong>Demande :</strong> Les kWh nécessaires par an.',
        '<strong>Efficacité :</strong> 0,95 (Gaz), 4,0 (Aéro), 3,2 (Air).',
        '<strong>Prix :</strong> Le coût par kWh.',
      ],
    },
    {
      type: 'card',
      title: 'Exemple réel : Logement de 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Pour 7 000 kWh/an :</p><ul><li><strong>Gaz :</strong> 589 €/an</li><li><strong>Aéro :</strong> 315 €/an</li><li><strong>Air :</strong> 393 €/an</li></ul>',
    },
    {
      type: 'title',
      text: 'Conclusion : L\'avenir est électrique',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tendance européenne est claire : la décarbonation. Le gaz naturel a une date d\'expiration.',
    },
    {
      type: 'paragraph',
      html: 'Utilisez notre calculateur pour comparer vos factures.',
    },
  ],
  ui: {
    titleVivienda: '1. Données du logement',
    helperVivienda: 'Configurez votre maison',
    labelM2: 'Surface Totale',
    helperM2: 'Mètres carrés.',
    labelAislamiento: 'Niveau d\'Isolation',
    helperAislamiento: 'Qualité de l\'isolation.',
    optExcelent: 'Excellente (Neuf / Passivhaus)',
    optMedium: 'Moyenne (Double vitrage)',
    optPoor: 'Faible (Ancienne)',
    titleCoste: '2. Coût de l\'énergie',
    descCoste: 'Prix par kWh sur votre facture.',
    labelGasPrice: 'Coût du Gaz',
    helperGasPrice: 'Prix par kWh consommé.',
    labelElecPrice: 'Coût de l\'Électricité',
    helperElecPrice: 'Prix par kWh consommé.',
    titleComparison: '3. Comparaison Annuelle',
    descComparison: 'Estimation basée sur la performance technique.',
    systemGas: 'Chaudière à Gaz',
    systemAero: 'Aérothermie',
    systemAir: 'Pompe à Chaleur (Split)',
    labelAnnualCost: 'Dépenses Chauffage',
    labelEfficiency: 'Efficacité',
    labelSource: 'Source',
    labelEnergy: 'Énergie',
    labelInstallation: 'Installation',
    valGasSource: 'Gaz Naturel',
    valAeroEnergy: 'Renouvelable + Élec',
    valAirInstall: 'Air-Air',
    winnerBadge: 'Plus Efficace',
    unitCurrency: '€',
  },
};
