import { cn } from "@/lib/utils";
import { Link } from "react-scroll";

export const Navigation = () => {
  const navItems = [
    { label: "About", to: "about" },
    { label: "Work Experience", to: "experience" },
    { label: "Projects", to: "projects" },
    { label: "Testimonials", to: "testimonials" },
    { label: "Contact", to: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <ul className="flex items-center justify-center space-x-8 h-16">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-64}
                duration={500}
                className={cn(
                  "text-sm cursor-pointer hover:text-primary transition-colors",
                  "hover:underline underline-offset-4"
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};