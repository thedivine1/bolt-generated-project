import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UseFormReturn } from "react-hook-form";
import { CarbohydrateFormData } from "./types";

interface ActivityLevelSelectorProps {
  form: UseFormReturn<CarbohydrateFormData>;
}

const ActivityLevelSelector = ({ form }: ActivityLevelSelectorProps) => {
  return (
    <FormField
      control={form.control}
      name="activity"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Activity Level</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select activity level" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectItem value="light">Light: exercise 1-3 times/week</SelectItem>
              <SelectItem value="moderate">Moderate: exercise 3-5 times/week</SelectItem>
              <SelectItem value="active">Active: daily exercise or intense exercise 3-4 times/week</SelectItem>
              <SelectItem value="very">Very Active: intense exercise 6-7 times/week</SelectItem>
            </SelectContent>
          </Select>
        </FormItem>
      )}
    />
  );
};

export default ActivityLevelSelector;
