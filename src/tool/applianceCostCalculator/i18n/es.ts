import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-coste-electrodomesticos';
const title = 'Calculadora de Coste por Ciclo de Agua y Energía de Electrodomésticos';
const description =
  'Calcula el coste real por carga de tu lavadora, lavavajillas y secadora. Descubre exactamente cuánta electricidad, agua y detergente cuesta cada ciclo y cuánto puedes ahorrar cambiando al modo Eco.';

const faqData = [
  {
    question: '¿Cuánto cuesta un ciclo de lavadora?',
    answer:
      'Un ciclo Eco 40C típico consume unos 0,45 kWh de electricidad y 40 litros de agua. Con precios europeos medios, esto cuesta aproximadamente de 0,10 a 0,15 euros por carga. Un ciclo intensivo a 60C puede consumir más de 1,2 kWh y 70 litros, elevando el coste por encima de 0,30 euros por carga.',
  },
  {
    question: '¿Es más barato poner el lavavajillas por la noche?',
    answer:
      'Si tu proveedor de electricidad usa tarifas por horas, poner el lavavajillas en horas valle puede reducir el coste de energía un 30 por ciento o más. Las horas punta suelen ser por las mañanas y tardes de entre semana. Consulta tu contrato o datos del contador inteligente para confirmar tu ventana exacta de horas valle.',
  },
  {
    question: '¿La secadora consume mucha electricidad?',
    answer:
      'Sí. Una secadora de ropa es uno de los electrodomésticos domésticos que más energía consume. Una carga completa puede consumir de 2,5 a 3,5 kWh, costando de 0,50 a 0,80 euros por ciclo. Usar una secadora con bomba de calor o tender la ropa al aire libre puede reducir este coste un 60 a 80 por ciento.',
  },
  {
    question: '¿Cuánta agua usa un lavavajillas?',
    answer:
      'Los lavavajillas modernos son sorprendentemente eficientes. Un ciclo Eco estándar usa solo de 8 a 12 litros de agua por carga, mientras que un programa intensivo puede usar de 14 a 16 litros. Esto es mucho menos que lavar los mismos platos a mano bajo el grifo abierto, que típicamente consume de 40 a 60 litros.',
  },
  {
    question: '¿Cuál es la hora más barata para usar electrodomésticos?',
    answer:
      'Bajo tarifas por horas, los periodos más baratos suelen ser tarde por la noche, muy temprano por la mañana y durante los fines de semana. Estos tramos de horas valle pueden ser un 30 a 50 por ciento más baratos que las horas punta de entre semana. Algunos proveedores también ofrecen horas gratuitas los fines de semana.',
  },
  {
    question: '¿Cambiar al modo Eco realmente ahorra dinero?',
    answer:
      'Absolutamente. Los modos Eco usan temperaturas más bajas, fases de calentamiento más cortas y menos agua. A lo largo de un año completo, cambiar de Normal a Eco en tu lavadora y lavavajillas puede ahorrar de 50 a 100 euros en electricidad y agua combinados, dependiendo de la frecuencia de uso y los precios locales.',
  },
];

const howToData = [
  {
    name: 'Selecciona tu electrodoméstico',
    text: 'Toca el icono de la lavadora, el lavavajillas o la secadora en la parte superior de la calculadora. Cada electrodoméstico tiene diferentes perfiles de consumo de energía y agua.',
  },
  {
    name: 'Elige un tipo de ciclo',
    text: 'Usa el deslizador Eco, Normal o Intensivo para establecer el programa de lavado. Eco usa menos energía y agua. Intensivo usa la mayor cantidad.',
  },
  {
    name: 'Introduce tus precios locales',
    text: 'Escribe tu precio de electricidad por kWh y tu precio de agua por litro. Puedes encontrarlos en tu factura de servicios o en la web del proveedor.',
  },
  {
    name: 'Establece la frecuencia de uso',
    text: 'Indica cuántos ciclos haces por semana. Esto permite a la calculadora estimar tu coste anual y los ahorros potenciales por año.',
  },
  {
    name: 'Elige la hora de uso',
    text: 'Selecciona la hora a la que planeas poner el electrodoméstico. Las horas punta se resaltan en rojo. Las horas valle son verdes y más baratas si tienes una tarifa por horas.',
  },
  {
    name: 'Activa los costes de detergente',
    text: 'Activa el interruptor de detergente si quieres que el recibo incluya una estimación de polvo, líquido o cápsulas por ciclo.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'El Coste Oculto de Cada Carga',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de la gente no tiene idea de cuánto cuesta realmente un ciclo de lavadora. Ven una factura trimestral de electricidad y asumen que los electrodomésticos son baratos de usar. La realidad es que una familia que hace cinco cargas de lavandería por semana puede gastar más de 200 euros al año solo en lavado. Añade el lavavajillas tres veces por semana y la secadora dos veces por semana y el total supera los 500 euros anuales. Esta calculadora desglosa cada céntimo para que puedas optimizar tus hábitos.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Lavado Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Agua Lavado Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Recargo Punta', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por Qué los Pequeños Cambios se Multiplican',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un solo grado de temperatura o unos pocos litros de agua parecen insignificantes para un ciclo. Pero a lo largo de 250 ciclos al año, esas pequeñas diferencias se acumulan en una suma importante. Bajar de 60C a 40C reduce el consumo de energía aproximadamente un 40 por ciento por carga. Cambiar de Normal a Eco en un lavavajillas ahorra unos 3 litros de agua y 0,3 kWh cada vez. Estas no son ganancias marginales. Son la forma más rápida de reducir tu factura de servicios sin comprar electrodomésticos nuevos.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ciclo Intensivo',
          description: 'Calor y agua máximos para cargas muy sucias.',
          icon: 'mdi:alert',
          points: ['1,2 a 3,5 kWh por carga', '70 litros para lavadoras', 'Aplica recargo por hora punta', 'Coste anual más alto'],
        },
        {
          title: 'Ciclo Eco',
          description: 'Temperatura más baja, duración optimizada, agua mínima.',
          icon: 'mdi:check-circle',
          points: ['0,45 a 1,5 kWh por carga', 'Solo 8 a 40 litros', 'Posible horario valle', 'Coste anual más bajo'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Auditoría Rápida de Electrodomésticos',
      icon: 'mdi:clipboard-check',
      badge: 'Acción',
      html: '<p style="margin:0">Pon la lavadora solo con carga completa. Usa el programa Eco para suciedad normal. Programa el lavavajillas para que empiece después de las 22:00 si tienes una tarifa por horas. Limpia el filtro de pelusa de la secadora después de cada ciclo para mantener la eficiencia. Seca la ropa al aire libre o en un tendedero siempre que el tiempo lo permita.</p>',
    },
    {
      type: 'title',
      text: 'Horas Valle y Precios Punta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muchos proveedores de electricidad cobran tarifas diferentes según la hora del día. Los periodos punta, normalmente las mañanas y tardes de entre semana, pueden costar un 30 a 50 por ciento más que los periodos valle. Una misma carga puesta a las 20:00 puede costar 0,18 euros, mientras que la misma carga a las 02:00 cuesta solo 0,12 euros. A lo largo de un año, programar bien los electrodomésticos puede ahorrar de 50 a 100 euros sin cambiar nada más. Esta calculadora resalta las horas punta en rojo y las horas valle en verde para que puedas planificar con antelación.',
    },
    {
      type: 'summary',
      title: 'Cómo Reducir los Costes de Electrodomésticos',
      items: [
        'Usa esta calculadora para encontrar el coste real por ciclo de tus electrodomésticos.',
        'Cambia al modo Eco siempre que sea posible para ahorrar hasta un 40 por ciento de energía.',
        'Pon cargas completas en lugar de cargas parciales para maximizar la eficiencia.',
        'Retrasa los ciclos a horas valle si tu tarifa admite precios por horas.',
        'Seca la ropa al aire libre en lugar de usar la secadora para eliminar su coste por completo.',
        'Limpia los filtros y desincrusta regularmente para mantener los electrodomésticos funcionando a la eficiencia indicada.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Electrodoméstico',
    applianceWasher: 'Lavadora',
    applianceDishwasher: 'Lavavajillas',
    applianceDryer: 'Secadora',
    labelCycle: 'Programa',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensivo',
    labelElectricityPrice: 'Precio de Electricidad',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Precio del Agua',
    unitPriceLiter: '€/L',
    labelDetergent: 'Detergente',
    labelDetergentToggle: 'Incluir coste de detergente',
    labelHour: 'Hora Planificada',
    peakBadge: 'Tarifa punta activa',
    offPeakBadge: 'Tarifa valle',
    receiptTitle: 'Desglose de Costes',
    receiptElectricity: 'Electricidad',
    receiptWater: 'Agua',
    receiptDetergent: 'Detergente',
    receiptTotal: 'Total por ciclo',
    receiptPerYear: 'Estimado por año',
    comparisonTitle: 'Cambio Inteligente',
    comparisonText: 'Cambiar de Normal a Eco ahorra dinero en cada carga.',
    comparisonSavings: 'Ahorro anual',
    comparisonMonths: 'meses de detergente',
    badgePeak: 'Punta',
    badgeOffPeak: 'Valle',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'año',
    labelCyclesPerWeek: 'Ciclos por semana',
    currencySign: '€',
    labelCurrency: 'Moneda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
