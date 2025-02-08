const MortgageDocumentation = () => {
  return (
    <div className="mt-8 space-y-4 print:mt-4">
      <h2 className="text-xl font-semibold">How it Works</h2>
      <div className="space-y-4 text-muted-foreground">
        <p>
          The mortgage calculator uses the following formula to calculate your monthly payment:
        </p>
        <pre className="p-4 bg-secondary/50 rounded-lg overflow-x-auto font-mono text-sm">
          {`M = P * (r * (1 + r)^n) / ((1 + r)^n - 1)

Where:
M = Monthly Payment
P = Principal (Loan Amount)
r = Monthly Interest Rate (Annual Rate / 12)
n = Total Number of Payments (Years * 12)`}
        </pre>
        <p>
          For example, with a $300,000 loan at 3.5% interest for 30 years:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li>Monthly Payment: $1,347.13</li>
          <li>Total Payment: $484,968.26</li>
          <li>Total Interest: $184,968.26</li>
        </ul>
        <p>
          Note: This calculation assumes a fixed interest rate and does not include
          property taxes, insurance, or other fees that may be part of your actual
          mortgage payment.
        </p>
      </div>
    </div>
  );
};

export default MortgageDocumentation;
