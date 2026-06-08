import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LightingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-de-iluminacao-e-lumens-para-casa';
const title = 'Calculadora de Iluminação e Lúmens para Casa';
const description =
  'Calcule exatamente quantos lúmens e lâmpadas precisa para qualquer divisão. Selecione o tipo de divisão, as dimensões e o tipo de lâmpada para obter um plano de iluminação profissional com estimativas de lux em tempo real.';

const faqData = [
  {
    question: 'Quantos lúmens preciso para uma sala de estar?',
    answer:
      'Para uma sala de estar típica, procure cerca de 150 lux no chão. Multiplique a área da divisão em metros quadrados por 150 para obter os lúmens necessários. Para uma divisão de 20 metros quadrados, precisa de aproximadamente 3.000 lúmens.',
  },
  {
    question: 'Qual é a diferença entre lux e lúmens?',
    answer:
      'Os lúmens medem a produção total de luz de uma lâmpada. Os lux medem a luz que realmente atinge uma superfície. Uma divisão com tetos altos ou paredes escuras precisa de mais lúmens para atingir o mesmo nível de lux porque a luz é perdida pela distância e absorção.',
  },
  {
    question: 'As lâmpadas LED realmente poupam energia?',
    answer:
      'Sim. As lâmpadas LED produzem cerca de 100 lúmens por watt, enquanto as incandescentes produzem apenas cerca de 15. Uma lâmpada LED de 10W dá a mesma luz que uma incandescente de 60W, usando um sexto da eletricidade.',
  },
  {
    question: 'Como a cor da divisão afeta as necessidades de iluminação?',
    answer:
      'As paredes e tetos escuros absorvem a luz. Numa divisão com superfícies escuras, pode precisar de 50% mais lúmens do que a recomendação padrão.',
  },
  {
    question: 'Qual é um bom nível de lux para ler?',
    answer:
      'Para ler confortavelmente, precisa de 300 a 500 lux na página. A iluminação ambiente geral normalmente fornece 150 a 200 lux, por isso adicione uma lâmpada de tarefa junto ao seu local de leitura para o brilho extra.',
  },
  {
    question: 'Posso escurecer lâmpadas LED?',
    answer:
      'Apenas se estiverem marcadas como reguláveis. As LED standard podem piscar ou ter uma vida útil reduzida quando ligadas a um regulador. Verifique sempre a embalagem pelo símbolo regulável antes de instalar.',
  },
];

const howToData = [
  {
    name: 'Escolha o tipo de divisão',
    text: 'Selecione a função da divisão. Cozinhas e escritórios precisam de luz mais intensa do que quartos ou corredores.',
  },
  {
    name: 'Introduza as dimensões',
    text: 'Introduza a largura, o comprimento e a altura do teto da divisão. A calculadora utiliza estes dados para determinar o índice da divisão e o fator de utilização da luz.',
  },
  {
    name: 'Selecione o tipo de lâmpada e a quantidade',
    text: 'Escolha a tecnologia de lâmpada preferida e quantas luminárias tem. A calculadora dir-lhe-á se precisa de mais lâmpadas.',
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

export const content: ToolLocaleContent<LightingCalculatorUI> = {
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
      text: 'Guia Completo de Design de Iluminação Residencial e Planeamento de Lúmens',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A iluminação adequada transforma uma casa num lar. Para além da estética, a quantidade certa de luz afeta o humor, a produtividade e até a saúde ocular. <strong>A nossa calculadora de iluminação residencial</strong> ajuda-o a determinar exatamente quantos lúmens precisa para qualquer divisão, tendo em conta o tamanho da divisão, a altura do teto, as cores das superfícies e o tipo de lâmpada.',
    },
    {
      type: 'stats',
      items: [
        { value: '150-500', label: 'Intervalo de Lux Recomendado', icon: 'mdi:brightness-6' },
        { value: '100 lm/W', label: 'Eficiência LED', icon: 'mdi:lightbulb' },
        { value: '80%', label: 'Fator de Manutenção', icon: 'mdi:tools' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iluminação Ambiente Quente',
          description: 'Ideal para salas de estar e quartos. Cria uma atmosfera acolhedora e reduz a tensão ocular à noite.',
          icon: 'mdi:weather-night',
          points: ['150-200 lux', 'Temperatura de cor quente (2700K)', 'Múltiplas fontes reguláveis'],
        },
        {
          title: 'Iluminação de Tarefa Brilhante',
          description: 'Essencial para cozinhas, escritórios e casas de banho. Proporciona visibilidade clara para trabalhos detalhados.',
          icon: 'mdi:white-balance-sunny',
          points: ['300-500 lux', 'Branco frio (4000K)', 'Focada nas superfícies de trabalho'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Por que as Dimensões da Divisão Importam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A luz espalha-se e enfraquece com a distância. Uma lâmpada que é suficientemente brilhante para um teto de 2,5 metros pode ser demasiado fraca para um teto de 4 metros. A calculadora leva isto em conta utilizando a fórmula do índice da divisão, que considera tanto a área do piso como a altura de montagem para estimar quanta luz realmente chega ao seu plano de trabalho.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabela de Referência Rápida de Lux',
      icon: 'mdi:table',
      badge: 'Referência',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>Sala de estar</strong> → 150 lux</li><li><strong>Cozinha</strong> → 300 lux</li><li><strong>Quarto</strong> → 100 lux</li><li><strong>Casa de banho</strong> → 200 lux</li><li><strong>Escritório</strong> → 500 lux</li><li><strong>Corredor</strong> → 100 lux</li></ul>',
    },
    {
      type: 'summary',
      title: 'Dicas de Profissionais para Melhor Iluminação',
      items: [
        'Sobreponha três tipos de luz: ambiente, de tarefa e de destaque.',
        'Use reguladores para ajustar o brilho em diferentes momentos do dia.',
        'Escolha lâmpadas LED para longa durabilidade e baixo consumo de energia.',
        'Coloque as lâmpadas de tarefa do lado oposto à sua mão dominante para evitar sombras.',
        'Considere lâmpadas inteligentes para programação automatizada e alterações de temperatura de cor.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Calculadora de Iluminação de Divisão',
    labelRoomType: 'Tipo de divisão',
    labelRoomWidth: 'Largura',
    labelRoomLength: 'Comprimento',
    labelHeight: 'Teto',
    labelBulbType: 'Lâmpada',
    labelBulbWatt: 'Potência',
    labelFixtures: 'Luminárias',
    labelAmbient: 'Ambiente',
    btnAmbientCozy: 'Aconchegante',
    btnAmbientNormal: 'Normal',
    btnAmbientBright: 'Brilhante',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitHeight: 'm',
    unitBulbs: 'un',
    unitWatt: 'W',
    unitLux: 'lux',
    labelTargetLux: 'Lux alvo',
    labelCurrentLux: 'Lux atual',
    labelBulbsNeeded: 'Lâmpadas necessárias',
    labelRoomArea: 'Área',
    statusOptimal: 'Perfeito',
    statusInsufficient: 'Demasiado Escuro',
    statusExcess: 'Demasiado Claro',
    btnLiving: 'Sala',
    btnKitchen: 'Cozinha',
    btnBedroom: 'Quarto',
    btnBathroom: 'Casa de Banho',
    btnOffice: 'Escritório',
    btnHallway: 'Corredor',
    btnBulbLED: 'LED',
    btnBulbCFL: 'CFL',
    btnBulbHalogen: 'Halogéneo',
    btnBulbIncandescent: 'Incandescente',
    btnMetric: 'M',
    btnImperial: 'ft',
    tipOptimal: 'A sua iluminação está perfeitamente equilibrada para esta divisão.',
    tipInsufficient: 'Adicione mais luminárias ou lâmpadas de maior potência.',
    tipExcess: 'Reduza as luminárias ou escureça para poupar energia.',
    labelManualAdjust: 'Ajuste manual',
    labelSummary: 'O seu plano de iluminação',
    labelTotalLumens: 'Lúmens totais necessários',
    labelSuggestedSetup: 'Configuração recomendada',
    btnExport: 'Exportar PDF',
  },
};
