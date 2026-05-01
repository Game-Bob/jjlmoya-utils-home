import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DewPointCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'taupunkt-rechner';
const title = 'Taupunkt Rechner';
const description = 'Berechnen Sie die Kondensationstemperatur an Ihren Wänden basierend auf Luftfeuchtigkeit und Raumtemperatur. Ein wichtiges Werkzeug zur Vermeidung von Schimmel und zum Schutz der Bausubstanz.';

const faqData = [
  {
    question: 'Was genau ist der Taupunkt?',
    answer: 'Der Taupunkt ist die Temperatur, auf die Luft abgekühlt werden muss, damit der darin enthaltene Wasserdampf zu flüssigem Wasser kondensiert. Je höher die relative Luftfeuchtigkeit ist, desto näher liegt der Taupunkt an der aktuellen Temperatur.',
  },
  {
    question: 'Warum bildet sich Schimmel in den Ecken meiner Wohnung?',
    answer: 'Ecken sind oft Wärmebrücken, an denen die Wand kälter ist. Wenn die Temperatur dieser Oberfläche unter den Taupunkt fällt, bildet sich flüssiges Wasser (Kondensat). Schimmel benötigt diese konstante Feuchtigkeit zum Wachsen.',
  },
  {
    question: 'Wie kann ich die Luftfeuchtigkeit zu Hause senken?',
    answer: 'Die effektivste Methode ist regelmäßiges Stoßlüften (besonders nach dem Duschen oder Kochen) und der Einsatz von Luftentfeuchtern. Eine konstante Raumtemperatur hilft ebenfalls, da warme Luft mehr Feuchtigkeit aufnehmen kann, ohne zu kondensieren.',
  },
  {
    question: 'Ist Schimmel durch Kondensation gefährlich?',
    answer: 'Ja. Schimmel setzt Sporen frei, die Atemwegsprobleme, Allergien und Asthma verursachen können. Das Erkennen des Kondensationsrisikos mit diesem Rechner ist der erste Schritt zu einem gesunden Zuhause.',
  },
];

const howToData = [
  {
    name: 'Temperatur und Feuchtigkeit messen',
    text: 'Verwenden Sie ein Thermometer und ein Hygrometer, um die aktuellen Werte im Raum zu ermitteln.',
  },
  {
    name: 'Werte eingeben',
    text: 'Stellen Sie die Temperatur in Grad Celsius und die Luftfeuchtigkeit in Prozent im Rechner ein.',
  },
  {
    name: 'Kritische Temperatur ermitteln',
    text: 'Das Tool zeigt Ihnen genau an, ab welcher Oberflächentemperatur Wasser zu kondensieren beginnt.',
  },
  {
    name: 'Oberflächen prüfen',
    text: 'Messen Sie mit einem Infrarot-Thermometer die Temperatur Ihrer Wände. Liegt sie am oder unter dem Taupunkt, müssen Sie lüften oder dämmen.',
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
  inLanguage: 'de',
};

export const content: ToolLocaleContent<DewPointCalculatorUI> = {
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
      text: 'Was ist der Taupunkt und warum ist er für Ihr Zuhause wichtig?',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Der Taupunkt markiert die Temperatur, bei der Luftfeuchtigkeit zu Wasser wird. In Wohnräumen ist dieser Wert entscheidend für die Vermeidung von Bauschäden. Wenn die Temperatur einer Oberfläche (z. B. einer schlecht gedämmten Außenwand) unter den Taupunkt sinkt, entsteht Kondenswasser – der ideale Nährboden für <em>Aspergillus</em> und andere gesundheitsschädliche Pilze.',
    },
    {
      type: 'stats',
      items: [
        { value: '> 5°C', label: 'Sicherer Bereich', icon: 'mdi:shield-check' },
        { value: '40–60%', label: 'Ideale Feuchte', icon: 'mdi:water-percent' },
        { value: '< 1°C', label: 'Akute Gefahr', icon: 'mdi:alert' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Magnus Tetens Formel',
          description: 'Zur präzisen Berechnung nutzen wir die Magnus-Tetens-Näherung. Diese Formel wird von der Weltorganisation für Meteorologie (WMO) für Temperaturen zwischen 0°C und 50°C empfohlen.',
          icon: 'mdi:calculator',
          points: ['Wissenschaftlich validierte Präzision', 'Optimiert für Wohnraumtemperaturen'],
        },
        {
          title: 'Wärmebrücken und Schimmel',
          description: 'Ecken, Fensterrahmen und ungenügend gedämmte Wände sind die kältesten Stellen im Haus. Sinkt dort die Temperatur unter den Taupunkt, ist Schimmelbildung vorprogrammiert.',
          icon: 'mdi:home-thermometer',
          points: ['Ecken sind besonders anfällig', 'Wärmedämmung verhindert Kondensation'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Risikostufen',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Geringes Risiko (Diff. &gt; 5°C):</strong> Die Wände sind sicher. <strong>Mittleres Risiko (3–5°C):</strong> Achten Sie auf Ecken und Wärmebrücken. <strong>Hohes Risiko (1–3°C):</strong> Kondensation an Scheiben wahrscheinlich – sofort lüften. <strong>Akute Gefahr (&lt; 1°C):</strong> Aktive Kondensation mit sofortigem Risiko für schwarzen Schimmel.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Die goldene Regel',
      icon: 'mdi:thermometer-alert',
      badge: 'Experten-Tipp',
      html: '<p>Wenn die Wandtemperatur weniger als <strong>3°C über dem Taupunkt</strong> liegt, besteht unmittelbare Kondensationsgefahr. Lüften Sie regelmäßig und halten Sie die Luftfeuchtigkeit zwischen 40 % und 60 %.</p>',
    },
    {
      type: 'summary',
      title: 'So vermeiden Sie Kondenswasser',
      items: [
        'Täglich mehrmals stoßlüften, besonders nach dem Duschen oder Kochen.',
        'Relative Luftfeuchtigkeit zwischen 40 % und 60 % halten.',
        'Dunstabzugshauben in der Küche konsequent nutzen.',
        'Wäsche nicht in der Wohnung trocknen (oder nur bei guter Belüftung).',
        'Außenwände dämmen, um kalte Oberflächen zu vermeiden.',
      ],
    },
  ],
  ui: {
    labelTemperature: 'Raumtemperatur',
    labelHumidity: 'Rel. Luftfeuchtigkeit',
    labelDewPoint: 'Taupunkt',
    riskLow: 'Geringes Risiko',
    riskMedium: 'Mittleres Risiko',
    riskHigh: 'Hohes Risiko',
    riskExtreme: 'Akute Gefahr',
    riskLowDesc: 'Differenz > 5°C. Wände sind sicher.',
    riskMediumDesc: 'Differenz 3–5°C. Ecken prüfen.',
    riskHighDesc: 'Differenz 1–3°C. Sofort lüften!',
    riskExtremeDesc: 'Differenz < 1°C. Aktive Kondensation.',
  },
};
