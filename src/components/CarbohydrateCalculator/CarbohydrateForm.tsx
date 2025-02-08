import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import UnitSelector from "./UnitSelector";
import FormulaSelector from "./FormulaSelector";
import ActivityLevelSelector from "./ActivityLevelSelector";
import BasicMetrics from "./BasicMetrics";
import BodyMetrics from "./BodyMetrics";
import { CarbohydrateFormData } from "./types";

const formSchema = z.object({
  age: z.string().min(1, "Age is required"),
  gender: z.enum(["male", "female"]),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  activity: z.string().min(1, "Activity level is required"),
  unit: z.enum(["us", "metric", "other"]),
  formula: z.enum(["mifflin", "katch"]),
  bodyFat: z.string().optional(),
});

interface CarbohydrateFormProps {
  onCalculate: (values: z.infer<typeof formSchema>) => void;
}

const CarbohydrateForm = ({ onCalculate }: CarbohydrateFormProps) => {
  const [unit, setUnit] = useState<"us" | "metric" | "other">("us");

  const form = useForm<CarbohydrateFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      age: "",
      gender: "male",
      height: "",
      weight: "",
      activity: "light",
      unit: "us",
      formula: "mifflin",
      bodyFat: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    onCalculate(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
        <UnitSelector value={unit} onChange={(value) => setUnit(value)} />
        <BasicMetrics form={form} />
        <BodyMetrics form={form} unit={unit} />
        <ActivityLevelSelector form={form} />
        
        <div className="space-y-4">
          <h3 className="text-lg font-medium">Settings</h3>
          <FormulaSelector form={form} />
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="flex-1">Calculate</Button>
          <Button type="reset" variant="outline" className="flex-1" onClick={() => form.reset()}>
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CarbohydrateForm;
