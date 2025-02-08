import { useState } from "react";
import { Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Breadcrumb from "../Breadcrumb";
import IdealWeightForm from "./IdealWeightForm";
import IdealWeightResult from "./IdealWeightResult";
import IdealWeightArticle from "./IdealWeightArticle";

const IdealWeightCalculator = () => {
  const [result, setResult] = useState<{
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  } | null>(null);

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Ideal Weight Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>Ideal Weight Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate your ideal body weight using different formulas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <IdealWeightForm onCalculate={setResult} />
          {result && <IdealWeightResult result={result} />}
        </CardContent>
      </Card>

      <IdealWeightArticle />
    </div>
  );
};

export default IdealWeightCalculator;
