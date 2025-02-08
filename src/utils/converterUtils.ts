import { ConversionType } from "@/types/converter";

export const lengthUnits = [
  { value: "m", label: "Meter" },
  { value: "km", label: "Kilometer" },
  { value: "cm", label: "Centimeter" },
  { value: "mm", label: "Millimeter" },
  { value: "μm", label: "Micrometer" },
  { value: "nm", label: "Nanometer" },
  { value: "pm", label: "Picometer" },
  { value: "mi", label: "Mile" },
  { value: "yd", label: "Yard" },
  { value: "ft", label: "Foot" },
  { value: "in", label: "Inch" },
  { value: "ly", label: "Light Year" },
];

export const areaUnits = [
  { value: "m2", label: "Square Meter" },
  { value: "km2", label: "Square Kilometer" },
  { value: "cm2", label: "Square Centimeter" },
  { value: "mm2", label: "Square Millimeter" },
  { value: "μm2", label: "Square Micrometer" },
  { value: "ha", label: "Hectare" },
  { value: "mi2", label: "Square Mile" },
  { value: "yd2", label: "Square Yard" },
  { value: "ft2", label: "Square Foot" },
  { value: "in2", label: "Square Inch" },
  { value: "ac", label: "Acre" },
];

export const temperatureUnits = [
  { value: "C", label: "Celsius" },
  { value: "K", label: "Kelvin" },
  { value: "F", label: "Fahrenheit" },
];

export const volumeUnits = [
  { value: "m3", label: "Cubic Meter" },
  { value: "km3", label: "Cubic Kilometer" },
  { value: "cm3", label: "Cubic Centimeter" },
  { value: "mm3", label: "Cubic Millimeter" },
  { value: "L", label: "Liter" },
  { value: "mL", label: "Milliliter" },
  { value: "gal_us", label: "US Gallon" },
  { value: "qt_us", label: "US Quart" },
  { value: "pt_us", label: "US Pint" },
  { value: "cup_us", label: "US Cup" },
  { value: "fl_oz_us", label: "US Fluid Ounce" },
  { value: "tbsp_us", label: "US Table Spoon" },
  { value: "tsp_us", label: "US Tea Spoon" },
  { value: "gal_imp", label: "Imperial Gallon" },
  { value: "qt_imp", label: "Imperial Quart" },
  { value: "pt_imp", label: "Imperial Pint" },
  { value: "fl_oz_imp", label: "Imperial Fluid Ounce" },
  { value: "tbsp_imp", label: "Imperial Table Spoon" },
  { value: "tsp_imp", label: "Imperial Tea Spoon" },
  { value: "mi3", label: "Cubic Mile" },
  { value: "yd3", label: "Cubic Yard" },
  { value: "ft3", label: "Cubic Foot" },
  { value: "in3", label: "Cubic Inch" },
];

export const weightUnits = [
  { value: "kg", label: "Kilogram" },
  { value: "g", label: "Gram" },
  { value: "mg", label: "Milligram" },
  { value: "t", label: "Metric Ton" },
  { value: "LT", label: "Long Ton" },
  { value: "ST", label: "Short Ton" },
  { value: "lb", label: "Pound" },
  { value: "oz", label: "Ounce" },
  { value: "ct", label: "Carat" },
  { value: "u", label: "Atomic Mass Unit" },
];

const conversionFactors = {
  // Length conversions to meters
  length: {
    m: 1,
    km: 1000,
    cm: 0.01,
    mm: 0.001,
    μm: 1e-6,
    nm: 1e-9,
    pm: 1e-12,
    mi: 1609.344,
    yd: 0.9144,
    ft: 0.3048,
    in: 0.0254,
    ly: 9.461e15,
  },
  // Area conversions to square meters
  area: {
    m2: 1,
    km2: 1e6,
    cm2: 0.0001,
    mm2: 1e-6,
    μm2: 1e-12,
    ha: 10000,
    mi2: 2.59e6,
    yd2: 0.836127,
    ft2: 0.092903,
    in2: 0.00064516,
    ac: 4046.86,
  },
  // Volume conversions to cubic meters
  volume: {
    m3: 1,
    km3: 1e9,
    cm3: 1e-6,
    mm3: 1e-9,
    L: 0.001,
    mL: 1e-6,
    gal_us: 0.00378541,
    qt_us: 0.000946353,
    pt_us: 0.000473176,
    cup_us: 0.000236588,
    fl_oz_us: 2.95735e-5,
    tbsp_us: 1.47868e-5,
    tsp_us: 4.92892e-6,
    gal_imp: 0.00454609,
    qt_imp: 0.00113652,
    pt_imp: 0.000568261,
    fl_oz_imp: 2.84131e-5,
    tbsp_imp: 1.77582e-5,
    tsp_imp: 5.91939e-6,
    mi3: 4.168e9,
    yd3: 0.764555,
    ft3: 0.0283168,
    in3: 1.63871e-5,
  },
  // Weight conversions to kilograms
  weight: {
    kg: 1,
    g: 0.001,
    mg: 1e-6,
    t: 1000,
    LT: 1016.047,
    ST: 907.1847,
    lb: 0.453592,
    oz: 0.0283495,
    ct: 0.0002,
    u: 1.660539e-27,
  },
};

export const convert = (
  value: string,
  from: string,
  to: string,
  type: ConversionType
): string => {
  const num = parseFloat(value);
  if (isNaN(num)) return "";

  // Special case for temperature
  if (type === "temperature") {
    return convertTemperature(num, from, to);
  }

  // For other conversions
  const factors = conversionFactors[type];
  if (!factors) return "";

  const baseValue = num * factors[from];
  const result = baseValue / factors[to];

  // Handle very small or very large numbers
  if (Math.abs(result) < 1e-10 || Math.abs(result) > 1e10) {
    return result.toExponential(6);
  }
  return result.toFixed(6);
};

const convertTemperature = (value: number, from: string, to: string): string => {
  let kelvin: number;

  // Convert to Kelvin first
  switch (from) {
    case "C":
      kelvin = value + 273.15;
      break;
    case "F":
      kelvin = (value + 459.67) * (5 / 9);
      break;
    case "K":
      kelvin = value;
      break;
    default:
      return "";
  }

  // Convert from Kelvin to target unit
  let result: number;
  switch (to) {
    case "C":
      result = kelvin - 273.15;
      break;
    case "F":
      result = kelvin * (9 / 5) - 459.67;
      break;
    case "K":
      result = kelvin;
      break;
    default:
      return "";
  }

  return result.toFixed(4);
};
