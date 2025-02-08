interface AgeCalculatorResultProps {
  age: string;
}

const AgeCalculatorResult = ({ age }: AgeCalculatorResultProps) => {
  return (
    <div className="calculator-result">
      Your age is: {age}
    </div>
  );
};

export default AgeCalculatorResult;
