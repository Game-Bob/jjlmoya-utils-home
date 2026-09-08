import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculateur-temps-recuperation-chauffe-eau';
const title = 'Calculateur du temps de récupération pour chauffe eau';
const description = 'Estimez le temps nécessaire à votre chauffe-eau pour passer de la température actuelle à la température cible selon le volume, la puissance utile et le rendement.';
const faq = [
  { question: 'Que signifie le temps de récupération ici ?', answer: 'C\u2019est le temps estimé pour faire passer le volume d\u2019eau saisi de sa température actuelle à la température cible. Le calcul utilise la capacité thermique de l\u2019eau, la puissance utile et le rendement estimé.' },
  { question: 'Quelle formule le calculateur utilise-t-il ?', answer: 'La chaleur est estimée en multipliant les litres par l\u2019élévation de température et par 1,16 wattheure par litre et par degré Celsius. Cette énergie est ensuite divisée par la puissance multipliée par le rendement.' },
  { question: 'Le résultat prédit-il exactement le temps de mon appareil ?', answer: 'Non. C\u2019est une estimation transparente pour planifier. Les pertes en veille, les cycles du thermostat, la stratification, le mélange, les pertes des tuyaux et les limites de puissance peuvent rallonger le temps réel.' },
  { question: 'Quel rendement dois-je saisir ?', answer: 'Utilisez un rendement utile ou de récupération documenté si vous en avez un. Sinon, saisissez une estimation prudente et comparez-la à la notice ou à un cycle mesuré.' },
];
const howTo = [
  { name: 'Saisir le volume d\u2019eau stockée', text: 'Indiquez le volume du ballon en litres pour estimer la quantité d\u2019eau à réchauffer.' },
  { name: 'Définir les températures actuelle et cible', text: 'Saisissez la température au début de la récupération et celle que le ballon doit atteindre.' },
  { name: 'Saisir la puissance utile et le rendement', text: 'Utilisez la puissance en kilowatts et le pourcentage d\u2019énergie qui atteint réellement l\u2019eau.' },
  { name: 'Lire la fenêtre de récupération', text: 'Utilisez la durée et l\u2019heure de fin estimée pour planifier, puis comparez le résultat à la documentation de l\u2019appareil.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'fr' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Volume d\u2019eau stockée', volumeHint: 'Capacité du ballon', temperatureUnitLabel: 'Unités de température', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Température actuelle de l\u2019eau', targetTempLabel: 'Température cible', powerLabel: 'Puissance utile du chauffe-eau', efficiencyLabel: 'Rendement estimé', startTimeLabel: 'La récupération commence à', compareTitle: 'Comparer une autre configuration', comparePowerLabel: 'Autre puissance utile', compareEfficiencyLabel: 'Autre rendement', compareOptional: 'Facultatif: renseignez les deux champs pour comparer', calculateNote: 'Utilisez ceci comme estimation de planification et consultez la notice avant de vous fier au temps obtenu.', tankCurrent: 'Actuelle', tankTarget: 'Cible', resultTitle: 'Fenêtre de récupération', recoveryTimeLabel: 'Récupération estimée', energyLabel: 'Chaleur nécessaire', effectivePowerLabel: 'puissance effective', readyAtLabel: 'Prêt vers', temperatureRiseLabel: 'Élévation de température', comparisonTitle: 'Configuration alternative', comparisonFaster: 'plus rapide', comparisonSlower: 'plus lente', noHeatingNeeded: 'La température cible est déjà atteinte', invalidInputs: 'Saisissez des valeurs positives pour le volume, la puissance et le rendement afin d\u2019obtenir l\u2019estimation.', insufficientPower: 'Une puissance utile positive est nécessaire.', limitsTitle: 'Ce que cette estimation ne prend pas en compte', limitsText: 'Le modèle ne connaît ni l\u2019isolation du ballon, ni les pertes en veille, ni les cycles du thermostat, ni la stratification, ni le mélange, ni les pertes des tuyaux, ni la courbe de puissance réelle de votre appareil.', hoursUnit: 'h', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Estimez quand votre eau chaude sera de nouveau disponible', level: 2 },
    { type: 'paragraph', html: 'Après une douche, un bain ou un gros prélèvement, la taille du ballon ne suffit pas. Il faut savoir quelle quantité d\u2019énergie doit revenir dans l\u2019eau et à quelle vitesse le chauffe-eau peut la fournir. Ce calculateur transforme ces données en fenêtre de récupération pour planifier la prochaine utilisation.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Chaleur nécessaire en Wh', icon: 'mdi:water-boiler' }, { value: 'kW × rendement', label: 'Puissance de chauffe utile', icon: 'mdi:flash-outline' }, { value: 'Chaleur ÷ puissance', label: 'Temps de récupération', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Comment l\u2019estimation est construite', level: 2 },
    { type: 'paragraph', html: 'L\u2019estimation utilise la capacité thermique de l\u2019eau. Chaque litre demande environ 1,16 wattheure par degré d\u2019élévation. Le calculateur multiplie ce facteur par le volume et l\u2019élévation de température, puis divise par la puissance utile après application du rendement.' },
    { type: 'comparative', items: [{ title: 'Utile pour planifier', description: 'Choisissez une heure de départ, indiquez l\u2019état du ballon et obtenez une heure de fin estimée. Ajoutez un autre couple puissance-rendement pour comparer une configuration.', icon: 'mdi:calendar-clock', points: ['Tester le prochain cycle de récupération', 'Comparer la puissance utile, pas seulement la puissance nominale', 'Garder l\u2019élévation de température visible'] }, { title: 'Pas une garantie de service', description: 'Un appareil réel peut être plus lent à cause des pertes de chaleur, des cycles du thermostat, du mélange ou d\u2019une puissance qui ne se maintient pas. Comparez le résultat à la notice ou à une mesure.', icon: 'mdi:thermometer-alert', points: ['Les pertes en veille ne sont pas modélisées', 'Aucune donnée fabricant n\u2019est récupérée', 'Aucun conseil de sécurité ou d\u2019installation'] }], columns: 2 },
    { type: 'title', text: 'Les entrées qui changent le plus le temps de récupération', level: 2 },
    { type: 'paragraph', html: 'Une élévation de température plus grande augmente directement l\u2019énergie nécessaire. Un ballon plus grand demande aussi proportionnellement plus d\u2019énergie pour la même élévation. La puissance utile et le rendement agissent en sens inverse: doubler leur produit réduit approximativement de moitié le temps idéal.' },
    { type: 'title', text: 'Utiliser le résultat sans fausse précision', level: 2 },
    { type: 'paragraph', html: 'Cet outil sert à planifier et comparer des hypothèses, pas à certifier un chauffe-eau ni à dimensionner une installation. Les guides techniques et les essais réels intègrent d\u2019autres pertes et conditions de mesure; un cycle observé peut donc différer de l\u2019estimation idéale.' },
  ],
};
