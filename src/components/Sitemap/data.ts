import { SitemapData } from './types';

export const calculatorCategories: SitemapData = {
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
