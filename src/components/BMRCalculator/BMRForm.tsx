import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "../ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Tabs, TabsList, TabsTrigger } from "../ui/tabs";

const formSchema = z.object({
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female"]),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  unit: z.enum(["metric", "us"]),
});

interface BMRFormProps {
  onCalculate: (age: number, gender: string, height: number, weight: number, unit: string) => void;
}

const BMRForm = ({ onCalculate }: BMRFormProps) => {
  const [unit, setUnit] = useState<"metric" | "us">("metric");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: "male",
      height: "",
      weight: "",
      unit: "metric",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    onCalculate(
      Number(values.age),
      values.gender,
      Number(values.height),
      Number(values.weight),
      values.unit
    );
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Tabs defaultValue="metric" onValueChange={(value) => setUnit(value as "metric" | "us")}>
          <TabsList>
            <TabsTrigger value="metric">Metric Units</TabsTrigger>
            <TabsTrigger value="us">US Units</TabsTrigger>
          </TabsList>
        </Tabs>

        <FormField
          control={form.control}
          name="age"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Age (15-80)</FormLabel>
              <FormControl>
                <Input type="number" min="15" max="80" {...field} />
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

        <Button type="submit" className="w-full">Calculate BMR</Button>
      </form>
    </Form>
  );
};

export default BMRForm;
