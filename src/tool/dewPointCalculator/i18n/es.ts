import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';

const slug = 'punto-de-rocio';
const title = 'Calculadora de Punto de Rocío';
const description =
  'Calcula la temperatura de condensación en tus paredes usando la humedad y temperatura ambiente. Una herramienta vital para prevenir humedades y proteger la salud estructural de tu hogar.';

const faqData = [
  {
    question: '¿Qué es exactamente el punto de rocío?',
    answer:
      'Es la temperatura a la que el aire debe enfriarse para que el vapor de agua se condense en agua líquida. Cuanto más alta es la humedad relativa, más cerca está el punto de rocío de la temperatura actual.',
  },
  {
    question: '¿Por qué aparece moho en las esquinas de mi casa?',
    answer:
      'Las esquinas suelen ser puentes térmicos donde la pared está más fría. Si la temperatura de esa superficie baja del punto de rocío, se forma agua líquida. El moho necesita esa humedad constante para crecer.',
  },
  {
    question: '¿Cómo puedo bajar la humedad en casa?',
    answer:
      'La forma más efectiva es ventilar (especialmente después de ducharse o cocinar) y usar deshumidificadores. Mantener una temperatura constante también ayuda a que el aire pueda retener más vapor sin condensar.',
  },
  {
    question: '¿Es peligroso el moho por condensación?',
    answer:
      'Sí. El moho libera esporas que pueden causar problemas respiratorios, alergias y asma. Detectar el riesgo de condensación con esta calculadora es el primer paso para una casa saludable.',
  },
];

const howToData = [
  {
    name: 'Medir temperatura y humedad',
    text: 'Usa un termómetro e higrómetro para conocer los valores actuales de la estancia.',
  },
  {
    name: 'Introducir valores',
    text: 'Ajusta la temperatura en grados Celsius y el porcentaje de humedad en la calculadora.',
  },
  {
    name: 'Obtener temperatura crítica',
    text: 'La herramienta te dirá a qué temperatura exacta empezará a condensar el agua en las superficies.',
  },
  {
    name: 'Verificar superficies',
    text: 'Si tienes un termómetro láser, mide la temperatura de las paredes. Si es igual o menor al resultado, necesitas ventilar o aislar.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Preguntas Frecuentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografía',
  bibliography: [
    {
      name: 'Magnus Approximation of the Dew-Point — Meteorological Applications (2011)',
      url: 'https://es.scribd.com/document/331352069/dew-point',
    },
    {
      name: 'Guide to Meteorological Instruments and Methods of Observation — WMO (2021)',
      url: 'https://community.wmo.int/site/knowledge-hub/programmes-and-initiatives/instruments-and-methods-of-observation-programme-imop/guide-instruments-and-methods-of-observation-wmo-no-8',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: '¿Qué es el Punto de Rocío y por qué importa en tu hogar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'El punto de rocío es la temperatura a la cual el aire debe enfriarse para que el vapor de agua se condense en agua líquida. En el contexto de una vivienda, este concepto marca la frontera entre una casa sana y una con problemas estructurales de humedad. Cuando la temperatura de una superficie (como una pared mal aislada) cae por debajo del punto de rocío, aparecen gotas de agua — el caldo de cultivo ideal para el <em>Aspergillus</em> y otros hongos nocivos.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Diferencia Segura', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Humedad Ideal', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Peligro Extremo', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'La Fórmula de Magnus-Tetens',
          description: 'Para calcular el punto de rocío con precisión científica utilizamos la aproximación de Magnus-Tetens, con constantes b=17.625 y c=243.04°C recomendadas por la Organización Meteorológica Mundial para temperaturas entre 0°C y 50°C.',
          icon: 'mdi:calculator',
          points: ['Precisión científica validada por la OMM', 'Válida para rangos de temperatura habitacional'],
        },
        {
          title: 'Puentes Térmicos y Moho',
          description: 'Las esquinas de habitaciones, los marcos de ventanas y las paredes exteriores mal aisladas son los puntos más fríos. Si su temperatura cae por debajo del punto de rocío, la condensación y el moho son inevitables.',
          icon: 'mdi:home-thermometer',
          points: ['Las esquinas son los puntos más vulnerables', 'El aislamiento térmico previene la condensación'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Niveles de Riesgo',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Riesgo Bajo (diferencia &gt; 5°C):</strong> El aire está lejos de saturarse. Tus paredes están seguras. <strong>Riesgo Medio (3–5°C):</strong> Vigila las esquinas y los puentes térmicos. <strong>Riesgo Alto (1–3°C):</strong> Condensación probable en cristales y zonas frías — ventila inmediatamente. <strong>Peligro Extremo (&lt; 1°C):</strong> Condensación activa con riesgo inmediato de proliferación de moho negro.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'La Regla de Oro',
      icon: 'mdi:thermometer-alert',
      badge: 'Consejo Clave',
      html: '<p>Si la temperatura de tu pared está a menos de <strong>3°C del punto de rocío</strong>, tienes un riesgo inminente de condensación. Ventila, usa extractores en baños y cocinas, y mantén la humedad relativa entre el 40% y el 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Cómo Prevenir la Condensación',
      items: [
        'Ventila diariamente, especialmente tras ducharte o cocinar.',
        'Mantén la humedad relativa entre el 40% y el 60%.',
        'Usa extractores en baños y cocinas para evacuar el vapor.',
        'No seques ropa dentro de casa sin ventilación.',
        'Aísla térmicamente las paredes para evitar superficies frías.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Temperatura Ambiente',
    labelHumidity: 'Humedad Relativa',
    labelDewPoint: 'Punto de Rocío',
    riskLow: 'Riesgo Bajo',
    riskMedium: 'Riesgo Medio',
    riskHigh: 'Riesgo Alto',
    riskExtreme: 'Peligro Extremo',
    riskLowDesc: 'Diferencia > 5°C. Superficies seguras.',
    riskMediumDesc: 'Diferencia 3–5°C. Vigila las esquinas.',
    riskHighDesc: 'Diferencia 1–3°C. Ventila inmediatamente.',
    riskExtremeDesc: 'Diferencia < 1°C. Condensación activa.',
  },
};
