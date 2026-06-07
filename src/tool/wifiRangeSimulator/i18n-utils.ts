import type { WifiRangeSimulatorUI } from './ui';

let _ui: WifiRangeSimulatorUI | null = null;

export function getUI(): WifiRangeSimulatorUI {
  if (_ui) return _ui;
  const w = window as unknown as { __wifiUI?: WifiRangeSimulatorUI };
  if (w.__wifiUI) {
    _ui = w.__wifiUI;
  } else {
    _ui = {} as WifiRangeSimulatorUI;
  }
  return _ui;
}
