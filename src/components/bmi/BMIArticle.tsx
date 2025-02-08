import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BMIArticle = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          The Ultimate BMI Calculator Guide: What It Measures & Why It Matters
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-slate dark:prose-invert max-w-none">
        <div className="mb-6">
          <p className="text-muted-foreground">
            Hey there! I'm Chaitanya Patankar, and today we're diving deep into the world of BMI calculators - your first step towards understanding body composition.
          </p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">What's BMI Anyway?</h2>
        <p>
          Body Mass Index (BMI) is like your body's scorecard, giving you a rough idea of whether you're carrying too much, too little, or just the right amount of weight for your height.
          Think of it as a quick health selfie - not perfect, but definitely useful for a first impression.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">The Magic Formula Behind BMI Calculators</h2>
        <p>Here's the simple math:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>BMI = weight (kg) / height² (m²)</li>
          <li>For my American friends, it's: BMI = 703 × weight (lbs) / height² (inches²)</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">BMI Categories That Actually Matter</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Underweight: Below 18.5</li>
          <li>Normal: 18.5 - 24.9</li>
          <li>Overweight: 25 - 29.9</li>
          <li>Obese: 30 or greater</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Why Your BMI Score Isn't Everything</h2>
        <p>Let's be real - BMI has its quirks:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>It doesn't know if you're The Rock or someone who hasn't seen a gym in years</li>
          <li>Doesn't account for age or gender</li>
          <li>Can't tell muscle from fat</li>
          <li>Might not work great for different ethnic groups</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">When BMI Actually Makes Sense</h2>
        <p>Perfect for:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Quick health screenings</li>
          <li>Population studies</li>
          <li>Tracking weight changes over time</li>
          <li>Initial health assessments</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">The Real-World Impact of BMI</h2>
        <p>
          Story time: My friend Mike, a rugby player, has a BMI of 29 (technically "overweight"). 
          But with 15% body fat and muscles like a superhero, we can see why BMI isn't always spot-on.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Using BMI Calculator Results Wisely</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track your trends over time</li>
          <li>Combine it with other measurements</li>
          <li>Use it as a conversation starter with your doc</li>
          <li>Don't let it define your worth</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">FAQ's About BMI Calculators</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Q: How often should I check my BMI?</p>
            <p>A: Monthly is plenty - focus on trends, not daily fluctuations.</p>
          </div>
          <div>
            <p className="font-medium">Q: Can BMI predict health problems?</p>
            <p>A: It's one indicator, but not a crystal ball. High BMI correlates with certain health risks.</p>
          </div>
          <div>
            <p className="font-medium">Q: Should athletes worry about BMI?</p>
            <p>A: Not really - their muscle mass often skews the results.</p>
          </div>
          <div>
            <p className="font-medium">Q: Is BMI different for men and women?</p>
            <p>A: The calculation's the same, but interpretation might vary.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">Next Steps Beyond BMI</h2>
        <p>Want a fuller picture? Consider checking out:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Body Fat Percentage</li>
          <li>Waist Circumference</li>
          <li>Basal Metabolic Rate (BMR)</li>
          <li>Daily Calorie Needs</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">The Bottom Line</h2>
        <p>
          BMI calculators offer a quick health snapshot, but they're just one tool in your wellness toolkit. 
          Use them as a starting point, not the final word.
        </p>
        <p className="mt-4">
          Remember, health isn't just a number on a BMI calculator - it's about feeling good, moving well, and living your best life.
        </p>
        <p className="mt-4">
          Looking to dive deeper? Check out my articles on calorie calculators, BMR measurements, and body fat analysis 
          for a complete understanding of your body composition.
        </p>
      </CardContent>
    </Card>
  );
};

export default BMIArticle;
