import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HumidityCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-umidade';
const title = 'Calculadora de umidade e estimativa de tempo de funcionamento do desumidificador';
const description =
  'Calcule quanta água seu desumidificador deve extrair para levar um cômodo úmido a um nível saudável de umidade. Veja o tempo de funcionamento estimado, alertas de risco de mofo e visuais de zona de conforto em uma única ferramenta interativa.';

const faqData = [
  {
    question: 'Quanto tempo um desumidificador deve funcionar por dia?',
    answer:
      'Em um cômodo moderadamente úmido, um desumidificador doméstico padrão normalmente precisa funcionar entre 8 e 12 horas por dia para manter 50 por cento de umidade relativa. Em condições muito úmidas ou após danos por água, pode ser necessário um funcionamento contínuo de 24 a 48 horas para atingir um nível base de secura.',
  },
  {
    question: 'Qual nível de umidade interna previne o mofo?',
    answer:
      'O crescimento de mofo é inibido quando a umidade relativa interna é mantida abaixo de 60 por cento. A zona de conforto ideal para a saúde humana e a preservação de edifícios está entre 40 e 50 por cento de umidade relativa. Níveis acima de 70 por cento criam um ambiente de alto risco para que os esporos de mofo germinem em 24 a 48 horas.',
  },
  {
    question: 'Quanta água o ar pode reter?',
    answer:
      'A quantidade de vapor d\'água que o ar pode reter depende da temperatura. A 20 graus Celsius, o ar saturado contém cerca de 17 gramas de água por metro cúbico. A 25 graus Celsius, isso sobe para aproximadamente 23 gramas por metro cúbico. Um cômodo de 30 metros quadrados a 25 graus Celsius e 70 por cento de umidade contém aproximadamente 8 litros de água invisível no ar.',
  },
  {
    question: 'A temperatura afeta a eficiência do desumidificador?',
    answer:
      'Sim. Os desumidificadores baseados em compressor funcionam melhor acima de 18 graus Celsius. Abaixo de 15 graus Celsius, seu desempenho cai porque as serpentinas do evaporador podem embaçar. Os desumidificadores dessecantes são mais adequados para espaços frios como garagens ou porões porque usam um processo de secagem química em vez da condensação.',
  },
  {
    question: 'Qual tamanho de desumidificador eu preciso?',
    answer:
      'Para um cômodo moderadamente úmido de até 50 metros quadrados, uma unidade de 10 a 12 litros por dia geralmente é suficiente. Para cômodos muito úmidos ou espaços acima de 50 metros quadrados, escolha um modelo de 20 litros por dia. Após uma inundação ou umidade severa, uma unidade industrial de 30 litros por dia restaurará as condições mais rapidamente.',
  },
  {
    question: 'Um desumidificador pode secar roupas?',
    answer:
      'Sim. Um desumidificador com modo de secagem de roupas pode secar roupas em ambientes internos de forma eficiente enquanto extrai umidade do ar circundante. Ele usa menos energia do que uma secadora de roupas e previne a condensação em janelas e paredes. Espere tempos de secagem semelhantes à secagem ao ar livre em tempo quente.',
  },
];

const howToData = [
  {
    name: 'Inserir tamanho do cômodo',
    text: 'Digite a área do piso do cômodo em metros quadrados. A calculadora assume uma altura padrão de teto de 2,5 metros para estimar o volume total de ar.',
  },
  {
    name: 'Definir temperatura',
    text: 'Insira a temperatura atual do cômodo em graus Celsius. O ar mais quente retém mais umidade, então a temperatura afeta diretamente quanta água deve ser removida.',
  },
  {
    name: 'Selecionar umidade atual',
    text: 'Use o mostrador de conforto ou a entrada numérica para definir a porcentagem de umidade relativa atual. Valores acima de 60 por cento são destacados em tons de alerta.',
  },
  {
    name: 'Escolher umidade desejada',
    text: 'Defina sua umidade relativa desejada. 50 por cento é recomendado para conforto e prevenção de mofo. 40 por cento é ideal para pessoas com alergias.',
  },
  {
    name: 'Inserir capacidade do desumidificador',
    text: 'Insira a taxa de extração da sua máquina em litros por dia. Isso geralmente está impresso no rótulo frontal ou no manual do usuário.',
  },
  {
    name: 'Revisar resultados',
    text: 'Leia a simulação do tanque de extração de água, a estimativa de tempo de funcionamento e o banner de risco de mofo para decidir por quanto tempo executar seu aparelho.',
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

export const content: ToolLocaleContent<HumidityCalculatorUI> = {
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
      text: 'A água escondida em suas paredes',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos proprietários de imóveis nunca percebe que o ar úmido não é apenas desconfortável, é caro e perigoso. Um único cômodo úmido pode conter vários litros de vapor d\'água invisível. Com o tempo, essa umidade condensa em superfícies frias, alimenta colônias de mofo e degrada o reboco, a tinta e a madeira. Entender exatamente quanta água deve ser removida e quanto tempo leva é o primeiro passo para proteger sua casa e sua saúde.',
    },
    {
      type: 'stats',
      items: [
        { value: '50%', label: 'Umidade interna ideal', icon: 'mdi:water-percent' },
        { value: '8h', label: 'Tempo médio de funcionamento diário', icon: 'mdi:timer-outline' },
        { value: '70%', label: 'Limite de risco de mofo', icon: 'mdi:alert-outline' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por que a umidade relativa importa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A umidade relativa não é a quantidade de água no ar, é a porcentagem de água que o ar está retendo em relação ao máximo que poderia reter naquela temperatura. O ar quente é como uma esponja maior. A 30 graus Celsius, o ar pode reter quase o dobro de umidade do que a 15 graus Celsius. Por isso um cômodo pode parecer pegajoso mesmo depois de abrir as janelas. A umidade ainda está lá, apenas menos visível.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Umidade alta',
          description: 'Acima de 60 por cento de umidade relativa. Risco de mofo, ácaros e danos por condensação.',
          icon: 'mdi:alert',
          points: ['Condensação em janelas e paredes', 'Odores de mofo e crescimento microbiano', 'Irritação respiratória aumentada', 'Contas de aquecimento mais altas devido à condutividade térmica do ar úmido'],
        },
        {
          title: 'Umidade ideal',
          description: 'Entre 40 e 50 por cento de umidade relativa. Confortável, saudável e energeticamente eficiente.',
          icon: 'mdi:check-circle',
          points: ['Sem condensação em superfícies frias', 'Os esporos de mofo permanecem dormentes', 'Conforto da pele e das vias respiratórias', 'Preservação de móveis e madeira'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Auditoria rápida de umidade',
      icon: 'mdi:clipboard-check',
      badge: 'Ação',
      html: '<p style="margin:0">Verifique as janelas para condensação toda manhã. Se gotículas aparecerem regularmente, sua umidade está muito alta. Faça funcionar um desumidificador por 12 horas diariamente até a condensação parar. Mova a unidade para o cômodo mais úmido, geralmente a cozinha, o banheiro ou o porão. Esvazie o tanque diariamente e limpe o filtro a cada duas semanas.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionar corretamente seu desumidificador',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um erro comum é comprar um desumidificador muito pequeno para o espaço. Uma máquina de 10 litros por dia em um porão úmido de 60 metros quadrados funcionará continuamente sem nunca atingir a umidade alvo. Use esta calculadora para ver o volume exato de extração que seu cômodo requer. Se a estimativa de tempo de funcionamento exceder 20 horas por dia, você precisa de uma unidade de maior capacidade ou de uma melhor ventilação.',
    },
    {
      type: 'summary',
      title: 'Como manter sua casa seca',
      items: [
        'Use esta calculadora para determinar a extração exata de água necessária para qualquer cômodo.',
        'Mantenha a umidade relativa interna entre 40 e 50 por cento para saúde e conforto.',
        'Faça funcionar o desumidificador até que o banner de risco de mofo fique verde.',
        'Esvazie o tanque de água antes que ele encha para evitar o desligamento automático.',
        'Limpe os filtros regularmente para manter o fluxo de ar e as taxas de extração no máximo.',
        'Melhore a ventilação do cômodo junto com a desumidificação para resultados mais rápidos.',
      ],
    },
  ],
  ui: {
    labelRoomSize: 'Tamanho do cômodo',
    unitM2: 'm2',
    labelTemperature: 'Temperatura',
    unitCelsius: '°C',
    labelCurrentHumidity: 'Umidade atual',
    labelTargetHumidity: 'Umidade desejada',
    labelCapacity: 'Capacidade do desumidificador',
    unitLitersDay: 'L/day',
    comfortDialTitle: 'Zona de conforto',
    comfortCurrent: 'Atual',
    comfortTarget: 'Alvo',
    tankTitle: 'Água no ar',
    tankLiters: 'litros',
    runtimeTitle: 'Tempo de funcionamento estimado',
    runtimeUnitH: 'h',
    runtimeUnitM: 'm',
    moldRiskTitle: 'Risco de mofo',
    moldRiskHigh: 'Risco alto',
    moldRiskMedium: 'Risco moderado',
    moldRiskLow: 'Risco baixo',
    extractionLabel: 'a extrair',
    tipEnergy: 'Fazer funcionar o desumidificador durante as horas de menor demanda pode reduzir significativamente os custos de eletricidade.',
    tipMold: 'Manter a umidade abaixo de 50 por cento impede que os esporos de mofo germinem nas superfícies.',
    unitPercent: '%',
    badgeHigh: 'Alto',
    badgeMedium: 'Médio',
    badgeLow: 'Baixo',
  },
};
