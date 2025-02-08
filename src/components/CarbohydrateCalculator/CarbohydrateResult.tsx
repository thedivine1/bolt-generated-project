import { Card } from "@/components/ui/card";

interface CarbohydrateResultProps {
  result: {
    dailyCarbs: number;
    carbsPerMeal: number;
    carbsPerSnack: number;
  };
}

const CarbohydrateResult = ({ result }: CarbohydrateResultProps) => {
  return (
    <Card className="p-6 space-y-4">
      <h3 className="text-lg font-semibold">Your Daily Carbohydrate Needs</h3>
      
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-2">
          <span className="font-medium">Daily Total</span>
          <span className="font-mono">{result.dailyCarbs.toFixed(1)} g</span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <span className="font-medium">Per Main Meal</span>
          <span className="font-mono text-green-600 dark:text-green-400">
            {result.carbsPerMeal.toFixed(1)} g
          </span>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <span className="font-medium">Per Snack</span>
          <span className="font-mono text-blue-600 dark:text-blue-400">
            {result.carbsPerSnack.toFixed(1)} g
          </span>
        </div>
      </div>
      
      <div className="text-sm text-muted-foreground mt-4">
        <p>* Based on your BMR and activity level</p>
        <p>* Assumes 3 main meals and 2 snacks per day</p>
      </div>
    </Card>
  );
};

export default CarbohydrateResult;
