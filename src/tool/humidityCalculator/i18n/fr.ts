import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-humidite';
const title = 'Calculateur d\'humidité et estimation du temps de fonctionnement du déshumidificateur';
const description =
  'Calculez combien d\'eau votre déshumidificateur doit extraire pour amener une pièce humide à un niveau d\'humidité sain. Consultez le temps de fonctionnement estimé, les avertissements de risque de moisissure et les visuels de zone de confort dans un seul outil interactif.';

const faqData = [
  {
    question: 'Combien de temps un déshumidificateur devrait-il fonctionner par jour ?',
    answer:
      'Dans une pièce modérément humide, un déshumidificateur domestique standard doit généralement fonctionner entre 8 et 12 heures par jour pour maintenir 50 pour cent d\'humidité relative. Dans des conditions très humides ou après un sinistre d\'eau, un fonctionnement continu de 24 à 48 heures peut être nécessaire pour atteindre un niveau de sécheresse de base.',
  },
  {
    question: 'Quel niveau d\'humidité intérieure empêche la moisissure ?',
    answer:
      'La croissance des moisissures est inhibée lorsque l\'humidité relative intérieure est maintenue en dessous de 60 pour cent. La zone de confort idéale pour la santé humaine et la préservation des bâtiments se situe entre 40 et 50 pour cent d\'humidité relative. Des niveaux supérieurs à 70 pour cent créent un environnement à haut risque pour que les spores de moisissure germent en 24 à 48 heures.',
  },
  {
    question: 'Combien d\'eau l\'air peut-il retenir ?',
    answer:
      'La quantité de vapeur d\'eau que l\'air peut retenir dépend de la température. À 20 degrés Celsius, l\'air saturé contient environ 17 grammes d\'eau par mètre cube. À 25 degrés Celsius, cela passe à environ 23 grammes par mètre cube. Une pièce de 30 mètres carrés à 25 degrés Celsius et 70 pour cent d\'humidité contient environ 8 litres d\'eau invisible dans l\'air.',
  },
  {
    question: 'La température affecte-t-elle l\'efficacité du déshumidificateur ?',
    answer:
      'Oui. Les déshumidificateurs à compresseur fonctionnent mieux au-dessus de 18 degrés Celsius. En dessous de 15 degrés Celsius, leurs performances chutent car les serpentins évaporateurs peuvent givrer. Les déshumidificateurs à absorption sont mieux adaptés aux espaces froids comme les garages ou les caves car ils utilisent un processus de séchage chimique au lieu de la condensation.',
  },
  {
    question: 'Quelle taille de déshumidificateur me faut-il ?',
    answer:
      'Pour une pièce modérément humide jusqu\'à 50 mètres carrés, une unité de 10 à 12 litres par jour est généralement suffisante. Pour des pièces très humides ou des espaces de plus de 50 mètres carrés, choisissez un modèle de 20 litres par jour. Après une inondation ou une humidité sévère, une unité industrielle de 30 litres par jour rétablira les conditions plus rapidement.',
  },
  {
    question: 'Un déshumidificateur peut-il sécher le linge ?',
    answer:
      'Oui. Un déshumidificateur avec mode linge peut sécher les vêtements en intérieur efficacement tout en extrayant l\'humidité de l\'air ambiant. Il consomme moins d\'énergie qu\'un sèche-linge et prévient la condensation sur les fenêtres et les murs. Attendez-vous à des temps de séchage similaires à ceux du séchage en plein air par temps chaud.',
  },
];

const howToData = [
  {
    name: 'Entrer la surface de la pièce',
    text: 'Saisissez la surface au sol de la pièce en mètres carrés. Le calculateur suppose une hauteur sous plafond standard de 2,5 mètres pour estimer le volume d\'air total.',
  },
  {
    name: 'Régler la température',
    text: 'Saisissez la température actuelle de la pièce en degrés Celsius. L\'air plus chaud retient plus d\'humidité, donc la température affecte directement la quantité d\'eau à éliminer.',
  },
  {
    name: 'Sélectionner l\'humidité actuelle',
    text: 'Utilisez le cadran de confort ou la saisie numérique pour régler le pourcentage d\'humidité relative actuelle. Les valeurs supérieures à 60 pour cent sont mises en évidence avec des tonalités d\'avertissement.',
  },
  {
    name: 'Choisir l\'humidité cible',
    text: 'Réglez votre humidité relative souhaitée. 50 pour cent sont recommandés pour le confort et la prévention des moisissures. 40 pour cent est idéal pour les personnes allergiques.',
  },
  {
    name: 'Saisir la capacité du déshumidificateur',
    text: 'Entrez le taux d\'extraction de votre appareil en litres par jour. Cela est généralement indiqué sur l\'étiquette avant ou dans le manuel d\'utilisation.',
  },
  {
    name: 'Consulter les résultats',
    text: 'Lisez la simulation du réservoir d\'extraction d\'eau, l\'estimation du temps de fonctionnement et la bannière de risque de moisissure pour décider de la durée de fonctionnement de votre appareil.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'L\'eau cachée dans vos murs',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des propriétaires ne réalisent jamais que l\'air humide n\'est pas seulement inconfortable, il est coûteux et dangereux. Une seule pièce humide peut contenir plusieurs litres de vapeur d\'eau invisible. Avec le temps, cette humidité se condense sur les surfaces froides, nourrit les colonies de moisissure et dégrade le plâtre, la peinture et le bois. Comprendre exactement combien d\'eau doit être éliminée et combien de temps cela prend est la première étape pour protéger votre maison et votre santé.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Humidité intérieure idéale', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Temps de fonctionnement quotidien moyen', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Seuil de risque de moisissure', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Pourquoi l\'humidité relative est importante',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'L\'humidité relative n\'est pas la quantité d\'eau dans l\'air, c\'est le pourcentage d\'eau que l\'air retient par rapport au maximum qu\'il pourrait retenir à cette température. L\'air chaud est comme une éponge plus grande. À 30 degrés Celsius, l\'air peut retenir presque deux fois plus d\'humidité qu\'à 15 degrés Celsius. C\'est pourquoi une pièce peut sembler moite même après avoir ouvert les fenêtres. L\'humidité est toujours là, juste moins visible.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Humidité élevée',
          description: 'Au-dessus de 60 pour cent d\'humidité relative. Risque de moisissure, d\'acariens et de dégâts par condensation.',
          icon: 'mdi:alert',
          points: ['Condensation sur les fenêtres et les murs', 'Odeurs de moisi et croissance microbienne', 'Irritation respiratoire accrue', 'Factures de chauffage plus élevées en raison de la conductivité thermique de l\'air humide'],
        },
        {
          title: 'Humidité optimale',
          description: 'Entre 40 et 50 pour cent d\'humidité relative. Confortable, saine et écoénergétique.',
          icon: 'mdi:check-circle',
          points: ['Pas de condensation sur les surfaces froides', 'Les spores de moisissure restent dormantes', 'Confort cutané et respiratoire', 'Préservation des meubles et du bois'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Audit rapide de l\'humidité',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Vérifiez les fenêtres pour détecter toute condensation chaque matin. Si des gouttelettes apparaissent régulièrement, votre humidité est trop élevée. Faites fonctionner un déshumidificateur 12 heures par jour jusqu\'à ce que la condensation s\'arrête. Déplacez l\'appareil dans la pièce la plus humide, généralement la cuisine, la salle de bain ou la cave. Videz le réservoir quotidiennement et nettoyez le filtre toutes les deux semaines.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionner correctement votre déshumidificateur',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Une erreur courante est d\'acheter un déshumidificateur trop petit pour l\'espace. Une machine de 10 litres par jour dans une cave humide de 60 mètres carrés fonctionnera en continu sans jamais atteindre l\'humidité cible. Utilisez ce calculateur pour voir le volume d\'extraction exact requis par votre pièce. Si l\'estimation de temps de fonctionnement dépasse 20 heures par jour, vous avez besoin d\'une unité plus grande ou d\'une meilleure ventilation.',
    },
    {
      type: 'summary',
      title: 'Comment garder votre maison sèche',
      items: [
        'Utilisez ce calculateur pour déterminer le volume d\'extraction exact pour chaque pièce.',
        'Maintenez l\'humidité relative intérieure entre 40 et 50 pour cent pour la santé et le confort.',
        'Faites fonctionner le déshumidificateur jusqu\'à ce que la bannière de risque de moisissure devienne verte.',
        'Videz le réservoir d\'eau avant qu\'il ne se remplisse pour éviter l\'arrêt automatique.',
        'Nettoyez régulièrement les filtres pour maintenir le débit d\'air et les taux d\'extraction au maximum.',
        'Améliorez la ventilation de la pièce en parallèle de la déshumidification pour des résultats plus rapides.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Surface de la pièce',
    unitM2: 'm2',
    labelTemperature: 'Température',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Humidité actuelle',
    labelTargetHumidity: 'Humidité cible',
    labelCapacity: 'Capacité du déshumidificateur',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Zone de confort',
    comfortCurrent: 'Actuel',
    comfortTarget: 'Cible',
    tankTitle: 'Eau dans l\'air',
    tankLiters: 'litres',
    runtimeTitle: 'Temps de fonctionnement estimé',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Risque de moisissure',
    moldRiskHigh: 'Risque élevé',
    moldRiskMedium: 'Risque modéré',
    moldRiskLow: 'Risque faible',
    extractionLabel: 'à extraire',
    tipEnergy: 'Faire fonctionner votre déshumidificateur pendant les heures creuses peut réduire considérablement les coûts d\'électricité.',
    tipMold: 'Maintenir l\'humidité en dessous de 50 pour cent empêche les spores de moisissure de germer sur les surfaces.',
    unitPercent: '%',
    badgeHigh: 'Élevé',
    badgeMedium: 'Modéré',
    badgeLow: 'Faible',
  },
};
