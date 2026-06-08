export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { QR_GENERATOR_TOOL } from './tool/qrGenerator/index';
import { SOLAR_CALCULATOR_TOOL } from './tool/solarCalculator/index';
import { PROJECTOR_CALCULATOR_TOOL } from './tool/projectorCalculator/index';
import { DEW_POINT_CALCULATOR_TOOL } from './tool/dewPointCalculator/index';
import { LED_SAVING_CALCULATOR_TOOL } from './tool/ledSavingCalculator/index';
import { TARIFF_COMPARATOR_TOOL } from './tool/tariffComparator/index';
import { HEATING_COMPARATOR_TOOL } from './tool/heatingComparator/index';
import { WIFI_RANGE_SIMULATOR_TOOL } from './tool/wifiRangeSimulator/index';
import { AC_TONNAGE_CALCULATOR_TOOL } from './tool/acTonnageCalculator/index';
import { WALL_PAINTING_CALCULATOR_TOOL } from './tool/wallPaintingCalculator/index';
import { VAMPIRE_DRAW_SIMULATOR_TOOL } from './tool/vampireDrawSimulator/index';
import { DESK_ERGONOMICS_TOOL } from './tool/deskErgonomics/index';
import { APPLIANCE_COST_CALCULATOR_TOOL } from './tool/applianceCostCalculator/index';
import { TILE_LAYOUT_CALCULATOR_TOOL } from './tool/tileLayoutCalculator/index';

export const ALL_TOOLS: ToolDefinition[] = [
  QR_GENERATOR_TOOL,
  SOLAR_CALCULATOR_TOOL,
  PROJECTOR_CALCULATOR_TOOL,
  DEW_POINT_CALCULATOR_TOOL,
  LED_SAVING_CALCULATOR_TOOL,
  TARIFF_COMPARATOR_TOOL,
  HEATING_COMPARATOR_TOOL,
  WIFI_RANGE_SIMULATOR_TOOL,
  AC_TONNAGE_CALCULATOR_TOOL,
  WALL_PAINTING_CALCULATOR_TOOL,
  VAMPIRE_DRAW_SIMULATOR_TOOL,
  DESK_ERGONOMICS_TOOL,
  APPLIANCE_COST_CALCULATOR_TOOL,
  TILE_LAYOUT_CALCULATOR_TOOL,
];

