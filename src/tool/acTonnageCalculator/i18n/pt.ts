import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { AcTonnageCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tonelagem-ar-condicionado';
const title = 'Calculadora de Tonelagem e Capacidade de Refrigeração';
const description =
  'Calcule o tamanho exato do ar condicionado para o seu cômodo em BTUs, frigorias e toneladas. Insira área, pé-direito, ocupantes e fontes de calor.';

const faqData = [
  { question: 'Quantos BTUs por metro quadrado?', answer: 'A base padrão é 600 BTUs por metro quadrado para um pé-direito de 2,5 m em clima temperado. Aumenta com altura, sol e pessoas.' },
  { question: 'O que é uma frigoria?', answer: 'Frigoria é uma unidade antiga de refrigeração comum na Espanha e América Latina. Uma frigoria equivale a aproximadamente 3,968 BTUs por hora.' },
  { question: 'Como converter BTUs em toneladas?', answer: 'Uma tonelada de refrigeração equivale a 12.000 BTUs por hora. Divida o total de BTUs por 12.000.' },
  { question: 'O pé-direito afeta o dimensionamento?', answer: 'Sim. Cada metro acima de 2,7 m aumenta a necessidade de refrigeração em cerca de 8%.' },
];

const howToData = [
  { name: 'Meça o cômodo', text: 'Meça comprimento e largura em metros e multiplique para obter a área.' },
  { name: 'Conte pessoas e aparelhos', text: 'Adicione pessoas e fontes de calor como computadores e televisores.' },
  { name: 'Exposição solar', text: 'Escolha leve, média ou forte conforme o sol direto.' },
  { name: 'Leia a recomendação', text: 'A calculadora mostra BTUs, frigorias e toneladas para qualquer mercado.' },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org', '@type': 'FAQPage',
  mainEntity: faqData.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};
const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org', '@type': 'HowTo', name: title, description,
  step: howToData.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};
const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description,
  applicationCategory: 'UtilityApplication', operatingSystem: 'All',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt',
};

export const content: ToolLocaleContent<AcTonnageCalculatorUI> = {
  slug, title, description, faq: faqData, bibliography, howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    { type: 'title', text: 'Qual tamanho de ar condicionado preciso?', level: 2 },
    { type: 'paragraph', html: 'O tamanho certo depende da área, pé-direito, pessoas e sol. Use esta calculadora para BTUs, frigorias e toneladas exatos.' },
    { type: 'table', headers: ['Área', 'BTU recomendado', 'Tonelagem', 'Uso típico'], rows: [['10 m² (quarto pequeno)', '6.000 - 7.000 BTU', '0,5 - 0,75 t', 'Quarto de hóspedes'], ['15 m² (quarto)', '9.000 - 10.000 BTU', '0,75 - 1 t', 'Quarto principal'], ['20 m² (sala)', '12.000 - 14.000 BTU', '1 - 1,25 t', 'Sala pequena'], ['30 m² (planta aberta)', '18.000 - 21.000 BTU', '1,5 - 1,75 t', 'Estúdio'], ['40 m² (sala grande)', '24.000 - 28.000 BTU', '2 - 2,5 t', 'Sala grande + jantar']] },
    { type: 'title', text: 'Por que errar o tamanho custa dinheiro', level: 2 },
    { type: 'paragraph', html: 'Um ar condicionado subdimensionado funciona sem parar, nunca atinge a temperatura e desgasta o compressor. Um superdimensionado sopra ar frio em rajadas curtas e deixa o ambiente úmido.' },
    { type: 'stats', items: [{ value: '600', label: 'BTU por m² base', icon: 'mdi:thermometer' }, { value: '12000', label: 'BTU por tonelada', icon: 'mdi:snowflake' }, { value: '3.968', label: 'BTU por frigoria', icon: 'mdi:calculator' }], columns: 3 },
  ],
  ui: {
    labelRoomSize: 'Área do cômodo', labelRoomSizeFt: 'Área', labelCeilingHeight: 'Pé-direito', labelCeilingHeightFt: 'Altura',
    labelPeople: 'Pessoas', labelHeatSources: 'Fontes de calor', labelSunExposure: 'Exposição solar', labelRoomType: 'Tipo de cômodo',
    labelCalculate: 'Calcular', labelResult: 'Resultado', labelBtus: 'BTU/h', labelFrigorias: 'Frigorias', labelTons: 'Toneladas',
    labelRequired: 'Necessário', labelRecommended: 'Recomendado', labelUnitBtu: 'BTU/h', labelUnitFrigorias: 'Frigorias', labelUnitTons: 'Toneladas',
    labelMetric: 'Métrico', labelImperial: 'Imperial', labelRoomCozy: 'Confortável', labelRoomWarm: 'Quente', labelRoomHot: 'Muito quente',
    bdBaseCooling: 'Refrigeração base', bdCeilingHeight: 'Pé-direito', bdPeople: 'Pessoas', bdHeatSources: 'Fontes de calor', bdSunRoom: 'Sol e tipo de cômodo',
    sunLight: 'Leve', sunMedium: 'Média', sunHeavy: 'Forte',
    roomBedroom: 'Quarto', roomLiving: 'Sala de estar', roomKitchen: 'Cozinha', roomOffice: 'Escritório', roomServer: 'Sala de servidores',
    errorRequired: 'Preencha todos os campos',
  },
};
