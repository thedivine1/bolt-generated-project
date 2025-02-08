export interface Calculator {
  name: string;
  path: string;
}

export interface CalculatorCategory {
  title: string;
  calculators: Calculator[];
}

export interface SitemapData {
  [key: string]: CalculatorCategory;
}
