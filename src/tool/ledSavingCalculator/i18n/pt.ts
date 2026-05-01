import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { LedSavingCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-poupanca-led';
const title = 'Calculadora de Poupança LED';
const description =
  'Calcule quanto dinheiro e kWh poupa ao trocar as suas lâmpadas tradicionais por LED. Descubra a sua poupança anual exata, mensal e redução de CO2.';

const faqData = [
  {
    question: 'Quanto poupa realmente uma lâmpada LED?',
    answer:
      'Uma lâmpada LED poupa entre 80% e 90% de energia comparada com uma incandescente. Por exemplo, passar de 60W para 9W reduz o gasto de luz nessa lâmpada quase ao mínimo, mantendo o mesmo brilho.',
  },
  {
    question: 'Em quanto tempo se amortiza a mudança para LED?',
    answer:
      'Devido ao baixo custo atual dos LEDs e à sua grande poupança, o investimento costuma recuperar-se em menos de 4 meses de uso normal. Se as luzes estiverem acesas muitas horas, a amortização é ainda mais rápida.',
  },
  {
    question: 'O que acontece se colocar uma lâmpada LED de mais watts?',
    answer:
      'Os LEDs geram muito pouco calor, pelo que pode colocar lâmpadas de mais lúmens em candeeiros que antes estavam limitados pelo calor das incandescentes, respeitando os limites elétricos do casquilho.',
  },
  {
    question: 'Duram realmente o que dizem as caixas?',
    answer:
      'Um LED de qualidade dura entre 15.000 e 50.000 horas. Num uso doméstico médio de 4h por dia, isto significa que uma lâmpada pode durar mais de 15 anos.',
  },
  {
    question: 'Posso usar LED em candeeiros com regulador (Dimmer)?',
    answer:
      'Apenas se a lâmpada especificar claramente que é "Dimmable" ou regulável. Os LEDs padrão não funcionam bem com reguladores antigos.',
  },
  {
    question: 'É preciso mudar todo o candeeiro?',
    answer:
      'Em 99% dos casos, não. Só tem de substituir a lâmpada por uma LED com o mesmo casquilho (E27, E14, GU10, etc.).',
  },
];

const howToData = [
  {
    name: 'Conte os pontos de luz',
    text: 'Reveja quantas lâmpadas incandescentes ou halogéneas tem em casa e anote a sua potência em watts.',
  },
  {
    name: 'Escolha o LED equivalente',
    text: 'Selecione o tipo de lâmpada atual na calculadora. Os valores LED equivalentes são atribuídos automaticamente.',
  },
  {
    name: 'Ajuste as horas de uso',
    text: 'Indique quantas horas por dia estão acesas as lâmpadas, em média.',
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

export const content: ToolLocaleContent<LedSavingCalculatorUI> = {
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
      text: 'Guia de Poupança com LED: Como Cortar a Fatura da Luz',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'A mudança para a tecnologia <strong>LED (Light Emitting Diode)</strong> é um dos investimentos domésticos com retorno mais rápido. Uma lâmpada LED de 9W oferece o mesmo brilho que uma incandescente de 60W com <strong>85% menos consumo</strong>.',
    },
    {
      type: 'stats',
      items: [
        { value: '85–90%', label: 'Poupança Energética', icon: 'mdi:lightning-bolt' },
        { value: '25.000h', label: 'Vida Útil LED', icon: 'mdi:clock-outline' },
        { value: '< 4 meses', label: 'Amortização', icon: 'mdi:calendar-check' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Iluminação Incandescente',
          description: 'Tecnologia baseada no calor. 95% da energia é desperdiçada sob a forma de calor.',
          icon: 'mdi:lightbulb-outline',
          points: ['95% energia desperdiçada em calor', 'Vida útil: 1.000 horas', 'Custo operacional alto'],
        },
        {
          title: 'Tecnologia LED Moderna',
          description: 'O padrão atual de eficiência. Acesso instantâneo e mínima emissão de calor.',
          icon: 'mdi:led-outline',
          points: ['85–90% poupança direta', 'Vida útil: 25.000–50.000 horas', 'Mínima emissão de calor'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'A Física por Trás da Poupança',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Uma lâmpada incandescente converte apenas 5% de energia em luz. Os LED usam semicondutores para uma eficiência superior. <strong>Não olhe para os watts, olhe para os lúmenes:</strong> uma lâmpada de 60W oferece 800 lm; hoje consegue isso com 8-9W LED.',
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Tabela de Equivalências Rápidas',
      icon: 'mdi:table',
      badge: 'Referência',
      html: '<ul style="margin:0;padding-left:1.2em"><li><strong>40W incandescente</strong> → LED 5–6W (450 lm)</li><li><strong>60W incandescente</strong> → LED 8–10W (800 lm)</li><li><strong>100W incandescente</strong> → LED 13–15W (1500 lm)</li><li><strong>50W halogénea</strong> → LED 6–7W (450–500 lm)</li></ul>',
    },
    {
      type: 'summary',
      title: 'Vantagens do LED Além do Dinheiro',
      items: [
        'Vida útil extrema: dura mais de 15 anos com uso normal.',
        'Acesso instantâneo ao brilho máximo.',
        'Menos calor: ajuda a manter a casa fresca no verão.',
        'Sem mercúrio, mais fácil de reciclar.',
        'Compatível com quase todos os casquilhos (E27, E14, GU10).',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Configuração do Lar',
    labelBulbs: 'Lâmpadas a trocar',
    unitBulbs: 'unidades',
    labelType: 'Lâmpada atual',
    labelHours: 'Horas de uso por dia',
    labelPrice: 'Preço da eletricidade',
    unitPrice: '€/kWh',
    resultBadge: 'Cálculo de poupança',
    labelAnnual: 'Poupará por ano',
    labelMonthly: 'Mensal',
    labelEfficiency: 'Eficiência',
    labelCo2: 'Redução de pegada CO₂',
    unitLess: '% menos',
    currencySign: '€',
    btnInc60Title: 'Incandescente',
    btnInc60Sub: 'Clássica (60W)',
    btnInc40Title: 'Incandescente',
    btnInc40Sub: 'Pequena (40W)',
    btnInc100Title: 'Incandescente',
    btnInc100Sub: 'Grande (100W)',
    btnHalo50Title: 'Halogénea',
    btnHalo50Sub: 'Foco (50W)',
    usageNever: 'Quase nunca',
    usageLow: 'Pouco uso',
    usageNormal: 'Uso normal',
    usageModerate: 'Uso moderado',
    usageHeavy: 'Uso intenso',
    usagePro: 'Uso profissional',
    usageVeryHeavy: 'Muito intenso',
    usageAlways: 'Sempre acessa',
  },
};
