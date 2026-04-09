import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'comparador-consumo-gas-aerotermia-aire';
const title = 'Comparador Gas vs. Aerotermia vs. Aire: Ahorro y Consumo';
const description =
  'Calcula cuánto ahorras al cambiar tu caldera de gas por aerotermia o bomba de calor. Comparativa real de consumo energético y eficiencia para el hogar.';

const faqData = [
  {
    question: '¿Qué es más barato, la aerotermia o el gas natural?',
    answer:
      'A nivel operativo mensual, la aerotermia es significativamente más barata que el gas natural. Gracias a su eficiencia del 400% (COP de 4), el coste por kWh de calor entregado suele ser entre un 30% y un 50% menor que con gas, a pesar de que el precio del kWh eléctrico sea más alto.',
  },
  {
    question: '¿Qué diferencia hay entre aerotermia y una bomba de calor normal?',
    answer:
      'Técnicamente ambas son bombas de calor. La diferencia principal es el medio al que entregan el calor: la aerotermia suele ser "aire-agua" (calienta el agua de los radiadores o suelo radiante), mientras que la bomba de calor convencional es "aire-aire" (calienta directamente el aire mediante splits).',
  },
  {
    question: '¿Se puede instalar aerotermia en un piso con radiadores antiguos?',
    answer:
      'Sí, es posible instalar aerotermia con radiadores convencionales usando equipos de "alta temperatura". Sin embargo, para obtener el máximo ahorro posible, lo ideal es combinarla con suelo radiante o radiadores de baja temperatura.',
  },
  {
    question: '¿Cuántos años se tarda en amortizar un equipo de aerotermia?',
    answer:
      'Dependiendo del consumo de la vivienda y de si existen subvenciones, el tiempo de amortización suele situarse entre los 5 y 8 años. Si se cuenta con placas solares fotovoltaicas, este periodo puede reducirse drásticamente.',
  },
];

const howToData = [
  {
    name: 'Superficie de la casa',
    text: 'Introduce los metros cuadrados útiles de tu vivienda para estimar la demanda térmica anual.',
  },
  {
    name: 'Precios de energía',
    text: 'Ajuste los precios de Gas y Electricidad según su factura real para mayor precisión.',
  },
  {
    name: 'Ver resultados',
    text: 'Compare los tres sistemas lado a lado y descubra el ganador en eficiencia y coste anual.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'IDAE: Guía de Bombas de Calor y Aerotermia',
      url: 'https://www.idae.es/sites/default/files/documentos/publicaciones_idae/Guias_IDAE_La_Bomba_de_calor_2023_V11.pdf',
    },
    {
      name: 'Portal del Consumidor: Precios de la Energía (CNMC)',
      url: 'https://comparador.cnmc.gob.es/',
    },
    {
      name: 'UNE: Eficiencia Energética en Edificios',
      url: 'https://www.une.org/encuentra-tu-norma/busca-tu-norma/norma?c=N0060747',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Claves para elegir tu calefacción',
      items: [
        'La <strong>aerotermia</strong> es hasta un 400% más eficiente que el gas.',
        'El <strong>aislamiento</strong> reduce tu factura más que cualquier caldera.',
        'La <strong>amortización</strong> de sistemas eléctricos ronda los 6-8 años.',
        'Combina <strong>placas solares</strong> para calefacción casi gratuita.',
      ],
    },
    {
      type: 'title',
      text: 'Comparativa de Consumo: Gas vs. Aerotermia vs. Aire Acondicionado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Elegir el sistema de climatización adecuado para el hogar es una de las decisiones financieras y de confort más importantes que podemos tomar. En un contexto de precios energéticos volátiles y una creciente preocupación por la sostenibilidad, saber qué sistema es más eficiente —y cuál nos hará ahorrar más al mes— es fundamental.',
    },
    {
      type: 'paragraph',
      html: 'Históricamente, el gas natural ha sido el rey indiscutible en España por su comodidad y precio. Sin embargo, la irrupción de la <strong>aerotermia</strong> y la mejora tecnológica de las <strong>bombas de calor (aire-aire)</strong> han cambiado las reglas del juego. Nuestra calculadora te ayuda a visualizar el coste operativo anual para que decidas con datos reales en la mano.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Eficiencia Aerotermia',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'mejor', positive: true },
        },
        {
          label: 'Ahorro Anual Medio',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'estimado', positive: true },
        },
        {
          label: 'Vida Útil Equipos',
          value: '20 años',
          icon: 'mdi:calendar-check',
          trend: { value: 'estándar', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. La Caldera de Gas Natural: El estándar tradicional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La calefacción por gas natural utiliza una caldera que quema combustible para calentar agua, que luego circula por radiadores o suelo radiante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendimiento:</strong> Las calderas de condensación modernas tienen un rendimiento cercano al 100% (o incluso ligeramente superior si aprovechan el calor latente).',
        '<strong>Ventajas:</strong> Instalación muy extendida, calor rápido y homogéneo, y un coste por kWh que suele ser muy competitivo.',
        '<strong>Desventajas:</strong> Dependencia de combustibles fósiles, cuotas fijas de gas (término de potencia) y emisiones de CO2 a la atmósfera.',
      ],
    },
    {
      type: 'title',
      text: '2. Aerotermia: La eficiencia extrema (Aire-Agua)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La aerotermia es una tecnología que extrae la energía térmica del aire exterior (incluso a temperaturas bajo cero) y la traslada al interior de la vivienda para calentar agua (suelo radiante, radiadores de baja temperatura o ACS).',
    },
    {
      type: 'list',
      items: [
        '<strong>Eficiencia (COP):</strong> Un sistema de aerotermia suele tener un COP medio de 4. Esto significa que por cada 1 kWh de electricidad que consume, entrega 4 kWh de calor a la casa.',
        '<strong>Ventajas:</strong> Sostenibilidad total si se combina con placas solares, un solo equipo para calefacción, refrigeración y agua caliente, y el menor coste operativo del mercado.',
        '<strong>Desventajas:</strong> Inversión inicial elevada (aunque suele amortizarse en 5-8 años) y necesidad de espacio para la unidad exterior e interior (depósito).',
      ],
    },
    {
      type: 'tip',
      title: 'Consejo de Ahorro',
      html: 'La aerotermia brilla especialmente cuando se combina con suelo radiante, ya que el agua solo necesita calentarse a unos 35°C, a diferencia de los 60-70°C de los radiadores convencionales.',
    },
    {
      type: 'proscons',
      title: 'Aerotermia vs Gas Natural',
      proTitle: '¿Por qué Aerotermia?',
      conTitle: '¿Por qué Gas?',
      items: [
        { pro: 'Eficiencia imbatible (COP 4+)', con: 'Instalación mucho más económica' },
        { pro: 'Independencia de fósiles', con: 'Calor instantáneo de alta potencia' },
        { pro: 'Calefacción y Refrigeración', con: 'Compatibilidad con radiadores viejos' },
        { pro: 'Ideal con placas solares', con: 'Sin necesidad de unidades exteriores' },
      ],
    },
    {
      type: 'title',
      text: '3. Bomba de Calor Aire-Aire (Aire Acondicionado)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Es el sistema que comúnmente conocemos como "split" o aire acondicionado con modo calor. Utiliza el mismo ciclo termodinámico que la aerotermia pero calienta directamente el aire, no el agua. Es una solución muy común en zonas con climas suaves o como apoyo en segundas residencias. Su eficiencia (SCOP) suele situarse entre 3 y 3.5, lo que la sitúa en un punto intermedio muy interesante.',
    },
    {
      type: 'title',
      text: 'Entendiendo la fórmula de cálculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para comparar estos sistemas de forma justa, debemos convertir todos los consumos a una unidad común: el coste por kWh útil entregado. La fórmula que utiliza nuestra herramienta es:',
    },
    {
      type: 'code',
      code: 'Coste Anual = (Demanda Térmica Vivienda / Eficiencia del Sistema) × Precio Energía',
      ariaLabel: 'Fórmula de cálculo de coste anual',
    },
    {
      type: 'paragraph',
      html: 'Donde:',
    },
    {
      type: 'list',
      items: [
        '<strong>Demanda Térmica:</strong> Los kWh de calor que necesita tu casa al año (depende del aislamiento y m2).',
        '<strong>Eficiencia:</strong> 0.95 para Gas, 4.0 para Aerotermia y 3.2 para Aire.',
        '<strong>Precio Energía:</strong> El coste por kWh sumando impuestos y peajes.',
      ],
    },
    {
      type: 'card',
      title: 'Ejemplo Real: Vivienda de 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Imaginemos una casa que necesita 7.000 kWh de calefacción al año:</p><ul><li><strong>Gas (0.08 €/kWh):</strong> (7.000 / 0.95) * 0.08 = 589 €/año</li><li><strong>Aerotermia (0.18 €/kWh):</strong> (7.000 / 4) * 0.18 = 315 €/año (Ahorras un 46%)</li><li><strong>Aire (0.18 €/kWh):</strong> (7.000 / 3.2) * 0.18 = 393 €/año</li></ul>',
    },
    {
      type: 'title',
      text: '¿Cuándo compensa cada sistema?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'No hay una respuesta única, ya que depende de tu ubicación geográfica y el tipo de vivienda:',
    },
    {
      type: 'paragraph',
      html: '<strong>Casas Unifamiliares / Obra Nueva:</strong> La aerotermia es casi obligatoria. La normativa actual (CTE) exige un alto porcentaje de energía renovable, y la aerotermia es la forma más sencilla de cumplirlo y ahorrar desde el primer día.',
    },
    {
      type: 'paragraph',
      html: '<strong>Pisos Pequeños en Zonas Cálidas:</strong> La bomba de calor aire-aire (split) es imbatible por su bajo coste de instalación. Si el invierno es corto, la diferencia de ahorro operativa no justifica la inversión en aerotermia.',
    },
    {
      type: 'paragraph',
      html: '<strong>Reformas de Pisos con Gas:</strong> Si el edificio ya tiene conexión de gas y radiadores antiguos, cambiar a una caldera de condensación es lo más barato inicialmente. Sin embargo, si vas a reformar suelo o ventanas, plantear el salto a la electricidad es una inversión de futuro para independizarte del gas y sus costes fijos.',
    },
    {
      type: 'title',
      text: 'El impacto del aislamiento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ningún sistema de calefacción es eficiente si tu casa tiene fugas. Antes de invertir 10.000 € en un sistema de aerotermia, revisa tus ventanas y el aislamiento de tus paredes. Un buen aislamiento puede reducir tu demanda térmica a la mitad, haciendo que el sistema de calefacción sea mucho más pequeño, barato y eficiente.',
    },
    {
      type: 'title',
      text: 'Mitos sobre la Aerotermia y el Consumo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Existen muchas dudas sobre estos sistemas modernos. Vamos a desmentir algunas:',
    },
    {
      type: 'list',
      items: [
        '<strong>"La aerotermia no funciona con mucho frío":</strong> Falso. Los equipos actuales mantienen buenos rendimientos hasta los -15°C o -20°C.',
        '<strong>"La bomba de calor reseca el ambiente":</strong> Solo si es aire-aire. La aerotermia por suelo radiante funciona igual que la calefacción central pero con agua a menos temperatura.',
        '<strong>"La luz es muy cara y no compensa":</strong> Aunque la luz sea más cara que el gas (kWh a kWh), la eficiencia del 400% compensa esa diferencia con creces.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: '¿Sabías qué?',
      icon: 'mdi:lightbulb-on',
      badge: 'Dato',
      html: '<p>El COP (Coefficient of Performance) varía según la temperatura exterior. Por eso, en climas extremadamente fríos, el rendimiento de la aerotermia baja ligeramente, aunque sigue siendo muy superior a cualquier radiador eléctrico directo o caldera de gas.</p>',
    },
    {
      type: 'title',
      text: 'Conclusión: El futuro es eléctrico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La tendencia en Europa es clara: la <strong>descarbonización del hogar</strong>. El gas natural tiene fecha de caducidad y los impuestos al carbono harán que su precio suba a largo plazo. La combinación de placas solares fotovoltaicas y aerotermia es, a día de hoy, la cuadratura del círculo: energía gratis del sol convertida en confort para tu casa con una eficiencia inigualable.',
    },
    {
      type: 'paragraph',
      html: 'Usa nuestra calculadora para comparar tus facturas actuales con lo que podrías estar pagando. A veces, la mayor "fuga de dinero" no está en una ventana mal cerrada, sino en un sistema de calefacción obsoleto.',
    },
  ],
  ui: {
    titleVivienda: '1. Datos de tu vivienda',
    helperVivienda: 'Configura las características de tu hogar',
    labelM2: 'Superficie Total',
    helperM2: 'Metros cuadrados de tu vivienda.',
    labelAislamiento: 'Nivel de Aislamiento',
    helperAislamiento: '¿Cómo de bien retiene el calor tu casa?',
    optExcelent: 'Excelente (Obra nueva / Passivhaus)',
    optMedium: 'Medio (Doble cristal / Aislamiento normal)',
    optPoor: 'Pobre (Antigua / Sin aislamiento en paredes)',
    titleCoste: '2. Coste de la energía',
    descCoste: 'Busca en tu última factura el "Precio Término de Energía" o "Coste kWh".',
    labelGasPrice: 'Coste del Gas',
    helperGasPrice: 'Precio por cada kWh de gas consumido.',
    labelElecPrice: 'Coste de la Electricidad',
    helperElecPrice: 'Precio por cada kWh de luz consumido.',
    titleComparison: '3. Comparativa de Consumo Anual',
    descComparison: 'Estimación basada en el rendimiento técnico de cada equipo.',
    systemGas: 'Caldera de Gas',
    systemAero: 'Aerotermia',
    systemAir: 'Bomba de Calor (Split)',
    labelAnnualCost: 'Gasto en Calefacción',
    labelEfficiency: 'Efficienza',
    labelSource: 'Fuente',
    labelEnergy: 'Energía',
    labelInstallation: 'Instalación',
    valGasSource: 'Gas Natural',
    valAeroEnergy: 'Renovable + Luz',
    valAirInstall: 'Aire-Aire',
    winnerBadge: 'Más Eficiente',
    unitCurrency: '€',
  },
};
