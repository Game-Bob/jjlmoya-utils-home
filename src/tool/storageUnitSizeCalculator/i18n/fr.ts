import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'fr',
  slug: 'calculateur-taille-box-stockage',
  title: 'Calculateur de taille de box de stockage',
  description: 'Estimez la taille de box nécessaire à partir de vos cartons, meubles et espace de circulation.',
  labels: {
    inventory: 'Votre inventaire', boxes: 'Cartons', furniture: 'Objets volumineux', smallBoxes: 'Petits cartons', mediumBoxes: 'Cartons moyens', largeBoxes: 'Grands cartons', sofa: 'Canapé', bed: 'Lit', wardrobe: 'Armoire', desk: 'Bureau', chair: 'Chaises', accessLane: 'Espace de circulation', accessHint: 'Un espace de circulation plus large prend de la surface, mais garde vos affaires accessibles.', quickScenarios: 'Charger un inventaire de départ', reset: 'Réinitialiser',
  },
  presetLabels: ["Déménagement depuis un studio", 'Un deux-pièces', 'Petit bureau'],
  accessLabels: ['Serré', 'Équilibré', 'Accès fréquent'],
  result: {
    title: 'Le plan de chargement', minimum: 'Taille minimale', comfortable: 'Taille confortable', emptyStatus: 'Ajoutez vos objets', readyStatus: 'Plan équilibré', tightStatus: 'Le minimum est juste', emptyMessage: 'Le plan dessinera vos zones de stockage dès que vous ajouterez des objets.', readyMessage: 'La taille minimale laisse la circulation choisie.', tightMessage: 'La taille minimale est presque pleine. La taille confortable sera plus facile à utiliser.', unit: 'm²', access: 'accès', boxesZone: 'Cartons', furnitureZone: 'Volumineux', laneZone: 'Circulation', floorPlanLabel: 'Plan proportionnel du box avec cartons, objets volumineux et espace de circulation', packedLabel: 'emballé', areaLabel: 'Surface de planification', volumeLabel: 'volume', emptyPlan: 'Ajoutez des cartons ou des meubles pour dessiner le plan',
  },
  seo: [
    { type: 'title', level: 2, text: 'Choisissez un box selon ce que vous possédez' },
    { type: 'paragraph', html: 'Un calculateur de taille de box est plus pertinent lorsqu il part de votre inventaire réel. Saisissez les cartons et les meubles encombrants, puis indiquez si vous acceptez un rangement serré ou si vous devez atteindre les objets sans tout sortir.' },
    { type: 'title', level: 2, text: 'Ce que mesure cette estimation' },
    { type: 'list', items: ['Volume emballé des cartons et des meubles', 'Surface au sol après empilage des cartons', 'Espace de circulation selon la fréquence d accès', 'Tailles minimale et confortable arrondies aux dimensions courantes'] },
    { type: 'title', level: 2, text: 'Lire les tailles minimale et confortable' },
    { type: 'paragraph', html: 'La taille minimale est la première dimension standard qui contient la surface estimée. C est un contrôle de capacité, pas la garantie qu un meuble entrera dans n importe quel box. La taille confortable ajoute une marge pour éviter un mur de cartons dans un espace ouvert souvent.' },
    { type: 'title', level: 2, text: 'Vérifiez avant de réserver' },
    { type: 'paragraph', html: 'Utilisez le résultat pour présélectionner des offres, puis comparez les dimensions intérieures, la largeur de porte, la hauteur, les poteaux, les escaliers et l accès au chargement. Un volume annoncé peut sembler généreux si sa hauteur est inutilisable.' },
    { type: 'list', items: ['Comptez les cartons selon leur taille extérieure approximative.', 'Ajoutez canapés et armoires même si vous prévoyez de les démonter.', 'Choisissez Accès fréquent pour les affaires saisonnières, le stock ou le matériel professionnel.', 'Demandez la surface intérieure utile et mesurez la porte avant le transport.'] },
    { type: 'tip', title: 'Limite de planification', html: 'Cette estimation repose sur des dimensions types et des hypothèses d empilage. Elle ne contrôle pas le box réel, la charge admissible ni le passage d un meuble irrégulier par la porte.' },
  ],
  faq: [
    { question: 'Dois-je choisir la taille minimale ou confortable ?', answer: "Choisissez la minimale pour un rangement serré et un accès rare. La confortable convient mieux si vous récupérez des objets, si l inventaire peut augmenter ou si les grands meubles s empilent mal." },
    { question: 'Pourquoi le calculateur utilise-t-il des mètres carrés ?', answer: 'Les prestataires indiquent souvent la surface au sol, qui permet de juger le placement et l accès. Le volume en mètres cubes sert aussi à comparer les offres annoncées en volume.' },
    { question: 'Puis-je utiliser cet outil pour un garage ou un conteneur ?', answer: 'Oui, comme point de départ. Vérifiez toutefois les dimensions intérieures, l ouverture, le plafond, la ventilation et les limites de poids ou d empilage.' },
    { question: 'Le calculateur connaît-il les dimensions réelles de mes meubles ?', answer: "Non. Il utilise des emprises et volumes représentatifs. Mesurez les meubles atypiques, fragiles ou très profonds et prévoyez une marge si l accès est incertain." },
  ],
  howTo: [
    { name: 'Chargez un inventaire de départ', text: 'Choisissez un scénario proche de votre déménagement ou modifiez directement l exemple.' },
    { name: 'Comptez cartons et objets volumineux', text: 'Saisissez les trois tailles de cartons, puis ajoutez canapés, lits, armoires, bureaux et chaises.' },
    { name: 'Réglez la circulation', text: 'Choisissez Serré, Équilibré ou Accès fréquent selon le nombre de visites prévues.' },
    { name: 'Comparez les deux recommandations', text: 'Prenez la minimale comme seuil de capacité et la confortable comme option plus pratique pour un accès régulier.' },
  ],
};

export const content = buildLocalizedContent(copy);
