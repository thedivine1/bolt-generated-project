import { CarbohydrateFormData, CarbohydrateResult } from "./types";

const convertToMetric = (value: string, unit: string, type: "height" | "weight") => {
  if (unit === "metric") return Number(value);
  
  if (type === "height") {
    const [feet, inches] = value.split(".");
    return (Number(feet) * 30.48) + (Number(inches || 0) * 2.54);
  } else {
    return Number(value) * 0.453592;
  }
};

const calculateBMR = (data: CarbohydrateFormData) => {
  const height = convertToMetric(data.height, data.unit, "height");
  const weight = convertToMetric(data.weight, data.unit, "weight");
  const age = Number(data.age);

  if (data.formula === "katch" && data.bodyFat) {
    const leanMass = weight * (1 - Number(data.bodyFat) / 100);
    return 370 + (21.6 * leanMass);
  }

  if (data.gender === "male") {
    return (10 * weight) + (6.25 * height) - (5 * age) + 5;
  }
  return (10 * weight) + (6.25 * height) - (5 * age) - 161;
};

const activityMultipliers = {
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very: 1.9,
};

export const calculateCarbohydrateNeeds = (data: CarbohydrateFormData): CarbohydrateResult => {
  const bmr = calculateBMR(data);
  const tdee = bmr * activityMultipliers[data.activity as keyof typeof activityMultipliers];
  const carbCalories = tdee * 0.55;
  const dailyCarbs = carbCalories / 4;
  
  return {
    dailyCarbs,
    carbsPerMeal: dailyCarbs * 0.3,
    carbsPerSnack: dailyCarbs * 0.05,
  };
};
