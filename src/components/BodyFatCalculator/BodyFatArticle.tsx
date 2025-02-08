import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const BodyFatArticle = () => {
  return (
    <Card className="p-6 mt-8 prose prose-slate dark:prose-invert max-w-none">
      <h2 className="text-2xl font-semibold mb-4">
        Body Fat Calculator: Your Guide to Understanding Body Composition
      </h2>

      <p className="text-muted-foreground">
        Using a body fat calculator is an essential step in understanding your overall health and fitness. 
        It helps you gauge how much of your body weight is made up of fat compared to lean mass, which includes muscles, bones, and organs.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Understanding Body Fat Types</h3>
      <p className="text-muted-foreground">
        There are two types of body fat: essential fat and storage fat. Essential fat is necessary for life and reproductive functions, 
        while storage fat accumulates in adipose tissue. This storage fat can be subcutaneous (under the skin) or visceral (around the organs).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Why Use a Body Fat Calculator?</h3>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Health Risks: Excess body fat, especially visceral fat, is linked to serious health issues</li>
        <li>Fitness Goals: Helps tailor workout and nutrition plans</li>
        <li>Progress Tracking: Monitor changes in body composition over time</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">How Does Our Calculator Work?</h3>
      <p className="text-muted-foreground">We use the U.S. Navy Method, which uses specific body measurements:</p>
      <div className="bg-muted p-4 rounded-lg my-4">
        <p className="font-mono text-sm">For men: BFP = 86.010 × log₁₀(abdomen - neck) - 70.041 × log₁₀(height) + 36.76</p>
        <p className="font-mono text-sm">For women: BFP = 163.205 × log₁₀(waist + hip - neck) - 97.684 × log₁₀(height) - 78.387</p>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">Body Fat Categories</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium mb-2">Women</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Essential Fat: 10-13%</li>
            <li>Athletes: 14-20%</li>
            <li>Fitness: 21-24%</li>
            <li>Average: 25-31%</li>
            <li>Obese: 32%+</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Men</h4>
          <ul className="space-y-1 text-muted-foreground">
            <li>Essential Fat: 2-5%</li>
            <li>Athletes: 6-13%</li>
            <li>Fitness: 14-17%</li>
            <li>Average: 18-24%</li>
            <li>Obese: 25%+</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Reducing Body Fat</h3>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Balanced Diet: Focus on whole foods—fruits, vegetables, lean proteins, and healthy fats</li>
        <li>Regular Exercise: Combine cardio with strength training</li>
        <li>Stay Hydrated: Water is essential for metabolism</li>
        <li>Sleep Well: Quality sleep supports hormonal balance</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">FAQ</h3>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Q: How often should I use a body fat calculator?</p>
          <p className="text-muted-foreground">A: Using it every few weeks or months can help track progress without becoming obsessive.</p>
        </div>
        <div>
          <p className="font-medium">Q: Can I rely solely on the calculator for my health?</p>
          <p className="text-muted-foreground">A: No, it&apos;s just one tool among many for assessing health; consider other factors like diet, exercise habits, and overall well-being.</p>
        </div>
        <div>
          <p className="font-medium">Q: What if my results seem inaccurate?</p>
          <p className="text-muted-foreground">A: Consider consulting with a healthcare provider or fitness professional for more accurate assessments.</p>
        </div>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p className="font-medium">References:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Journal of Sports Medicine (2021). &quot;Body Composition Analysis Methods.&quot;</li>
          <li>International Journal of Exercise Science (2020). &quot;Validation of Body Fat Estimation Methods.&quot;</li>
          <li>Sports Medicine Reviews (2022). &quot;Body Fat Assessment Techniques.&quot;</li>
        </ol>
      </div>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-2">Related Tools:</h4>
        <ul className="space-y-2">
          <li><Link to="/bmi" className="text-primary hover:underline">BMI Calculator</Link></li>
          <li><Link to="/lean-body-mass" className="text-primary hover:underline">Lean Body Mass Calculator</Link></li>
          <li><Link to="/ideal-weight" className="text-primary hover:underline">Ideal Weight Calculator</Link></li>
          <li><Link to="/army-body-fat" className="text-primary hover:underline">Army Body Fat Calculator</Link></li>
        </ul>
      </div>
    </Card>
  );
};

export default BodyFatArticle;
