import React from 'react';

interface CalculationHistory {
  expression: string;
  result: string;
  timestamp: number;
}

interface CalculatorHistoryProps {
  history: CalculationHistory[];
}

const CalculatorHistory = ({ history }: CalculatorHistoryProps) => {
  return (
    <div className="mt-4 border-t pt-4">
      <h3 className="text-lg font-semibold mb-3">History</h3>
      <div className="space-y-1.5">
        {history.map((calc) => (
          <div key={calc.timestamp} className="text-sm text-muted-foreground">
            {calc.expression} = {calc.result}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorHistory;
