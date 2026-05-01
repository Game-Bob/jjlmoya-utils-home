import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-ahorro-led';
const title = 'Calculadora de Ahorro LED';
const description =
  'Calcula cuánto dinero y kWh ahorras al cambiar tus bombillas tradicionales por LED. Descubre tu ahorro anual exacto, mensual y reducción de CO2.';

const faqData = [
  {
    question: '¿Cuánto ahorra realmente una bombilla LED?',
    answer:
      'Una bombilla LED ahorra entre un 80% y un 90% de energía comparada con una incandescente. Por ejemplo, pasar de 60W a 9W reduce el gasto de luz en esa lámpara casi al mínimo manteniendo el mismo brillo.',
  },
  {
    question: '¿En cuánto tiempo se amortiza el cambio a LED?',
    answer:
      'Debido al bajo coste actual de los LED y su gran ahorro, la inversión suele recuperarse en menos de 4 meses de uso normal. Si las luces están encendidas muchas horas, la amortización es incluso más rápida.',
  },
  {
    question: '¿Qué pasa si pongo una bombilla LED de más vatios?',
    answer:
      'Los LED generan muy poco calor, por lo que puedes poner bombillas de más lúmenes en lámparas que antes estaban limitadas por el calor de las incandescentes, siempre respetando los límites eléctricos del casquillo.',
  },
  {
    question: '¿Duran realmente lo que dicen las cajas?',
    answer:
      'Un LED de calidad dura entre 15.000 y 50.000 horas. En un uso doméstico medio de 4h al día, esto significa que una bombilla puede durar más de 15 años sin fundirse.',
  },
  {
    question: '¿Puedo usar LED en lámparas con regulador (Dimmer)?',
    answer:
      'Solo si la bombilla especifica claramente que es Dimmable o regulable. Los LED estándar no funcionan bien con los reguladores antiguos y pueden parpadear o zumbar.',
  },
  {
    question: '¿Hay que cambiar toda la lámpara?',
    answer:
      'En el 99% de los casos, no. Solo tienes que sustituir la bombilla por una LED con el mismo casquillo (E27, E14, GU10, etc.). Solo en algunos paneles LED modernos integrados la fuente de luz está fija.',
  },
  {
    question: '¿Sirven mis transformadores de halógenos de 12V?',
    answer:
      'En el caso de los focos MR16, a veces el transformador antiguo no detecta la carga tan baja de los LED y provoca parpadeo. Lo más recomendable es sustituirlo por uno específico para LED o cambiar a GU10.',
  },
];

const howToData = [
  {
    name: 'Cuenta tus puntos de luz',
    text: 'Revisa cuántas bombillas incandescentes o halógenas tienes en casa y anota su potencia en vatios.',
  },
  {
    name: 'Elige el LED equivalente',
    text: 'Selecciona el tipo de bombilla actual en la calculadora. Los valores LED equivalentes se asignan automáticamente.',
  },
  {
    name: 'Ajusta las horas de uso',
    text: 'Indica cuántas horas al día están encendidas las bombillas de media.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'Guía de Ahorro con LED: Cómo Recortar tu Factura de la Luz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El cambio de la iluminación tradicional a la tecnología <strong>LED (Light Emitting Diode)</strong> es una de las inversiones domésticas con el retorno más rápido y evidente. Cada vatio que restamos de nuestro consumo base se traduce directamente en un alivio para el bolsillo a final de mes. Una bombilla LED de 9W ofrece el mismo brillo que una incandescente de 60W con un <strong>85% menos de consumo</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Ahorro Energético', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Vida Útil LED', icon: 'mdi:clock-outline' },
        { value: '< 4 meses', label: 'Amortización', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iluminación Incandescente',
          description: 'La tecnología del siglo XX basada en el calentamiento de un filamento. El 95% de la energía se desperdicia en forma de calor.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% de energía desperdiciada en calor', 'Vida útil: 1.000 horas', 'Coste operativo muy alto'],
        },
        {
          title: 'Tecnología LED Moderna',
          description: 'El estándar actual de eficiencia energética para el hogar. Encendido instantáneo al 100% de brillo desde el primer segundo.',
          icon: 'mdi:led-outline',
          points: ['85–90% de ahorro directo', 'Vida útil: 25.000–50.000 horas', 'Mínima emisión de calor'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'La Física Detrás del Ahorro',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Una bombilla incandescente funciona calentando un filamento de tungsteno. El <strong>95% de la energía</strong> se desperdicia en calor y solo un 5% se convierte en luz. Los LED, en cambio, convierten directamente la electricidad en luz mediante semiconductores, con una eficiencia radicalmente superior. <strong>No mires los vatios, mira los lúmenes:</strong> una vieja bombilla de 60W ofrece unos 800 lm; hoy puedes conseguir esos mismos 800 lm con un LED de solo 8–9W.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabla de Equivalencias Rápidas',
      icon: 'mdi:table',
      badge: 'Referencia',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W incandescente</strong> → LED 5–6W (450 lm)</li><li><strong>60W incandescente</strong> → LED 8–10W (800 lm)</li><li><strong>100W incandescente</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halógena (foco)</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Ventajas del LED Más Allá del Dinero',
      items: [
        'Vida útil extrema: un LED de calidad puede durar más de 15 años a 4h/día.',
        'Encendido instantáneo al 100%, sin tiempos de espera ni parpadeos.',
        'Sin emisión de calor: reduce la carga del aire acondicionado en verano.',
        'Sin mercurio ni gases tóxicos, más fácil de reciclar que los tubos fluorescentes.',
        'Compatible con la mayoría de casquillos existentes (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuración del Hogar',
    labelBulbs: '¿Cuántas bombillas quieres cambiar?',
    unitBulbs: 'unidades',
    labelType: '¿Qué bombillas tienes ahora?',
    labelHours: '¿Cuántas horas al día están encendidas?',
    labelPrice: 'Precio de la electricidad',
    unitPrice: '€/kWh',
    resultBadge: 'Cálculo de ahorro real',
    labelAnnual: 'Ahorrarás al año',
    labelMonthly: 'Mensual',
    labelEfficiency: 'Eficiencia',
    labelCo2: 'Reducción de huella CO₂',
    unitLess: '% menos',
    currencySign: '€',
    btnInc60Title: 'Incandescente',
    btnInc60Sub: 'Clásica (60W)',
    btnInc40Title: 'Incandescente',
    btnInc40Sub: 'Pequeña (40W)',
    btnInc100Title: 'Incandescente',
    btnInc100Sub: 'Grande (100W)',
    btnHalo50Title: 'Halógena',
    btnHalo50Sub: 'Focos (50W)',
    usageNever: 'Casi nunca',
    usageLow: 'Poco uso',
    usageNormal: 'Uso normal',
    usageModerate: 'Uso moderado',
    usageHeavy: 'Uso intenso',
    usagePro: 'Uso profesional',
    usageVeryHeavy: 'Muy intenso',
    usageAlways: 'Siempre encendida',
  },
};
