import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Breadcrumb from "./Breadcrumb";

const AboutUs = () => {
  useEffect(() => {
    // Handle hash-based navigation
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={[{ label: "About Us" }]} />
      <h1 className="text-3xl font-bold mb-8">About Us</h1>

      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-4">About ThisCalculator.com</h2>
          <p className="text-muted-foreground">
            ThisCalculator.com is your trusted resource for online calculations. We provide a wide range of calculators
            to help you make informed decisions about your health, finances, and more. Our mission is to make complex
            calculations simple and accessible to everyone.
          </p>
        </Card>

        <Separator className="my-8" />

        <Card className="p-6" id="privacy">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <div className="prose prose-sm max-w-none">
            <p>Exportex LLP operates the thiscalculator.com website, which provides the SERVICE.</p>

            <p>This page is used to inform website visitors regarding our policies with the collection, use, and disclosure of Personal Information if anyone decided to use our Service.</p>

            <p>If you choose to use our Service, then you agree to the collection and use of information in relation to this policy. The Personal Information that we collect is used for providing and improving the Service. We will not use or share your information with anyone except as described in this Privacy Policy.</p>

            <h3 className="text-xl font-semibold mt-6 mb-3">Information Collection and Use</h3>
            <p>We take and respect your privacy seriously. We may collect information via cookie or weblog. This is to customize services and enhance customer satisfaction.</p>

            <p>The data we collect are:</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Log Data</h4>
            <p>We want to inform you that whenever you visit our Service, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Cookies and Third-Party Advertising</h4>
            <p>Cookies are files with a small amount of data that is commonly used an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive.</p>

            <p>Our website uses these "cookies" to collect information and to improve our Service. You have the option to either accept or refuse these cookies, and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our Service.</p>

            <p>We allow third-party companies to serve ads and/or collect certain anonymous information when you visit our website. These companies may use non-personally identifiable information (e.g., click stream information, browser type, time and date, subject of advertisements clicked or scrolled over) during your visits to this and other Web sites in order to provide advertisements about goods and services likely to be of greater interest to you. These companies typically use a cookie or third-party web beacon to collect this information. To learn more about this behavioral advertising practice or to opt-out of this type of advertising, please visit optout.networkadvertising.org.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Web Forms on Our Site</h4>
            <p>The information you fill and submit by the web forms on our site enables the calculators to function.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Security</h4>
            <p>We value your trust in providing us your Personal Information. Thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the Internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Links to Other Sites</h4>
            <p>Our Service may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Children's Privacy</h4>
            <p>Our Services do not address anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. In the case we discover that a child under 13 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to take the necessary actions.</p>

            <h4 className="text-lg font-semibold mt-4 mb-2">Changes to This Privacy Policy</h4>
            <p>We reserve the right to update this privacy policy with or without notice. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page. These changes are effective immediately, after they are posted on this page.</p>
          </div>
        </Card>

        <Separator className="my-8" />

        <Card className="p-6" id="terms">
          <h2 className="text-2xl font-semibold mb-4">Terms of Use</h2>
          <div className="prose prose-sm max-w-none">
            <p>By accessing and using ThisCalculator.com, you accept and agree to be bound by the terms and provision of this agreement.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Use License</h3>
            <p>Permission is granted to temporarily access the calculators and services on ThisCalculator.com for personal, non-commercial transitory viewing only.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer</h3>
            <p>The calculators and information on ThisCalculator.com are provided "as is". We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">Limitations</h3>
            <p>In no event shall ThisCalculator.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on ThisCalculator.com, even if ThisCalculator.com or a ThisCalculator.com authorized representative has been notified orally or in writing of the possibility of such damage.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AboutUs;
