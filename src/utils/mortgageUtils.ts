import { MortgageResult } from "@/types/mortgage";

export const calculateMortgage = (
  loanAmount: number,
  interestRate: number,
  loanTerm: number,
  propertyTax: number = 0,
  pmiInsurance: number = 0,
  otherCost: number = 0
): MortgageResult => {
  const monthlyRate = interestRate / 100 / 12;
  const numberOfPayments = loanTerm * 12;

  const monthlyPayment =
    (loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  const totalPayment = monthlyPayment * numberOfPayments;
  const totalInterest = totalPayment - loanAmount;
  
  const monthlyPropertyTax = propertyTax / 12;
  const monthlyPMI = pmiInsurance / 12;
  const monthlyOtherCost = otherCost / 12;
  
  const totalMonthlyPayment = monthlyPayment + monthlyPropertyTax + monthlyPMI + monthlyOtherCost;

  return {
    monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
    totalPayment: parseFloat(totalPayment.toFixed(2)),
    totalInterest: parseFloat(totalInterest.toFixed(2)),
    monthlyPropertyTax: parseFloat(monthlyPropertyTax.toFixed(2)),
    monthlyPMI: parseFloat(monthlyPMI.toFixed(2)),
    monthlyOtherCost: parseFloat(monthlyOtherCost.toFixed(2)),
    totalMonthlyPayment: parseFloat(totalMonthlyPayment.toFixed(2)),
  };
};

export const shareResults = async (result: MortgageResult) => {
  const text = `
Monthly Principal & Interest: $${result.monthlyPayment.toLocaleString()}
Monthly Property Tax: $${result.monthlyPropertyTax.toLocaleString()}
Monthly PMI: $${result.monthlyPMI.toLocaleString()}
Monthly Other Costs: $${result.monthlyOtherCost.toLocaleString()}
Total Monthly Payment: $${result.totalMonthlyPayment.toLocaleString()}
Total Payment: $${result.totalPayment.toLocaleString()}
Total Interest: $${result.totalInterest.toLocaleString()}
  `.trim();

  if (navigator.share) {
    try {
      await navigator.share({
        title: "Mortgage Calculation Results",
        text: text,
      });
      return true;
    } catch (error) {
      if (error instanceof Error && error.name !== "AbortError") {
        return false;
      }
    }
  }

  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
};
