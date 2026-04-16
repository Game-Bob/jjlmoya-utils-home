import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'comparador-aquecimento-gas-aerotermia-ar-condicionado';
const title = 'Comparador Gás vs. Aerotermia vs. Ar Condicionado';
const description = 'Calcule quanto pode poupar ao trocar a sua caldeira a gás por aerotermia ou bomba de calor. Comparativo real de consumo energético e eficiência para a sua casa.';

const faqData = [
  {
    question: 'O que é mais barato: aerotermia ou gás natural?',
    answer: 'A nível de funcionamento mensal, a aerotermia é significativamente mais barata que o gás natural. Graças à sua eficiência de 400% (COP de 4), o custo por cada kWh de calor entregue é geralmente 30% a 50% inferior ao do gás, apesar de o preço do kWh elétrico ser mais elevado.',
  },
  {
    question: 'Qual a diferença entre aerotermia e uma bomba de calor normal?',
    answer: 'Tecnicamente, ambas são bombas de calor. A diferença principal reside no meio ao qual entregam o calor: a aerotermia é habitualmente "ar-água" (aquece a água dos radiadores ou do piso radiante), enquanto a bomba de calor convencional é "ar-ar" (aquece diretamente o ar através de equipamentos de expansão direta, como splits).',
  },
  {
    question: 'É possível instalar aerotermia num apartamento com radiadores antigos?',
    answer: 'Sim, é possível instalar aerotermia com radiadores convencionais utilizando equipamentos de "alta temperatura". No entanto, para obter a máxima poupança possível, o ideal é combiná-la com piso radiante ou radiadores de baixa temperatura.',
  },
  {
    question: 'Quantos anos demora a amortizar um equipamento de aerotermia?',
    answer: 'Dependendo do consumo da habitação e da existência de subsídios, o tempo de amortização situa-se geralmente entre os 5 e os 8 anos. Caso se disponha de painéis solares fotovoltaicos, este período pode ser reduzido drasticamente.',
  },
];

const howToData = [
  {
    name: 'Superfície da casa',
    text: 'Introduza os metros quadrados úteis da sua habitação para estimar a procura térmica anual.',
  },
  {
    name: 'Preços de energia',
    text: 'Ajuste os preços do Gás e da Eletricidade de acordo com a sua fatura real para maior precisão.',
  },
  {
    name: 'Ver resultados',
    text: 'Compare os três sistemas lado a lado e descubra o vencedor em eficiência e custo anual.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia e Fontes',
  bibliography: [
    {
      name: 'ADENE: Agência para a Energia',
      url: 'https://www.adene.pt/',
    },
    {
      name: 'Direção-Geral de Energia e Geologia (DGEG)',
      url: 'https://www.dgeg.gov.pt/',
    },
    {
      name: 'Portal Poupa Energia',
      url: 'https://www.poupaenergia.pt/',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Chaves para escolher o seu aquecimento',
      items: [
        'A <strong>aerotermia</strong> é até 400% mais eficiente que o gás.',
        'O <strong>isolamento</strong> reduz a sua fatura mais do que qualquer caldeira.',
        'A <strong>amortização</strong> de sistemas elétricos ronda os 6-8 anos.',
        'Combine <strong>painéis solares</strong> para aquecimento quase gratuito.',
      ],
    },
    {
      type: 'title',
      text: 'Comparativa de Consumo: Gás vs. Aerotermia vs. Ar Condicionado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Escolher o sistema de climatização adequado para o lar é uma das decisões financeiras e de conforto mais importantes que podemos tomar. Num contexto de preços energéticos voláteis e de uma crescente preocupação com a sustentabilidade, saber que sistema é mais eficiente — e qual nos fará poupar mais ao final do mês — é fundamental.',
    },
    {
      type: 'paragraph',
      html: 'Historicamente, o gás natural foi a escolha predominante. No entanto, a irrupção da <strong>aerotermia</strong> e a melhoria tecnológica das <strong>bombas de calor (ar-ar)</strong> mudaram as regras do jogo. A nossa calculadora ajuda-o a visualizar o custo operacional anual para que decida com dados reais na mão.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Eficiência Aerotermia',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'top', positive: true },
        },
        {
          label: 'Poupança Anual Média',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'estimado', positive: true },
        },
        {
          label: 'Vida Útil Equipamentos',
          value: '20 anos',
          icon: 'mdi:calendar-check',
          trend: { value: 'padrão', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. A Caldeira de Gás Natural: O padrão tradicional',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'O aquecimento por gás natural utiliza uma caldeira que queima combustível para aquecer água, que depois circula por radiadores ou piso radiante.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendimento:</strong> As caldeiras de condensação modernas têm um rendimento próximo dos 100%.',
        '<strong>Vantagens:</strong> Instalação muito generalizada, calor rápido e homogéneo, e um custo por kWh habitualmente competitivo.',
        '<strong>Desvantagens:</strong> Dependência de combustíveis fósseis, taxas fixas de gás e emissões de CO2 para a atmosfera.',
      ],
    },
    {
      type: 'title',
      text: '2. Aerotermia: A eficiência extrema (Ar-Água)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A aerotermia é uma tecnologia que extrai a energia térmica do ar exterior (mesmo a temperaturas negativas) e a transfere para o interior da habitação para aquecer água (piso radiante, radiadores de baixa temperatura ou águas quentes sanitárias).',
    },
    {
      type: 'list',
      items: [
        '<strong>Eficiência (COP):</strong> Um sistema de aerotermia tem frequentemente um COP de 4. Isto significa que por cada 1 kWh de eletricidade consumido, entrega 4 kWh de calor à casa.',
        '<strong>Vantagens:</strong> Sustentabilidade total se combinada com painéis solares, um único equipamento para aquecimento, arrefecimento e água quente, e o menor custo operacional do mercado.',
        '<strong>Desvantagens:</strong> Investimento inicial elevado (embora sendo amortizado em 5-8 anos) e necessidade de espaço para a unidade exterior.',
      ],
    },
    {
      type: 'tip',
      title: 'Conselho de Poupança',
      html: 'A aerotermia brilha especialmente quando combinada com piso radiante, já que a água apenas necessita de ser aquecida a cerca de 35°C, ao contrário dos 60-70°C dos radiadores convencionais.',
    },
    {
      type: 'proscons',
      title: 'Aerotermia vs Gás Natural',
      proTitle: 'Porquê Aerotermia?',
      conTitle: 'Porquê Gás?',
      items: [
        { pro: 'Eficiência imbatível (COP 4+)', con: 'Instalação muito mais económica' },
        { pro: 'Independência de fósseis', con: 'Calor instantâneo de alta potência' },
        { pro: 'Aquecimento e Arrefecimento', con: 'Compatibilidade com radiadores antigos' },
        { pro: 'Ideal com painéis solares', con: 'Sem necessidade de unidades exteriores' },
      ],
    },
    {
      type: 'title',
      text: '3. Bomba de Calor Ar-Ar (Ar Condicionado)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'É o sistema que vulgarmente conhecemos como ar condicionado com modo de calor. Utiliza o mesmo ciclo termodinâmico que a aerotermia, mas aquece diretamente o ar, não a água. É uma solução muito comum em zonas com climas suaves ou como apoio. A sua eficiência (SCOP) situa-se geralmente entre 3 e 3.5.',
    },
    {
      type: 'title',
      text: 'Entendendo a fórmula de cálculo',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Para comparar estes sistemas de forma justa, devemos converter todos os consumos para uma unidade comum: o custo por kWh útil entregue. A fórmula que utiliza a nossa ferramenta é:',
    },
    {
      type: 'code',
      code: 'Custo Anual = (Procura Térmica Habitação / Eficiência do Sistema) × Preço Energia',
      ariaLabel: 'Fórmula de cálculo de custo anual',
    },
    {
      type: 'paragraph',
      html: 'Onde:',
    },
    {
      type: 'list',
      items: [
        '<strong>Procura Térmica:</strong> Os kWh de calor que a sua casa necessita por ano (depende do isolamento e m2).',
        '<strong>Eficiência:</strong> 0.95 para Gás, 4.0 para Aerotermia e 3.2 para Ar Condicionado.',
        '<strong>Preço Energia:</strong> O custo por kWh somando impostos e taxas.',
      ],
    },
    {
      type: 'card',
      title: 'Exemplo Real: Habitação de 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Imaginemos uma casa que necessita de 7.000 kWh de aquecimento por ano:</p><ul><li><strong>Gás (0.08 €/kWh):</strong> (7.000 / 0.95) * 0.08 = 589 €/ano</li><li><strong>Aerotermia (0.18 €/kWh):</strong> (7.000 / 4) * 0.18 = 315 €/ano (Poupa 46%)</li><li><strong>Ar Condicionado (0.18 €/kWh):</strong> (7.000 / 3.2) * 0.18 = 393 €/ano</li></ul>',
    },
    {
      type: 'title',
      text: 'Quando compensa cada sistema?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Não há uma resposta única, já que depende da sua localização geográfica e do tipo de habitação:',
    },
    {
      type: 'paragraph',
      html: '<strong>Moradias / Construção Nova:</strong> A aerotermia é quase obrigatória. A normativa atual exige uma elevada percentagem de energia renovável, e a aerotermia é a forma mais simples de cumprir e poupar desde o primeiro dia.',
    },
    {
      type: 'paragraph',
      html: '<strong>Apartamentos Pequenos em Zonas Quentes:</strong> A bomba de calor ar-ar (split) é imbatível pelo seu baixo custo de instalação. Numa zona de invernos curtos, a diferença de poupança operacional não justifica o investimento inicial em aerotermia.',
    },
    {
      type: 'paragraph',
      html: '<strong>Reformas com Gás:</strong> Se o edifício já tem ligação de gás e radiadores antigos, mudar para uma caldeira de condensação é o mais barato inicialmente. No entanto, se vai reformar o chão ou janelas, considerar o salto para a eletricidade é um investimento de futuro.',
    },
    {
      type: 'title',
      text: 'O impacto do isolamento',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nenhum sistema de aquecimento é eficiente se a casa tiver fugas. Antes de investir seriamente num sistema de climatização, reveja as janelas e o isolamento das paredes. Um bom isolamento pode reduzir a procura térmica para metade.',
    },
    {
      type: 'title',
      text: 'Mitos sobre a Aerotermia e o Consumo',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"A aerotermia não funciona com frio intenso":</strong> Falso. Os equipamentos atuais mantêm bons rendimentos até aos -15°C.',
        '<strong>"A bomba de calor seca o ambiente":</strong> Apenas se for ar-ar. A aerotermia por piso radiante funciona como um aquecimento central convencional, mas com maior conforto.',
        '<strong>"A eletricidade é muito cara e não compensa":</strong> Embora a eletricidade seja mais cara que o gás por kWh, a eficiência de 400% compensa essa diferença sobejamente.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Sabia que?',
      icon: 'mdi:lightbulb-on',
      badge: 'Dado',
      html: '<p>O COP (Coefficient of Performance) varia segundo a temperatura exterior. Por isso, em climas extremamente frios o rendimento desce ligeiramente, embora continue a ser muito superior a qualquer aquecedor elétrico direto ou caldeira.</p>',
    },
    {
      type: 'title',
      text: 'Conclusão: O futuro é elétrico',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A tendência na Europa é clara: a <strong>descarbonização do lar</strong>. O gás natural tem data de validade prevista. A combinação de painéis solares e aerotermia é, hoje em dia, a solução ideal: energia do sol convertida em conforto para a sua casa com eficiência inigualável.',
    },
    {
      type: 'paragraph',
      html: 'Use a nossa calculadora para comparar as suas faturas atuais com o que poderia estar a pagar. Por vezes, a maior poupança não está numa janela bem fechada, mas num sistema de aquecimento atualizado.',
    },
  ],
  ui: {
    titleVivienda: '1. Dados da habitação',
    helperVivienda: 'Configure as características do seu lar',
    labelM2: 'Superfície Total',
    helperM2: 'Metros quadrados da sua habitação.',
    labelAislamiento: 'Nível de Isolamento',
    helperAislamiento: 'Quão bem a sua casa retém o calor?',
    optExcelent: 'Excelente (Nova / Passivhaus)',
    optMedium: 'Médio (Vidro duplo / Isolamento normal)',
    optPoor: 'Pobre (Antiga / Sem isolamento nas paredes)',
    titleCoste: '2. Custo da energia',
    descCoste: 'Procure na sua última fatura o "Preço de Energia" ou "Custo kWh".',
    labelGasPrice: 'Custo do Gás',
    helperGasPrice: 'Preço por cada kWh de gás consumido.',
    labelElecPrice: 'Custo da Eletricidade',
    helperElecPrice: 'Prezzo por cada kWh de luz consumido.',
    titleComparison: '3. Comparativa de Consumo Anual',
    descComparison: 'Estimativa baseada no rendimento técnico de cada equipamento.',
    systemGas: 'Caldeira a Gás',
    systemAero: 'Aerotermia',
    systemAir: 'Bomba de Calor (Split)',
    labelAnnualCost: 'Gasto em Aquecimento',
    labelEfficiency: 'Eficiência',
    labelSource: 'Fonte',
    labelEnergy: 'Energia',
    labelInstallation: 'Instalação',
    valGasSource: 'Gás Natural',
    valAeroEnergy: 'Renovável + Luz',
    valAirInstall: 'Ar-Ar',
    winnerBadge: 'Mais Eficiente',
    unitCurrency: '€',
  },
};
