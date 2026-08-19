import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Website",
      description:
        "Full-stack marketplace with real-time inventory, payment processing, and admin dashboard. Built with MERN stack and Stripe integration.",
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Debit/Credit card",
        "Redux",
      ],
      image: "../Images/ecommerce.png",
      demo: "https://splendid-biscuit-4dc539.netlify.app", // 🔗 live demo link
      github: "https://github.com/mubilal349/Islampur_Bazaar",
    },
    {
      title: "Blog website",
      description:
        "Analytics platform for social media management with real-time data visualization and automated reporting features.",
      tech: ["React", "Tailwind css"],
      image: "../Images/Blog.png",
      demo: "https://my-blog-alpha-rouge.vercel.app", // 🔗 your blog live demo
      github: "https://github.com/mubilal349/MyBlog",
    },
    {
      title: "Messaging Web App",
      description:
        "Built a real-time messaging web application using Laravel Reverb and WebRTC, featuring instant messaging, online/offline status indicators, real-time notifications, and secure peer-to-peer communication.",
      tech: [
        "Laravel",
        "LaravelReverb",
        "WebRTC",
        "Blade Component",
        "Tailwind css",
      ],
      image: "../Images/messaging-web-app.png",
      demo: "https://my-blog-alpha-rouge.vercel.app", // 🔗 your blog live demo
      github: "https://github.com/mubilal349/MyBlog",
    },
    {
      title: " Bit Blog Web App",
      description:
        "Bit Blog is a modern platform to share articles and insights. Stay updated with the latest posts and explore new topics daily.",
      tech: ["Laravel", "PHP", "Admin Panel", "Basic Auth", "Tailwind css"],
      image: "../Images/Bit Blog.png",
      demo: "https://my-blog-alpha-rouge.vercel.app", // 🔗 your blog live demo
      github: "https://github.com/mubilal349/MyBlog",
    },
    {
      title: "Bankist Website Design",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features.",
      tech: ["Html", "Css", "Js"],
      image: "../Images/Bankist website.png",
      demo: "https://bankist-website-design.vercel.app", // 🔗 example link
      github: "https://github.com/mubilal349/Bankist-website-design",
    },
    {
      title: "Pig Game",
      description:
        "Instant messaging platform with video calls, file sharing, and end-to-end encryption for secure communication.",
      tech: ["Html", "Css", "Js"],
      image: "../Images/pig game.png",
      demo: "https://pig-game-ten-ashy.vercel.app", // 🔗 example link
      github: "https://github.com/mubilal349/Pig-Game",
    },
    {
      title: "SteerLine",
      description:
        "Steerline’s e-commerce features include a dynamic product catalog with advanced filtering options, allowing users to easily find what they need..",
      tech: ["React", "Css", "Context api"],
      image: "../Images/steerline.png",
      demo: "https://steerline.co.uk", // 🔗 example link
      github: "https://github.com/mubilal349/my-app",
    },
    {
      title: "Nextjs Chatbot",
      description: "Chat bot that can give you the answer form openai api key",
      tech: ["Next js", "Openai API key integration", "Javascript", "Css"],
      image: "../Images/nextjschatbot.png",
      demo: "https://nextjs-chatbot-ynq1.vercel.app/", // 🔗 example link
      github: "https://github.com/mubilal349/Nextjs_chatbot",
    },
    {
      title: "BestMedex",
      description: "Medical Billing website build on wordpress Elementor",
      tech: [
        "Wordpress",
        "ChatBot integration",
        "Elementor",
        "Custom theme developement",
      ],
      image: "../Images/Bestmedex-project.png",
      demo: "https://bestmedex.com/",
      github: "https://bestmedex.com/",
    },
    {
      title: "InsureAmeri",
      description: "Medical related website using custom coding",
      tech: [
        "Wordpress custom-theme",
        "Custom Coding",
        "Elementor",
        "Custom theme developement",
      ],
      image: "../Images/insureameri-project-image.png",
      demo: "https://insureameri.com/",
      github: "https://github.com/mubilal349/insureAmeri",
    },
    {
      title: "Live weather Dashboard",
      description: "Displaying the weather of the city",
      tech: ["HTML", "CSS", "Js and integrated the API", "OpenWeather API"],
      image: "../Images/valid-search-desktop.png",
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/Live-pakistan-task-02",
    },
    {
      title: "Support AI",
      description: "questions answered locally",
      tech: ["Typescript", "Next.js", "Express.js and MongoDB", "REST APIs"],
      image: "../Images/support-ai.png",
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/support-ai",
    },
    {
      title: "Quartz website",
      description:
        "Construction related website that are doing the shop and cart functionality",
      tech: ["HTML", "CSS", "Javascript", "Json that are showing 200 products"],
      image: "../Images/quartz.png",
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/support-ai",
    },
    {
      title: "Marketing Agency website",
      description: "Marketing Agency related Website",
      tech: ["HTML", "CSS", "Javascript"],
      image: "../Images/marketing.png",
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/support-ai",
    },
    {
      title: "InvoiceFlow",
      description:
        "Full-stack invoice and business management system with invoice creation, customer management, expense tracking, PDF generation, analytics, authentication, and role-based access control.",
      tech: [
        "React",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "JWT",
        "REST API",
        "Axios",
        "CSS",
      ],
      image: "../Images/invoice-flow-li.png",
      demo: "https://cerulean-wisp-572a51.netlify.app/",
      github: "https://github.com/mubilal349/InvoiceFlow",
    },
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
