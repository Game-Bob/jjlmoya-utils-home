import type {
  WithContext,
  FAQPage,
  HowTo,
  SoftwareApplication,
} from "schema-dts";
import type { ToolLocaleContent } from "../../../types";
import type { HouseholdWaterUsageUI } from "../ui";
import { bibliography } from "../bibliography";

const slug = "household-water-usage-calculator";
const title = "Household Water Usage Calculator";
const description =
  "Estimate a household water footprint from daily habits, see which activities use the most, and compare your current routine with a practical lower-use scenario.";

const faq = [
  {
    question: "What does this household water calculator estimate?",
    answer:
      "It estimates litres per day, month and year from the habits you enter for showers, toilet flushes, taps, laundry, dishwashing and leaks. It also shows a lower-use scenario based on modest habit and fixture changes.",
  },
  {
    question: "Is the result the same as my water bill?",
    answer:
      "No. The result is a planning estimate built from your habits. A bill also includes outdoor use, shared services, meter timing, leaks outside the home and the actual flow of your fixtures, so use the calculator to find levers and compare scenarios rather than to replace a meter reading.",
  },
  {
    question: "Which input usually changes the result the most?",
    answer:
      "Long, high-flow showers often dominate a household estimate, but the answer depends on the number of people, toilet volume, tap time and how often laundry or dishwashing runs. The breakdown ranks the activities using your own inputs.",
  },
  {
    question: "What is the lower-use scenario?",
    answer:
      "The lower-use scenario applies transparent targets such as five-minute showers, lower flow rates, efficient flush volumes, shorter tap use, full laundry and dishwasher loads, and no avoidable leak. It is a comparison aid, not a promise about a particular appliance.",
  },
  {
    question: "Why does the calculator show a reference figure?",
    answer:
      "The reference is the latest Spanish household average available in the INE water supply and sanitation series, shown as context per person and day. It is not a target, diagnosis or proof that your home is wasteful, because local conditions and unmeasured uses vary.",
  },
];

const howTo = [
  {
    name: "Enter the number of people",
    text: "Start with the people who regularly use the home. The calculator divides the result per person so you can compare the scale of different households.",
  },
  {
    name: "Describe the main habits",
    text: "Enter shower frequency, duration and flow, then add flushes, tap time, laundry and dishwasher loads. Use the appliance label or a measured flow where you have it.",
  },
  {
    name: "Read the daily estimate",
    text: "The large figure is the estimated household litres per day. Monthly and annual figures use the same habits, so changing one field updates every view immediately.",
  },
  {
    name: "Find the largest lever",
    text: "Read the breakdown in monthly litres and share. The saving figure beside each activity estimates what could change if that activity moved toward the lower-use assumptions.",
  },
  {
    name: "Test a realistic preset",
    text: "Try Water aware or Low flow, then return to your own values and change only one habit. This shows whether a shorter shower, a full load or a small leak repair is worth investigating first.",
  },
];

const faqSchema: WithContext<FAQPage> = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description,
  step: howTo.map((step) => ({
    "@type": "HowToStep",
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: title,
  description,
  applicationCategory: "UtilityApplication",
  operatingSystem: "All",
  offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
  inLanguage: "en",
};

const ui: HouseholdWaterUsageUI = {
  presetLabel: "Start with a pattern",
  presetEveryday: "Everyday",
  presetWaterAware: "Water aware",
  presetLowFlow: "Low flow",
  controlsLabel: "Household water inputs",
  optionalInputsTitle: "Appliances and leaks",
  peopleLabel: "People using the home",
  peopleUnit: "people",
  showerTitle: "Showers",
  showersPerWeekLabel: "Showers per person",
  showerMinutesLabel: "Minutes each",
  showerFlowLabel: "Flow rate",
  toiletTitle: "Toilet",
  flushesPerDayLabel: "Flushes per person",
  flushVolumeLabel: "Volume per flush",
  tapTitle: "Taps",
  tapMinutesLabel: "Open time per person",
  tapFlowLabel: "Flow rate",
  washingLoadsLabel: "Washing loads",
  washingVolumeLabel: "Washing litres",
  dishwasherLoadsLabel: "Dishwasher loads",
  dishwasherVolumeLabel: "Dishwasher litres",
  leakLabel: "Avoidable leak estimate",
  litresPerDay: "litres estimated each day",
  litresPerMonth: "litres per month",
  litresPerYear: "litres per year",
  perPerson: "litres per person per day",
  reference: "Reference context",
  aboveReference: "Above reference",
  belowReference: "Below reference",
  nearReference: "Near reference",
  referenceDescription:
    "The INE household average for Spain is 128 litres per person per day in its latest published series. Use it as context, not as a pass or fail line.",
  savingTitle: "Room to reduce",
  savingDescription:
    "This is the combined difference between your current habits and the lower-use assumptions. Test one change at a time before treating it as a commitment.",
  currentScenario: "Your current pattern",
  efficientScenario: "Lower use scenario",
  monthlySaving: "potential litres saved monthly",
  categoryShowers: "Showers",
  categoryToilets: "Toilet",
  categoryTaps: "Taps",
  categoryWashing: "Washing",
  categoryDishwasher: "Dishwasher",
  categoryLeaks: "Leaks",
  breakdownTitle: "Where the month goes",
  usageShare: "of total",
};

export const content: ToolLocaleContent<HouseholdWaterUsageUI> = {
  slug,
  title,
  description,
  ui,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema, howToSchema, appSchema],
  seo: [
    {
      type: "title",
      text: "From a Water Bill to the Habits Behind It",
      level: 2,
    },
    {
      type: "paragraph",
      html: "A water bill tells you how much passed through the meter, but it rarely tells you which habit caused the change. This calculator turns the repeatable parts of a household routine into a transparent estimate: people, showers, flushes, taps, laundry, dishwashing and avoidable leaks. Each input remains visible so you can challenge an assumption instead of accepting a mysterious total.",
    },
    {
      type: "paragraph",
      html: "The latest INE series reports an average of 128 litres per person per day for Spanish households in 2024. That figure is useful context, not a universal target: a home with outdoor use, a different climate, a shared meter or a hidden leak can sit far from the average for understandable reasons.",
    },
    {
      type: "stats",
      items: [
        {
          value: "128 L",
          label: "Spain household average per person and day",
          icon: "mdi:water-outline",
        },
        {
          value: "6",
          label: "habit groups shown in the breakdown",
          icon: "mdi:chart-donut",
        },
        {
          value: "30.4",
          label: "days used for a monthly estimate",
          icon: "mdi:calendar-month",
        },
      ],
      columns: 3,
    },
    { type: "title", text: "How to Read the Estimate", level: 3 },
    {
      type: "paragraph",
      html: "Start with the largest monthly bar, not the most visible number. A long shower can be a larger lever than a low-volume activity repeated less often, while a small leak can quietly run every day. The calculator ranks the categories using your inputs and shows a possible monthly saving beside each one.",
    },
    {
      type: "comparative",
      items: [
        {
          title: "Current pattern",
          description:
            "Your entered frequency, duration, flow and appliance volumes are multiplied into daily and monthly litres.",
          icon: "mdi:home-outline",
          highlight: true,
          points: [
            "Keeps your household size visible",
            "Shows the contribution of each activity",
            "Updates while you edit a field",
          ],
        },
        {
          title: "Lower use scenario",
          description:
            "A transparent comparison applies modest targets such as shorter showers, lower flow and full loads.",
          icon: "mdi:water-check",
          points: [
            "Does not claim a guaranteed saving",
            "Does not estimate a bill amount",
            "Lets you test a change before acting",
          ],
        },
      ],
      columns: 2,
    },
    { type: "title", text: "Use It to Choose One Change", level: 3 },
    {
      type: "paragraph",
      html: "A useful scenario is specific enough to act on. Try reducing shower time by one minute, replacing an assumed flow with a measured one, or removing the leak estimate after you repair and recheck it. If the result barely changes, move to the next category rather than forcing an intervention that will not matter.",
    },
    {
      type: "list",
      items: [
        "Measure a tap or shower flow with a container and a timer.",
        "Compare the appliance label with the litres per load you entered.",
        "Run one preset to understand the direction of change.",
        "Change one habit and save the result as a realistic household target.",
      ],
      icon: "mdi:water-check",
    },
    {
      type: "tip",
      title: "What this estimate cannot tell you",
      html: "It cannot reproduce your meter, identify a plumbing fault, include every outdoor use, or certify that a fixture will deliver its label value in your home. Treat the output as a decision aid. If the estimate and the meter disagree, investigate the missing use or leak instead of increasing the assumed habit values blindly.",
    },
    { type: "title", text: "Why Flow and Frequency Matter Together", level: 3 },
    {
      type: "paragraph",
      html: "The same fixture can produce very different totals depending on how long it runs and how often it is used. A shower estimate multiplies people, showers per week, minutes and litres per minute. Laundry and dishwashing instead use loads per week and litres per load. Making those relationships visible helps you decide whether to change behaviour, maintain a fixture or collect a better measurement.",
    },
  ],
};
