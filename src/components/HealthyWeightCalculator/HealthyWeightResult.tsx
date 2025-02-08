import { Card } from "@/components/ui/card";

interface HealthyWeightResultProps {
  result: {
    min: number;
    max: number;
  };
  unit: "us" | "metric";
}

const HealthyWeightResult = ({ result, unit }: HealthyWeightResultProps) => {
  return (
    <Card className="mt-4 p-4">
      <div className="text-center">
        <h3 className="text-lg font-semibold">Your Healthy Weight Range</h3>
        <p className="text-3xl font-bold text-primary">
          {result.min.toFixed(1)} - {result.max.toFixed(1)} {unit === "us" ? "lbs" : "kg"}
        </p>
      </div>
    </Card>
  );
};

export default HealthyWeightResult;
