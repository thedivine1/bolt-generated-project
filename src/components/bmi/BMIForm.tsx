import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface BMIFormProps {
  height: string;
  weight: string;
  onHeightChange: (value: string) => void;
  onWeightChange: (value: string) => void;
  onCalculate: () => void;
}

const BMIForm = ({
  height,
  weight,
  onHeightChange,
  onWeightChange,
  onCalculate,
}: BMIFormProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleCalculate = () => {
    if (!height || !weight) {
      toast({
        title: "Missing values",
        description: "Please enter both height and weight",
        variant: "destructive",
      });
      return;
    }
    onCalculate();
  };

  return (
    <div className="space-y-4">
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="height" className="text-sm font-medium">
            Height (cm)
          </label>
          <Input
            id="height"
            type="number"
            inputMode="decimal"
            value={height}
            onChange={(e) => onHeightChange(e.target.value)}
            placeholder="175"
            min="0"
            step="0.1"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="weight" className="text-sm font-medium">
            Weight (kg)
          </label>
          <Input
            id="weight"
            type="number"
            inputMode="decimal"
            value={weight}
            onChange={(e) => onWeightChange(e.target.value)}
            placeholder="70"
            min="0"
            step="0.1"
          />
        </div>

        <Button onClick={handleCalculate} className="w-full">
          Calculate BMI
        </Button>
      </div>

      <Collapsible>
        <CollapsibleTrigger className="flex items-center justify-between w-full text-sm text-muted-foreground hover:text-foreground">
          Advanced Options
          {showAdvanced ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-4 pt-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Age</label>
            <Input type="number" placeholder="25" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Activity Level</label>
            <select className="w-full rounded-md border border-input bg-background px-3 py-2">
              <option>Sedentary</option>
              <option>Light Activity</option>
              <option>Moderate Activity</option>
              <option>Very Active</option>
            </select>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default BMIForm;
