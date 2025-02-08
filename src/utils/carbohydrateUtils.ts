interface CalculationInput {
  age: string;
  gender: "male" | "female";
  height: string;
  weight: string;
  activity: string;
  unit: "us" | "metric" | "other";
  formula: "mifflin" | "katch";
  bodyFat?: string;
}

const convertToMetric = (value: string, unit: string, type: "height" | "weight") => {
  if (unit === "metric") return Number(value);
  
  if (type === "height") {
    // Convert feet/inches to cm
    const [feet, inches] = value.split(".");
    return (Number(feet) * 30.48) + (Number(inches || 0) * 2.54);
  } else {
    // Convert pounds to kg
    return Number(value) * 0.453592;
  }
};

const calculateBMR = (input: CalculationInput) => {
  const height = convertToMetric(input.height, input.unit, "height");
  const weight = convertToMetric(input.weight, input.unit, "weight");
  const age = Number(input.age);

  if (input.formula === "katch" && input.bodyFat) {
    const leanMass = weight * (1 - Number(input.bodyFat) / 100);
    return 370 + (21.6 * leanMass);
  }

  // Mifflin-St Jeor Formula
  if (input.gender === "male") {
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

export const calculateCarbohydrateNeeds = (input: CalculationInput) => {
  const bmr = calculateBMR(input);
  const tdee = bmr * activityMultipliers[input.activity as keyof typeof activityMultipliers];
  
  // Calculate carbohydrate needs (approximately 45-65% of total calories)
  const carbCalories = tdee * 0.55; // Using 55% as a middle ground
  const dailyCarbs = carbCalories / 4; // 4 calories per gram of carbohydrate
  
  return {
    dailyCarbs,
    carbsPerMeal: dailyCarbs * 0.3, // 30% of daily carbs per main meal
    carbsPerSnack: dailyCarbs * 0.05, // 5% of daily carbs per snack
  };
};
