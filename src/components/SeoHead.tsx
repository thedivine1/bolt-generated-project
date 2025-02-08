import { Helmet } from "react-helmet";

interface SeoHeadProps {
  title?: string;
  description?: string;
  path?: string;
  calculator?: {
    name: string;
    description: string;
    category: string;
  };
}

const SeoHead = ({ 
  title = "GigaCalculate - Free Online Calculators",
  description = "Free online calculators for BMI, mortgage, and unit conversions. Easy to use and mobile-friendly.",
  path = "",
  calculator
}: SeoHeadProps) => {
  const baseUrl = "https://gigacalculate.com";
  const fullUrl = `${baseUrl}${path}`;

  const schemaData = calculator ? {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": calculator.name,
    "applicationCategory": "CalculatorApplication",
    "description": calculator.description,
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "category": calculator.category
  } : null;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="GigaCalculate" />
      
      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      {/* Schema.org JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SeoHead;
