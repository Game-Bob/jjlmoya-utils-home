import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-custo-eletrodomesticos';
const title = 'Calculadora de Custo por Ciclo de Eletrodomesticos de Casa';
const description =
  'Calcule o custo real de cada carga da sua maquina de lavar, maquina de lavar louca e secadora. Descubra exatamente quanto custa em eletricidade, agua e detergente cada ciclo e quanto pode poupar mudando para o modo Eco.';

const faqData = [
  {
    question: 'Quanto custa um ciclo de maquina de lavar?',
    answer:
      'Um ciclo Eco tipico a 40C consome cerca de 0,45 kWh de eletricidade e 40 litros de agua. Com precos europeus medios, custa aproximadamente 0,10 a 0,15 euros por carga. Um ciclo intensivo a 60C pode ultrapassar 1,2 kWh e 70 litros, elevando o custo acima de 0,30 euros.',
  },
  {
    question: 'E mais barato usar a maquina de lavar louca a noite?',
    answer:
      'Se o seu fornecedor de energia eletrica utiliza tarifas horarias, usar a maquina de lavar louca fora das horas de ponta pode reduzir o custo energetico em 30 por cento ou mais. As horas de ponta sao tipicamente as manhas e tardes de dias uteis.',
  },
  {
    question: 'A secadora consome muita eletricidade?',
    answer:
      'Sim. A secadora e um dos eletrodomesticos mais intensivos em energia. Uma carga completa pode consumir entre 2,5 e 3,5 kWh, custando de 0,50 a 0,80 euros por ciclo. Usar uma secadora com bomba de calor ou estender a roupa ao ar livre pode reduzir este custo em 60 a 80 por cento.',
  },
  {
    question: 'Quanta agua usa uma maquina de lavar louca?',
    answer:
      'As maquinas de lavar louca modernas sao surpreendentemente eficientes. Um ciclo Eco padrao usa apenas 8 a 12 litros de agua por carga, enquanto um programa intensivo pode usar 14 a 16 litros. Isto e muito menos que lavar os mesmos pratos a mao debaixo da torneira, que consome tipicamente 40 a 60 litros.',
  },
  {
    question: 'Qual e a hora mais barata para usar eletrodomesticos?',
    answer:
      'Com tarifas horarias, os periodos mais baratos sao geralmente a ultima hora da noite, muito cedo de manha e durante os fins de semana. Estas faixas horarias podem ser 30 a 50 por cento mais baratas do que as horas de ponta de dias uteis.',
  },
  {
    question: 'Mudar para o modo Eco realmente poupa dinheiro?',
    answer:
      'Com certeza. Os modos Eco usam temperaturas mais baixas, fases de aquecimento mais curtas e menos agua. Ao longo de um ano inteiro, mudar de Normal para Eco na maquina de lavar e na maquina de lavar louca pode poupar de 50 a 100 euros combinando eletricidade e agua.',
  },
];

const howToData = [
  {
    name: 'Selecione o seu eletrodomestico',
    text: 'Toque no icone da maquina de lavar, maquina de lavar louca ou secadora na parte superior da calculadora. Cada eletrodomestico tem perfis de consumo energetico e de agua diferentes.',
  },
  {
    name: 'Escolha um tipo de ciclo',
    text: 'Use o seletor Eco, Normal ou Intensivo para definir o programa de lavagem. Eco usa menos energia e agua. Intensivo consome o maximo.',
  },
  {
    name: 'Insira os seus precos locais',
    text: 'Digite o seu preco da eletricidade por kWh e o seu preco da agua por litro. Pode encontra los na sua fatura ou no site do seu fornecedor.',
  },
  {
    name: 'Defina a frequencia de uso',
    text: 'Indique quantos ciclos faz por semana. Isto permite a calculadora estimar o seu custo anual e as potenciais poupancas anuais.',
  },
  {
    name: 'Escolha a hora de utilizacao',
    text: 'Selecione a hora em que planeja usar o eletrodomestico. As horas de ponta sao destacadas a vermelho. As horas fora de ponta sao verdes e mais baratas se tiver uma tarifa horaria.',
  },
  {
    name: 'Ative os custos do detergente',
    text: 'Ative o interruptor do detergente se quiser que o recibo inclua uma estimativa para po, liquido ou capsulas por ciclo.',
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

export const content: ToolLocaleContent<ApplianceCostCalculatorUI> = {
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
      text: 'O Custo Oculto de Cada Carga',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A maioria das pessoas nao faz ideia de quanto custa realmente um ciclo de maquina de lavar. Veem a fatura trimestral e assumem que os eletrodomesticos sao baratos. A realidade e que uma familia que faz cinco cargas por semana pode gastar mais de 200 euros por ano so para lavar. Adicione a maquina de lavar louca tres vezes por semana e a secadora duas vezes, e o total ultrapassa os 500 euros anuais. Esta calculadora detalha cada centimo para otimizar os seus habitos.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Lavagem Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Agua Lavagem Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Sobretaxa Ponta', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Porque as Pequenas Alteracoes se Multiplicam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um unico grau de temperatura ou poucos litros de agua parecem insignificantes num ciclo. Mas ao longo de 250 ciclos por ano, essas pequenas diferencas acumulam se em dinheiro serio. Baixar de 60C para 40C reduz o consumo energetico em cerca de 40 por cento por carga. Mudar de Normal para Eco na maquina de lavar louca poupa cerca de 3 litros de agua e 0,3 kWh cada vez. Nao sao ganhos marginais. Sao a forma mais rapida de reduzir a fatura sem comprar eletrodomesticos novos.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ciclo Intensivo',
          description: 'Maximo calor e agua para cargas muito sujas.',
          icon: 'mdi:alert',
          points: ['De 1,2 a 3,5 kWh por carga', '70 litros para lavar', 'Aplica sobretaxa hora de ponta', 'Maior custo anual'],
        },
        {
          title: 'Ciclo Eco',
          description: 'Temperatura mais baixa, duracao otimizada, agua minima.',
          icon: 'mdi:check-circle',
          points: ['De 0,45 a 1,5 kWh por carga', 'Apenas 8 a 40 litros', 'Timing fora de ponta possivel', 'Menor custo anual'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Auditoria Rapida de Eletrodomesticos',
      icon: 'mdi:clipboard-check',
      badge: 'Acao',
      html: '<p style="margin:0">Use a maquina de lavar apenas com carga completa. Use o programa Eco para sujidade normal. Programe a maquina de lavar louca para iniciar depois das 22:00 se tiver uma tarifa horaria. Limpe o filtro da secadora apos cada ciclo para manter a eficiencia. Estenda a roupa ao ar livre ou num estendal sempre que o tempo o permitir.</p>',
    },
    {
      type: 'title',
      text: 'Tarifa Horaria e Precos de Ponta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos fornecedores de energia eletrica agora cobram tarifas diferentes consoante a hora do dia. Os periodos de ponta, normalmente manhas e tardes de dias uteis, podem custar 30 a 50 por cento mais do que os periodos fora de ponta. Uma carga as 20:00 pode custar 0,18 euros, enquanto a mesma carga as 02:00 custa apenas 0,12. Ao longo de um ano, programar corretamente os eletrodomesticos pode poupar 50 a 100 euros sem mudar mais nada. Esta calculadora destaca as horas de ponta a vermelho e as fora de ponta a verde para planear.',
    },
    {
      type: 'summary',
      title: 'Como Reduzir os Custos dos Eletrodomesticos',
      items: [
        'Use esta calculadora para conhecer o custo real por ciclo dos seus eletrodomesticos.',
        'Mude para o modo Eco sempre que possivel para poupar ate 40 por cento de energia.',
        'Faca cargas completas em vez de lavagens parciais para maximizar a eficiencia.',
        'Adie os ciclos para horas fora de ponta se a sua tarifa preve precos horarios.',
        'Estenda a roupa ao ar livre em vez de usar a secadora para eliminar completamente esse custo.',
        'Limpe os filtros e descalcifique regularmente para manter os eletrodomesticos na eficiencia nominal.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Eletrodomestico',
    applianceWasher: 'Maquina de Lavar',
    applianceDishwasher: 'Maquina de Lavar Louca',
    applianceDryer: 'Secadora',
    labelCycle: 'Programa',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensivo',
    labelElectricityPrice: 'Preco Eletricidade',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Preco Agua',
    unitPriceLiter: '€/L',
    labelDetergent: 'Detergente',
    labelDetergentToggle: 'Incluir custo detergente',
    labelHour: 'Hora Prevista',
    peakBadge: 'Tarifa de ponta ativa',
    offPeakBadge: 'Tarifa fora de ponta',
    receiptTitle: 'Detalhe de Custos',
    receiptElectricity: 'Eletricidade',
    receiptWater: 'Agua',
    receiptDetergent: 'Detergente',
    receiptTotal: 'Total por ciclo',
    receiptPerYear: 'Estimado anual',
    comparisonTitle: 'Mudanca Inteligente',
    comparisonText: 'Mudar de Normal para Eco poupa dinheiro em cada carga.',
    comparisonSavings: 'Poupanca anual',
    comparisonMonths: 'meses de detergente',
    badgePeak: 'Ponta',
    badgeOffPeak: 'Fora Ponta',
    unitKwh: 'kWh',
    unitLiters: 'L',
    unitCycles: 'ano',
    labelCyclesPerWeek: 'Ciclos por semana',
    currencySign: '€',
    labelCurrency: 'Moeda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
  },
};
