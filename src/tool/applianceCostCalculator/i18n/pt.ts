import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ApplianceCostCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-custo-eletrodomesticos';
const title = 'Calculadora de Custo por Ciclo de Eletrodomésticos de Casa';
const description =
  'Calcule o custo real de cada carga da sua máquina de lavar, máquina de lavar louça e secadora. Descubra exatamente quanto custa em eletricidade, água e detergente cada ciclo e quanto pode poupar mudando para o modo Eco.';

const faqData = [
  {
    question: 'Quanto custa um ciclo de máquina de lavar?',
    answer:
      'Um ciclo Eco típico a 40°C consome cerca de 0,45 kWh de eletricidade e 40 litros de água. Com preços europeus médios, custa aproximadamente 0,10 a 0,15 euros por carga. Um ciclo intensivo a 60°C pode ultrapassar 1,2 kWh e 70 litros, elevando o custo acima de 0,30 euros.',
  },
  {
    question: 'É mais barato usar a máquina de lavar louça à noite?',
    answer:
      'Se o seu fornecedor de energia elétrica utiliza tarifas horárias, usar a máquina de lavar louça fora das horas de ponta pode reduzir o custo energético em 30 por cento ou mais. As horas de ponta são tipicamente as manhãs e tardes de dias úteis.',
  },
  {
    question: 'A secadora consome muita eletricidade?',
    answer:
      'Sim. A secadora é um dos eletrodomésticos mais intensivos em energia. Uma carga completa pode consumir entre 2,5 e 3,5 kWh, custando de 0,50 a 0,80 euros por ciclo. Usar uma secadora com bomba de calor ou estender a roupa ao ar livre pode reduzir este custo em 60 a 80 por cento.',
  },
  {
    question: 'Quanta água usa uma máquina de lavar louça?',
    answer:
      'As máquinas de lavar louça modernas são surpreendentemente eficientes. Um ciclo Eco padrão usa apenas 8 a 12 litros de água por carga, enquanto um programa intensivo pode usar 14 a 16 litros. Isto é muito menos que lavar os mesmos pratos à mão debaixo da torneira, que consome tipicamente 40 a 60 litros.',
  },
  {
    question: 'Qual é a hora mais barata para usar eletrodomésticos?',
    answer:
      'Com tarifas horárias, os períodos mais baratos são geralmente a última hora da noite, muito cedo de manhã e durante os fins de semana. Estas faixas horárias podem ser 30 a 50 por cento mais baratas do que as horas de ponta de dias úteis.',
  },
  {
    question: 'Mudar para o modo Eco realmente poupa dinheiro?',
    answer:
      'Com certeza. Os modos Eco usam temperaturas mais baixas, fases de aquecimento mais curtas e menos água. Ao longo de um ano inteiro, mudar de Normal para Eco na máquina de lavar e na máquina de lavar louça pode poupar de 50 a 100 euros combinando eletricidade e água.',
  },
];

const howToData = [
  {
    name: 'Selecione o seu eletrodoméstico',
    text: 'Toque no ícone da máquina de lavar, máquina de lavar louça ou secadora na parte superior da calculadora. Cada eletrodoméstico tem perfis de consumo energético e de água diferentes.',
  },
  {
    name: 'Escolha um tipo de ciclo',
    text: 'Use o seletor Eco, Normal ou Intensivo para definir o programa de lavagem. Eco usa menos energia e água. Intensivo consome o máximo.',
  },
  {
    name: 'Insira os seus preços locais',
    text: 'Digite o seu preço da eletricidade por kWh e o seu preço da água por litro. Pode encontrá-los na sua fatura ou no site do seu fornecedor.',
  },
  {
    name: 'Defina a frequência de uso',
    text: 'Indique quantos ciclos faz por semana. Isto permite à calculadora estimar o seu custo anual e as potenciais poupanças anuais.',
  },
  {
    name: 'Escolha a hora de utilização',
    text: 'Selecione a hora em que planeja usar o eletrodoméstico. As horas de ponta são destacadas a vermelho. As horas fora de ponta são verdes e mais baratas se tiver uma tarifa horária.',
  },
  {
    name: 'Ative os custos do detergente',
    text: 'Ative o interruptor do detergente se quiser que o recibo inclua uma estimativa para pó, líquido ou cápsulas por ciclo.',
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
      html: 'A maioria das pessoas não faz ideia de quanto custa realmente um ciclo de máquina de lavar. Veem a fatura trimestral e assumem que os eletrodomésticos são baratos. A realidade é que uma família que faz cinco cargas por semana pode gastar mais de 200 euros por ano só para lavar. Adicione a máquina de lavar louça três vezes por semana e a secadora duas vezes, e o total ultrapassa os 500 euros anuais. Esta calculadora detalha cada cêntimo para otimizar os seus hábitos.',
    },
    {
      type: 'stats',
      items: [
        { value: '0,45', label: 'kWh Lavagem Eco', icon: 'mdi:washing-machine' },
        { value: '40L', label: 'Água Lavagem Eco', icon: 'mdi:water' },
        { value: '30%', label: 'Sobretaxa Ponta', icon: 'mdi:lightning-bolt' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Porque as Pequenas Alterações se Multiplicam',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um único grau de temperatura ou poucos litros de água parecem insignificantes num ciclo. Mas ao longo de 250 ciclos por ano, essas pequenas diferenças acumulam-se em dinheiro sério. Baixar de 60°C para 40°C reduz o consumo energético em cerca de 40 por cento por carga. Mudar de Normal para Eco na máquina de lavar louça poupa cerca de 3 litros de água e 0,3 kWh de cada vez. Não são ganhos marginais. São a forma mais rápida de reduzir a fatura sem comprar eletrodomésticos novos.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Ciclo Intensivo',
          description: 'Máximo calor e água para cargas muito sujas.',
          icon: 'mdi:alert',
          points: ['De 1,2 a 3,5 kWh por carga', '70 litros para lavar', 'Aplica sobretaxa hora de ponta', 'Maior custo anual'],
        },
        {
          title: 'Ciclo Eco',
          description: 'Temperatura mais baixa, duração otimizada, água mínima.',
          icon: 'mdi:check-circle',
          points: ['De 0,45 a 1,5 kWh por carga', 'Apenas 8 a 40 litros', 'Timing fora de ponta possível', 'Menor custo anual'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Auditoria Rápida de Eletrodomésticos',
      icon: 'mdi:clipboard-check',
      badge: 'Ação',
      html: '<p style="margin:0">Use a máquina de lavar apenas com carga completa. Use o programa Eco para sujidade normal. Programe a máquina de lavar louça para iniciar depois das 22:00 se tiver uma tarifa horária. Limpe o filtro da secadora após cada ciclo para manter a eficiência. Estenda a roupa ao ar livre ou num estendal sempre que o tempo o permitir.</p>',
    },
    {
      type: 'title',
      text: 'Tarifa Horária e Preços de Ponta',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Muitos fornecedores de energia elétrica agora cobram tarifas diferentes consoante a hora do dia. Os períodos de ponta, normalmente manhãs e tardes de dias úteis, podem custar 30 a 50 por cento mais do que os períodos fora de ponta. Uma carga às 20:00 pode custar 0,18 euros, enquanto a mesma carga às 02:00 custa apenas 0,12. Ao longo de um ano, programar corretamente os eletrodomésticos pode poupar 50 a 100 euros sem mudar mais nada. Esta calculadora destaca as horas de ponta a vermelho e as fora de ponta a verde para planear.',
    },
    {
      type: 'summary',
      title: 'Como Reduzir os Custos dos Eletrodomésticos',
      items: [
        'Use esta calculadora para conhecer o custo real por ciclo dos seus eletrodomésticos.',
        'Mude para o modo Eco sempre que possível para poupar até 40 por cento de energia.',
        'Faça cargas completas em vez de lavagens parciais para maximizar a eficiência.',
        'Adie os ciclos para horas fora de ponta se a sua tarifa prevê preços horários.',
        'Estenda a roupa ao ar livre em vez de usar a secadora para eliminar completamente esse custo.',
        'Limpe os filtros e descalcifique regularmente para manter os eletrodomésticos na eficiência nominal.',
      ],
    },
  ],
  ui: {
    labelAppliance: 'Eletrodoméstico',
    applianceWasher: 'Máquina de Lavar',
    applianceDishwasher: 'Máquina de Lavar Louça',
    applianceDryer: 'Secadora',
    labelCycle: 'Programa',
    cycleEco: 'Eco',
    cycleNormal: 'Normal',
    cycleIntensive: 'Intensivo',
    labelElectricityPrice: 'Preço Eletricidade',
    unitPriceKwh: '€/kWh',
    labelWaterPrice: 'Preço Água',
    unitPriceLiter: '€/L',
    labelDetergent: 'Detergente',
    labelDetergentToggle: 'Incluir custo detergente',
    labelHour: 'Hora Prevista',
    peakBadge: 'Tarifa de ponta ativa',
    offPeakBadge: 'Tarifa fora de ponta',
    receiptTitle: 'Detalhe de Custos',
    receiptElectricity: 'Eletricidade',
    receiptWater: 'Água',
    receiptDetergent: 'Detergente',
    receiptTotal: 'Total por ciclo',
    receiptPerYear: 'Estimado anual',
    comparisonTitle: 'Mudança Inteligente',
    comparisonText: 'Mudar de Normal para Eco poupa dinheiro em cada carga.',
    comparisonSavings: 'Poupança anual',
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
