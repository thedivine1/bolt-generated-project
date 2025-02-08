import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { CalculatorCategory as CategoryType } from "./types";

interface CalculatorCategoryProps {
  category: CategoryType;
}

const CalculatorCategory = ({ category }: CalculatorCategoryProps) => {
  return (
    <Card className="mb-8 p-6">
      <h2 className="text-2xl font-semibold mb-4 text-primary">{category.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {category.calculators.map((calculator) => (
          <Link
            key={calculator.path}
            to={calculator.path}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {calculator.name}
          </Link>
        ))}
      </div>
    </Card>
  );
};

export default CalculatorCategory;
