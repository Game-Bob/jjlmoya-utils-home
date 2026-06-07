import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-pintura-paredes';
const title = 'Calculadora de Pintura y Dilución para Paredes';
const description =
  'Calcula exactamente cuántos litros o galones de pintura necesitas para tus paredes. Ajusta por capas, tipo de superficie, dilución y obtén el coste real antes de comprar.';

const faqData = [
  {
    question: '¿Cómo calculo la cantidad exacta de pintura?',
    answer:
      'Multiplica la superficie de la pared por el número de capas y divide por el rendimiento de la pintura en metros cuadrados o pies cuadrados por litro o galón. Resta primero puertas y ventanas del área total.',
  },
  {
    question: '¿Cuánta pintura necesita una habitación estándar?',
    answer:
      'Una habitación de 12 metros cuadrados con techos de 2,5 metros tiene unos 30 metros cuadrados de pared. Con dos capas y un rendimiento de 12 metros cuadrados por litro, necesitas aproximadamente 5 litros de pintura.',
  },
  {
    question: '¿Debo diluir la pintura antes de aplicarla?',
    answer:
      'Las pinturas plásticas al agua suelen venir listas para usar o necesitan un 5 a 10 por ciento de agua en la primera capa. Las esmaltes o pinturas al aceite requieren un disolvente específico indicado en el bote.',
  },
  {
    question: '¿Cuántas capas son realmente necesarias?',
    answer:
      'Las superficies nuevas o muy absorbentes necesitan una imprimación más dos capas de acabado. Repintar una pared ya pintada en un color similar suele bastar con una o dos capas.',
  },
  {
    question: '¿Resto puertas y ventanas?',
    answer:
      'Sí. Mide cada hueco y réstalo del área total de pared. Como regla rápida, cada puerta son unos 2 metros cuadrados y cada ventana unos 1,5 metros cuadrados.',
  },
  {
    question: '¿El tipo de superficie cambia el rendimiento?',
    answer:
      'Sí. Las paredes lisas y preparadas rinden hasta 14 metros cuadrados por litro. El hormigón rugoso, el gotelé o el ladrillo absorbente pueden bajar el rendimiento a 6 u 8 metros cuadrados por litro.',
  },
];

const howToData = [
  {
    name: 'Mide tus paredes',
    text: 'Mide el ancho y alto de cada pared. Multiplícalos para obtener el área de cada una y suma todas las paredes.',
  },
  {
    name: 'Resta huecos',
    text: 'Mide puertas y ventanas y resta su área del total para obtener la superficie real a pintar.',
  },
  {
    name: 'Elige el tipo de pintura',
    text: 'Selecciona el tipo de pintura en la calculadora. La plástica mate, la plástica satinada y el esmalte tienen distintos rendimientos y recomendaciones de dilución.',
  },
  {
    name: 'Indica capas y precio',
    text: 'Escribe cuántas capas piensas aplicar y el precio por litro o galón. La calculadora devolverá la cantidad exacta y el coste total.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Calculadora de Pintura: Compra Exactamente lo que Necesitas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pintar una habitación sin calcular antes suele acabar en <strong>latas a medio usar</strong> o en viajes de emergencia a la tienda. El motivo es simple: el rendimiento de la pintura varía con la porosidad de la superficie, el cambio de color y el número de capas. Una pared lisa y previamente pintada puede rendir hasta 14 metros cuadrados por litro, mientras que una pared de gotelé puede absorber la misma cantidad y cubrir solo 6 metros cuadrados por litro.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Alto', label: 'Rendimiento estándar', icon: 'mdi:format-paint' },
        { value: '2 capas', label: 'Recomendado', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Dilución típica', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Cómo Funciona Realmente el Rendimiento de la Pintura',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los fabricantes indican en la lata un rendimiento teórico. Ese número parte de una superficie perfectamente lisa, no absorbente, blanca y aplicada con rodillo profesional en condiciones ideales. En la realidad, <strong>paredes porosas, colores oscuros y aplicación bricolaje</strong> reducen ese rendimiento entre un 20 y un 40 por ciento. Nuestra calculadora te permite elegir perfiles realistas para que no te quedes corto.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Pintura Plástica Mate',
          description: 'La opción más común para interiores. Buena cobertura, fácil de retocar y lavable en la mayoría de calidades.',
          icon: 'mdi:palette',
          points: ['Cobertura estándar para interiores', 'Dilución: 5 a 10 por ciento de agua', 'Ideal para: salones y dormitorios'],
        },
        {
          title: 'Pintura Plástica Satinada',
          description: 'Acabado ligeramente brillante con mayor resistencia a la humedad y las manchas. Más difícil de retocar sin marcas.',
          icon: 'mdi:brightness-6',
          points: ['Cobertura ligeramente superior', 'Dilución: 5 por ciento de agua', 'Ideal para: cocinas y baños'],
        },
        {
          title: 'Pintura Esmalte',
          description: 'Acabado duro y resistente para carpintería, radiadores y zonas de paso frecuente. Requiere disolvente o diluyente específico.',
          icon: 'mdi:spray',
          points: ['Acabado duro y duradero', 'Dilución: 10 a 15 por ciento de disolvente', 'Ideal para: puertas, marcos y muebles'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Medición Práctica de Superficies',
      icon: 'mdi:ruler-square',
      badge: 'Consejo',
      html: '<p style="margin:0">Multiplica el ancho por el alto de cada pared. Para un cálculo rápido, suma todos los anchos y multiplícalos por la altura de la habitación. Luego resta aproximadamente 2 metros cuadrados por cada puerta estándar y 1,5 metros cuadrados por cada ventana.</p>',
    },
    {
      type: 'title',
      text: 'Reglas de Dilución y Aplicación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Las primeras capas sobre superficies nuevas o reparadas siempre necesitan una ligera dilución para que la pintura penetre y ancle. Las capas de acabado deben aplicarse sin diluir o con el mínimo indicado por el fabricante. <strong>Diluir en exceso rompe el pigmento</strong> y deja parches transparentes que exigen una capa extra.',
    },
    {
      type: 'summary',
      title: 'Por Qué Calcular Antes de Comprar',
      items: [
        'Evita sobrantes de pintura que se secan en la lata y acaban siendo residuo.',
        'Previene diferencias de tono entre lotes comprados en distintos momentos.',
        'Presupuesta con precisión: conoce el coste real incluyendo imprimación y herramientas.',
        'Planifica el trabajo de una sola vez sin interrumpirlo por material adicional.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Superficie y Pintura',
    labelMetric: 'Métrico',
    labelImperial: 'Imperial',
    labelArea: 'Superficie total a pintar',
    labelAreaFt: 'Superficie total a pintar',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Rendimiento de la pintura',
    labelYieldFt: 'Rendimiento de la pintura',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Selecciona el tipo de pintura',
    btnPlasticMatTitle: 'Plástica Mate',
    btnPlasticMatSub: 'Mate · Agua 5%',
    btnPlasticSatinTitle: 'Plástica Satinada',
    btnPlasticSatinSub: 'Satinada · Agua 5%',
    btnEnamelTitle: 'Esmalte',
    btnEnamelSub: 'Esmalte · Disolvente 10%',
    labelCoats: 'Número de capas',
    unitCoats: 'capas',
    labelPrice: 'Precio por litro',
    labelPriceFt: 'Precio por galón',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Porcentaje de dilución',
    unitDilution: '%',
    resultBadge: 'Cálculo de pintura',
    labelPaint: 'Litros de pintura',
    labelPaintGal: 'Galones de pintura',
    labelCost: 'Coste total',
    labelWater: 'Líquido de dilución',
    labelWaterGal: 'Líquido de dilución',
    labelTotalVolume: 'Mezcla total',
    labelTotalVolumeGal: 'Mezcla total',
    labelCurrency: 'Moneda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
