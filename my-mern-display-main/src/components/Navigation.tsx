import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: "../Images/Muhammad-Bilal-MERN (1) (2).pdf", // resume file inside public/
      icon: <FileText className="w-4 h-4" />,
      download: true,
    },
  ];

  const handleNavClick = (item: any) => {
    if (item.download) {
      // open in new tab and download
      const link = document.createElement("a");
      link.href = item.href;
      link.download = "Muhammad-Bilal-Resume.pdf";
      link.click();
      return;
    }

    if (item.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(item.href);
      element?.scrollIntoView({ behavior: "smooth" });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent font-mono">
              &lt;MBilal /&gt;
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 flex flex-col items-center">
            {navItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavClick(item)}
                className="flex items-center justify-center gap-2 w-full py-2 px-4 text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
              >
                {item.icon && item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
