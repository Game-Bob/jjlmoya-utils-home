import type { WifiRangeSimulatorUI } from './ui';

let _ui: WifiRangeSimulatorUI | null = null;

export function getUI(): WifiRangeSimulatorUI {
  if (_ui) return _ui;
  const el = document.getElementById('sketch-ui-store');
  if (el) {
    try {
      _ui = JSON.parse(el.textContent || '{}') as WifiRangeSimulatorUI;
    } catch {
      _ui = {} as WifiRangeSimulatorUI;
    }
  } else {
    _ui = {} as WifiRangeSimulatorUI;
  }
  return _ui;
}
