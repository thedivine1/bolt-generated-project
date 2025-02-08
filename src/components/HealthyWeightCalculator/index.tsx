import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Breadcrumb from "../Breadcrumb";
import HealthyWeightForm from "./HealthyWeightForm";
import HealthyWeightResult from "./HealthyWeightResult";
import HealthyWeightArticle from "./HealthyWeightArticle";

const HealthyWeightCalculator = () => {
  const [unit, setUnit] = useState<"us" | "metric">("us");
  const [result, setResult] = useState<{ min: number; max: number } | null>(null);

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Healthy Weight Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Healthy Weight Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={unit} onValueChange={(value) => setUnit(value as "us" | "metric")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="us">US Units</TabsTrigger>
              <TabsTrigger value="metric">Metric Units</TabsTrigger>
            </TabsList>
            
            <TabsContent value="us">
              <HealthyWeightForm unit="us" onCalculate={setResult} />
            </TabsContent>
            
            <TabsContent value="metric">
              <HealthyWeightForm unit="metric" onCalculate={setResult} />
            </TabsContent>
          </Tabs>

          {result !== null && <HealthyWeightResult result={result} unit={unit} />}
        </CardContent>
      </Card>

      <HealthyWeightArticle />
    </div>
  );
};

export default HealthyWeightCalculator;
