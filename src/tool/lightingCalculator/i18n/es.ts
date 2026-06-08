import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-de-iluminacion-y-lumenes-para-el-hogar';
const title = 'Calculadora de Iluminación y Lúmenes para el Hogar';
const description =
  'Calcule exactamente cuántos lúmenes y bombillas necesita para cualquier habitación. Seleccione el tipo de habitación, las dimensiones y el tipo de bombilla para obtener un plan de iluminación profesional con estimaciones de lux en tiempo real.';

const faqData = [
  {
    question: '¿Cuántos lúmenes necesito para una sala de estar?',
    answer:
      'Para una sala de estar típica, apunte a unos 150 lux en el suelo. Multiplique el área de la habitación en metros cuadrados por 150 para obtener los lúmenes necesarios. Para una habitación de 20 metros cuadrados, necesita aproximadamente 3.000 lúmenes.',
  },
  {
    question: '¿Cuál es la diferencia entre lux y lúmenes?',
    answer:
      'Los lúmenes miden la producción total de luz de una bombilla. Los lux miden la luz que realmente llega a una superficie. Una habitación con techos altos o paredes oscuras necesita más lúmenes para alcanzar el mismo nivel de lux porque la luz se pierde por la distancia y la absorción.',
  },
  {
    question: '¿Realmente ahorran energía las bombillas LED?',
    answer:
      'Sí. Las bombillas LED producen unos 100 lúmenes por watt, mientras que las incandescentes producen solo unos 15. Una bombilla LED de 10W proporciona la misma luz que una incandescente de 60W, usando una sexta parte de la electricidad.',
  },
  {
    question: '¿Cómo afecta el color de la habitación a las necesidades de iluminación?',
    answer:
      'Las paredes y techos oscuros absorben la luz. En una habitación con superficies oscuras, puede necesitar un 50% más de lúmenes que la recomendación estándar.',
  },
  {
    question: '¿Cuál es un buen nivel de lux para leer?',
    answer:
      'Para leer cómodamente, necesita de 300 a 500 lux en la página. La iluminación ambiental general suele proporcionar de 150 a 200 lux, así que añada una lámpara de tarea cerca de su lugar de lectura para el brillo adicional.',
  },
  {
    question: '¿Se pueden atenuar las bombillas LED?',
    answer:
      'Solo si están marcadas como atenuables. Las LED estándar pueden parpadear o tener una vida útil reducida cuando se conectan a un regulador. Verifique siempre el empaque en busca del símbolo de atenuable antes de instalar.',
  },
];

const howToData = [
  {
    name: 'Elija el tipo de habitación',
    text: 'Seleccione la función de la habitación. Las cocinas y oficinas necesitan más luz que los dormitorios o pasillos.',
  },
  {
    name: 'Introduzca las dimensiones',
    text: 'Introduzca el ancho, la longitud y la altura del techo de la habitación. La calculadora utiliza estos datos para determinar el índice de la habitación y el factor de utilización de la luz.',
  },
  {
    name: 'Seleccione el tipo de bombilla y la cantidad',
    text: 'Elija su tecnología de bombilla preferida y cuántos luminarios tiene. La calculadora le indicará si necesita más bombillas.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Guía Completa de Diseño de Iluminación para el Hogar y Planificación de Lúmenes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La iluminación adecuada transforma una casa en un hogar. Más allá de la estética, la cantidad de luz adecuada afecta el estado de ánimo, la productividad e incluso la salud ocular. <strong>Nuestra calculadora de iluminación para el hogar</strong> le ayuda a determinar exactamente cuántos lúmenes necesita para cualquier habitación, teniendo en cuenta el tamaño de la habitación, la altura del techo, los colores de las superficies y el tipo de bombilla.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Rango de Lux Recomendado', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Eficiencia LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Factor de Mantenimiento', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iluminación Ambiental Cálida',
          description: 'Ideal para salas de estar y dormitorios. Crea una atmósfera acogedora y reduce la fatiga visual por la noche.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Temperatura de color cálida (2700K)', 'Múltiples fuentes atenuables'],
        },
        {
          title: 'Iluminación de Tareas Brillante',
          description: 'Esencial para cocinas, oficinas y baños. Proporciona visibilidad clara para trabajos detallados.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Blanco frío (4000K)', 'Enfocada en superficies de trabajo'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Por qué Importan las Dimensiones de la Habitación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La luz se expande y se debilita con la distancia. Una bombilla que es suficientemente brillante para un techo de 2,5 metros puede ser demasiado tenue para un techo de 4 metros. La calculadora tiene esto en cuenta utilizando la fórmula del índice de la habitación, que considera tanto el área del piso como la altura de montaje para estimar cuánta luz realmente llega a su plano de trabajo.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabla de Referencia Rápida de Lux',
      icon: 'mdi:table',
      badge: 'Referencia',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Sala de estar</strong> → 150 lux</li><li><strong>Cocina</strong> → 300 lux</li><li><strong>Dormitorio</strong> → 100 lux</li><li><strong>Baño</strong> → 200 lux</li><li><strong>Oficina</strong> → 500 lux</li><li><strong>Pasillo</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Consejos Profesionales para una Mejor Iluminación',
      items: [
        'Capa tres tipos de luz: ambiental, de tareas y de acento.',
        'Use atenuadores para ajustar el brillo en diferentes momentos del día.',
        'Elija bombillas LED para larga vida útil y bajo consumo de energía.',
        'Coloque las lámparas de tareas en el lado opuesto a su mano dominante para evitar sombras.',
        'Considere bombillas inteligentes para programación automatizada y cambios de temperatura de color.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Calculadora de Iluminación de Habitaciones',
    labelRoomType: 'Tipo de habitación',
    labelRoomWidth: 'Ancho',
    labelRoomLength: 'Largo',
    labelHeight: 'Techo',
    labelBulbType: 'Bombilla',
    labelBulbWatt: 'Potencia',
    labelFixtures: 'Luminarias',
    labelAmbient: 'Ambiente',
    btnAmbientCozy: 'Acogedor',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Brillante',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'uds',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Lux objetivo',
    labelCurrentLux: 'Lux actuales',
    labelBulbsNeeded: 'Bombillas necesarias',
    labelRoomArea: 'Área',
    statusOptimal: 'Perfecto',
    statusInsufficient: 'Demasiado tenue',
    statusExcess: 'Demasiado brillante',
    btnLiving: 'Sala',
    btnKitchen: 'Cocina',
    btnBedroom: 'Dormitorio',
    btnBathroom: 'Baño',
    btnOffice: 'Oficina',
    btnHallway: 'Pasillo',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halógena',
    btnBulbIncandescent: 'Incandescente',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'Su iluminación está perfectamente equilibrada para esta habitación.',
    tipInsufficient: 'Añada más luminarias o bombillas de mayor potencia.',
    tipExcess: 'Reduzca luminarias o atenúe para ahorrar energía.',
    labelManualAdjust: 'Ajuste manual',
    labelSummary: 'Su plan de iluminación',
    labelTotalLumens: 'Lúmenes totales necesarios',
    labelSuggestedSetup: 'Configuración recomendada',
    btnExport: 'Exportar PDF',
  },
};
