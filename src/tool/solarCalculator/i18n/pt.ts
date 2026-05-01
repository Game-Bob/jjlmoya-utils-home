import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { SolarCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-inclinacao-paineis';
const title = 'Calculadora de Inclinação de Painéis Solares';
const description =
  'Calcule o ângulo de inclinação ideal para os seus painéis solares com base na sua latitude. Obtenha valores para instalações fixas e ajustes sazonais.';

const faqData = [
  {
    question: 'O que acontece se o meu telhado não tiver a inclinação perfeita?',
    answer:
      'Não é um problema grave. As perdas por pequenos desvios (5-10°) são inferiores a 3% da produção anual. É mais importante evitar sombras do que obcecar-se com o ângulo exato.',
  },
  {
    question: 'O ângulo ideal é o mesmo em todo o mundo?',
    answer:
      'Não. Depende diretamente da sua latitude. Em Lisboa (~38°N) o ângulo ideal é diferente de alguém em Luanda (~8°S).',
  },
  {
    question: 'Para onde devem olhar os painéis?',
    answer:
      'No Hemisfério Norte, sempre para Sul (azimute 180°). No Hemisfério Sul, para Norte.',
  },
  {
    question: 'Serve também para coletores de água quente solar?',
    answer:
      'Sim. As fórmulas de inclinação são as mesmas para coletores térmicos e fotovoltaicos.',
  },
];

const howToData = [
  {
    name: 'Introduza a latitude',
    text: 'Escreva a latitude em graus decimais ou use o botão para detetar automaticamente.',
  },
  {
    name: 'Consulte o ângulo ideal',
    text: 'O ângulo ideal anual é a referência principal para instalações fixas.',
  },
  {
    name: 'Ajuste por estação (opcional)',
    text: 'Se tiver suporte regulável, use os ângulos de inverno e verão para maximizar os ganhos.',
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
  inLanguage: 'pt',
};

export const content: ToolLocaleContent<SolarCalculatorUI> = {
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
      text: 'A Ciência da Inclinação Solar',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A orientação e o ângulo dos painéis determinam o retorno do investimento. Um painel deve estar o mais perpendicular possível aos raios solares.',
    },
    {
      type: 'summary',
      title: 'Chaves para uma instalação eficiente',
      items: [
        'O ângulo anual é o valor de referência.',
        'Pequenos desvios têm pouco impacto na produção.',
        'Evitar sombras é prioritário.',
        'Orientar a Sul no Hemisfério Norte.',
      ],
    },
  ],
  ui: {
    labelLatitude: 'Latitude Geográfica',
    btnLocate: 'Detetar localização',
    labelOptimal: 'Ângulo Ideal Anual',
    labelEfficiency: 'Eficiência Máxima',
    labelWinter: 'Inverno',
    labelSummer: 'Verão',
    hemisphereNorth: 'Hemisfério Norte — Orientar a SUL',
    hemisphereSouth: 'Hemisfério Sul — Orientar a NORTE',
    geoNotAvailable: 'Geolocalização não disponível.',
  },
};
