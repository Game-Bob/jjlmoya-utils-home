import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulateur-consommation-veille';
const title = 'Simulateur de Consommation Électrique en Veille';
const description =
  "Découvrez combien d'électricité vos appareils gaspillent en mode veille. Calculez le coût annuel caché des charges fantômes des téléviseurs, routeurs, chargeurs et plus.";

const faqData = [
  {
    question: "Qu'est-ce que la consommation fantôme ou la charge fantôme ?",
    answer:
      "La consommation fantôme est l'électricité consommée par les appareils électroniques lorsqu'ils sont éteints ou en mode veille. Cela se produit parce que de nombreux appareils restent partiellement actifs pour répondre aux télécommandes, maintenir les connexions réseau ou faire fonctionner les horloges internes.",
  },
  {
    question: "Combien coûte l'énergie en veille par an ?",
    answer:
      "Le foyer moyen gaspille entre 50 et 150 euros par an rien que pour l'énergie en veille. Un seul téléviseur moderne peut consommer de 10 à 20 watts en continu, ce qui représente environ 15 à 30 euros par an selon le prix de l'électricité.",
  },
  {
    question: 'Quels appareils consomment le plus en veille ?',
    answer:
      "Les plus gros pollueurs sont les décodeurs, les consoles de jeux, les ordinateurs de bureau en mode veille, les smart TV et les anciens adaptateurs d'alimentation externes. Les décodeurs câble et satellite sont particulièrement gaspilleurs car ils entrent rarement en veille réelle.",
  },
  {
    question: "Débrancher les appareils économise-t-il vraiment de l'argent ?",
    answer:
      "Oui. Débrancher les appareils ou utiliser des multiprises avancées avec prises maîtres élimine entièrement la consommation en veille. Pour un foyer typique avec 20 appareils en veille, les économies annuelles peuvent aller de 40 à 120 euros.",
  },
  {
    question: 'Les multiprises intelligentes valent-elles le coup ?',
    answer:
      "Les multiprises intelligentes ou avancées coupent l'alimentation des périphériques lorsqu'un appareil maître est éteint. Elles sont amorties en quelques mois si vous les utilisez avec des centres de divertissement ou des postes de travail informatiques.",
  },
  {
    question: 'Comment mesurer la consommation en veille chez soi ?',
    answer:
      "Vous pouvez utiliser un wattmètre enfichable peu coûteux pour mesurer exactement combien de watts chaque appareil consomme lorsqu'il est éteint ou inactif. Sinon, ce simulateur fournit des estimations standardisées basées sur des moyennes de fabricants et des mesures de laboratoire.",
  },
];

const howToData = [
  {
    name: 'Parcourez chaque pièce',
    text: "Comptez chaque appareil qui reste branché en permanence. Incluez les téléviseurs, les micro-ondes, les routeurs, les imprimantes, les consoles de jeux et les chargeurs de téléphone.",
  },
  {
    name: 'Estimez les heures de veille quotidiennes',
    text: "La plupart des appareils sont en veille 20 à 24 heures par jour. Saisissez la moyenne pour chaque appareil ou utilisez la valeur par défaut de 24 heures.",
  },
  {
    name: "Définissez votre prix de l'électricité",
    text: "Saisissez le prix que vous payez par kilowattheure. Il est indiqué sur votre facture d'électricité.",
  },
  {
    name: 'Consultez votre résumé de consommation fantôme',
    text: "Le simulateur affiche les watts totaux gaspillés, les kilowattheures annuels et le coût annuel caché. Utilisez l'indicateur de catégorie pour savoir si votre foyer est faible, modéré, élevé ou extrême.",
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: "Charge fantôme: l'électricité que vous payez mais n'utilisez jamais",
      level: 2,
    },
    {
      type: 'paragraph',
      html: "Chaque prise de votre maison qui a un câble branché est une source potentielle d'<strong>électricité fantôme</strong>. Même lorsque l'interrupteur est éteint, l'appareil continue de consommer de l'énergie. Ce n'est peut-être que quelques watts, mais multipliés par 24 heures par jour et 365 jours par an, ces watts deviennent des centaines de kilowattheures et de l'argent réel qui sort de votre poche.",
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'de la facture du foyer', icon: 'mdi:flash' },
        { value: '23h', label: 'moy. veille/jour', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'moy. appareil top', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Les appareils qui ne dorment jamais',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Les foyers modernes contiennent en moyenne 40 appareils électroniques. Environ la moitié d'entre eux sont continuellement connectés au réseau. Bien que les réglementations énergétiques aient amélioré l'efficacité en veille ces dernières années, le nombre total d'appareils a augmenté. Une seule console de jeux en mode allumage instantané peut consommer 15 watts. Un téléviseur avec démarrage rapide peut consommer 12 watts. Ajoutez les routeurs, les modems, les enceintes connectées, les micro-ondes avec horloges, les imprimantes et les chargeurs, et le total dépasse rapidement 100 watts de consommation permanente en arrière-plan.",
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Foyers à faible impact',
          description: "Les foyers qui gèrent activement la consommation en veille grâce à des multiprises intelligentes et des habitudes de débranchement.",
          icon: 'mdi:leaf',
          points: ['Moins de 50 watts total en veille', 'Coût annuel inférieur à 50 euros', 'Utilise des multiprises avancées'],
        },
        {
          title: 'Foyers à fort impact',
          description: "Les foyers typiques avec des centres de divertissement, plusieurs consoles de jeux et des ordinateurs toujours allumés.",
          icon: 'mdi:lightning-bolt',
          points: ['Plus de 150 watts total en veille', 'Coût annuel supérieur à 150 euros', "Beaucoup d'appareils en mode démarrage rapide"],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Liste rapide de économies',
      icon: 'mdi:check-circle',
      badge: 'Action',
      html: "<p style=\"margin:0\">Débranchez les chargeurs de téléphone lorsqu'ils ne sont pas utilisés. Utilisez une multiprise maître-esclave pour votre centre de divertissement. Désactivez les modes de démarrage rapide ou d'allumage instantané sur les téléviseurs et les consoles. Éteignez les ordinateurs de bureau au lieu de les laisser en mode veille.</p>",
    },
    {
      type: 'title',
      text: 'Pourquoi les watts se accumulent plus vite que vous ne le pensez',
      level: 3,
    },
    {
      type: 'paragraph',
      html: "Un watt est un taux d'utilisation d'énergie. Un watt fonctionnant pendant une heure est un watt-heure. Un appareil consommant 10 watts en continu utilise 87,6 kilowattheures par an. À un prix moyen de 0,25 euro par kilowattheure, cet appareil seul coûte plus de 21 euros par an. Multipliez cela maintenant par chaque gadget branché dans votre maison.",
    },
    {
      type: 'summary',
      title: 'Comment réduire votre charge fantôme',
      items: [
        'Identifiez les plus gros consommateurs avec ce simulateur ou un wattmètre enfichable.',
        "Regroupez les appareils sur des multiprises intelligentes qui coupent la veille lorsque l'appareil principal est éteint.",
        "Désactivez les fonctions toujours allumé, démarrage rapide et veille réseau lorsque c'est possible.",
        "Débranchez les chargeurs et les petits appareils qui ne sont pas utilisés quotidiennement.",
        "Envisagez de remplacer les très vieux adaptateurs d'alimentation externes par des modèles modernes et efficaces.",
      ],
    },
  ],
  ui: {
    sectionTitle: 'Audit de charge fantôme',
    labelDevices: 'Appareils en veille connectés',
    labelHours: 'Heures de veille par jour',
    unitHours: 'h',
    labelPrice: "Prix de l'électricité",
    unitPrice: '/kWh',
    resultBadge: 'Résultat de consommation fantôme',
    labelAnnualKwh: 'Gaspillé par an',
    labelAnnualCost: 'Coût annuel caché',
    labelMonthlyCost: 'Équivalent mensuel',
    labelDevicesCount: 'Appareils comptés',
    labelTotalWatts: 'Watts totaux en veille',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Devise',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Faible consommation',
    categoryModerate: 'Consommation modérée',
    categoryHigh: 'Consommation élevée',
    categoryExtreme: 'Consommation extrême',
    addDevice: 'Ajouter un appareil',
    removeDevice: 'Supprimer',
    modalAddTitle: 'Ajouter un appareil en veille',
    labelDeviceName: "Nom de l'appareil",
    labelDeviceWatts: 'Watts en veille',
    btnSave: 'Enregistrer',
    btnCancel: 'Annuler',
  },
};
