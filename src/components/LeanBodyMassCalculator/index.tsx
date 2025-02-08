import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import Breadcrumb from "../Breadcrumb";
import LeanBodyMassForm from "./LeanBodyMassForm";
import LeanBodyMassResult from "./LeanBodyMassResult";
import LeanBodyMassArticle from "./LeanBodyMassArticle";

const LeanBodyMassCalculator = () => {
  const [unit, setUnit] = useState<"us" | "metric">("us");
  const [result, setResult] = useState<number | null>(null);

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Lean Body Mass Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Lean Body Mass Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={unit} onValueChange={(value) => setUnit(value as "us" | "metric")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="us">US Units</TabsTrigger>
              <TabsTrigger value="metric">Metric Units</TabsTrigger>
            </TabsList>
            
            <TabsContent value="us">
              <LeanBodyMassForm unit="us" onCalculate={setResult} />
            </TabsContent>
            
            <TabsContent value="metric">
              <LeanBodyMassForm unit="metric" onCalculate={setResult} />
            </TabsContent>
          </Tabs>

          {result !== null && <LeanBodyMassResult result={result} unit={unit} />}
        </CardContent>
      </Card>

      <LeanBodyMassArticle />
    </div>
  );
};

export default LeanBodyMassCalculator;
