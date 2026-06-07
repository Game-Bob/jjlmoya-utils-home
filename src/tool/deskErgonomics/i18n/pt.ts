import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomia-da-mesa';
const title = 'Ergonomia da Mesa e Alinhamento do Espaço de Trabalho';
const description =
  'Insira sua altura e veja instantaneamente como ajustar sua cadeira, mesa e monitor para eliminar dores nas costas e no pescoço no seu escritório em casa.';

const faqData = [
  {
    question: 'Por que a altura da mesa importa?',
    answer:
      'Uma mesa muito alta força os ombros a subirem, causando tensão no pescoço e na parte superior das costas. Uma mesa muito baixa faz com que você se curve para a frente, comprimindo os discos lombares. A altura correta mantém os antebraços paralelos ao chão e os cotovelos em um ângulo de 90 graus.',
  },
  {
    question: 'Qual deve ser a altura do meu monitor?',
    answer:
      'A parte superior do monitor deve estar na altura dos olhos ou ligeiramente abaixo, com a tela inclinada para trás de 10 a 20 graus. Isso mantém o pescoço em uma posição neutra e reduz a fadiga ocular ao olhar ligeiramente para baixo, que é o ângulo de repouso natural da visão humana.',
  },
  {
    question: 'A que distância devo ficar da minha tela?',
    answer:
      'A distância ideal é o comprimento de um braço, cerca de 50 a 70 centímetros. Nessa distância seus olhos não precisam se esforçar para focar e você pode ver toda a tela sem mover a cabeça. Para telas maiores, aumente a distância proporcionalmente.',
  },
  {
    question: 'Uma mesa em pé é melhor?',
    answer:
      'As mesas em pé reduzem o tempo prolongado sentado, que está relacionado a problemas cardiovasculares e metabólicos. No entanto, ficar em pé o dia todo pode causar problemas de veias e pés. A melhor abordagem é alternar: sentar por 30 minutos, ficar em pé por 15 a 30 minutos e se mover regularmente.',
  },
  {
    question: 'Meus pés devem tocar o chão?',
    answer:
      'Sim. Seus pés devem descansar completamente no chão com os joelhos em um ângulo de 90 graus. Se sua cadeira for muito alta, use um apoio para os pés. Se seus pés balançarem, a pressão se acumula atrás das coxas, restringindo o fluxo sanguíneo e causando dormência.',
  },
  {
    question: 'Qual é a melhor altura para a cadeira?',
    answer:
      'O assento deve permitir que seus joelhos se dobrem em aproximadamente 90 graus com os pés completamente no chão. Seus quadris devem estar na altura dos joelhos ou ligeiramente acima. Isso distribui o peso uniformemente nos ossos do assento e reduz a pressão na parte inferior das costas.',
  },
];

const howToData = [
  {
    name: 'Meça sua altura corporal',
    text: 'Fique descalço contra uma parede e marque o topo da sua cabeça. Meça do chão até a marca em centímetros.',
  },
  {
    name: 'Selecione o modo do seu espaço de trabalho',
    text: 'Escolha se deseja recomendações para uma mesa sentada ou em pé. Cada modo usa diferentes proporções corporais.',
  },
  {
    name: 'Ajuste sua cadeira primeiro',
    text: 'Ajuste sua cadeira para que seus pés descansem completamente no chão e seus joelhos formem um ângulo de 90 graus. Seus quadris devem estar na altura dos joelhos ou ligeiramente acima.',
  },
  {
    name: 'Configure a superfície da sua mesa',
    text: 'Levante ou abaixe sua mesa para que seus antebraços fiquem paralelos ao chão ao digitar. Seus cotovelos devem estar em um ângulo de 90 graus.',
  },
  {
    name: 'Posicione seu monitor',
    text: 'Coloque o monitor a uma distância de um braço. A parte superior da tela deve estar na altura dos olhos ou ligeiramente abaixo, inclinada para trás de 10 a 20 graus.',
  },
  {
    name: 'Verifique com o avatar',
    text: 'Use o avatar na tela para verificar se todos os ângulos estão verdes. Se alguma articulação estiver vermelha, ajuste o móvel correspondente.',
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
      text: 'O Custo Oculto de uma Má Configuração de Mesa',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A maioria das pessoas passa mais de oito horas por dia em uma mesa, mas poucas medem se sua cadeira, mesa ou monitor se ajustam ao corpo. Uma diferença de apenas alguns centímetros pode criar tensão crônica no pescoço, ombros e parte inferior das costas. Ao longo dos meses e anos, essa tensão se torna dor, e a dor se torna lesão. A boa notícia é que a ergonomia ideal pode ser calculada com precisão a partir de uma única medida: sua altura.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '8h',
          label: 'Tempo Médio na Mesa',
          icon: 'mdi:desk',
        },
        {
          value: '90°',
          label: 'Ângulo Ideal do Cotovelo',
          icon: 'mdi:angle-acute',
        },
        {
          value: '60cm',
          label: 'Melhor Distância da Tela',
          icon: 'mdi:monitor',
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por Que Um Tamanho Único Nunca Serve para Todos',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As mesas padrão têm 73 centímetros de altura e as cadeiras padrão 45 centímetros. Essas dimensões foram projetadas há décadas para trabalhadores de escritório masculinos de altura média. Se você tem menos de 175 centímetros ou mais de 185 centímetros, esses padrões estão prejudicando ativamente sua postura. Mulheres, adolescentes e pessoas com tronco mais longo ou mais curto que a média são especialmente mal atendidas por móveis prontos.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Configuração Ruim',
          description: 'Padrões comuns de móveis que criam tensão ao longo do tempo.',
          icon: 'mdi:alert',
          points: [
            'Monitor muito alto ou muito baixo',
            'Mesa que força os ombros a subirem',
            'Os pés não alcançam o chão',
            'A cadeira não oferece suporte lombar',
          ],
        },
        {
          title: 'Configuração Ideal',
          description: 'Medidas personalizadas baseadas nas proporções do seu corpo.',
          icon: 'mdi:check-circle',
          points: [
            'Monitor na altura dos olhos',
            'Cotovelos a 90 graus',
            'Pés completamente no chão',
            'Parte inferior das costas totalmente apoiada',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista de Verificação Rápida da Postura',
      icon: 'mdi:clipboard-check',
      badge: 'Ação',
      html: '<p style="margin:0">Sente-se com as costas contra a cadeira. Verifique se há um pequeno espaço entre a parte de trás dos joelhos e a borda do assento. Certifique-se de que seus pulsos estejam retos ao digitar. A parte superior do monitor não deve estar mais alta que seus olhos. Faça uma pausa de 2 minutos para caminhar a cada 30 minutos.</p>',
    },
    {
      type: 'title',
      text: 'A Ciência de Sentar e Ficar em Pé',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os corpos humanos não são projetados para permanecer em uma posição por horas. Ao sentar, a pressão sobre os discos lombares aumenta em 40 por cento em comparação com ficar em pé. Ao ficar parado em pé, o sangue se acumula nas pernas e o coração precisa trabalhar mais para bombear de volta para cima. O ritmo de trabalho mais saudável é alternar entre sentar e ficar em pé a cada 30 a 60 minutos, combinado com pequenas caminhadas. Esta ferramenta calcula ambos os modos para que você possa configurar uma mesa conversível corretamente.',
    },
    {
      type: 'summary',
      title: 'Como Construir um Espaço de Trabalho Ergonômico',
      items: [
        'Meça sua altura descalço em centímetros.',
        'Use este simulador para obter as alturas exatas de sua cadeira, mesa e monitor.',
        'Ajuste primeiro a cadeira, depois a mesa, depois o monitor.',
        'Se você usa uma mesa em pé, configure-a 30 centímetros acima da altura da mesa sentada.',
        'Coloque o monitor a uma distância de um braço e incline-o para trás de 10 a 20 graus.',
        'Faça uma pausa de 2 minutos para caminhar ou alongar a cada 30 minutos.',
      ],
    },
  ],
  ui: {
    labelMode: 'Modo do espaço de trabalho',
    modeSit: 'Sentado',
    modeStand: 'Em pé',
    labelHeight: 'Sua altura',
    unitCm: 'cm',
    labelGender: 'Constituição',
    genderMale: 'Homem',
    genderFemale: 'Mulher',
    labelChair: 'Cadeira',
    labelDesk: 'Mesa',
    labelMonitor: 'Monitor',
    labelDistance: 'Distância',
    labelAngle: 'Ângulo',
    labelGood: 'Bom',
    labelAdjust: 'Ajustar',
    badgeChair: 'Assento',
    badgeDesk: 'Superfície',
    badgeMonitor: 'Tela',
    tipScreenLow: 'Levante seu monitor',
    tipScreenHigh: 'Abaixe seu monitor',
    tipDeskLow: 'Levante sua mesa',
    tipDeskHigh: 'Abaixe sua mesa',
    tipChairLow: 'Levante sua cadeira',
    tipChairHigh: 'Abaixe sua cadeira',
    tipDistance: 'Mova a tela para a distância de um braço',
  },
};