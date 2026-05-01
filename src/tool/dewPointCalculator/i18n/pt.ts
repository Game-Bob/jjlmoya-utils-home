import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ponto-de-orvalho';
const title = 'Calculadora de Ponto de Orvalho';
const description = 'Calcule a temperatura de condensação nas suas paredes usando a humidade e temperatura ambiente. Uma ferramenta vital para prevenir humidades e proteger a saúde da sua casa.';

const faqData = [
  {
    question: 'O que é exatamente o ponto de orvalho?',
    answer: 'É a temperatura à qual o ar deve arrefecer para que o vapor de água se condense em água líquida. Quanto mais alta for a humidade relativa, mais próximo está o ponto de orvalho da temperatura atual.',
  },
  {
    question: 'Porque é que aparece bolor nos cantos da minha casa?',
    answer: 'Os cantos são frequentemente pontes térmicas onde a parede está mais fria. Se a temperatura dessa superfície descer abaixo do ponto de orvalho, forma-se água líquida. O bolor precisa dessa humidade constante para crescer.',
  },
  {
    question: 'Como posso baixar a humidade em casa?',
    answer: 'A forma mais eficaz é ventilar (especialmente após o banho ou cozinhar) e usar desumidificadores. Manter uma temperatura constante também ajuda a que o ar consiga reter mais vapor sem condensar.',
  },
  {
    question: 'O bolor por condensação é perigoso?',
    answer: 'Sim. O bolor liberta esporos que podem causar problemas respiratórios, alergias e asma. Detetar o risco de condensação com esta calculadora é o primeiro passo para uma casa saudável.',
  },
];

const howToData = [
  {
    name: 'Medir temperatura e humidade',
    text: 'Use um termómetro e higrómetro para conhecer os valores atuais da divisão.',
  },
  {
    name: 'Introduzir valores',
    text: 'Ajuste a temperatura em graus Celsius e a percentagem de humidade na calculadora.',
  },
  {
    name: 'Obter temperatura crítica',
    text: 'A ferramenta dir-lhe-á a que temperatura exata começará a condensar a água nas superfícies.',
  },
  {
    name: 'Verificar superfícies',
    text: 'Se tiver um termómetro laser, meça a temperatura das paredes. Se for igual ou menor ao resultado, precisa de ventilar ou isolar.',
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

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
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
      text: 'O que é o Ponto de Orvalho e por que é importante no seu lar?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O ponto de orvalho é a temperatura à qual o ar deve arrefecer para que o vapor de água se condense. No contexto de uma habitação, este conceito marca a fronteira entre uma casa sã e uma com problemas estruturais de humidade. Quando a temperatura de uma superfície cai abaixo do ponto de orvalho, aparecem gotas de água — o ambiente ideal para o aparecimento de fungos nocivos.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Diferença Segura', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Humidade Ideal', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Perigo Extremo', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'A Fórmula de Magnus Tetens',
          description: 'Para calcular o ponto de orvalho com precisão utilizamos a aproximação de Magnus-Tetens, recomendada pela Organização Meteorológica Mundial para temperaturas entre 0°C e 50°C.',
          icon: 'mdi:calculator',
          points: ['Precisão científica validada', 'Válida para gamas de temperatura habitacional'],
        },
        {
          title: 'Pontes Térmicas e Bolor',
          description: 'Os cantos dos quartos e as janelas são os pontos mais frios. Se a sua temperatura cair abaixo do ponto de orvalho, a condensação e o bolor são inevitáveis.',
          icon: 'mdi:home-thermometer',
          points: ['Os cantos são os pontos mais vulneráveis', 'O isolamento térmico previne a condensação'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Níveis de Risco',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Risco Baixo (diferença &gt; 5°C):</strong> As suas paredes estão seguras. <strong>Risco Médio (3–5°C):</strong> Vigie os cantos e as pontes térmicas. <strong>Risco Alto (1–3°C):</strong> Condensação provável em vidros — ventile imediatamente. <strong>Perigo Extremo (&lt; 1°C):</strong> Condensação ativa com risco imediato de bolor negro.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A Regra de Ouro',
      icon: 'mdi:thermometer-alert',
      badge: 'Conselho Chave',
      html: '<p>Se a temperatura da sua parede estiver a menos de <strong>3°C do ponto de orvalho</strong>, tem um risco iminente de condensação. Ventile e mantenha a humidade entre 40% e 60%.</p>',
    },
    {
      type: 'summary',
      title: 'Como Prevenir a Condensação',
      items: [
        'Ventile diariamente, especialmente após o banho ou cozinhar.',
        'Mantenha a humidade relativa entre 40% e 60%.',
        'Use exaustores em casas de banho e cozinhas.',
        'Não seque roupa dentro de casa sem ventilação.',
        'Isole as paredes para evitar superfícies frias.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Temperatura Ambiente',
    labelHumidity: 'Humidade Relativa',
    labelDewPoint: 'Ponto de Orvalho',
    riskLow: 'Risco Baixo',
    riskMedium: 'Risco Médio',
    riskHigh: 'Risco Alto',
    riskExtreme: 'Perigo Extremo',
    riskLowDesc: 'Diferença > 5°C. Superfícies seguras.',
    riskMediumDesc: 'Diferença 3–5°C. Vigie os cantos.',
    riskHighDesc: 'Diferenza 1–3°C. Ventile imediatamente.',
    riskExtremeDesc: 'Diferença < 1°C. Condensação ativa.',
  },
};
