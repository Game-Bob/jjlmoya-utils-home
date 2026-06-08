import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterSoftenerUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-amaciante';
const title = 'Otimizador de Amaciante de Água Residencial e Consumo de Sal';
const description =
  'Analise o nível de dureza da sua água, calcule as configurações ideais do amaciante e estime o consumo anual de sal. Veja previsões de impacto de incrustação, cronogramas de recarga de sal e previsões de vida útil de eletrodomésticos em uma ferramenta interativa.';

const faqData = [
  {
    question: 'O que é a dureza da água?',
    answer:
      'A dureza da água é a concentração de minerais de cálcio e magnésio dissolvidos na sua água da torneira. É medida em grãos por galão ou graus franceses. A água dura causa acúmulo de incrustação nas tubulações, reduz a eficiência de aquecimento e encurta a vida útil dos eletrodomésticos.',
  },
  {
    question: 'Como funciona um amaciante de água?',
    answer:
      'Um amaciante de água utiliza pérolas de resina de troca iônica para trocar íons de cálcio e magnésio por íons de sódio. Quando a resina fica saturada, o sistema se regenera lavando uma solução salina através do tanque, restaurando as pérolas e enviando os minerais duros para o ralo.',
  },
  {
    question: 'Quanto sal um amaciante usa por ano?',
    answer:
      'Uma residência típica de quatro pessoas com água moderadamente dura usa entre 80 e 120 quilogramas de sal por ano. A água muito dura ou residências maiores podem ultrapassar os 200 quilogramas. Amaciantes modernos de alta eficiência usam cerca de 30 por cento menos de sal do que modelos antigos.',
  },
  {
    question: 'Com qual frequência devo reabastecer o tanque de sal?',
    answer:
      'A maioria dos tanques de salmoura precisa ser reabastecida a cada 4 a 8 semanas. Verifique o nível de sal mensalmente. Se o tanque estiver com menos de um terço da capacidade, adicione um novo saco de 25 quilogramas. Nunca deixe o sal acabar completamente ou a resina vai endurecer novamente e perder a eficácia.',
  },
  {
    question: 'A água dura realmente danifica os eletrodomésticos?',
    answer:
      'Sim. Os depósitos de incrustação nos elementos de aquecimento os forçam a trabalhar mais, aumentando as contas de energia e causando falhas prematuras. Um aquecedor de água em uma área com água muito dura pode perder até 45 por cento da sua vida útil esperada. Máquinas de lavar e lava louças também sofrem com válvulas entupidas e tambores incrustados.',
  },
  {
    question: 'Posso beber água amaciada?',
    answer:
      'A água amaciada é segura para a maioria das pessoas. O aumento de sódio é pequeno, aproximadamente equivalente a uma fatia de pão por dia. No entanto, pessoas com dietas rigorosas pobres em sódio podem preferir uma torneira separada não amaciada para beber ou escolher um sal de amaciante à base de potássio.',
  },
];

const howToData = [
  {
    name: 'Insira a dureza da sua água',
    text: 'Digite o valor de dureza do seu relatório de qualidade da água ou fita de teste. Escolha grãos por galão ou graus franceses no seletor de unidades.',
  },
  {
    name: 'Defina o tamanho da residência',
    text: 'Selecione o número de pessoas que vivem na sua casa. Mais ocupantes significam maior consumo de água e esgotamento mais rápido do sal.',
  },
  {
    name: 'Escolha a capacidade do amaciante',
    text: 'Insira a capacidade em grãos do tanque de resina do seu amaciante. Isso geralmente está impresso na válvula de controle ou no manual do usuário. Os valores comuns são 24.000 ou 32.000 grãos.',
  },
  {
    name: 'Revise a categoria de dureza',
    text: 'Leia a escala interativa de dureza para entender se a sua água é macia, moderadamente dura ou extremamente dura.',
  },
  {
    name: 'Verifique a previsão de sal',
    text: 'Olhe para o simulador de pilha de sacos de sal para ver quantos sacos de 25 quilogramas você precisará por ano e quando a próxima recarga está prevista.',
  },
  {
    name: 'Inspecione o impacto nos eletrodomésticos',
    text: 'Compare a vida útil base da sua máquina de lavar, aquecedor de água e cafeteira contra a vida útil estimada com a sua água atual não tratada.',
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

export const content: ToolLocaleContent<WaterSoftenerUI> = {
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
      text: 'O custo invisível da água dura',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A água dura é um dos problemas ocultos mais caros de uma casa. Cada vez que você abre a torneira, minerais dissolvidos fluem pelas tubulações e eletrodomésticos. Ao longo de meses e anos esses minerais cristalizam em incrustação, uma crosta branca e dura que entope os elementos de aquecimento, reduz as vazões e destrói as borrachas de vedação. O resultado são contas de energia mais altas, vida útil mais curta dos eletrodomésticos e chamadas de manutenção frequentes. Um amaciante de água elimina esse dano na fonte.',
    },
    {
      type: 'stats',
      items: [
        { value: '80kg', label: 'Uso médio anual de sal', icon: 'mdi:shaker-outline' },
        { value: '11yr', label: 'Vida útil base lavadora', icon: 'mdi:washing-machine' },
        { value: '0.15', label: 'mm incrustação por GPG/ano', icon: 'mdi:water-check' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Por que a incrustação é tão destrutiva',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A incrustação não é apenas uma mancha cosmética na sua chaleira. Dentro de um aquecedor de água ela forma uma camada isolante no elemento de aquecimento. Para cada milímetro de incrustação, a eficiência de transferência de energia cai até 10 por cento. Isso significa que um revestimento de 3 milímetros pode aumentar a sua conta de aquecimento de água em quase 30 por cento. Em máquinas de lavar a incrustação bloqueia a ativação do detergente, então você usa mais pó para obter piores resultados. Em cafeteiras ela arruína o termostato e produz extração amarga e irregular.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Água dura não tratada',
          description: 'Os minerais se depositam livremente em todo o sistema hidráulico e em cada eletrodoméstico conectado.',
          icon: 'mdi:alert',
          points: ['Acúmulo rápido de incrustação em aquecedores e caldeiras', 'Aumento do consumo de detergente e sabão', 'Vida útil dos eletrodomésticos encurtada em 30 a 45 por cento', 'Contas de energia mais altas devido ao efeito isolante da incrustação'],
        },
        {
          title: 'Água amaciada',
          description: 'O cálcio e o magnésio são removidos no ponto de entrada antes de chegarem às torneiras e eletrodomésticos.',
          icon: 'mdi:check-circle',
          points: ['Zero deposição de incrustação nos elementos de aquecimento', 'Doses normais de detergente produzem melhores resultados', 'Os eletrodomésticos atingem sua vida útil de projeto completa', 'Menor consumo de energia para o aquecimento de água'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Teste rápido para água dura',
      icon: 'mdi:clipboard-check',
      badge: 'Ação',
      html: '<p style="margin:0">Encha uma garrafa transparente com água da torneira e adicione algumas gotas de sabão líquido. Agite vigorosamente. Se a água permanecer turva e produzir muito pouca espuma, a sua água é dura. Água cristalina com espuma espessa e estável indica água macia. Para uma medição precisa use uma fita de teste de dureza total ou solicite um relatório ao seu fornecedor de água.</p>',
    },
    {
      type: 'title',
      text: 'Dimensionar corretamente o suprimento de sal',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Ficar sem sal é o caminho mais rápido para arruinar um amaciante. Quando o tanque de salmoura esvazia, o leito de resina endurece em poucos dias e o sistema para de proteger a sua casa. Use esta calculadora para prever exatamente quantos sacos de 25 quilogramas você precisa por ano. Se o resultado for mais de 10 sacos, considere fazer upgrade para um tanque de resina de maior capacidade ou uma válvula de alta eficiência que usa menos sal por ciclo de regeneração.',
    },
    {
      type: 'summary',
      title: 'Como proteger sua casa da água dura',
      items: [
        'Use esta calculadora para encontrar sua categoria exata de dureza da água e necessidades de sal.',
        'Instale um amaciante de água corretamente dimensionado no ponto de entrada principal do abastecimento.',
        'Reabasteça o tanque de salmoura antes que ele caia abaixo de um terço da capacidade.',
        'Use pastilhas de sal evaporado de alta pureza para o melhor desempenho da resina.',
        'Faça a manutenção da válvula e do leito de resina a cada 3 a 5 anos.',
        'Monitore as contas de energia dos eletrodomésticos em busca de aumentos repentinos que possam sinalizar acúmulo de incrustação.',
      ],
    },
  ],
  ui: {
    labelHardness: 'Dureza da água',
    unitGpg: 'GPG',
    unitFH: 'fH',
    labelOccupants: 'Tamanho da residência',
    unitPeople: 'pessoas',
    labelSoftenerCapacity: 'Capacidade do amaciante',
    unitGrains: 'grãos',
    hardnessSoft: 'Macia',
    hardnessSlightly: 'Levemente dura',
    hardnessModerate: 'Moderadamente dura',
    hardnessHard: 'Dura',
    hardnessVery: 'Muito dura',
    hardnessExtreme: 'Extremamente dura',
    scaleTitle: 'Taxa de acúmulo de incrustação',
    scaleUnitMetric: 'mm/ano',
    scaleUnitImperial: 'in/ano',
    saltTitle: 'Previsão anual de sal',
    saltAnnual: 'Sal anual',
    saltBags: 'Sacos por ano',
    saltDaysPerBag: 'Dias por saco',
    saltWeeksPerBag: 'Semanas por saco',
    applianceTitle: 'Vida útil dos eletrodomésticos',
    applianceWasher: 'Máquina de lavar',
    applianceHeater: 'Aquecedor de água',
    applianceCoffee: 'Cafeteira',
    applianceBaseline: 'Com amaciante',
    applianceWithHardness: 'Com água dura',
    applianceSaved: 'anos',
    badgeSaved: 'Estendido por',
    labelUnitSystem: 'Unidades',
    btnMetric: 'Métrico',
    btnImperial: 'Imperial',
  },
};
