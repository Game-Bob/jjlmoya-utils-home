import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "calculadora-consumo-agua-hogar",
  title: "Calculadora de consumo de agua del hogar",
  description:
    "Estima la huella de agua de tu hogar a partir de tus hábitos diarios, descubre qué actividades consumen más y compara tu rutina con un escenario realista de menor consumo.",
  language: "es",
  ui: {
    presetLabel: "Empieza con un patrón",
    presetEveryday: "Cotidiano",
    presetWaterAware: "Consumo consciente",
    presetLowFlow: "Bajo caudal",
    controlsLabel: "Datos de agua del hogar",
    optionalInputsTitle: "Electrodomésticos y fugas",
    peopleLabel: "Personas que usan la vivienda",
    peopleUnit: "personas",
    showerTitle: "Duchas",
    showersPerWeekLabel: "Duchas por persona",
    showerMinutesLabel: "Minutos cada una",
    showerFlowLabel: "Caudal",
    toiletTitle: "Inodoro",
    flushesPerDayLabel: "Descargas por persona",
    flushVolumeLabel: "Volumen por descarga",
    tapTitle: "Grifos",
    tapMinutesLabel: "Tiempo abierto por persona",
    tapFlowLabel: "Caudal",
    washingLoadsLabel: "Cargas de lavadora",
    washingVolumeLabel: "Litros por lavado",
    dishwasherLoadsLabel: "Cargas de lavavajillas",
    dishwasherVolumeLabel: "Litros por ciclo",
    leakLabel: "Estimación de fuga evitable",
    litresPerDay: "litros estimados cada día",
    litresPerMonth: "litros al mes",
    litresPerYear: "litros al año",
    perPerson: "litros por persona y día",
    reference: "Referencia",
    aboveReference: "Por encima de la referencia",
    belowReference: "Por debajo de la referencia",
    nearReference: "Cerca de la referencia",
    referenceDescription:
      "La media de los hogares españoles del INE es de 128 litros por persona y día en su última serie publicada. Úsala como contexto, no como una línea de aprobado o suspenso.",
    savingTitle: "Margen de reducción",
    savingDescription:
      "Es la diferencia conjunta entre tus hábitos actuales y los supuestos de menor consumo. Prueba un cambio cada vez antes de convertirlo en compromiso.",
    currentScenario: "Tu patrón actual",
    efficientScenario: "Escenario de menor consumo",
    monthlySaving: "litros que podrías ahorrar al mes",
    categoryShowers: "Duchas",
    categoryToilets: "Inodoro",
    categoryTaps: "Grifos",
    categoryWashing: "Lavadora",
    categoryDishwasher: "Lavavajillas",
    categoryLeaks: "Fugas",
    breakdownTitle: "En qué se va el mes",
    usageShare: "del total",
  },
  faq: [
    {
      question: "¿Qué estima esta calculadora de agua doméstica?",
      answer:
        "Estima los litros diarios, mensuales y anuales a partir de tus duchas, descargas, grifos, lavadora, lavavajillas y fugas. También muestra un escenario de menor consumo basado en cambios moderados de hábitos y dispositivos.",
    },
    {
      question: "¿El resultado es igual que mi factura del agua?",
      answer:
        "No. Es una estimación para planificar basada en tus hábitos. La factura también incluye el uso exterior, servicios compartidos, el momento de lectura del contador, fugas fuera de casa y el caudal real de tus instalaciones.",
    },
    {
      question: "¿Qué dato suele cambiar más el resultado?",
      answer:
        "Las duchas largas y con mucho caudal suelen dominar, pero depende del número de personas, el volumen del inodoro, el tiempo de los grifos y la frecuencia de lavadora y lavavajillas. El desglose ordena tus propias actividades.",
    },
    {
      question: "¿Qué es el escenario de menor consumo?",
      answer:
        "Aplica objetivos transparentes como duchas de cinco minutos, caudales menores, descargas eficientes, menos tiempo de grifo, cargas completas y ninguna fuga evitable. Sirve para comparar, no promete el ahorro de un aparato concreto.",
    },
    {
      question: "¿Por qué aparece una cifra de referencia?",
      answer:
        "Es la media más reciente de los hogares españoles disponible en la serie de suministro y saneamiento del agua del INE, expresada por persona y día. No es un objetivo ni un diagnóstico: el clima y los usos no medidos cambian mucho el resultado.",
    },
  ],
  howTo: [
    {
      name: "Introduce el número de personas",
      text: "Empieza por las personas que usan habitualmente la vivienda. La calculadora divide el resultado por persona para que puedas comparar hogares de distinto tamaño.",
    },
    {
      name: "Describe los hábitos principales",
      text: "Introduce la frecuencia, duración y caudal de las duchas y añade descargas, tiempo de grifo, lavadora y lavavajillas. Usa una medición o la etiqueta del aparato cuando la tengas.",
    },
    {
      name: "Lee la estimación diaria",
      text: "La cifra grande es el consumo estimado del hogar cada día. Los totales mensual y anual usan los mismos hábitos y se actualizan al cambiar cualquier campo.",
    },
    {
      name: "Encuentra el mayor margen",
      text: "Mira el desglose en litros y porcentajes mensuales. El ahorro junto a cada actividad estima qué podría cambiar al acercarla a los supuestos de menor consumo.",
    },
    {
      name: "Prueba un patrón realista",
      text: "Prueba Consumo consciente o Bajo caudal, vuelve a tus valores y cambia solo un hábito. Así sabrás si conviene investigar primero una ducha, una carga completa o una fuga.",
    },
  ],
  seo: {
    introTitle: "De la factura del agua a los hábitos que hay detrás",
    introOne:
      "La factura dice cuánto pasó por el contador, pero rara vez qué hábito provocó el cambio. Esta calculadora convierte las partes repetibles de una rutina doméstica en una estimación transparente: personas, duchas, descargas, grifos, lavadora, lavavajillas y fugas evitables. Cada dato queda visible para que puedas cuestionar una suposición en lugar de aceptar un total misterioso.",
    introTwo:
      "La última serie del INE sitúa la media de los hogares españoles en 128 litros por persona y día durante 2024. Es un contexto útil, no un objetivo universal: el uso exterior, el clima, un contador compartido o una fuga oculta pueden alejar razonablemente a una vivienda de esa media.",
    averageLabel: "Media de los hogares españoles por persona y día",
    groupsLabel: "Grupos de hábitos en el desglose",
    daysLabel: "Días usados para estimar el mes",
    readTitle: "Cómo leer la estimación",
    readText:
      "Empieza por la barra mensual más larga, no por la cifra más llamativa. Una ducha larga puede ser un palanca mayor que una actividad pequeña y repetida menos veces, mientras que una fuga mínima puede correr cada día. La calculadora ordena las categorías con tus datos y muestra un posible ahorro mensual.",
    currentTitle: "Patrón actual",
    currentText:
      "Tus frecuencias, duraciones, caudales y litros por carga se convierten en litros diarios y mensuales.",
    currentPoints: [
      "Mantiene visible el tamaño del hogar",
      "Muestra la aportación de cada actividad",
      "Se actualiza mientras editas un campo",
    ],
    lowerTitle: "Escenario de menor consumo",
    lowerText:
      "La comparación aplica objetivos moderados y transparentes, como duchas más cortas, menos caudal y cargas completas.",
    lowerPoints: [
      "No promete un ahorro garantizado",
      "No calcula el importe de la factura",
      "Permite probar un cambio antes de actuar",
    ],
    chooseTitle: "Elige un solo cambio",
    chooseText:
      "Un escenario útil debe ser lo bastante concreto para actuar. Reduce un minuto la ducha, mide un caudal supuesto o quita la fuga después de repararla y comprobarla. Si el resultado cambia poco, pasa a la siguiente categoría.",
    actions: [
      "Mide el caudal de un grifo o una ducha con un recipiente y un cronómetro.",
      "Compara la etiqueta del electrodoméstico con los litros por carga introducidos.",
      "Prueba un preset para entender hacia dónde se mueve el resultado.",
      "Cambia un hábito y guarda un objetivo doméstico que puedas mantener.",
    ],
    limitsTitle: "Lo que esta estimación no puede decirte",
    limitsText:
      "No reproduce tu contador, no identifica una avería, no incluye todos los usos exteriores ni certifica que un grifo entregue el caudal de su etiqueta. Tómala como ayuda para decidir. Si no coincide con el contador, investiga un uso ausente o una fuga en lugar de inflar los hábitos introducidos.",
    flowTitle: "Por qué importan juntos el caudal y la frecuencia",
    flowText:
      "La misma instalación puede producir totales muy distintos según cuánto tiempo funciona y con qué frecuencia. La ducha multiplica personas, duchas semanales, minutos y litros por minuto. Lavadora y lavavajillas usan cargas semanales y litros por carga. Esa relación ayuda a decidir si conviene cambiar un hábito, mantener una instalación o medir mejor.",
  },
});

export { content };
