import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Breadcrumb from "../Breadcrumb";
import CalorieForm from "./CalorieForm";
import CalorieResult from "./CalorieResult";
import CalorieArticle from "./CalorieArticle";

const CalorieCalculator = () => {
  const [result, setResult] = useState<{
    maintenance: number;
    mildLoss: number;
    weightLoss: number;
    extremeLoss: number;
    mildGain: number;
    weightGain: number;
  } | null>(null);

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Calorie Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>Calorie Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate your daily calorie needs based on your goals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <CalorieForm onCalculate={setResult} />
          {result && <CalorieResult result={result} />}
        </CardContent>
      </Card>

      <CalorieArticle />
    </div>
  );
};

export default CalorieCalculator;
