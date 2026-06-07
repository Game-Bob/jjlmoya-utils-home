import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { WifiRangeSimulatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'simulador-de-alcance-wi-fi';
const title = 'Simulador de Alcance e Obstáculos WiFi';
const description =
  'Desenhe a planta da sua casa, coloque paredes, portas, móveis e eletrodomésticos e arraste o seu router e dispositivo para encontrar o melhor caminho do sinal. Veja em direto a perda de cobertura, o veredito de streaming e dicas de colocação para eliminar zonas mortas sem comprar novo hardware.';

const faqData = [
  {
    question: 'Porque é que o meu sinal Wi-Fi cai em certas divisões?',
    answer:
      'O Wi-Fi utiliza ondas de rádio que são absorvidas, refletidas ou bloqueadas por materiais físicos. Tijolo maciço, betão e metal são os piores, cada um reduzindo significativamente a intensidade do sinal. A água e o vidro também podem refletir ou absorver partes do sinal.',
  },
  {
    question: 'Quanto é que uma parede de betão ou pedra afeta o Wi-Fi?',
    answer:
      'Uma parede de betão padrão pode atenuar um sinal de 2,4 GHz entre 10 a 20 decibéis. Paredes grossas de pedra de 70 a 80 centímetros podem atingir 22 decibéis ou mais. Isto traduz-se numa perda de alcance de cerca de 50 a 90 por cento, dependendo da espessura e densidade. Em 5 GHz a perda é ainda maior porque as frequências mais altas são absorvidas mais rapidamente por materiais densos.',
  },
  {
    question: 'Onde devo colocar o router para obter a melhor cobertura?',
    answer:
      'Central, elevado e aberto. Coloque o router no centro da sua casa, pelo menos a um metro de paredes grossas e objetos metálicos, e eleve-o à altura do peito para uma dispersão horizontal. Evite cantos, armários e posições baixas atrás de móveis.',
  },
  {
    question: 'As portas de vidro podem bloquear o Wi-Fi?',
    answer:
      'O vidro transparente tem um impacto mínimo, mas janelas revestidas ou vidros duplos com películas metálicas podem refletir sinais. O simulador trata o vidro padrão como um obstáculo leve com cerca de 2 a 3 decibéis de perda.',
  },
];

const howToData = [
  {
    name: 'Identifique o caminho do sinal',
    text: 'Imagine uma linha reta entre o seu router e o dispositivo que lhe interessa. Cada objeto que cruza esta linha é importante.',
  },
  {
    name: 'Adicione cada obstáculo',
    text: 'Clique nos botões de material no simulador para adicionar cada parede, porta, eletrodoméstico ou móvel que cruze o caminho.',
  },
  {
    name: 'Leia o veredito',
    text: 'Observe o anel de sinal, a animação de onda e o painel de streaming a atualizarem-se instantaneamente à medida que adiciona ou remove objetos.',
  },
  {
    name: 'Aplique a dica contextual',
    text: 'Siga os cartões de colocação que aparecem com base na sua combinação exata de obstáculos para melhorar a cobertura sem comprar novo hardware.',
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

export const content: ToolLocaleContent<WifiRangeSimulatorUI> = {
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
      text: 'Porque é que o seu Wi-Fi morre na sala ao lado',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'O seu router emite ondas de rádio em todas as direções. Essas ondas viajam pelo ar facilmente, mas cada objeto físico que encontram cobra o seu preço. Alguns materiais deixam passar a maior parte do sinal. Outros devoram-no completamente. Compreender que objetos na sua casa estão silenciosamente a matar a sua ligação é o primeiro passo para corrigir zonas mortas sem gastar um único euro em novo hardware.',
    },
    {
      type: 'stats',
      items: [
        { value: '3 dB', label: 'Perda em pladur', icon: 'mdi:wall' },
        { value: '22 dB', label: 'Parede grossa de pedra', icon: 'mdi:wall' },
        { value: '18 dB', label: 'Porta metálica', icon: 'mdi:door-closed-lock' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'O custo real de cada objeto na sua casa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Nem todos os obstáculos são iguais. Um painel de pladur pode retirar alguns pontos percentuais ao seu sinal, mas um pilar de betão ou uma porta metálica podem reduzir o seu alcance efetivo para metade. Eis o que realmente enfrenta quando coloca o router atrás da televisão, ao lado do frigorífico ou no chão debaixo de uma prateleira metálica.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Obstáculos leves',
          description: 'Estes objetos causam uma perda mínima de sinal e são geralmente seguros perto do caminho do sinal. Não deve preocupar-se com uma única janela ou porta de vidro.',
          icon: 'mdi:window-open-variant',
          points: [
            'Porta de vidro: 2 a 3 dB de perda',
            'Janela padrão: 2 dB de perda',
            'Parede de pladur: 3 dB de perda',
            'Porta interior de madeira: 4 dB de perda',
          ],
        },
        {
          title: 'Obstáculos moderados',
          description: 'Estes objetos criam uma redução notável na sua cobertura. Um ou dois estão bem, mas empilhar três ou mais no mesmo caminho de sinal começará a causar buffering e lag.',
          icon: 'mdi:wardrobe',
          points: [
            'Guarda-roupa de madeira: 5 dB de perda',
            'Espelho grande: 6 dB de perda',
            'Máquina de lavar: 6 dB de perda',
            'Micro-ondas: 5 dB de perda',
          ],
        },
        {
          title: 'Obstáculos pesados',
          description: 'Estes são os assassinos silenciosos das redes domésticas. Uma única parede de betão ou porta metálica pode transformar um sinal forte num fraco, e empilhá-los cria zonas mortas garantidas.',
          icon: 'mdi:wall',
          points: [
            'Parede de tijolo maciço: 8 dB de perda',
            'Chão ou teto: 10 dB de perda',
            'Frigorífico: 10 dB de perda',
            'Aquário: 12 dB de perda',
          ],
        },
        {
          title: 'Obstáculos extremos',
          description: 'Estes materiais absorvem ou refletem quase toda a energia de rádio. Se o seu caminho de sinal cruzar um deles, precisa de mover o router ou o dispositivo. Não há solução alternativa.',
          icon: 'mdi:shield',
          points: [
            'Parede grossa de pedra (70-80 cm): 22 dB de perda',
            'Parede de betão: 15 dB de perda',
            'Armário metálico: 12 dB de perda',
            'Porta ou portão metálico: 18 dB de perda',
            'Caixa de elevador: 20+ dB de perda',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Como diferentes frequências se comportam através das paredes',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A maioria dos routers modernos transmite em duas bandas: 2,4 GHz e 5 GHz. A frequência mais baixa viaja mais longe e esgueira-se através das paredes mais facilmente, mas é mais lenta e congestionada. A frequência mais alta é extremamente rápida, mas é absorvida por cada obstáculo no seu caminho.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Penetração de 2,4 GHz',
          description: 'Frequências mais baixas viajam mais longe e penetram melhor as paredes. Ideal para longa distância, mas congestionada com redes vizinhas.',
          icon: 'mdi:signal',
          points: [
            'Melhor através de tijolo maciço e betão',
            'Mais interferência de routers vizinhos',
            'Velocidades máximas mais lentas, cerca de 150 Mbps reais',
            'Melhor para dispositivos smart home e IoT',
          ],
        },
        {
          title: 'Penetração de 5 GHz',
          description: 'Frequências mais altas oferecem velocidades mais rápidas, mas são absorvidas muito mais rapidamente pelos materiais de construção. Melhor para espaços abertos e dispositivos próximos.',
          icon: 'mdi:signal-5g',
          points: [
            'Má através de betão e metal',
            'Menos interferência, canais mais limpos',
            'Velocidades de gigabit na mesma sala',
            'Pior cobertura, melhor qualidade onde chega',
          ],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Assassinos ocultos: objetos que nunca suspeitou',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A maioria das pessoas culpa as paredes, mas alguns dos piores assassinos do Wi-Fi são objetos do quotidiano. Um aquário é maioritariamente água, e a água absorve ondas de rádio de 2,4 GHz quase perfeitamente. Um espelho grande tem uma fina camada metálica no verso que reflete o sinal para longe do seu dispositivo. Um micro-ondas emite radiação a 2,4 GHz, exatamente a mesma frequência do seu router, causando interferência sempre que aquece qualquer coisa.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A armadilha do aquário',
      icon: 'mdi:fish',
      badge: 'Bloqueador surpresa',
      html: '<p>Um grande aquário pode atenuar o seu sinal Wi-Fi em até 12 decibéis. É o mesmo que uma parede grossa de betão. Se o seu router está de um lado do aquário e a sua secretária do outro, a água está a causar mais danos do que a parede atrás dele.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'O efeito espelho',
      icon: 'mdi:mirror',
      badge: 'Perigo de reflexão',
      html: '<p>Os espelhos grandes têm uma fina camada de metal no verso projetada para refletir a luz. Essa mesma camada metálica também reflete as ondas de rádio. Um espelho virado para o seu router pode desviar o sinal para longe de onde precisa, ou criar interferência multipercurso que distorce os pacotes de dados.</p>',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A interferência do micro ondas',
      icon: 'mdi:microwave',
      badge: 'Bloqueador ativo',
      html: '<p>Os micro-ondas funcionam a 2,45 GHz, sobrepondo-se diretamente à banda Wi-Fi de 2,4 GHz. Quando está a funcionar, um micro-ondas pode eliminar o sinal de 2,4 GHz num raio de 3 a 5 metros. Se o seu router só suporta 2,4 GHz e a sua cozinha está perto, mude para um router de banda dupla e use 5 GHz para tarefas críticas.</p>',
    },
    {
      type: 'title',
      text: 'Divisão por divisão: onde colocar o router',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'A localização ideal do router não é a mais conveniente. É aquela que oferece a linha de visão mais desobstruída para as divisões onde realmente usa a internet. Eis como pensar em cada divisão.',
    },
    {
      type: 'table',
      headers: ['Divisão', 'Nível de risco', 'Porque é difícil', 'Solução'],
      rows: [
        ['Cozinha', 'Alto', 'Frigorífico, micro-ondas, armários metálicos, canos', 'Coloque o router fora da cozinha, nunca dentro.'],
        ['Casa de banho', 'Alto', 'Espelhos, canos, azulejos com malha metálica', 'Evite colocar o router atrás de uma parede da casa de banho.'],
        ['Quarto', 'Médio', 'Guarda-roupas, paredes grossas, camas metálicas', 'Eleve o router, desobstrua o caminho acima dos móveis.'],
        ['Sala', 'Baixo', 'Geralmente aberta, mas cuidado com TVs e consolas', 'Mantenha o router visível, não escondido atrás da TV.'],
        ['Garagem', 'Extremo', 'Portas metálicas, betão, carros', 'Não espere que um router interior chegue à garagem.'],
        ['Jardim / Terraço', 'Alto', 'Paredes exteriores, vidro, distância', 'Use um ponto de acesso exterior ou nó mesh.'],
      ],
    },
    {
      type: 'title',
      text: 'A regra do metro e outros truques de colocação',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Pequenos movimentos criam grandes diferenças. Não precisa de recablar a casa. Só precisa de entender como as ondas de rádio se movem e dar-lhes um caminho desobstruído.',
    },
    {
      type: 'tip',
      title: 'A regra do metro',
      html: '<p>Mover o router apenas um metro para longe de uma barreira de betão ou metal pode recuperar até 40 por cento da intensidade do sinal perdida.</p>',
    },
    {
      type: 'tip',
      title: 'Eleve para cobertura',
      html: '<p>Eleve o router à altura do peito numa prateleira. Os sinais irradiam horizontalmente da antena. Colocá-lo no chão desperdiça metade da cobertura no solo.</p>',
    },
    {
      type: 'tip',
      title: 'Mantenha visível',
      html: '<p>Nunca esconda o router dentro de um armário, roupeiro ou atrás da TV. O invólucro atua como uma gaiola de Faraday, prendendo o sinal antes de este chegar à sua divisão.</p>',
    },
    {
      type: 'tip',
      title: 'Posicionamento das antenas',
      html: '<p>Se o seu router tem antenas externas, posicione uma verticalmente e outra horizontalmente. Isto proporciona melhor cobertura para dispositivos a diferentes alturas.</p>',
    },
    {
      type: 'tip',
      title: 'Evite interferência',
      html: '<p>Mantenha o router pelo menos a 1,5 metros de micro-ondas, telefones sem fios e monitores de bebé. Estes dispositivos partilham o espectro de 2,4 GHz e causam interferência ativa.</p>',
    },
    {
      type: 'tip',
      title: 'Vantagem do piso intermédio',
      html: '<p>Se viver numa casa com vários pisos, coloque o router no piso intermédio. Os sinais propagam-se mal para cima e para baixo através dos pisos de betão.</p>',
    },
    {
      type: 'title',
      text: 'Verditos de streaming: o que o seu sinal realmente significa',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'As percentagens são abstratas. O que realmente lhe interessa é se pode ver Netflix, ganhar uma partida ou terminar uma videochamada sem congelamentos. Eis o que cada nível de sinal significa no mundo real.',
    },
    {
      type: 'table',
      headers: ['Sinal', 'Streaming 4K', 'Jogos online', 'Videochamadas', 'Navegação'],
      rows: [
        ['80% a 100%', 'Perfeito, carregamento instantâneo', 'Baixa latência, jogo competitivo', 'Cristalino, sem quedas', 'Instantâneo, sem demora'],
        ['60% a 79%', 'Bom, buffer ocasional', 'Jogável, picos de lag menores', 'Estável, raramente pixelizado', 'Rápido, sem problemas'],
        ['40% a 59%', 'Buffer a cada poucos minutos', 'Avisos de lag, rubber banding', 'Pixelizado, algumas quedas', 'Utilizável, carregamento lento'],
        ['20% a 39%', 'Impossível, congelamento constante', 'Desconexões, injogável', 'Quedas frequentes, inutilizável', 'Muito lento, timeouts'],
        ['0% a 19%', 'Não inicia', 'Não consegue ligar', 'Sem ligação', 'Inutilizável'],
      ],
    },
    {
      type: 'title',
      text: 'Soluções rápidas antes de comprar algo',
      level: 3,
    },
    {
      type: 'summary',
      title: 'Lista de verificação de otimização gratuita',
      items: [
        'Mova o router para o centro da casa, não para o canto.',
        'Eleve-o à altura do peito numa prateleira ou móvel alto.',
        'Retire-o de armários, roupeiros e de trás da TV.',
        'Se possível, aponte uma antena na vertical e outra na horizontal.',
        'Use 5 GHz para dispositivos próximos e 2,4 GHz para distantes.',
        'Mude para um canal Wi-Fi menos congestionado usando uma aplicação de scanner.',
        'Atualize o firmware do router para corrigir bugs de sinal conhecidos.',
        'Reinicie o router uma vez por mês para limpar fugas de memória.',
      ],
    },
    {
      type: 'title',
      text: 'Quando atualizar o seu hardware',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Por vezes o ambiente vence. Se já experimentou todos os truques de colocação e ainda sofre com zonas mortas, está na hora de expandir a rede em vez de lutar contra a física.',
    },
    {
      type: 'proscons',
      title: 'Extensor WiFi vs Sistema Mesh',
      items: [
        { pro: 'Os extensores são baratos e fáceis de instalar.', con: 'Os extensores criam um segundo nome de rede e reduzem a velocidade para metade.' },
        { pro: 'Os extensores funcionam para uma única zona morta.', con: 'Os extensores precisam de um sinal existente forte para amplificar.' },
        { pro: 'Os sistemas mesh criam uma rede única e contínua.', con: 'Os sistemas mesh são mais caros inicialmente.' },
        { pro: 'O mesh lida com vários pisos e casas grandes.', con: 'O mesh requer um nó principal perto do modem.' },
      ],
    },
    {
      type: 'tip',
      title: 'Quando usar mesh',
      html: '<p>Para casas com mais de 120 metros quadrados ou com paredes grossas de betão, um sistema mesh com pelo menos dois nós superará qualquer router individual, por mais caro que seja.</p>',
    },
    {
      type: 'title',
      text: 'Compreender decibéis em linguagem simples',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Os decibéis são logarítmicos, o que significa que não se comportam como números normais. Cada 3 dB de perda reduz a potência do sinal para metade. Uma perda de 6 dB significa que apenas um quarto da potência original permanece. Uma perda de 10 dB significa que apenas um décimo sobrevive. É por isso que uma parede de betão de 15 dB é devastadora. Não enfraquece apenas o sinal. Aniquila-o.',
    },
    {
      type: 'glossary',
      items: [
        { term: 'Atenuação', definition: 'A perda gradual de potência do sinal ao passar através de um material. Números mais elevados significam mais sinal perdido.' },
        { term: 'dBm', definition: 'Uma unidade de potência usada para medir a intensidade do sinal Wi-Fi. 0 dBm é um miliwatt. Valores negativos são normais, sendo -30 excelente e -80 apenas utilizável.' },
        { term: 'Zona morta', definition: 'Uma área onde o sinal Wi-Fi é demasiado fraco para estabelecer ou manter uma ligação fiável.' },
        { term: 'Rede mesh', definition: 'Um sistema de vários nós de router que trabalham em conjunto para cobrir uma grande área com uma única rede Wi-Fi contínua.' },
        { term: 'Interferência multipercurso', definition: 'Quando as ondas de rádio refletem em paredes e objetos, criando múltiplas cópias atrasadas do mesmo sinal que confundem o recetor.' },
        { term: 'SSID', definition: 'O nome da sua rede Wi-Fi. Os extensores criam frequentemente um segundo SSID, enquanto os sistemas mesh mantêm um único nome em todos os nós.' },
      ],
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'A regra de ouro da colocação do router',
      icon: 'mdi:map-marker-radius',
      badge: 'Dica fundamental',
      html: '<p>Se o seu router está atualmente num canto, dentro de um armário ou no chão, está a deitar fora 50 a 70 por cento do seu alcance potencial antes de o sinal sequer sair da divisão. A atualização mais rápida que pode fazer é movê-lo para um local aberto, central e elevado. Essa única mudança resolve frequentemente mais problemas do que comprar novos equipamentos.</p>',
    },
    {
      type: 'summary',
      title: 'Como prevenir zonas mortas de WiFi',
      items: [
        'Coloque o router ao centro, elevado e ao ar livre.',
        'Minimize o número de paredes entre o router e o dispositivo.',
        'Evite cozinhas, casas de banho e garagens como local do router.',
        'Use 5 GHz para velocidade na mesma sala, 2,4 GHz para distância.',
        'Considere mesh para casas grandes ou paredes exteriores grossas.',
        'Reinicie mensalmente e atualize o firmware para manter o desempenho máximo.',
      ],
    },
  ],
  ui: {
    labelObstacles: 'Objetos domésticos que bloqueiam o Wi-Fi',
    labelAddObstacle: 'Clique para adicionar ao caminho do sinal',
    labelRemove: 'Remover',
    labelSignalStrength: 'Sinal',
    labelEffectiveRange: 'Alcance efetivo',
    labelMeters: 'm',
    labelPercent: '%',
    labelStreamingVerdict: 'Veredito de streaming',
    verdictPerfect: 'Perfeito',
    verdictGood: 'Bom',
    verdictFair: 'Razoável',
    verdictPoor: 'Mau',
    verdictDead: 'Zona morta',
    tipTitle: 'Dica de colocação',
    label4kStreaming: 'Streaming 4K',
    labelOnlineGaming: 'Jogos online',
    labelVideoCalls: 'Videochamadas',
    labelBasicBrowsing: 'Navegação básica',
    statusPerfect: 'Perfeito',
    statusGood: 'Bom',
    statusFair: 'Razoável',
    statusPoor: 'Mau',
    statusImpossible: 'Impossível',
    statusLowLatency: 'Baixa latência',
    statusLagWarning: 'Aviso de lag',
    statusDisconnect: 'Desligar',
    statusStable: 'Estável',
    statusPixelated: 'Pixelizado',
    statusDropped: 'Interrompido',
    statusPass: 'Aprovado',
    statusUnusable: 'Inutilizável',
    tipMoveRouter: 'Mover o router apenas 1 metro para longe dessa barreira sólida pode melhorar o sinal em até 40%.',
    tipElevateRouter: 'Eleve o router à altura do peito. Os sinais propagam-se horizontalmente e o chão absorve mais do que pensa.',
    tipReduceObstacles: 'Cada parede adicional reduz o sinal para metade. Tente reduzir o número de obstáculos entre o router e o dispositivo.',

    tipFishTank: 'Um aquário bloqueia o Wi-Fi como uma parede de betão. Afaste o router ou o dispositivo dele.',
    tipMicrowave: 'Os micro-ondas interferem na banda de 2,4 GHz durante o funcionamento. Use 5 GHz ou afaste o router da cozinha.',
    labelMove: 'Mover',
    labelWalls: 'Paredes',
    labelDrywall: 'Pladur',
    labelBrick: 'Tijolo',
    labelConcrete: 'Betão',
    labelStone: 'Pedra',
    labelObjects: 'Objetos',
    labelWood: 'Madeira',
    labelMetal: 'Metal',
    labelWindow: 'Janela',
    labelFridge: 'Frigorífico',
    labelFish: 'Peixe',
    labelMicro: 'Micro',
    labelMirror: 'Espelho',
    labelFurn: 'Móvel',
    labelActions: 'Ações',
    labelUndo: 'Desfazer',
    labelAddDevice: '+ Dispositivo',
    labelClearWalls: 'Limpar paredes',
    labelClearObjects: 'Limpar objetos',
    labelClearAll: 'Limpar tudo',
    labelZoomIn: 'Aproximar',
    labelZoomOut: 'Afastar',
    labelRouter: 'Router',
    labelAverageSignal: 'Sinal médio',
    labelScaleMeters: '5 m',
    hintText: 'Arraste o router ou dispositivos para os mover. Clique duas vezes em paredes ou objetos para eliminar. Ctrl+Z para desfazer.',
    labelMaxDevices: 'Máx. 4 dispositivos',
    labelDevicePrefix: 'Dispositivo',
    labelPerDevice: 'Por dispositivo',
    labelDb: 'dB',
  },
};
