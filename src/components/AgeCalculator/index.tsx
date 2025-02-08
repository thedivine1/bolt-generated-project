import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AgeCalculatorForm from './AgeCalculatorForm';
import AgeCalculatorResult from './AgeCalculatorResult';
import Breadcrumb from '../Breadcrumb';

const AgeCalculator = () => {
  const [age, setAge] = useState('');

  const handleCalculate = (birthdate: string) => {
    const birthDate = new Date(birthdate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age.toString());
  };

  return (
    <div className="space-y-8">
      <Breadcrumb
        items={[
          { label: "Home", path: "/" },
          { label: "Age Calculator" },
        ]}
      />
      
      <Card>
        <CardHeader>
          <CardTitle>Age Calculator</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <AgeCalculatorForm onCalculate={handleCalculate} />
          {age && <AgeCalculatorResult age={age} />}
        </CardContent>
      </Card>
    </div>
  );
};

export default AgeCalculator;
