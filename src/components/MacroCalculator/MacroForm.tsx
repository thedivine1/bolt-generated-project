import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  weight: z.string().min(1, "Weight is required"),
  bodyFat: z.string().min(1, "Body fat percentage is required"),
  activityLevel: z.string().min(1, "Activity level is required"),
  goal: z.string().min(1, "Goal is required"),
  unit: z.enum(["metric", "imperial"]),
});

interface MacroFormProps {
  onCalculate: (result: {
    protein: number;
    carbs: number;
    fat: number;  // Changed from fats to fat to match state type
    calories: number;
  }) => void;
}

const MacroForm = ({ onCalculate }: MacroFormProps) => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      weight: "",
      bodyFat: "",
      activityLevel: "moderate",
      goal: "maintain",
      unit: "metric",
    },
  });

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit as "metric" | "imperial");
    form.setValue("unit", newUnit as "metric" | "imperial");
    
    const currentWeight = form.getValues("weight");
    if (currentWeight) {
      if (newUnit === "imperial") {
        form.setValue("weight", String(Math.round(Number(currentWeight) * 2.20462)));
      } else {
        form.setValue("weight", String(Math.round(Number(currentWeight) * 0.453592)));
      }
    }
  };

  const calculateMacros = (values: z.infer<typeof formSchema>) => {
    let weight = Number(values.weight);
    if (values.unit === "imperial") {
      weight = weight * 0.453592; // Convert to kg
    }

    const bodyFat = Number(values.bodyFat);
    const leanMass = weight * (1 - bodyFat / 100);

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    // Goal multipliers
    const goalMultipliers = {
      lose: 0.8,
      maintain: 1,
      gain: 1.2,
    };

    const baseCals = leanMass * 24 * activityMultipliers[values.activityLevel as keyof typeof activityMultipliers];
    const targetCals = baseCals * goalMultipliers[values.goal as keyof typeof goalMultipliers];

    const protein = leanMass * 2.2;
    const fat = (targetCals * 0.25) / 9;  // Changed variable name from fats to fat
    const carbs = (targetCals - (protein * 4) - (fat * 9)) / 4;

    onCalculate({
      protein: Math.round(protein),
      carbs: Math.round(carbs),
      fat: Math.round(fat),  // Changed from fats to fat
      calories: Math.round(targetCals),
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(calculateMacros)} className="space-y-4">
        <Tabs defaultValue="metric" value={unit} onValueChange={handleUnitChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metric">Metric</TabsTrigger>
            <TabsTrigger value="imperial">Imperial</TabsTrigger>
          </TabsList>
        </Tabs>

        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight ({unit === "metric" ? "kg" : "lbs"})</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="bodyFat"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Body Fat Percentage (%)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="activityLevel"
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
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="light">Light (exercise 1-3 times/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 4-5 times/week)</SelectItem>
                  <SelectItem value="active">Active (daily exercise)</SelectItem>
                  <SelectItem value="veryActive">Very Active (intense exercise)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="goal"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Goal</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your goal" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="lose">Weight Loss</SelectItem>
                  <SelectItem value="maintain">Maintain Weight</SelectItem>
                  <SelectItem value="gain">Weight Gain</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Calculate Macros</Button>
      </form>
    </Form>
  );
};

export default MacroForm;
