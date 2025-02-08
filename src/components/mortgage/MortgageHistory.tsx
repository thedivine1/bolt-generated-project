import { Button } from "@/components/ui/button";
import { MortgageCalculation } from "@/types/mortgage";
import { toast } from "@/hooks/use-toast";

interface MortgageHistoryProps {
  history: MortgageCalculation[];
  onClearHistory: () => void;
}

const MortgageHistory = ({ history, onClearHistory }: MortgageHistoryProps) => {
  const handleClearHistory = () => {
    onClearHistory();
    toast({
      title: "History cleared",
      description: "Your calculation history has been cleared",
    });
  };

  if (history.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold">Recent Calculations</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleClearHistory}
          className="text-destructive hover:text-destructive"
        >
          Clear History
        </Button>
      </div>
      <div className="space-y-2">
        {history.map((calc) => (
          <div
            key={calc.id}
            className="p-4 rounded-lg bg-secondary/50 space-y-2"
          >
            <div className="flex justify-between text-sm">
              <span>Loan: ${parseInt(calc.loanAmount).toLocaleString()}</span>
              <span>{new Date(calc.date).toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>{calc.interestRate}% / {calc.loanTerm} years</span>
              <span>${calc.monthlyPayment.toLocaleString()}/month</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MortgageHistory;
