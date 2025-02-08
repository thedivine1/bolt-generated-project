import { useState } from "react";
import { Card } from "@/components/ui/card";
import Breadcrumb from "@/components/Breadcrumb";
import CarbohydrateForm from "./CarbohydrateForm";
import CarbohydrateResult from "./CarbohydrateResult";
import { calculateCarbohydrateNeeds } from "@/utils/carbohydrateUtils";

const CarbohydrateCalculator = () => {
  const [result, setResult] = useState<{
    dailyCarbs: number;
    carbsPerMeal: number;
    carbsPerSnack: number;
  } | null>(null);

  const handleCalculate = (values: any) => {
    const calculatedResult = calculateCarbohydrateNeeds(values);
    setResult(calculatedResult);
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Carbohydrate Calculator" },
        ]}
      />

      <Card className="calculator-card max-w-xl mx-auto">
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-semibold">Carbohydrate Calculator</h1>
          <p className="text-muted-foreground">
            Calculate your daily carbohydrate needs based on your body metrics and activity level.
          </p>

          <CarbohydrateForm onCalculate={handleCalculate} />

          {result && <CarbohydrateResult result={result} />}
        </div>
      </Card>
    </div>
  );
};

export default CarbohydrateCalculator;
