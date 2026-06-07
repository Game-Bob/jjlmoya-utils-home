import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomia-del-escritorio';
const title = 'Ergonomía del Escritorio y Alineación del Espacio de Trabajo';
const description =
  'Introduce tu altura y ve instantáneamente cómo ajustar tu silla, escritorio y monitor para eliminar el dolor de espalda y cuello en tu oficina en casa.';

const faqData = [
  {
    question: '¿Por qué importa la altura del escritorio?',
    answer:
      'Un escritorio demasiado alto obliga a levantar los hombros, causando tensión en el cuello y la parte superior de la espalda. Un escritorio demasiado bajo hace que te encorves hacia adelante, comprimiendo los discos lumbares. La altura correcta mantiene los antebrazos paralelos al suelo y los codos en un ángulo de 90 grados.',
  },
  {
    question: '¿Qué altura debería tener mi monitor?',
    answer:
      'La parte superior de tu monitor debería estar a la altura de los ojos o ligeramente por debajo, con la pantalla inclinada hacia atrás de 10 a 20 grados. Esto mantiene el cuello en una posición neutral y reduce la fatiga visual al mirar ligeramente hacia abajo, que es el ángulo de reposo natural de la visión humana.',
  },
  {
    question: '¿A qué distancia debería estar de mi pantalla?',
    answer:
      'La distancia ideal es la longitud de un brazo, aproximadamente de 50 a 70 centímetros. A esta distancia tus ojos no tienen que esforzarse para enfocar y puedes ver toda la pantalla sin mover la cabeza. Para pantallas más grandes, aumenta la distancia proporcionalmente.',
  },
  {
    question: '¿Es mejor un escritorio de pie?',
    answer:
      'Los escritorios de pie reducen la sedestación prolongada, que está relacionada con problemas cardiovasculares y metabólicos. Sin embargo, estar de pie todo el día puede causar problemas de venas y pies. El mejor enfoque es alternar: sentarse durante 30 minutos, estar de pie de 15 a 30 minutos y moverse regularmente.',
  },
  {
    question: '¿Deberían tocar mis pies el suelo?',
    answer:
      'Sí. Tus pies deberían descansar planos sobre el suelo con las rodillas en un ángulo de 90 grados. Si tu silla es demasiado alta, usa un reposapiés. Si tus pies cuelgan, se acumula presión detrás de los muslos, restringiendo el flujo sanguíneo y causando entumecimiento.',
  },
  {
    question: '¿Cuál es la mejor altura de silla?',
    answer:
      'El asiento debería permitir que tus rodillas se doblen aproximadamente a 90 grados con los pies planos en el suelo. Tus caderas deberían estar a la altura de las rodillas o ligeramente por encima. Esto distribuye el peso uniformemente sobre los huesos isquiáticos y reduce la presión en la parte baja de la espalda.',
  },
];

const howToData = [
  {
    name: 'Mide tu altura corporal',
    text: 'Ponte descalzo contra una pared y marca la parte superior de tu cabeza. Mide desde el suelo hasta la marca en centímetros.',
  },
  {
    name: 'Selecciona el modo de tu espacio de trabajo',
    text: 'Elige si quieres recomendaciones para un escritorio sentado o de pie. Cada modo utiliza diferentes proporciones corporales.',
  },
  {
    name: 'Ajusta tu silla primero',
    text: 'Ajusta tu silla para que tus pies descansen planos en el suelo y tus rodillas formen un ángulo de 90 grados. Tus caderas deberían estar a la altura de las rodillas o ligeramente por encima.',
  },
  {
    name: 'Configura la superficie de tu escritorio',
    text: 'Sube o baja tu escritorio para que tus antebrazos descansen paralelos al suelo al escribir. Tus codos deberían estar en un ángulo de 90 grados.',
  },
  {
    name: 'Posiciona tu monitor',
    text: 'Coloca el monitor a la longitud de un brazo de distancia. La parte superior de la pantalla debería estar a la altura de los ojos o ligeramente por debajo, inclinada hacia atrás de 10 a 20 grados.',
  },
  {
    name: 'Verifica con el avatar',
    text: 'Usa el avatar en pantalla para comprobar que todos los ángulos estén en verde. Si alguna articulación está en rojo, ajusta la pieza de mobiliario correspondiente.',
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

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'El Coste Oculto de una Mala Configuración de Escritorio',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'La mayoría de personas pasan más de ocho horas al día en un escritorio, pero pocas miden si su silla, escritorio o monitor se ajustan a su cuerpo. Una diferencia de apenas unos centímetros puede crear tensión crónica en el cuello, los hombros y la parte baja de la espalda. Con el tiempo, esta tensión se convierte en dolor, y el dolor en lesión. La buena noticia es que la ergonomía óptima puede calcularse con precisión a partir de una sola medida: tu altura.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '8h',
          label: 'Tiempo Promedio en el Escritorio',
          icon: 'mdi:desk',
        },
        {
          value: '90°',
          label: 'Ángulo Ideal de Codo',
          icon: 'mdi:angle-acute',
        },
        {
          value: '60cm',
          label: 'Mejor Distancia a la Pantalla',
          icon: 'mdi:monitor',
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por Qué una Talla Única Nunca Vale para Todos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los escritorios estándar miden 73 centímetros de alto y las sillas estándar 45 centímetros. Estas dimensiones fueron diseñadas hace décadas para hombres de oficina de estatura media. Si mides menos de 175 centímetros o más de 185 centímetros, esos valores predeterminados están dañando activamente tu postura. Las mujeres, los adolescentes y las personas con torso más largo o más corto que el promedio son especialmente mal atendidas por el mobiliario de serie.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Configuración Deficiente',
          description: 'Valores predeterminados comunes del mobiliario que generan tensión con el tiempo.',
          icon: 'mdi:alert',
          points: [
            'Monitor demasiado alto o demasiado bajo',
            'Escritorio que obliga a levantar los hombros',
            'Los pies no alcanzan el suelo',
            'La silla no ofrece soporte lumbar',
          ],
        },
        {
          title: 'Configuración Óptima',
          description: 'Medidas personalizadas basadas en las proporciones de tu cuerpo.',
          icon: 'mdi:check-circle',
          points: [
            'Monitor a la altura de los ojos',
            'Codos a 90 grados',
            'Pies planos en el suelo',
            'Zona lumbar completamente apoyada',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista de Verificación Rápida de Postura',
      icon: 'mdi:clipboard-check',
      badge: 'Acción',
      html: '<p style="margin:0">Siéntate con la espalda contra la silla. Comprueba que haya un pequeño espacio entre la parte de atrás de tus rodillas y el borde del asiento. Asegúrate de que tus muñecas estén rectas al escribir. La parte superior del monitor no debería estar más alta que tus ojos. Toma un descanso de 2 minutos para caminar cada 30 minutos.</p>',
    },
    {
      type: 'title',
      text: 'La Ciencia de Sentarse y Estar de Pie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Los cuerpos humanos no están diseñados para permanecer en una misma posición durante horas. Al sentarse, la presión sobre los discos lumbares aumenta un 40 por ciento en comparación con estar de pie. Al estar de pie quieto, la sangre se acumula en las piernas y el corazón tiene que trabajar más para bombearla de nuevo hacia arriba. El ritmo de trabajo más saludable es alternar entre sentarse y estar de pie cada 30 a 60 minutos, combinado con paseos cortos. Esta herramienta calcula ambos modos para que puedas configurar un escritorio convertible correctamente.',
    },
    {
      type: 'summary',
      title: 'Cómo Construir un Espacio de Trabajo Ergonómico',
      items: [
        'Mide tu altura descalzo en centímetros.',
        'Usa este simulador para obtener las alturas exactas de tu silla, escritorio y monitor.',
        'Ajusta primero la silla, luego el escritorio y después el monitor.',
        'Si usas un escritorio de pie, configúralo 30 centímetros por encima de la altura de tu escritorio sentado.',
        'Coloca el monitor a la longitud de un brazo de distancia e inclínalo hacia atrás de 10 a 20 grados.',
        'Toma un descanso de 2 minutos para caminar o estirarte cada 30 minutos.',
      ],
    },
  ],
  ui: {
    labelMode: 'Modo de espacio de trabajo',
    modeSit: 'Sentado',
    modeStand: 'De pie',
    labelHeight: 'Tu altura',
    unitCm: 'cm',
    labelGender: 'Complexión',
    genderMale: 'Hombre',
    genderFemale: 'Mujer',
    labelChair: 'Silla',
    labelDesk: 'Escritorio',
    labelMonitor: 'Monitor',
    labelDistance: 'Distancia',
    labelAngle: 'Ángulo',
    labelGood: 'Correcto',
    labelAdjust: 'Ajustar',
    badgeChair: 'Asiento',
    badgeDesk: 'Superficie',
    badgeMonitor: 'Pantalla',
    tipScreenLow: 'Sube tu monitor',
    tipScreenHigh: 'Baja tu monitor',
    tipDeskLow: 'Sube tu escritorio',
    tipDeskHigh: 'Baja tu escritorio',
    tipChairLow: 'Sube tu silla',
    tipChairHigh: 'Baja tu silla',
    tipDistance: 'Mueve la pantalla a la longitud de un brazo',
  },
};