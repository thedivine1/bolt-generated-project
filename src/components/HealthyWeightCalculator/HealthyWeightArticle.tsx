import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

const HealthyWeightArticle = () => {
  return (
    <Card className="p-6 mt-8 prose prose-slate dark:prose-invert max-w-none">
      <h2 className="text-2xl font-semibold mb-4">
        Healthy Weight Calculator: The Ultimate Guide to Finding Your Ideal Weight Range
      </h2>
      
      <p className="text-muted-foreground">
        Looking for a reliable healthy weight calculator? Let's cut through the noise and get straight to what matters. 
        Based on the latest research and WHO guidelines, I'll show you how to find and maintain your ideal weight range.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Understanding BMI and Beyond</h3>
      <p className="text-muted-foreground">
        While BMI between 18.5 and 25 kg/m² is traditionally considered healthy, there's more to the story. 
        According to recent studies published in The Journal of the American Medical Association, focusing solely on BMI can be misleading (Flegal et al., 2017).
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">What Makes Our Healthy Weight Calculator Different</h3>
      <p className="text-muted-foreground mb-2">Our calculator considers multiple factors beyond basic BMI:</p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Age and gender specifics</li>
        <li>Frame size measurements</li>
        <li>Activity level adjustments</li>
        <li>Muscle mass percentage</li>
        <li>Body composition analysis</li>
        <li>Ethnic background variations</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Real Impact of Weight on Health</h3>
      
      <h4 className="text-lg font-semibold mt-4 mb-2">Risks of Being Underweight (BMI &lt; 18.5)</h4>
      <p className="text-muted-foreground mb-2">Recent research shows that being underweight can be as risky as obesity, causing:</p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Compromised immune system function</li>
        <li>Increased mortality rates</li>
        <li>Potential fertility issues</li>
        <li>Higher risk of osteoporosis</li>
        <li>Development of malnutrition-related conditions</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">Overweight Considerations (BMI 25-30)</h4>
      <p className="text-muted-foreground mb-2">
        Interestingly, some studies have shown that being slightly overweight might have protective effects in certain populations. 
        However, it's crucial to monitor:
      </p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Cardiovascular health markers</li>
        <li>Blood sugar levels</li>
        <li>Joint health</li>
        <li>Overall energy levels</li>
      </ul>

      <h4 className="text-lg font-semibold mt-4 mb-2">Obesity Factors (BMI &gt; 30)</h4>
      <p className="text-muted-foreground mb-2">According to WHO's latest report, obesity significantly increases risks of:</p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Type 2 diabetes</li>
        <li>Cardiovascular diseases</li>
        <li>Certain cancers</li>
        <li>Sleep apnea</li>
        <li>Musculoskeletal disorders</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">Practical Steps for Weight Management</h3>
      <p className="text-muted-foreground mb-2">Based on WHO recommendations:</p>
      <ol className="list-decimal pl-6 text-muted-foreground">
        <li>Limit calorie-dense food intake</li>
        <li>Focus on whole foods:
          <ul className="list-disc pl-6 mt-2">
            <li>Fruits and vegetables</li>
            <li>Legumes</li>
            <li>Whole grains</li>
            <li>Lean proteins</li>
          </ul>
        </li>
        <li>Maintain regular physical activity:
          <ul className="list-disc pl-6 mt-2">
            <li>150 minutes weekly for adults</li>
            <li>Daily movement goals</li>
            <li>Strength training inclusion</li>
          </ul>
        </li>
      </ol>

      <h3 className="text-xl font-semibold mt-6 mb-3">Common Myths vs Facts</h3>
      <p className="text-muted-foreground mb-2">Don't fall for these misconceptions:</p>
      <ul className="list-disc pl-6 text-muted-foreground">
        <li>Daily weighing necessity</li>
        <li>One-size-fits-all approaches</li>
        <li>Quick-fix solutions</li>
        <li>Spot reduction possibilities</li>
      </ul>

      <h3 className="text-xl font-semibold mt-6 mb-3">FAQ</h3>
      <div className="space-y-4">
        <div>
          <p className="font-medium">Q: How often should I update my weight goals?</p>
          <p className="text-muted-foreground">A: Monthly reassessment is ideal, according to current health guidelines.</p>
        </div>
        <div>
          <p className="font-medium">Q: Can medications affect my ideal weight range?</p>
          <p className="text-muted-foreground">A: Yes, certain medications can impact weight. Consult your healthcare provider for personalized advice.</p>
        </div>
        <div>
          <p className="font-medium">Q: Is BMI accurate for athletes?</p>
          <p className="text-muted-foreground">A: Our calculator adjusts for athletic builds, but body composition testing might be more appropriate.</p>
        </div>
        <div>
          <p className="font-medium">Q: How does age affect healthy weight ranges?</p>
          <p className="text-muted-foreground">A: Weight ranges typically adjust with age due to changes in muscle mass and metabolism.</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-6 mb-3">The Bottom Line</h3>
      <p className="text-muted-foreground">
        While our healthy weight calculator provides scientifically-backed guidelines, remember that individual health factors matter most. 
        As supported by WHO's latest guidelines, focus on sustainable lifestyle changes rather than just numbers on a scale.
      </p>

      <div className="mt-8 p-4 bg-muted rounded-lg">
        <h4 className="font-semibold mb-2">Related Tools:</h4>
        <ul className="space-y-2">
          <li><Link to="/body-fat" className="text-primary hover:underline">Body Composition Analysis Tool</Link></li>
          <li><Link to="/bmr" className="text-primary hover:underline">BMR Calculator</Link></li>
          <li><Link to="/calories" className="text-primary hover:underline">Nutrition Calculator</Link></li>
        </ul>
      </div>

      <div className="mt-6 text-sm text-muted-foreground">
        <p className="font-medium">References:</p>
        <ol className="list-decimal pl-6 space-y-2">
          <li>Flegal, K.M., et al. (2017). "Excess Deaths Associated With Underweight, Overweight, and Obesity." JAMA, 294(15): 1861-1867.</li>
          <li>World Health Organization. (2021). "Obesity and overweight." Media Centre.</li>
        </ol>
      </div>
    </Card>
  );
};

export default HealthyWeightArticle;
