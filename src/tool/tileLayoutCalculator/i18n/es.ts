import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-disposicion-azulejos';
const title = 'Calculadora de Disposición y Desperdicio de Azulejos';
const description =
  'Planifica el suelo de tu habitación con precisión. Calcula la cantidad exacta de azulejos, cajas necesarias, coste total y visualiza la disposición en tiempo real con una previsualización de cuadrícula interactiva.';

const faqData = [
  {
    question: '¿Cómo calculo cuántos azulejos necesito para una habitación?',
    answer:
      'Mide el ancho y el largo de la habitación, elige el tamaño del azulejo e indica el ancho de la junta. La calculadora divide las dimensiones de la habitación entre el azulejo más la junta para dar el número exacto de piezas por fila y columna.',
  },
  {
    question: '¿Qué porcentaje de desperdicio debo añadir al comprar azulejos?',
    answer:
      'Para habitaciones rectangulares estándar, añade un 10% de desperdicio. Para estancias con muchas esquinas, disposiciones diagonales o cortes complejos, aumenta al 15%. Esto cubre roturas y errores de corte.',
  },
  {
    question: '¿El grosor de la junta realmente cambia la cantidad de azulejos?',
    answer:
      'Sí. Las juntas más anchas reducen la cobertura efectiva de cada pieza, aumentando ligeramente el número total necesario. La calculadora lo tiene en cuenta automáticamente en cada fila y columna.',
  },
  {
    question: '¿Debería comprar cajas extra aparte del porcentaje de desperdicio?',
    answer:
      'Es prudente adquirir una caja adicional si está disponible. Los lotes de tinte pueden variar entre producciones, y contar con repuestos a juego facilita futuras reparaciones.',
  },
  {
    question: '¿Cómo coloco azulejos en una habitación con forma irregular?',
    answer:
      'Divide la estancia en rectángulos más pequeños. Calcula cada zona por separado y suma los totales. Siempre redondea hacia arriba las cajas parciales para garantizar una cobertura completa.',
  },
  {
    question: '¿Cuál es la diferencia de desperdicio entre cerámica y porcelánico?',
    answer:
      'El porcelánico es más denso y difícil de cortar, lo que puede aumentar el desperdicio de corte entre un 2% y un 3% respecto a la cerámica estándar. Ambos materiales deben seguir el mismo proceso de medición.',
  },
  {
    question: '¿Puedo devolver las cajas de azulejos sobrantes?',
    answer:
      'La mayoría de comercios aceptan cajas sin abrir en un plazo de 30 días. Guarda siempre el ticket y no abras las cajas sobrantes hasta que la instalación esté completamente terminada.',
  },
];

const howToData = [
  {
    name: 'Mide la habitación',
    text: 'Anota el ancho y el largo del suelo en el sistema de unidades que prefieras.',
  },
  {
    name: 'Selecciona azulejo y junta',
    text: 'Elige las dimensiones del azulejo y el ancho de junta que deseas utilizar.',
  },
  {
    name: 'Calcula y visualiza',
    text: 'Introduce los valores en la calculadora, ajusta el margen de desperdicio y revisa la previsualización de la disposición en vivo.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Guía Completa para Planificar Suelos de Azulejos y Controlar el Desperdicio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Un proyecto de alicatado exitoso comienza mucho antes de extender la primera capa de adhesivo. La medición precisa, la planificación inteligente de la disposición y la estimación exacta del desperdicio determinan si tu reforma se mantiene en presupuesto y en plazo. <strong>Nuestra calculadora de disposición de azulejos interactiva</strong> transforma las dimensiones en bruto en un plano visual, mostrando exactamente cuántas piezas caben por fila, cuántas cajas comprar y dónde se invierte tu dinero.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Desperdicio Estándar', icon: 'mdi:alert-circle' },
        { value: '30+ años', label: 'Vida útil del azulejo', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Instalación media', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Azulejos de Gran Formato',
          description: 'Las piezas de más de 60 cm crean un aspecto moderno y continuo, pero requieren sustratos perfectamente nivelados y generan mayor desperdicio de corte en habitaciones pequeñas.',
          icon: 'mdi:arrow-expand',
          points: ['Menos juntas visibles', 'Efecto visual premium', 'Mayor desperdicio en espacios reducidos'],
        },
        {
          title: 'Mosaicos Pequeños',
          description: 'Ideales para baños y patrones intrincados. Se adaptan a formas irregulares, pero demandan más junta y tiempo de mano de obra.',
          icon: 'mdi:apps',
          points: ['Flexibles alrededor de obstáculos', 'Más junta requerida', 'Mayor tiempo de instalación'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Por qué Importa Visualizar la Disposición',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ver la cuadrícula de azulejos antes de comprar evita sorpresas costosas. La previsualización en vivo revela si el tamaño elegido deja franjas estrechas en los bordes o logra un suelo equilibrado y simétrico. Ajustando el ancho de junta y la orientación de la pieza dentro de la calculadora, puedes optimizar la disposición por estética y eficiencia antes de hacer el pedido.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabla de Referencia de Cobertura Rápida',
      icon: 'mdi:table',
      badge: 'Referencia',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 azulejos por m²</li><li><strong>45 x 45 cm</strong> → 5 azulejos por m²</li><li><strong>60 x 60 cm</strong> → 3 azulejos por m²</li><li><strong>60 x 120 cm</strong> → 1,5 azulejos por m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Consejos Profesionales para Minimizar el Desperdicio',
      items: [
        'Pide un 10% extra para disposiciones rectas y un 15% para diagonales o espiga.',
        'Conserva todas las cajas del mismo lote de producción para garantizar la uniformidad del color.',
        'Mide en diagonal la habitación para comprobar la escuadra antes de planificar las filas.',
        'Usa azulejos de gran formato solo en habitaciones más anchas que la longitud de la pieza para evitar cortes excesivos.',
        'Redondea siempre las cajas hacia arriba; es más barato que un segundo envío.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuración de la habitación',
    labelRoomWidth: 'Ancho de la habitación',
    labelRoomLength: 'Largo de la habitación',
    labelTileWidth: 'Ancho del azulejo',
    labelTileLength: 'Largo del azulejo',
    labelGrout: 'Junta',
    labelWaste: 'Margen de desperdicio',
    labelTilesPerBox: 'Azulejos por caja',
    labelPrice: 'Precio por caja',
    labelPattern: 'Patrón de colocación',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'uds',
    unitPrice: '/caja',
    resultBadge: 'Vista previa en vivo',
    labelArea: 'Superficie',
    labelTiles: 'Azulejos totales',
    labelBoxes: 'Cajas necesarias',
    labelCost: 'Coste total',
    labelWasteCount: 'Azulejos de desperdicio',
    labelCuts: 'Cortes parciales',
    currency: 'EUR',
    btnMetric: 'Métrico',
    btnImperial: 'Imperial',
    btnPatternStraight: 'Recto',
    btnPatternBrick: 'Corridos',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Disposición óptima',
    badgeWarning: 'Alerta de alto desperdicio',
    visualTitle: 'Previsualización de la disposición',
  },
};
