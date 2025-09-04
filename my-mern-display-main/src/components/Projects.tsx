import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Built with MERN stack and Stripe integration.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics platform for social media management with real-time data visualization and automated reporting features.",
      tech: ["React", "Chart.js", "Node.js", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      tech: ["React", "Express", "MongoDB", "WebSockets", "JWT"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Real-time Chat Application",
      description: "Instant messaging platform with video calls, file sharing, and end-to-end encryption for secure communication.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "WebRTC"],
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Blog CMS Platform",
      description: "Content management system with markdown editor, SEO optimization, and multi-author support.",
      tech: ["React", "Express", "MongoDB", "Markdown", "SEO"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Fitness Tracking App",
      description: "Personal fitness tracker with workout plans, progress analytics, and nutrition monitoring.",
      tech: ["React Native", "Node.js", "MongoDB", "Charts", "REST API"],
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&h=400&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Showcasing full-stack applications built with the MERN stack
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card/50 backdrop-blur border-border/50 hover:shadow-card transition-all duration-300 hover:scale-[1.02] group"
            >
              <div className="h-48 overflow-hidden bg-gradient-dark">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="outline"
                      className="text-xs border-primary/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="terminal" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.demo, "_blank")}
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => window.open(project.github, "_blank")}
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;