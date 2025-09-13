import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const roles = [
    "Front-end Developer",
    "Back-end Developer",
    "MERN Stack Developer",
  ];

  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const interval = setInterval(
      () => {
        if (!isDeleting) {
          // Typing
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.slice(0, charIndex + 1));
            setCharIndex((prev) => prev + 1);
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 1000);
          }
        } else {
          // Deleting
          if (charIndex > 0) {
            setDisplayText(currentRole.slice(0, charIndex - 1));
            setCharIndex((prev) => prev - 1);
          } else {
            // Move to next role
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    ); // faster delete

    return () => clearInterval(interval);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-glow animate-glow-pulse" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-lg md:text-xl text-primary font-mono mb-4 animate-fade-in">
          Hello, I'm
        </h2>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent animate-slide-up">
          Muhammad Bilal
        </h1>

        <div className="h-16 md:h-20 mb-8">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-mono text-foreground">
            <span className="inline-block">
              {displayText}
              <span className="border-r-2 border-primary animate-pulse ml-1"></span>
            </span>
          </h3>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Building scalable full-stack applications with MongoDB, Express.js,
          React, and Node.js. Passionate about creating efficient, user-centric
          solutions.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in">
          <Button
            variant="neon"
            size="lg"
            onClick={() => scrollToSection("projects")}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </Button>
        </div>

        <div className="flex gap-6 justify-center animate-fade-in">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:contact@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <button
        onClick={() => scrollToSection("skills")}
        className="absolute bottom-8 text-primary animate-bounce"
        aria-label="Scroll to skills"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
