export const calculateBMI = (height: string, weight: string): number | null => {
  if (!height || !weight) return null;
  
  const heightInMeters = parseFloat(height) / 100;
  const weightInKg = parseFloat(weight);
  const calculatedBMI = weightInKg / (heightInMeters * heightInMeters);
  return parseFloat(calculatedBMI.toFixed(1));
};

export const getBMICategory = (bmi: number): string => {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal weight";
  if (bmi < 30) return "Overweight";
  return "Obese";
};

export const shareResults = async (bmi: number): Promise<void> => {
  const text = `My BMI is ${bmi} (${getBMICategory(bmi)})`;
  try {
    await navigator.share({ text });
  } catch (err) {
    await navigator.clipboard.writeText(text);
  }
};
