import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ArmyBodyFatForm from "./ArmyBodyFatForm";
import ArmyBodyFatResult from "./ArmyBodyFatResult";
import ArmyBodyFatArticle from "./ArmyBodyFatArticle";
import Breadcrumb from "../Breadcrumb";

const ArmyBodyFatCalculator = () => {
  const [result, setResult] = useState<number | null>(null);
  const [unit, setUnit] = useState<"us" | "metric">("us");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState<number>(25);

  const handleCalculate = (calculatedResult: number, formGender: "male" | "female", formAge: number) => {
    setResult(calculatedResult);
    setGender(formGender);
    setAge(formAge);
  };

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Army Body Fat Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Army Body Fat Calculator</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue={unit} onValueChange={(value) => setUnit(value as "us" | "metric")}>
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="us">US Units</TabsTrigger>
              <TabsTrigger value="metric">Metric Units</TabsTrigger>
            </TabsList>
            
            <TabsContent value="us">
              <ArmyBodyFatForm unit="us" onCalculate={handleCalculate} />
            </TabsContent>
            
            <TabsContent value="metric">
              <ArmyBodyFatForm unit="metric" onCalculate={handleCalculate} />
            </TabsContent>
          </Tabs>

          {result !== null && (
            <ArmyBodyFatResult 
              result={result} 
              gender={gender}
              age={age}
            />
          )}
        </CardContent>
      </Card>

      <ArmyBodyFatArticle />
    </div>
  );
};

export default ArmyBodyFatCalculator;
