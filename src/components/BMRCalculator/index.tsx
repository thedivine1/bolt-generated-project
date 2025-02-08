import { useState } from "react";
import { Activity } from "lucide-react";
import { BMRResult } from "@/types/bmr";
import { calculateBMR, calculateActivityLevels } from "@/utils/bmrUtils";
import BMRForm from "./BMRForm";
import BMRResultDisplay from "./BMRResult";
import BMRArticle from "./BMRArticle";
import Breadcrumb from "../Breadcrumb";
import { Card } from "../ui/card";

const BMRCalculator = () => {
  const [result, setResult] = useState<BMRResult | null>(null);

  const handleCalculate = (
    age: number,
    gender: string,
    height: number,
    weight: number,
    unit: string
  ) => {
    const bmr = calculateBMR({ age, gender, height, weight, unit });
    const activityLevels = calculateActivityLevels(bmr);
    setResult({ bmr, activityLevels });
  };

  return (
    <div className="animate-fade-in">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "BMR Calculator" },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <Card className="p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Activity className="h-6 w-6 text-primary" />
                <h1 className="text-2xl font-semibold">BMR Calculator</h1>
              </div>

              <p className="text-muted-foreground mb-6">
                The Basal Metabolic Rate (BMR) Calculator estimates your basal metabolic rate—the amount of energy expended while at rest in a neutrally temperate environment, and in a post-absorptive state (meaning that the digestive system is inactive, which requires about 12 hours of fasting).
              </p>

              <BMRForm onCalculate={handleCalculate} />
              {result && <BMRResultDisplay result={result} />}
            </Card>
          </div>
          
          <div className="md:col-span-1">
            <div className="bg-muted p-4 rounded-lg text-center">
              <p className="text-muted-foreground">Advertisement Space</p>
            </div>
          </div>
        </div>

        <BMRArticle />
      </div>
    </div>
  );
};

export default BMRCalculator;
