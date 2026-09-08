import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WaterHeaterRecoveryTimeCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'calculadora-tempo-recuperacao-aquecedor-agua';
const title = 'Calculadora do tempo de recuperação do aquecedor de água';
const description = 'Estime quanto tempo o aquecedor de água precisa para passar da temperatura atual à temperatura desejada usando volume, potência útil e eficiência.';
const faq = [
  { question: 'O que significa tempo de recuperação aqui?', answer: 'É o tempo estimado para o volume de água informado subir da temperatura atual até à temperatura desejada. O cálculo usa a capacidade térmica da água, a potência útil e a eficiência estimada.' },
  { question: 'Que fórmula a calculadora usa?', answer: 'O calor é estimado multiplicando litros pelo aumento de temperatura e por 1,16 watt-hora por litro e grau Celsius. Depois, essa energia é dividida pela potência multiplicada pela eficiência.' },
  { question: 'Isto prevê o tempo exato do meu aparelho?', answer: 'Não. É uma estimativa transparente para planeamento. Perdas em espera, ciclos do termóstato, estratificação, mistura, tubagens e limites de potência podem aumentar o tempo real.' },
  { question: 'Que eficiência devo inserir?', answer: 'Use uma eficiência útil ou de recuperação documentada, se existir. Caso contrário, introduza uma estimativa prudente e compare-a com o manual ou com um ciclo medido.' },
];
const howTo = [
  { name: 'Introduza o volume de água armazenada', text: 'Use o volume do depósito em litros para estimar a quantidade de água que precisa de aquecimento.' },
  { name: 'Defina as temperaturas atual e desejada', text: 'Introduza a temperatura no início e a temperatura que o depósito deve alcançar.' },
  { name: 'Introduza potência útil e eficiência', text: 'Use a potência em quilowatts e a percentagem de energia que chega efetivamente à água.' },
  { name: 'Leia a janela de recuperação', text: 'Use a duração e a hora estimada de conclusão para planear e compare o resultado com a documentação.' },
];
const faqSchema: WithContext<FAQPage> = { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })) };
const howToSchema: WithContext<HowTo> = { '@context': 'https://schema.org', '@type': 'HowTo', name: title, description, step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })) };
const appSchema: WithContext<SoftwareApplication> = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: title, description, applicationCategory: 'UtilityApplication', operatingSystem: 'All', offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' }, inLanguage: 'pt' };

export const content: ToolLocaleContent<WaterHeaterRecoveryTimeCalculatorUI> = {
  slug, title, description, bibliography, faq, howTo, schemas: [faqSchema, howToSchema, appSchema],
  ui: {
    volumeLabel: 'Volume de água armazenada', volumeHint: 'Capacidade do depósito', temperatureUnitLabel: 'Unidades de temperatura', celsiusOption: 'Celsius (°C)', fahrenheitOption: 'Fahrenheit (°F)', currentTempLabel: 'Temperatura atual da água', targetTempLabel: 'Temperatura desejada', powerLabel: 'Potência útil do aquecedor', efficiencyLabel: 'Eficiência estimada', startTimeLabel: 'A recuperação começa às', compareTitle: 'Comparar outra configuração', comparePowerLabel: 'Outra potência útil', compareEfficiencyLabel: 'Outra eficiência', compareOptional: 'Opcional: preencha os dois campos para comparar', calculateNote: 'Use isto como uma estimativa de planeamento e consulte a documentação antes de confiar no tempo.', tankCurrent: 'Atual', tankTarget: 'Objetivo', resultTitle: 'Janela de recuperação', recoveryTimeLabel: 'Recuperação estimada', energyLabel: 'Calor necessário', effectivePowerLabel: 'potência efetiva', readyAtLabel: 'Pronto aproximadamente às', temperatureRiseLabel: 'Aumento de temperatura', comparisonTitle: 'Configuração alternativa', comparisonFaster: 'mais rápida', comparisonSlower: 'mais lenta', noHeatingNeeded: 'A temperatura desejada já foi atingida', invalidInputs: 'Introduza valores positivos para volume, potência e eficiência para ver a estimativa.', insufficientPower: 'É necessária uma potência útil positiva.', limitsTitle: 'O que esta estimativa não inclui', limitsText: 'O modelo não conhece o isolamento do depósito, as perdas em espera, os ciclos do termóstato, a estratificação, a mistura, as perdas das tubagens nem a curva de potência real do aparelho.', hoursUnit: 'h', minutesUnit: 'min', kilowattHoursUnit: 'kWh', kilowattsUnit: 'kW', degreesUnit: '°C', percentUnit: '%', litersUnit: 'L',
  },
  seo: [
    { type: 'title', text: 'Estime quando a água quente estará disponível novamente', level: 2 },
    { type: 'paragraph', html: 'Depois de um duche, banho ou grande consumo, o tamanho do depósito não é a única informação importante. É preciso saber quanta energia deve voltar à água e a que velocidade o aquecedor a consegue fornecer. Esta calculadora transforma esses dados numa janela de recuperação para planear a próxima utilização.' },
    { type: 'stats', items: [{ value: 'L × ΔT × 1,16', label: 'Calor necessário em Wh', icon: 'mdi:water-boiler' }, { value: 'kW × eficiência', label: 'Potência útil de aquecimento', icon: 'mdi:flash-outline' }, { value: 'Calor ÷ potência', label: 'Tempo de recuperação', icon: 'mdi:timer-outline' }], columns: 3 },
    { type: 'title', text: 'Como a estimativa é construída', level: 2 },
    { type: 'paragraph', html: 'A estimativa utiliza a capacidade térmica da água. Cada litro precisa de aproximadamente 1,16 watt-hora por cada grau de aumento. A calculadora multiplica esse fator pelo volume e pelo aumento de temperatura e divide depois pela potência útil após aplicar a eficiência.' },
    { type: 'comparative', items: [{ title: 'Útil para planear', description: 'Escolha uma hora de início, introduza o estado do depósito e veja uma hora de conclusão estimada. Adicione outra combinação de potência e eficiência para comparar configurações.', icon: 'mdi:calendar-clock', points: ['Testar o próximo ciclo de recuperação', 'Comparar potência útil, não apenas potência nominal', 'Manter visível o aumento de temperatura'] }, { title: 'Não é uma garantia de serviço', description: 'Um aparelho real pode recuperar mais lentamente devido a perdas de calor, ciclos do termóstato, mistura ou potência que não se mantém. Compare o resultado com o manual ou uma medição.', icon: 'mdi:thermometer-alert', points: ['As perdas em espera não são modeladas', 'Não são consultados dados do fabricante', 'Não implica aconselhamento de segurança ou instalação'] }], columns: 2 },
    { type: 'title', text: 'Os dados que mais alteram o tempo de recuperação', level: 2 },
    { type: 'paragraph', html: 'Um aumento de temperatura maior aumenta diretamente a energia necessária. Um depósito maior também exige proporcionalmente mais energia para o mesmo aumento. Potência útil e eficiência atuam em sentido contrário: duplicar o seu produto reduz aproximadamente para metade o tempo ideal.' },
    { type: 'title', text: 'Use o resultado sem prometer precisão excessiva', level: 2 },
    { type: 'paragraph', html: 'Esta ferramenta serve para planear e comparar pressupostos, não para certificar um aquecedor nem dimensionar uma instalação. Guias técnicos e testes reais consideram perdas e condições de medição adicionais, por isso um ciclo observado pode diferir da estimativa ideal.' },
  ],
};
