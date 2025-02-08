import React from 'react';
import CalculatorButton from './CalculatorButton';

interface NumPadProps {
  onNumberClick: (num: string) => void;
  onEquals: () => void;
  onClear: () => void;
  onAllClear: () => void;
}

const NumPad = ({ onNumberClick, onEquals, onClear, onAllClear }: NumPadProps) => {
  return (
    <div className="grid grid-cols-4 gap-1.5">
      <CalculatorButton variant="destructive" onClick={onAllClear}>AC</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick("(")}>(</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick(")")}>)</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick("÷")}>÷</CalculatorButton>

      <CalculatorButton onClick={() => onNumberClick("7")}>7</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("8")}>8</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("9")}>9</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick("×")}>×</CalculatorButton>

      <CalculatorButton onClick={() => onNumberClick("4")}>4</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("5")}>5</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("6")}>6</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick("-")}>-</CalculatorButton>

      <CalculatorButton onClick={() => onNumberClick("1")}>1</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("2")}>2</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("3")}>3</CalculatorButton>
      <CalculatorButton variant="secondary" onClick={() => onNumberClick("+")}>+</CalculatorButton>

      <CalculatorButton onClick={() => onNumberClick("0")}>0</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick(".")}>.</CalculatorButton>
      <CalculatorButton onClick={() => onNumberClick("%")}>%</CalculatorButton>
      <CalculatorButton variant="default" onClick={onEquals}>=</CalculatorButton>
    </div>
  );
};

export default NumPad;
