import type { StorageInputs } from './logic';

const STORAGE_KEY = 'jjlmoya-storage-unit-size-calculator';

export const loadStorageInputs = (fallback: StorageInputs): StorageInputs => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    return JSON.parse(raw) as StorageInputs;
  } catch {
    return fallback;
  }
};

export const saveStorageInputs = (inputs: StorageInputs): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs));
  } catch {}
};
