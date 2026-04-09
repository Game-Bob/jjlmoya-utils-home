export interface TariffComparatorUI extends Record<string, string> {
  labelConsumption: string;
  unitKwhYear: string;
  labelPower: string;
  unitKw: string;
  labelMarket: string;
  labelFree: string;
  labelAnnualEst: string;
  labelPowerTerm: string;
  labelEnergyTerm: string;
  labelDashboard: string;
  labelMaxPower: string;
  labelMaxPowerEst: string;
  labelCo2: string;
  labelCo2Est: string;
  labelSimulator: string;
  labelSolar: string;
  labelSolarDesc: string;
  labelShift: string;
  labelShiftDesc: string;
  badgeBetter: string;
  badgeWorseYear: string;
  currencySign: string;
  monthLabels: string;
}
