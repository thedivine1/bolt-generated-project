import { Card } from "@/components/ui/card";

interface LeanBodyMassResultProps {
  result: number;
  unit: "us" | "metric";
}

const LeanBodyMassResult = ({ result, unit }: LeanBodyMassResultProps) => {
  return (
    <Card className="mt-4 p-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Your Lean Body Mass</h3>
        <p className="text-3xl font-bold text-primary">
          {result.toFixed(1)} {unit === "us" ? "lbs" : "kg"}
        </p>
      </div>
    </Card>
  );
};

export default LeanBodyMassResult;
