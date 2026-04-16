import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { TariffComparatorUI } from '../ui';

const slug = 'comparador-tarifas-eletricidade';
const title = 'Comparador de Tarifas de Eletricidade: Mercado Livre vs Regulado';
const description =
  'Descubra qual a tarifa de luz que mais lhe convém. Compare o mercado regulado vs mercado livre com base no seu consumo anual.';

const faqData = [
  {
    question: 'É melhor o mercado livre ou o regulado?',
    answer:
      'O mercado regulado tem preços fixados pelo estado, enquanto o livre permite concorrência entre empresas. Depende da oferta de cada comercializadora no momento.',
  },
  {
    question: 'Onde vejo o meu consumo anual?',
    answer:
      'Esta informação consta na sua fatura da luz, normalmente indicada como "Consumo Anual" em kWh.',
  },
  {
    question: 'O que é a potência contratada?',
    answer:
      'É o limite de energia que pode usar ao mesmo tempo. Em Portugal, os valores comuns são 3.45 kVA o 6.9 kVA.',
  },
];

const howToData = [
  {
    name: 'Consulte a fatura',
    text: 'Procure o consumo anual (kWh) e a potência (kVA).',
  },
  {
    name: 'Ajuste os dados',
    text: 'Mova os seletores para os seus valores reais.',
  },
  {
    name: 'Compare custos',
    text: 'Veja a estimativa de custo anual para ambas as opções.',
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

export const content: ToolLocaleContent<TariffComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Perguntas Frequentes',
  faq: faqData,
  bibliographyTitle: 'Bibliografia',
  bibliography: [
    { name: 'ERSE — Simulador de Preços', url: 'https://www.erse.pt' },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'title',
      text: 'Poupe na fatura da eletricidade',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Escolher a tarifa certa pode poupar-lhe centenas de euros por ano. Utilize o nosso comparador para decidir.',
    },
    {
      type: 'summary',
      title: 'Dicas para poupar',
      items: [
        'Compare as ofertas do mercado livre regularmente.',
        'Ajuste a potência contratada se o quadro nunca disparar.',
        'Aproveite as horas de vazio para consumos pesados.',
      ],
    },
  ],
  ui: {
    labelConsumption: 'Consumo Anual',
    unitKwhYear: 'kWh/ano',
    labelPower: 'Potência Contratada',
    unitKw: 'kVA',
    labelMarket: 'Mercado Regulado',
    labelFree: 'Mercado Livre (Fixo)',
    labelAnnualEst: 'Estimativa anual',
    labelPowerTerm: 'Termo de Potência (Fixo)',
    labelEnergyTerm: 'Termo de Energia (Variável)',
    labelDashboard: 'Painel Energético',
    labelMaxPower: 'Pico de Potência',
    labelMaxPowerEst: 'Estimativa de pico',
    labelCo2: 'Pegada de CO₂',
    labelCo2Est: 'Estimativa anual',
    labelSimulator: 'Simulador de Cenários',
    labelSolar: 'Autoconsumo Solar',
    labelSolarDesc: 'Simular poupança com painéis (30% redução)',
    labelShift: 'Desvio para Vazio',
    labelShiftDesc: 'Consumo movido para horas baratas:',
    badgeBetter: 'Opção mais barata',
    badgeWorseYear: 'ano',
    currencySign: '€',
    monthLabels: 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez',
  },
};
