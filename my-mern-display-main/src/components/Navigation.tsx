import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText, Code2 } from "lucide-react";

type NavItem = {
  label: string;
  href: string;
  icon?: ReactNode;
  download?: boolean;
};

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
    {
      label: "Resume",
      href: "/Muhammad-Bilal-Resume.pdf",
      icon: <FileText className="w-4 h-4" />,
      download: true,
    },
  ];

  const handleNavClick = (item: NavItem) => {
    if (item.download) {
      const link = document.createElement("a");
      link.href = item.href;
      link.download = "Muhammad-Bilal-Resume.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();

      setIsMobileMenuOpen(false);
      return;
    }

    if (item.href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(item.href);

      element?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border/60 shadow-lg shadow-black/5"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Portfolio Logo */}
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick({ label: "Home", href: "#" });
            }}
            className="group flex items-center gap-2.5 shrink-0"
            aria-label="Muhammad Bilal - Home"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-primary/10 border border-primary/20 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/20">
              <Code2 className="w-5 h-5" />
            </span>

            <span className="text-xl font-bold tracking-tight font-mono">
              <span className="text-foreground">&lt;M</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Bilal
              </span>
              <span className="text-foreground"> /&gt;</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-2 px-3 text-sm font-medium transition-all duration-200 ${
                  item.download
                    ? "ml-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-border/60 text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-[420px] opacity-100 pb-4"
              : "max-h-0 opacity-0 pointer-events-none"
          }`}
        >
          <div className="pt-3 border-t border-border/60 flex flex-col gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => handleNavClick(item)}
                className={`flex items-center gap-3 w-full rounded-lg py-3 px-4 text-sm font-medium transition-colors ${
                  item.download
                    ? "mt-2 border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
