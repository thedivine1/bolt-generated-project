import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import CalculatorDisplay from './CalculatorDisplay';
import CalculatorHistory from './CalculatorHistory';
import ScientificPad from './ScientificPad';
import NumPad from './NumPad';

interface CalculationHistory {
  expression: string;
  result: string;
  timestamp: number;
}

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [isScientific, setIsScientific] = useState(false);
  const [history, setHistory] = useState<CalculationHistory[]>([]);
  const [isDegrees, setIsDegrees] = useState(true);
  const [memory, setMemory] = useState<number>(0);
  const [lastOperation, setLastOperation] = useState<string>("");
  const [lastAnswer, setLastAnswer] = useState<string>("0");

  const evaluateExpression = (expr: string): string => {
    try {
      const sanitizedExpr = expr
        .replace(/×/g, '*')
        .replace(/÷/g, '/')
        .replace(/sin⁻¹/g, 'Math.asin')
        .replace(/cos⁻¹/g, 'Math.acos')
        .replace(/tan⁻¹/g, 'Math.atan')
        .replace(/sin/g, 'Math.sin')
        .replace(/cos/g, 'Math.cos')
        .replace(/tan/g, 'Math.tan')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/log/g, 'Math.log10')
        .replace(/ln/g, 'Math.log')
        .replace(/√/g, 'Math.sqrt');

      let result;
      if (isDegrees && (expr.includes('sin') || expr.includes('cos') || expr.includes('tan'))) {
        const angle = parseFloat(expr.match(/\d+/)?.[0] || "0");
        const radians = (angle * Math.PI) / 180;
        result = Function(`'use strict'; return ${sanitizedExpr.replace(angle.toString(), radians.toString())}`)();
      } else {
        result = Function(`'use strict'; return ${sanitizedExpr}`)();
      }
      
      return Number(result).toFixed(8).replace(/\.?0+$/, '');
    } catch (error) {
      return "Error";
    }
  };

  const handleEquals = () => {
    try {
      const result = evaluateExpression(display);
      if (result !== "Error") {
        const newHistory: CalculationHistory = {
          expression: display,
          result,
          timestamp: Date.now()
        };
        setHistory(prev => [newHistory, ...prev].slice(0, 10));
        setDisplay(result);
        setLastAnswer(result);
        setLastOperation("");
      } else {
        setDisplay("Error");
      }
    } catch (error) {
      setDisplay("Error");
    }
  };

  const factorial = (n: number): number => {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
  };

  const handleNumberClick = (num: string) => {
    setDisplay(prev => prev === "0" ? num : prev + num);
  };

  const handleClear = () => {
    setDisplay("0");
    setLastOperation("");
  };

  const handleAllClear = () => {
    setDisplay("0");
    setLastOperation("");
    setMemory(0);
  };

  const handleScientificOperation = (operation: string) => {
    switch (operation) {
      case "sin":
      case "cos":
      case "tan": {
        const value = parseFloat(display);
        const radians = isDegrees ? (value * Math.PI) / 180 : value;
        const result = Math[operation](radians);
        setDisplay(result.toString());
        break;
      }
      case "sin⁻¹":
      case "cos⁻¹":
      case "tan⁻¹": {
        const value = parseFloat(display);
        const result = Math[operation.replace('⁻¹', 'a')](value);
        const degrees = isDegrees ? (result * 180) / Math.PI : result;
        setDisplay(degrees.toString());
        break;
      }
      case "π":
        setDisplay(Math.PI.toString());
        break;
      case "e":
        setDisplay(Math.E.toString());
        break;
      case "x²":
        setDisplay(prev => Math.pow(parseFloat(prev), 2).toString());
        break;
      case "x³":
        setDisplay(prev => Math.pow(parseFloat(prev), 3).toString());
        break;
      case "√":
        setDisplay(prev => Math.sqrt(parseFloat(prev)).toString());
        break;
      case "log":
        setDisplay(prev => Math.log10(parseFloat(prev)).toString());
        break;
      case "ln":
        setDisplay(prev => Math.log(parseFloat(prev)).toString());
        break;
      case "M+":
        setMemory(prev => prev + parseFloat(display));
        break;
      case "M-":
        setMemory(prev => prev - parseFloat(display));
        break;
      case "MR":
        setDisplay(memory.toString());
        break;
      case "e^x":
        setDisplay(prev => Math.exp(parseFloat(prev)).toString());
        break;
      case "10^x":
        setDisplay(prev => Math.pow(10, parseFloat(prev)).toString());
        break;
      case "∛":
        setDisplay(prev => Math.pow(parseFloat(prev), 1/3).toString());
        break;
      case "y√x":
        setLastOperation("y√x");
        break;
      case "1/x":
        setDisplay(prev => (1 / parseFloat(prev)).toString());
        break;
      case "n!":
        setDisplay(prev => factorial(parseInt(prev)).toString());
        break;
      case "ANS":
        setDisplay(lastAnswer);
        break;
      case "EXP":
        setDisplay(prev => prev + "E");
        break;
      case "RND":
        setDisplay(prev => Math.round(parseFloat(prev)).toString());
        break;
      case "+/-":
        setDisplay(prev => (parseFloat(prev) * -1).toString());
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const key = event.key;
      
      if (/[0-9.]/.test(key)) {
        handleNumberClick(key);
      } else if (['+', '-', '*', '/', '=', 'Enter'].includes(key)) {
        if (key === 'Enter' || key === '=') {
          handleEquals();
        } else {
          handleNumberClick(key === '*' ? '×' : key === '/' ? '÷' : key);
        }
      } else if (key === 'Escape') {
        handleClear();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  return (
    <Card className="p-4 md:p-6 max-w-md mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          {isScientific && (
            <div className="flex items-center gap-2">
              <Switch
                id="angle-mode"
                checked={isDegrees}
                onCheckedChange={setIsDegrees}
              />
              <Label htmlFor="angle-mode">{isDegrees ? "Deg" : "Rad"}</Label>
            </div>
          )}
          <div className="flex items-center gap-2">
            <Switch
              id="calculator-mode"
              checked={isScientific}
              onCheckedChange={setIsScientific}
            />
            <Label htmlFor="calculator-mode">Scientific Mode</Label>
          </div>
        </div>
      </div>

      <CalculatorDisplay value={display} />
      
      {isScientific && (
        <ScientificPad 
          onScientificOperation={handleScientificOperation}
          isDegrees={isDegrees}
        />
      )}
      
      <NumPad 
        onNumberClick={handleNumberClick}
        onEquals={handleEquals}
        onClear={handleClear}
        onAllClear={handleAllClear}
      />

      <CalculatorHistory history={history} />
    </Card>
  );
};

export default Calculator;
