import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tonelaje-ac';
const title = 'Calculadora de Tonelaje y Capacidad de Refrigeración';
const description =
  'Calcula el tamaño exacto de aire acondicionado que necesita tu habitación en BTU, frigorías y toneladas. Introduce las dimensiones de la habitación, la altura del techo, los ocupantes, las fuentes de calor y la exposición solar para obtener una recomendación de refrigeración precisa.';

const faqData = [
  {
    question: '¿Cuántos BTU necesito por metro cuadrado?',
    answer:
      'La línea base estándar es de 600 BTU por metro cuadrado para un techo estándar de 2,5 metros en un clima templado. Esto aumenta con la altura del techo, la exposición solar, el número de ocupantes y los electrodomésticos que generan calor.',
  },
  {
    question: '¿Qué es una frigoría y cómo se compara con un BTU?',
    answer:
      'Una frigoría es una unidad de potencia de refrigeración antigua común en España y Latinoamérica. Una frigoría equivale aproximadamente a 3,968 BTU por hora. Los aires acondicionados modernos suelen listar ambas unidades, pero el BTU es el estándar global.',
  },
  {
    question: '¿Cómo convierto BTU a toneladas de refrigeración?',
    answer:
      'Una tonelada de refrigeración equivale a 12.000 BTU por hora. Divide tu requerimiento total de BTU por 12.000 para obtener el tonelaje. Por ejemplo, 24.000 BTU equivalen a 2 toneladas.',
  },
  {
    question: '¿La altura del techo afecta al dimensionado del AC?',
    answer:
      'Sí. Por cada metro por encima de 2,7 metros, aumenta tu requerimiento de refrigeración aproximadamente un 8%. Los techos altos contienen significativamente más volumen de aire que debe ser enfriado.',
  },
];

const howToData = [
  { name: 'Mide tu habitación', text: 'Mide el largo y el ancho en metros y multiplica para obtener el área en metros cuadrados.' },
  { name: 'Cuenta ocupantes y dispositivos', text: 'Añade el número de personas que usan regularmente la habitación y cuenta las fuentes de calor como ordenadores, televisores y hornos.' },
  { name: 'Selecciona la exposición solar', text: 'Elige ligera, media o fuerte según la cantidad de sol directo que recibe la habitación durante la parte más calurosa del día.' },
  { name: 'Lee la recomendación', text: 'La calculadora muestra BTU, frigorías y toneladas para que puedas comprar la unidad adecuada en cualquier mercado.' },
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

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug,
  title,
  description,
  faq: faqData,
  bibliography,
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: '¿Qué tamaño de aire acondicionado necesito?', level: 2 },
    { type: 'paragraph', html: 'El tamaño correcto del aire acondicionado depende del área de la habitación, la altura del techo, cuántas personas usan el espacio, la exposición solar y las fuentes de calor como ordenadores o electrodomésticos de cocina. Usa esta calculadora para obtener el BTU, frigoría y tonelaje exactos que necesita tu habitación. A continuación tienes una referencia rápida para tamaños de habitación comunes con techos estándar de 2,5 m y exposición solar ligera.' },
    { type: 'table', headers: ['Tamaño de habitación', 'BTU recomendado', 'Tonelaje', 'Uso típico'], rows: [['10 m² (dormitorio pequeño)', '6.000 – 7.000 BTU', '0,5 – 0,75 toneladas', 'Habitación de invitados, despacho'], ['15 m² (dormitorio)', '9.000 – 10.000 BTU', '0,75 – 1 tonelada', 'Dormitorio principal'], ['20 m² (salón)', '12.000 – 14.000 BTU', '1 – 1,25 toneladas', 'Salón pequeño'], ['30 m² (planta abierta)', '18.000 – 21.000 BTU', '1,5 – 1,75 toneladas', 'Estudio o cocina abierta'], ['40 m² (salón grande)', '24.000 – 28.000 BTU', '2 – 2,5 toneladas', 'Salón grande + comedor']] },
    { type: 'title', text: 'Por qué equivocarse de tamaño te cuesta dinero', level: 2 },
    { type: 'paragraph', html: 'Un aire acondicionado pequeño funciona sin parar, nunca alcanza la temperatura deseada y quema el compresor años antes de tiempo. Tu factura de electricidad se dispara y sigues sin estar cómodo. Una unidad grande sopla aire frío en ráfagas cortas, se apaga antes de deshumedecer y deja la habitación fría y húmeda. Ambos errores desperdician dinero. Acertar el tonelaje es la decisión más importante al comprar un AC.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU por m² base', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU por tonelada', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU por frigoría', icon: 'mdi:calculator' }], columns: 3 },
    { type: 'title', text: 'Cómo funciona la calculadora', level: 3 },
    { type: 'paragraph', html: 'Esta herramienta parte de una base de 600 BTU por metro cuadrado para una habitación con techos de 2,5 metros. Luego añade carga por cada metro extra de altura del techo, cada persona en la habitación, cada dispositivo que genera calor, la cantidad de sol directo y el tipo de habitación. El resultado es tu requerimiento total de refrigeración en BTU por hora, más el equivalente en frigorías y toneladas para que puedas comprar en cualquier parte del mundo.' },
    { type: 'title', text: 'Factores reales que aumentan tu carga de refrigeración', level: 3 },
    { type: 'paragraph', html: 'Un dormitorio de 20 metros cuadrados y una cocina de 20 metros cuadrados necesitan unidades de AC completamente distintas. Los hornos, los PC gaming, las ventanas grandes orientadas al sur y los techos altos añaden calor que una simple tabla de área ignora. Aquí tienes exactamente cómo cambia tu cálculo con cada factor.' },
    { type: 'table', headers: ['Factor', 'Carga extra', 'Solución práctica'], rows: [['Altura del techo superior a 2,7 m', '+8% por metro extra', 'Compra una unidad ligeramente mayor o añade un ventilador de techo para circular el aire.'], ['Sol directo por la tarde', '+15% a +35%', 'Usa lámina reflectante o persianas opacas; aumenta el tamaño del AC.'], ['Cada persona extra', '+500 BTU por persona', 'Cuenta las personas que están normalmente en la habitación, no los invitados de fiesta.'], ['Cocina con horno o cocina', '+25% multiplicador de habitación', 'Si es posible, instala una unidad dedicada para la cocina o aumenta una categoría.'], ['PC gaming o servidor', '+400 BTU por dispositivo', 'Posiciona la salida del AC para que sople sobre la fuente de calor.']] },
    { type: 'title', text: 'BTU, Frigorías y Toneladas: Guía rápida', level: 3 },
    { type: 'paragraph', html: '<strong>BTU (British Thermal Unit)</strong> es el estándar global. Un BTU es la energía necesaria para enfriar una libra de agua un grado Fahrenheit. <strong>Frigorías</strong> siguen siendo comunes en España y Latinoamérica; una frigoría equivale a unos 3,968 BTU por hora. <strong>Toneladas</strong> se usan en Norteamérica; una tonelada de refrigeración equivale a 12.000 BTU por hora. Esta calculadora muestra las tres para que puedas comparar unidades de cualquier fabricante o tienda.' },
    { type: 'tip', title: 'Compra al 80% de capacidad para mejores resultados', html: '<p>Elige un AC con una capacidad de aproximadamente el 80% de tu carga máxima calculada, no el 100%. Una unidad funcionando al 80% de su capacidad cicla menos, deshumedeces mejor, consume menos electricidad y dura varios años más que una constantemente al máximo.</p>' },
    { type: 'summary', title: 'Lista de verificación: compra el AC adecuado', items: ['Mide el largo y ancho de la habitación y multiplica para obtener el área en metros cuadrados.', 'Comprueba la altura del techo; añade aproximadamente un 8% de potencia de refrigeración por cada metro por encima de 2,7 m.', 'Cuenta los ocupantes habituales y añade 500 BTU por persona más allá de las dos primeras.', 'Cuenta las fuentes de calor como PCs, televisiones y hornos y añade 400 BTU por dispositivo.', 'Comprueba la exposición solar; las habitaciones orientadas al sur con ventanas grandes necesitan un 15% a 35% más.', 'Usa esta calculadora para obtener tu total en BTU, frigorías y toneladas.', 'Compra una unidad con una capacidad de aproximadamente el 80% de tu carga calculada.'] },
  ],
  ui: {
    labelRoomSize: 'Área de la habitación',
    labelCeilingHeight: 'Altura del techo',
    labelPeople: 'Personas',
    labelHeatSources: 'Fuentes de calor',
    labelSunExposure: 'Exposición solar',
    labelRoomType: 'Tipo de habitación',
    labelCalculate: 'Calcular',
    labelResult: 'Resultado',
    labelBtus: 'BTU/h',
    labelFrigorias: 'Frigorías',
    labelTons: 'Toneladas',
    labelRequired: 'Requerido',
    labelRecommended: 'Recomendado',
    labelUnitBtu: 'BTU/h',
    labelUnitFrigorias: 'Frigorías',
    labelUnitTons: 'Toneladas',
    labelMetric: 'Métrico',
    labelImperial: 'Imperial',
    labelRoomCozy: 'Confortable',
    labelRoomWarm: 'Cálido',
    labelRoomHot: 'Caluroso',
    bdBaseCooling: 'Refrigeración base',
    bdCeilingHeight: 'Altura del techo',
    bdPeople: 'Personas',
    bdHeatSources: 'Fuentes de calor',
    bdSunRoom: 'Sol y tipo de habitación',
    sunLight: 'Ligera',
    sunMedium: 'Media',
    sunHeavy: 'Fuerte',
    roomBedroom: 'Dormitorio',
    roomLiving: 'Salón',
    roomKitchen: 'Cocina',
    roomOffice: 'Oficina',
    roomServer: 'Sala de servidores',
    errorRequired: 'Por favor, rellena todos los campos',
  },
};
