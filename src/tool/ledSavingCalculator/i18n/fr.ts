import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';

const slug = 'calculateur-economies-led';
const title = "Calculateur d'Économies LED";
const description =
  "Calculez combien d'argent et de kWh vous économisez en remplaçant vos ampoules traditionnelles par des LED. Découvrez vos économies annuelles exactes, mensuelles et la réduction de CO2.";

const faqData = [
  {
    question: "Combien économise vraiment une ampoule LED ?",
    answer:
      "Une ampoule LED économise entre 80% et 90% d'énergie par rapport à une incandescente. Par exemple, passer de 60W à 9W réduit la consommation de ce point lumineux presque au minimum tout en conservant le même éclat.",
  },
  {
    question: "En combien de temps le passage aux LED est-il rentabilisé ?",
    answer:
      "Grâce au faible coût actuel des LED et à leurs économies substantielles, l'investissement est généralement récupéré en moins de 4 mois d'utilisation normale. Plus les lumières sont allumées longtemps, plus le retour sur investissement est rapide.",
  },
  {
    question: "Que se passe-t-il si j'installe une LED de plus haute puissance ?",
    answer:
      "Les LED génèrent très peu de chaleur, vous pouvez donc installer des ampoules offrant plus de lumens dans des luminaires précédemment limités par la chaleur des incandescentes, dans la limite des contraintes électriques de la douille.",
  },
  {
    question: "Les LED durent-elles vraiment ce que l'emballage indique ?",
    answer:
      "Une LED de qualité dure entre 15 000 et 50 000 heures. Avec une utilisation domestique moyenne de 4h par jour, cela signifie qu'une ampoule peut durer plus de 15 ans sans griller.",
  },
  {
    question: "Puis-je utiliser des LED avec un variateur d'intensité ?",
    answer:
      "Uniquement si l'ampoule indique clairement qu'elle est compatible variateur (Dimmable). Les LED standard ne fonctionnent pas bien avec les anciens variateurs et peuvent scintiller ou émettre un bourdonnement.",
  },
  {
    question: "Faut-il changer tout le luminaire ?",
    answer:
      "Dans 99% des cas, non. Il suffit de remplacer l'ampoule par une LED avec le même culot (E27, E14, GU10, etc.). Seuls certains panneaux LED modernes intégrés ont la source lumineuse fixe.",
  },
  {
    question: "Mes transformateurs halogènes 12V fonctionneront-ils ?",
    answer:
      "Pour les spots MR16, les anciens transformateurs ne détectent parfois pas la charge très faible des LED et provoquent des scintillements. Il est préférable de remplacer le transformateur par un modèle spécifique LED ou de passer à une douille GU10.",
  },
];

const howToData = [
  {
    name: "Comptez vos points lumineux",
    text: "Vérifiez combien d'ampoules incandescentes ou halogènes vous avez chez vous et notez leur puissance en watts.",
  },
  {
    name: "Sélectionnez le LED équivalent",
    text: "Choisissez votre type d'ampoule actuel dans la calculatrice. La puissance LED équivalente est assignée automatiquement.",
  },
  {
    name: "Indiquez votre utilisation quotidienne",
    text: "Précisez combien d'heures par jour les lumières sont allumées en moyenne.",
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    {
      name: "Guide d'Éclairage Efficace — IDAE (Espagne)",
      url: 'https://www.idae.es/publicaciones/guia-tecnica-de-eficiencia-energetica-en-iluminacion-oficinas',
    },
    {
      name: 'Étiquetage Énergétique des Lampes — Union Européenne',
      url: 'https://www.boe.es/buscar/doc.php?id=DOUE-L-2019-81875',
    },
    {
      name: "Calculateur de Consommation Électrique — OCU",
      url: 'https://www.ocu.org/vivienda-y-energia/gas-luz/calculadora/consumo-stand-by',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: "Guide d'Économies LED : Comment Réduire Votre Facture d'Électricité",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Le passage de l'éclairage traditionnel à la technologie <strong>LED (Light Emitting Diode)</strong> est l'un des investissements domestiques avec le retour le plus rapide et le plus visible. Chaque watt que nous retirons de notre consommation de base se traduit directement par des économies en fin de mois. Une ampoule LED de 9W offre le même éclat qu'une incandescente de 60W avec <strong>85% de consommation en moins</strong>.",
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: "Économie d'Énergie", icon: 'mdi:lightning-bolt' },
        { value: '25 000h', label: 'Durée de Vie LED', icon: 'mdi:clock-outline' },
        { value: '< 4 mois', label: 'Amortissement', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Éclairage Incandescent',
          description: "La technologie du XXe siècle basée sur le chauffage d'un filament de tungstène. 95% de l'énergie est gaspillée sous forme de chaleur.",
          icon: 'mdi:lightbulb-outline',
          points: ["95% d'énergie gaspillée en chaleur", 'Durée de vie : 1 000 heures', 'Coût de fonctionnement très élevé'],
        },
        {
          title: 'Technologie LED Moderne',
          description: "Le standard actuel d'efficacité énergétique pour le domicile. Éclairage instantané à 100% dès la première seconde.",
          icon: 'mdi:led-outline',
          points: ['85–90% d\'économie directe', 'Durée de vie : 25 000–50 000 heures', 'Émission de chaleur minimale'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: "La Physique Derrière les Économies",
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Une ampoule incandescente fonctionne en chauffant un filament de tungstène. <strong>95% de l'énergie</strong> est gaspillée en chaleur et seulement 5% devient de la lumière visible. Les LED, en revanche, convertissent directement l'électricité en lumière via des semi-conducteurs avec une efficacité bien supérieure. <strong>Regardez les lumens, pas les watts :</strong> une vieille ampoule de 60W produit environ 800 lm ; aujourd'hui vous pouvez obtenir ces mêmes 800 lm avec une LED de seulement 8–9W.",
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tableau des Équivalences Rapides',
      icon: 'mdi:table',
      badge: 'Référence',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W incandescente</strong> → LED 5–6W (450 lm)</li><li><strong>60W incandescente</strong> → LED 8–10W (800 lm)</li><li><strong>100W incandescente</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogène (spot)</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Avantages du LED Au-delà de l\'Argent',
      items: [
        "Durée de vie extrême : une LED de qualité peut durer plus de 15 ans à 4h/jour.",
        "Éclairage instantané à 100%, sans temps de chauffe ni scintillements.",
        "Pas d'émission de chaleur : réduit la charge de climatisation en été.",
        "Sans mercure ni gaz toxiques, plus facile à recycler que les tubes fluorescents.",
        "Compatible avec la plupart des douilles existantes (E27, E14, GU10).",
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuration du Logement',
    labelBulbs: 'Combien d\'ampoules souhaitez-vous remplacer ?',
    unitBulbs: 'unités',
    labelType: 'Quelles ampoules avez-vous actuellement ?',
    labelHours: 'Combien d\'heures par jour sont-elles allumées ?',
    labelPrice: "Prix de l'électricité",
    unitPrice: '€/kWh',
    resultBadge: 'Calcul d\'économie réelle',
    labelAnnual: 'Vous économiserez par an',
    labelMonthly: 'Mensuel',
    labelEfficiency: 'Efficacité',
    labelCo2: 'Réduction d\'empreinte CO₂',
    unitLess: '% de moins',
    currencySign: '€',
    btnInc60Title: 'Incandescente',
    btnInc60Sub: 'Classique (60W)',
    btnInc40Title: 'Incandescente',
    btnInc40Sub: 'Petite (40W)',
    btnInc100Title: 'Incandescente',
    btnInc100Sub: 'Grande (100W)',
    btnHalo50Title: 'Halogène',
    btnHalo50Sub: 'Spot (50W)',
    usageNever: 'Presque jamais',
    usageLow: 'Peu utilisée',
    usageNormal: 'Utilisation normale',
    usageModerate: 'Utilisation modérée',
    usageHeavy: 'Utilisation intensive',
    usagePro: 'Utilisation professionnelle',
    usageVeryHeavy: 'Très intensive',
    usageAlways: 'Toujours allumée',
  },
};
