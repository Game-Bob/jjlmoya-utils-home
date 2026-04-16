import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { HeatingComparatorUI } from '../ui';

const slug = 'verwarmingsvergelijker-gas-vs-warmtepomp-vs-airco';
const title = 'Vergelijker Gas vs. Warmtepomp vs. Airco: Kosten en Besparing';
const description = 'Bereken hoeveel u bespaart door uw cv-ketel te vervangen door een warmtepomp of airco. Een realistische vergelijking van energieverbruik en efficiëntie voor uw woning.';

const faqData = [
  {
    question: 'Wat is goedkoper: een warmtepomp of aardgas?',
    answer: 'Op maandbasis is een warmtepomp aanzienlijk goedkoper dan aardgas. Dankzij een rendement van 400% (COP van 4) zijn de kosten per geleverde kWh warmte meestal 30% tot 50% lager dan bij gas, ook al is de prijs per kWh elektriciteit hoger.',
  },
  {
    question: 'Wat is het verschil tussen een warmtepomp en een gewone airco?',
    answer: 'Technisch gezien zijn beide warmtepompen. Het belangrijkste verschil is het medium waaraan ze warmte afgeven: een klassieke warmtepomp is meestal "lucht-water" (verwarmt het water voor radiatoren of vloerverwarming), terwijl een airco "lucht-lucht" is (verwarmt direct de lucht via binnenunits).',
  },
  {
    question: 'Kan een warmtepomp in een huis met oude radiatoren?',
    answer: 'Ja, het is mogelijk om een warmtepomp te gebruiken met conventionele radiatoren door te kiezen voor een "hoge temperatuur" model. Voor de hoogste besparing is een combinatie met vloerverwarming of lageduurradiatoren echter ideaal.',
  },
  {
    question: 'Wat is de terugverdientijd van een warmtepomp?',
    answer: 'Afhankelijk van het verbruik en mogelijke subsidies ligt de terugverdientijd meestal tussen de 5 en 8 jaar. Met zonnepanelen kan deze periode nog aanzienlijk worden verkort.',
  },
];

const howToData = [
  {
    name: 'Woonoppervlakte',
    text: 'Voer de gebruiksoppervlakte van uw woning in om de jaarlijkse warmtevraag te schatten.',
  },
  {
    name: 'Energieprijzen',
    text: 'Pas de gas- en elektriciteitsprijzen aan volgens uw eigen energienota voor een nauwkeurige berekening.',
  },
  {
    name: 'Bekijk resultaten',
    text: 'Vergelijk de drie systemen naast elkaar en ontdek welke het meest efficiënt en voordelig is.',
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

export const content: ToolLocaleContent<HeatingComparatorUI> = {
  slug,
  title,
  description,
  faqTitle: 'Veelgestelde Vragen',
  faq: faqData,
  bibliographyTitle: 'Bronnen en Referenties',
  bibliography: [
    {
      name: 'Milieu Centraal: Warmtepomp gids',
      url: 'https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen-en-koelen/warmtepomp/',
    },
    {
      name: 'RVO: Energieprijzen en Subsidies',
      url: 'https://www.rvo.nl/onderwerpen/isde',
    },
    {
      name: 'Consumentenbond: CV-ketel of warmtepomp?',
      url: 'https://www.consumentenbond.nl/warmtepomp',
    },
  ],
  howTo: howToData,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: 'summary',
      title: 'Tips voor het kiezen van uw verwarming',
      items: [
        'Een <strong>warmtepomp</strong> is tot 400% efficiënter dan een gas-cv.',
        'Goede <strong>isolatie</strong> verlaagt uw nota meer dan welke ketel ook.',
        'De <strong>terugverdientijd</strong> is momenteel gemiddeld 6 tot 8 jaar.',
        'Combineer met <strong>zonnepanelen</strong> voor bijna gratis warmte.',
      ],
    },
    {
      type: 'title',
      text: 'Verbruiksvergelijking: Gas vs. Warmtepomp vs. Airconditioning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De keuze van het juiste verwarmingssysteem is een van de belangrijkste financiële beslissingen voor uw huis. In een tijd van schommelende energieprijzen en een groeiende focus op duurzaamheid, is het essentieel om te weten welk systeem het meest efficiënt is — en waarmee u per maand het meeste bespaart.',
    },
    {
      type: 'paragraph',
      html: 'Lange tijd was aardgas de onbetwiste koning. Maar de opkomst van de <strong>warmtepomp (lucht-water)</strong> en de technologische verbetering van <strong>airco\'s (lucht-lucht)</strong> hebben de markt volledig veranderd. Onze calculator helpt u de jaarlijkse operationele kosten te visualiseren op basis van echte data.',
    },
    {
      type: 'stats',
      items: [
        {
          label: 'Efficiëntie Warmtepomp',
          value: '400%',
          icon: 'mdi:lightning-bolt',
          trend: { value: 'top', positive: true },
        },
        {
          label: 'Gem. Jaarlijkse Besparing',
          value: '450€',
          icon: 'mdi:piggy-bank',
          trend: { value: 'geschat', positive: true },
        },
        {
          label: 'Levensduur Apparatuur',
          value: '20 jaar',
          icon: 'mdi:calendar-check',
          trend: { value: 'standaard', positive: true },
        },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: '1. De CV-ketel op gas: De traditionele standaard',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Verwarming op gas gebruikt een ketel die brandstof verbrandt om water te verwarmen, dat vervolgens door radiatoren of vloerverwarming stroomt.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendement:</strong> Moderne HR-ketels hebben een rendement van bijna 100%.',
        '<strong>Voordelen:</strong> Veelal al aanwezig, snelle warmte en relatief lage installatiekosten.',
        '<strong>Nadelen:</strong> Afhankelijkheid van fossiele brandstoffen, vastrechtkosten en CO2-uitstoot.',
      ],
    },
    {
      type: 'title',
      text: '2. Warmtepomp: Extreme efficiëntie (Lucht-Water)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Een warmtepomp onttrekt warmte-energie aan de buitenlucht (zelfs bij temperaturen onder nul) en gebruikt deze om water te verwarmen voor verwarming en warm kraanwater.',
    },
    {
      type: 'list',
      items: [
        '<strong>Rendement (COP):</strong> Een warmtepomp heeft vaak een COP van 4. Dat betekent: voor elke 1 kWh stroom krijgt u 4 kWh warmte in huis.',
        '<strong>Voordelen:</strong> Volledig duurzaam i.c.m. zonnepanelen, één systeem voor verwarmen en koelen, en de laagste gebruikskosten.',
        '<strong>Nadelen:</strong> Hoge investering vooraf (die zich meestal in 5-8 jaar terugverdient) en ruimte nodig voor de buitenunit.',
      ],
    },
    {
      type: 'tip',
      title: 'Bespaartip',
      html: 'De warmtepomp werkt het beste met vloerverwarming, omdat het water maar tot 35°C verwarmd hoeft te worden, tegenover 60-70°C bij gewone radiatoren.',
    },
    {
      type: 'proscons',
      title: 'Warmtepomp vs Gas CV',
      proTitle: 'Waarom Warmtepomp?',
      conTitle: 'Waarom Gas?',
      items: [
        { pro: 'Onverslaanbare efficiëntie (COP 4+)', con: 'Goedkopere installatie' },
        { pro: 'Onafhankelijk van gas', con: 'Snel hoge temperaturen' },
        { pro: 'Verwarmen en Koelen', con: 'Werkt met oude radiatoren' },
        { pro: 'Ideaal met zonnepanelen', con: 'Geen buitenunit nodig' },
      ],
    },
    {
      type: 'title',
      text: '3. Airco (Lucht-Lucht Warmtepomp)',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Dit is het bekende split-systeem. Het werkt volgens hetzelfde principe als de warmtepomp, maar verwarmt direct de lucht. Een uitstekende oplossing voor kleinere ruimtes of als bijverwarming. De efficiëntie (SCOP) ligt meestal tussen 3 en 3.5.',
    },
    {
      type: 'title',
      text: 'De rekenformule begrijpen',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Om systemen goed te kunnen vergelijken, rekenen we alles om naar de kosten per nuttige kWh warmte:',
    },
    {
      type: 'code',
      code: 'Jaarlijkse Kosten = (Warmtevraag Woning / Efficiëntie Systeem) × Energieprijs',
      ariaLabel: 'Formule voor jaarlijkse kostenberekening',
    },
    {
      type: 'paragraph',
      html: 'Waarbij:',
    },
    {
      type: 'list',
      items: [
        '<strong>Warmtevraag:</strong> De kWh warmte die uw huis per jaar nodig heeft (afhankelijk van isolatie en m²).',
        '<strong>Efficiëntie:</strong> 0.95 voor Gas, 4.0 voor Warmtepomp en 3.2 voor Airco.',
        '<strong>Energieprijs:</strong> De kosten per kWh inclusief belastingen.',
      ],
    },
    {
      type: 'card',
      title: 'Rekenvoorbeeld: Huis van 100m²',
      icon: 'mdi:home-analytics',
      html: '<p>Stel een huis heeft 7.000 kWh warmte per jaar nodig:</p><ul><li><strong>Gas (€0,08/kWh):</strong> (7.000 / 0,95) * 0,08 = €589/jaar</li><li><strong>Warmtepomp (€0,18/kWh):</strong> (7.000 / 4) * 0,18 = €315/jaar (U bespaart 46%)</li><li><strong>Airco (€0,18/kWh):</strong> (7.000 / 3,2) * 0,18 = €393/jaar</li></ul>',
    },
    {
      type: 'title',
      text: 'Wanneer kies ik welk systeem?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Er is geen standaard antwoord: het hangt af van uw huis en locatie.',
    },
    {
      type: 'paragraph',
      html: '<strong>Eengezinswoningen / Nieuwbouw:</strong> De warmtepomp is hier de standaard. Het is de makkelijkste manier om aan duurzaamheidseisen te voldoen en vanaf dag één te besparen.',
    },
    {
      type: 'paragraph',
      html: '<strong>Kleine appartementen in milde klimaten:</strong> Een airco (split) is vaak onverslaanbaar door de lage installatiekosten.',
    },
    {
      type: 'paragraph',
      html: '<strong>Renovatie van huizen met gas:</strong> Als er al radiatoren zijn, is een nieuwe cv-ketel vaak de goedkoopste stap op korte termijn. Wie echter klaar wil zijn voor de toekomst, kiest bij renovatie voor de overstap naar elektrisch.',
    },
    {
      type: 'title',
      text: 'Het belang van isolatie',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Geen enkel systeem is efficiënt in een tochtig huis. Controleer uw ramen en isolatie voordat u duizenden euro\'s investeert in een nieuw systeem. Goede isolatie kan de warmtevraag halveren.',
    },
    {
      type: 'title',
      text: 'Fabels over de warmtepomp',
      level: 2,
    },
    {
      type: 'list',
      items: [
        '<strong>"Met vorst doet hij het niet":</strong> Onjuist. Moderne systemen werken uitstekend tot -15°C.',
        '<strong>"Een warmtepomp is lawaaierig":</strong> De buitenunits van tegenwoordig zijn zeer stil, mits goed geplaatst.',
        '<strong>"Stroom is te duur":</strong> Hoewel stroom per kWh duurder is dan gas, maakt de efficiëntie van 400% dat ruimschoots goed.',
      ],
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Wist u dat?',
      icon: 'mdi:lightbulb-on',
      badge: 'Feit',
      html: '<p>De COP hangt af van de buitentemperatuur. Bij extreme kou daalt de efficiëntie iets, maar het blijft nog altijd veel voordeliger dan direct elektrisch verwarmen.</p>',
    },
    {
      type: 'title',
      text: 'Conclusie: De toekomst is elektrisch',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De trend in Europa is duidelijk: <strong>verduurzaming van het huis</strong>. Aardgas raakt op de achtergrond. De combinatie van zonnepanelen en een warmtepomp is vandaag de dag dé oplossing voor maximaal comfort tegen minimale kosten.',
    },
    {
      type: 'paragraph',
      html: 'Vergelijk met onze tool uw huidige energierekening met de alternatieven. Soms zit de grootste winst niet in een graadje lager, maar in een modern systeem.',
    },
  ],
  ui: {
    titleVivienda: '1. Uw woninggegevens',
    helperVivienda: 'Kenmerken van uw huis',
    labelM2: 'Totale Oppervlakte',
    helperM2: 'Gebruiksoppervlakte in m².',
    labelAislamiento: 'Isolatiegraad',
    helperAislamiento: 'Hoe goed houdt uw huis warmte vast?',
    optExcelent: 'Uitstekend (Nieuwbouw / Passiefhuis)',
    optMedium: 'Gemiddeld (Dubbel glas / Standaard isolatie)',
    optPoor: 'Matig (Oud huis / Geen spouwisolatie)',
    titleCoste: '2. Energiekosten',
    descCoste: 'Kijk op uw jaarnota voor de prijs per kWh of m³.',
    labelGasPrice: 'Gasprijs',
    helperGasPrice: 'Prijs per m³ gas (omgerekend naar kWh).',
    labelElecPrice: 'Elektriciteitsprijs',
    helperElecPrice: 'Prijs per kWh elektriciteit.',
    titleComparison: '3. Jaarlijkse Vergelijking',
    descComparison: 'Schatting op basis van technisch rendement.',
    systemGas: 'CV-ketel op gas',
    systemAero: 'Warmtepomp',
    systemAir: 'Airco (Split)',
    labelAnnualCost: 'Verwarmingskosten',
    labelEfficiency: 'Efficiëntie',
    labelSource: 'Bron',
    labelEnergy: 'Energie',
    labelInstallation: 'Installatie',
    valGasSource: 'Aardgas',
    valAeroEnergy: 'Duurzaam + Stroom',
    valAirInstall: 'Lucht-Lucht',
    winnerBadge: 'Meest Efficiënt',
    unitCurrency: '€',
  },
};
