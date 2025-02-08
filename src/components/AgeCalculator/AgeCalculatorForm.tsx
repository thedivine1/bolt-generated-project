import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

interface AgeCalculatorFormProps {
  onCalculate: (age: string) => void;
}

const AgeCalculatorForm = ({ onCalculate }: AgeCalculatorFormProps) => {
  const [birthdate, setBirthdate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCalculate(birthdate);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="birthdate" className="calculator-label">
          Enter Birthdate:
        </Label>
        <Input
          id="birthdate"
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="calculator-input"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Calculate Age
      </Button>
    </form>
  );
};

export default AgeCalculatorForm;
