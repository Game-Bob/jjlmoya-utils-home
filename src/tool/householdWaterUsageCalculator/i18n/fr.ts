import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "calculateur-consommation-eau-menage",
  title: "Calculateur de consommation d'eau du foyer",
  description:
    "Estimez la consommation d'eau de votre foyer à partir de vos habitudes, repérez les activités les plus consommatrices et comparez votre routine avec un scénario réaliste de moindre consommation.",
  language: "fr",
  ui: {
    presetLabel: "Commencer avec un profil",
    presetEveryday: "Quotidien",
    presetWaterAware: "Économe en eau",
    presetLowFlow: "Faible débit",
    controlsLabel: "Données d'eau du foyer",
    optionalInputsTitle: "Appareils et fuites",
    peopleLabel: "Personnes dans le foyer",
    peopleUnit: "personnes",
    showerTitle: "Douches",
    showersPerWeekLabel: "Douches par personne",
    showerMinutesLabel: "Minutes par douche",
    showerFlowLabel: "Débit",
    toiletTitle: "Toilettes",
    flushesPerDayLabel: "Chasses par personne",
    flushVolumeLabel: "Volume par chasse",
    tapTitle: "Robinets",
    tapMinutesLabel: "Temps d'ouverture par personne",
    tapFlowLabel: "Débit",
    washingLoadsLabel: "Lessives",
    washingVolumeLabel: "Litres par lessive",
    dishwasherLoadsLabel: "Cycles de lave-vaisselle",
    dishwasherVolumeLabel: "Litres par cycle",
    leakLabel: "Estimation d'une fuite évitable",
    litresPerDay: "litres estimés par jour",
    litresPerMonth: "litres par mois",
    litresPerYear: "litres par an",
    perPerson: "litres par personne et par jour",
    reference: "Référence",
    aboveReference: "Au-dessus de la référence",
    belowReference: "En dessous de la référence",
    nearReference: "Proche de la référence",
    referenceDescription:
      "La moyenne des foyers espagnols publiée par l'INE est de 128 litres par personne et par jour dans sa dernière série. Utilisez-la comme contexte, pas comme seuil de réussite.",
    savingTitle: "Marge de réduction",
    savingDescription:
      "Il s'agit de la différence entre vos habitudes actuelles et les hypothèses de moindre consommation. Testez une seule modification à la fois.",
    currentScenario: "Votre profil actuel",
    efficientScenario: "Scénario de moindre consommation",
    monthlySaving: "litres potentiellement économisés par mois",
    categoryShowers: "Douches",
    categoryToilets: "Toilettes",
    categoryTaps: "Robinets",
    categoryWashing: "Lavage",
    categoryDishwasher: "Lave-vaisselle",
    categoryLeaks: "Fuites",
    breakdownTitle: "Répartition du mois",
    usageShare: "du total",
  },
  faq: [
    {
      question: "Que mesure ce calculateur d'eau domestique?",
      answer:
        "Il estime les litres par jour, par mois et par an à partir de vos douches, chasses d'eau, robinets, lessives, lave-vaisselle et fuites. Il affiche aussi un scénario de moindre consommation fondé sur des changements mesurés.",
    },
    {
      question: "Le résultat est-il identique à ma facture d'eau?",
      answer:
        "Non. Il s'agit d'une estimation de planification basée sur vos habitudes. Une facture comprend aussi les usages extérieurs, les services partagés, le relevé du compteur, les fuites hors du logement et le débit réel de vos équipements.",
    },
    {
      question: "Quelle donnée change généralement le plus le résultat?",
      answer:
        "Les douches longues et à fort débit dominent souvent, mais le résultat dépend du nombre de personnes, du volume des chasses, du temps au robinet et de la fréquence des lessives et des cycles du lave-vaisselle.",
    },
    {
      question: "Qu'est-ce que le scénario de moindre consommation?",
      answer:
        "Il applique des objectifs transparents: douches de cinq minutes, débits plus faibles, chasses efficaces, robinets moins longtemps ouverts, charges pleines et aucune fuite évitable. C'est une comparaison, pas une promesse d'appareil.",
    },
    {
      question: "Pourquoi afficher une valeur de référence?",
      answer:
        "Il s'agit de la dernière moyenne espagnole des ménages publiée par l'INE, exprimée par personne et par jour. Ce n'est ni une cible ni un diagnostic, car le climat et les usages non mesurés varient.",
    },
  ],
  howTo: [
    {
      name: "Indiquez le nombre de personnes",
      text: "Commencez par les personnes qui utilisent régulièrement le logement. Le résultat est aussi rapporté à une personne pour comparer des foyers de tailles différentes.",
    },
    {
      name: "Décrivez les habitudes principales",
      text: "Indiquez la fréquence, la durée et le débit des douches, puis les chasses, le temps au robinet, les lessives et le lave-vaisselle. Utilisez une mesure ou l'étiquette de l'appareil quand c'est possible.",
    },
    {
      name: "Lisez l'estimation quotidienne",
      text: "Le grand chiffre correspond aux litres estimés pour le foyer chaque jour. Les valeurs mensuelle et annuelle utilisent les mêmes habitudes et se mettent à jour immédiatement.",
    },
    {
      name: "Trouvez le principal levier",
      text: "Consultez la répartition en litres et en parts mensuelles. L'économie affichée à côté de chaque activité indique ce qui pourrait changer avec le scénario de moindre consommation.",
    },
    {
      name: "Testez un profil réaliste",
      text: "Essayez Économe en eau ou Faible débit, puis revenez à vos valeurs et ne modifiez qu'une habitude. Vous verrez quelle piste mérite d'être vérifiée en premier.",
    },
  ],
  seo: {
    introTitle: "De la facture d'eau aux habitudes qui la produisent",
    introOne:
      "Une facture indique le volume passé par le compteur, mais rarement l'habitude responsable de son évolution. Ce calculateur transforme les éléments répétitifs de la vie du foyer en estimation transparente: personnes, douches, chasses, robinets, lessive, lave-vaisselle et fuites évitables. Chaque donnée reste modifiable pour vous permettre de vérifier les hypothèses.",
    introTwo:
      "La dernière série de l'INE indique une moyenne de 128 litres par personne et par jour pour les ménages espagnols en 2024. Cette valeur donne un contexte utile, pas un objectif universel: usage extérieur, climat, compteur partagé ou fuite cachée peuvent expliquer un écart important.",
    averageLabel: "Moyenne espagnole par personne et par jour",
    groupsLabel: "Groupes d'habitudes dans la répartition",
    daysLabel: "Jours utilisés pour l'estimation mensuelle",
    readTitle: "Comment lire l'estimation",
    readText:
      "Commencez par la barre mensuelle la plus longue, pas par le nombre le plus visible. Une douche longue peut être un levier plus important qu'une petite activité peu fréquente, tandis qu'une petite fuite peut couler chaque jour. Le calculateur classe les catégories selon vos données et estime une économie mensuelle possible.",
    currentTitle: "Profil actuel",
    currentText:
      "Vos fréquences, durées, débits et volumes par cycle sont convertis en litres quotidiens et mensuels.",
    currentPoints: [
      "Garde la taille du foyer visible",
      "Montre la contribution de chaque activité",
      "Se met à jour pendant la saisie",
    ],
    lowerTitle: "Scénario de moindre consommation",
    lowerText:
      "La comparaison applique des objectifs modérés et transparents: douches plus courtes, débit réduit et charges pleines.",
    lowerPoints: [
      "Ne garantit pas une économie",
      "Ne calcule pas le montant de la facture",
      "Permet de tester avant d'agir",
    ],
    chooseTitle: "Choisissez un seul changement",
    chooseText:
      "Un scénario utile doit être assez précis pour être essayé. Réduisez la douche d'une minute, mesurez un débit supposé ou retirez la fuite après réparation et contrôle. Si le résultat bouge peu, examinez la catégorie suivante.",
    actions: [
      "Mesurez le débit d'un robinet ou d'une douche avec un récipient et un chronomètre.",
      "Comparez l'étiquette de l'appareil aux litres par charge saisis.",
      "Lancez un profil pour comprendre le sens du changement.",
      "Modifiez une habitude et fixez un objectif réaliste pour le foyer.",
    ],
    limitsTitle: "Ce que cette estimation ne peut pas dire",
    limitsText:
      "Elle ne reproduit pas votre compteur, ne détecte pas une panne de plomberie, n'inclut pas tous les usages extérieurs et ne garantit pas le débit indiqué sur une étiquette. Utilisez-la comme aide à la décision. En cas d'écart avec le compteur, recherchez un usage manquant ou une fuite.",
    flowTitle: "Pourquoi débit et fréquence comptent ensemble",
    flowText:
      "Un même équipement peut produire des volumes très différents selon sa durée et sa fréquence d'utilisation. La douche multiplie personnes, douches hebdomadaires, minutes et litres par minute. Lessive et lave-vaisselle utilisent les charges hebdomadaires et les litres par charge. Cette relation aide à choisir entre changer une habitude, entretenir un équipement ou mieux mesurer.",
  },
});

export { content };
