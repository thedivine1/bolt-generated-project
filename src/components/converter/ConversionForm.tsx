import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ConversionType, Unit } from "@/types/converter";

interface ConversionFormProps {
  value: string;
  setValue: (value: string) => void;
  fromUnit: string;
  setFromUnit: (unit: string) => void;
  toUnit: string;
  setToUnit: (unit: string) => void;
  units: Unit[];
  result: string;
}

const ConversionForm = ({
  value,
  setValue,
  fromUnit,
  setFromUnit,
  toUnit,
  setToUnit,
  units,
  result,
}: ConversionFormProps) => {
  return (
    <div className="grid gap-4">
      <div>
        <Label htmlFor="value" className="calculator-label">Value</Label>
        <Input
          id="value"
          type="number"
          className="calculator-input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Enter value"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label className="calculator-label">From</Label>
          <Select value={fromUnit} onValueChange={setFromUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label className="calculator-label">To</Label>
          <Select value={toUnit} onValueChange={setToUnit}>
            <SelectTrigger>
              <SelectValue placeholder="Select unit" />
            </SelectTrigger>
            <SelectContent>
              {units.map((unit) => (
                <SelectItem key={unit.value} value={unit.value}>
                  {unit.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {result && fromUnit && toUnit && (
        <div className="calculator-result p-4 bg-secondary rounded-md text-center">
          {value} {fromUnit} = {result} {toUnit}
        </div>
      )}
    </div>
  );
};

export default ConversionForm;
