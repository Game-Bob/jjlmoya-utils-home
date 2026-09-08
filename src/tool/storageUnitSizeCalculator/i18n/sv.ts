import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'sv',
  slug: 'kalkylator-forradstorlek',
  title: 'Kalkylator för förrådsstorlek',
  description: 'Uppskatta hur stort förråd du behöver utifrån kartonger, möbler och utrymme för åtkomst.',
  labels: {
    inventory: 'Dina saker', boxes: 'Kartonger', furniture: 'Skrymmande saker', smallBoxes: 'Små kartonger', mediumBoxes: 'Mellanstora kartonger', largeBoxes: 'Stora kartonger', sofa: 'Soffa', bed: 'Säng', wardrobe: 'Garderob', desk: 'Skrivbord', chair: 'Stolar', accessLane: 'Gångutrymme', accessHint: 'Mer gångutrymme tar golvyta, men gör sakerna du behöver lättare att nå.', quickScenarios: 'Läs in en startlista', reset: 'Återställ',
  },
  presetLabels: ['Flytt från etta', 'En sovrumslägenhet', 'Litet kontor'],
  accessLabels: ['Trångt', 'Balanserat', 'Ofta åtkomst'],
  result: {
    title: 'Lastplanen', minimum: 'Minsta storlek', comfortable: 'Bekväm storlek', emptyStatus: 'Lägg till saker', readyStatus: 'Balanserad plan', tightStatus: 'Minimum blir trångt', emptyMessage: 'Planen ritar förrådets zoner när du lägger till saker.', readyMessage: 'Minimistorleken lämnar plats för den valda gången.', tightMessage: 'Minimistorleken är nästan full. Den bekväma storleken blir enklare att använda.', unit: 'm²', access: 'åtkomst', boxesZone: 'Kartonger', furnitureZone: 'Skrymmande', laneZone: 'Gång', floorPlanLabel: 'Proportionell förrådsplan med kartonger, skrymmande saker och gångutrymme', packedLabel: 'packat', areaLabel: 'Planerad yta', volumeLabel: 'volym', emptyPlan: 'Lägg till kartonger eller möbler för att rita planen',
  },
  seo: [
    { type: 'title', level: 2, text: 'Välj förråd efter det du äger' },
    { type: 'paragraph', html: 'En kalkylator för förrådsstorlek blir mest användbar när den börjar med dina riktiga saker. Ange kartonger och skrymmande möbler och välj om du kan packa tätt eller behöver nå saker längst in.' },
    { type: 'title', level: 2, text: 'Det här mäter uppskattningen' },
    { type: 'list', items: ['Packad volym för kartonger och möbler', 'Golvyta efter att kartongerna staplats', 'Gångutrymme utifrån hur ofta du hämtar saker', 'Minsta och bekväma storlekar avrundade till vanliga mått'] },
    { type: 'title', level: 2, text: 'Så läser du av storlekarna' },
    { type: 'paragraph', html: 'Minimistorleken är den första standardstorlek som rymmer den planerade ytan. Det är en kapacitetskontroll, inte ett löfte om att alla möbler passar. Den bekväma storleken lägger till marginal så att ett förråd som öppnas ofta inte blir en kartongvägg.' },
    { type: 'title', level: 2, text: 'Kontrollera före bokning' },
    { type: 'paragraph', html: 'Använd resultatet för att välja några alternativ och jämför sedan innermått, dörrbredd, takhöjd, pelare, trappor och lastningsväg. Kubikmeter kan verka generöst om höjden inte går att använda.' },
    { type: 'list', items: ['Räkna kartonger efter ungefärlig yttermått.', 'Ta med soffor och garderober även om de ska monteras isär.', 'Välj Ofta åtkomst för säsongssaker, lager eller arbetsutrustning.', 'Bekräfta användbar golvyta och mät dörren innan du flyttar stora möbler.'] },
    { type: 'tip', title: 'Planeringsgräns', html: 'Detta är en transparent uppskattning utifrån representativa mått och staplingsantaganden. Den kontrollerar inte det riktiga förrådet, bärförmåga, pris eller om en ovanlig möbel går genom dörren.' },
  ],
  faq: [
    { question: 'Ska jag välja minsta eller bekväma storleken?', answer: 'Välj minimum vid tät packning och sällan åtkomst. Den bekväma storleken passar bättre om du hämtar saker, inventariet kan växa eller stora möbler är svåra att stapla.' },
    { question: 'Varför använder kalkylatorn kvadratmeter?', answer: 'Förrådsleverantörer anger ofta golvyta, som visar om saker går att placera och nå. Volymen i kubikmeter hjälper dig att jämföra annonser som använder volym.' },
    { question: 'Kan jag använda den för garage eller container?', answer: 'Ja, som utgångspunkt. Kontrollera ändå verkliga innermått, dörröppning, tak, ventilation och begränsningar för vikt eller stapling.' },
    { question: 'Känner kalkylatorn till mina möblers exakta storlek?', answer: 'Nej. Den använder representativa ytor och volymer. Mät ovanliga, ömtåliga eller djupa saker själv och lämna extra marginal vid osäker åtkomst.' },
  ],
  howTo: [
    { name: 'Läs in en startlista', text: 'Välj ett scenario som liknar din flytt eller tömning och ändra antalen.' },
    { name: 'Räkna kartonger och stora saker', text: 'Ange små, mellanstora och stora kartonger och lägg till soffor, sängar, garderober, skrivbord och stolar.' },
    { name: 'Ställ in gångutrymme', text: 'Välj Trångt, Balanserat eller Ofta åtkomst utifrån hur ofta du behöver komma in.' },
    { name: 'Jämför rekommendationerna', text: 'Se minimum som kapacitetsgräns och den bekväma storleken som ett mer praktiskt alternativ för regelbunden åtkomst.' },
  ],
};

export const content = buildLocalizedContent(copy);
