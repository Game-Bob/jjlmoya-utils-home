import type { StorageLocaleCopy } from '../locale';
import { buildLocalizedContent } from '../locale';

const copy: StorageLocaleCopy = {
  locale: 'nl',
  slug: 'opslagruimte-formaat-calculator',
  title: 'Calculator voor opslagruimte',
  description: 'Schat de benodigde grootte van je opslagruimte op basis van dozen, meubels en loopruimte.',
  labels: {
    inventory: 'Je inventaris', boxes: 'Dozen', furniture: 'Grote spullen', smallBoxes: 'Kleine dozen', mediumBoxes: 'Middelgrote dozen', largeBoxes: 'Grote dozen', sofa: 'Bank', bed: 'Bed', wardrobe: 'Kledingkast', desk: 'Bureau', chair: 'Stoelen', accessLane: 'Loopruimte', accessHint: 'Meer loopruimte kost vloeroppervlak, maar houdt spullen die je nodig hebt bereikbaar.', quickScenarios: 'Startinventaris laden', reset: 'Resetten',
  },
  presetLabels: ['Studioverhuizing', 'Eén slaapkamer', 'Klein kantoor'],
  accessLabels: ['Krap', 'Gebalanceerd', 'Vaak toegang nodig'],
  result: {
    title: 'Het laadplan', minimum: 'Minimumformaat', comfortable: 'Comfortabel formaat', emptyStatus: 'Voeg spullen toe', readyStatus: 'Gebalanceerd plan', tightStatus: 'Minimum is krap', emptyMessage: 'Het plan tekent je opslagzones zodra je spullen toevoegt.', readyMessage: 'Het minimumformaat laat ruimte voor de gekozen looproute.', tightMessage: 'Het minimum is bijna vol. Het comfortabele formaat is makkelijker te gebruiken.', unit: 'm²', access: 'toegang', boxesZone: 'Dozen', furnitureZone: 'Grote spullen', laneZone: 'Loopruimte', floorPlanLabel: 'Proportioneel opslagplan met dozen, grote spullen en loopruimte', packedLabel: 'ingepakt', areaLabel: 'Planoppervlak', volumeLabel: 'volume', emptyPlan: 'Voeg dozen of meubels toe om het plan te tekenen',
  },
  seo: [
    { type: 'title', level: 2, text: 'Kies een opslagruimte op basis van je spullen' },
    { type: 'paragraph', html: 'Een calculator voor opslagruimte werkt het beste als je begint met je echte inventaris. Voer dozen en grote meubels in en kies of je compact wilt stapelen of ruimte nodig hebt om spullen achterin te bereiken.' },
    { type: 'title', level: 2, text: 'Wat deze schatting meet' },
    { type: 'list', items: ['Ingepakt volume van dozen en meubels', 'Vloeroppervlak nadat dozen per soort zijn gestapeld', 'Loopruimte op basis van hoe vaak je spullen pakt', 'Minimum- en comfortabele formaten afgerond op gangbare maten'] },
    { type: 'title', level: 2, text: 'Minimum en comfortabel formaat lezen' },
    { type: 'paragraph', html: 'Het minimumformaat is de eerste standaardmaat die het geplande oppervlak bevat. Het is een capaciteitscontrole, geen garantie dat elk meubel in elke ruimte past. Het comfortabele formaat voegt marge toe zodat een vaak geopende ruimte geen muur van dozen wordt.' },
    { type: 'title', level: 2, text: 'Controleer dit vóór je boekt' },
    { type: 'paragraph', html: 'Gebruik de uitkomst om aanbieders te selecteren en vergelijk daarna binnenmaten, deuropening, plafondhoogte, palen, trappen en laadtoegang. Een aanbod in kubieke meters kan ruim lijken als de hoogte niet bruikbaar is.' },
    { type: 'list', items: ['Tel dozen op basis van hun geschatte buitenmaat.', 'Voeg banken en kasten toe, ook als je ze wilt demonteren.', 'Kies Vaak toegang nodig voor seizoenspullen, voorraad of werkmateriaal.', 'Vraag naar bruikbaar vloeroppervlak en meet de deur vóór je grote meubels verplaatst.'] },
    { type: 'tip', title: 'Planningsgrens', html: 'Dit is een transparante schatting op basis van representatieve maten en stapelaannames. De calculator controleert geen echte ruimte, draagvermogen, prijs of doorgang van afwijkende meubels.' },
  ],
  faq: [
    { question: 'Kies ik het minimum of het comfortabele formaat?', answer: 'Kies minimum bij compact inpakken en zeldzame toegang. Het comfortabele formaat is beter als je spullen ophaalt, je inventaris kan groeien of grote meubels lastig stapelen.' },
    { question: 'Waarom gebruikt de calculator vierkante meters?', answer: 'Aanbieders noemen vaak vloeroppervlak. Dat maakt duidelijk of je spullen kunt plaatsen en bereiken. Het volume in kubieke meters helpt om aanbiedingen met een volumemaat te vergelijken.' },
    { question: 'Kan ik dit voor een garage of container gebruiken?', answer: 'Ja, als startpunt. Controleer wel de echte binnenmaten, deuropening, hoogte, ventilatie en gewichts- of stapelbeperkingen.' },
    { question: 'Kent de calculator de echte afmetingen van mijn meubels?', answer: 'Nee. Hij gebruikt representatieve voetafdrukken en volumes. Meet bijzondere, breekbare of diepe spullen zelf en houd extra ruimte aan bij een onzekere route.' },
  ],
  howTo: [
    { name: 'Laad een startinventaris', text: 'Kies een scenario dat bij je verhuizing of opruiming past en pas de aantallen aan.' },
    { name: 'Tel dozen en grote spullen', text: 'Voer kleine, middelgrote en grote dozen in en voeg banken, bedden, kasten, bureaus en stoelen toe.' },
    { name: 'Stel loopruimte in', text: 'Kies Krap, Gebalanceerd of Vaak toegang nodig op basis van je gebruik.' },
    { name: 'Vergelijk de adviezen', text: 'Gebruik minimum als capaciteitsgrens en comfortabel als de praktischere keuze voor regelmatig gebruik.' },
  ],
};

export const content = buildLocalizedContent(copy);
