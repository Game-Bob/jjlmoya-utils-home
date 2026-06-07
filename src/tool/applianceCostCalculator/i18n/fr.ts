import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-cout-appareils';
const title = 'Calculateur du Coût en Eau et Énergie par Cycle pour les Appareils Ménagers';
const description =
  'Calcule le vrai coût par charge de ta machine à laver, ton lave vaisselle et ton sèche linge. Découvre exactement combien d\'électricité, d\'eau et de lessive coûte chaque cycle et combien tu peux économiser en passant au mode Eco.';

const faqData = [
  {
    question: 'Combien coûte un cycle de machine à laver?',
    answer:
      'Un cycle Eco 40C typique utilise environ 0,45 kWh d\'électricité et 40 litres d\'eau. Avec les prix européens moyens, cela coûte environ 0,10 à 0,15 euros par charge. Un cycle intensif à 60C peut utiliser plus de 1,2 kWh et 70 litres, faisant dépasser le coût à 0,30 euros par charge.',
  },
  {
    question: 'Coûte t il moins cher de faire tourner le lave vaisselle la nuit?',
    answer:
      'Si ton fournisseur d\'électricité utilise des tarifs horaires, faire tourner le lave vaisselle pendant les heures creuses peut réduire le coût d\'énergie de 30 pour cent ou plus. Les heures pleines sont typiquement les matins et soirs de semaine. Vérifie ton contrat ou les données de ton compteur intelligent pour confirmer ta plage exacte d\'heures creuses.',
  },
  {
    question: 'Le sèche linge consomme t il beaucoup d\'électricité?',
    answer:
      'Oui. Un sèche linge est l\'un des appareils domestiques les plus énergivores. Une charge complète peut consommer 2,5 à 3,5 kWh, coûtant 0,50 à 0,80 euros par cycle. Utiliser un sèche linge à pompe à chaleur ou étendre le linge dehors peut réduire ce coût de 60 à 80 pour cent.',
  },
  {
    question: 'Combien d\'eau utilise un lave vaisselle?',
    answer:
      'Les lave vaisselle modernes sont étonnamment efficaces. Un cycle Eco standard utilise seulement 8 à 12 litres d\'eau par charge, tandis qu\'un programme intensif peut en utiliser 14 à 16. C\'est bien moins que laver la même vaisselle à la main sous le robinet ouvert, ce qui consomme typiquement 40 à 60 litres.',
  },
  {
    question: 'Quelle est l\'heure la moins chère pour utiliser les appareils?',
    answer:
      'Avec les tarifs horaires, les périodes les moins chères sont habituellement tard le soir, très tôt le matin et pendant les week ends. Ces créneaux d\'heures creuses peuvent être 30 à 50 pour cent moins chers que les heures pleines en semaine. Certains fournisseurs offrent aussi des heures gratuites le week end.',
  },
  {
    question: 'Passer au mode Eco fait il vraiment économiser de l\'argent?',
    answer:
      'Absolument. Les modes Eco utilisent des températures plus basses, des phases de chauffe plus courtes et moins d\'eau. Sur une année complète, passer de Normal à Eco sur ta machine à laver et ton lave vaisselle peut économiser 50 à 100 euros en électricité et eau combinés, selon la fréquence d\'utilisation et les prix locaux.',
  },
];

const howToData = [
  {
    name: 'Sélectionne ton appareil',
    text: 'Appuie sur l\'icône de la machine à laver, du lave vaisselle ou du sèche linge en haut du calculateur. Chaque appareil a des profils de consommation d\'énergie et d\'eau différents.',
  },
  {
    name: 'Choisis un type de cycle',
    text: 'Utilise le curseur Eco, Normal ou Intensif pour régler le programme de lavage. Eco utilise moins d\'énergie et d\'eau. Intensif utilise le plus.',
  },
  {
    name: 'Saisis tes prix locaux',
    text: 'Tape ton prix d\'électricité par kWh et ton prix de l\'eau par litre. Tu peux les trouver sur ta facture de services ou le site web de ton fournisseur.',
  },
  {
    name: 'Définis la fréquence d\'utilisation',
    text: 'Indique combien de cycles tu fais par semaine. Cela permet au calculateur d\'estimer ton coût annuel et tes économies annuelles potentielles.',
  },
  {
    name: 'Choisis l\'heure d\'utilisation',
    text: 'Sélectionne l\'heure à laquelle tu prévois de faire tourner l\'appareil. Les heures pleines sont surlignées en rouge. Les heures creuses sont vertes et moins chères si tu as un tarif horaire.',
  },
  {
    name: 'Active les coûts de lessive',
    text: 'Active le bouton lessive si tu veux inclure une estimation de la poudre, du liquide ou des capsules par cycle dans le reçu.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'Le Coût Caché de Chaque Charge',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des gens n\'ont aucune idée de combien coûte réellement un cycle de machine à laver. Ils voient une facture trimestrielle d\'électricité et supposent que les appareils sont bon marché à utiliser. La réalité est qu\'une famille faisant cinq charges de lessive par semaine peut dépenser plus de 200 euros par an rien que pour le lavage. Ajoute le lave vaisselle trois fois par semaine et le sèche linge deux fois par semaine et le total dépasse 500 euros annuels. Ce calculateur détaille chaque centime pour que tu puisses optimiser tes habitudes.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Lavage Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Eau Lavage Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Majoration Heures Pleines', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Pourquoi les Petits Changements se Multiplient',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un seul degré de température ou quelques litres d\'eau semblent insignifiants pour un cycle. Mais sur 250 cycles par an, ces petites différences se cumulent en une somme sérieuse. Passer de 60C à 40C réduit la consommation d\'énergie d\'environ 40 pour cent par charge. Passer de Normal à Eco sur un lave vaisselle économise environ 3 litres d\'eau et 0,3 kWh à chaque fois. Ce ne sont pas des gains marginaux. C\'est le moyen le plus rapide de réduire ta facture de services sans acheter de nouveaux appareils.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Cycle Intensif',
          description: 'Chaleur et eau maximales pour les charges très sales.',
          icon: 'mdi:alert',
          points: ['1,2 à 3,5 kWh par charge', '70 litres pour les machines à laver', 'Supplément heures pleines applicable', 'Coût annuel le plus élevé'],
        },
        {
          title: 'Cycle Eco',
          description: 'Température plus basse, durée optimisée, eau minimale.',
          icon: 'mdi:check-circle',
          points: ['0,45 à 1,5 kWh par charge', 'Seulement 8 à 40 litres', 'Horaire creux possible', 'Coût annuel le plus bas'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Audit Rapide des Appareils',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Fais tourner ta machine à laver uniquement avec une charge complète. Utilise le programme Eco pour une saleté normale. Règle ton lave vaisselle sur départ différé après 22:00 si tu as un tarif horaire. Nettoie le filtre à peluches du sèche linge après chaque cycle pour maintenir l\'efficacité. Sèche le linge dehors ou sur un étendoir chaque fois que le temps le permet.</p>',
    },
    {
      type: 'title',
      text: 'Heures Creuses et Tarifs aux Heures Pleines',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'De nombreux fournisseurs d\'électricité facturent désormais des tarifs différents selon l\'heure de la journée. Les périodes pleines, généralement les matins et soirs de semaine, peuvent coûter 30 à 50 pour cent plus cher que les périodes creuses. Une même charge lancée à 20:00 peut coûter 0,18 euros, tandis que la même charge à 02:00 revient à seulement 0,12 euros. Sur un an, programmer correctement tes appareils peut économiser 50 à 100 euros sans rien changer d\'autre. Ce calculateur met en évidence les heures pleines en rouge et les heures creuses en vert pour que tu puisses planifier à l\'avance.',
    },
    {
      type: 'summary',
      title: 'Comment Réduire les Coûts des Appareils',
      items: [
        'Utilise ce calculateur pour trouver le coût réel par cycle de tes appareils.',
        'Passe au mode Eco dès que possible pour économiser jusqu\'à 40 pour cent d\'énergie.',
        'Fais des charges complètes au lieu de charges partielles pour maximiser l\'efficacité.',
        'Retarde les cycles aux heures creuses si ton tarif prend en charge les prix par tranche horaire.',
        'Sèche le linge dehors au lieu d\'utiliser le sèche linge pour éliminer son coût entièrement.',
        'Nettoie les filtres et détartre régulièrement pour que les appareils fonctionnent à l\'efficacité nominale.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Appareil',
    applianceWasher: 'Machine à laver',
    applianceDishwasher: 'Lave vaisselle',
    applianceDryer: 'Sèche linge',
    labelCycle: 'Programme',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensif',
    labelElectricityPrice: 'Prix de l\'Électricité',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Prix de l\'Eau',
    unitPriceLiter: '€/L',
    labelDetergent: 'Lessive',
    labelDetergentToggle: 'Inclure le coût de lessive',
    labelHour: 'Heure Prévue',
    peakBadge: 'Tarif plein actif',
    offPeakBadge: 'Tarif creux',
    receiptTitle: 'Détail des Coûts',
    receiptElectricity: 'Électricité',
    receiptWater: 'Eau',
    receiptDetergent: 'Lessive',
    receiptTotal: 'Total par cycle',
    receiptPerYear: 'Estimé par an',
    comparisonTitle: 'Changement Malin',
    comparisonText: 'Passer de Normal à Eco fait économiser de l\'argent à chaque charge.',
    comparisonSavings: 'Économies annuelles',
    comparisonMonths: 'mois de lessive',
    badgePeak: 'Plein',
    badgeOffPeak: 'Creux',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'an',
    labelCyclesPerWeek: 'Cycles par semaine',
    currencySign: '€',
    labelCurrency: 'Devise',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
