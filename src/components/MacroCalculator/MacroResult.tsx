import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface MacroResultProps {
  result: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

const MacroResult = ({ result }: MacroResultProps) => {
  const totalGrams = result.protein + result.carbs + result.fat;
  const proteinPercentage = (result.protein / totalGrams) * 100;
  const carbsPercentage = (result.carbs / totalGrams) * 100;
  const fatPercentage = (result.fat / totalGrams) * 100;

  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Daily Macronutrient Targets</h3>
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Protein</span>
              <span className="font-mono">{result.protein}g ({Math.round(proteinPercentage)}%)</span>
            </div>
            <Progress value={proteinPercentage} className="bg-blue-100 dark:bg-blue-950" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Carbohydrates</span>
              <span className="font-mono">{result.carbs}g ({Math.round(carbsPercentage)}%)</span>
            </div>
            <Progress value={carbsPercentage} className="bg-green-100 dark:bg-green-950" />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Fat</span>
              <span className="font-mono">{result.fat}g ({Math.round(fatPercentage)}%)</span>
            </div>
            <Progress value={fatPercentage} className="bg-yellow-100 dark:bg-yellow-950" />
          </div>
        </div>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-4">
          <h4 className="text-sm font-medium mb-2">Protein Calories</h4>
          <p className="text-2xl font-bold">{result.protein * 4}</p>
          <p className="text-xs text-muted-foreground">4 calories per gram</p>
        </Card>
        
        <Card className="p-4">
          <h4 className="text-sm font-medium mb-2">Carbs Calories</h4>
          <p className="text-2xl font-bold">{result.carbs * 4}</p>
          <p className="text-xs text-muted-foreground">4 calories per gram</p>
        </Card>
        
        <Card className="p-4">
          <h4 className="text-sm font-medium mb-2">Fat Calories</h4>
          <p className="text-2xl font-bold">{result.fat * 9}</p>
          <p className="text-xs text-muted-foreground">9 calories per gram</p>
        </Card>
      </div>

      <div className="text-sm text-muted-foreground">
        <p>* Total daily calories: {result.calories}</p>
        <p>* Protein: {result.protein}g ({result.protein * 4} kcal)</p>
        <p>* Carbohydrates: {result.carbs}g ({result.carbs * 4} kcal)</p>
        <p>* Fat: {result.fat}g ({result.fat * 9} kcal)</p>
      </div>
    </div>
  );
};

export default MacroResult;
