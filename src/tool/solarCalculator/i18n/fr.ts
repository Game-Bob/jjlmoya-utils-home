import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-solaire';
const title = "Calculateur d'Inclinaison de Panneaux Solaires";
const description =
  "Calculez l'angle d'inclinaison optimal pour vos panneaux solaires en fonction de votre latitude géographique. Obtenez les valeurs pour une installation fixe et les ajustements saisonniers.";

const faqData = [
  {
    question: "Que se passe-t-il si mon toit n'a pas l'inclinaison parfaite ?",
    answer:
      "Ce n'est pas un problème majeur. Les pertes dues à de petits écarts (5-10°) représentent moins de 3 % de la production annuelle. Éviter les ombrages partiels est bien plus important que d'obtenir l'angle exact.",
  },
  {
    question: "L'angle optimal est-il le même partout dans le monde ?",
    answer:
      "Non. Il dépend directement de votre latitude. Un utilisateur à Madrid (~40°N) a un angle optimal différent de celui en Norvège (~60°N) ou en Argentine (~34°S).",
  },
  {
    question: 'Dans quelle direction mes panneaux doivent-ils être orientés ?',
    answer:
      "Dans l'hémisphère nord, toujours vers le Sud (azimut 180°). Dans l'hémisphère sud, vers le Nord. Une orientation Est-Ouest peut entraîner des pertes de 15 à 20 % par rapport à l'optimum.",
  },
  {
    question: "Cela fonctionne-t-il aussi pour les chauffe-eaux solaires ?",
    answer:
      "Oui. Les formules d'inclinaison sont identiques pour les capteurs thermiques et les panneaux photovoltaïques, car les deux reposent sur le même principe géométrique.",
  },
];

const howToData = [
  {
    name: 'Entrez votre latitude',
    text: 'Saisissez votre latitude en degrés décimaux, ou utilisez le bouton de géolocalisation pour la détecter automatiquement.',
  },
  {
    name: "Consultez l'angle optimal",
    text: "L'angle optimal annuel est la valeur principale pour les installations fixes. Utilisez-le comme référence lors de la programmation avec votre installateur.",
  },
  {
    name: 'Ajustez par saison (facultatif)',
    text: "Si votre support le permet, utilisez les angles d'hiver et d'été pour maximiser la production à chaque saison.",
  },
  {
    name: "Vérifiez l'orientation",
    text: "Consultez l'indicateur d'hémisphère : vos panneaux doivent être orientés vers le Sud si vous êtes dans l'hémisphère nord, et vers le Nord dans l'hémisphère sud.",
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

export const content: ToolLocaleContent<SolarCalculatorUI> = {
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
      text: "La Science de l'Inclinaison Solaire",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "La différence entre une facture d'électricité nulle et un investissement qui ne porte pas ses fruits se mesure, littéralement, en degrés. Le <strong>rayonnement solaire</strong> n'est pas uniforme : c'est un flux dynamique qui varie selon l'heure, le jour et la saison. Comprendre la géométrie céleste est la première étape pour transformer votre toit en centrale électrique haute performance.",
    },
    {
      type: 'stats',
      items: [
        { value: 'Lat × 0.87', label: 'Formule Générale', icon: 'mdi:angle-acute' },
        { value: 'Lat × 0.76 + 3.1', label: 'Latitudes 25°–50°', icon: 'mdi:map-marker' },
        { value: '± 15°', label: 'Ajustement Saisonnier', icon: 'mdi:calendar-sync' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Le Principe de Perpendicularité',
          description: "Un panneau solaire fonctionne comme un filet qui capture des photons. Il est le plus efficace lorsqu'il fait face au flux à 90° par rapport aux rayons solaires. Tout écart réduit la surface de captation effective.",
          icon: 'mdi:solar-panel',
          points: ['Maximise la surface de captation effective', 'Base de tous les calculs d\'inclinaison'],
        },
        {
          title: "L'Importance de la Latitude",
          description: "Votre position sur le globe détermine la hauteur maximale du soleil. Plus vous êtes éloigné de l'équateur, plus le soleil voyage bas et plus le panneau doit être incliné pour l'intercepter.",
          icon: 'mdi:earth',
          points: ['Plus la latitude est élevée, plus l\'inclinaison est nécessaire', "Près de l'équateur, les panneaux sont presque plats"],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Stratégies Saisonnières',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "<strong>Été :</strong> Le soleil atteint son zénith. Les panneaux doivent être presque plats — soustrayez ~15° à votre latitude. Profitez des longues journées et d'un rayonnement direct intense. <strong>Hiver :</strong> Le soleil voyage bas près de l'horizon. Inclinez davantage les panneaux en ajoutant ~15° à votre latitude. Une inclinaison plus forte aide aussi la neige à glisser sans bloquer les cellules.",
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Installation Fixe ou Ajustement Saisonnier ?',
      icon: 'mdi:wrench',
      badge: 'Conseil Pro',
      html: "<p><strong>Fixe (standard) :</strong> Réglez à l'angle optimal annuel. Moins d'entretien et meilleure résistance au vent, avec seulement 5-10 % de perte par rapport au suivi solaire. <strong>Ajustement saisonnier (pro) :</strong> Modifiez l'angle 2-4 fois par an pour gagner jusqu'à +15 % de performance pendant les mois d'hiver.</p>",
    },
    {
      type: 'summary',
      title: "Clés pour une Installation Efficace",
      items: [
        "L'angle optimal annuel est votre référence principale pour les installations fixes.",
        'Les pertes dues à des écarts de ±5° représentent moins de 3 % de la production annuelle.',
        "Privilégiez l'évitement des ombrages partiels plutôt que la recherche de l'angle exact.",
        "Dans l'hémisphère nord, orientez toujours les panneaux vers le Sud.",
        "Un ajustement saisonnier 2-4 fois par an peut améliorer les performances hivernales de +15 %.",
      ],
    },
  ],
  ui: {
    labelLatitude: 'Latitude Géographique',
    btnLocate: 'Détecter ma position',
    labelOptimal: 'Angle Optimal Annuel',
    labelEfficiency: 'Efficacité Maximale',
    labelWinter: 'Hiver',
    labelSummer: 'Été',
    hemisphereNorth: 'Hémisphère Nord — Orienter vers le SUD',
    hemisphereSouth: 'Hémisphère Sud — Orienter vers le NORD',
    geoNotAvailable: "La géolocalisation n'est pas disponible dans ce navigateur.",
  },
};
