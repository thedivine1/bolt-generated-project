import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface LeanBodyMassFormProps {
  unit: "us" | "metric";
  onCalculate: (result: number) => void;
}

const LeanBodyMassForm = ({ unit, onCalculate }: LeanBodyMassFormProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let lbm = 0;
    
    // Convert to metric if needed
    let weightKg = unit === "us" ? Number(weight) * 0.453592 : Number(weight);
    let heightCm = unit === "us" ? Number(height) * 2.54 : Number(height);
    
    // Boer Formula
    if (gender === "male") {
      lbm = (0.407 * weightKg) + (0.267 * heightCm) - 19.2;
    } else {
      lbm = (0.252 * weightKg) + (0.473 * heightCm) - 48.3;
    }

    // Convert back to US units if needed
    if (unit === "us") {
      lbm = lbm * 2.20462;
    }

    onCalculate(lbm);
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

      <div className="space-y-2">
        <Label htmlFor="weight">Weight ({unit === "us" ? "lbs" : "kg"})</Label>
        <Input
          id="weight"
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>

      <Button type="submit" className="w-full">Calculate</Button>
    </form>
  );
};

export default LeanBodyMassForm;
