import { Card } from "@/components/ui/card";
import { BodyFatForm } from "./BodyFatForm";
import BodyFatArticle from "./BodyFatArticle";
import Breadcrumb from "../Breadcrumb";

const BodyFatCalculator = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="space-y-8">
        <Breadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Body Fat Calculator" },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Body Fat Calculator</h1>
            <p className="mb-6">
              The Body Fat Calculator can be used to estimate your total body fat based on specific measurements.
              Use the "Metric Units" tab if you are more comfortable with the International System of Units (SI).
              This calculation is based on the U.S. Navy method, but also includes the calculation of body fat
              percentage using the BMI method (both of which are outlined below).
            </p>
            
            <BodyFatForm />
          </div>
          
          <div className="md:col-span-1">
            <Card className="p-4">
              <h2 className="text-xl font-semibold mb-4">Related Images</h2>
              <div className="aspect-video bg-gray-100 rounded-lg mb-4">
                {/* Space for Google Images */}
              </div>
            </Card>
          </div>
        </div>

        <BodyFatArticle />
      </div>
    </div>
  );
};

export default BodyFatCalculator;
