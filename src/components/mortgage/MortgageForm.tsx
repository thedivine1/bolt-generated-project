import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface MortgageFormProps {
  onCalculate: (
    loanAmount: string,
    interestRate: string,
    loanTerm: string,
    propertyTax: string,
    pmiInsurance: string,
    otherCost: string
  ) => void;
}

const MortgageForm = ({ onCalculate }: MortgageFormProps) => {
  const [loanAmount, setLoanAmount] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [pmiInsurance, setPMIInsurance] = useState("");
  const [otherCost, setOtherCost] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!loanAmount || !interestRate || !loanTerm) {
      toast({
        title: "Missing required values",
        description: "Please fill in loan amount, interest rate, and loan term",
        variant: "destructive",
      });
      return;
    }

    onCalculate(
      loanAmount,
      interestRate,
      loanTerm,
      propertyTax || "0",
      pmiInsurance || "0",
      otherCost || "0"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="loanAmount" className="calculator-label">
          Loan Amount ($)
        </Label>
        <Input
          id="loanAmount"
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          className="calculator-input"
          placeholder="300000"
          min="0"
          step="1000"
          inputMode="numeric"
          required
        />
      </div>

      <div>
        <Label htmlFor="interestRate" className="calculator-label">
          Interest Rate (%)
        </Label>
        <Input
          id="interestRate"
          type="number"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
          className="calculator-input"
          placeholder="6.0"
          min="0"
          step="0.1"
          inputMode="decimal"
          required
        />
      </div>

      <div>
        <Label htmlFor="loanTerm" className="calculator-label">
          Loan Term (years)
        </Label>
        <Input
          id="loanTerm"
          type="number"
          value={loanTerm}
          onChange={(e) => setLoanTerm(e.target.value)}
          className="calculator-input"
          placeholder="30"
          min="0"
          step="1"
          inputMode="numeric"
          required
        />
      </div>

      <div>
        <Label htmlFor="propertyTax" className="calculator-label">
          Property Tax ($/year)
        </Label>
        <Input
          id="propertyTax"
          type="number"
          value={propertyTax}
          onChange={(e) => setPropertyTax(e.target.value)}
          className="calculator-input"
          placeholder="0"
          min="0"
          step="100"
          inputMode="numeric"
        />
      </div>

      <div>
        <Label htmlFor="pmiInsurance" className="calculator-label">
          PMI Insurance ($/year)
        </Label>
        <Input
          id="pmiInsurance"
          type="number"
          value={pmiInsurance}
          onChange={(e) => setPMIInsurance(e.target.value)}
          className="calculator-input"
          placeholder="0"
          min="0"
          step="100"
          inputMode="numeric"
        />
      </div>

      <div>
        <Label htmlFor="otherCost" className="calculator-label">
          Other Cost ($/year)
        </Label>
        <Input
          id="otherCost"
          type="number"
          value={otherCost}
          onChange={(e) => setOtherCost(e.target.value)}
          className="calculator-input"
          placeholder="0"
          min="0"
          step="100"
          inputMode="numeric"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
      >
        Calculate Monthly Payment
      </button>
    </form>
  );
};

export default MortgageForm;
