import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-humedad';
const title = 'Calculadora de humedad y tiempo estimado de funcionamiento del deshumidificador';
const description =
  'Calcule cuánta agua debe extraer su deshumidificador para llevar una habitación húmeda a un nivel de humedad saludable. Vea el tiempo estimado de funcionamiento, las advertencias de riesgo de moho y las zonas de confort en una sola herramienta interactiva.';

const faqData = [
  {
    question: '¿Cuánto tiempo debería funcionar un deshumidificador al día?',
    answer:
      'En una habitación moderadamente húmeda, un deshumidificador doméstico estándar normalmente necesita funcionar entre 8 y 12 horas al día para mantener el 50 por ciento de humedad relativa. En condiciones muy húmedas o después de daños por agua, puede ser necesario un funcionamiento continuo de 24 a 48 horas para alcanzar un nivel base de sequedad.',
  },
  {
    question: '¿Qué nivel de humedad interior previene el moho?',
    answer:
      'El crecimiento del moho se inhibe cuando la humedad relativa interior se mantiene por debajo del 60 por ciento. La zona de confort ideal para la salud humana y la preservación de edificios está entre el 40 y el 50 por ciento de humedad relativa. Los niveles superiores al 70 por ciento crean un entorno de alto riesgo para que las esporas de moho germinen en 24 a 48 horas.',
  },
  {
    question: '¿Cuánta agua puede retener el aire?',
    answer:
      'La cantidad de vapor de agua que el aire puede retener depende de la temperatura. A 20 grados Celsius, el aire saturado contiene unos 17 gramos de agua por metro cúbico. A 25 grados Celsius esto aumenta a aproximadamente 23 gramos por metro cúbico. Una habitación de 30 metros cuadrados a 25 grados Celsius y 70 por ciento de humedad contiene aproximadamente 8 litros de agua invisible en el aire.',
  },
  {
    question: '¿La temperatura afecta la eficiencia del deshumidificador?',
    answer:
      'Sí. Los deshumidificadores basados en compresor funcionan mejor por encima de 18 grados Celsius. Por debajo de 15 grados Celsius su rendimiento cae porque las bobinas del evaporador pueden escarcharse. Los deshumidificadores desecantes son más adecuados para espacios fríos como garajes o sótanos porque utilizan un proceso de secado químico en lugar de la condensación.',
  },
  {
    question: '¿Qué tamaño de deshumidificador necesito?',
    answer:
      'Para una habitación moderadamente húmeda de hasta 50 metros cuadrados, una unidad de 10 a 12 litros por día suele ser suficiente. Para habitaciones muy húmedas o espacios de más de 50 metros cuadrados, elija un modelo de 20 litros por día. Después de una inundación o humedad severa, una unidad industrial de 30 litros por día restaurará las condiciones más rápido.',
  },
  {
    question: '¿Puede un deshumidificador secar ropa?',
    answer:
      'Sí. Un deshumidificador con modo de secado de ropa puede secar la ropa en interiores de manera eficiente mientras extrae humedad del aire circundante. Utiliza menos energía que una secadora de ropa y previene la condensación en ventanas y paredes. Espere tiempos de secado similares al secado al aire libre en clima cálido.',
  },
];

const howToData = [
  {
    name: 'Introducir tamaño de la habitación',
    text: 'Escriba la superficie del suelo de la habitación en metros cuadrados. La calculadora asume una altura de techo estándar de 2,5 metros para estimar el volumen total de aire.',
  },
  {
    name: 'Establecer temperatura',
    text: 'Introduzca la temperatura actual de la habitatura en grados Celsius. El aire más cálido retiene más humedad, por lo que la temperatura afecta directamente cuánta agua debe eliminarse.',
  },
  {
    name: 'Seleccionar humedad actual',
    text: 'Use el dial de confort o la entrada numérica para establecer el porcentaje de humedad relativa actual. Los valores superiores al 60 por ciento se resaltan con tonos de advertencia.',
  },
  {
    name: 'Elegir humedad deseada',
    text: 'Establezca su humedad relativa deseada. Se recomienda el 50 por ciento para el confort y la prevención de moho. El 40 por ciento es ideal para personas con alergias.',
  },
  {
    name: 'Introducir capacidad del deshumidificador',
    text: 'Introduzca la tasa de extracción de su máquina en litros por día. Esto suele estar impreso en la etiqueta frontal o en el manual de usuario.',
  },
  {
    name: 'Revisar resultados',
    text: 'Lea la simulación del tanque de extracción de agua, la estimación del tiempo de funcionamiento y el banner de riesgo de moho para decidir cuánto tiempo hacer funcionar su aparato.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'El agua oculta en sus paredes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de los propietarios nunca se dan cuenta de que el aire húmedo no solo es incómodo, es costoso y peligroso. Una sola habitación húmeda puede contener varios litros de vapor de agua invisible. Con el tiempo, esta humedad se condensa en superficies frías, alimenta colonias de moho y degrada el yeso, la pintura y la madera. Comprender exactamente cuánta agua debe eliminarse y cuánto tiempo toma es el primer paso para proteger su hogar y su salud.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Humedad interior ideal', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Tiempo de funcionamiento diario promedio', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Umbral de riesgo de moho', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por qué importa la humedad relativa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La humedad relativa no es la cantidad de agua en el aire, es el porcentaje de agua que el aire está reteniendo en relación con el máximo que podría retener a esa temperatura. El aire cálido es como una esponja más grande. A 30 grados Celsius, el aire puede retener casi el doble de humedad que a 15 grados Celsius. Por eso una habitación puede sentirse pegajosa incluso después de abrir las ventanas. La humedad sigue ahí, solo es menos visible.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Alta humedad',
          description: 'Por encima del 60 por ciento de humedad relativa. Riesgo de moho, ácaros del polvo y daños por condensación.',
          icon: 'mdi:alert',
          points: ['Condensación en ventanas y paredes', 'Olores a humedad y crecimiento microbiano', 'Mayor irritación respiratoria', 'Facturas de calefacción más altas debido a la conductividad térmica del aire húmedo'],
        },
        {
          title: 'Humedad óptima',
          description: 'Entre el 40 y el 50 por ciento de humedad relativa. Cómoda, saludable y energéticamente eficiente.',
          icon: 'mdi:check-circle',
          points: ['Sin condensación en superficies frías', 'Las esporas de moho permanecen inactivas', 'Confort de la piel y las vías respiratorias', 'Preservación de muebles y madera'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Auditoría rápida de humedad',
      icon: 'mdi:clipboard-check',
      badge: 'Acción',
      html: '<p style="margin:0">Revise las ventanas en busca de condensación cada mañana. Si las gotas aparecen regularmente, su humedad es demasiado alta. Haga funcionar un deshumidificador durante 12 horas diarias hasta que la condensación cese. Mueva la unidad al cuarto más húmedo, generalmente la cocina, el baño o el sótano. Vacíe el tanque diariamente y limpie el filtro cada dos semanas.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionar correctamente su deshumidificador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un error común es comprar un deshumidificador demasiado pequeño para el espacio. Una máquina de 10 litros por día en un sótano húmedo de 60 metros cuadrados funcionará continuamente sin alcanzar nunca la humedad objetivo. Use esta calculadora para ver el volumen exacto de extracción que su habitación requiere. Si la estimación de tiempo de funcionamiento supera las 20 horas al día, necesita una unidad de mayor capacidad o una mejor ventilación.',
    },
    {
      type: 'summary',
      title: 'Cómo mantener su hogar seco',
      items: [
        'Use esta calculadora para determinar la extracción exacta de agua necesaria para cualquier habitación.',
        'Mantenga la humedad relativa interior entre el 40 y el 50 por ciento para la salud y el confort.',
        'Haga funcionar el deshumidificador hasta que el banner de riesgo de moho se ponga verde.',
        'Vacíe el tanque de agua antes de que se llene para evitar el apagado automático.',
        'Limpie los filtros regularmente para mantener el flujo de aire y las tasas de extracción al máximo.',
        'Mejore la ventilación de la habitación junto con la deshumidificación para obtener resultados más rápidos.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Tamaño de la habitación',
    unitM2: 'm2',
    labelTemperature: 'Temperatura',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Humedad actual',
    labelTargetHumidity: 'Humedad deseada',
    labelCapacity: 'Capacidad del deshumidificador',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Zona de confort',
    comfortCurrent: 'Actual',
    comfortTarget: 'Objetivo',
    tankTitle: 'Agua en el aire',
    tankLiters: 'litros',
    runtimeTitle: 'Tiempo estimado de funcionamiento',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Riesgo de moho',
    moldRiskHigh: 'Riesgo alto',
    moldRiskMedium: 'Riesgo moderado',
    moldRiskLow: 'Riesgo bajo',
    extractionLabel: 'a extraer',
    tipEnergy: 'Hacer funcionar el deshumidificador durante las horas de menor demanda puede reducir significativamente los costos de electricidad.',
    tipMold: 'Mantener la humedad por debajo del 50 por ciento evita que las esporas de moho germinen en las superficies.',
    unitPercent: '%',
    badgeHigh: 'Alto',
    badgeMedium: 'Medio',
    badgeLow: 'Bajo',
  },
};
