import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TileLayoutCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-disposicao-azulejos';
const title = 'Calculadora de Disposição e Desperdício de Azulejos';
const description =
  'Planeie o pavimento do seu quarto com precisão. Calcule a quantidade exata de azulejos, caixas necessárias, custo total e visualize a disposição em tempo real com uma pré-visualização interativa da grelha.';

const faqData = [
  {
    question: 'Como calculo quantos azulejos preciso para um quarto?',
    answer:
      'Meça a largura e o comprimento da divisão, escolha o tamanho do azulejo e indique a largura da junta. A calculadora divide as dimensões da divisão pelo azulejo mais a junta para dar o número exato de peças por fila e coluna.',
  },
  {
    question: 'Que percentagem de desperdício devo acrescentar ao comprar azulejos?',
    answer:
      'Para divisões retangulares padrão, adicione 10% de desperdício. Para ambientes com muitos cantos, disposições diagonais ou cortes complexos, aumente para 15%. Isto cobre quebras e erros de corte.',
  },
  {
    question: 'A espessura da junta realmente altera a quantidade de azulejos?',
    answer:
      'Sim. Juntas mais largas reduzem a cobertura efetiva de cada peça, aumentando ligeiramente o número total necessário. A calculadora leva isto em conta automaticamente em cada fila e coluna.',
  },
  {
    question: 'Devo comprar caixas extra para além da percentagem de desperdício?',
    answer:
      'É sensato adquirir uma caixa extra, se disponível. Os lotes de cor podem variar entre produções, e ter peças sobressalentes a condiciona reparações futuras.',
  },
  {
    question: 'Como coloco azulejos numa divisão de forma irregular?',
    answer:
      'Divida a divisão em retângulos mais pequenos. Calcule cada secção separadamente e some os totais. Arredonde sempre as caixas parciais para cima para garantir cobertura completa.',
  },
  {
    question: 'Qual é a diferença de desperdício entre cerâmica e porcelanato?',
    answer:
      'O porcelanato é mais denso e difícil de cortar, o que pode aumentar o desperdício de corte entre 2% e 3% em comparação com a cerâmica padrão. Ambos os materiais devem seguir o mesmo processo de medição.',
  },
  {
    question: 'Posso devolver caixas de azulejos não utilizadas?',
    answer:
      'A maioria dos retalhistas aceita caixas por abrir no prazo de 30 dias. Guarde sempre o recibo e não abra as caixas excedentes até a instalação estar totalmente concluída.',
  },
];

const howToData = [
  {
    name: 'Meça a divisão',
    text: 'Anote a largura e o comprimento do pavimento no sistema de unidades que preferir.',
  },
  {
    name: 'Selecione azulejo e junta',
    text: 'Escolha as dimensões do azulejo e a largura da junta desejada.',
  },
  {
    name: 'Calcule e visualize',
    text: 'Introduza os valores na calculadora, ajuste a margem de desperdício e reveja a pré-visualização live da disposição.',
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

export const content: ToolLocaleContent<TileLayoutCalculatorUI> = {
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
      text: 'Guia Completo para Planificar Pavimentos em Azulejo e Controlar o Desperdício',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Um projeto de colocação de azulejos bem-sucedido começa muito antes de aplicar a primeira camada de cola. A medição precisa, o planeamento inteligente da disposição e a estimativa exata do desperdício determinam se a sua renovação se mantém no orçamento e no prazo. <strong>A nossa calculadora de disposição de azulejos interativa</strong> transforma dimensões brutas num plano visual, mostrando exatamente quantas peças cabem por fila, quantas caixas comprar e onde o seu dinheiro é investido.',
    },
    {
      type: 'stats',
      items: [
        { value: '10-15%', label: 'Desperdício Padrão', icon: 'mdi:alert-circle' },
        { value: '30+ anos', label: 'Vida útil do azulejo', icon: 'mdi:clock-outline' },
        { value: '48h', label: 'Instalação Média', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Azulejos de Grande Formato',
          description: 'Azulejos superiores a 60 cm criam um aspeto moderno e contínuo, mas exigem substratos perfeitamente planos e geram mais desperdício de corte em divisões pequenas.',
          icon: 'mdi:arrow-expand',
          points: ['Menos juntas visíveis', 'Efeito visual premium', 'Maior desperdício em espaços reduzidos'],
        },
        {
          title: 'Mosaicos de Pequena Dimensão',
          description: 'Ideais para casas de banho e padrões intrincados. Adaptam-se a formas irregulares, mas exigem mais junta e tempo de mão de obra.',
          icon: 'mdi:apps',
          points: ['Flexíveis à volta de obstáculos', 'Mais junta necessária', 'Maior tempo de instalação'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Porque a Visualização da Disposição Importa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ver a grelha de azulejos antes da compra evita surpresas dispendiosas. Uma pré-visualização em direto revela se o tamanho escolhido deixa tiras estreitas nos bordos ou cria um pavimento equilibrado e simétrico. Ajustando a largura da junta e a orientação do azulejo na calculadora, pode otimizar a disposição para estética e eficiência antes de encomendar.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabela de Referência Rápida de Cobertura',
      icon: 'mdi:table',
      badge: 'Referência',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>30 x 30 cm</strong> → 11 azulejos por m²</li><li><strong>45 x 45 cm</strong> → 5 azulejos por m²</li><li><strong>60 x 60 cm</strong> → 3 azulejos por m²</li><li><strong>60 x 120 cm</strong> → 1,5 azulejos por m²</li></ul>',
    },
    {
      type: 'summary',
      title: 'Dicas de Profissional para Minimizar o Desperdício',
      items: [
        'Encomende 10% extra para disposições direitas e 15% para diagonais ou espinha de peixe.',
        'Guarde todas as caixas do mesmo lote de produção para garantir consistência de cor.',
        'Meça em diagonal a divisão para verificar a esquadria antes de planear as filas.',
        'Utilize grandes formatos apenas em divisões mais largas que o comprimento do azulejo para evitar cortes excessivos.',
        'Arredonde sempre as caixas para cima: sai mais barato do que uma segunda entrega.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuração da Divisão',
    labelRoomWidth: 'Largura da divisão',
    labelRoomLength: 'Comprimento da divisão',
    labelTileWidth: 'Largura do azulejo',
    labelTileLength: 'Comprimento do azulejo',
    labelGrout: 'Junta',
    labelWaste: 'Margem de desperdício',
    labelTilesPerBox: 'Azulejos por caixa',
    labelPrice: 'Preço por caixa',
    labelPattern: 'Padrão de colocação',
    unitMetricRoom: 'm',
    unitImperialRoom: 'ft',
    unitMetricTile: 'cm',
    unitImperialTile: 'in',
    unitGroutMetric: 'mm',
    unitGroutImperial: 'in',
    unitPercent: '%',
    unitBoxes: 'un',
    unitPrice: '/caixa',
    resultBadge: 'Pré-visualização live',
    labelArea: 'Área do pavimento',
    labelTiles: 'Azulejos total',
    labelBoxes: 'Caixas necessárias',
    labelCost: 'Custo total',
    labelWasteCount: 'Azulejos de desperdício',
    labelCuts: 'Cortes parciais',
    currency: 'EUR',
    btnMetric: 'Métrico',
    btnImperial: 'Imperial',
    btnPatternStraight: 'Direito',
    btnPatternBrick: 'Meia-teia',
    btnPatternDiagonal: 'Diagonal',
    badgeOptimal: 'Disposição ótima',
    badgeWarning: 'Alerta de desperdício elevado',
    visualTitle: 'Pré-visualização da disposição',
  },
};
