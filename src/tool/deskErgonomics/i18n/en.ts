import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { DeskErgonomicsUI } from '../ui';
import { bibliography } from '../bibliography';

const slug = 'desk-ergonomics';
const title = 'Desk Ergonomics and Workspace Layout Alignment';
const description =
  'Enter your height and instantly see how to adjust your chair, desk and monitor to eliminate back and neck pain in your home office.';

const faqData = [
  {
    question: 'Why does desk height matter?',
    answer:
      'A desk that is too high forces your shoulders to rise, causing tension in your neck and upper back. A desk that is too low makes you hunch forward, compressing your lumbar discs. The correct height keeps your forearms parallel to the floor and your elbows at a 90 degree angle.',
  },
  {
    question: 'How high should my monitor be?',
    answer:
      'The top of your monitor should be at or slightly below eye level, with the screen tilted back 10 to 20 degrees. This keeps your neck in a neutral position and reduces eye strain by looking slightly downward, which is the natural resting angle of human vision.',
  },
  {
    question: 'How far should I sit from my screen?',
    answer:
      'The ideal distance is an arm length away, roughly 50 to 70 centimetres. At this distance your eyes do not have to work hard to focus, and you can see the entire screen without moving your head. For larger screens, increase the distance proportionally.',
  },
  {
    question: 'Is a standing desk better?',
    answer:
      'Standing desks reduce prolonged sitting, which is linked to cardiovascular and metabolic issues. However, standing all day can cause vein and foot problems. The best approach is to alternate: sit for 30 minutes, stand for 15 to 30 minutes, and move regularly.',
  },
  {
    question: 'Should my feet touch the floor?',
    answer:
      'Yes. Your feet should rest flat on the floor with your knees at a 90 degree angle. If your chair is too high, use a footrest. If your feet dangle, pressure builds behind your thighs, restricting blood flow and causing numbness.',
  },
  {
    question: 'What is the best chair height?',
    answer:
      'The seat should allow your knees to bend at roughly 90 degrees with your feet flat on the floor. Your hips should be level with or slightly above your knees. This distributes weight evenly across your sit bones and reduces pressure on your lower back.',
  },
];

const howToData = [
  {
    name: 'Measure your body height',
    text: 'Stand barefoot against a wall and mark the top of your head. Measure from the floor to the mark in centimetres.',
  },
  {
    name: 'Select your workspace mode',
    text: 'Choose whether you want recommendations for a seated desk or a standing desk. Each mode uses different body proportions.',
  },
  {
    name: 'Adjust your chair first',
    text: 'Set your chair so your feet rest flat on the floor and your knees form a 90 degree angle. Your hips should be level with or slightly above your knees.',
  },
  {
    name: 'Set your desk surface',
    text: 'Raise or lower your desk so your forearms rest parallel to the floor when typing. Your elbows should be at a 90 degree angle.',
  },
  {
    name: 'Position your monitor',
    text: 'Place the monitor one arm length away. The top of the screen should be at or slightly below eye level, tilted back 10 to 20 degrees.',
  },
  {
    name: 'Verify with the avatar',
    text: 'Use the on screen avatar to check that all angles are green. If any joint is red, adjust the corresponding furniture piece.',
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
      text: 'The Hidden Cost of a Bad Desk Setup',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Most people spend more than eight hours a day at a desk, yet few ever measure whether their chair, desk or monitor fit their body. A mismatch of just a few centimetres can create chronic tension in your neck, shoulders and lower back. Over months and years, this tension becomes pain, and pain becomes injury. The good news is that optimal ergonomics can be calculated precisely from a single measurement: your height.',
    },
    {
      type: 'stats',
      items: [
        { value: '8h', label: 'Avg Desk Time', icon: 'mdi:desk' },
        { value: '90°', label: 'Ideal Elbow Angle', icon: 'mdi:angle-acute' },
        { value: '60cm', label: 'Best Screen Distance', icon: 'mdi:monitor' },
      ],
      columns: 3,
    },
    {
      type: 'title',
      text: 'Why One Size Never Fits All',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Standard desks are 73 centimetres high and standard chairs are 45 centimetres high. These dimensions were designed decades ago for average male office workers. If you are shorter than 175 centimetres or taller than 185 centimetres, those defaults are actively harming your posture. Women, teenagers and people with longer or shorter torsos than average are especially poorly served by off the shelf furniture.',
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Poor Setup',
          description: 'Common furniture defaults that create strain over time.',
          icon: 'mdi:alert',
          points: ['Monitor too high or too low', 'Desk forces shoulders up', 'Feet do not reach the floor', 'Chair offers no lumbar support'],
        },
        {
          title: 'Optimal Setup',
          description: 'Personalised measurements based on your body proportions.',
          icon: 'mdi:check-circle',
          points: ['Monitor at eye level', 'Elbows at 90 degrees', 'Feet flat on the floor', 'Lower back fully supported'],
        },
      ],
      columns: 2,
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Quick Posture Checklist',
      icon: 'mdi:clipboard-check',
      badge: 'Action',
      html: '<p style="margin:0">Sit with your back against the chair. Check that there is a small gap between the back of your knees and the seat edge. Ensure your wrists are straight when typing. The top of your monitor should be no higher than your eyes. Take a 2 minute walking break every 30 minutes.</p>',
    },
    {
      type: 'title',
      text: 'The Science of Sitting and Standing',
      level: 3,
    },
    {
      type: 'paragraph',
      html: 'Human bodies are not designed to stay in one position for hours. When sitting, pressure on your lumbar discs increases by 40 percent compared to standing. When standing still, blood pools in your legs and your heart has to work harder to pump it back up. The healthiest work rhythm is to alternate between sitting and standing every 30 to 60 minutes, combined with short walks. This tool calculates both modes so you can set up a convertible desk correctly.',
    },
    {
      type: 'summary',
      title: 'How to Build an Ergonomic Workspace',
      items: [
        'Measure your barefoot height in centimetres.',
        'Use this simulator to get your exact chair, desk and monitor heights.',
        'Adjust your chair first, then the desk, then the monitor.',
        'If you use a standing desk, set it 30 centimetres above your seated desk height.',
        'Place the monitor one arm length away and tilt it back 10 to 20 degrees.',
        'Take a 2 minute break to walk or stretch every 30 minutes.',
      ],
    },
  ],
  ui: {
    labelMode: 'Workspace mode',
    modeSit: 'Seated',
    modeStand: 'Standing',
    labelHeight: 'Your height',
    unitCm: 'cm',
    labelGender: 'Build',
    genderMale: 'Male',
    genderFemale: 'Female',
    labelChair: 'Chair',
    labelDesk: 'Desk',
    labelMonitor: 'Monitor',
    labelDistance: 'Distance',
    labelAngle: 'Angle',
    labelGood: 'Good',
    labelAdjust: 'Adjust',
    badgeChair: 'Seat',
    badgeDesk: 'Surface',
    badgeMonitor: 'Screen',
    tipScreenLow: 'Raise your monitor',
    tipScreenHigh: 'Lower your monitor',
    tipDeskLow: 'Raise your desk',
    tipDeskHigh: 'Lower your desk',
    tipChairLow: 'Raise your chair',
    tipChairHigh: 'Lower your chair',
    tipDistance: 'Move screen to arm length',
  },
};
