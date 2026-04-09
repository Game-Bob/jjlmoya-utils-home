import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'calculadora-tiro-proyector';
const title = 'Calculadora Distancia Proyector — Tiro y Pantalla';
const description =
  'Calcula la distancia exacta para instalar tu proyector según el tamaño de pantalla deseado y el Throw Ratio. Herramienta visual con simulación en tiempo real.';

const faqData = [
  {
    question: '¿Qué es el Throw Ratio o relación de tiro?',
    answer:
      'Es un número que define qué tan grande será la imagen a una distancia específica. Se calcula dividiendo la distancia de proyección por el ancho de la pantalla. Un ratio de 1.5 significa que si proyectas desde 1.5m, tendrás 1m de ancho de imagen.',
  },
  {
    question: '¿A qué distancia debo poner el proyector para 100 pulgadas?',
    answer:
      'Depende del Throw Ratio de tu proyector. Con un ratio estándar de 1.5:1 necesitarías unos 3.3m. Con un proyector de tiro corto (Short Throw) podrías lograrlo a menos de 1m.',
  },
  {
    question: '¿Qué diferencia hay entre 16:9 y 4:3?',
    answer:
      '16:9 es el formato panorámico para películas y series modernas. 4:3 es el formato clásico para presentaciones y retroproyectores. Elegir el correcto evita bordes negros excesivos.',
  },
  {
    question: '¿Importa la altura a la que instalo el proyector?',
    answer:
      'Sí. Los proyectores tienen un desplazamiento vertical (offset) o corrección trapezoidal (keystone). Lo ideal es instalarlo centrado respecto al borde superior o inferior de la pantalla para evitar deformaciones.',
  },
];

const howToData = [
  {
    name: 'Consultar el Throw Ratio',
    text: 'Busca en la caja o el manual de tu proyector un número como 1.2:1 o 1.5-1.8:1.',
  },
  {
    name: 'Definir tamaño de pantalla',
    text: 'Introduce el número de pulgadas de diagonal que quieres conseguir o el ancho disponible en tu pared.',
  },
  {
    name: 'Elegir formato',
    text: 'Selecciona 16:9 para ver películas y series, 4:3 para presentaciones, o 21:9 para cinemascope.',
  },
  {
    name: 'Obtener la distancia',
    text: 'La calculadora te dará la distancia exacta a la que instalar el soporte del proyector.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Epson — Guía de Distancia de Proyección', url: 'https://epson.com/' },
    { name: 'BenQ — Knowledge Center', url: 'https://www.benq.com/en-us/knowledge-center/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Domina la Geometría de Proyección',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Instalar un proyector a ojo puede arruinar la experiencia. Demasiado cerca y la imagen es pequeña; demasiado lejos y perderás brillo. La clave está en el <strong>Throw Ratio</strong>, un número que define exactamente la relación entre distancia y tamaño de imagen.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Fórmula de Distancia', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: '¿Qué es el Throw Ratio?',
          description: 'Es la relación entre la distancia de proyección y el ancho de la imagen. Un TR de 1.5 significa que necesitas 1.5m de distancia por cada metro de ancho de pantalla.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, ideal para espacios pequeños', 'TR 1–2: Estándar para salones y salas de reuniones', 'TR > 2: Long Throw, para grandes auditorios'],
        },
        {
          title: 'Formato y Relación de Aspecto',
          description: 'El formato determina las proporciones de la imagen. Usar el formato incorrecto genera barras negras que desperdician parte de la pantalla y reducen el brillo percibido.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9 (1.78:1): estándar HD/4K para cine y series', '21:9 (2.35:1): formato cinemascope para home cinema', '4:3 (1.33:1): para presentaciones y proyectores de oficina'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Instalación Profesional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Si tu proyector tiene corrección de lente (Lens Shift), úsala siempre en lugar del Keystone digital. El Keystone recorta píxeles y reduce la resolución efectiva. Un correcto montaje elimina la necesidad de cualquier corrección.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Luz Ambiente y Ganancia de Pantalla',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>En salas con luz ambiente, considera una pantalla de alta ganancia (>1.0) para compensar la pérdida de contraste. En salas oscuras, una pantalla neutra (1.0) o de ganancia negativa ofrece mejores ángulos de visión y colores más uniformes.</p>',
    },
    {
      type: 'summary',
      title: 'Checklist de Instalación',
      items: [
        'Anota el Throw Ratio de tu proyector antes de elegir la ubicación.',
        'Verifica el tamaño máximo de imagen permitido por el espacio disponible.',
        'Instala el proyector centrado verticalmente respecto a la pantalla.',
        'Evita el Keystone digital: usa Lens Shift o ajusta la posición física.',
        'Comprueba que no haya fuentes de luz directas que apunten a la pantalla.',
      ],
    },
  ],
  ui: {
    configTitle: 'Configuración',
    configSubtitle: 'Define tu pantalla y proyector',
    labelDiagonal: 'Diagonal de Pantalla',
    labelDiagonalUnit: 'Pulgadas (")',
    labelFormat: 'Formato (Relación de Aspecto)',
    labelThrowRatio: 'Ratio de Tiro (Throw Ratio)',
    throwRatioHint: 'Consulta el manual de tu proyector. Ejemplo: 1.50 significa que para 1m de ancho, necesitas 1.5m de distancia.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cine',
    ratio43Sub: 'Retro',
    labelWidth: 'Ancho Pantalla',
    labelHeight: 'Alto Pantalla',
    labelDistance: 'Distancia Requerida',
    simulationBadge: 'Simulación en Tiempo Real',
  },
};
