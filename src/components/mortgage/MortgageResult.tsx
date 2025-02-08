import { Button } from "@/components/ui/button";
import { Share2, Printer, Download } from "lucide-react";
import { MortgageResult } from "@/types/mortgage";
import { shareResults } from "@/utils/mortgageUtils";
import { toast } from "@/hooks/use-toast";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface MortgageResultDisplayProps {
  result: MortgageResult;
}

const MortgageResultDisplay = ({ result }: MortgageResultDisplayProps) => {
  const handleShare = async () => {
    const success = await shareResults(result);
    if (success) {
      toast({
        title: "Success",
        description: navigator.share
          ? "Results shared successfully"
          : "Results copied to clipboard",
      });
    } else {
      toast({
        title: "Error",
        description: "Failed to share results",
        variant: "destructive",
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Enter your email",
      description: "We'll send the PDF report to your email address",
    });
  };

  // Generate chart data
  const chartData = Array.from({ length: 12 }, (_, i) => ({
    month: `Month ${i + 1}`,
    payment: result.monthlyPayment,
    principal: result.monthlyPayment * 0.7, // Example calculation
    interest: result.monthlyPayment * 0.3, // Example calculation
  }));

  return (
    <div className="calculator-result space-y-6">
      <div>
        <div className="text-sm text-muted-foreground">Total Monthly Payment</div>
        <div className="text-3xl font-semibold">
          ${result.totalMonthlyPayment.toLocaleString()}
        </div>
      </div>

      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="payment"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="principal"
              stackId="2"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="interest"
              stackId="3"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="text-sm text-muted-foreground">Principal & Interest</div>
          <div className="text-xl font-semibold">
            ${result.monthlyPayment.toLocaleString()}/mo
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Property Tax</div>
          <div className="text-xl font-semibold">
            ${result.monthlyPropertyTax.toLocaleString()}/mo
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">PMI Insurance</div>
          <div className="text-xl font-semibold">
            ${result.monthlyPMI.toLocaleString()}/mo
          </div>
        </div>
        <div>
          <div className="text-sm text-muted-foreground">Other Costs</div>
          <div className="text-xl font-semibold">
            ${result.monthlyOtherCost.toLocaleString()}/mo
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="text-sm text-muted-foreground">Total Payment</div>
            <div className="text-xl font-semibold">
              ${result.totalPayment.toLocaleString()}
            </div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground">Total Interest</div>
            <div className="text-xl font-semibold">
              ${result.totalInterest.toLocaleString()}
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 print:hidden">
        <Button variant="outline" className="flex-1" onClick={handleShare}>
          <Share2 className="mr-2" />
          Share
        </Button>
        <Button variant="outline" className="flex-1" onClick={handlePrint}>
          <Printer className="mr-2" />
          Print
        </Button>
        <Button variant="outline" className="flex-1" onClick={handleDownloadPDF}>
          <Download className="mr-2" />
          PDF Report
        </Button>
      </div>

      <div className="text-xs text-center text-muted-foreground">
        powered by gigacalculate.com
      </div>
    </div>
  );
};

export default MortgageResultDisplay;
