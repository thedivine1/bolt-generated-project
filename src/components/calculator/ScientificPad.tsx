import React from 'react';
import CalculatorButton from './CalculatorButton';

interface ScientificPadProps {
  onScientificOperation: (operation: string) => void;
  isDegrees: boolean;
}

const ScientificPad = ({ onScientificOperation, isDegrees }: ScientificPadProps) => {
  return (
    <div className="grid grid-cols-5 gap-1.5 mb-1.5">
      <CalculatorButton onClick={() => onScientificOperation("sin")}>sin</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("cos")}>cos</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("tan")}>tan</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("sin⁻¹")}>sin⁻¹</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("cos⁻¹")}>cos⁻¹</CalculatorButton>
      
      <CalculatorButton onClick={() => onScientificOperation("tan⁻¹")}>tan⁻¹</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("π")}>π</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("e")}>e</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("x²")}>x²</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("x³")}>x³</CalculatorButton>
      
      <CalculatorButton onClick={() => onScientificOperation("√")}>√</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("log")}>log</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("ln")}>ln</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("e^x")}>e^x</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("10^x")}>10^x</CalculatorButton>
      
      <CalculatorButton onClick={() => onScientificOperation("∛")}>∛x</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("y√x")}>y√x</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("1/x")}>1/x</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("n!")}>n!</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("M+")}>M+</CalculatorButton>
      
      <CalculatorButton onClick={() => onScientificOperation("M-")}>M-</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("MR")}>MR</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("MC")}>MC</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("EXP")}>EXP</CalculatorButton>
      <CalculatorButton onClick={() => onScientificOperation("RND")}>RND</CalculatorButton>
    </div>
  );
};

export default ScientificPad;
