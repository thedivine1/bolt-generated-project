import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const BMRArticle = () => {
  return (
    <Card className="mt-8">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary">
          BMR Calculator: Understanding Your Basal Metabolic Rate
        </CardTitle>
      </CardHeader>
      <CardContent className="prose prose-slate dark:prose-invert max-w-none">
        <p className="text-muted-foreground">
          Using a <strong>BMR calculator</strong> is crucial for anyone looking to manage their weight and understand their body's energy needs. The Basal Metabolic Rate (BMR) represents the number of calories your body requires to maintain essential functions while at rest. This includes breathing, circulation, and cell production. Knowing your BMR helps you tailor your diet and exercise plans effectively.
        </p>

        <p>
          Think of your BMR as the energy your body uses when it's idling, much like a car that consumes fuel even when parked. For most people, BMR accounts for about 70% of total daily energy expenditure. The rest is used for physical activity and the digestion of food.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Why Use a BMR Calculator?</h3>
        <p>A BMR calculator provides insights that can significantly impact your health journey. Here are some reasons why it's beneficial:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Caloric Needs</strong>: It helps you understand how many calories you need to maintain, lose, or gain weight.</li>
          <li><strong>Personalised Nutrition</strong>: Knowing your BMR allows you to create a tailored nutrition plan that aligns with your fitness goals.</li>
          <li><strong>Progress Tracking</strong>: Regularly checking your BMR can help you monitor changes in metabolism as you lose or gain weight.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">How Does a BMR Calculator Work?</h3>
        <p>BMR calculators typically use several formulas based on individual characteristics like weight, height, age, and gender. Here are the most common formulas:</p>

        <div className="bg-muted p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">Mifflin-St Jeor Equation</h4>
          <p className="font-mono text-sm mb-2">For men: BMR = 10W + 6.25H - 5A + 5</p>
          <p className="font-mono text-sm">For women: BMR = 10W + 6.25H - 5A - 161</p>
          <p className="text-sm mt-2">
            Where: W = weight in kg, H = height in cm, A = age in years
          </p>
        </div>

        <div className="bg-muted p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">Revised Harris-Benedict Equation</h4>
          <p className="font-mono text-sm mb-2">For men: BMR = 13.397W + 4.799H - 5.677A + 88.362</p>
          <p className="font-mono text-sm">For women: BMR = 9.247W + 3.098H - 4.330A + 447.593</p>
        </div>

        <div className="bg-muted p-4 rounded-lg my-4">
          <h4 className="font-semibold mb-2">Katch-McArdle Formula</h4>
          <p className="font-mono text-sm">BMR = 370 + (21.6 × (1 - F)W)</p>
          <p className="text-sm mt-2">
            Where: F = body fat percentage, W = weight in kg
          </p>
        </div>

        <h3 className="text-xl font-semibold mt-6 mb-3">Factors Influencing BMR</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Muscle Mass</strong>: More muscle increases BMR because muscle tissue burns more calories than fat.</li>
          <li><strong>Age</strong>: As we age, our BMR tends to decrease due to loss of muscle mass.</li>
          <li><strong>Genetics</strong>: Hereditary traits can affect metabolic rate.</li>
          <li><strong>Weather</strong>: Cold environments can increase BMR as the body expends energy to maintain temperature.</li>
          <li><strong>Diet</strong>: Frequent small meals can boost metabolism, while starvation can lower it significantly.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Tips for Boosting Your BMR</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li><strong>Strength Training</strong>: Incorporate resistance exercises into your routine at least three times a week.</li>
          <li><strong>Stay Active</strong>: Engage in regular physical activity to keep your metabolism revved up.</li>
          <li><strong>Eat Enough Protein</strong>: Consuming adequate protein supports muscle repair and growth.</li>
          <li><strong>Hydrate Well</strong>: Proper hydration aids metabolic processes.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Conclusion</h3>
        <p>
          Using a <strong>BMR calculator</strong> is an effective way to understand your body's caloric needs better. It provides valuable insights that extend beyond just numbers on a scale. By knowing your BMR, you can make informed decisions about diet and exercise that align with your personal health objectives.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">FAQs</h3>
        <div className="space-y-4">
          <div>
            <p className="font-medium">Q1: How often should I check my BMR?</p>
            <p>Checking every few weeks or months is reasonable; it helps track progress without becoming obsessive.</p>
          </div>
          <div>
            <p className="font-medium">Q2: Can I rely solely on the calculator for my health?</p>
            <p>No, it's one tool among many; consider other factors like diet, exercise habits, and overall well-being.</p>
          </div>
          <div>
            <p className="font-medium">Q3: What if my results seem inaccurate?</p>
            <p>If the results don't match how you feel or look, consult with a healthcare provider or fitness professional for personalised advice.</p>
          </div>
        </div>

        <div className="mt-6 text-sm text-muted-foreground">
          <p className="font-medium">Citations:</p>
          <ol className="list-decimal pl-6 space-y-2">
            <li>
              <a href="https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/23388977/05254ad2-e98b-43e8-9aa5-0540d05e5afa/body-fat.txt" 
                 className="text-primary hover:underline">
                Body Fat and BMR Research Data
              </a>
            </li>
          </ol>
        </div>
      </CardContent>
    </Card>
  );
};

export default BMRArticle;
