import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="mt-12 space-y-2">
      <Separator className="my-8" />
      <Link to="/" className="block text-blue-600 hover:text-blue-800 hover:underline">
        Home
      </Link>
      <Link to="/about" className="block text-blue-600 hover:text-blue-800 hover:underline">
        About Us
      </Link>
      <Link to="/privacy" className="block text-blue-600 hover:text-blue-800 hover:underline">
        Privacy Policy
      </Link>
      <Link to="/terms" className="block text-blue-600 hover:text-blue-800 hover:underline">
        Terms of Use
      </Link>
    </div>
  );
};

export default Footer;
