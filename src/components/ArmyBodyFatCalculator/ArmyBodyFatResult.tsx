import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Share2, Facebook, Twitter, Instagram } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Image from "@/components/ui/image";

interface ArmyBodyFatResultProps {
  result: number;
  gender: "male" | "female";
  age: number;
}

const getMaxAllowableBodyFat = (age: number, gender: string): number => {
  if (gender === "male") {
    if (age < 21) return 20;
    if (age < 28) return 22;
    if (age < 40) return 24;
    return 26;
  } else {
    if (age < 21) return 30;
    if (age < 28) return 32;
    if (age < 40) return 34;
    return 36;
  }
};

const ArmyBodyFatResult = ({ result, gender, age }: ArmyBodyFatResultProps) => {
  const maxAllowable = getMaxAllowableBodyFat(age, gender);
  const isCompliant = result <= maxAllowable;
  const difference = result - maxAllowable;
  
  const handleShare = async (platform: string) => {
    const text = `My Army Body Fat: ${result.toFixed(1)}%`;
    const url = window.location.href;
    
    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${url}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
        break;
      case 'instagram':
        toast({
          title: "Image copied",
          description: "You can now paste this image on Instagram",
        });
        break;
    }
  };

  return (
    <div className="relative mt-6">
      <Image
        src="/lovable-uploads/b2e69bb4-7799-43f8-846d-d8c2b6939bcf.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-10 rounded-lg"
      />
      
      <Card className="relative z-10 p-6 bg-white/90 backdrop-blur">
        <div className="space-y-4">
          <div className="bg-green-700 text-white p-4 rounded-t-lg">
            <h2 className="text-xl font-bold">Result</h2>
          </div>
          
          <div className="space-y-4 p-4">
            <h3 className="text-2xl font-bold text-green-700">
              Body Fat = {result.toFixed(1)}%
            </h3>
            
            <p className="text-lg">
              {isCompliant 
                ? "You are in compliance with the maximum allowable body fat percentage standard."
                : `You are not in compliance with the maximum allowable body fat percentage standard, which is ${maxAllowable}% for your age.`
              }
            </p>
            
            {!isCompliant && (
              <p className="text-lg">
                You need to reduce your body fat by {difference.toFixed(1)}% to meet the standard.
              </p>
            )}
            
            <div className="flex flex-wrap gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('twitter')}
              >
                <Twitter className="w-4 h-4 mr-2" />
                Share on Twitter
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('facebook')}
              >
                <Facebook className="w-4 h-4 mr-2" />
                Share on Facebook
              </Button>
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleShare('instagram')}
              >
                <Instagram className="w-4 h-4 mr-2" />
                Share on Instagram
              </Button>
            </div>
          </div>
        </div>
      </Card>
      
      <div className="mt-6 space-x-4">
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.location.href = '/bmi-calculator'}
        >
          BMI Calculator
        </Button>
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.location.href = '/calorie-calculator'}
        >
          Calorie Calculator
        </Button>
        <Button
          variant="default"
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => window.location.href = '/ideal-weight-calculator'}
        >
          Ideal Weight Calculator
        </Button>
      </div>
    </div>
  );
};

export default ArmyBodyFatResult;
