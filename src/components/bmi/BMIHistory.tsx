import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import type { BMIHistory } from "@/types/bmi";

interface BMIHistoryProps {
  history: BMIHistory[];
  onClearHistory: () => void;
}

const BMIHistory = ({ history, onClearHistory }: BMIHistoryProps) => {
  const handleClearHistory = () => {
    onClearHistory();
    toast({
      title: "History cleared",
      description: "Your BMI calculation history has been cleared",
    });
  };

  if (history.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">History</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={handleClearHistory}
          className="text-destructive"
        >
          <Trash2 className="mr-2 h-4 w-4" />
          Clear
        </Button>
      </div>
      <div className="space-y-2">
        {history.map((entry, index) => (
          <div
            key={index}
            className="flex items-center justify-between rounded-lg border p-2 text-sm"
          >
            <div>
              <span className="font-medium">BMI: {entry.bmi.toFixed(1)}</span>
              <span className="text-muted-foreground">
                {" "}
                ({entry.height}cm, {entry.weight}kg)
              </span>
            </div>
            <div className="text-muted-foreground">
              {new Date(entry.date).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BMIHistory;
