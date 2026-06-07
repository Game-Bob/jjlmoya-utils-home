import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'ergonomie-aan-bureau';
const title = 'Bureauergonomie en Uitlijning van de Werkruimte Indeling';
const description =
  'Voer je lengte in en zie direct hoe je je stoel, bureau en monitor kunt aanpassen om rug- en nekpijn in je thuiskantoor te elimineren.';

const faqData = [
  {
    question: 'Waarom is de bureauhoogte belangrijk?',
    answer:
      'Een bureau dat te hoog is dwingt je schouders omhoog, wat spanning in je nek en bovenrug veroorzaakt. Een bureau dat te laag is laat je voorover buigen, waardoor je lendenwervelschijven worden samengedrukt. De juiste hoogte houdt je onderarmen parallel aan de vloer en je ellebogen in een hoek van 90 graden.',
  },
  {
    question: 'Hoe hoog moet mijn monitor zijn?',
    answer:
      'De bovenkant van je monitor moet op ooghoogte of iets lager zijn, met het scherm 10 tot 20 graden naar achteren gekanteld. Dit houdt je nek in een neutrale positie en vermindert oogvermoeidheid doordat je lichtjes naar beneden kijkt, wat de natuurlijke rusthoek van het menselijk zicht is.',
  },
  {
    question: 'Hoe ver moet ik van mijn scherm zitten?',
    answer:
      'De ideale afstand is een armlengte verwijderd, ongeveer 50 tot 70 centimeter. Op deze afstand hoeven je ogen niet hard te werken om scherp te stellen, en je kunt het hele scherm zien zonder je hoofd te bewegen. Voor grotere schermen vergroot je de afstand evenredig.',
  },
  {
    question: 'Is een sta-bureau beter?',
    answer:
      'Sta-bureaus verminderen langdurig zitten, dat is gekoppeld aan cardiovasculaire en metabole problemen. Maar de hele dag staan kan veneuze en voetproblemen veroorzaken. De beste aanpak is afwisselen: 30 minuten zitten, 15 tot 30 minuten staan, en regelmatig bewegen.',
  },
  {
    question: 'Moeten mijn voeten de vloer raken?',
    answer:
      'Ja. Je voeten moeten plat op de vloer rusten met je knieën in een hoek van 90 graden. Als je stoel te hoog is, gebruik dan een voetensteun. Als je voeten bungelen, bouwt er druk op achter je dijen, wat de bloeddoorvoer belemmert en tintelingen veroorzaakt.',
  },
  {
    question: 'Wat is de beste stoelhoogte?',
    answer:
      'De zitting moet ervoor zorgen dat je knieën ongeveer 90 graden gebogen zijn met je voeten plat op de vloer. Je heupen moeten op gelijke hoogte met of iets boven je knieën zijn. Dit verdeelt het gewicht gelijkmatig over je zitbotten en vermindert de druk op je onderrug.',
  },
];

const howToData = [
  {
    name: 'Meet je lichaamslengte',
    text: 'Sta blootvoets tegen een muur en markeer de bovenkant van je hoofd. Meet van de vloer tot de markering in centimeters.',
  },
  {
    name: 'Selecteer je werkruimtemodus',
    text: 'Kies of je aanbevelingen wilt voor een zitbureau of een stabureau. Elke modus gebruikt verschillende lichaamsproporties.',
  },
  {
    name: 'Pas eerst je stoel aan',
    text: 'Stel je stoel zo in dat je voeten plat op de vloer rusten en je knieën een hoek van 90 graden vormen. Je heupen moeten op gelijke hoogte met of iets boven je knieën zijn.',
  },
  {
    name: 'Stel je bureau-oppervlak in',
    text: 'Verhoog of verlaag je bureau zodat je onderarmen parallel aan de vloer rusten tijdens het typen. Je ellebogen moeten een hoek van 90 graden vormen.',
  },
  {
    name: 'Positioneer je monitor',
    text: 'Plaats de monitor op een armlengte afstand. De bovenkant van het scherm moet op ooghoogte of iets lager zijn, 10 tot 20 graden naar achteren gekanteld.',
  },
  {
    name: 'Verifieer met de avatar',
    text: 'Gebruik de avatar op het scherm om te controleren of alle hoeken groen zijn. Als een gewricht rood is, pas dan het bijbehorende meubelstuk aan.',
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
  inLanguage: 'nl',
};

export const content: ToolLocaleContent<DeskErgonomicsUI> = {
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
      text: 'De Verborgen Kosten van een Slechte Bureau-instelling',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De meeste mensen brengen meer dan acht uur per dag achter een bureau door, maar weinig meten of hun stoel, bureau of monitor bij hun lichaam passen. Een verschil van slechts een paar centimeters kan chronische spanning in je nek, schouders en onderrug veroorzaken. Na maanden en jaren wordt deze spanning pijn, en pijn wordt blessure. Het goede nieuws is dat optimale ergonomie nauwkeurig kan worden berekend uit een enkele meting: je lengte.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Gem. Bureautijd', icon: 'mdi:desk' },
        { value: '90°', label: 'Ideale Ellebooghoek', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'Beste Schermafstand', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Waarom Één Maat Nooit bij Iedereen Past',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standaard bureaus zijn 73 centimeter hoog en standaard stoelen 45 centimeter. Deze afmetingen zijn decennia geleden ontworpen voor gemiddeld grote mannelijke kantoorwerkers. Als je kleiner bent dan 175 centimeter of groter dan 185 centimeter, dan schaden die standaarden je houding actief. Vrouwen, tieners en mensen met een langer of kortere romp dan gemiddeld worden door standaardmeubilair bijzonder slecht bediend.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Slechte Instelling',
          description: 'Gangbare standaardwaarden die na verloop van tijd spanning veroorzaken.',
          icon: 'mdi:alert',
          points: ['Monitor te hoog of te laag', 'Bureau dwingt schouders omhoog', 'Voeten raken de vloer niet', 'Stoel biedt geen lendensteun'],
        },
        {
          title: 'Optimale Instelling',
          description: 'Gepersonaliseerde metingen gebaseerd op je lichaamsproporties.',
          icon: 'mdi:check-circle',
          points: ['Monitor op ooghoogte', 'Ellebogen op 90 graden', 'Voeten plat op de vloer', 'Onderrug volledig ondersteund'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snelle Houdingschecklist',
      icon: 'mdi:clipboard-check',
      badge: 'Actie',
      html: '<p style="margin:0">Zit met je rug tegen de stoel. Controleer dat er een kleine ruimte is tussen de achterkant van je knieën en de zittingrand. Zorg dat je polsen recht zijn tijdens het typen. De bovenkant van je monitor mag niet hoger zijn dan je ogen. Neem elke 30 minuten een pauze van 2 minuten om te lopen.</p>',
    },
    {
      type: 'title',
      text: 'De Wetenschap van Zitten en Staan',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Menselijke lichamen zijn niet gemaakt om uren in dezelfde positie te blijven. Bij zitten neemt de druk op de lendenwervelschijven met 40 procent toe vergeleken met staan. Bij stil staan hoopt bloed zich op in de benen en moet het hart harder werken om het weer omhoog te pompen. De gezondste werkritme is afwisselen tussen zitten en staan elke 30 tot 60 minuten, gecombineerd met korte wandelingen. Deze tool berekent beide modi zodat je een verstelbaar bureau correct kunt instellen.',
    },
    {
      type: 'summary',
      title: 'Hoe bouw je een ergonomische werkruimte',
      items: [
        'Meet je blootvoetslengte in centimeters.',
        'Gebruik deze simulator om de exacte hoogtes van je stoel, bureau en monitor te krijgen.',
        'Pas eerst de stoel aan, dan het bureau, dan de monitor.',
        'Als je een stabureau gebruikt, stel het dan 30 centimeter hoger in dan je zitbureau.',
        'Plaats de monitor op een armlengte afstand en kantel hem 10 tot 20 graden naar achteren.',
        'Neem elke 30 minuten een pauze van 2 minuten om te lopen of rekken.',
      ],
    },
  ],
  ui: {
    labelMode: 'Werkruimtemodus',
    modeSit: 'Zittend',
    modeStand: 'Staand',
    labelHeight: 'Je lengte',
    unitCm: 'cm',
    labelGender: 'Bouw',
    genderMale: 'Man',
    genderFemale: 'Vrouw',
    labelChair: 'Stoel',
    labelDesk: 'Bureau',
    labelMonitor: 'Monitor',
    labelDistance: 'Afstand',
    labelAngle: 'Hoek',
    labelGood: 'Goed',
    labelAdjust: 'Aanpassen',
    badgeChair: 'Zitting',
    badgeDesk: 'Oppervlak',
    badgeMonitor: 'Scherm',
    tipScreenLow: 'Verhoog je monitor',
    tipScreenHigh: 'Verlaag je monitor',
    tipDeskLow: 'Verhoog je bureau',
    tipDeskHigh: 'Verlaag je bureau',
    tipChairLow: 'Verhoog je stoel',
    tipChairHigh: 'Verlaag je stoel',
    tipDistance: 'Breng scherm op armlengte',
  },
};
