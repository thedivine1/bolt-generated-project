import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BMIDocumentation = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>About BMI Calculation</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Formula</h3>
          <p className="text-muted-foreground">
            BMI = weight (kg) / (height (m))²
          </p>
        </div>
        <div>
          <h3 className="font-semibold">BMI Categories</h3>
          <ul className="list-inside list-disc text-muted-foreground">
            <li>Underweight: Less than 18.5</li>
            <li>Normal weight: 18.5 - 24.9</li>
            <li>Overweight: 25 - 29.9</li>
            <li>Obese: 30 or greater</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold">Example</h3>
          <p className="text-muted-foreground">
            For a person who is 175cm tall and weighs 70kg:
            <br />
            BMI = 70 / (1.75)² = 22.9 (Normal weight)
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default BMIDocumentation;
