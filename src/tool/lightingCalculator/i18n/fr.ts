import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-declairage-et-de-lumens-pour-la-maison';
const title = 'Calculateur d\'Éclairage et de Lumens pour la Maison';
const description =
  'Calculez exactement combien de lumens et d\'ampoules vous avez besoin pour chaque pièce. Sélectionnez le type de pièce, les dimensions et le type d\'ampoule pour obtenir un plan d\'éclairage professionnel avec des estimations de lux en temps réel.';

const faqData = [
  {
    question: 'De combien de lumens ai-je besoin pour un salon ?',
    answer:
      'Pour un salon typique, visez environ 150 lux au sol. Multipliez la superficie de la pièce en mètres carrés par 150 pour obtenir les lumens nécessaires. Pour une pièce de 20 mètres carrés, vous avez besoin d\'environ 3 000 lumens.',
  },
  {
    question: 'Quelle est la différence entre lux et lumens ?',
    answer:
      'Les lumens mesurent la production totale de lumière d\'une ampoule. Les lux mesurent la lumière qui atteint réellement une surface. Une pièce avec des plafonds hauts ou des murs sombres a besoin de plus de lumens pour atteindre le même niveau de lux car la lumière est perdue par la distance et l\'absorption.',
  },
  {
    question: 'Les ampoules LED économisent-elles vraiment de l\'énergie ?',
    answer:
      'Oui. Les ampoules LED produisent environ 100 lumens par watt, tandis que les ampoules incandescentes en produisent seulement environ 15. Une ampoule LED de 10W donne la même lumière qu\'une ampoule incandescente de 60W, en utilisant un sixième de l\'électricité.',
  },
  {
    question: 'Comment la couleur de la pièce affecte-t-elle les besoins en éclairage ?',
    answer:
      'Les murs et plafonds sombres absorbent la lumière. Dans une pièce avec des surfaces sombres, vous pouvez avoir besoin de 50 % de lumens supplémentaires par rapport à la recommandation standard.',
  },
  {
    question: 'Quel est un bon niveau de lux pour lire ?',
    answer:
      'Pour une lecture confortable, vous avez besoin de 300 à 500 lux sur la page. L\'éclairage ambiant général fournit habituellement 150 à 200 lux, ajoutez donc une lampe de travail près de votre place de lecture pour la luminosité supplémentaire.',
  },
  {
    question: 'Puis-je dimmer des ampoules LED ?',
    answer:
      'Seulement si elles sont marquées comme dimmables. Les LED standard peuvent clignoter ou avoir une durée de vie raccourcie lorsqu\'elles sont connectées à un variateur. Vérifiez toujours l\'emballage pour le symbole dimmable avant l\'installation.',
  },
];

const howToData = [
  {
    name: 'Choisissez le type de pièce',
    text: 'Sélectionnez la fonction de la pièce. Les cuisines et les bureaux ont besoin d\'une lumière plus vive que les chambres ou les couloirs.',
  },
  {
    name: 'Entrez les dimensions',
    text: 'Saisissez la largeur, la longueur et la hauteur sous plafond de la pièce. Le calculateur utilise ces données pour déterminer l\'indice de la pièce et le facteur d\'utilisation de la lumière.',
  },
  {
    name: 'Sélectionnez le type d\'ampoule et le nombre',
    text: 'Choisissez votre technologie d\'ampoule préférée et le nombre de luminaires que vous avez. Le calculateur vous dira si vous avez besoin de plus d\'ampoules.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Guide Complet de Conception d\'Éclairage Domestique et de Planification des Lumens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un éclairage approprié transforme une maison en foyer. Au-delà de l\'esthétique, la bonne quantité de lumière affecte l\'humeur, la productivité et même la santé des yeux. <strong>Notre calculateur d\'éclairage domestique</strong> vous aide à déterminer exactement combien de lumens vous avez besoin pour chaque pièce, en tenant compte de la taille de la pièce, de la hauteur du plafond, des couleurs des surfaces et du type d\'ampoule.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Plage de Lux Recommandée', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Efficacité LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Facteur de Maintenance', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Éclairage Ambiant Chaud',
          description: 'Idéal pour les salons et les chambres. Crée une atmosphère cosy et réduit la fatigue visuelle le soir.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Température de couleur chaude (2700K)', 'Multiples sources dimmables'],
        },
        {
          title: 'Éclairage de Tâche Lumineux',
          description: 'Essentiel pour les cuisines, les bureaux et les salles de bain. Offre une visibilité claire pour les travaux détaillés.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Blanc froid (4000K)', 'Focalisé sur les surfaces de travail'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Pourquoi les Dimensions de la Pièce sont Importantes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La lumière se propage et s\'affaiblit avec la distance. Une ampoule suffisamment brillante pour un plafond de 2,5 mètres peut être trop faible pour un plafond de 4 mètres. Le calculateur prend cela en compte en utilisant la formule de l\'indice de la pièce, qui considère à la fois la superficie au sol et la hauteur de montage pour estimer combien de lumière atteint réellement votre plan de travail.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Table de Référence Rapide des Lux',
      icon: 'mdi:table',
      badge: 'Référence',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Salon</strong> → 150 lux</li><li><strong>Cuisine</strong> → 300 lux</li><li><strong>Chambre</strong> → 100 lux</li><li><strong>Salle de bain</strong> → 200 lux</li><li><strong>Bureau</strong> → 500 lux</li><li><strong>Couloir</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Conseils de Pro pour un Meilleur Éclairage',
      items: [
        'Superposez trois types de lumière: ambiante, de tâche et d\'accent.',
        'Utilisez des variateurs pour ajuster la luminosité selon les moments de la journée.',
        'Choisissez des ampoules LED pour une longue durée de vie et une faible consommation d\'énergie.',
        'Placez les lampes de travail du côté opposé à votre main dominante pour éviter les ombres.',
        'Envisagez des ampoules connectées pour une planification automatisée et des changements de température de couleur.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Calculateur d\'Éclairage de Pièce',
    labelRoomType: 'Type de pièce',
    labelRoomWidth: 'Largeur',
    labelRoomLength: 'Longueur',
    labelHeight: 'Plafond',
    labelBulbType: 'Ampoule',
    labelBulbWatt: 'Puissance',
    labelFixtures: 'Luminaires',
    labelAmbient: 'Ambiance',
    btnAmbientCozy: 'Cozy',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Lumineux',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'pcs',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Lux cible',
    labelCurrentLux: 'Lux actuels',
    labelBulbsNeeded: 'Ampoules nécessaires',
    labelRoomArea: 'Superficie',
    statusOptimal: 'Parfait',
    statusInsufficient: 'Trop Sombre',
    statusExcess: 'Trop Lumineux',
    btnLiving: 'Salon',
    btnKitchen: 'Cuisine',
    btnBedroom: 'Chambre',
    btnBathroom: 'Salle de bain',
    btnOffice: 'Bureau',
    btnHallway: 'Couloir',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogène',
    btnBulbIncandescent: 'Incandescente',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Votre éclairage est parfaitement équilibré pour cette pièce.',
    tipInsufficient: 'Ajoutez des luminaires ou des ampoules plus puissantes.',
    tipExcess: 'Réduisez les luminaires ou dimmez pour économiser de l\'énergie.',
    labelManualAdjust: 'Ajustement manuel',
    labelSummary: 'Votre plan d\'éclairage',
    labelTotalLumens: 'Lumens totaux nécessaires',
    labelSuggestedSetup: 'Configuration recommandée',
    btnExport: 'Exporter PDF',
  },
};
