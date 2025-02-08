import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formSchema = z.object({
  gender: z.enum(["male", "female"]),
  height: z.string().min(1, "Height is required"),
  unit: z.enum(["metric", "imperial"]),
});

interface IdealWeightFormProps {
  onCalculate: (result: {
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  }) => void;
}

const IdealWeightForm = ({ onCalculate }: IdealWeightFormProps) => {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gender: "male",
      height: "",
      unit: "metric",
    },
  });

  const handleUnitChange = (newUnit: string) => {
    setUnit(newUnit as "metric" | "imperial");
    form.setValue("unit", newUnit as "metric" | "imperial");
    
    const currentHeight = form.getValues("height");
    if (currentHeight) {
      if (newUnit === "imperial") {
        form.setValue("height", String(Math.round(Number(currentHeight) * 0.393701)));
      } else {
        form.setValue("height", String(Math.round(Number(currentHeight) * 2.54)));
      }
    }
  };

  const calculateIdealWeight = (values: z.infer<typeof formSchema>) => {
    let heightCm = Number(values.height);
    if (values.unit === "imperial") {
      heightCm = heightCm * 2.54; // Convert inches to cm
    }
    
    const heightInches = heightCm / 2.54;
    const heightFeet = Math.floor(heightInches / 12);
    const remainingInches = heightInches % 12;

    // Robinson formula (1983)
    let robinson = values.gender === "male" 
      ? 52 + 1.9 * (heightInches - 60)
      : 49 + 1.7 * (heightInches - 60);

    // Miller formula (1983)
    let miller = values.gender === "male"
      ? 56.2 + 1.41 * (heightInches - 60)
      : 53.1 + 1.36 * (heightInches - 60);

    // Devine formula (1974)
    let devine = values.gender === "male"
      ? 50 + 2.3 * (heightInches - 60)
      : 45.5 + 2.3 * (heightInches - 60);

    // Hamwi formula (1964)
    let hamwi = values.gender === "male"
      ? 48 + 2.7 * (heightInches - 60)
      : 45.5 + 2.2 * (heightInches - 60);

    const average = (robinson + miller + devine + hamwi) / 4;

    if (values.unit === "metric") {
      // Convert results from lbs to kg
      robinson *= 0.453592;
      miller *= 0.453592;
      devine *= 0.453592;
      hamwi *= 0.453592;
    }

    onCalculate({
      robinson: Math.round(robinson * 10) / 10,
      miller: Math.round(miller * 10) / 10,
      devine: Math.round(devine * 10) / 10,
      hamwi: Math.round(hamwi * 10) / 10,
      average: Math.round(average * 10) / 10,
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(calculateIdealWeight)} className="space-y-4">
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

        <Button type="submit" className="w-full">Calculate Ideal Weight</Button>
      </form>
    </Form>
  );
};

export default IdealWeightForm;
