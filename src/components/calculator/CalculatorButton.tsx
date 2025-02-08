import React from 'react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CalculatorButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'destructive';
  className?: string;
}

const CalculatorButton = ({ onClick, children, variant = 'outline', className }: CalculatorButtonProps) => {
  return (
    <Button 
      variant={variant}
      onClick={onClick}
      className={cn("w-full text-sm h-8 md:h-9", className)}
    >
      {children}
    </Button>
  );
};

export default CalculatorButton;
