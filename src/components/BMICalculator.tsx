import { useState, useEffect } from "react";
import { Calculator } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { calculateBMI } from "@/utils/bmiUtils";
import BMIForm from "./bmi/BMIForm";
import BMIResult from "./bmi/BMIResult";
import BMIHistory from "./bmi/BMIHistory";
import BMIDocumentation from "./bmi/BMIDocumentation";
import BMIArticle from "./bmi/BMIArticle";
import Breadcrumb from "./Breadcrumb";
import type { BMIHistory as BMIHistoryType } from "@/types/bmi";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState<number | null>(null);
  const [history, setHistory] = useState<BMIHistoryType[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem("bmiHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  const handleCalculate = () => {
    const calculatedBMI = calculateBMI(height, weight);
    if (calculatedBMI) {
      setBMI(calculatedBMI);
      const newHistory = {
        date: new Date().toISOString(),
        height,
        weight,
        bmi: calculatedBMI,
      };
      const updatedHistory = [newHistory, ...history].slice(0, 10);
      setHistory(updatedHistory);
      localStorage.setItem("bmiHistory", JSON.stringify(updatedHistory));
    }
  };

  const handleClearHistory = () => {
    setHistory([]);
    localStorage.removeItem("bmiHistory");
  };

  return (
    <div className="animate-fade-in space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "BMI Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Calculator className="h-6 w-6 text-primary" />
            <CardTitle>BMI Calculator</CardTitle>
          </div>
          <CardDescription>
            Calculate your Body Mass Index (BMI) to assess your weight relative to your height
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <BMIForm
            height={height}
            weight={weight}
            onHeightChange={setHeight}
            onWeightChange={setWeight}
            onCalculate={handleCalculate}
          />

          {bmi !== null && <BMIResult bmi={bmi} />}

          <BMIHistory history={history} onClearHistory={handleClearHistory} />
        </CardContent>
      </Card>

      <BMIDocumentation />
      
      <BMIArticle />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          "name": "BMI Calculator",
          "description": "Calculate your Body Mass Index (BMI) to assess your weight relative to your height",
          "applicationCategory": "HealthApplication",
          "operatingSystem": "Any",
          "url": window.location.href,
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
          },
          "potentialAction": {
            "@type": "UseAction",
            "target": window.location.href
          },
          "relatedLink": [
            "/mortgage",
            "/converter"
          ]
        })}
      </script>
    </div>
  );
};

export default BMICalculator;
