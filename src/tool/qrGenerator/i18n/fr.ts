import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { QRGeneratorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'generateur-qr';
const title = 'Générateur de Codes QR Hors Ligne';
const description =
  'Générez des codes QR pour WiFi, URLs et Contacts de façon 100% sécurisée dans votre navigateur. Vos données ne quittent jamais votre appareil.';

const faqData = [
  {
    question: 'Ces codes QR expirent-ils ?',
    answer:
      'Non. Les codes générés ici sont statiques. L\'information est encodée directement dans l\'image et ne dépend d\'aucun lien externe ni redirection. Ils fonctionneront toujours.',
  },
  {
    question: 'Conservez-vous mes données ?',
    answer:
      'Absolument pas. Tout le processus se déroule dans votre navigateur (côté client). Aucune donnée n\'est envoyée à nos serveurs. C\'est 100% privé et sécurisé.',
  },
  {
    question: 'Fonctionne-t-il sur iPhone et Android ?',
    answer:
      'Oui. La plupart des appareils photo modernes d\'iOS et Android lisent les codes QR nativement et suggèrent l\'action correspondante (connexion WiFi, ouverture de lien, etc.).',
  },
  {
    question: 'Puis-je l\'utiliser sans internet ?',
    answer:
      'Oui. Une fois la page chargée, vous pouvez couper le WiFi ou les données et le générateur continuera à fonctionner parfaitement car il ne dépend pas de serveurs externes.',
  },
];

const howToData = [
  {
    name: 'Choisir le type de QR',
    text: 'Sélectionnez si vous voulez un code pour un réseau WiFi, un lien URL ou un contact (vCard).',
  },
  {
    name: 'Saisir les données',
    text: 'Remplissez les champs nécessaires, comme le nom du réseau et le mot de passe, ou l\'adresse web.',
  },
  {
    name: 'Générer et vérifier',
    text: 'Le code est généré instantanément. Vous pouvez essayer de le scanner directement depuis l\'écran.',
  },
  {
    name: 'Télécharger',
    text: 'Enregistrez le code QR en image (.webp) pour l\'imprimer ou le partager numériquement.',
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

export const content: ToolLocaleContent<QRGeneratorUI> = {
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
      text: 'Pourquoi Hors Ligne ? La Confidentialité Avant Tout',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La plupart des générateurs QR en ligne envoient vos données à un serveur. C\'est un risque, surtout pour les <strong>mots de passe WiFi</strong> ou les <strong>données personnelles</strong>. Cet outil utilise JavaScript pour générer le code QR directement sur votre appareil. Vous pouvez même couper internet et il continuera à fonctionner.',
    },
    {
      type: 'stats',
      items: [
        { value: '100%', label: 'Privé', icon: 'mdi:shield-lock' },
        { value: 'Offline', label: 'Sans Serveur', icon: 'mdi:wifi-off' },
        { value: 'WebP', label: 'Téléchargement Direct', icon: 'mdi:download' },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'success',
      title: 'Code Source Ouvert et Transparent',
      icon: 'mdi:github',
      badge: 'Open Source',
      html: '<p>Vous ne nous faites pas confiance ? Le code de cet outil est 100% open source. Vous pouvez vérifier son fonctionnement ou le télécharger pour l\'exécuter sur votre propre ordinateur sans internet.</p>',
    },
    {
      type: 'title',
      text: 'Cas d\'Utilisation',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'QR WiFi',
          description: 'Partagez votre réseau WiFi avec des invités sans avoir à dicter le mot de passe. Ils scannent et se connectent automatiquement.',
          icon: 'mdi:wifi',
          points: ['Pris en charge nativement par iOS et Android', 'Compatible WPA2, WEP et réseaux ouverts'],
        },
        {
          title: 'QR URL',
          description: 'Transformez n\'importe quel lien web en code scannable. Idéal pour l\'impression sur des supports physiques.',
          icon: 'mdi:link',
          points: ['Toute URL valide', 'Pas de date d\'expiration'],
        },
        {
          title: 'QR vCard',
          description: 'Carte de visite numérique. En scannant, le téléphone suggère "Ajouter un contact" avec tous les champs pré-remplis.',
          icon: 'mdi:card-account-details',
          points: ['Nom, téléphone, email et entreprise', 'Format standard vCard 3.0'],
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Guide d\'Utilisation',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Pour la maison (WiFi) :</strong> Fatigué de chercher le papier avec le mot de passe WiFi à chaque fois que des amis viennent ? Générez un QR avec le SSID et le mot de passe. Imprimez-le et collez-le dans un endroit visible. Vos invités n\'ont qu\'à ouvrir l\'appareil photo, pointer et voilà, ils se connectent sans rien taper.',
    },
    {
      type: 'paragraph',
      html: '<strong>Pour les Professionnels (vCard) :</strong> Lors d\'événements de networking, les cartes de visite papier appartiennent au passé. Générez un QR avec vos coordonnées. Gardez-le sur votre téléphone ou imprimez-le au dos de votre badge. En le scannant, votre nouveau contact peut enregistrer votre nom, téléphone, email et entreprise directement dans son carnet d\'adresses.',
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'Code QR',
          definition: 'Code-barres 2D pouvant stocker jusqu\'à 4 296 caractères alphanumériques. Les appareils photo modernes le lisent en moins d\'une seconde.',
        },
        {
          term: 'vCard',
          definition: 'Format standard pour les cartes de contact numériques (RFC 6350). Compatible avec iOS, Android, Outlook et la plupart des gestionnaires de contacts.',
        },
        {
          term: 'SSID',
          definition: 'Service Set Identifier. Le nom visible d\'un réseau WiFi qui apparaît lors de la recherche de réseaux disponibles sur votre appareil.',
        },
        {
          term: 'WPA2',
          definition: 'Wi-Fi Protected Access 2. Le protocole de sécurité WiFi le plus répandu. Utilise le chiffrement AES pour protéger les communications.',
        },
      ],
    },
    {
      type: 'summary',
      title: 'Clés pour Bien Utiliser cet Outil',
      items: [
        'Toutes les données sont traitées dans votre navigateur, jamais sur un serveur externe.',
        'Le QR WiFi nécessite le SSID et le mot de passe exacts (sensible à la casse).',
        'Les codes QR générés sont statiques : si vous changez votre mot de passe WiFi, générez-en un nouveau.',
        'Téléchargez en WebP pour une qualité maximale lors de l\'impression ou du partage.',
        'Essayez de scanner le QR depuis l\'écran avant de l\'imprimer.',
      ],
    },
  ],
  ui: {
    tabWifi: 'WiFi',
    tabUrl: 'URL',
    tabContact: 'Contact',
    labelSsid: 'Nom du Réseau (SSID)',
    labelPassword: 'Mot de Passe',
    labelEncryption: 'Sécurité',
    labelHidden: 'Réseau Caché',
    labelUrl: 'Adresse Web (URL)',
    labelName: 'Prénom',
    labelSurname: 'Nom de Famille',
    labelPhone: 'Téléphone',
    labelEmail: 'Email',
    labelOrg: 'Organisation / Entreprise',
    encWpa: 'WPA/WPA2',
    encWep: 'WEP',
    encNone: 'Aucune',
    downloadBtn: 'Télécharger PNG',
    privacyMsg: 'Généré 100% dans votre navigateur. Vos données ne voyagent jamais sur Internet.',
    placeholderSsid: 'MaBox_5G',
    placeholderUrl: 'https://exemple.com',
    placeholderPassword: '••••••••',
  },
};
