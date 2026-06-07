import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-consumo-standby';
const title = 'Simulador de Consumo de Energía en Standby';
const description =
  'Descubre cuánta electricidad desperdician tus dispositivos en modo standby. Calcula el coste anual oculto de las cargas fantasma de TVs, routers, cargadores y más.';

const faqData = [
  {
    question: '¿Qué es el consumo fantasma o carga fantasma?',
    answer:
      'El consumo fantasma es la electricidad que consumen los dispositivos electrónicos cuando están apagados o en modo standby. Esto ocurre porque muchos dispositivos permanecen parcialmente activos para responder a controles remotos, mantener conexiones de red o mantener relojes internos funcionando.',
  },
  {
    question: '¿Cuánto cuesta la energía en standby al año?',
    answer:
      'El hogar medio desperdicia entre 50 y 150 euros al año solo en consumo en standby. Un solo televisor moderno puede consumir de 10 a 20 vatios continuamente, lo que se traduce en aproximadamente 15 a 30 euros anuales dependiendo del precio de la electricidad.',
  },
  {
    question: '¿Qué dispositivos consumen más en standby?',
    answer:
      'Los mayores culpables son los decodificadores, las consolas de juegos, los ordenadores de sobremesa en modo suspensión, los smart TVs y los adaptadores de corriente externos antiguos. Las cajas de cable y satélite son particularmente derrochadoras porque raramente entran en standby real.',
  },
  {
    question: '¿Desenchufar dispositivos realmente ahorra dinero?',
    answer:
      'Sí. Desenchufar dispositivos o usar regletas avanzadas con enchufes maestros elimina el consumo en standby por completo. Para un hogar típico con 20 dispositivos en standby, el ahorro anual puede oscilar entre 40 y 120 euros.',
  },
  {
    question: '¿Vale la pena comprar regletas inteligentes?',
    answer:
      'Las regletas inteligentes o avanzadas cortan la corriente a los dispositivos periféricos cuando el dispositivo maestro se apaga. Se amortizan en pocos meses si las usas con centros de entretenimiento o estaciones de trabajo informáticas.',
  },
  {
    question: '¿Cómo puedo medir el consumo en standby en casa?',
    answer:
      'Puedes usar un medidor de potencia enchufable (vatímetro) económico para medir exactamente cuántos vatios consume cada dispositivo cuando está apagado o inactivo. Como alternativa, este simulador proporciona estimaciones estandarizadas basadas en promedios de fabricantes y mediciones de laboratorio.',
  },
];

const howToData = [
  {
    name: 'Recorre cada habitación',
    text: 'Cuenta cada dispositivo que permanece enchufado las 24 horas. Incluye televisores, microondas, routers, impresoras, consolas de juegos y cargadores de teléfono.',
  },
  {
    name: 'Estima las horas diarias en standby',
    text: 'La mayoría de los dispositivos están en standby de 20 a 24 horas al día. Introduce la media para cada dispositivo o usa el valor por defecto de 24 horas.',
  },
  {
    name: 'Introduce tu precio de electricidad',
    text: 'Introduce el precio que pagas por kilovatio hora. Aparece en tu factura de la luz.',
  },
  {
    name: 'Lee tu resumen de consumo fantasma',
    text: 'El simulador muestra los vatios totales desperdiciados, los kilovatios hora anuales y el coste anual oculto. Usa la insignia de categoría para ver si tu hogar es bajo, moderado, alto o extremo.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Carga fantasma: la electricidad que pagas pero nunca usas',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada enchufe de tu casa que tiene un cable conectado es una fuente potencial de <strong>electricidad fantasma</strong>. Incluso cuando el interruptor está apagado, el dispositivo sigue consumiendo energía. Puede ser solo unos pocos vatios, pero multiplicados por 24 horas al día y 365 días al año, esos vatios se convierten en cientos de kilovatios hora y en dinero real que sale de tu bolsillo.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'De la factura del hogar', icon: 'mdi:flash' },
        { value: '23h', label: 'Prom. standby/día', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'Promedio dispositivo top', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Los dispositivos que nunca duermen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los hogares modernos contienen una media de 40 dispositivos electrónicos. Aproximadamente la mitad de ellos están conectados continuamente a la red. Aunque las regulaciones energéticas han mejorado la eficiencia en standby en los últimos años, el número total de dispositivos ha aumentado. Una sola consola de juegos en modo encendido instantáneo puede consumir 15 vatios. Un televisor con inicio rápido puede consumir 12 vatios. Añade routers, módems, altavoces inteligentes, microondas con relojes, impresoras y cargadores, y el total supera rápidamente los 100 vatios de consumo permanente en segundo plano.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Hogares de bajo impacto',
          description: 'Hogares que gestionan activamente el consumo en standby mediante regletas inteligentes y hábitos de desenchufar.',
          icon: 'mdi:leaf',
          points: ['Menos de 50 vatios en standby total', 'Coste anual inferior a 50 euros', 'Usa regletas avanzadas'],
        },
        {
          title: 'Hogares de alto impacto',
          description: 'Hogares típicos con centros de entretenimiento, varias consolas de juegos y ordenadores siempre encendidos.',
          icon: 'mdi:lightning-bolt',
          points: ['Más de 150 vatios en standby total', 'Coste anual superior a 150 euros', 'Muchos dispositivos en modo inicio rápido'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista rápida de ahorro',
      icon: 'mdi:check-circle',
      badge: 'Acción',
      html: '<p style="margin:0">Desenchufa los cargadores de teléfono cuando no los uses. Usa una regleta controlada por maestro para tu centro de entretenimiento. Desactiva los modos de inicio rápido o encendido instantáneo en TVs y consolas. Apaga los ordenadores de sobremesa en lugar de dejarlos en modo suspensión.</p>',
    },
    {
      type: 'title',
      text: 'Por qué los vatios suman más de lo que crees',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Un vatio es una tasa de uso de energía. Un vatio funcionando durante una hora es un vatio hora. Un dispositivo que consume 10 vatios continuamente utiliza 87,6 kilovatios hora al año. A un precio medio de 0,25 euros por kilovatio hora, ese único dispositivo cuesta más de 21 euros al año. Ahora multiplica eso por cada gadget enchufado en tu hogar.',
    },
    {
      type: 'summary',
      title: 'Cómo reducir tu carga fantasma',
      items: [
        'Identifica los mayores consumidores con este simulador o un medidor enchufable.',
        'Agrupa dispositivos en regletas inteligentes que cortan el standby cuando el dispositivo principal está apagado.',
        'Desactiva las funciones de siempre encendido, inicio rápido y standby de red siempre que sea posible.',
        'Desenchufa cargadores y pequeños electrodomésticos que no uses a diario.',
        'Considera reemplazar adaptadores de corriente externos muy antiguos por modelos modernos eficientes.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Auditoría de carga fantasma',
    labelDevices: 'Dispositivos en standby conectados',
    labelHours: 'Horas de standby al día',
    unitHours: 'h',
    labelPrice: 'Precio de la electricidad',
    unitPrice: '/kWh',
    resultBadge: 'Resultado de consumo fantasma',
    labelAnnualKwh: 'Desperdiciado al año',
    labelAnnualCost: 'Coste anual oculto',
    labelMonthlyCost: 'Equivalente mensual',
    labelDevicesCount: 'Dispositivos contados',
    labelTotalWatts: 'Vatios totales en standby',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Moneda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Consumo bajo',
    categoryModerate: 'Consumo moderado',
    categoryHigh: 'Consumo alto',
    categoryExtreme: 'Consumo extremo',
    addDevice: 'Añadir dispositivo',
    removeDevice: 'Eliminar',
    modalAddTitle: 'Añadir dispositivo en standby',
    labelDeviceName: 'Nombre del dispositivo',
    labelDeviceWatts: 'Vatios en standby',
    btnSave: 'Guardar',
    btnCancel: 'Cancelar',
  },
};
