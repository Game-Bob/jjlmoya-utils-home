export interface DewPointCalculatorUI extends Record<string, string> {
  labelTemperature: string;
  labelHumidity: string;
  labelDewPoint: string;
  riskLow: string;
  riskMedium: string;
  riskHigh: string;
  riskExtreme: string;
  riskLowDesc: string;
  riskMediumDesc: string;
  riskHighDesc: string;
  riskExtremeDesc: string;
}
