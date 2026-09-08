import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'pt',
  slug: 'calculadora-tamanho-armazem',
  title: 'Calculadora do tamanho do espaço de armazenamento',
  description: 'Estime o tamanho do espaço de armazenamento necessário a partir das suas caixas, móveis e área de acesso.',
  labels: {
    inventory: 'O seu inventário', boxes: 'Caixas', furniture: 'Objetos volumosos', smallBoxes: 'Caixas pequenas', mediumBoxes: 'Caixas médias', largeBoxes: 'Caixas grandes', sofa: 'Sofá', bed: 'Cama', wardrobe: 'Armário', desk: 'Secretária', chair: 'Cadeiras', accessLane: 'Zona de acesso', accessHint: 'Mais espaço de acesso ocupa área, mas mantém ao alcance os objetos de que precisa.', quickScenarios: 'Carregar inventário inicial', reset: 'Repor',
  },
  presetLabels: ['Mudança de estúdio', 'Um quarto', 'Escritório pequeno'],
  accessLabels: ['Apertado', 'Equilibrado', 'Acesso frequente'],
  result: {
    title: 'Plano de carga', minimum: 'Tamanho mínimo', comfortable: 'Tamanho confortável', emptyStatus: 'Adicione objetos', readyStatus: 'Plano equilibrado', tightStatus: 'O mínimo é apertado', emptyMessage: 'O plano desenhará as zonas de armazenamento quando adicionar objetos.', readyMessage: 'O tamanho mínimo deixa espaço para o acesso escolhido.', tightMessage: 'O tamanho mínimo está quase cheio. O tamanho confortável será mais fácil de utilizar.', unit: 'm²', access: 'acesso', boxesZone: 'Caixas', furnitureZone: 'Volumosos', laneZone: 'Acesso', floorPlanLabel: 'Plano proporcional do espaço com caixas, objetos volumosos e zona de acesso', packedLabel: 'embalado', areaLabel: 'Área de planeamento', volumeLabel: 'volume', emptyPlan: 'Adicione caixas ou móveis para desenhar o plano',
  },
  seo: [
    { type: 'title', level: 2, text: 'Escolha o espaço com base no que possui' },
    { type: 'paragraph', html: 'Uma calculadora de tamanho de armazenamento é mais útil quando começa pelo seu inventário real. Introduza caixas e móveis volumosos e indique se precisa de uma arrumação compacta ou de espaço para chegar aos objetos do fundo.' },
    { type: 'title', level: 2, text: 'O que esta estimativa mede' },
    { type: 'list', items: ['Volume embalado de caixas e móveis', 'Área de chão ocupada depois de empilhar as caixas', 'Zona de acesso consoante a frequência de levantamento', 'Tamanhos mínimo e confortável arredondados a medidas comuns'] },
    { type: 'title', level: 2, text: 'Como interpretar os dois tamanhos' },
    { type: 'paragraph', html: 'O tamanho mínimo é a primeira medida padrão que contém a área planeada. É uma verificação de capacidade, não uma garantia de que todos os móveis cabem em qualquer divisão. O tamanho confortável acrescenta margem para evitar uma parede de caixas.' },
    { type: 'title', level: 2, text: 'Confirme antes de reservar' },
    { type: 'paragraph', html: 'Use o resultado para criar uma lista de opções e compare depois as dimensões interiores, a largura da porta, a altura, os pilares, as escadas e o acesso de carga. Um anúncio em metros cúbicos pode parecer amplo se a altura não for aproveitável.' },
    { type: 'list', items: ['Conte as caixas pelo tamanho exterior aproximado.', 'Inclua sofás e armários mesmo que tencione desmontá-los.', 'Escolha Acesso frequente para artigos sazonais, stock ou material de trabalho.', 'Confirme a área interior útil e meça a porta antes de transportar móveis grandes.'] },
    { type: 'tip', title: 'Limite do planeamento', html: 'É uma estimativa transparente baseada em medidas representativas e pressupostos de empilhamento. Não verifica o espaço real, a carga máxima, o preço nem a passagem de um móvel irregular pela porta.' },
  ],
  faq: [
    { question: 'Devo escolher o tamanho mínimo ou confortável?', answer: 'Escolha o mínimo se embalar de forma compacta e raramente retirar objetos. O confortável é melhor quando precisa de acesso, o inventário pode crescer ou os móveis são difíceis de empilhar.' },
    { question: 'Por que razão a calculadora usa metros quadrados?', answer: 'Os fornecedores indicam frequentemente a área de chão, que mostra se consegue colocar e alcançar os objetos. O volume em metros cúbicos também permite comparar anúncios baseados em volume.' },
    { question: 'Posso usá-la para uma garagem ou contentor?', answer: 'Sim, como ponto de partida. Confirme as dimensões interiores, a abertura, o teto, a ventilação e os limites de peso ou empilhamento do espaço real.' },
    { question: 'A calculadora conhece o tamanho real dos meus móveis?', answer: 'Não. Usa áreas ocupadas e volumes representativos. Meça objetos invulgares, frágeis ou muito profundos e deixe margem quando o acesso for incerto.' },
  ],
  howTo: [
    { name: 'Carregue um inventário inicial', text: 'Escolha um cenário próximo da sua mudança ou arrumação e altere as quantidades.' },
    { name: 'Conte caixas e objetos volumosos', text: 'Introduza caixas pequenas, médias e grandes e adicione sofás, camas, armários, secretárias e cadeiras.' },
    { name: 'Defina a zona de acesso', text: 'Escolha Apertado, Equilibrado ou Acesso frequente conforme a frequência com que irá entrar.' },
    { name: 'Compare as recomendações', text: 'Use o mínimo como limite de capacidade e o confortável como opção mais prática para acesso regular.' },
  ],
};

export const content = buildLocalizedContent(copy);
