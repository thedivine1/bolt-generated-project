import { calculatorCategories } from "./data";
import CalculatorCategory from "./CalculatorCategory";
import Footer from "./Footer";

const Sitemap = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Sitemap</h1>
      
      {Object.values(calculatorCategories).map((category) => (
        <CalculatorCategory key={category.title} category={category} />
      ))}

      <Footer />
    </div>
  );
};

export default Sitemap;
