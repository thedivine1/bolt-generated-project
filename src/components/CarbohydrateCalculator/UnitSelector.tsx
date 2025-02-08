import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface UnitSelectorProps {
  value: "us" | "metric" | "other";
  onChange: (value: "us" | "metric" | "other") => void;
}

const UnitSelector = ({ value, onChange }: UnitSelectorProps) => {
  return (
    <Tabs value={value} onValueChange={(v) => onChange(v as "us" | "metric" | "other")}>
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="us">US Units</TabsTrigger>
        <TabsTrigger value="metric">Metric Units</TabsTrigger>
        <TabsTrigger value="other">Other Units</TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default UnitSelector;
