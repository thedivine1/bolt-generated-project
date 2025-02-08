import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface BodyFatFormData {
  gender: 'male' | 'female';
  age: number;
  weight: number;
  height: number;
  neck: number;
  waist: number;
  hip: number;
  unit: 'us' | 'metric';
}

interface BodyFatResult {
  bodyFatNavy: number;
  bodyFatBMI: number;
  category: string;
  bodyFatMass: number;
  leanBodyMass: number;
  idealBodyFat: number;
  bodyFatToLose: number;
}

const initialFormData: BodyFatFormData = {
  gender: 'male',
  age: 25,
  weight: 70,
  height: 178,
  neck: 50,
  waist: 96,
  hip: 0,
  unit: 'metric'
};

export const BodyFatForm = () => {
  const [formData, setFormData] = useState<BodyFatFormData>(initialFormData);
  const [result, setResult] = useState<BodyFatResult | null>(null);

  const calculateBodyFat = () => {
    // U.S. Navy Method Formula
    let bodyFatNavy: number;
    if (formData.gender === 'male') {
      bodyFatNavy = 495 / (1.0324 - 0.19077 * Math.log10(formData.waist - formData.neck) + 0.15456 * Math.log10(formData.height)) - 450;
    } else {
      bodyFatNavy = 495 / (1.29579 - 0.35004 * Math.log10(formData.waist + formData.hip - formData.neck) + 0.22100 * Math.log10(formData.height)) - 450;
    }

    // BMI Method (simplified)
    const heightInMeters = formData.unit === 'metric' ? formData.height / 100 : formData.height * 0.0254;
    const weightInKg = formData.unit === 'metric' ? formData.weight : formData.weight * 0.453592;
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    const bodyFatBMI = (1.20 * bmi) + (0.23 * formData.age) - (10.8 * (formData.gender === 'male' ? 1 : 0)) - 5.4;

    // Calculate other metrics
    const bodyFatMass = (bodyFatNavy / 100) * weightInKg;
    const leanBodyMass = weightInKg - bodyFatMass;
    const idealBodyFat = formData.gender === 'male' ? 
      (formData.age < 30 ? 10.5 : formData.age < 40 ? 11.5 : 12.5) :
      (formData.age < 30 ? 17.5 : formData.age < 40 ? 18.5 : 19.5);
    const bodyFatToLose = bodyFatMass - (weightInKg * (idealBodyFat / 100));

    // Determine category
    let category = '';
    if (formData.gender === 'male') {
      if (bodyFatNavy < 6) category = 'Essential';
      else if (bodyFatNavy < 14) category = 'Athletes';
      else if (bodyFatNavy < 18) category = 'Fitness';
      else if (bodyFatNavy < 25) category = 'Average';
      else category = 'Obese';
    } else {
      if (bodyFatNavy < 14) category = 'Essential';
      else if (bodyFatNavy < 21) category = 'Athletes';
      else if (bodyFatNavy < 25) category = 'Fitness';
      else if (bodyFatNavy < 32) category = 'Average';
      else category = 'Obese';
    }

    setResult({
      bodyFatNavy: parseFloat(bodyFatNavy.toFixed(1)),
      bodyFatBMI: parseFloat(bodyFatBMI.toFixed(1)),
      category,
      bodyFatMass: parseFloat(bodyFatMass.toFixed(1)),
      leanBodyMass: parseFloat(leanBodyMass.toFixed(1)),
      idealBodyFat: parseFloat(idealBodyFat.toFixed(1)),
      bodyFatToLose: parseFloat(bodyFatToLose.toFixed(1))
    });
  };

  const handleClear = () => {
    setFormData(initialFormData);
    setResult(null);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="p-6">
        <Tabs defaultValue="metric" onValueChange={(value) => setFormData(prev => ({ ...prev, unit: value as 'us' | 'metric' }))}>
          <TabsList className="mb-4">
            <TabsTrigger value="us">US Units</TabsTrigger>
            <TabsTrigger value="metric">Metric Units</TabsTrigger>
          </TabsList>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Gender</Label>
              <RadioGroup
                value={formData.gender}
                onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value as 'male' | 'female' }))}
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                type="number"
                value={formData.age}
                onChange={(e) => setFormData(prev => ({ ...prev, age: parseInt(e.target.value) }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="weight">Weight ({formData.unit === 'metric' ? 'kg' : 'lbs'})</Label>
              <Input
                id="weight"
                type="number"
                value={formData.weight}
                onChange={(e) => setFormData(prev => ({ ...prev, weight: parseFloat(e.target.value) }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="height">Height ({formData.unit === 'metric' ? 'cm' : 'inches'})</Label>
              <Input
                id="height"
                type="number"
                value={formData.height}
                onChange={(e) => setFormData(prev => ({ ...prev, height: parseFloat(e.target.value) }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="neck">Neck ({formData.unit === 'metric' ? 'cm' : 'inches'})</Label>
              <Input
                id="neck"
                type="number"
                value={formData.neck}
                onChange={(e) => setFormData(prev => ({ ...prev, neck: parseFloat(e.target.value) }))}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="waist">Waist ({formData.unit === 'metric' ? 'cm' : 'inches'})</Label>
              <Input
                id="waist"
                type="number"
                value={formData.waist}
                onChange={(e) => setFormData(prev => ({ ...prev, waist: parseFloat(e.target.value) }))}
              />
            </div>

            {formData.gender === 'female' && (
              <div className="space-y-2">
                <Label htmlFor="hip">Hip ({formData.unit === 'metric' ? 'cm' : 'inches'})</Label>
                <Input
                  id="hip"
                  type="number"
                  value={formData.hip}
                  onChange={(e) => setFormData(prev => ({ ...prev, hip: parseFloat(e.target.value) }))}
                />
              </div>
            )}

            <div className="flex space-x-4">
              <Button onClick={calculateBodyFat} className="flex-1">Calculate</Button>
              <Button onClick={handleClear} variant="outline" className="flex-1">Clear</Button>
            </div>
          </div>
        </Tabs>
      </Card>

      {result && (
        <Card className="p-6">
          <h3 className="text-2xl font-bold mb-4">Body Fat: {result.bodyFatNavy}%</h3>
          
          <div className="relative h-8 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded mb-4">
            <div 
              className="absolute w-0.5 h-8 bg-black"
              style={{ left: `${Math.min(Math.max(result.bodyFatNavy, 2), 35) * 100 / 35}%` }}
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Body Fat (U.S. Navy Method)</span>
              <span>{result.bodyFatNavy}%</span>
            </div>
            <div className="flex justify-between">
              <span>Body Fat Category</span>
              <span>{result.category}</span>
            </div>
            <div className="flex justify-between">
              <span>Body Fat Mass</span>
              <span>{result.bodyFatMass} kg</span>
            </div>
            <div className="flex justify-between">
              <span>Lean Body Mass</span>
              <span>{result.leanBodyMass} kg</span>
            </div>
            <div className="flex justify-between">
              <span>Ideal Body Fat for Given Age</span>
              <span>{result.idealBodyFat}%</span>
            </div>
            <div className="flex justify-between">
              <span>Body Fat to Lose to Reach Ideal</span>
              <span>{result.bodyFatToLose} kg</span>
            </div>
            <div className="flex justify-between">
              <span>Body Fat (BMI method)</span>
              <span>{result.bodyFatBMI}%</span>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};
