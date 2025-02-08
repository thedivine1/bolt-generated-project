import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { UseFormReturn } from "react-hook-form";
import { CarbohydrateFormData } from "./types";

interface BodyMetricsProps {
  form: UseFormReturn<CarbohydrateFormData>;
  unit: "us" | "metric" | "other";
}

const BodyMetrics = ({ form, unit }: BodyMetricsProps) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <FormField
        control={form.control}
        name="height"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Height ({unit === "us" ? "feet/inches" : unit === "metric" ? "cm" : "other"})</FormLabel>
            <FormControl>
              {unit === "us" ? (
                <div className="grid grid-cols-2 gap-2">
                  <Input type="number" placeholder="feet" {...field} />
                  <Input type="number" placeholder="inches" />
                </div>
              ) : (
                <Input type="number" {...field} />
              )}
            </FormControl>
          </FormItem>
        )}
      />

      <FormField
        control={form.control}
        name="weight"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Weight ({unit === "us" ? "pounds" : unit === "metric" ? "kg" : "other"})</FormLabel>
            <FormControl>
              <Input type="number" {...field} />
            </FormControl>
          </FormItem>
        )}
      />
    </div>
  );
};

export default BodyMetrics;
