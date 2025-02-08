interface ArmyBodyFatParams {
  gender: "male" | "female";
  age: number;
  weight: number;
  height: number; // Added height parameter
  waist: number;
  neck: number;
  hip?: number;
  unit: "us" | "metric";
}

export const calculateArmyBodyFat = ({
  gender,
  age,
  weight,
  height,
  waist,
  neck,
  hip,
  unit,
}: ArmyBodyFatParams): number => {
  // Convert to US units if metric
  if (unit === "metric") {
    weight = weight * 2.20462; // kg to lbs
    height = height * 39.3701; // m to inches
    waist = waist / 2.54; // cm to inches
    neck = neck / 2.54; // cm to inches
    if (hip) hip = hip / 2.54; // cm to inches
  }

  let bodyFat = 0;

  if (gender === "male") {
    bodyFat = 86.010 * Math.log10(waist - neck) - 70.041 * Math.log10(height) + 36.76;
  } else {
    if (!hip) throw new Error("Hip measurement required for females");
    bodyFat = 163.205 * Math.log10(waist + hip - neck) - 97.684 * Math.log10(height) - 78.387;
  }

  return Math.max(0, Math.min(bodyFat, 100));
};
