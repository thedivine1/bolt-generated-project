export type ConversionType = "length" | "area" | "temperature" | "volume" | "weight";

export interface ConversionHistory {
  id: string;
  timestamp: number;
  fromValue: string;
  fromUnit: string;
  toUnit: string;
  result: string;
  type: ConversionType;
}

export interface Unit {
  value: string;
  label: string;
}

export interface ConversionData {
  [key: string]: number;
}
