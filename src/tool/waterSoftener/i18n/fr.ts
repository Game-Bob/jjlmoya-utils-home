import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-adoucisseur';
const title = 'Optimiseur d\'Adoucisseur d\'Eau Domestique et de Consommation de Sel';
const description =
  'Analysez le niveau de dureté de votre eau, calculez les paramètres optimaux de l\'adoucisseur et estimez la consommation annuelle de sel. Consultez les prévisions d\'impact du calcaire, les délais de recharge de sel et les prévisions de durée de vie des appareils dans un outil interactif.';

const faqData = [
  {
    question: 'Qu\'est ce que la dureté de l\'eau ?',
    answer:
      'La dureté de l\'eau est la concentration de minéraux de calcium et magnésium dissous dans votre eau du robinet. Elle se mesure en grains par gallon ou degrés français. L\'eau dure provoque le dépôt de calcaire dans les tuyaux, réduit l\'efficacité de chauffage et raccourcit la vie des appareils.',
  },
  {
    question: 'Comment fonctionne un adoucisseur d\'eau ?',
    answer:
      'Un adoucisseur d\'eau utilise des billes de résine échangeuse d\'ions pour remplacer les ions calcium et magnésium par des ions sodium. Lorsque la résine est saturée, le système se régénère en rinçant une solution saline à travers le réservoir, restaurant les billes et évacuant les minéraux durs dans les égouts.',
  },
  {
    question: 'Combien de sel utilise un adoucisseur par an ?',
    answer:
      'Un foyer typique de quatre personnes avec une eau modérément dure utilise entre 80 et 120 kilogrammes de sel par an. Une eau très dure ou un foyer plus nombreux peuvent dépasser les 200 kilogrammes. Les adoucisseurs modernes à haute efficacité utilisent environ 30 pour cent moins de sel que les anciens modèles.',
  },
  {
    question: 'À quelle fréquence dois je recharger le réservoir de sel ?',
    answer:
      'La plupart des réservoirs de saumure doivent être rechargés toutes les 4 à 8 semaines. Vérifiez le niveau de sel chaque mois. Si le réservoir est rempli à moins d\'un tiers, ajoutez un nouveau sac de 25 kilogrammes. Ne laissez jamais le sel s\'épuiser complètement, sinon la résine se rédurcira et perdra son efficacité.',
  },
  {
    question: 'L\'eau dure endommage t elle vraiment les appareils ?',
    answer:
      'Oui. Les dépôts de calcaire sur les éléments chauffants les forcent à travailler plus, augmentant les factures d\'énergie et provoquant des pannes prématurées. Un chauffe eau dans une zone à eau très dure peut perdre jusqu\'à 45 pour cent de sa durée de vie attendue. Les machines à laver et lave vaisselle souffrent également de valves obstruées et de tambours entartrés.',
  },
  {
    question: 'Puis je boire de l\'eau adoucie ?',
    answer:
      'L\'eau adoucie est sans danger pour la plupart des gens. L\'augmentation de sodium est faible, équivalente approximativement à une tranche de pain par jour. Cependant, les personnes suivant un régime strictement pauvre en sodium peuvent préférer un robinet séparé non adouci pour l\'eau de boisson ou choisir un sel d\'adoucisseur à base de potassium.',
  },
];

const howToData = [
  {
    name: 'Saisissez la dureté de votre eau',
    text: 'Tapez la valeur de dureté de votre rapport de qualité d\'eau ou bandelette de test. Choisissez grains par gallon ou degrés français dans le sélecteur d\'unités.',
  },
  {
    name: 'Définissez la taille du foyer',
    text: 'Sélectionnez le nombre de personnes vivant dans votre maison. Plus d\'occupants signifient une consommation d\'eau plus élevée et un épuisement plus rapide du sel.',
  },
  {
    name: 'Choisissez la capacité de l\'adoucisseur',
    text: 'Entrez la capacité en grains du réservoir de résine de votre adoucisseur. Celle ci est généralement indiquée sur la vanne de commande ou dans le manuel d\'utilisation. Les valeurs courantes sont 24 000 ou 32 000 grains.',
  },
  {
    name: 'Vérifiez la catégorie de dureté',
    text: 'Consultez l\'échelle de dureté interactive pour savoir si votre eau est douce, modérément dure ou extrêmement dure.',
  },
  {
    name: 'Consultez les prévisions de sel',
    text: 'Regardez le simulateur de pile de sacs de sel pour voir combien de sacs de 25 kilogrammes vous aurez besoin par an et quand la prochaine recharge est due.',
  },
  {
    name: 'Inspectez l\'impact sur les appareils',
    text: 'Comparez la durée de vie de base de votre machine à laver, chauffe eau et machine à café contre leur durée de vie estimée avec votre eau non traitée actuelle.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'Le coût invisible de l\'eau dure',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'L\'eau dure est l\'un des problèmes cachés les plus coûteux d\'une maison. Chaque fois que vous ouvrez le robinet, des minéraux dissous s\'écoulent à travers vos tuyaux et appareils. Au fil des mois et des années, ces minéraux cristallisent en calcaire, une croûte blanche et dure qui obstrue les éléments chauffants, réduit les débits et détruit les joints en caoutchouc. Le résultat est des factures d\'énergie plus élevées, une durée de vie d\'appareil plus courte et des appels de maintenance fréquents. Un adoucisseur d\'eau élimine ces dommages à la source.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Conso annuelle moyenne de sel', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Durée de vie base lave linge', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm calcaire par GPG/an', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Pourquoi le calcaire est si destructeur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Le calcaire n\'est pas juste une tache cosmétique sur votre bouilloire. À l\'intérieur d\'un chauffe eau, il forme une couche isolante sur l\'élément chauffant. Pour chaque millimètre de calcaire, l\'efficacité de transfert d\'énergie chute jusqu\'à 10 pour cent. Cela signifie qu\'un revêtement de 3 millimètres peut augmenter votre facture de chauffage d\'eau de près de 30 pour cent. Dans les machines à laver, le calcaire bloque l\'activation du détergent, vous utilisez donc plus de poudre pour de moins bons résultats. Dans les machines à café, il ruine le thermostat et produit une extraction amère et inégale.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Eau dure non traitée',
          description: 'Les minéraux se déposent librement dans tout le système de plomberie et chaque appareil connecté.',
          icon: 'mdi:alert',
          points: ['Accumulation rapide de calcaire dans chauffe eau et chaudières', 'Augmentation de la consommation de détergent et de savon', 'Durée de vie des appareils raccourcie de 30 à 45 pour cent', 'Factures d\'énergie plus élevées due à l\'effet isolant du calcaire'],
        },
        {
          title: 'Eau adoucie',
          description: 'Le calcium et le magnésium sont éliminés au point d\'entrée avant d\'atteindre les robinets et les appareils.',
          icon: 'mdi:check-circle',
          points: ['Zéro dépôt de calcaire sur les éléments chauffants', 'Les doses normales de détergent produisent de meilleurs résultats', 'Les appareils atteignent leur pleine durée de vie de conception', 'Consommation d\'énergie réduite pour le chauffage de l\'eau'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Test rapide pour eau dure',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Remplissez une bouteille transparente avec de l\'eau du robinet et ajoutez quelques gouttes de savon liquide. Agitez vigoureusement. Si l\'eau reste trouble et produit très peu de mousse, votre eau est dure. Une eau cristalline avec une mousse épaisse et stable indique une eau douce. Pour une mesure précise, utilisez une bandelette de test de dureté totale ou demandez un rapport à votre fournisseur d\'eau.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionner correctement votre approvisionnement en sel',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Tomber en panne de sel est le moyen le plus rapide d\'abîmer un adoucisseur. Lorsque le réservoir de saumure se vide, le lit de résine se rédurcit en quelques jours et le système cesse de protéger votre maison. Utilisez cette calculatrice pour prévoir exactement combien de sacs de 25 kilogrammes vous avez besoin par an. Si le résultat dépasse 10 sacs, envisagez de passer à un réservoir de résine plus grand ou à une vanne haute efficacité qui utilise moins de sel par cycle de régénération.',
    },
    {
      type: 'summary',
      title: 'Comment protéger votre maison de l\'eau dure',
      items: [
        'Utilisez cette calculatrice pour trouver votre catégorie exacte de dureté de l\'eau et vos besoins en sel.',
        'Installez un adoucisseur d\'eau correctement dimensionné au point d\'entrée principal de l\'alimentation.',
        'Rechargez le réservoir de saumure avant qu\'il ne descende en dessous d\'un tiers de sa capacité.',
        'Utilisez des pastilles de sel évaporé de haute pureté pour les meilleures performances de la résine.',
        'Entretenez la vanne et le lit de résine tous les 3 à 5 ans.',
        'Surveillez les factures d\'énergie des appareils pour des augmentations soudaines qui pourraient signaler un dépôt de calcaire.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Dureté de l\'eau',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Taille du foyer',
    unitPeople: 'personnes',
    labelSoftenerCapacity: 'Capacité de l\'adoucisseur',
    unitGrains: 'grains',
    hardnessSoft: 'Douce',
    hardnessSlightly: 'Légèrement dure',
    hardnessModerate: 'Modérément dure',
    hardnessHard: 'Dure',
    hardnessVery: 'Très dure',
    hardnessExtreme: 'Extrêmement dure',
    scaleTitle: 'Taux d\'accumulation de calcaire',
    scaleUnitMetric: 'mm/an',
    scaleUnitImperial: 'in/an',
    saltTitle: 'Prévision annuelle de sel',
    saltAnnual: 'Sel annuel',
    saltBags: 'Sacs par an',
    saltDaysPerBag: 'Jours par sac',
    saltWeeksPerBag: 'Semaines par sac',
    applianceTitle: 'Durée de vie des appareils',
    applianceWasher: 'Machine à laver',
    applianceHeater: 'Chauffe eau',
    applianceCoffee: 'Machine à café',
    applianceBaseline: 'Avec adoucisseur',
    applianceWithHardness: 'Avec eau dure',
    applianceSaved: 'ans',
    badgeSaved: 'Prolongé de',
    labelUnitSystem: 'Unités',
    btnMetric: 'Métrique',
    btnImperial: 'Impérial',
  },
};
