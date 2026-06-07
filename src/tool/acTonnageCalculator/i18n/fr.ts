import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-tonnage-climatisation';
const title = 'Calculateur de Tonnage et Capacité de Climatisation';
const description =
  'Calcule la taille exacte du climatiseur nécessaire pour ta pièce en BTU, frigories et tonnes. Saisis la superficie, la hauteur sous plafond, les occupants, les sources de chaleur et l\'exposition au soleil.';

const faqData = [
  { question: 'Combien de BTU par mètre carré ?', answer: 'La base standard est de 600 BTU par mètre carré pour un plafond de 2,5 m en climat tempéré. Cela augmente avec la hauteur, l\'exposition solaire et les appareils.' },
  { question: 'Qu\'est-ce qu\'une frigorie ?', answer: 'Une frigorie est une ancienne unité de puissance de refroidissement courante en Espagne et Amérique latine. Une frigorie équivaut à environ 3,968 BTU par heure.' },
  { question: 'Comment convertir les BTU en tonnes ?', answer: 'Une tonne de réfrigération équivaut à 12 000 BTU par heure. Divise le total de BTU par 12 000 pour obtenir le tonnage.' },
  { question: 'La hauteur sous plafond compte-t-elle ?', answer: 'Oui. Chaque mètre au-dessus de 2,7 m augmente les besoins de refroidissement d\'environ 8%.' },
];

const howToData = [
  { name: 'Mesure ta pièce', text: 'Mesure la longueur et la largeur en mètres et multiplie-les pour obtenir la superficie.' },
  { name: 'Compte les occupants', text: 'Ajoute le nombre de personnes et les sources de chaleur comme les ordinateurs et les téléviseurs.' },
  { name: 'Exposition solaire', text: 'Choisis légère, moyenne ou forte selon l\'ensoleillement direct.' },
  { name: 'Lis la recommandation', text: 'Le calculateur affiche les BTU, frigories et tonnes pour tout marché.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Quelle taille de climatiseur ai-je besoin ?', level: 2 },
    { type: 'paragraph', html: 'La bonne taille dépend de la superficie, de la hauteur sous plafond, des personnes et de l\'exposition au soleil. Utilise ce calculateur pour obtenir les BTU, frigories et tonnes exacts.' },
    { type: 'table', headers: ['Superficie', 'BTU recommandé', 'Tonnage', 'Usage typique'], rows: [['10 m² (petite chambre)', '6 000 - 7 000 BTU', '0,5 - 0,75 t', 'Chambre d\'amis'], ['15 m² (chambre)', '9 000 - 10 000 BTU', '0,75 - 1 t', 'Chambre principale'], ['20 m² (salon)', '12 000 - 14 000 BTU', '1 - 1,25 t', 'Petit salon'], ['30 m² (ouvert)', '18 000 - 21 000 BTU', '1,5 - 1,75 t', 'Studio'], ['40 m² (grand salon)', '24 000 - 28 000 BTU', '2 - 2,5 t', 'Grand salon + salle à manger']] },
    { type: 'title', text: 'Pourquoi une erreur de taille coûte cher', level: 2 },
    { type: 'paragraph', html: 'Un climatiseur sous-dimensionné tourne en continu, n\'atteint jamais la température et use son compresseur prématurément. Un surdimensionné souffle de l\'air froid par courtes rafales et laisse la pièce froide et humide.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU par m² base', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU par tonne', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU par frigorie', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Superficie', labelRoomSizeFt: 'Superficie', labelCeilingHeight: 'Hauteur sous plafond', labelCeilingHeightFt: 'Hauteur',
    labelPeople: 'Personnes', labelHeatSources: 'Sources de chaleur', labelSunExposure: 'Ensoleillement', labelRoomType: 'Type de pièce',
    labelCalculate: 'Calculer', labelResult: 'Résultat', labelBtus: 'BTU/h', labelFrigorias: 'Frigories', labelTons: 'Tonnes',
    labelRequired: 'Requis', labelRecommended: 'Recommandé', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigories', labelUnitTons: 'Tonnes',
    labelMetric: 'Métrique', labelImperial: 'Impérial', labelRoomCozy: 'Confortable', labelRoomWarm: 'Chaud', labelRoomHot: 'Très chaud',
    bdBaseCooling: 'Refroidissement de base', bdCeilingHeight: 'Hauteur sous plafond', bdPeople: 'Personnes', bdHeatSources: 'Sources de chaleur', bdSunRoom: 'Soleil & type de pièce',
    sunLight: 'Légère', sunMedium: 'Moyenne', sunHeavy: 'Forte',
    roomBedroom: 'Chambre', roomLiving: 'Salon', roomKitchen: 'Cuisine', roomOffice: 'Bureau', roomServer: 'Serveur',
    errorRequired: 'Veuillez remplir tous les champs',
  },
};
