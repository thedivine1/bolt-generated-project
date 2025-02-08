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
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female"]),
  weight: z.string().min(1, "Weight is required"),
  height: z.string().min(1, "Height is required"),
  activity: z.string().min(1, "Activity level is required"),
  unit: z.enum(["metric", "imperial"]),
});

interface CalorieFormProps {
  onCalculate: (result: {
    maintenance: number;
    mildLoss: number;
    weightLoss: number;
    extremeLoss: number;
    mildGain: number;
    weightGain: number;
  }) => void;
}

const CalorieForm = ({ onCalculate }: CalorieFormProps) => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: "male",
      weight: "",
      height: "",
      activity: "sedentary",
      unit: "metric",
    },
  });

  const calculateCalories = (values: z.infer<typeof formSchema>) => {
    // Convert imperial to metric if needed
    let weight = Number(values.weight);
    let height = Number(values.height);
    
    if (values.unit === "imperial") {
      // Convert pounds to kg
      weight = weight * 0.453592;
      // Convert inches to cm
      height = height * 2.54;
    }

    // Harris-Benedict Formula
    let bmr;
    if (values.gender === "male") {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * Number(values.age));
    } else {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * Number(values.age));
    }

    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    };

    const maintenance = Math.round(bmr * activityMultipliers[values.activity as keyof typeof activityMultipliers]);
    
    onCalculate({
      maintenance,
      mildLoss: maintenance - 250,
      weightLoss: maintenance - 500,
      extremeLoss: maintenance - 750,
      mildGain: maintenance + 250,
      weightGain: maintenance + 500,
    });
  };

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit as "metric" | "imperial");
    form.setValue("unit", newUnit as "metric" | "imperial");
    
    // Convert existing values if needed
    const currentWeight = form.getValues("weight");
    const currentHeight = form.getValues("height");
    
    if (currentWeight) {
      if (newUnit === "imperial") {
        // Convert kg to lbs
        form.setValue("weight", String(Math.round(Number(currentWeight) * 2.20462)));
      } else {
        // Convert lbs to kg
        form.setValue("weight", String(Math.round(Number(currentWeight) * 0.453592)));
      }
    }
    
    if (currentHeight) {
      if (newUnit === "imperial") {
        // Convert cm to inches
        form.setValue("height", String(Math.round(Number(currentHeight) * 0.393701)));
      } else {
        // Convert inches to cm
        form.setValue("height", String(Math.round(Number(currentHeight) * 2.54)));
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(calculateCalories)} className="space-y-4">
        <Tabs defaultValue="metric" value={unit} onValueChange={handleUnitChange} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="metric">Metric</TabsTrigger>
            <TabsTrigger value="imperial">Imperial</TabsTrigger>
          </TabsList>
        </Tabs>

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

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age (years)</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

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
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height ({unit === "metric" ? "cm" : "inches"})</FormLabel>
              <FormControl>
                <Input type="number" {...field} />
              </FormControl>
            </FormItem>
          )}
        />

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
                  <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                  <SelectItem value="light">Light (exercise 1-3 times/week)</SelectItem>
                  <SelectItem value="moderate">Moderate (exercise 4-5 times/week)</SelectItem>
                  <SelectItem value="active">Active (daily exercise or intense exercise 3-4 times/week)</SelectItem>
                  <SelectItem value="veryActive">Very Active (intense exercise 6-7 times/week)</SelectItem>
                </SelectContent>
              </Select>
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full">Calculate Calories</Button>
      </form>
    </Form>
  );
};

export default CalorieForm;
