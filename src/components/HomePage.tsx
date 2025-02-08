import React from 'react';
import { Link } from "react-router-dom";
import Calculator from './calculator/Calculator';
import AdUnit from './ads/AdUnit';
import Image from './ui/image';
import SeoHead from './SeoHead';

interface CalculatorCategory {
  title: string;
  icon: string;
  links: {
    name: string;
    path: string;
  }[];
}

const calculatorCategories: CalculatorCategory[] = [
  {
    title: "Financial Calculators",
    icon: "/lovable-uploads/7bc380b2-15e5-435e-ac30-56048f09e55a.png",
    links: [
      { name: "Mortgage Calculator", path: "/mortgage" },
      { name: "Loan Calculator", path: "/loan" },
      { name: "Investment Calculator", path: "/investment" },
      { name: "Interest Calculator", path: "/interest" },
    ],
  },
  {
    title: "Fitness & Health Calculators",
    icon: "/lovable-uploads/7bc380b2-15e5-435e-ac30-56048f09e55a.png",
    links: [
      { name: "BMI Calculator", path: "/bmi" },
      { name: "BMR Calculator", path: "/bmr" },
      { name: "Body Fat Calculator", path: "/body-fat" },
      { name: "Calorie Calculator", path: "/calories" },
    ],
  },
  {
    title: "Math Calculators",
    icon: "/lovable-uploads/7bc380b2-15e5-435e-ac30-56048f09e55a.png",
    links: [
      { name: "Scientific Calculator", path: "/scientific" },
      { name: "Fraction Calculator", path: "/fraction" },
      { name: "Percentage Calculator", path: "/percentage" },
      { name: "Unit Converter", path: "/converter" },
    ],
  },
  {
    title: "Other Calculators",
    icon: "/lovable-uploads/7bc380b2-15e5-435e-ac30-56048f09e55a.png",
    links: [
      { name: "Age Calculator", path: "/age" },
      { name: "Date Calculator", path: "/date" },
      { name: "Time Calculator", path: "/time" },
      { name: "GPA Calculator", path: "/gpa" },
    ],
  },
];

const HomePage = () => {
  return (
    <>
      <SeoHead 
        title="GigaCalculate - Free Online Calculators"
        description="Access free online calculators for finance, health, math and more. Easy to use and mobile-friendly calculators."
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="mb-8">
              <Image
                src="/lovable-uploads/hero-image.webp"
                alt="GigaCalculate - Online Calculators"
                className="w-full rounded-lg shadow-lg"
                sizes={{
                  mobile: '320w',
                  tablet: '768w',
                  desktop: '1200w'
                }}
              />
            </div>
            <Calculator />
          </div>

          <div className="md:col-span-1">
            <div className="mb-8">
              <AdUnit
                adSlot="/123456789/calculator_sidebar"
                format="rectangle"
                calculatorType="home"
              />
            </div>
            <div className="space-y-8">
              {calculatorCategories.map((category) => (
                <div key={category.title} className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.links.map((link) => (
                      <li key={link.path}>
                        <Link
                          to={link.path}
                          className="text-blue-600 hover:text-blue-800 hover:underline"
                        >
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
