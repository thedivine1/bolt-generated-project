import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogIn, Map, Info, Calculator, Heart, DollarSign, Brain, Percent } from "lucide-react";
import { useMediaQuery } from "@/hooks/use-mobile";

const Navigation = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <>
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-bold">GigaCalculate.com</span>
          </Link>
          <div className="flex-1" />
          <div className="hidden md:flex items-center gap-4">
            <Link to="/about-us">
              <Button variant="ghost" size="sm">
                <Info className="mr-2 h-4 w-4" />
                About Us
              </Button>
            </Link>
            <Link to="/sitemap">
              <Button variant="ghost" size="sm">
                <Map className="mr-2 h-4 w-4" />
                Sitemap
              </Button>
            </Link>
            <Button variant="outline" size="sm">
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {isMobile && (
        <div className="fixed bottom-0 left-0 right-0 border-t bg-background z-50">
          <div className="grid grid-cols-5 gap-1 p-2">
            <Link to="/mortgage" className="flex flex-col items-center p-2 text-xs">
              <DollarSign className="h-5 w-5" />
              <span>Finance</span>
            </Link>
            <Link to="/bmi" className="flex flex-col items-center p-2 text-xs">
              <Heart className="h-5 w-5" />
              <span>Health</span>
            </Link>
            <Link to="/" className="flex flex-col items-center p-2 text-xs">
              <Calculator className="h-5 w-5" />
              <span>All</span>
            </Link>
            <Link to="/converter" className="flex flex-col items-center p-2 text-xs">
              <Brain className="h-5 w-5" />
              <span>Math</span>
            </Link>
            <Link to="/percentage" className="flex flex-col items-center p-2 text-xs">
              <Percent className="h-5 w-5" />
              <span>Tax</span>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
