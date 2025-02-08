export interface BMRFormData {
  age: number;
  gender: 'male' | 'female';
  height: number;
  weight: number;
  unit: 'metric' | 'us';
}

export interface BMRResult {
  bmr: number;
  activityLevels: {
    sedentary: number;
    lightExercise: number;
    moderateExercise: number;
    activeExercise: number;
    veryActive: number;
    extraActive: number;
  };
}
