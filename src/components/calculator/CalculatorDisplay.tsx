import React from 'react';

interface CalculatorDisplayProps {
  value: string;
}

const CalculatorDisplay = ({ value }: CalculatorDisplayProps) => {
  return (
    <div className="bg-secondary/50 p-3 rounded-lg mb-3 text-right font-mono text-xl overflow-x-auto">
      {value}
    </div>
  );
};

export default CalculatorDisplay;
