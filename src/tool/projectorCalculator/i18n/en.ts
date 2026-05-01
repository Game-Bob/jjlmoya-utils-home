import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { ProjectorCalculatorUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'projector-throw-calculator';
const title = 'Projector Throw Distance Calculator';
const description =
  'Calculate the exact distance to install your projector based on your desired screen size and Throw Ratio. Visual tool with real-time simulation.';

const faqData = [
  {
    question: 'What is the Throw Ratio?',
    answer:
      'A number that defines how large the image will be at a given distance. It is calculated by dividing the projection distance by the screen width. A ratio of 1.5 means that projecting from 1.5m gives you 1m of image width.',
  },
  {
    question: 'How far should I place the projector for a 100-inch screen?',
    answer:
      "It depends entirely on your projector's Throw Ratio. With a standard ratio of 1.5:1 you would need about 3.3m. With a Short Throw projector you could achieve it in under 1m.",
  },
  {
    question: "What's the difference between 16:9 and 4:3?",
    answer:
      '16:9 is the widescreen format for modern films and series. 4:3 is the classic format for presentations and retro projectors. Choosing the right one avoids excessive black bars.',
  },
  {
    question: 'Does the height of the projector installation matter?',
    answer:
      'Yes. Projectors have a vertical offset or keystone correction. Ideally mount it centred with the top or bottom edge of the screen to avoid image distortion.',
  },
];

const howToData = [
  {
    name: 'Check the Throw Ratio',
    text: "Look on the box or manual for a number like 1.2:1 or 1.5-1.8:1.",
  },
  {
    name: 'Define screen size',
    text: 'Enter the diagonal inches you want to achieve, or the available wall width.',
  },
  {
    name: 'Choose the format',
    text: 'Select 16:9 for films and series, 4:3 for presentations, or 21:9 for cinemascope.',
  },
  {
    name: 'Get the distance',
    text: 'The calculator gives you the exact distance at which to mount the projector bracket.',
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<ProjectorCalculatorUI> = {
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
      text: 'Master Projection Geometry',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Installing a projector by eye can ruin the experience. Too close and the image is tiny; too far and you lose brightness. The key is the <strong>Throw Ratio</strong>, a number that precisely defines the relationship between distance and image size.',
    },
    {
      type: 'stats',
      items: [
        { value: 'TR × W', label: 'Distance Formula', icon: 'mdi:projector' },
        { value: '< 0.4', label: 'Ultra Short Throw', icon: 'mdi:arrow-collapse-horizontal' },
        { value: '> 2.0', label: 'Long Throw', icon: 'mdi:arrow-expand-horizontal' },
      ],
      columns: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'What is the Throw Ratio?',
          description: 'The ratio between the projection distance and the image width. A TR of 1.5 means you need 1.5m of distance per metre of screen width.',
          icon: 'mdi:ruler',
          points: ['TR < 1: Short Throw, ideal for small rooms', 'TR 1–2: Standard for living rooms and meeting rooms', 'TR > 2: Long Throw, for large auditoriums'],
        },
        {
          title: 'Format and Aspect Ratio',
          description: 'The format determines image proportions. Using the wrong format creates black bars that waste screen area and reduce perceived brightness.',
          icon: 'mdi:aspect-ratio',
          points: ['16:9 (1.78:1): HD/4K standard for cinema and series', '21:9 (2.35:1): cinemascope format for home cinema', '4:3 (1.33:1): for presentations and office projectors'],
        },
      ],
      columns: 2,
    },
    {
      type: 'title',
      text: 'Professional Installation Tips',
      level: 3,
    },
    {
      type: 'paragraph',
      html: '<strong>Lens Shift vs Keystone:</strong> If your projector has Lens Shift, always use it instead of digital Keystone. Keystone crops pixels and reduces effective resolution. A correct physical mounting eliminates the need for any correction.',
    },
    {
      type: 'diagnostic',
      variant: 'warning',
      title: 'Ambient Light and Screen Gain',
      icon: 'mdi:lightbulb-on',
      badge: 'Pro Tip',
      html: '<p>In rooms with ambient light, consider a high-gain screen (>1.0) to compensate for contrast loss. In dark rooms, a neutral (1.0) or negative-gain screen delivers better viewing angles and more uniform colours.</p>',
    },
    {
      type: 'summary',
      title: 'Installation Checklist',
      items: [
        "Note your projector's Throw Ratio before choosing the mounting location.",
        'Check the maximum image size allowed by the available space.',
        'Mount the projector centred vertically relative to the screen.',
        'Avoid digital Keystone: use Lens Shift or adjust the physical position.',
        'Ensure no direct light sources are pointing at the screen.',
      ],
    },
  ],
  ui: {
    configTitle: 'Configuration',
    configSubtitle: 'Define your screen and projector',
    labelDiagonal: 'Screen Diagonal',
    labelDiagonalUnit: 'Inches (")',
    labelFormat: 'Format (Aspect Ratio)',
    labelThrowRatio: 'Throw Ratio',
    throwRatioHint: 'Check your projector manual. Example: 1.50 means that for 1m of image width, you need 1.5m of distance.',
    ratio169Sub: 'TV / HD',
    ratio219Sub: 'Cinema',
    ratio43Sub: 'Retro',
    labelWidth: 'Screen Width',
    labelHeight: 'Screen Height',
    labelDistance: 'Required Distance',
    simulationBadge: 'Real-Time Simulation',
  },
};
