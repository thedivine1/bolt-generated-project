import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Breadcrumb from "../Breadcrumb";
import MacroForm from "./MacroForm";
import MacroResult from "./MacroResult";

const MacroCalculator = () => {
  const [result, setResult] = useState<{
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  } | null>(null);

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Macro Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>Macro Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate your daily macronutrient needs based on your goals
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <MacroForm onCalculate={setResult} />
          {result && <MacroResult result={result} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default MacroCalculator;
