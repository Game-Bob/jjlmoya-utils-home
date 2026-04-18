import type { ToolDefinition } from './types';
import { QR_GENERATOR_TOOL } from './tool/qrGenerator/index';
import { SOLAR_CALCULATOR_TOOL } from './tool/solarCalculator/index';
import { PROJECTOR_CALCULATOR_TOOL } from './tool/projectorCalculator/index';
import { DEW_POINT_CALCULATOR_TOOL } from './tool/dewPointCalculator/index';
import { LED_SAVING_CALCULATOR_TOOL } from './tool/ledSavingCalculator/index';
import { TARIFF_COMPARATOR_TOOL } from './tool/tariffComparator/index';
import { HEATING_COMPARATOR_TOOL } from './tool/heatingComparator/index';

export const ALL_TOOLS: ToolDefinition[] = [
  QR_GENERATOR_TOOL,
  SOLAR_CALCULATOR_TOOL,
  PROJECTOR_CALCULATOR_TOOL,
  DEW_POINT_CALCULATOR_TOOL,
  LED_SAVING_CALCULATOR_TOOL,
  TARIFF_COMPARATOR_TOOL,
  HEATING_COMPARATOR_TOOL,
];

export const ALL_ENTRIES = ALL_TOOLS.map(t => t.entry);
