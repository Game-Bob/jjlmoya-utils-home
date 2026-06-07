import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomie-du-bureau';
const title = 'Ergonomie du Bureau et Alignement de l\'Espace de Travail';
const description =
  'Entrez votre taille et voyez instantanément comment ajuster votre chaise, bureau et écran pour éliminer les douleurs de dos et de cou dans votre bureau à domicile.';

const faqData = [
  {
    question: 'Pourquoi la hauteur du bureau est-elle importante?',
    answer:
      'Un bureau trop haut force les épaules à se relever, ce qui crée des tensions dans le cou et le haut du dos. Un bureau trop bas vous fait vous pencher en avant, comprimant les disques lombaires. La bonne hauteur garde les avant-bras parallèles au sol et les coudes à un angle de 90 degrés.',
  },
  {
    question: 'À quelle hauteur mon écran doit-il être?',
    answer:
      'Le haut de votre écran doit être à hauteur des yeux ou légèrement en dessous, avec l\'écran incliné vers l\'arrière de 10 à 20 degrés. Cela maintient le cou dans une position neutre et réduit la fatigue oculaire en regardant légèrement vers le bas, qui est l\'angle de repos naturel de la vision humaine.',
  },
  {
    question: 'À quelle distance dois-je être de mon écran?',
    answer:
      'La distance idéale correspond à la longueur d\'un bras, soit environ 50 à 70 centimètres. À cette distance, vos yeux n\'ont pas à faire d\'effort pour faire la mise au point et vous pouvez voir tout l\'écran sans bouger la tête. Pour les écrans plus grands, augmentez la distance proportionnellement.',
  },
  {
    question: 'Un bureau debout est-il meilleur?',
    answer:
      'Les bureaux debout réduisent la position assise prolongée, qui est liée à des problèmes cardiovasculaires et métaboliques. Cependant, rester debout toute la journée peut causer des problèmes de veines et de pieds. La meilleure approche est d\'alterner: s\'asseoir pendant 30 minutes, rester debout de 15 à 30 minutes et bouger régulièrement.',
  },
  {
    question: 'Mes pieds devraient-ils toucher le sol?',
    answer:
      'Oui. Vos pieds doivent reposer à plat sur le sol avec les genoux pliés à un angle de 90 degrés. Si votre chaise est trop haute, utilisez un repose-pieds. Si vos pieds pendent, la pression s\'accumule derrière les cuisses, ce qui restreint la circulation sanguine et provoque des engourdissements.',
  },
  {
    question: 'Quelle est la meilleure hauteur de chaise?',
    answer:
      'L\'assise doit permettre à vos genoux de se plier à environ 90 degrés avec les pieds à plat sur le sol. Vos hanches doivent être à hauteur des genoux ou légèrement au-dessus. Cela répartit le poids uniformément sur les ischions et réduit la pression sur le bas du dos.',
  },
];

const howToData = [
  {
    name: 'Mesurez votre taille',
    text: 'Debout pieds nus contre un mur, marquez le haut de votre tête. Mesurez du sol jusqu\'à la marque en centimètres.',
  },
  {
    name: 'Sélectionnez le mode de votre espace de travail',
    text: 'Choisissez si vous souhaitez des recommandations pour un bureau assis ou un bureau debout. Chaque mode utilise des proportions corporelles différentes.',
  },
  {
    name: 'Ajustez d\'abord votre chaise',
    text: 'Réglez votre chaise pour que vos pieds reposent à plat sur le sol et que vos genoux forment un angle de 90 degrés. Vos hanches doivent être à hauteur des genoux ou légèrement au-dessus.',
  },
  {
    name: 'Réglez la surface de votre bureau',
    text: 'Montez ou baissez votre bureau pour que vos avant-bras reposent parallèlement au sol en tapant. Vos coudes doivent être à un angle de 90 degrés.',
  },
  {
    name: 'Positionnez votre écran',
    text: 'Placez l\'écran à une distance d\'un bras de longueur. Le haut de l\'écran doit être à hauteur des yeux ou légèrement en dessous, incliné vers l\'arrière de 10 à 20 degrés.',
  },
  {
    name: 'Vérifiez avec l\'avatar',
    text: 'Utilisez l\'avatar à l\'écran pour vérifier que tous les angles sont verts. Si une articulation est rouge, ajustez le meuble correspondant.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'Le Coût Caché d\'une Mauvaise Installation de Bureau',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des gens passent plus de huit heures par jour à un bureau, pourtant peu mesurent si leur chaise, bureau ou écran correspondent à leur corps. Un écart de seulement quelques centimètres peut créer une tension chronique dans le cou, les épaules et le bas du dos. Au fil des mois et des années, cette tension devient douleur, et la douleur devient blessure. La bonne nouvelle est que l\'ergonomie optimale peut être calculée précisément à partir d\'une seule mesure: votre taille.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '8h',
          label: 'Temps Moyen au Bureau',
          icon: 'mdi:desk',
        },
        {
          value: '90°',
          label: 'Angle Idéal du Coude',
          icon: 'mdi:angle-acute',
        },
        {
          value: '60cm',
          label: 'Meilleure Distance d\'Écran',
          icon: 'mdi:monitor',
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Pourquoi Une Taille Unique Ne Convient Jamais à Tous',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les bureaux standard mesurent 73 centimètres de haut et les chaises standard 45 centimètres. Ces dimensions ont été conçues il y a des décennies pour des employés de bureau masculins de taille moyenne. Si vous mesurez moins de 175 centimètres ou plus de 185 centimètres, ces valeurs par défaut nuisent activement à votre posture. Les femmes, les adolescents et les personnes avec un torse plus long ou plus court que la moyenne sont particulièrement mal servis par les meubles de série.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Installation Inadéquate',
          description: 'Valeurs par défaut courantes des meubles qui créent des tensions avec le temps.',
          icon: 'mdi:alert',
          points: [
            'Écran trop haut ou trop bas',
            'Bureau qui force les épaules vers le haut',
            'Les pieds ne touchent pas le sol',
            'La chaise n\'offre pas de soutien lombaire',
          ],
        },
        {
          title: 'Installation Optimale',
          description: 'Mesures personnalisées basées sur les proportions de votre corps.',
          icon: 'mdi:check-circle',
          points: [
            'Écran à hauteur des yeux',
            'Coudes à 90 degrés',
            'Pieds à plat sur le sol',
            'Bas du dos entièrement soutenu',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Liste de Contrôle Rapide de la Posture',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Asseyez-vous avec le dos contre la chaise. Vérifiez qu\'il y ait un petit espace entre l\'arrière de vos genoux et le bord de l\'assise. Assurez-vous que vos poignets sont droits en tapant. Le haut de votre écran ne doit pas être plus haut que vos yeux. Faites une pause de 2 minutes pour marcher toutes les 30 minutes.</p>',
    },
    {
      type: 'title',
      text: 'La Science de s\'Asseoir et de se Tenir Debout',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Les corps humains ne sont pas faits pour rester dans une position pendant des heures. En position assise, la pression sur les disques lombaires augmente de 40 pour cent par rapport à la position debout. En restant immobile debout, le sang s\'accumule dans les jambes et le cœur doit travailler plus fort pour le refaire monter. Le rythme de travail le plus sain consiste à alterner entre s\'asseoir et se tenir debout toutes les 30 à 60 minutes, combiné à de courtes promenades. Cet outil calcule les deux modes pour que vous puissiez configurer correctement un bureau convertible.',
    },
    {
      type: 'summary',
      title: 'Comment Construire un Espace de Travail Ergonomique',
      items: [
        'Mesurez votre taille pieds nus en centimètres.',
        'Utilisez ce simulateur pour obtenir les hauteurs exactes de votre chaise, bureau et écran.',
        'Ajustez d\'abord la chaise, puis le bureau, puis l\'écran.',
        'Si vous utilisez un bureau debout, réglez-le 30 centimètres au-dessus de la hauteur de votre bureau assis.',
        'Placez l\'écran à une distance d\'un bras de longueur et inclinez-le vers l\'arrière de 10 à 20 degrés.',
        'Faites une pause de 2 minutes pour marcher ou vous étirer toutes les 30 minutes.',
      ],
    },
  ],
  ui: {
    labelMode: 'Mode de l\'espace de travail',
    modeSit: 'Assis',
    modeStand: 'Debout',
    labelHeight: 'Votre taille',
    unitCm: 'cm',
    labelGender: 'Constitution',
    genderMale: 'Homme',
    genderFemale: 'Femme',
    labelChair: 'Chaise',
    labelDesk: 'Bureau',
    labelMonitor: 'Écran',
    labelDistance: 'Distance',
    labelAngle: 'Angle',
    labelGood: 'Correct',
    labelAdjust: 'Ajuster',
    badgeChair: 'Siège',
    badgeDesk: 'Surface',
    badgeMonitor: 'Écran',
    tipScreenLow: 'Relevez votre écran',
    tipScreenHigh: 'Abaissez votre écran',
    tipDeskLow: 'Relevez votre bureau',
    tipDeskHigh: 'Abaissez votre bureau',
    tipChairLow: 'Relevez votre chaise',
    tipChairHigh: 'Abaissez votre chaise',
    tipDistance: 'Déplacez l\'écran à la longueur d\'un bras',
  },
};