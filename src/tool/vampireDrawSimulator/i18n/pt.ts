import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { VampireDrawSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-consumo-em-standby';
const title = 'Simulador de Consumo em Standby';
const description =
  'Descubra quanta eletricidade seus dispositivos desperdiçam em modo standby. Calcule o custo anual oculto das cargas fantasma de TVs, routers, carregadores e mais.';

const faqData = [
  {
    question: 'O que é o consumo fantasma ou carga fantasma?',
    answer:
      'O consumo fantasma é a eletricidade consumida pelos dispositivos eletrónicos quando estão desligados ou em modo de standby. Isto acontece porque muitos dispositivos permanecem parcialmente ativos para responder a controlos remotos, manter ligações de rede ou manter os relógios internos a funcionar.',
  },
  {
    question: 'Quanto custa a energia em standby por ano?',
    answer:
      'O agregado familiar médio desperdiça entre 50 e 150 euros por ano apenas em energia em standby. Uma única televisão moderna pode consumir 10 a 20 watts continuamente, o que se traduz em aproximadamente 15 a 30 euros anualmente, dependendo do preço da eletricidade.',
  },
  {
    question: 'Quais dispositivos consomem mais em standby?',
    answer:
      'Os maiores culpados são as boxes de TV, as consolas de jogos, os computadores de secretária deixados em modo de suspensão, as smart TVs e os adaptadores de alimentação externos mais antigos. As boxes de cabo e satélite são particularmente desperdiçadoras porque raramente entram em standby real.',
  },
  {
    question: 'Desligar os dispositivos da tomada realmente poupa dinheiro?',
    answer:
      'Sim. Desligar os dispositivos da tomada ou usar filtros de linha avançados com tomadas mestre elimina completamente o consumo em standby. Para uma casa típica com 20 dispositivos em standby, as poupanças anuais podem variar entre 40 e 120 euros.',
  },
  {
    question: 'Os filtros de linha inteligentes valem a pena?',
    answer:
      'Os filtros de linha inteligentes ou avançados cortam a energia aos dispositivos periféricos quando um dispositivo mestre é desligado. Pagam-se a si próprios em poucos meses se os utilizar com centros de entretenimento ou estações de trabalho informáticas.',
  },
  {
    question: 'Como posso medir o consumo em standby em casa?',
    answer:
      'Pode usar um medidor de potência de tomada económico (vatímetro) para medir exatamente quantos watts cada dispositivo consome quando desligado ou inativo. Em alternativa, este simulador fornece estimativas normalizadas baseadas em médias de fabricantes e medições laboratoriais.',
  },
];

const howToData = [
  {
    name: 'Percorra cada divisão',
    text: 'Conte cada dispositivo que permanece ligado à corrente 24 horas por dia. Inclua televisões, micro-ondas, routers, impressoras, consolas de jogos e carregadores de telemóvel.',
  },
  {
    name: 'Estime as horas diárias de standby',
    text: 'A maioria dos dispositivos está em standby durante 20 a 24 horas por dia. Introduza a média para cada dispositivo ou utilize o valor predefinido de 24 horas.',
  },
  {
    name: 'Defina o preço da sua eletricidade',
    text: 'Introduza o preço que paga por quilowatt-hora. Está indicado na sua fatura de eletricidade.',
  },
  {
    name: 'Leia o resumo do seu consumo fantasma',
    text: 'O simulador mostra os watts totais desperdiçados, os quilowatts-hora anuais e o custo anual oculto. Utilize o distintivo de categoria para ver se a sua casa é de baixo, moderado, alto ou consumo extremo.',
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

export const content: ToolLocaleContent<VampireDrawSimulatorUI> = {
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
      text: 'Carga fantasma: a eletricidade que paga mas nunca utiliza',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Cada tomada da sua casa que tem um cabo ligado é uma potencial fonte de <strong>eletricidade fantasma</strong>. Mesmo quando o interruptor está desligado, o dispositivo continua a consumir energia. Pode ser apenas alguns watts, mas multiplicados por 24 horas por dia e 365 dias por ano, esses watts tornam-se centenas de quilowatts-hora e dinheiro real que sai do seu bolso.',
    },
    {
      type: 'stats',
      items: [
        { value: '5-10%', label: 'da fatura do agregado', icon: 'mdi:flash' },
        { value: '23h', label: 'média standby/dia', icon: 'mdi:clock-outline' },
        { value: '30W', label: 'média dispositivo top', icon: 'mdi:television' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Os dispositivos que nunca dormem',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As casas modernas contêm em média 40 dispositivos eletrónicos. Cerca de metade deles está continuamente ligado à rede. Embora as regulamentações energéticas tenham melhorado a eficiência em standby nos últimos anos, o número total de dispositivos aumentou. Uma única consola de jogos em modo de ligar instantâneo pode consumir 15 watts. Uma televisão com arranque rápido pode consumir 12 watts. Adicione routers, modems, colunas inteligentes, micro-ondas com relógios, impressoras e carregadores, e o total ultrapassa rapidamente os 100 watts de consumo permanente em segundo plano.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Lares de baixo impacto',
          description: 'Agregados familiares que gerem ativamente o consumo em standby através de filtros de linha inteligentes e hábitos de desligar da tomada.',
          icon: 'mdi:leaf',
          points: ['Abaixo de 50 watts total em standby', 'Custo anual inferior a 50 euros', 'Utiliza filtros de linha avançados'],
        },
        {
          title: 'Lares de alto impacto',
          description: 'Agregados familiares típicos com centros de entretenimento, várias consolas de jogos e computadores sempre ligados.',
          icon: 'mdi:lightning-bolt',
          points: ['Acima de 150 watts total em standby', 'Custo anual superior a 150 euros', 'Muitos dispositivos em modo de arranque rápido'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Lista rápida de poupança',
      icon: 'mdi:check-circle',
      badge: 'Ação',
      html: '<p style="margin:0">Desligue os carregadores de telemóvel da tomada quando não estiverem a ser utilizados. Utilize um filtro de linha controlado por mestre para o seu centro de entretenimento. Desative os modos de arranque rápido ou ligar instantâneo nas televisões e consolas. Desligue os computadores de secretária em vez de os deixar em modo de suspensão.</p>',
    },
    {
      type: 'title',
      text: 'Porque é que os watts somam mais depressa do que pensa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Um watt é uma taxa de uso de energia. Um watt a funcionar durante uma hora é um watt-hora. Um dispositivo que consome 10 watts continuamente utiliza 87,6 quilowatts-hora por ano. A um preço médio de 0,25 euros por quilowatt-hora, esse único dispositivo custa mais de 21 euros anualmente. Agora multiplique isso por cada gadget ligado na sua casa.',
    },
    {
      type: 'summary',
      title: 'Como reduzir a sua carga fantasma',
      items: [
        'Identifique os maiores consumidores com este simulador ou um medidor de tomada.',
        'Agrupe dispositivos em filtros de linha inteligentes que cortam o standby quando o dispositivo principal está desligado.',
        'Desative as funções de sempre ligado, arranque rápido e standby de rede sempre que possível.',
        'Desligue da tomada carregadores e pequenos eletrodomésticos que não utiliza diariamente.',
        'Considere substituir adaptadores de alimentação externos muito antigos por modelos modernos e eficientes.',
      ],
    },
  ],
  ui: {
    sectionTitle: 'Auditoria de carga fantasma',
    labelDevices: 'Dispositivos em standby ligados',
    labelHours: 'Horas de standby por dia',
    unitHours: 'h',
    labelPrice: 'Preço da eletricidade',
    unitPrice: '/kWh',
    resultBadge: 'Resultado de consumo fantasma',
    labelAnnualKwh: 'Desperdiçado por ano',
    labelAnnualCost: 'Custo anual oculto',
    labelMonthlyCost: 'Equivalente mensal',
    labelDevicesCount: 'Dispositivos contados',
    labelTotalWatts: 'Watts totais em standby',
    unitWatts: 'W',
    currencySign: '$',
    labelCurrency: 'Moeda',
    btnCurrUSD: '$',
    btnCurrEUR: '€',
    btnCurrGBP: '£',
    btnCurrJPY: '¥',
    categoryLow: 'Consumo baixo',
    categoryModerate: 'Consumo moderado',
    categoryHigh: 'Consumo alto',
    categoryExtreme: 'Consumo extremo',
    addDevice: 'Adicionar dispositivo',
    removeDevice: 'Remover',
    modalAddTitle: 'Adicionar dispositivo em standby',
    labelDeviceName: 'Nome do dispositivo',
    labelDeviceWatts: 'Watts em standby',
    btnSave: 'Guardar',
    btnCancel: 'Cancelar',
  },
};
