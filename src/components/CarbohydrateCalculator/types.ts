export interface CarbohydrateFormData {
  age: string;
  gender: "male" | "female";
  height: string;
  weight: string;
  activity: string;
  unit: "us" | "metric" | "other";
  formula: "mifflin" | "katch";
  bodyFat?: string;
}

export interface CarbohydrateResult {
  dailyCarbs: number;
  carbsPerMeal: number;
  carbsPerSnack: number;
}
