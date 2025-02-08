export interface MortgageCalculation {
  id: string;
  date: string;
  loanAmount: string;
  interestRate: string;
  loanTerm: string;
  propertyTax: string;
  pmiInsurance: string;
  otherCost: string;
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
}

export interface MortgageResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  monthlyPropertyTax: number;
  monthlyPMI: number;
  monthlyOtherCost: number;
  totalMonthlyPayment: number;
}
