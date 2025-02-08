import { Card } from "@/components/ui/card";

interface CalorieResultProps {
  result: {
    maintenance: number;
    mildLoss: number;
    weightLoss: number;
    extremeLoss: number;
    mildGain: number;
    weightGain: number;
  };
}

const CalorieResult = ({ result }: CalorieResultProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Your Daily Calorie Needs</h3>
      
      <Card className="p-4">
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Maintenance</span>
            <span className="font-mono">{result.maintenance} calories</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Mild Weight Loss</span>
            <span className="font-mono text-yellow-600 dark:text-yellow-400">
              {result.mildLoss} calories
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Weight Loss</span>
            <span className="font-mono text-orange-600 dark:text-orange-400">
              {result.weightLoss} calories
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Extreme Weight Loss</span>
            <span className="font-mono text-red-600 dark:text-red-400">
              {result.extremeLoss} calories
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Mild Weight Gain</span>
            <span className="font-mono text-green-600 dark:text-green-400">
              {result.mildGain} calories
            </span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Weight Gain</span>
            <span className="font-mono text-emerald-600 dark:text-emerald-400">
              {result.weightGain} calories
            </span>
          </div>
        </div>
      </Card>
      
      <div className="text-sm text-muted-foreground">
        <p>* Maintenance calories represent your daily energy needs to maintain current weight</p>
        <p>* Weight loss/gain calculations are based on +/- 250-500 calories from maintenance</p>
      </div>
    </div>
  );
};

export default CalorieResult;
