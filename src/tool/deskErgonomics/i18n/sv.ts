import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'skrivbordsergonomi';
const title = 'Skrivbordsergonomi och Justering av Arbetsplatsens Layout';
const description =
  'Ange din längd och se direkt hur du justerar stol, skrivbord och skärm för att eliminera rygg- och nacksmärta i ditt hemmakontor.';

const faqData = [
  {
    question: 'Varför spelar skrivbordshöjden roll?',
    answer:
      'Ett skrivbord som är för högt tvingar axlarna uppåt, vilket orsakar spänning i nacken och övre delen av ryggen. Ett skrivbord som är för lågt får dig att kröka dig framåt, vilket komprimerar lumbala skivor. Korrekt höjd håller underarmarna parallella med golvet och armbågarna i en 90-graders vinkel.',
  },
  {
    question: 'Hur högt ska min skärm vara?',
    answer:
      'Övre kanten på skärmen ska vara i höjd med ögonen eller något lägre, med skärmen lutad bakåt 10 till 20 grader. Detta håller nacken i en neutral position och minskar ögonansträngning eftersom du tittar något nedåt, vilket är den naturliga vilarvinkeln för mänsklig syn.',
  },
  {
    question: 'Hur långt bör jag sitta från skärmen?',
    answer:
      'Det ideala avståndet är en armlängds avstånd, ungefär 50 till 70 centimeter. På detta avstånd behöver dina ögon inte arbeta hårt för att fokusera, och du kan se hela skärmen utan att röra på huvudet. För större skärmar, öka avståndet proportionellt.',
  },
  {
    question: 'Är ett stå-skrivbord bättre?',
    answer:
      'Stå-skrivbord minskar långvarigt sittande, som är kopplat till hjärt-kärl- och metabola problem. Dock kan stå hela dagen orsaka ven- och fotproblem. Det bästa är att växla: sitt 30 minuter, stå 15 till 30 minuter, och rör dig regelbundet.',
  },
  {
    question: 'Bör mina fötter röra golvet?',
    answer:
      'Ja. Dina fötter ska vila planta mot golvet med knäna i en 90-graders vinkel. Om din stol är för hög, använd en fotpall. Om fötterna hänger fritt byggs tryck upp bakom låren, vilket begränsar blodcirkulationen och orsakar domningar.',
  },
  {
    question: 'Vad är den bästa stolshöjden?',
    answer:
      'Sitsen ska tillåta att knäna böjs i ungefär 90 grader med fötterna platt mot golvet. Dina höfter ska vara i höjd med eller något ovanför knäna. Detta fördelar vikten jämnt över sittbenen och minskar trycket på nedre delen av ryggen.',
  },
];

const howToData = [
  {
    name: 'Mät din kroppslängd',
    text: 'Stå barfota mot en vägg och markera toppen av huvudet. Mät från golvet till markeringen i centimeter.',
  },
  {
    name: 'Välj ditt arbetsplatsläge',
    text: 'Välj om du vill ha rekommendationer för ett sittande skrivbord eller ett stå-skrivbord. Varje läge använder olika kroppsproportioner.',
  },
  {
    name: 'Justera stolen först',
    text: 'Ställ in stolen så att fötterna vilar planta mot golvet och knäna bildar en 90-graders vinkel. Dina höfter ska vara i höjd med eller något ovanför knäna.',
  },
  {
    name: 'Ställ in skrivbordets yta',
    text: 'Höj eller sänk skrivbordet så att underarmarna vilar parallellt med golvet när du skriver. Armbågarna ska vara i en 90-graders vinkel.',
  },
  {
    name: 'Positionera skärmen',
    text: 'Placera skärmen på en armlängds avstånd. Övre kanten på skärmen ska vara i höjd med ögonen eller något lägre, lutad bakåt 10 till 20 grader.',
  },
  {
    name: 'Verifiera med avataren',
    text: 'Använd avataren på skärmen för att kontrollera att alla vinklar är gröna. Om någon led är röd, justera motsvarande möbel.',
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
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'SEK' },
  inLanguage: 'sv',
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
      text: 'Den Dolda Kostnaden för en Dålig Skrivbordsinställning',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'De flesta människor tillbringar mer än åtta timmar om dagen vid ett skrivbord, men få mäter någonsin om deras stol, skrivbord eller skärm passar deras kropp. En avvikelse på bara några centimeter kan skapa kronisk spänning i nacke, axlar och nedre delen av ryggen. Över månader och år blir denna spänning smärta, och smärta blir skada. Det goda nyheten är att optimal ergonomi kan beräknas exakt från en enda mätning: din längd.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Genomsnitt Skrivbordstid', icon: 'mdi:desk' },
        { value: '90°', label: 'Ideell Armbågsvinkel', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'Bästa Skärmavstånd', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Varför En Storlek Aldrig Passar Alla',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standardskrivbord är 73 centimeter höga och standardstolar är 45 centimeter. Dessa mått utformades för decennier sedan för genomsnittliga manliga kontorsarbetare. Om du är kortare än 175 centimeter eller längre än 185 centimeter skadar dessa standarder aktivt din hållning. Kvinnor, tonåringar och personer med längre eller kortare överkropp än genomsnittet är särskilt dåligt betjänade av färdiga möbler.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Dålig Inställning',
          description: 'Vanliga standardvärden som skapar spänning över tid.',
          icon: 'mdi:alert',
          points: ['Skärm för hög eller för låg', 'Skrivbord tvingar axlarna uppåt', 'Fötterna når inte golvet', 'Stolen erbjuder inget lumbalt stöd'],
        },
        {
          title: 'Optimal Inställning',
          description: 'Personliga mätningar baserade på dina kroppsproportioner.',
          icon: 'mdi:check-circle',
          points: ['Skärm i ögonhöjd', 'Armbågarna i 90 grader', 'Fötterna planta mot golvet', 'Nedre ryggen fullt stödd'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Snabb Hållningskontrollista',
      icon: 'mdi:clipboard-check',
      badge: 'Åtgärd',
      html: '<p style="margin:0">Sätt dig med ryggen mot stolen. Kontrollera att det finns ett litet utrymme mellan baksidan av knäna och sitskanten. Se till att handlederna är raka när du skriver. Övre kanten på skärmen ska inte vara högre än dina ögon. Ta en 2-minuters promenadpaus var 30:e minut.</p>',
    },
    {
      type: 'title',
      text: 'Vetenskapen om Sittande och Stående',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Människokroppar är inte utformade för att stanna i en position i timmar. När man sitter ökar trycket på lumbala skivor med 40 procent jämfört med stående. När man står stilla samlas blod i benen och hjärtat måste arbeta hårdare för att pumpa upp det igen. Den hälsosammaste arbetsrytmen är att växla mellan sittande och stående var 30:e till 60:e minut, kombinerat med korta promenader. Detta verktyg beräknar båda lägen så att du kan ställa in ett omvandlingsbart skrivbord korrekt.',
    },
    {
      type: 'summary',
      title: 'Hur Man Bygger en Ergonomisk Arbetsplats',
      items: [
        'Mät din barfotalängd i centimeter.',
        'Använd denna simulator för att få exakta höjder för stol, skrivbord och skärm.',
        'Justera först stolen, sedan skrivbordet, sedan skärmen.',
        'Om du använder ett stå-skrivbord, ställ in det 30 centimeter över sittande skrivbordshöjd.',
        'Placera skärmen på en armlängds avstånd och luta den bakåt 10 till 20 grader.',
        'Ta en 2-minuters paus för att gå eller sträcka på dig var 30:e minut.',
      ],
    },
  ],
  ui: {
    labelMode: 'Arbetsplatsläge',
    modeSit: 'Sittande',
    modeStand: 'Stående',
    labelHeight: 'Din längd',
    unitCm: 'cm',
    labelGender: 'Kroppsbyggnad',
    genderMale: 'Man',
    genderFemale: 'Kvinna',
    labelChair: 'Stol',
    labelDesk: 'Skrivbord',
    labelMonitor: 'Skärm',
    labelDistance: 'Avstånd',
    labelAngle: 'Vinkel',
    labelGood: 'Bra',
    labelAdjust: 'Justera',
    badgeChair: 'Sits',
    badgeDesk: 'Yta',
    badgeMonitor: 'Skärm',
    tipScreenLow: 'Höj skärmen',
    tipScreenHigh: 'Sänk skärmen',
    tipDeskLow: 'Höj skrivbordet',
    tipDeskHigh: 'Sänk skrivbordet',
    tipChairLow: 'Höj stolen',
    tipChairHigh: 'Sänk stolen',
    tipDistance: 'Flytta skärmen till armlängds avstånd',
  },
};
