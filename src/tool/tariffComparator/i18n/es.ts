import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';

const slug = 'comparador-tarifas-luz';
const title = 'Comparador de Tarifas de Luz: Mercado Libre vs PVPC';
const description =
  'Descubre qué tarifa de luz te conviene más. Compara el mercado regulado PVPC vs mercado libre según tu consumo y ahorra cientos de euros en tu factura eléctrica.';

const faqData = [
  {
    question: '¿Qué es mejor hoy en día, mercado libre o regulado?',
    answer:
      'Históricamente, el mercado regulado (PVPC) ha sido más barato, pero es volátil. El mercado libre ofrece estabilidad con precios fijos. Nuestra calculadora te ayuda a decidir según cuánta luz gastas al año.',
  },
  {
    question: '¿Puedo volver al mercado regulado si me paso al libre?',
    answer:
      'Sí, puedes volver al mercado regulado (PVPC) en cualquier momento siempre que tu potencia contratada sea inferior a 10 kW. Solo tienes que contactar con una comercializadora de referencia.',
  },
  {
    question: '¿Cómo sé cuánta potencia tengo contratada?',
    answer:
      'Puedes encontrar este dato en tu factura de la luz, normalmente identificado como "Término de potencia" o "Potencia contratada", expresado en kW. El estándar suele estar entre 3.3 kW y 5.5 kW.',
  },
  {
    question: '¿Qué pasa si supero la potencia contratada?',
    answer:
      'Si tienes un contador digital, el ICP cortará la luz momentáneamente. Deberás desconectar algún aparato y rearmar el cuadro eléctrico.',
  },
];

const howToData = [
  {
    name: 'Consulta tu factura',
    text: 'Busca el consumo anual en kWh y la potencia contratada en kW en tu última factura eléctrica.',
  },
  {
    name: 'Ajusta los valores',
    text: 'Mueve los selectores para que coincidan con tus datos reales de consumo y potencia.',
  },
  {
    name: 'Compara resultados',
    text: 'Observa la diferencia de coste anual estimado entre el mercado regulado y el mercado libre.',
  },
  {
    name: 'Toma una decisión',
    text: 'Elige la opción que más ahorro te proporcione o la que te ofrezca más tranquilidad.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    { name: 'Red Eléctrica de España (REE) — ESIOS: Seguimiento del PVPC', url: 'https://www.esios.ree.es/es' },
    { name: 'CNMC: Portal de comparación de ofertas de energía', url: 'https://comparador.cnmc.gob.es/' },
    { name: 'MITECO: Bono Social y legislación energética', url: 'https://www.miteco.gob.es/' },
    { name: 'IDAE: Guías prácticas de ahorro y autoconsumo', url: 'https://www.idae.es/' },
    { name: 'OMIE: Precios horarios del mercado diario de electricidad', url: 'https://www.omie.es/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Comparador de Tarifas Eléctricas: Mercado Libre vs Regulado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Entender la factura de la luz en España se ha convertido en un auténtico desafío. Con la volatilidad de los precios energéticos, la decisión entre el <strong>Mercado Regulado (PVPC)</strong> y el <strong>Mercado Libre</strong> puede suponer una diferencia de cientos de euros al año. Nuestra herramienta usa datos actualizados de costes de potencia y energía para ayudarte a decidir.',
    },
    {
      type: 'stats',
      items: [
        { value: 'PVPC', label: 'Precio dinámico por hora', icon: 'mdi:clock-fast' },
        { value: 'Libre', label: 'Precio fijo anual', icon: 'mdi:shield-check' },
        { value: '≈150€', label: 'Diferencia típica anual', icon: 'mdi:currency-eur' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'PVPC — Mercado Regulado',
          description: 'El precio de la energía cambia cada hora según el mercado mayorista. En días de mucha generación renovable, puede caer a niveles muy bajos.',
          icon: 'mdi:lightning-bolt',
          points: ['Sin permanencia, cambio libre', 'Acceso al Bono Social para vulnerables', 'Discriminación horaria Punta/Llano/Valle'],
        },
        {
          title: 'Mercado Libre — Precio Fijo',
          description: 'Las comercializadoras fijan un precio por kWh que se mantiene durante el año, independientemente del mercado mayorista.',
          icon: 'mdi:tag-outline',
          points: ['Estabilidad y previsibilidad', 'Sin sorpresas en la factura', 'Puede incluir servicios adicionales'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Los Tres Tramos Horarios',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Punta (más caro):</strong> L-V de 10:00–14:00 y 18:00–22:00. <strong>Llano (intermedio):</strong> L-V de 08:00–10:00, 14:00–18:00 y 22:00–00:00. <strong>Valle (más barato):</strong> L-V de 00:00–08:00 y las 24h de sábados, domingos y festivos. Planificar lavadoras, lavavajillas y carga del coche eléctrico en horas valle es la clave del ahorro extremo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La Trampa de los Descuentos',
      icon: 'mdi:alert',
      badge: 'Atención',
      html: '<p>Muchas ofertas del mercado libre prometen un "20% de descuento". Asegúrate de preguntar <strong>sobre qué precio base</strong> se aplica ese descuento. A veces el precio base está tan inflado que, incluso con el descuento, resulta más caro que una tarifa estándar.</p>',
    },
    {
      type: 'summary',
      title: 'Claves para Decidir',
      items: [
        'Si tu consumo es alto y en horas valle, el PVPC suele ser más ventajoso.',
        'Si valoras la estabilidad y no quieres estar pendiente del reloj, elige precio fijo.',
        'Con placas solares, el PVPC permite compensar excedentes al precio horario del mercado.',
        'Reducir la potencia contratada es, a menudo, la forma más rápida de bajar la factura.',
        'El PVPC no tiene permanencia: puedes volver en cualquier momento.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Consumo Anual',
    unitKwhYear: 'kWh/año',
    labelPower: 'Potencia Contratada',
    unitKw: 'kW',
    labelMarket: 'PVPC (Mercado Regulado)',
    labelFree: 'Mercado Libre (Precio Fijo)',
    labelAnnualEst: 'Estimación anual',
    labelPowerTerm: 'Potencia (Fijo)',
    labelEnergyTerm: 'Consumo (Variable)',
    labelDashboard: 'Dashboard Energético',
    labelMaxPower: 'Maxímetro (Pico)',
    labelMaxPowerEst: 'Estimación de pico',
    labelCo2: 'Huella de CO₂',
    labelCo2Est: 'Estimación anual',
    labelSimulator: 'Simulador de Escenarios',
    labelSolar: 'Autoconsumo Solar',
    labelSolarDesc: 'Simular ahorro con placas solares (30% reducción de consumo)',
    labelShift: 'Desplazamiento a Valle',
    labelShiftDesc: 'Consumo movido a horas baratas:',
    badgeBetter: 'Opción más barata',
    badgeWorseYear: 'año',
    currencySign: '€',
    monthLabels: 'Ene,Feb,Mar,Abr,May,Jun,Jul,Ago,Sep,Oct,Nov,Dic',
  },
};
