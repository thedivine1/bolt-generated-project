import { BMRResult } from "@/types/bmr";
import { Card } from "../ui/card";

interface BMRResultDisplayProps {
  result: BMRResult;
}

const BMRResultDisplay = ({ result }: BMRResultDisplayProps) => {
  return (
    <div className="mt-8 space-y-6 animate-fade-in">
      <div className="calculator-result">
        <h2 className="text-xl font-semibold mb-2">Your BMR</h2>
        <p className="text-3xl font-bold text-primary">{result.bmr} Calories/day</p>
      </div>

      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Daily calorie needs based on activity level</h3>
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Sedentary (little or no exercise)</span>
            <span className="font-mono">{result.activityLevels.sedentary} calories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Light exercise (1-3 times/week)</span>
            <span className="font-mono">{result.activityLevels.lightExercise} calories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Moderate exercise (4-5 times/week)</span>
            <span className="font-mono">{result.activityLevels.moderateExercise} calories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Active exercise (daily or intense 3-4 times/week)</span>
            <span className="font-mono">{result.activityLevels.activeExercise} calories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Very active (intense exercise 6-7 times/week)</span>
            <span className="font-mono">{result.activityLevels.veryActive} calories</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <span>Extra active (very intense exercise daily, or physical job)</span>
            <span className="font-mono">{result.activityLevels.extraActive} calories</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default BMRResultDisplay;
