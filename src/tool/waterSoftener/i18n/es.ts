import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-descalcificador';
const title = 'Optimizador de Descalcificador y Consumo de Sal para el Hogar';
const description =
  'Analice el nivel de dureza de su agua, calcule la configuración óptima del descalcificador y estime el consumo anual de sal. Vea pronósticos de impacto de cal, calendarios de recarga de sal y predicciones de vida útil de electrodomésticos en una herramienta interactiva.';

const faqData = [
  {
    question: '¿Qué es la dureza del agua?',
    answer:
      'La dureza del agua es la concentración de minerales de calcio y magnesio disueltos en su agua del grifo. Se mide en granos por galón o grados franceses. El agua dura causa acumulación de cal en las tuberías, reduce la eficiencia de calefacción y acorta la vida útil de los electrodomésticos.',
  },
  {
    question: '¿Cómo funciona un descalcificador?',
    answer:
      'Un descalcificador utiliza perlas de resina de intercambio iónico para intercambiar iones de calcio y magnesio por iones de sodio. Cuando la resina se satura, el sistema se regenera lavando una solución salada a través del tanque, restaurando las perlas y enviando los minerales duros por el desagüe.',
  },
  {
    question: '¿Cuánta sal usa un descalcificador al año?',
    answer:
      'Un hogar típico de cuatro personas con agua moderadamente dura usa entre 80 y 120 kilogramos de sal al año. El agua muy dura o los hogares más grandes pueden superar los 200 kilogramos. Los descalcificadores modernos de alta eficiencia usan aproximadamente un 30 por ciento menos de sal que los modelos antiguos.',
  },
  {
    question: '¿Con qué frecuencia debo rellenar el tanque de sal?',
    answer:
      'La mayoría de los tanques de salmuera necesitan rellenarse cada 4 a 8 semanas. Revise el nivel de sal mensualmente. Si el tanque está a menos de un tercio de su capacidad, agregue una nueva bolsa de 25 kilogramos. Nunca deje que la sal se agote completamente o la resina se endurecerá de nuevo y perderá eficacia.',
  },
  {
    question: '¿El agua dura realmente daña los electrodomésticos?',
    answer:
      'Sí. Los depósitos de cal en los elementos calefactores los obligan a trabajar más, aumentando las facturas de energía y causando fallos prematuros. Un calentador de agua en una zona de agua muy dura puede perder hasta un 45 por ciento de su vida útil esperada. Las lavadoras y lavavajillas también sufren válvulas obstruidas y tambores con incrustaciones.',
  },
  {
    question: '¿Puedo beber agua descalcificada?',
    answer:
      'El agua descalcificada es segura para la mayoría de las personas. El aumento de sodio es pequeño, aproximadamente equivalente a una rebanada de pan al día. Sin embargo, las personas con dietas estrictas bajas en sodio pueden preferir un grifo separado de agua no descalcificada para beber o elegir una sal de descalcificador a base de potasio.',
  },
];

const howToData = [
  {
    name: 'Introduzca la dureza de su agua',
    text: 'Escriba el valor de dureza de su informe de calidad del agua o tira de prueba. Elija granos por galón o grados franceses en el selector de unidades.',
  },
  {
    name: 'Establezca el tamaño del hogar',
    text: 'Seleccione el número de personas que viven en su casa. Más ocupantes significan mayor consumo de agua y agotamiento más rápido de la sal.',
  },
  {
    name: 'Elija la capacidad del descalcificador',
    text: 'Ingrese la capacidad en granos del tanque de resina de su descalcificador. Esto suele estar impreso en la válvula de control o en el manual de usuario. Los valores comunes son 24.000 o 32.000 granos.',
  },
  {
    name: 'Revise la categoría de dureza',
    text: 'Lea la escala interactiva de dureza para entender si su agua es blanda, moderadamente dura o extremadamente dura.',
  },
  {
    name: 'Consulte el pronóstico de sal',
    text: 'Observe el simulador de apilamiento de bolsas de sal para ver cuántas bolsas de 25 kilogramos necesitará al año y cuándo se debe realizar la próxima recarga.',
  },
  {
    name: 'Inspeccione el impacto en electrodomésticos',
    text: 'Compare la vida útil base de su lavadora, calentador de agua y cafetera contra su vida útil estimada con su agua actual sin tratar.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'El costo invisible del agua dura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El agua dura es uno de los problemas ocultos más costosos en un hogar. Cada vez que abre el grifo, minerales disueltos fluyen a través de sus tuberías y electrodomésticos. Durante meses y años estos minerales cristalizan en cal, una costra blanca y dura que obstruye los elementos calefactores, reduce el caudal y destruye las juntas de goma. El resultado es facturas de energía más altas, vida útil más corta de los electrodomésticos y llamadas de mantenimiento frecuentes. Un descalcificador elimina este daño en su origen.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Consumo medio anual de sal', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Vida útil base lavadora', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm de cal por GPG/año', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por qué la cal es tan destructiva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La cal no es solo una mancha cosmética en su hervidor. Dentro de un calentador de agua forma una capa aislante en el elemento calefactor. Por cada milímetro de cal, la eficiencia de transferencia de energía cae hasta un 10 por ciento. Eso significa que un recubrimiento de 3 milímetros puede aumentar su factura de calefacción de agua en casi un 30 por ciento. En lavadoras la cal bloquea la activación del detergente, por lo que usa más polvo para obtener peores resultados. En cafeteras arruina el termostato y produce extracción amarga y desigual.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Agua dura sin tratar',
          description: 'Los minerales se depositan libremente en todo el sistema de fontanería y cada electrodoméstico conectado.',
          icon: 'mdi:alert',
          points: ['Acumulación rápida de cal en calentadores y calderas', 'Mayor consumo de detergente y jabón', 'Vida útil de electrodomésticos reducida en un 30 a 45 por ciento', 'Facturas de energía más altas por el efecto aislante de la cal'],
        },
        {
          title: 'Agua descalcificada',
          description: 'El calcio y magnesio se eliminan en el punto de entrada antes de llegar a grifos y electrodomésticos.',
          icon: 'mdi:check-circle',
          points: ['Cero deposición de cal en elementos calefactores', 'Dosis normales de detergente producen mejores resultados', 'Los electrodomésticos alcanzan su vida útil de diseño completa', 'Menor consumo de energía para calefacción de agua'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Prueba rápida de agua dura',
      icon: 'mdi:clipboard-check',
      badge: 'Acción',
      html: '<p style="margin:0">Llene una botella transparente con agua del grifo y agregue unas gotas de jabón líquido. Agite enérgicamente. Si el agua permanece turbia y produce muy poca espuma, su agua es dura. Agua cristalina con espuma densa y estable indica agua blanda. Para una medición precisa utilice una tira de prueba de dureza total o solicite un informe a su proveedor de agua.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionar correctamente el suministro de sal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Quedarse sin sal es la forma más rápida de arruinar un descalcificador. Cuando el tanque de salmuera se vacía, la cama de resina se endurece en días y el sistema deja de proteger su hogar. Use esta calculadora para pronosticar exactamente cuántas bolsas de 25 kilogramos necesita al año. Si el resultado es más de 10 bolsas, considere actualizar a un tanque de resina de mayor capacidad o una válvula de alta eficiencia que use menos sal por ciclo de regeneración.',
    },
    {
      type: 'summary',
      title: 'Cómo proteger su hogar del agua dura',
      items: [
        'Use esta calculadora para encontrar su categoría exacta de dureza del agua y necesidades de sal.',
        'Instale un descalcificador correctamente dimensionado en el punto de entrada principal del suministro.',
        'Rellene el tanque de salmuera antes de que baje de un tercio de su capacidad.',
        'Use pellets de sal evaporada de alta pureza para el mejor rendimiento de la resina.',
        'Mantenga la válvula y la cama de resina cada 3 a 5 años.',
        'Monitoree las facturas de energía de los electrodomésticos en busca de aumentos repentinos que puedan señalar acumulación de cal.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Dureza del agua',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Tamaño del hogar',
    unitPeople: 'personas',
    labelSoftenerCapacity: 'Capacidad del descalcificador',
    unitGrains: 'granos',
    hardnessSoft: 'Blanda',
    hardnessSlightly: 'Ligeramente dura',
    hardnessModerate: 'Moderadamente dura',
    hardnessHard: 'Dura',
    hardnessVery: 'Muy dura',
    hardnessExtreme: 'Extremadamente dura',
    scaleTitle: 'Tasa de acumulación de cal',
    scaleUnitMetric: 'mm/año',
    scaleUnitImperial: 'in/año',
    saltTitle: 'Pronóstico anual de sal',
    saltAnnual: 'Sal anual',
    saltBags: 'Bolsas al año',
    saltDaysPerBag: 'Días por bolsa',
    saltWeeksPerBag: 'Semanas por bolsa',
    applianceTitle: 'Vida útil de electrodomésticos',
    applianceWasher: 'Lavadora',
    applianceHeater: 'Calentador de agua',
    applianceCoffee: 'Cafetera',
    applianceBaseline: 'Con descalcificador',
    applianceWithHardness: 'Con agua dura',
    applianceSaved: 'años',
    badgeSaved: 'Extendido por',
    labelUnitSystem: 'Unidades',
    btnMetric: 'Métrico',
    btnImperial: 'Imperial',
  },
};
