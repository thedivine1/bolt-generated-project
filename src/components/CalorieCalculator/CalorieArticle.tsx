import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CalorieArticle = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl">Understanding Your Daily Calorie Needs: A Comprehensive Guide</CardTitle>
      </CardHeader>
      <CardContent className="prose dark:prose-invert max-w-none">
        <p>
          Understanding your daily calorie needs is crucial for maintaining a healthy lifestyle. Whether your goal is weight loss, muscle gain, or maintaining your current weight, knowing how many calories your body needs is the first step toward achieving your fitness goals.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">What Are Calories?</h2>
        <p>
          Calories are units of energy that your body needs to function. Everything from breathing to running a marathon requires calories. Think of them as your body's fuel - too little can leave you running on empty, while too much gets stored as fat.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-3">Why Calculate Your Calorie Needs?</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Weight Management: Understanding your maintenance calories helps control weight</li>
          <li>Fitness Goals: Proper calorie intake supports muscle growth and recovery</li>
          <li>Health Optimization: Balanced nutrition starts with the right calorie intake</li>
          <li>Energy Levels: Adequate calories ensure stable energy throughout the day</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Understanding Your Results</h2>
        <div className="space-y-4">
          <p><strong>Maintenance Calories:</strong> The amount needed to maintain your current weight</p>
          <p><strong>Weight Loss:</strong> A 500-calorie deficit per day leads to about 1 pound loss per week</p>
          <p><strong>Weight Gain:</strong> A 500-calorie surplus supports muscle growth when combined with training</p>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">Activity Levels Explained</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Sedentary:</strong> Office work with little to no exercise</li>
          <li><strong>Light Activity:</strong> Light exercise 1-3 times per week</li>
          <li><strong>Moderate:</strong> Moderate exercise 3-5 times per week</li>
          <li><strong>Very Active:</strong> Hard exercise 6-7 times per week</li>
          <li><strong>Extra Active:</strong> Very hard exercise or physical job</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Tips for Success</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Track your food intake accurately using a food diary or app</li>
          <li>Be consistent with your eating patterns</li>
          <li>Adjust calories based on your progress</li>
          <li>Focus on nutrient-dense foods</li>
          <li>Stay hydrated - sometimes thirst masquerades as hunger</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-3">Common Questions</h2>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Q: How accurate is the calorie calculator?</p>
            <p>A: It provides a good estimate, but individual factors may affect actual needs.</p>
          </div>
          <div>
            <p className="font-medium">Q: Should I eat back exercise calories?</p>
            <p>A: Generally, it's better not to eat back all exercise calories to ensure a deficit for weight loss.</p>
          </div>
          <div>
            <p className="font-medium">Q: How often should I recalculate?</p>
            <p>A: Recalculate every 10-15 pounds of weight change or when activity levels change significantly.</p>
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-6 mb-3">Next Steps</h2>
        <p>
          After calculating your calorie needs, consider using our other calculators to optimize your fitness journey:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Macro Calculator - for detailed nutrient planning</li>
          <li>BMI Calculator - to check your body mass index</li>
          <li>Body Fat Calculator - to estimate body composition</li>
        </ul>

        <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
          <p className="italic">
            Remember: These calculations provide estimates. Always consult with healthcare professionals before making significant changes to your diet or exercise routine.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalorieArticle;
