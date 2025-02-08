import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface BreadcrumbProps {
  items: Array<{
    label: string;
    path?: string;
  }>;
}

const Breadcrumb = ({ items }: BreadcrumbProps) => {
  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
        <li>
          <Link to="/" className="hover:text-foreground">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4" />
            {item.path ? (
              <Link to={item.path} className="hover:text-foreground">
                {item.label}
              </Link>
            ) : (
              <span className="text-foreground">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
