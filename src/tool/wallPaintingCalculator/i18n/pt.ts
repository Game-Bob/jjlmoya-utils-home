import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WallPaintingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tinta-paredes';
const title = 'Calculadora de Tinta e Diluição para Paredes';
const description =
  'Calcule exatamente quantos litros ou galões de tinta você precisa para suas paredes. Ajuste para camadas, tipo de superfície, diluição e obtenha o custo real antes de comprar.';

const faqData = [
  {
    question: 'Como calculo a quantidade exata de tinta?',
    answer:
      'Multiplique a área da superfície da parede pelo número de demãos e divida pelo rendimento da tinta em metros quadrados ou pés quadrados por litro ou galão. Subtraia primeiro portas e janelas da área total.',
  },
  {
    question: 'Quanta tinta um quarto padrão precisa?',
    answer:
      'Um quarto de 12 metros quadrados com tetos de 2,5 metros de altura tem cerca de 30 metros quadrados de superfície de parede. Com duas demãos e um rendimento de 12 metros quadrados por litro, você precisa de aproximadamente 5 litros de tinta.',
  },
  {
    question: 'Devo diluir a tinta antes de aplicá-la?',
    answer:
      'Tintas plásticas à base de água geralmente são prontas para uso ou precisam de 5 a 10 por cento de água na primeira demão. Tintas esmaltadas ou a óleo geralmente requerem um solvente específico indicado na lata.',
  },
  {
    question: 'Quantas demãos são realmente necessárias?',
    answer:
      'Superfícies novas ou altamente absorventes precisam de um primer mais duas demãos de acabamento. Repintar uma parede já pintada em uma cor semelhante geralmente precisa de apenas uma ou duas demãos.',
  },
  {
    question: 'Subtraio portas e janelas?',
    answer:
      'Sim. Meça cada abertura e subtraia da área total da parede. Como regra rápida, portas são cerca de 2 metros quadrados e janelas cerca de 1,5 metro quadrado cada.',
  },
  {
    question: 'O tipo de superfície muda o rendimento?',
    answer:
      'Sim. Paredes lisas e preparadas podem ter um rendimento de até 14 metros quadrados por litro. Concreto áspero, textura ou tijolo absorvente podem reduzir o rendimento para 6 ou 8 metros quadrados por litro.',
  },
];

const howToData = [
  {
    name: 'Meça suas paredes',
    text: 'Meça a largura e altura de cada parede. Multiplique-as para obter a área de cada parede e depois some todas as paredes.',
  },
  {
    name: 'Subtraia aberturas',
    text: 'Meça portas e janelas e subtraia sua área do total para obter a superfície real a pintar.',
  },
  {
    name: 'Escolha o tipo de tinta',
    text: 'Selecione o tipo de tinta na calculadora. Tinta plástica fosca, plástica acetinada e esmalte têm rendimentos e recomendações de diluição diferentes.',
  },
  {
    name: 'Defina demãos e preço',
    text: 'Indique quantas demãos planeja aplicar e o preço por litro ou galão. A calculadora retornará a quantidade exata e o custo total.',
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

export const content: ToolLocaleContent<WallPaintingCalculatorUI> = {
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
      text: 'Calculadora de Tinta: Compre Exatamente o que Você Precisa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Pintar um quarto sem calcular primeiro geralmente termina em <strong>latas meio cheias</strong> ou idas de emergência à loja. O motivo é simples: o rendimento da tinta varia com a porosidade da superfície, a mudança de cor e o número de demãos. Uma parede lisa e previamente pintada pode ter um rendimento de até 14 metros quadrados por litro, enquanto uma parede com textura pode absorver a mesma quantidade e cobrir apenas 6 metros quadrados por litro.',
    },
    {
      type: 'stats',
      items: [
        { value: 'Alto', label: 'Cobertura Padrão', icon: 'mdi:format-paint' },
        { value: '2 demãos', label: 'Recomendado', icon: 'mdi:layers' },
        { value: '5-10%', label: 'Diluição Típica', icon: 'mdi:cup-water' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Como o Rendimento da Tinta Realmente Funciona',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os fabricantes indicam um rendimento teórico na lata. Esse número pressupõe uma superfície perfeitamente lisa, não absorvente, branca e aplicada com um rolo profissional em condições ideais. No mundo real, <strong>paredes porosas, cores escuras e aplicação faça-você-mesmo</strong> reduzem esse rendimento em 20 a 40 por cento. Nossa calculadora permite escolher perfis realistas para que você não fique em falta.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Tinta Plástica Fosca',
          description: 'A escolha mais comum para interiores. Alta cobertura, fácil de retocar e lavável na maioria das qualidades.',
          icon: 'mdi:palette',
          points: ['Cobertura padrão para interiores', 'Diluição: 5 a 10 por cento de água', 'Ideal para: salas e quartos'],
        },
        {
          title: 'Tinta Plástica Acetinada',
          description: 'Acabamento levemente brilhante com maior resistência à umidade e manchas. Mais difícil de retocar sem marcas.',
          icon: 'mdi:brightness-6',
          points: ['Cobertura ligeiramente superior', 'Diluição: 5 por cento de água', 'Ideal para: cozinhas e banheiros'],
        },
        {
          title: 'Tinta Esmalte',
          description: 'Acabamento duro e durável para carpintaria, radiadores e áreas de grande movimento. Requer solvente ou diluente específico.',
          icon: 'mdi:spray',
          points: ['Acabamento duro e durável', 'Diluição: 10 a 15 por cento de solvente', 'Ideal para: portas, molduras e móveis'],
        },
      ],
      columns: 3,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Medição Prática de Superfícies',
      icon: 'mdi:ruler-square',
      badge: 'Dica',
      html: '<p style="margin:0">Multiplique a largura pela altura de cada parede. Para um total rápido, some todas as larguras e multiplique pela altura do cômodo. Depois subtraia aproximadamente 2 metros quadrados para cada porta padrão e 1,5 metro quadrado para cada janela.</p>',
    },
    {
      type: 'title',
      text: 'Regras de Diluição e Aplicação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As primeiras demãos em superfícies novas ou reparadas sempre precisam de uma leve diluição para que a tinta penetre e adira. As demãos de acabamento devem ser aplicadas sem diluir ou com o mínimo indicado pelo fabricante. <strong>Diluir em excesso quebra o pigmento</strong> e deixa manchas transparentes que exigem uma demão extra.',
    },
    {
      type: 'summary',
      title: 'Por Que Calcular Antes de Comprar',
      items: [
        'Evite sobras de tinta que secam na lata e acabam como resíduo.',
        'Prevenja diferenças de tonalidade entre lotes comprados em momentos diferentes.',
        'Orçamento com precisão: conheça o custo real incluindo primer e ferramentas.',
        'Planeje o trabalho de uma só vez sem interromper para material adicional.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Superfície e Tinta',
    labelMetric: 'Métrico',
    labelImperial: 'Imperial',
    labelArea: 'Superfície total a pintar',
    labelAreaFt: 'Superfície total a pintar',
    unitArea: 'm2',
    unitAreaFt: 'ft2',
    labelYield: 'Rendimento da tinta',
    labelYieldFt: 'Rendimento da tinta',
    unitYield: 'm2/L',
    unitYieldFt: 'ft2/gal',
    labelType: 'Selecione o tipo de tinta',
    btnPlasticMatTitle: 'Plástica Fosca',
    btnPlasticMatSub: 'Fosca · Água 5%',
    btnPlasticSatinTitle: 'Plástica Acetinada',
    btnPlasticSatinSub: 'Acetinada · Água 5%',
    btnEnamelTitle: 'Esmalte',
    btnEnamelSub: 'Esmalte · Solvente 10%',
    labelCoats: 'Número de demãos',
    unitCoats: 'demãos',
    labelPrice: 'Preço por litro',
    labelPriceFt: 'Preço por galão',
    unitPrice: '/L',
    unitPriceGal: '/gal',
    labelDilution: 'Percentagem de diluição',
    unitDilution: '%',
    resultBadge: 'Cálculo de tinta',
    labelPaint: 'Litros de tinta',
    labelPaintGal: 'Galões de tinta',
    labelCost: 'Custo total',
    labelWater: 'Líquido de diluição',
    labelWaterGal: 'Líquido de diluição',
    labelTotalVolume: 'Mistura total',
    labelTotalVolumeGal: 'Mistura total',
    labelCurrency: 'Moeda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    currencySign: '€',
  },
};
