import { calculateWaterUsage, DEFAULT_WATER_USAGE, presetInput } from "./logic";
import type { WaterUsageInput } from "./logic";
import { evaluateUsage } from "./evaluator";
import { renderResults } from "./dom-views";
import type { HouseholdWaterUsageUI } from "./ui";
import { loadWaterUsage, saveWaterUsage } from "./storage";

const inputKeys: Array<keyof WaterUsageInput> = [
  "people",
  "showersPerPersonPerWeek",
  "showerMinutes",
  "showerFlowLpm",
  "flushesPerPersonPerDay",
  "flushLitres",
  "tapMinutesPerPersonPerDay",
  "tapFlowLpm",
  "washingLoadsPerWeek",
  "washingLitres",
  "dishwasherLoadsPerWeek",
  "dishwasherLitres",
  "leakLitresPerDay",
];

function inputFor(
  root: HTMLElement,
  key: keyof WaterUsageInput,
): HTMLInputElement | null {
  return root.querySelector<HTMLInputElement>(`[data-input="${key}"]`);
}

function readInput(root: HTMLElement): WaterUsageInput {
  const values = { ...DEFAULT_WATER_USAGE };
  inputKeys.forEach((key) => {
    const input = inputFor(root, key);
    if (input) values[key] = Number(input.value);
  });
  return values;
}

function writeInput(root: HTMLElement, input: WaterUsageInput): void {
  inputKeys.forEach((key) => {
    const element = inputFor(root, key);
    if (element) element.value = String(input[key]);
  });
}

function render(root: HTMLElement, ui: HouseholdWaterUsageUI): void {
  const input = readInput(root);
  const result = calculateWaterUsage(input);
  renderResults(root, result, evaluateUsage(result), ui);
  saveWaterUsage(input);
}

function connectInputs(root: HTMLElement, ui: HouseholdWaterUsageUI): void {
  root.querySelectorAll<HTMLInputElement>("[data-input]").forEach((input) => {
    input.addEventListener("input", () => render(root, ui));
    input.addEventListener("change", () => render(root, ui));
  });
}

function connectPresets(root: HTMLElement, ui: HouseholdWaterUsageUI): void {
  root
    .querySelectorAll<HTMLButtonElement>("[data-preset]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        const name = button.dataset.preset as
          | "everyday"
          | "waterAware"
          | "lowFlow";
        writeInput(root, presetInput(name));
        root
          .querySelectorAll("[data-preset]")
          .forEach((item) =>
            item.classList.toggle("n-active", item === button),
          );
        render(root, ui);
      });
    });
}

export function initializeHouseholdWaterUsage(): void {
  const root = document.querySelector<HTMLElement>(
    '[data-tool="household-water-usage-calculator"]',
  );
  if (!root) return;
  const ui = JSON.parse(root.dataset.ui ?? "{}") as HouseholdWaterUsageUI;
  const stored = loadWaterUsage();
  if (stored) writeInput(root, { ...DEFAULT_WATER_USAGE, ...stored });
  connectInputs(root, ui);
  connectPresets(root, ui);
  render(root, ui);
}
