import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import BMICalculator from "./components/BMICalculator";
import MortgageCalculator from "./components/MortgageCalculator";
import UnitConverter from "./components/UnitConverter";
import BodyFatCalculator from "./components/BodyFatCalculator";
import BMRCalculator from "./components/BMRCalculator";
import CalorieCalculator from "./components/CalorieCalculator";
import MacroCalculator from "./components/MacroCalculator";
import IdealWeightCalculator from "./components/IdealWeightCalculator";
import ArmyBodyFatCalculator from "./components/ArmyBodyFatCalculator";
import LeanBodyMassCalculator from "./components/LeanBodyMassCalculator";
import HealthyWeightCalculator from "./components/HealthyWeightCalculator";
import CarbohydrateCalculator from "./components/CarbohydrateCalculator";
import AboutUs from "./components/AboutUs";
import Sitemap from "./components/Sitemap";
import AgeCalculator from "./components/AgeCalculator";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/">
        <div className="min-h-screen pb-16 md:pb-0">
          <Navigation />
          <main className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/bmi" element={<BMICalculator />} />
              <Route path="/mortgage" element={<MortgageCalculator />} />
              <Route path="/converter" element={<UnitConverter />} />
              <Route path="/body-fat" element={<BodyFatCalculator />} />
              <Route path="/bmr" element={<BMRCalculator />} />
              <Route path="/calories" element={<CalorieCalculator />} />
              <Route path="/macro" element={<MacroCalculator />} />
              <Route path="/ideal-weight" element={<IdealWeightCalculator />} />
              <Route path="/army-body-fat" element={<ArmyBodyFatCalculator />} />
              <Route path="/lean-body-mass" element={<LeanBodyMassCalculator />} />
              <Route path="/healthy-weight" element={<HealthyWeightCalculator />} />
              <Route path="/carbohydrate" element={<CarbohydrateCalculator />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/sitemap" element={<Sitemap />} />
              <Route path="/age" element={<AgeCalculator />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
