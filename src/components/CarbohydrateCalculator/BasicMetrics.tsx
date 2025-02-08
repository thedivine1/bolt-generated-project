import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { UseFormReturn } from "react-hook-form";
import { CarbohydrateFormData } from "./types";

interface BasicMetricsProps {
  form: UseFormReturn<CarbohydrateFormData>;
}

const BasicMetrics = ({ form }: BasicMetricsProps) => {
  return (
    <div className="space-y-4">
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age (18-80)</FormLabel>
            <FormControl>
              <Input type="number" min="18" max="80" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="gender"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Gender</FormLabel>
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <label htmlFor="female">Female</label>
                </div>
              </RadioGroup>
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default BasicMetrics;
