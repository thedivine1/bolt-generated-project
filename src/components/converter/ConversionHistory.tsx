import { ConversionHistory as ConversionHistoryType } from "@/types/converter";

interface ConversionHistoryProps {
  history: ConversionHistoryType[];
  clearHistory: () => void;
}

const ConversionHistory = ({ history, clearHistory }: ConversionHistoryProps) => {
  if (history.length === 0) return null;

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">Recent Conversions</h2>
        <button
          onClick={clearHistory}
          className="text-sm text-destructive hover:underline"
        >
          Clear History
        </button>
      </div>
      <div className="space-y-2">
        {history.map((item) => (
          <div
            key={item.id}
            className="p-3 bg-secondary/50 rounded-md text-sm"
          >
            {item.fromValue} {item.fromUnit} = {item.result} {item.toUnit}
            <div className="text-xs text-muted-foreground mt-1">
              {new Date(item.timestamp).toLocaleString()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionHistory;
