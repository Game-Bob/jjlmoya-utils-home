import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "calculadora-consumo-agua-domestico",
  title: "Calculadora de consumo de água doméstico",
  description:
    "Estime o consumo de água da sua casa com base nos hábitos diários, descubra quais atividades gastam mais e compare a rotina atual com um cenário realista de menor consumo.",
  language: "pt",
  ui: {
    presetLabel: "Comece com um padrão",
    presetEveryday: "Diário",
    presetWaterAware: "Uso consciente",
    presetLowFlow: "Baixo caudal",
    controlsLabel: "Dados de água da casa",
    optionalInputsTitle: "Eletrodomésticos e fugas",
    peopleLabel: "Pessoas que usam a casa",
    peopleUnit: "pessoas",
    showerTitle: "Duches",
    showersPerWeekLabel: "Duches por pessoa",
    showerMinutesLabel: "Minutos cada",
    showerFlowLabel: "Caudal",
    toiletTitle: "Sanita",
    flushesPerDayLabel: "Descargas por pessoa",
    flushVolumeLabel: "Volume por descarga",
    tapTitle: "Torneiras",
    tapMinutesLabel: "Tempo aberta por pessoa",
    tapFlowLabel: "Caudal",
    washingLoadsLabel: "Cargas de roupa",
    washingVolumeLabel: "Litros por lavagem",
    dishwasherLoadsLabel: "Cargas da máquina de lavar loiça",
    dishwasherVolumeLabel: "Litros por ciclo",
    leakLabel: "Estimativa de fuga evitável",
    litresPerDay: "litros estimados por dia",
    litresPerMonth: "litros por mês",
    litresPerYear: "litros por ano",
    perPerson: "litros por pessoa por dia",
    reference: "Referência",
    aboveReference: "Acima da referência",
    belowReference: "Abaixo da referência",
    nearReference: "Perto da referência",
    referenceDescription:
      "A média dos agregados familiares espanhóis do INE é de 128 litros por pessoa por dia na série mais recente. Use-a como contexto, não como meta de aprovação.",
    savingTitle: "Margem para reduzir",
    savingDescription:
      "É a diferença conjunta entre os seus hábitos atuais e as premissas de menor consumo. Teste uma alteração de cada vez.",
    currentScenario: "O seu padrão atual",
    efficientScenario: "Cenário de menor consumo",
    monthlySaving: "litros potencialmente poupados por mês",
    categoryShowers: "Duches",
    categoryToilets: "Sanita",
    categoryTaps: "Torneiras",
    categoryWashing: "Lavagem",
    categoryDishwasher: "Máquina de loiça",
    categoryLeaks: "Fugas",
    breakdownTitle: "Onde se gasta o mês",
    usageShare: "do total",
  },
  faq: [
    {
      question: "O que estima esta calculadora de água doméstica?",
      answer:
        "Estima litros por dia, mês e ano com base nos seus duches, descargas, torneiras, roupa, máquina de loiça e fugas. Também mostra um cenário de menor consumo baseado em alterações moderadas.",
    },
    {
      question: "O resultado é igual à minha fatura da água?",
      answer:
        "Não. É uma estimativa de planeamento baseada nos seus hábitos. A fatura também pode incluir uso exterior, serviços partilhados, o momento da leitura, fugas fora de casa e o caudal real das torneiras.",
    },
    {
      question: "Que dado costuma alterar mais o resultado?",
      answer:
        "Duches longos e com caudal elevado costumam pesar mais, mas depende do número de pessoas, do volume da descarga, do tempo das torneiras e da frequência da roupa e da loiça. O resumo usa os seus dados.",
    },
    {
      question: "O que é o cenário de menor consumo?",
      answer:
        "Aplica objetivos transparentes, como duches de cinco minutos, caudais menores, descargas eficientes, menos tempo de torneira, cargas completas e nenhuma fuga evitável. É uma comparação, não uma promessa sobre um aparelho.",
    },
    {
      question: "Por que aparece uma referência?",
      answer:
        "É a média espanhola mais recente disponível na série do INE sobre abastecimento e saneamento da água, por pessoa e por dia. Não é uma meta nem um diagnóstico, pois o clima e os usos não medidos variam.",
    },
  ],
  howTo: [
    {
      name: "Indique o número de pessoas",
      text: "Comece pelas pessoas que usam regularmente a casa. A calculadora também divide o resultado por pessoa para comparar casas de tamanhos diferentes.",
    },
    {
      name: "Descreva os hábitos principais",
      text: "Indique frequência, duração e caudal dos duches e acrescente descargas, tempo de torneira, roupa e loiça. Use uma medição ou a etiqueta do aparelho quando possível.",
    },
    {
      name: "Leia a estimativa diária",
      text: "O número grande é a estimativa de litros da casa por dia. Os valores mensais e anuais usam os mesmos hábitos e atualizam-se enquanto edita.",
    },
    {
      name: "Encontre a maior alavanca",
      text: "Veja a divisão em litros e percentagens mensais. A poupança junto a cada atividade indica o que pode mudar ao aproximá-la do cenário de menor consumo.",
    },
    {
      name: "Teste um perfil realista",
      text: "Experimente Uso consciente ou Baixo caudal, volte aos seus valores e altere apenas um hábito. Assim saberá o que vale a pena investigar primeiro.",
    },
  ],
  seo: {
    introTitle: "Da fatura da água aos hábitos que a explicam",
    introOne:
      "A fatura mostra quanto passou pelo contador, mas raramente qual hábito causou a mudança. Esta calculadora transforma partes repetíveis da rotina doméstica numa estimativa transparente: pessoas, duches, descargas, torneiras, roupa, loiça e fugas evitáveis. Cada entrada fica visível para poder questionar uma premissa.",
    introTwo:
      "A série mais recente do INE aponta para uma média de 128 litros por pessoa e por dia nos agregados espanhóis em 2024. É contexto útil, não um objetivo universal: uso exterior, clima, contador partilhado ou fuga escondida podem explicar uma diferença significativa.",
    averageLabel: "Média dos agregados espanhóis por pessoa e por dia",
    groupsLabel: "Grupos de hábitos no resumo",
    daysLabel: "Dias usados na estimativa mensal",
    readTitle: "Como ler a estimativa",
    readText:
      "Comece pela barra mensal mais longa, não pelo número mais chamativo. Um duche longo pode ser uma alavanca maior do que uma atividade pequena e pouco frequente, enquanto uma pequena fuga pode correr todos os dias. A calculadora ordena as categorias com os seus dados.",
    currentTitle: "Padrão atual",
    currentText:
      "As suas frequências, durações, caudais e litros por carga são convertidos em litros diários e mensais.",
    currentPoints: [
      "Mantém visível o tamanho da casa",
      "Mostra a contribuição de cada atividade",
      "Atualiza-se enquanto edita",
    ],
    lowerTitle: "Cenário de menor consumo",
    lowerText:
      "A comparação aplica objetivos moderados e transparentes, como duches mais curtos, caudal menor e cargas completas.",
    lowerPoints: [
      "Não garante uma poupança",
      "Não calcula o valor da fatura",
      "Permite testar antes de agir",
    ],
    chooseTitle: "Escolha uma mudança",
    chooseText:
      "Um cenário útil deve ser concreto o suficiente para experimentar. Reduza o duche em um minuto, meça um caudal estimado ou retire a fuga depois de a reparar e verificar. Se mudar pouco, passe à categoria seguinte.",
    actions: [
      "Meça o caudal de uma torneira ou duche com um recipiente e um cronómetro.",
      "Compare a etiqueta do aparelho com os litros por carga introduzidos.",
      "Execute um perfil para perceber a direção da mudança.",
      "Altere um hábito e defina um objetivo doméstico realista.",
    ],
    limitsTitle: "O que esta estimativa não pode dizer",
    limitsText:
      "Não reproduz o seu contador, não identifica uma avaria, não inclui todo o uso exterior e não garante que uma torneira forneça o valor da etiqueta. Use-a para decidir. Se divergir do contador, procure uso em falta ou uma fuga em vez de aumentar os hábitos sem evidência.",
    flowTitle: "Por que caudal e frequência contam juntos",
    flowText:
      "O mesmo equipamento pode produzir totais muito diferentes conforme o tempo e a frequência de uso. O duche multiplica pessoas, duches semanais, minutos e litros por minuto. Roupa e loiça usam cargas semanais e litros por carga. Isso ajuda a decidir entre mudar um hábito, fazer manutenção ou medir melhor.",
  },
});

export { content };
