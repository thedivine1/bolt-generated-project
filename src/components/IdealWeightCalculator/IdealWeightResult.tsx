import { Card } from "@/components/ui/card";

interface IdealWeightResultProps {
  result: {
    robinson: number;
    miller: number;
    devine: number;
    hamwi: number;
    average: number;
  };
}

const IdealWeightResult = ({ result }: IdealWeightResultProps) => {
  return (
    <div className="space-y-6">
      <Card className="p-4">
        <h3 className="text-lg font-semibold mb-4">Your Ideal Weight Results</h3>
        
        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Robinson Formula</span>
            <span className="font-mono">{result.robinson} kg</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Miller Formula</span>
            <span className="font-mono">{result.miller} kg</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Devine Formula</span>
            <span className="font-mono">{result.devine} kg</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <span className="font-medium">Hamwi Formula</span>
            <span className="font-mono">{result.hamwi} kg</span>
          </div>
          
          <div className="grid grid-cols-2 gap-2 pt-2 border-t">
            <span className="font-semibold">Average</span>
            <span className="font-mono font-bold text-primary">{result.average} kg</span>
          </div>
        </div>
      </Card>

      <div className="text-sm text-muted-foreground space-y-2">
        <p>* The Robinson formula (1983) is considered one of the more accurate methods.</p>
        <p>* Different formulas may give varying results based on their methodology.</p>
        <p>* These calculations provide estimates and should be used as general guidelines.</p>
        <p>* Consult with a healthcare provider for personalized recommendations.</p>
      </div>
    </div>
  );
};

export default IdealWeightResult;
