import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { CarbohydrateFormData } from "./types";

interface FormulaSelectorProps {
  form: UseFormReturn<CarbohydrateFormData>;
}

const FormulaSelector = ({ form }: FormulaSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="formula"
      render={({ field }) => (
        <FormItem>
          <FormLabel>BMR Estimation Formula</FormLabel>
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className="space-y-2"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="mifflin" id="mifflin" />
                <label htmlFor="mifflin">Mifflin St Jeor</label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="katch" id="katch" />
                <label htmlFor="katch">Katch-McArdle</label>
              </div>
            </RadioGroup>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default FormulaSelector;
