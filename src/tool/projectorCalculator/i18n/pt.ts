import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';

const slug = 'calculadora-distancia-projetor';
const title = 'Calculadora de Distância do Projetor — Tiro e Ecrã';
const description =
  'Calcule a distância exata para instalar o seu projetor de acordo com o tamanho do ecrã pretendido e o Throw Ratio.';

const faqData = [
  {
    question: 'O que é o Throw Ratio ou relação de tiro?',
    answer:
      'É um número que define o tamanho da imagem a uma distância específica. Calcula-se dividindo a distância de projeção pela largura da imagem. Um rácio de 1.5 significa que se projetar a 1.5m, terá 1m de largura de imagem.',
  },
  {
    question: 'A que distância devo colocar o projetor para 100 polegadas?',
    answer:
      'Depende do Throw Ratio do seu projetor. Com um rácio padrão de 1.5:1, precisaria de cerca de 3.3m. Com um projetor de tiro curto (Short Throw), poderia consegui-lo a menos de 1m.',
  },
  {
    question: 'Qual é a diferença entre 16:9 e 4:3?',
    answer:
      '16:9 é o formato panorâmico para filmes e séries modernas. 4:3 é o formato clássico para apresentações. Escolher o correto evita barras pretas excessivas.',
  },
  {
    question: 'A altura da instalação é importante?',
    answer:
      'Sim. Os projetores têm um deslocamento vertical (offset) ou correção trapezoidal (keystone). O ideal é instalá-lo centrado em relação ao bordo superior ou inferior do ecrã.',
  },
];

const howToData = [
  {
    name: 'Consultar o Throw Ratio',
    text: 'Procure no manual ou na caixa do projetor um valor como 1.2:1 ou 1.5-1.8:1.',
  },
  {
    name: 'Definir tamanho do ecrã',
    text: 'Introduza as polegadas da diagonal ou a largura disponível na sua parede.',
  },
  {
    name: 'Escolher formato',
    text: 'Selecione 16:9 para filmes, 4:3 para apresentações ou 21:9 para cinema.',
  },
  {
    name: 'Obter a distância',
    text: 'A calculadora indicará a distância exata para instalar o suporte.',
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

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'Projector Central — Throw Distance Calculator', url: 'https://www.projectorcentral.com/projection-calculator-pro.cfm' },
    { name: 'Guia de Distância Epson', url: 'https://epson.com/' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Domine a Geometria de Projeção',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Instalar um projetor a olho pode arruinar a experiência. A chave está no <strong>Throw Ratio</strong>, um número que define exatamente a relação entre distância e tamanho de imagem.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Fórmula de Distância', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'O que é o Throw Ratio?',
          description: 'É a relação entre a distância de projeção e a largura da imagem. Um TR de 1.5 significa que precisa de 1.5m de distância por cada metro de largura de ecrã.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, ideal para espaços pequenos', 'TR 1–2: Padrão para salas', 'TR > 2: Long Throw, para grandes auditórios'],
        },
        {
          title: 'Formato e Rácio de Aspeto',
          description: 'O formato determina as proporções da imagem. Usar o formato incorreto desperdiça brilho e gera barras pretas.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9: padrão HD/4K para cinema em casa', '21:9: formato cinemascope para filmes', '4:3: para apresentações de escritório'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Instalação Profissional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> Se o seu projetor tem Lens Shift, use-o sempre em vez do Keystone digital. O Keystone reduz a resolução efetiva.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Luz Ambiente',
      icon: 'mdi:lightbulb-on',
      badge: 'Dica Pro',
      html: '<p>Em salas com luz ambiente, use um ecrã de alto ganho para compensar a perda de contraste.</p>',
    },
    {
      type: 'summary',
      title: 'Checklist de Instalação',
      items: [
        'Anote o Throw Ratio antes de escolher a localização.',
        'Verifique o espaço disponível na parede.',
        'Instale o projetor centrado em relação ao ecrã.',
        'Evite o Keystone: prefira o ajuste físico.',
        'Evite luz direta a apontar para o ecrã.',
      ],
    },
  ],
  ui: {
    configTitle: 'Configuração',
    configSubtitle: 'Defina o seu ecrã e projetor',
    labelDiagonal: 'Diagonal do Ecrã',
    labelDiagonalUnit: 'Polegadas (")',
    labelFormat: 'Formato',
    labelThrowRatio: 'Rácio de Tiro (Throw Ratio)',
    throwRatioHint: 'Exemplo: 1.50 significa que para 1m de largura, precisa de 1.5m de distância.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cinema',
    ratio43Sub: 'Retro',
    labelWidth: 'Largura Ecrã',
    labelHeight: 'Altura Ecrã',
    labelDistance: 'Distância Requerida',
    simulationBadge: 'Simulação em Tempo Real',
  },
};
