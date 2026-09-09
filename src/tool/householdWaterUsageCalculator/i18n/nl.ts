import { createHouseholdWaterUsageContent } from "./shared";

const content = createHouseholdWaterUsageContent({
  slug: "huishoudelijk-waterverbruik-calculator",
  title: "Calculator voor huishoudelijk waterverbruik",
  description:
    "Schat het waterverbruik van je huishouden op basis van dagelijkse gewoonten, ontdek welke activiteiten het meest gebruiken en vergelijk je routine met een realistisch scenario met lager verbruik.",
  language: "nl",
  ui: {
    presetLabel: "Begin met een patroon",
    presetEveryday: "Dagelijks",
    presetWaterAware: "Bewust met water",
    presetLowFlow: "Lage doorstroming",
    controlsLabel: "Watergegevens van het huishouden",
    optionalInputsTitle: "Apparaten en lekkages",
    peopleLabel: "Personen in huis",
    peopleUnit: "personen",
    showerTitle: "Douchen",
    showersPerWeekLabel: "Douches per persoon",
    showerMinutesLabel: "Minuten per keer",
    showerFlowLabel: "Doorstroming",
    toiletTitle: "Toilet",
    flushesPerDayLabel: "Spoelbeurten per persoon",
    flushVolumeLabel: "Volume per spoelbeurt",
    tapTitle: "Kranen",
    tapMinutesLabel: "Open tijd per persoon",
    tapFlowLabel: "Doorstroming",
    washingLoadsLabel: "Wasbeurten",
    washingVolumeLabel: "Liter per wasbeurt",
    dishwasherLoadsLabel: "Vaatwasbeurten",
    dishwasherVolumeLabel: "Liter per cyclus",
    leakLabel: "Schatting vermijdbare lekkage",
    litresPerDay: "geschatte liter per dag",
    litresPerMonth: "liter per maand",
    litresPerYear: "liter per jaar",
    perPerson: "liter per persoon per dag",
    reference: "Referentie",
    aboveReference: "Boven de referentie",
    belowReference: "Onder de referentie",
    nearReference: "Dicht bij de referentie",
    referenceDescription:
      "Het Spaanse huishoudgemiddelde van INE is 128 liter per persoon per dag in de meest recente reeks. Gebruik dit als context, niet als norm om voor te slagen.",
    savingTitle: "Ruimte om te verminderen",
    savingDescription:
      "Dit is het gezamenlijke verschil tussen je huidige gewoonten en de aannames voor lager verbruik. Test één verandering tegelijk.",
    currentScenario: "Je huidige patroon",
    efficientScenario: "Scenario met lager verbruik",
    monthlySaving: "mogelijk bespaarde liter per maand",
    categoryShowers: "Douchen",
    categoryToilets: "Toilet",
    categoryTaps: "Kranen",
    categoryWashing: "Wassen",
    categoryDishwasher: "Vaatwasser",
    categoryLeaks: "Lekkages",
    breakdownTitle: "Waar de maand naartoe gaat",
    usageShare: "van het totaal",
  },
  faq: [
    {
      question: "Wat schat deze calculator voor huishoudelijk water?",
      answer:
        "De calculator schat liter per dag, maand en jaar op basis van douches, toiletspoelingen, kranen, wasmachine, vaatwasser en lekkages. Ook toont hij een scenario met lager verbruik op basis van bescheiden veranderingen.",
    },
    {
      question: "Is het resultaat hetzelfde als mijn waterrekening?",
      answer:
        "Nee. Het resultaat is een planningsschatting op basis van je gewoonten. Een rekening bevat ook buitengebruik, gedeelde voorzieningen, het moment van meteropname, lekkages buiten de woning en de werkelijke doorstroming van kranen.",
    },
    {
      question: "Welke invoer verandert het resultaat meestal het meest?",
      answer:
        "Lange douches met hoge doorstroming zijn vaak bepalend, maar het hangt ook af van het aantal personen, het spoelvolume, de tijd bij de kraan en de frequentie van wassen en afwassen. De uitsplitsing gebruikt jouw gegevens.",
    },
    {
      question: "Wat is het scenario met lager verbruik?",
      answer:
        "Het gebruikt transparante doelen zoals douches van vijf minuten, lagere doorstroming, zuinige spoelingen, korter kraangebruik, volle ladingen en geen vermijdbare lekkage. Het is een vergelijking, geen belofte over een apparaat.",
    },
    {
      question: "Waarom toont de calculator een referentiecijfer?",
      answer:
        "Dit is het meest recente Spaanse huishoudgemiddelde uit de INE-reeks over waterlevering en -sanering, per persoon per dag. Het is geen doel of diagnose omdat omstandigheden en niet-gemeten gebruik verschillen.",
    },
  ],
  howTo: [
    {
      name: "Vul het aantal personen in",
      text: "Begin met de personen die het huis regelmatig gebruiken. De calculator toont ook een waarde per persoon zodat huishoudens van verschillende grootte vergelijkbaar zijn.",
    },
    {
      name: "Beschrijf de belangrijkste gewoonten",
      text: "Vul frequentie, duur en doorstroming van douches in en voeg spoelingen, kraantijd, wasbeurten en vaatwasbeurten toe. Gebruik een meting of het apparaatlabel als je die hebt.",
    },
    {
      name: "Lees de dagelijkse schatting",
      text: "Het grote getal is het geschatte aantal liter per dag. De maand- en jaarwaarden gebruiken dezelfde gewoonten en veranderen direct bij elke bewerking.",
    },
    {
      name: "Vind de grootste hefboom",
      text: "Bekijk de verdeling in liter en percentages per maand. De besparing naast elke activiteit laat zien wat er richting het lagere scenario kan veranderen.",
    },
    {
      name: "Test een realistisch profiel",
      text: "Probeer Bewust met water of Lage doorstroming en keer daarna terug naar je eigen waarden. Verander één gewoonte om te zien welke stap het meest zinvol is.",
    },
  ],
  seo: {
    introTitle: "Van de waterrekening naar de gewoonten erachter",
    introOne:
      "Een waterrekening toont hoeveel er door de meter ging, maar zelden welke gewoonte de verandering veroorzaakte. Deze calculator maakt terugkerende onderdelen van een huishouden transparant: personen, douches, spoelingen, kranen, was, vaat en vermijdbare lekkages. Elke invoer blijft zichtbaar zodat je aannames kunt controleren.",
    introTwo:
      "De nieuwste INE-reeks noemt voor Spaanse huishoudens in 2024 gemiddeld 128 liter per persoon per dag. Dat is nuttige context, geen universeel doel: buitengebruik, klimaat, een gedeelde meter of een verborgen lekkage kan een begrijpelijk verschil verklaren.",
    averageLabel: "Spaans huishoudgemiddelde per persoon per dag",
    groupsLabel: "Gewoontengroepen in de verdeling",
    daysLabel: "Dagen voor de maandelijkse schatting",
    readTitle: "Zo lees je de schatting",
    readText:
      "Begin met de langste maandbalk, niet met het opvallendste getal. Een lange douche kan een grotere hefboom zijn dan een kleine activiteit die minder vaak voorkomt, terwijl een kleine lekkage dagelijks kan doorlopen. De calculator rangschikt categorieën op basis van jouw invoer.",
    currentTitle: "Huidig patroon",
    currentText:
      "Je frequenties, duur, doorstroming en liters per lading worden omgerekend naar dagelijkse en maandelijkse liters.",
    currentPoints: [
      "Houdt de huishoudgrootte zichtbaar",
      "Toont de bijdrage van elke activiteit",
      "Werkt bij terwijl je een veld wijzigt",
    ],
    lowerTitle: "Scenario met lager verbruik",
    lowerText:
      "De vergelijking gebruikt gematigde, transparante doelen zoals kortere douches, lagere doorstroming en volle ladingen.",
    lowerPoints: [
      "Belooft geen gegarandeerde besparing",
      "Schat geen factuurbedrag",
      "Laat je een verandering vooraf testen",
    ],
    chooseTitle: "Kies één verandering",
    chooseText:
      "Een bruikbaar scenario is concreet genoeg om te proberen. Douche een minuut korter, meet een geschatte doorstroming of verwijder de lekkage na reparatie en controle. Als het weinig verandert, bekijk dan de volgende categorie.",
    actions: [
      "Meet de doorstroming van een kraan of douche met een bak en timer.",
      "Vergelijk het apparaatlabel met de ingevoerde liters per lading.",
      "Start een profiel om de richting van de verandering te begrijpen.",
      "Verander één gewoonte en kies een realistisch doel voor je huishouden.",
    ],
    limitsTitle: "Wat deze schatting niet kan vertellen",
    limitsText:
      "De calculator vervangt je meter niet, vindt geen leidingprobleem, bevat niet al het buitengebruik en garandeert niet dat een kraan de labelwaarde levert. Gebruik het resultaat als hulpmiddel bij beslissingen. Wijkt het af van de meter, zoek dan naar ontbrekend gebruik of een lekkage.",
    flowTitle: "Waarom doorstroming en frequentie samen tellen",
    flowText:
      "Dezelfde voorziening kan heel andere totalen geven afhankelijk van de looptijd en frequentie. De doucheschatting vermenigvuldigt personen, douches per week, minuten en liter per minuut. Wasmachine en vaatwasser gebruiken ladingen per week en liter per lading. Zo kun je kiezen tussen een gewoonte aanpassen, onderhoud doen of beter meten.",
  },
});

export { content };
