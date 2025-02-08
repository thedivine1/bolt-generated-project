import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface HealthyWeightFormProps {
  unit: "us" | "metric";
  onCalculate: (result: { min: number; max: number }) => void;
}

const HealthyWeightForm = ({ unit, onCalculate }: HealthyWeightFormProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [height, setHeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert height to meters if needed
    let heightM = unit === "us" 
      ? Number(height) * 0.0254  // inches to meters
      : Number(height) / 100;    // cm to meters
    
    // Calculate BMI range (18.5 - 24.9)
    let minWeight = 18.5 * (heightM * heightM);
    let maxWeight = 24.9 * (heightM * heightM);
    
    // Convert to pounds if using US units
    if (unit === "us") {
      minWeight = minWeight * 2.20462;
      maxWeight = maxWeight * 2.20462;
    }

    onCalculate({ min: minWeight, max: maxWeight });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label>Gender</Label>
        <RadioGroup
          defaultValue={gender}
          onValueChange={(value) => setGender(value as "male" | "female")}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male">Male</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female">Female</Label>
          </div>
        </RadioGroup>
      </div>

      <div className="space-y-2">
        <Label htmlFor="height">Height ({unit === "us" ? "inches" : "cm"})</Label>
        <Input
          id="height"
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full">Calculate</Button>
    </form>
  );
};

export default HealthyWeightForm;
