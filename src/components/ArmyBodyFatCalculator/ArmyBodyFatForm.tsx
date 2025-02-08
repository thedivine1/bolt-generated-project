import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { calculateArmyBodyFat } from "@/utils/bodyFatUtils";

interface ArmyBodyFatFormProps {
  unit: "us" | "metric";
  onCalculate: (result: number, gender: "male" | "female", age: number) => void;
}

const ArmyBodyFatForm = ({ unit, onCalculate }: ArmyBodyFatFormProps) => {
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [waist, setWaist] = useState("");
  const [neck, setNeck] = useState("");
  const [hip, setHip] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = calculateArmyBodyFat({
      gender,
      age: Number(age),
      weight: Number(weight),
      height: Number(height),
      waist: Number(waist),
      neck: Number(neck),
      hip: hip ? Number(hip) : undefined,
      unit,
    });
    onCalculate(result, gender, Number(age));
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
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
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

      <div className="space-y-2">
        <Label htmlFor="waist">Waist ({unit === "us" ? "inches" : "cm"})</Label>
        <Input
          id="waist"
          type="number"
          value={waist}
          onChange={(e) => setWaist(e.target.value)}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="neck">Neck ({unit === "us" ? "inches" : "cm"})</Label>
        <Input
          id="neck"
          type="number"
          value={neck}
          onChange={(e) => setNeck(e.target.value)}
          required
        />
      </div>

      {gender === "female" && (
        <div className="space-y-2">
          <Label htmlFor="hip">Hip ({unit === "us" ? "inches" : "cm"})</Label>
          <Input
            id="hip"
            type="number"
            value={hip}
            onChange={(e) => setHip(e.target.value)}
            required
          />
        </div>
      )}

      <Button type="submit" className="w-full">Calculate</Button>
    </form>
  );
};

export default ArmyBodyFatForm;
