import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "kalkylator-hushallsvattenforbrukning",
  title: "Kalkylator för hushållets vattenförbrukning",
  description:
    "Uppskatta hushållets vattenförbrukning utifrån vardagsvanor, se vilka aktiviteter som använder mest och jämför rutinen med ett realistiskt scenario med lägre förbrukning.",
  language: "sv",
  ui: {
    presetLabel: "Börja med ett mönster",
    presetEveryday: "Vardag",
    presetWaterAware: "Vattensmart",
    presetLowFlow: "Lågt flöde",
    controlsLabel: "Vattenuppgifter för hushållet",
    optionalInputsTitle: "Apparater och läckor",
    peopleLabel: "Personer i hushållet",
    peopleUnit: "personer",
    showerTitle: "Duschar",
    showersPerWeekLabel: "Duschar per person",
    showerMinutesLabel: "Minuter per gång",
    showerFlowLabel: "Flöde",
    toiletTitle: "Toalett",
    flushesPerDayLabel: "Spolningar per person",
    flushVolumeLabel: "Volym per spolning",
    tapTitle: "Kranar",
    tapMinutesLabel: "Öppen tid per person",
    tapFlowLabel: "Flöde",
    washingLoadsLabel: "Tvättar",
    washingVolumeLabel: "Liter per tvätt",
    dishwasherLoadsLabel: "Diskmaskinskörningar",
    dishwasherVolumeLabel: "Liter per körning",
    leakLabel: "Uppskattad läcka som kan undvikas",
    litresPerDay: "uppskattade liter per dag",
    litresPerMonth: "liter per månad",
    litresPerYear: "liter per år",
    perPerson: "liter per person och dag",
    reference: "Referens",
    aboveReference: "Över referensen",
    belowReference: "Under referensen",
    nearReference: "Nära referensen",
    referenceDescription:
      "INE:s senaste publicerade serie anger 128 liter per person och dag som genomsnitt för spanska hushåll. Använd det som sammanhang, inte som en godkänd nivå.",
    savingTitle: "Utrymme att minska",
    savingDescription:
      "Detta är skillnaden mellan dina nuvarande vanor och antagandena för lägre förbrukning. Testa en förändring i taget.",
    currentScenario: "Ditt nuvarande mönster",
    efficientScenario: "Scenario med lägre förbrukning",
    monthlySaving: "liter som kan sparas per månad",
    categoryShowers: "Duschar",
    categoryToilets: "Toalett",
    categoryTaps: "Kranar",
    categoryWashing: "Tvätt",
    categoryDishwasher: "Diskmaskin",
    categoryLeaks: "Läckor",
    breakdownTitle: "Månadens fördelning",
    usageShare: "av totalen",
  },
  faq: [
    {
      question: "Vad uppskattar den här vattenkalkylatorn?",
      answer:
        "Den uppskattar liter per dag, månad och år utifrån duschar, spolningar, kranar, tvätt, diskmaskin och läckor. Den visar också ett scenario med lägre förbrukning baserat på måttliga förändringar.",
    },
    {
      question: "Är resultatet samma som på vattenräkningen?",
      answer:
        "Nej. Det är en planeringsuppskattning utifrån dina vanor. Räkningen kan även innehålla utomhusbruk, gemensamma system, avläsningstid, läckor utanför bostaden och armaturernas verkliga flöde.",
    },
    {
      question: "Vilken uppgift ändrar oftast resultatet mest?",
      answer:
        "Långa duschar med högt flöde dominerar ofta, men även antal personer, spolvolym, tid vid kranen och hur ofta tvätt och disk körs spelar roll. Fördelningen bygger på dina uppgifter.",
    },
    {
      question: "Vad är scenariot med lägre förbrukning?",
      answer:
        "Det använder tydliga mål som femminutersduschar, lägre flöde, effektiva spolningar, kortare krananvändning, fulla maskiner och ingen läcka som kan undvikas. Det är en jämförelse, inte ett löfte om en apparat.",
    },
    {
      question: "Varför visas en referens?",
      answer:
        "Det är det senaste spanska hushållsgenomsnittet i INE:s serie om vattenförsörjning och sanitet, uttryckt per person och dag. Det är inget mål eller någon diagnos eftersom förhållanden och omätbar användning varierar.",
    },
  ],
  howTo: [
    {
      name: "Ange antal personer",
      text: "Börja med personer som regelbundet använder hemmet. Kalkylatorn visar också per person så att hushåll av olika storlek kan jämföras.",
    },
    {
      name: "Beskriv de viktigaste vanorna",
      text: "Ange duscharnas frekvens, tid och flöde och lägg till spolningar, krantid, tvätt och disk. Använd en mätning eller apparatens märkning när du kan.",
    },
    {
      name: "Läs den dagliga uppskattningen",
      text: "Den stora siffran är hushållets uppskattade liter per dag. Månads- och årsvärdena bygger på samma vanor och uppdateras direkt.",
    },
    {
      name: "Hitta den största hävstången",
      text: "Se fördelningen i liter och andelar per månad. Besparingen bredvid varje aktivitet visar vad som kan ändras mot scenariot med lägre förbrukning.",
    },
    {
      name: "Testa ett realistiskt mönster",
      text: "Prova Vattensmart eller Lågt flöde, återgå sedan till dina värden och ändra en vana. Då ser du vad som är mest värt att undersöka först.",
    },
  ],
  seo: {
    introTitle: "Från vattenräkningen till vanorna bakom den",
    introOne:
      "En vattenräkning visar hur mycket som passerat mätaren, men sällan vilken vana som orsakat förändringen. Den här kalkylatorn gör återkommande delar av hemmets rutin synliga: personer, duschar, spolningar, kranar, tvätt, disk och läckor som kan undvikas.",
    introTwo:
      "Den senaste INE-serien anger i genomsnitt 128 liter per person och dag för spanska hushåll år 2024. Det är användbar bakgrund, inte ett universellt mål: utomhusbruk, klimat, gemensam mätare eller en dold läcka kan förklara skillnaden.",
    averageLabel: "Spanskt hushållsgenomsnitt per person och dag",
    groupsLabel: "Vanegrupper i fördelningen",
    daysLabel: "Dagar i månadsuppskattningen",
    readTitle: "Så läser du uppskattningen",
    readText:
      "Börja med den längsta månadsstapeln, inte det mest synliga talet. En lång dusch kan vara en större hävstång än en liten aktivitet som sker mer sällan, medan en liten läcka kan pågå varje dag. Kategorierna rangordnas efter dina uppgifter.",
    currentTitle: "Nuvarande mönster",
    currentText:
      "Frekvens, tid, flöde och liter per körning räknas om till dagliga och månatliga liter.",
    currentPoints: [
      "Håller hushållets storlek synlig",
      "Visar varje aktivitets bidrag",
      "Uppdateras när du ändrar ett fält",
    ],
    lowerTitle: "Scenario med lägre förbrukning",
    lowerText:
      "Jämförelsen använder måttliga, tydliga mål som kortare duschar, lägre flöde och fulla maskiner.",
    lowerPoints: [
      "Lovar ingen säker besparing",
      "Beräknar inget fakturabelopp",
      "Låter dig testa en förändring först",
    ],
    chooseTitle: "Välj en förändring",
    chooseText:
      "Ett användbart scenario ska vara tillräckligt konkret för att prova. Korta duschen med en minut, mät ett antaget flöde eller ta bort läckan efter reparation och kontroll. Om skillnaden är liten, gå vidare till nästa kategori.",
    actions: [
      "Mät flödet från en kran eller dusch med en behållare och timer.",
      "Jämför apparatens märkning med de liter per körning du angett.",
      "Kör ett förval för att förstå förändringens riktning.",
      "Ändra en vana och sätt ett realistiskt mål för hushållet.",
    ],
    limitsTitle: "Vad uppskattningen inte kan säga",
    limitsText:
      "Den kan inte återskapa din mätare, hitta ett rörfel, ta med all utomhusanvändning eller garantera en armaturens märkta flöde. Använd resultatet som beslutsstöd. Om det skiljer sig från mätaren, leta efter saknad användning eller läcka.",
    flowTitle: "Varför flöde och frekvens hör ihop",
    flowText:
      "Samma armatur kan ge mycket olika totaler beroende på hur länge och hur ofta den används. Duschvärdet multiplicerar personer, duschar per vecka, minuter och liter per minut. Tvätt och disk använder körningar per vecka och liter per körning. Det hjälper dig välja mellan vana, underhåll och bättre mätning.",
  },
});

export { content };
