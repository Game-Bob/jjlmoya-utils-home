import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';

const slug = 'calculadora-solar';
const title = 'Calculadora de Inclinación de Paneles Solares';
const description =
  'Calcula el ángulo óptimo de inclinación para tus paneles solares según tu latitud geográfica. Obtén los valores para instalación fija y ajustes estacionales.';

const faqData = [
  {
    question: '¿Qué pasa si mi tejado no tiene la inclinación perfecta?',
    answer:
      'No es un problema grave. Las pérdidas por desviaciones pequeñas (5-10°) son menores al 3% de la producción anual. Es más importante evitar sombras parciales que obsesionarse con el ángulo exacto.',
  },
  {
    question: '¿El ángulo óptimo es el mismo en todo el mundo?',
    answer:
      'No. Depende directamente de tu latitud. Un usuario en Madrid (~40°N) tiene un ángulo óptimo distinto a uno en Noruega (~60°N) o en Argentina (~34°S).',
  },
  {
    question: '¿Hacia dónde deben mirar los paneles?',
    answer:
      'En el Hemisferio Norte, siempre hacia el Sur (azimut 180°). En el Hemisferio Sur, hacia el Norte. Una orientación Este-Oeste puede causar pérdidas del 15-20% respecto al óptimo.',
  },
  {
    question: '¿Sirve también para colectores de agua caliente solar?',
    answer:
      'Sí. Las fórmulas de inclinación son las mismas para colectores térmicos y para paneles fotovoltaicos, ya que ambos dependen del mismo principio geométrico.',
  },
];

const howToData = [
  {
    name: 'Introduce tu latitud',
    text: 'Escribe la latitud de tu ubicación en grados decimales, o usa el botón de geolocalización para detectarla automáticamente.',
  },
  {
    name: 'Consulta el ángulo óptimo',
    text: 'El ángulo óptimo anual es el valor principal para instalaciones fijas. Úsalo como referencia al programar tu instalador.',
  },
  {
    name: 'Ajusta por estación (opcional)',
    text: 'Si tu soporte lo permite, usa los ángulos de invierno y verano para maximizar la producción en cada estación.',
  },
  {
    name: 'Verifica la orientación',
    text: 'Comprueba el indicador de hemisferio: tus paneles deben apuntar al Sur si estás en el Hemisferio Norte, y al Norte si estás en el Sur.',
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
  inLanguage: 'es',
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
      text: 'La Ciencia de la Inclinación Solar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La diferencia entre una factura eléctrica de cero euros y una inversión que no rinde está, literalmente, en los ángulos. La <strong>radiación solar</strong> no es uniforme: es un flujo dinámico que cambia con la hora, el día y la estación. Comprender la geometría celeste es el primer paso para convertir tu tejado en una central eléctrica de alto rendimiento.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Lat × 0.87', label: 'Fórmula General', icon: 'mdi:angle-acute' },
        { value: 'Lat × 0.76 + 3.1', label: 'Latitudes 25°–50°', icon: 'mdi:map-marker' },
        { value: '± 15°', label: 'Ajuste Estacional', icon: 'mdi:calendar-sync' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'El Principio de Perpendicularidad',
          description: 'Un panel solar funciona como una red que atrapa fotones. Es máximamente efectiva cuando se enfrenta a 90° respecto a los rayos solares. Cualquier desviación reduce la superficie efectiva de captación.',
          icon: 'mdi:solar-panel',
          points: ['Maximiza la superficie efectiva de captación', 'Base de todos los cálculos de inclinación'],
        },
        {
          title: 'La Importancia de la Latitud',
          description: 'Tu ubicación en el globo dicta la altura máxima del sol. Cuanto más lejos del ecuador, más bajo viaja el sol y más vertical debe ser el panel para interceptarlo.',
          icon: 'mdi:earth',
          points: ['A mayor latitud, mayor inclinación necesaria', 'El ecuador requiere paneles casi planos'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Estrategias Estacionales',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Verano:</strong> El sol alcanza su cenit. Los paneles deben estar casi planos, restando ~15° a tu latitud. Aprovecha los días largos y la radiación directa intensa. <strong>Invierno:</strong> El sol viaja bajo, cerca del horizonte. Inclina más los paneles sumando ~15° a tu latitud. La mayor inclinación también ayuda a que la nieve se deslice sin tapar las células.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '¿Instalación Fija o Ajuste Estacional?',
      icon: 'mdi:wrench',
      badge: 'Consejo Pro',
      html: '<p><strong>Fija (estándar):</strong> Configura al ángulo óptimo anual. Menor mantenimiento y mayor resistencia al viento, con una pérdida de apenas el 5-10% frente al seguimiento solar. <strong>Ajuste estacional (pro):</strong> Modifica el ángulo 2-4 veces al año para ganar hasta un +15% de rendimiento en los meses de invierno.</p>',
    },
    {
      type: 'summary',
      title: 'Claves para una Instalación Eficiente',
      items: [
        'El ángulo óptimo anual es tu referencia principal para instalaciones fijas.',
        'Las pérdidas por desviaciones de ±5° son menores al 3% de la producción anual.',
        'Prioriza evitar sombras parciales sobre buscar el ángulo exacto.',
        'En el Hemisferio Norte, orienta siempre los paneles hacia el Sur.',
        'Un ajuste estacional de 2-4 veces al año puede mejorar el rendimiento invernal en un +15%.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Latitud Geográfica',
    btnLocate: 'Detectar mi ubicación',
    labelOptimal: 'Ángulo Óptimo Anual',
    labelEfficiency: 'Eficiencia Máxima',
    labelWinter: 'Invierno',
    labelSummer: 'Verano',
    hemisphereNorth: 'Hemisferio Norte — Orientar al SUR',
    hemisphereSouth: 'Hemisferio Sur — Orientar al NORTE',
    geoNotAvailable: 'Geolocalización no disponible en este navegador.',
  },
};
