import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-de-alcance-wifi';
const title = 'Simulador de Alcance y Obstáculos WiFi';
const description =
  'Dibuja el plano de tu casa, coloca paredes, puertas, muebles y electrodomésticos, y arrastra tu router y dispositivo para encontrar la mejor ruta de señal. Ve la pérdida de cobertura en vivo, el veredicto de streaming y consejos de colocación para eliminar zonas muertas sin comprar hardware nuevo.';

const faqData = [
  {
    question: '¿Por qué mi señal WiFi se pierde en ciertas habitaciones?',
    answer:
      'El WiFi usa ondas de radio que son absorbidas, reflejadas o bloqueadas por los materiales físicos. Los ladrillos macizos, el hormigón y el metal son los peores, ya que reducen la intensidad de la señal de forma significativa. El agua y el vidrio también pueden reflejar o absorber parte de la señal.',
  },
  {
    question: '¿Cuánto afecta una pared de hormigón o piedra al WiFi?',
    answer:
      'Una pared de hormigón estándar puede atenuar una señal de 2,4 GHz entre 10 y 20 decibelios. Los muros gruesos de piedra de 70 a 80 centímetros pueden alcanzar los 22 decibelios o más. Esto se traduce en una pérdida de alcance de entre el 50 y el 90 por ciento, según el grosor y la densidad. A 5 GHz la pérdida es aún mayor porque las frecuencias más altas son absorbidas más rápido por los materiales densos.',
  },
  {
    question: '¿Dónde debo colocar el router para obtener la mejor cobertura?',
    answer:
      'Céntrico, elevado y despejado. Coloca el router en el centro de tu casa, al menos a un metro de paredes gruesas y objetos metálicos, y a la altura del pecho para una dispersión horizontal. Evita las esquinas, los armarios y las posiciones bajas detrás de los muebles.',
  },
  {
    question: '¿Pueden las puertas de cristal bloquear el WiFi?',
    answer:
      'El cristal transparente tiene un impacto mínimo, pero las ventanas con doble acristalamiento o con revestimiento metálico pueden reflejar las señales. El simulador trata el cristal estándar como un obstáculo ligero con una pérdida aproximada de 2 a 3 decibelios.',
  },
];

const howToData = [
  {
    name: 'Identifica la ruta de la señal',
    text: 'Imagina una línea recta entre tu router y el dispositivo que te interesa. Cada objeto que cruza esa línea es importante.',
  },
  {
    name: 'Añade cada obstáculo',
    text: 'Haz clic en los botones de material del simulador para añadir cada pared, puerta, electrodoméstico o mueble que cruce la ruta.',
  },
  {
    name: 'Lee el veredicto',
    text: 'Observa cómo el anillo de señal, la animación de onda y el panel de streaming se actualizan al instante al añadir o quitar objetos.',
  },
  {
    name: 'Aplica el consejo contextual',
    text: 'Sigue las tarjetas de colocación que aparecen según la combinación exacta de obstáculos para mejorar la cobertura sin comprar hardware nuevo.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: 'Por qué tu WiFi se muere en la habitación de al lado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Tu router emite ondas de radio en todas direcciones. Esas ondas viajan por el aire con facilidad, pero cada objeto físico que encuentran pasa factura. Algunos materiales dejan pasar la mayor parte de la señal. Otros la devoran por completo. Entender qué objetos de tu hogar están matando silenciosamente tu conexión es el primer paso para arreglar las zonas muertas sin gastar un solo euro en hardware nuevo.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Pérdida en pladur', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Muro de piedra grueso', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Puerta metálica', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'El coste real de cada objeto en tu hogar',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'No todos los obstáculos son iguales. Un panel de pladur puede restarte un pequeño porcentaje de señal, pero un pilar de hormigón o una puerta metálica pueden reducir tu alcance efectivo a la mitad. Esto es lo que realmente tienes en contra cuando colocas el router detrás de la tele, al lado de la nevera o en el suelo debajo de una estantería metálica.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Obstáculos ligeros',
          description: 'Estos objetos causan una pérdida mínima de señal y suelen ser seguros cerca de la ruta de la señal. No deberías preocuparte por una ventana o una puerta de cristal.',
          icon: 'mdi:window-open-variant',
          points: [
            'Puerta de cristal: 2 a 3 dB de pérdida',
            'Ventana estándar: 2 dB de pérdida',
            'Tabique de pladur: 3 dB de pérdida',
            'Puerta interior de madera: 4 dB de pérdida',
          ],
        },
        {
          title: 'Obstáculos moderados',
          description: 'Estos objetos crean una merma notable en tu cobertura. Con uno o dos estás bien, pero si apilas tres o más en la misma ruta de señal, empezarás a notar cortes y retrasos.',
          icon: 'mdi:wardrobe',
          points: [
            'Armario de madera: 5 dB de pérdida',
            'Espejo grande: 6 dB de pérdida',
            'Lavadora: 6 dB de pérdida',
            'Microondas: 5 dB de pérdida',
          ],
        },
        {
          title: 'Obstáculos graves',
          description: 'Estos son los asesinos silenciosos de las redes domésticas. Una sola pared de hormigón o puerta metálica puede convertir una señal fuerte en una débil, y apilarlas crea zonas muertas garantizadas.',
          icon: 'mdi:wall',
          points: [
            'Pared de ladrillo macizo: 8 dB de pérdida',
            'Suelo o techo: 10 dB de pérdida',
            'Nevera: 10 dB de pérdida',
            'Pecera: 12 dB de pérdida',
          ],
        },
        {
          title: 'Obstáculos extremos',
          description: 'Estos materiales absorben o reflejan casi toda la energía de radio. Si tu ruta de señal cruza uno de ellos, necesitas mover el router o el dispositivo. No hay solución alternativa.',
          icon: 'mdi:shield',
          points: [
            'Muro de piedra grueso (70-80 cm): 22 dB de pérdida',
            'Pared de hormigón: 15 dB de pérdida',
            'Armario metálico: 12 dB de pérdida',
            'Puerta o verja metálica: 18 dB de pérdida',
            'Hueco de ascensor: 20+ dB de pérdida',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Cómo se comportan las distintas frecuencias a través de las paredes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de los routers modernos emiten en dos bandas: 2,4 GHz y 5 GHz. La frecuencia más baja llega más lejos y atraviesa las paredes con más facilidad, pero es más lenta y está más congestionada. La frecuencia más alta es muchísimo más rápida, pero cada obstáculo en su camino la absorbe.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penetración de 2,4 GHz',
          description: 'Las frecuencias más bajas llegan más lejos y penetran mejor las paredes. Ideales para larga distancia, pero saturadas por las redes vecinas.',
          icon: 'mdi:signal',
          points: [
            'Mejor a través de ladrillo macizo y hormigón',
            'Más interferencias de routers vecinos',
            'Velocidades máximas más lentas, unos 150 Mbps reales',
            'Mejor para domótica e IoT',
          ],
        },
        {
          title: 'Penetración de 5 GHz',
          description: 'Las frecuencias más altas ofrecen mayor velocidad, pero los materiales de construcción las absorben mucho más rápido. Ideales para espacios abiertos y dispositivos cercanos.',
          icon: 'mdi:signal-5g',
          points: [
            'Mal a través de hormigón y metal',
            'Menos interferencias, canales más limpios',
            'Velocidades de hasta Gigabit en la misma habitación',
            'Peor cobertura, mejor calidad donde llega',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Asesinos ocultos: objetos que nunca sospecharías',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La mayoría culpa a las paredes, pero algunos de los peores enemigos del WiFi son objetos cotidianos. Una pecera es principalmente agua, y el agua absorbe las ondas de radio de 2,4 GHz casi a la perfección. Un espejo grande tiene una fina capa metálica trasera que refleja la señal lejos de tu dispositivo. Un microondas emite radiación a 2,4 GHz, exactamente la misma frecuencia que tu router, causando interferencias cada vez que calientas algo.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La trampa de la pecera',
      icon: 'mdi:fish',
      badge: 'Bloqueo sorpresa',
      html: '<p>Un acuario grande puede atenuar tu señal WiFi hasta 12 decibelios. Es lo mismo que un muro de hormigón grueso. Si tu router está a un lado de la pecera y tu escritorio al otro, el agua está haciendo más daño que la pared que hay detrás.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'El efecto espejo',
      icon: 'mdi:mirror',
      badge: 'Peligro de reflexión',
      html: '<p>Los espejos grandes tienen una fina capa de metal en la parte posterior diseñada para reflejar la luz. Esa misma capa metálica también refleja las ondas de radio. Un espejo orientado hacia tu router puede desviar la señal lejos de donde la necesitas, o crear interferencias multitrayecto que distorsionan los paquetes de datos.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La interferencia del microondas',
      icon: 'mdi:microwave',
      badge: 'Bloqueador activo',
      html: '<p>Los microondas funcionan a 2,45 GHz, solapándose directamente con la banda WiFi de 2,4 GHz. Cuando está en funcionamiento, un microondas puede anular la señal de 2,4 GHz en un radio de 3 a 5 metros. Si tu router solo admite 2,4 GHz y tu cocina está cerca, cambia a un router de doble banda y usa 5 GHz para las tareas críticas.</p>',
    },
    {
      type: 'title',
      text: 'Habitación por habitación: dónde colocar el router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'La ubicación ideal del router no es la más cómoda. Es la que ofrece la línea de visión más despejada hacia las habitaciones donde realmente usas internet. Así debes pensar cada estancia.',
    },
    {
      type: 'table',
      headers: ['Habitación', 'Riesgo', 'Por qué es difícil', 'Solución'],
      rows: [
        ['Cocina', 'Alto', 'Nevera, microondas, armarios metálicos, tuberías', 'Coloca el router fuera de la cocina, nunca dentro.'],
        ['Baño', 'Alto', 'Espejos, tuberías, azulejos con malla metálica', 'Evita colocar el router al otro lado de una pared del baño.'],
        ['Dormitorio', 'Medio', 'Armarios, paredes gruesas, camas metálicas', 'Eleva el router, despeja el camino por encima de los muebles.'],
        ['Salón', 'Bajo', 'Suele ser abierto, pero cuidado con teles y consolas', 'Mantén el router visible, no escondido detrás de la tele.'],
        ['Garaje', 'Extremo', 'Puertas metálicas, hormigón, coches', 'No esperes que un router normal llegue al garaje.'],
        ['Jardín / Terraza', 'Alto', 'Paredes exteriores, cristal, distancia', 'Usa un punto de acceso exterior o un nodo mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'La regla del metro y otros trucos de colocación',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pequeños movimientos marcan grandes diferencias. No necesitas recablear tu casa. Solo necesitas entender cómo se mueven las ondas de radio y darles un camino despejado.',
    },
    {
      type: 'tip',
      title: 'La regla del metro',
      html: '<p>Alejar el router solo un metro de una barrera de hormigón o metal puede recuperar hasta un 40 por ciento de la intensidad de señal perdida.</p>',
    },
    {
      type: 'tip',
      title: 'Elevar para cubrir',
      html: '<p>Eleva el router a la altura del pecho en una estantería. Las señales se irradian horizontalmente desde la antena. Colocarlo en el suelo desperdicia la mitad de tu cobertura en el suelo.</p>',
    },
    {
      type: 'tip',
      title: 'Mantenlo visible',
      html: '<p>Nunca escondas el router dentro de un armario, un mueble o detrás de la tele. El recinto actúa como una jaula de Faraday, atrapando la señal antes de que llegue a tu habitación.</p>',
    },
    {
      type: 'tip',
      title: 'Orientación de antenas',
      html: '<p>Si tu router tiene antenas externas, coloca una vertical y otra horizontal. Esto mejora la cobertura para dispositivos a distintas alturas.</p>',
    },
    {
      type: 'tip',
      title: 'Evita interferencias',
      html: '<p>Mantén el router al menos a 1,5 metros de microondas, teléfonos inalámbricos y monitores de bebé. Estos dispositivos comparten el espectro de 2,4 GHz y causan interferencias activas.</p>',
    },
    {
      type: 'tip',
      title: 'Ventaja de la planta intermedia',
      html: '<p>Si vives en una casa de varias plantas, coloca el router en la planta intermedia. Las señales se propagan mal hacia arriba y hacia abajo a través de los forjados de hormigón.</p>',
    },
    {
      type: 'title',
      text: 'Veredictos de streaming: lo que realmente significa tu señal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los porcentajes son abstractos. Lo que realmente te importa es si puedes ver Netflix, ganar una partida o terminar una videollamada sin que se congele. Esto es lo que significa cada nivel de señal en el mundo real.',
    },
    {
      type: 'table',
      headers: ['Señal', 'Streaming 4K', 'Juegos online', 'Videollamadas', 'Navegación'],
      rows: [
        ['80% a 100%', 'Perfecto, carga instantánea', 'Baja latencia, juego competitivo', 'Cristalino, sin cortes', 'Instantáneo, sin demora'],
        ['60% a 79%', 'Bien, algún buffer ocasional', 'Jugable, pequeños picos de lag', 'Estable, rara vez pixelado', 'Rápido, sin problemas'],
        ['40% a 59%', 'Buffers cada pocos minutos', 'Avisos de lag, rubber banding', 'Pixelado, algunos cortes', 'Utilizable, carga más lenta'],
        ['20% a 39%', 'Imposible, se congela constante', 'Desconexiones, injugable', 'Cortes frecuentes, inutilizable', 'Muy lento, tiempos de espera'],
        ['0% a 19%', 'No arranca', 'No se puede conectar', 'Sin conexión', 'Inutilizable'],
      ],
    },
    {
      type: 'title',
      text: 'Soluciones rápidas antes de comprar nada',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de optimización sin coste',
      items: [
        'Coloca el router en el centro de tu casa, no en una esquina.',
        'Elévalo a la altura del pecho en una estantería o mueble alto.',
        'Sácalo de armarios, muebles y de detrás de la tele.',
        'Orienta una antena vertical y otra horizontal si es posible.',
        'Usa 5 GHz para dispositivos cercanos y 2,4 GHz para los lejanos.',
        'Cambia el canal WiFi a uno menos saturado usando una app escáner.',
        'Actualiza el firmware del router para corregir fallos de señal.',
        'Reinicia el router una vez al mes para limpiar fugas de memoria.',
      ],
    },
    {
      type: 'title',
      text: 'Cuándo actualizar tu hardware',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A veces gana el entorno. Si has probado todos los trucos de colocación y sigues teniendo zonas muertas, ha llegado el momento de ampliar la red en lugar de luchar contra la física.',
    },
    {
      type: 'proscons',
      title: 'Repetidor WiFi vs. Sistema Mesh',
      items: [
        { pro: 'Los repetidores son baratos y fáciles de instalar.', con: 'Los repetidores crean un segundo nombre de red y reducen la velocidad a la mitad.' },
        { pro: 'Los repetidores funcionan para una sola zona muerta.', con: 'Los repetidores necesitan una señal fuerte existente para amplificarla.' },
        { pro: 'Los sistemas mesh crean una red única y sin interrupciones.', con: 'Los sistemas mesh son más caros de entrada.' },
        { pro: 'El mesh cubre varias plantas y casas grandes.', con: 'El mesh necesita un nodo principal cerca del módem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Cuándo usar mesh',
      html: '<p>Para casas de más de 120 metros cuadrados o con gruesos muros de hormigón, un sistema mesh con al menos dos nodos superará a cualquier router individual, por caro que sea.</p>',
    },
    {
      type: 'title',
      text: 'Entender los decibelios en lenguaje llano',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los decibelios son logarítmicos, lo que significa que no se comportan como los números normales. Cada 3 dB de pérdida reduce tu potencia de señal a la mitad. 6 dB de pérdida significan que solo queda una cuarta parte de la potencia original. 10 dB de pérdida significan que solo sobrevive una décima parte. Por eso un muro de hormigón de 15 dB es devastador. No solo debilita la señal: la aniquila.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Atenuación', definition: 'La pérdida gradual de intensidad de la señal al atravesar un material. Cuanto más alto es el número, más señal se pierde.' },
        { term: 'dBm', definition: 'Unidad de potencia para medir la intensidad de la señal WiFi. 0 dBm equivale a un milivatio. Los valores negativos son normales: -30 es excelente y -80 es apenas utilizable.' },
        { term: 'Zona muerta', definition: 'Un área donde la señal WiFi es demasiado débil para establecer o mantener una conexión fiable.' },
        { term: 'Red mesh', definition: 'Un sistema de múltiples nodos de router que trabajan juntos para cubrir una gran superficie con una única red WiFi sin interrupciones.' },
        { term: 'Interferencia multitrayecto', definition: 'Cuando las ondas de radio rebotan en paredes y objetos, creando múltiples copias retardadas de la misma señal que confunden al receptor.' },
        { term: 'SSID', definition: 'El nombre de tu red WiFi. Los repetidores suelen crear un segundo SSID, mientras que los sistemas mesh mantienen un solo nombre en todos los nodos.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La regla de oro de la colocación del router',
      icon: 'mdi:map-marker-radius',
      badge: 'Consejo clave',
      html: '<p>Si tu router está actualmente en una esquina, dentro de un armario o en el suelo, estás desperdiciando entre el 50 y el 70 por ciento de su alcance potencial antes de que la señal salga siquiera de la habitación. La mejora más rápida que puedes hacer es moverlo a un lugar abierto, céntrico y elevado. Ese único cambio suele solucionar más problemas que comprar equipos nuevos.</p>',
    },
    {
      type: 'summary',
      title: 'Cómo prevenir zonas muertas de WiFi',
      items: [
        'Coloca el router en el centro, elevado y al aire libre.',
        'Minimiza el número de paredes entre el router y el dispositivo.',
        'Evita cocinas, baños y garajes como ubicación del router.',
        'Usa 5 GHz para velocidad en la misma habitación, 2,4 GHz para distancia.',
        'Plantea un mesh para casas grandes o paredes exteriores gruesas.',
        'Reinicia mensualmente y actualiza el firmware para mantener el máximo rendimiento.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Objetos del hogar que bloquean el WiFi',
    labelAddObstacle: 'Haz clic para añadir a la ruta de señal',
    labelRemove: 'Quitar',
    labelSignalStrength: 'Señal',
    labelEffectiveRange: 'Alcance efectivo',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Veredicto de streaming',
    verdictPerfect: 'Perfecto',
    verdictGood: 'Bueno',
    verdictFair: 'Aceptable',
    verdictPoor: 'Malo',
    verdictDead: 'Zona muerta',
    tipTitle: 'Consejo de colocación',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Juegos online',
    labelVideoCalls: 'Videollamadas',
    labelBasicBrowsing: 'Navegación básica',
    statusPerfect: 'Perfecto',
    statusGood: 'Bueno',
    statusFair: 'Aceptable',
    statusPoor: 'Malo',
    statusImpossible: 'Imposible',
    statusLowLatency: 'Latencia baja',
    statusLagWarning: 'Aviso de lag',
    statusDisconnect: 'Desconexión',
    statusStable: 'Estable',
    statusPixelated: 'Pixelado',
    statusDropped: 'Cortado',
    statusPass: 'Correcto',
    statusUnusable: 'Inutilizable',
    tipMoveRouter: 'Alejar el router solo 1 metro de esa barrera sólida podría mejorar la señal hasta un 40%.',
    tipElevateRouter: 'Eleva el router a la altura del pecho. Las señales se propagan horizontalmente y el suelo absorbe más de lo que crees.',
    tipReduceObstacles: 'Cada pared adicional reduce la señal a la mitad. Intenta reducir el número de obstáculos entre el router y el dispositivo.',

    tipFishTank: 'Un acuario bloquea el WiFi como una pared de hormigón. Aleja el router o el dispositivo de él.',
    tipMicrowave: 'Los microondas interfieren la banda de 2,4 GHz al funcionar. Usa 5 GHz o aleja el router de la cocina.',
    labelMove: 'Mover',
    labelWalls: 'Paredes',
    labelDrywall: 'Pladur',
    labelBrick: 'Ladrillo',
    labelConcrete: 'Hormigón',
    labelStone: 'Piedra',
    labelObjects: 'Objetos',
    labelWood: 'Madera',
    labelMetal: 'Metal',
    labelWindow: 'Ventana',
    labelFridge: 'Nevera',
    labelFish: 'Pez',
    labelMicro: 'Micro',
    labelMirror: 'Espejo',
    labelFurn: 'Mueble',
    labelActions: 'Acciones',
    labelUndo: 'Deshacer',
    labelAddDevice: '+ Dispositivo',
    labelClearWalls: 'Limpiar paredes',
    labelClearObjects: 'Limpiar objetos',
    labelClearAll: 'Limpiar todo',
    labelZoomIn: 'Acercar',
    labelZoomOut: 'Alejar',
    labelRouter: 'Router',
    labelAverageSignal: 'Señal media',
    labelScaleMeters: '5 m',
    hintText: 'Arrastra el router o dispositivos para moverlos. Haz doble clic en paredes u objetos para eliminarlos. Ctrl+Z para deshacer.',
    labelMaxDevices: 'Máx. 4 dispositivos',
    labelDevicePrefix: 'Dispositivo',
    labelPerDevice: 'Por dispositivo',
    labelDb: 'dB',
  },
};
