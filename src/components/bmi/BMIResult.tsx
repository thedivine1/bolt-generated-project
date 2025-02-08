import { Share2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getBMICategory, shareResults } from "@/utils/bmiUtils";
import { toast } from "@/hooks/use-toast";

interface BMIResultProps {
  bmi: number;
}

const BMIResult = ({ bmi }: BMIResultProps) => {
  const handleShare = async () => {
    await shareResults(bmi);
    toast({
      title: "Copied to clipboard",
      description: "The BMI result has been copied to your clipboard",
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="rounded-lg bg-muted p-4 text-center">
      <div className="text-sm text-muted-foreground">Your BMI</div>
      <div className="text-3xl font-semibold">{bmi}</div>
      <div className="text-sm text-muted-foreground">
        Category: {getBMICategory(bmi)}
      </div>
      <div className="mt-4 flex justify-center space-x-2">
        <Button size="sm" variant="outline" onClick={handleShare}>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
        <Button size="sm" variant="outline" onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" />
          Print
        </Button>
      </div>
    </div>
  );
};

export default BMIResult;
