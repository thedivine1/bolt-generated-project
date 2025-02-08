import { useState } from "react";
import { DollarSign } from "lucide-react";
import { MortgageCalculation, MortgageResult } from "@/types/mortgage";
import { calculateMortgage } from "@/utils/mortgageUtils";
import MortgageForm from "./mortgage/MortgageForm";
import MortgageResultDisplay from "./mortgage/MortgageResult";
import MortgageHistory from "./mortgage/MortgageHistory";
import MortgageDocumentation from "./mortgage/MortgageDocumentation";
import Breadcrumb from "./Breadcrumb";

const MortgageCalculator = () => {
  const [result, setResult] = useState<MortgageResult | null>(null);
  const [history, setHistory] = useState<MortgageCalculation[]>(() => {
    const saved = localStorage.getItem("mortgageHistory");
    return saved ? JSON.parse(saved) : [];
  });

  const handleCalculate = (
    loanAmount: string,
    interestRate: string,
    loanTerm: string,
    propertyTax: string,
    pmiInsurance: string,
    otherCost: string
  ) => {
    const result = calculateMortgage(
      parseFloat(loanAmount),
      parseFloat(interestRate),
      parseFloat(loanTerm),
      parseFloat(propertyTax),
      parseFloat(pmiInsurance),
      parseFloat(otherCost)
    );
    setResult(result);

    const calculation: MortgageCalculation = {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      loanAmount,
      interestRate,
      loanTerm,
      propertyTax,
      pmiInsurance,
      otherCost,
      monthlyPayment: result.monthlyPayment,
      totalPayment: result.totalPayment,
      totalInterest: result.totalInterest,
    };

    const updatedHistory = [calculation, ...history].slice(0, 10);
    setHistory(updatedHistory);
    localStorage.setItem("mortgageHistory", JSON.stringify(updatedHistory));
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem("mortgageHistory");
  };

  return (
    <div className="animate-fade-in">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Mortgage Calculator" },
          ]}
        />
        <div className="calculator-card max-w-md mx-auto">
          <div className="flex items-center space-x-2 mb-6">
            <DollarSign className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-semibold">Mortgage Calculator</h1>
          </div>

          <MortgageForm onCalculate={handleCalculate} />
          {result && <MortgageResultDisplay result={result} />}
          <MortgageHistory history={history} onClearHistory={clearHistory} />
          <MortgageDocumentation />
        </div>
      </div>
    </div>
  );
};

export default MortgageCalculator;
