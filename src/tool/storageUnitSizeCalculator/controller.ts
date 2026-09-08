import { calculateStoragePlan, sanitizeInputs, type StorageInputs } from './logic';
import { renderPlan } from './dom-views';
import { loadStorageInputs, saveStorageInputs } from './storage';
import type { StorageUnitSizeCalculatorUI } from './ui';

const fieldValue = (root: HTMLElement, name: string, fallback: number): number => {
  const input = root.querySelector<HTMLInputElement>(`[data-field="${name}"]`);
  const value = Number(input?.value);
  return Number.isFinite(value) ? value : fallback;
};

const readInputs = (root: HTMLElement, fallback: StorageInputs): StorageInputs => sanitizeInputs({
  boxes: {
    small: fieldValue(root, 'small-boxes', fallback.boxes.small),
    medium: fieldValue(root, 'medium-boxes', fallback.boxes.medium),
    large: fieldValue(root, 'large-boxes', fallback.boxes.large),
  },
  furniture: {
    sofa: fieldValue(root, 'sofa', fallback.furniture.sofa),
    bed: fieldValue(root, 'bed', fallback.furniture.bed),
    wardrobe: fieldValue(root, 'wardrobe', fallback.furniture.wardrobe),
    desk: fieldValue(root, 'desk', fallback.furniture.desk),
    chair: fieldValue(root, 'chair', fallback.furniture.chair),
  },
  accessPercent: fieldValue(root, 'access-percent', fallback.accessPercent),
});

const setInputs = (root: HTMLElement, inputs: StorageInputs): void => {
  const values: Record<string, number> = {
    'small-boxes': inputs.boxes.small,
    'medium-boxes': inputs.boxes.medium,
    'large-boxes': inputs.boxes.large,
    sofa: inputs.furniture.sofa,
    bed: inputs.furniture.bed,
    wardrobe: inputs.furniture.wardrobe,
    desk: inputs.furniture.desk,
    chair: inputs.furniture.chair,
    'access-percent': inputs.accessPercent,
  };
  Object.entries(values).forEach(([name, value]) => {
    const input = root.querySelector<HTMLInputElement>(`[data-field="${name}"]`);
    if (input) input.value = String(value);
  });
};

export const mountStorageUnitSizeCalculator = (root: HTMLElement, ui: StorageUnitSizeCalculatorUI): void => {
  let inputs = sanitizeInputs(loadStorageInputs(ui.defaults));
  const planRoot = root.querySelector<HTMLElement>('[data-plan]');
  if (!planRoot) return;
  setInputs(root, inputs);

  const update = (): void => {
    inputs = readInputs(root, inputs);
    saveStorageInputs(inputs);
    planRoot.innerHTML = renderPlan(calculateStoragePlan(inputs), ui);
  };

  root.querySelectorAll<HTMLInputElement>('[data-field]').forEach((input) => input.addEventListener('input', update));
  bindAccessChoices(root, update);
  bindPresets(root, ui, update, (nextInputs) => { inputs = nextInputs; });
  root.querySelector<HTMLButtonElement>('[data-reset]')?.addEventListener('click', () => resetInputs(root, ui, update, (nextInputs) => { inputs = nextInputs; }));
  update();
};

const bindAccessChoices = (root: HTMLElement, update: () => void): void => {
  root.querySelectorAll<HTMLInputElement>('[data-access-choice]').forEach((choice) => choice.addEventListener('change', () => {
    const range = root.querySelector<HTMLInputElement>('[data-field="access-percent"]');
    if (range) range.value = choice.value;
    update();
  }));
  root.querySelector<HTMLInputElement>('[data-field="access-percent"]')?.addEventListener('input', (event) => {
    const value = (event.currentTarget as HTMLInputElement).value;
    root.querySelectorAll<HTMLInputElement>('[data-access-choice]').forEach((choice) => { choice.checked = choice.value === value; });
  });
};

const bindPresets = (root: HTMLElement, ui: StorageUnitSizeCalculatorUI, update: () => void, setState: (inputs: StorageInputs) => void): void => {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    const preset = ui.presets.find((item) => item.id === button.dataset.preset);
    if (!preset) return;
    setState(sanitizeInputs(preset.inputs));
    setInputs(root, sanitizeInputs(preset.inputs));
    update();
    root.querySelectorAll('[data-preset]').forEach((item) => item.removeAttribute('aria-pressed'));
    button.setAttribute('aria-pressed', 'true');
  }));
};

const resetInputs = (root: HTMLElement, ui: StorageUnitSizeCalculatorUI, update: () => void, setState: (inputs: StorageInputs) => void): void => {
  const inputs = sanitizeInputs(ui.defaults);
  setState(inputs);
  setInputs(root, inputs);
  root.querySelectorAll('[data-preset]').forEach((item, index) => item.setAttribute('aria-pressed', index === 0 ? 'true' : 'false'));
  update();
};
