import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'es',
  slug: 'calculadora-tamano-trastero',
  title: 'Calculadora de tamaño de trastero',
  description: 'Estima el tamaño de trastero que necesitas a partir de tus cajas, muebles y espacio de acceso.',
  labels: {
    inventory: 'Tu inventario', boxes: 'Cajas', furniture: 'Objetos voluminosos', smallBoxes: 'Cajas pequeñas', mediumBoxes: 'Cajas medianas', largeBoxes: 'Cajas grandes', sofa: 'Sofá', bed: 'Cama', wardrobe: 'Armario', desk: 'Escritorio', chair: 'Sillas', accessLane: 'Zona de acceso', accessHint: 'Más espacio de acceso ocupa superficie, pero mantiene a mano lo que necesitas.', quickScenarios: 'Cargar un inventario inicial', reset: 'Restablecer',
  },
  presetLabels: ['Mudanza de estudio', 'Un dormitorio', 'Oficina pequeña'],
  accessLabels: ['Ajustado', 'Equilibrado', 'Acceso frecuente'],
  result: {
    title: 'El plano de carga', minimum: 'Tamaño mínimo', comfortable: 'Tamaño cómodo', emptyStatus: 'Añade tus objetos', readyStatus: 'Plan equilibrado', tightStatus: 'El mínimo queda justo', emptyMessage: 'El plano dibujará tus zonas de almacenamiento cuando añadas objetos.', readyMessage: 'El tamaño mínimo deja espacio para la zona de acceso elegida.', tightMessage: 'El tamaño mínimo está casi lleno. El tamaño cómodo será más fácil de usar.', unit: 'm²', access: 'acceso', boxesZone: 'Cajas', furnitureZone: 'Voluminosos', laneZone: 'Acceso', floorPlanLabel: 'Plano proporcional del trastero con cajas, objetos voluminosos y zona de acceso', packedLabel: 'embalado', areaLabel: 'Superficie de planificación', volumeLabel: 'volumen', emptyPlan: 'Añade cajas o muebles para dibujar el plano',
  },
  seo: [
    { type: 'title', level: 2, text: 'Elige el trastero según lo que tienes' },
    { type: 'paragraph', html: 'Una calculadora de tamaño de trastero resulta más útil cuando parte de tu inventario real. Introduce cajas y muebles voluminosos y decide si necesitas un plano compacto o espacio para llegar al fondo sin descargar toda la unidad.' },
    { type: 'title', level: 2, text: 'Qué mide esta estimación' },
    { type: 'list', items: ['Volumen embalado de cajas y muebles', 'Superficie ocupada después de apilar las cajas', 'Zona de acceso según la frecuencia con la que recuperarás objetos', 'Tamaños mínimo y cómodo redondeados a medidas habituales'] },
    { type: 'title', level: 2, text: 'Cómo interpretar el mínimo y el tamaño cómodo' },
    { type: 'paragraph', html: 'El tamaño mínimo es la primera medida estándar que contiene la superficie de planificación. Es una comprobación de capacidad, no una promesa de que cada mueble quepa en cualquier habitación. El tamaño cómodo añade margen para que un trastero de uso frecuente no se convierta en una pared de cajas.' },
    { type: 'title', level: 2, text: 'Qué revisar antes de contratar' },
    { type: 'paragraph', html: 'Usa el resultado para crear una lista corta y compara después las medidas interiores, el ancho de la puerta, la altura, las columnas, las escaleras y el acceso de carga. Los metros cúbicos pueden engañar si la altura no es aprovechable.' },
    { type: 'list', items: ['Cuenta las cajas por su tamaño exterior aproximado.', 'Añade sofás y armarios aunque pienses desmontarlos.', 'Elige acceso frecuente para ropa de temporada, stock o material de trabajo.', 'Confirma la superficie interior útil y mide la puerta antes de llevar muebles grandes.'] },
    { type: 'tip', title: 'Límite de planificación', html: 'Es una estimación transparente basada en medidas representativas y supuestos de apilado. No inspecciona el trastero real, no certifica cargas ni garantiza que un mueble irregular pase por la puerta.' },
  ],
  faq: [
    { question: '¿Elijo el tamaño mínimo o el cómodo?', answer: 'Elige el mínimo si vas a embalar de forma compacta y accederás pocas veces. El cómodo es preferible si recuperarás objetos, puede aumentar el inventario o hay muebles difíciles de apilar.' },
    { question: '¿Por qué usa metros cuadrados?', answer: 'Los proveedores suelen publicar la superficie del suelo, que indica si puedes colocar y alcanzar tus cosas. También muestra metros cúbicos para comparar anuncios basados en volumen.' },
    { question: '¿Sirve para un garaje o contenedor?', answer: 'Sí, como punto de partida. Comprueba las medidas interiores, la apertura, el techo, la ventilación y las restricciones de peso o apilado del espacio concreto.' },
    { question: '¿Conoce las medidas reales de mis muebles?', answer: 'No. Utiliza superficies y volúmenes representativos. Mide los objetos frágiles, muy profundos o poco habituales y deja margen si la ruta de acceso es incierta.' },
  ],
  howTo: [
    { name: 'Carga un inventario inicial', text: 'Elige un escenario parecido a tu mudanza o vaciado y edita sus cantidades.' },
    { name: 'Cuenta cajas y voluminosos', text: 'Introduce cajas pequeñas, medianas y grandes, y añade sofás, camas, armarios, escritorios y sillas.' },
    { name: 'Define la zona de acceso', text: 'Escoge Ajustado, Equilibrado o Acceso frecuente según la frecuencia con la que necesitarás entrar.' },
    { name: 'Compara las recomendaciones', text: 'Usa el mínimo como suelo de capacidad y el cómodo como opción más manejable para el acceso habitual.' },
  ],
};

export const content = buildLocalizedContent(copy);
