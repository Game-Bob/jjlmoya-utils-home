import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';

const slug = 'comparateur-tarifs-electricite';
const title = 'Comparateur de Tarifs d\'Électricité : Prix Fixe vs Prix Variable';
const description =
  'Découvrez quel tarif d\'électricité vous convient le mieux. Comparez le marché régulé (PVPC) et le marché libre selon votre consommation et économisez des centaines d\'euros sur votre facture.';

const faqData = [
  {
    question: 'Qu\'est-ce qui est préférable aujourd\'hui, le marché libre ou le marché régulé ?',
    answer:
      'Historiquement, le marché régulé (PVPC) a été moins cher, mais il est volatil. Le marché libre offre une stabilité avec des prix fixes. Notre calculateur vous aide à décider en fonction de votre consommation annuelle d\'électricité.',
  },
  {
    question: 'Puis-je revenir au marché régulé si je passe au marché libre ?',
    answer:
      'Oui, vous pouvez revenir au marché régulé (PVPC) à tout moment, tant que votre puissance souscrite est inférieure à 10 kW. Il vous suffit de contacter un fournisseur de référence.',
  },
  {
    question: 'Comment savoir quelle puissance j\'ai souscrite ?',
    answer:
      'Vous pouvez trouver cette information sur votre facture d\'électricité, généralement identifiée comme "Terme de puissance" ou "Puissance souscrite", exprimée en kW. La valeur standard se situe généralement entre 3,3 kW et 5,5 kW.',
  },
  {
    question: 'Que se passe-t-il si je dépasse la puissance souscrite ?',
    answer:
      'Si vous avez un compteur numérique, le disjoncteur coupera momentanément l\'électricité. Vous devrez débrancher un appareil et réarmer le tableau électrique.',
  },
];

const howToData = [
  {
    name: 'Consultez votre facture',
    text: 'Recherchez la consommation annuelle en kWh et la puissance souscrite en kW sur votre dernière facture d\'électricité.',
  },
  {
    name: 'Ajustez les valeurs',
    text: 'Déplacez les curseurs pour qu\'ils correspondent à vos données réelles de consommation et de puissance.',
  },
  {
    name: 'Comparez les résultats',
    text: 'Observez la différence de coût annuel estimé entre le marché régulé et le marché libre.',
  },
  {
    name: 'Prenez une décision',
    text: 'Choisissez l\'option qui vous offre le plus d\'économies ou celle qui vous apporte le plus de tranquillité d\'esprit.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Questions Fréquentes',
  faq: faqData,
  bibliographyTitle: 'Bibliographie',
  bibliography: [
    { name: 'Red Eléctrica de España (REE) — ESIOS : Suivi du PVPC', url: 'https://www.esios.ree.es/es' },
    { name: 'CNMC : Portail de comparaison des offres d\'énergie', url: 'https://comparador.cnmc.gob.es/' },
    { name: 'MITECO : Bonus Social et législation énergétique', url: 'https://www.miteco.gob.es/' },
    { name: 'IDAE : Guides pratiques d\'économies et d\'autoconsommation', url: 'https://www.idae.es/' },
    { name: 'OMIE : Prix horaires du marché journalier de l\'électricité', url: 'https://www.omie.es/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comparateur de Tarifs Électriques : Marché Libre vs Marché Régulé',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Comprendre la facture d\'électricité en Espagne est devenu un véritable défi. Avec la volatilité des prix de l\'énergie, le choix entre le <strong>Marché Régulé (PVPC)</strong> et le <strong>Marché Libre</strong> peut représenter une différence de plusieurs centaines d\'euros par an. Notre outil utilise des données actualisées sur les coûts de puissance et d\'énergie pour vous aider à décider.',
    },
    {
      type: 'stats',
      items: [
        { value: 'PVPC', label: 'Prix dynamique par heure', icon: 'mdi:clock-fast' },
        { value: 'Libre', label: 'Prix fixe annuel', icon: 'mdi:shield-check' },
        { value: '≈150€', label: 'Différence annuelle typique', icon: 'mdi:currency-eur' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'PVPC — Marché Régulé',
          description: 'Le prix de l\'énergie change chaque heure selon le marché de gros. Les jours de forte production renouvelable, il peut descendre à des niveaux très bas.',
          icon: 'mdi:lightning-bolt',
          points: ['Sans engagement, changement libre', 'Accès au Bonus Social pour les personnes vulnérables', 'Tarification horaire Pointe/Standard/Creuses'],
        },
        {
          title: 'Marché Libre — Prix Fixe',
          description: 'Les fournisseurs d\'énergie fixent un prix par kWh qui reste stable tout au long de l\'année, indépendamment du marché de gros.',
          icon: 'mdi:tag-outline',
          points: ['Stabilité et prévisibilité', 'Pas de mauvaises surprises sur la facture', 'Peut inclure des services supplémentaires'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Les Trois Plages Horaires',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Pointe (plus cher) :</strong> Lun–Ven de 10h00 à 14h00 et de 18h00 à 22h00. <strong>Standard (intermédiaire) :</strong> Lun–Ven de 08h00 à 10h00, de 14h00 à 18h00 et de 22h00 à 00h00. <strong>Heures creuses (moins cher) :</strong> Lun–Ven de 00h00 à 08h00 et toute la journée le samedi, dimanche et jours fériés. Planifier les machines à laver, lave-vaisselle et la recharge de voiture électrique aux heures creuses est la clé des économies maximales.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Le Piège des Remises',
      icon: 'mdi:alert',
      badge: 'Attention',
      html: '<p>De nombreuses offres du marché libre promettent une "remise de 20%". Assurez-vous de demander <strong>sur quel prix de base</strong> cette remise s\'applique. Parfois, le prix de base est tellement gonflé que, même avec la remise, cela revient plus cher qu\'un tarif standard.</p>',
    },
    {
      type: 'summary',
      title: 'Points Clés pour Décider',
      items: [
        'Si votre consommation est élevée et principalement aux heures creuses, le PVPC est généralement plus avantageux.',
        'Si vous appréciez la stabilité et ne voulez pas surveiller l\'horloge, choisissez un prix fixe.',
        'Avec des panneaux solaires, le PVPC permet de compenser les surplus au prix horaire du marché.',
        'Réduire la puissance souscrite est souvent le moyen le plus rapide de diminuer la facture.',
        'Le PVPC n\'a pas d\'engagement : vous pouvez revenir à tout moment.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Consommation Annuelle',
    unitKwhYear: 'kWh/an',
    labelPower: 'Puissance Souscrite',
    unitKw: 'kW',
    labelMarket: 'Marché Régulé (PVPC)',
    labelFree: 'Marché Libre (Prix Fixe)',
    labelAnnualEst: 'Estimation annuelle',
    labelPowerTerm: 'Puissance (Fixe)',
    labelEnergyTerm: 'Énergie (Variable)',
    labelDashboard: 'Tableau de Bord Énergétique',
    labelMaxPower: 'Maxomètre (Pic)',
    labelMaxPowerEst: 'Estimation de pic',
    labelCo2: 'Empreinte CO₂',
    labelCo2Est: 'Estimation annuelle',
    labelSimulator: 'Simulateur de Scénarios',
    labelSolar: 'Autoconsommation Solaire',
    labelSolarDesc: 'Simuler les économies avec des panneaux solaires (30% de réduction)',
    labelShift: 'Report aux Heures Creuses',
    labelShiftDesc: 'Consommation déplacée aux heures bon marché :',
    badgeBetter: 'Option la moins chère',
    badgeWorseYear: 'an',
    currencySign: '€',
    monthLabels: 'Jan,Fév,Mar,Avr,Mai,Jun,Jul,Aoû,Sep,Oct,Nov,Déc',
  },
};
