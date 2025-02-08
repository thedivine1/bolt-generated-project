export interface BMIHistory {
  date: string;
  height: string;
  weight: string;
  bmi: number;
}

export interface BMICalculation {
  bmi: number | null;
  height: string;
  weight: string;
}
