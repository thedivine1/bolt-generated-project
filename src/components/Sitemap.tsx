import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Sitemap = () => {
  const calculatorCategories = {
    financial: {
      title: "Financial Calculators",
      calculators: [
        { name: "Mortgage Calculator", path: "/mortgage" },
        { name: "Auto Loan Calculator", path: "/auto-loan" },
        { name: "Payment Calculator", path: "/payment" },
        { name: "Interest Calculator", path: "/interest" },
        { name: "Investment Calculator", path: "/investment" },
        { name: "Loan Calculator", path: "/loan" },
        { name: "Income Tax Calculator", path: "/income-tax" },
        { name: "Retirement Calculator", path: "/retirement" },
        { name: "401K Calculator", path: "/401k" },
      ]
    },
    health: {
      title: "Health & Fitness Calculators",
      calculators: [
        { name: "BMI Calculator", path: "/bmi" },
        { name: "BMR Calculator", path: "/bmr" },
        { name: "Body Fat Calculator", path: "/body-fat" },
        { name: "Army Body Fat Calculator", path: "/army-body-fat" },
        { name: "Lean Body Mass Calculator", path: "/lean-body-mass" },
        { name: "Healthy Weight Calculator", path: "/healthy-weight" },
        { name: "Calorie Calculator", path: "/calories" },
        { name: "Macro Calculator", path: "/macro" },
        { name: "Ideal Weight Calculator", path: "/ideal-weight" },
        { name: "TDEE Calculator", path: "/tdee" },
        { name: "Carbohydrate Calculator", path: "/carbohydrate" },
      ]
    },
    math: {
      title: "Math Calculators",
      calculators: [
        { name: "Scientific Calculator", path: "/scientific" },
        { name: "Unit Converter", path: "/converter" },
        { name: "Percentage Calculator", path: "/percentage" },
        { name: "Fraction Calculator", path: "/fraction" },
        { name: "Statistics Calculator", path: "/statistics" },
      ]
    },
    other: {
      title: "Other Calculators",
      calculators: [
        { name: "Age Calculator", path: "/age" },
        { name: "Date Calculator", path: "/date" },
        { name: "Time Calculator", path: "/time" },
        { name: "GPA Calculator", path: "/gpa" },
      ]
    },
    embed: {
      title: "Calculators for Your Site",
      calculators: [
        { name: "Embed BMI Calculator", path: "/embed/bmi" },
        { name: "Embed Mortgage Calculator", path: "/embed/mortgage" },
        { name: "Embed Loan Calculator", path: "/embed/loan" },
      ]
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      
      {Object.values(calculatorCategories).map((category) => (
        <Card key={category.title} className="mb-8 p-6">
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
      ))}

      <div className="mt-12 space-y-2">
        <Separator className="my-8" />
        <Link to="/" className="block text-blue-600 hover:text-blue-800 hover:underline">
          Home
        </Link>
        <Link to="/about" className="block text-blue-600 hover:text-blue-800 hover:underline">
          About Us
        </Link>
        <Link to="/privacy" className="block text-blue-600 hover:text-blue-800 hover:underline">
          Privacy Policy
        </Link>
        <Link to="/terms" className="block text-blue-600 hover:text-blue-800 hover:underline">
          Terms of Use
        </Link>
      </div>
    </div>
  );
};

export default Sitemap;
