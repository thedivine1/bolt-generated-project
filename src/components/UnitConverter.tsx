import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { ConversionType, ConversionHistory as ConversionHistoryType } from "@/types/converter";
import {
  convert,
  lengthUnits,
  areaUnits,
  temperatureUnits,
  volumeUnits,
  weightUnits,
} from "@/utils/converterUtils";
import ConversionForm from "./converter/ConversionForm";
import ConversionHistory from "./converter/ConversionHistory";
import Breadcrumb from "./Breadcrumb";

const UnitConverter = () => {
  const [value, setValue] = useState<string>("");
  const [fromUnit, setFromUnit] = useState<string>("");
  const [toUnit, setToUnit] = useState<string>("");
  const [conversionType, setConversionType] = useState<ConversionType>("length");
  const [history, setHistory] = useState<ConversionHistoryType[]>([]);
  const [result, setResult] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    const savedHistory = localStorage.getItem("conversionHistory");
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory));
    }
  }, []);

  useEffect(() => {
    if (value && fromUnit && toUnit) {
      const conversionResult = convert(value, fromUnit, toUnit, conversionType);
      if (conversionResult) {
        setResult(conversionResult);
        const newHistory: ConversionHistoryType = {
          id: Date.now().toString(),
          timestamp: Date.now(),
          fromValue: value,
          fromUnit,
          toUnit,
          result: conversionResult,
          type: conversionType,
        };

        const updatedHistory = [newHistory, ...history].slice(0, 10);
        setHistory(updatedHistory);
        localStorage.setItem("conversionHistory", JSON.stringify(updatedHistory));
      }
    } else {
      setResult("");
    }
  }, [value, fromUnit, toUnit, conversionType]);

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("conversionHistory");
    toast({
      title: "History cleared",
      description: "Your conversion history has been cleared.",
    });
  };

  const getUnits = () => {
    switch (conversionType) {
      case "length":
        return lengthUnits;
      case "area":
        return areaUnits;
      case "temperature":
        return temperatureUnits;
      case "volume":
        return volumeUnits;
      case "weight":
        return weightUnits;
      default:
        return lengthUnits;
    }
  };

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Unit Converter" },
        ]}
      />
      <Card className="calculator-card max-w-xl mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-6">Unit Converter</h1>
      
        <Tabs defaultValue="length" onValueChange={(value) => setConversionType(value as ConversionType)}>
          <TabsList className="grid w-full grid-cols-5 mb-6">
            <TabsTrigger value="length">Length</TabsTrigger>
            <TabsTrigger value="area">Area</TabsTrigger>
            <TabsTrigger value="temperature">Temp</TabsTrigger>
            <TabsTrigger value="volume">Volume</TabsTrigger>
            <TabsTrigger value="weight">Weight</TabsTrigger>
          </TabsList>

          {["length", "area", "temperature", "volume", "weight"].map((type) => (
            <TabsContent key={type} value={type}>
              <ConversionForm
                value={value}
                setValue={setValue}
                fromUnit={fromUnit}
                setFromUnit={setFromUnit}
                toUnit={toUnit}
                setToUnit={setToUnit}
                units={getUnits()}
                result={result}
              />
            </TabsContent>
          ))}
        </Tabs>

        <ConversionHistory history={history} clearHistory={clearHistory} />
      </Card>
    </div>
  );
};

export default UnitConverter;
