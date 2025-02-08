export const calculateBMR = (data: {
  age: number;
  gender: string;
  height: number;
  weight: number;
  unit: string;
}): number => {
  // Convert to metric if using US units
  const heightInCm = data.unit === 'us' ? data.height * 2.54 : data.height;
  const weightInKg = data.unit === 'us' ? data.weight * 0.453592 : data.weight;

  // Mifflin-St Jeor Equation
  let bmr = 10 * weightInKg + 6.25 * heightInCm - 5 * data.age;
  bmr = data.gender === 'male' ? bmr + 5 : bmr - 161;

  return Math.round(bmr);
};

export const calculateActivityLevels = (bmr: number) => {
  return {
    sedentary: Math.round(bmr * 1.2),
    lightExercise: Math.round(bmr * 1.375),
    moderateExercise: Math.round(bmr * 1.55),
    activeExercise: Math.round(bmr * 1.725),
    veryActive: Math.round(bmr * 1.9),
    extraActive: Math.round(bmr * 2.2),
  };
};
