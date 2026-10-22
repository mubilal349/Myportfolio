import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";

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
        "Debit/Credit Card",
        "Redux",
      ],
      image: ["../Images/ecommerce.png"],
      demo: "https://splendid-biscuit-4dc539.netlify.app",
      github: "https://github.com/mubilal349/Islampur_Bazaar",
    },

    {
      title: "Blog Website",
      description:
        "Modern blogging platform with content management, responsive design, and an intuitive interface for publishing and exploring articles.",
      tech: ["React", "Tailwind CSS"],
      image: [
        "../Images/MyBlog-1.png",
        "../Images/MyBlog-2.png",
        "../Images/My-Blog-ManageUsers.png",
      ],
      demo: "https://extraordinary-arithmetic-40c28f.netlify.app/",
      github: "https://github.com/mubilal349/MyBlog",
    },

    {
      title: "Messaging Web App",
      description:
        "Built a real-time messaging web application using Laravel Reverb and WebRTC, featuring instant messaging, online/offline status indicators, real-time notifications, and secure peer-to-peer communication.",
      tech: [
        "Laravel",
        "Laravel Reverb",
        "WebRTC",
        "Blade Components",
        "Tailwind CSS",
      ],
      image: ["../Images/messaging-web-app.png"],
      demo: "https://my-blog-alpha-rouge.vercel.app",
      github: "https://github.com/mubilal349/Real-Chat-App",
    },

    {
      title: "Bit Blog Web App",
      description:
        "Bit Blog is a modern platform for sharing articles and insights. Stay updated with the latest posts and explore new topics daily.",
      tech: ["Laravel", "PHP", "Admin Panel", "Basic Auth", "Tailwind CSS"],
      image: ["../Images/Bit Blog.png"],
      demo: "https://my-blog-alpha-rouge.vercel.app",
      github: "https://github.com/mubilal349/MyBlog",
    },

    {
      title: "Bankist Website Design",
      description:
        "Modern banking website interface built with HTML, CSS, and JavaScript featuring interactive sections and smooth user interactions.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: ["../Images/Bankist website.png"],
      demo: "https://bankist-website-design.vercel.app",
      github: "https://github.com/mubilal349/Bankist-website-design",
    },

    {
      title: "Pig Game",
      description:
        "Interactive two-player dice game built with HTML, CSS, and JavaScript where players roll the dice and compete to reach the winning score.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: ["../Images/pig game.png"],
      demo: "https://pig-game-ten-ashy.vercel.app",
      github: "https://github.com/mubilal349/Pig-Game",
    },

    {
      title: "SteerLine",
      description:
        "E-commerce website featuring a dynamic product catalog with filtering options, shopping functionality, and a responsive user interface.",
      tech: ["React", "CSS", "Context API"],
      image: ["../Images/steerline.png"],
      demo: "https://steerline.co.uk",
      github: "https://github.com/mubilal349/my-app",
    },

    {
      title: "Next.js Chatbot",
      description:
        "AI-powered chatbot built with Next.js and OpenAI API integration that provides conversational responses to user questions.",
      tech: ["Next.js", "OpenAI API", "JavaScript", "CSS"],
      image: ["../Images/nextjschatbot.png"],
      demo: "https://nextjs-chatbot-ynq1.vercel.app/",
      github: "https://github.com/mubilal349/Nextjs_chatbot",
    },

    {
      title: "BestMedex",
      description:
        "Medical billing website built with WordPress and Elementor featuring custom theme development and chatbot integration.",
      tech: [
        "WordPress",
        "Chatbot Integration",
        "Elementor",
        "Custom Theme Development",
      ],
      image: ["../Images/Bestmedex-project.png"],
      demo: "https://bestmedex.com/",
      github: "https://bestmedex.com/",
    },

    {
      title: "InsureAmeri",
      description:
        "Medical-related website developed using WordPress with a custom theme, Elementor, and custom coding.",
      tech: ["WordPress", "Custom Theme", "Custom Coding", "Elementor"],
      image: ["../Images/insureameri-project-image.png"],
      demo: "https://insureameri.com/",
      github: "https://github.com/mubilal349/insureAmeri",
    },

    {
      title: "Live Weather Dashboard",
      description:
        "Weather dashboard that allows users to search for a city and view current weather information using a weather API.",
      tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      image: ["../Images/valid-search-desktop.png"],
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/Live-pakistan-task-02",
    },

    {
      title: "SupportAI",
      description:
        "AI-powered customer support SaaS platform with ticket management, AI assistance, real-time communication, notifications, SLA tracking, and role-based access.",
      tech: [
        "JavaScript",
        "React.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Socket.IO",
        "AI",
      ],
      image: [
        "../Images/support_ai.png",
        "../Images/SupportAI-CustomerDashboard.png",
        "../Images/SupportAI-AgentDashboard.png",
        "../Images/SupportAI-AdminDashboard.png",
      ],
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/support-ai",
    },

    {
      title: "Quartz Website",
      description:
        "Construction-related e-commerce website featuring a dynamic product catalog, shopping functionality, filtering, and dynamically rendered products.",
      tech: ["HTML", "CSS", "JavaScript", "JSON"],
      image: ["../Images/quartz.png"],
      demo: "https://soft-churros-5198f6.netlify.app/",
      github: "https://github.com/mubilal349/support-ai",
    },

    {
      title: "Marketing Agency Website",
      description:
        "Marketing agency website showcasing landing page sections, services, business information, and a modern responsive interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: ["../Images/marketing.png"],
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
      image: [
        "../Images/invoice-flow-li.png",
        "../Images/invoiceFlow-invoices.png",
        "../Images/invoiceFlow-expenses.png",
        "../Images/invoiceFlow-analytics.png",
        "../Images/invoiceFlow-settings.png",
      ],
      demo: "https://cerulean-wisp-572a51.netlify.app/",
      github: "https://github.com/mubilal349/InvoiceFlow",
    },

    {
      title: "SecureHub",
      description:
        "Full-stack user management and authentication platform with user creation, user tracking, authentication, and role-based access control.",
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
      image: [
        "../Images/securehub.png",
        "../Images/securehub-2.png",
        "../Images/securehub-3.png",
        "../Images/securehub-4.png",
      ],
      demo: "https://cerulean-wisp-572a51.netlify.app/",
      github: "https://github.com/mubilal349/SecureHub",
    },
    {
      title: "RouteMate",
      description:
        "Modern smart trip planning platform that helps users create and manage trips, search destinations, build day-by-day itineraries, organize activities, manage hotels and transportation, track travel budgets, and save trips in a responsive interface.",
      tech: [
        "React",
        "JavaScript",
        "React Router",
        "Tailwind CSS",
        "Axios",
        "REST API",
        "Interactive Maps",
        "Drag & Drop",
        "Responsive Design",
      ],
      image: [
        "../Images/RouteMate/routeMate-HomePage.png",
        "../Images/RouteMate/RouteMate-login.png",
        "../Images/RouteMate/RouteMate-register.png",
        "../Images/RouteMate/routemate-Overview.png",
        "../Images/RouteMate/routemate-MyTrip.png",
        "../Images/RouteMate/routemate-Hotels.png",
        "../Images/RouteMate/routemate-Budget.png",
        "../Images/RouteMate/routemate-Transport.png",
        "../Images/RouteMate/routemate-Settings.png",
        "../Images/RouteMate/routemate-Notification.png",
      ],
      demo: "https://candid-strudel-4b3548.netlify.app/",
      github: "https://github.com/mubilal349/Routemate",
    },

    {
      title: "FleetFlow",
      status: "Coming Soon",
      description:
        "Modern fleet management platform designed to streamline vehicle operations, driver management, trip scheduling, vehicle assignments, inspections, maintenance tracking, and reporting. Built with a scalable microservices architecture, secure authentication, role-based access control, and a responsive dashboard for managing fleet operations efficiently.",
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Fastify",
        "MongoDB",
        "Microservices",
        "JWT Authentication",
        "REST APIs",
        "Role-Based Access Control",
      ],
      image: [
        "../Images/FleetFlow/fleetflow-Homepage.png",
        "../Images/FleetFlow/fleetflow-Dashboard.png",
        "../Images/FleetFlow/fleetflow-Vehicles.png",
        "../Images/FleetFlow/fleetflow-Drivers.png",
        "../Images/FleetFlow/fleetflow-Assignments.png",
        "../Images/FleetFlow/fleetflow-Trips.png",
        "../Images/FleetFlow/fleetflow-Inspections.png",
        "../Images/FleetFlow/fleetflow-Maintenance.png",
        "../Images/FleetFlow/fleetflow-Reports.png",
      ],
      demo: "",
      github: "https://github.com/mubilal349/FleetFlow",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Showcasing full-stack applications, web platforms, and modern projects
          built with different technologies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = Array.isArray(project.image) ? project.image : [project.image];

  const hasMultipleImages = images.length > 1;

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card
      className="overflow-hidden bg-card/50 backdrop-blur border-border/50
                 hover:shadow-card transition-all duration-300
                 hover:scale-[1.02] group"
    >
      {/* =====================================================
          IMAGE CAROUSEL
      ===================================================== */}

      <div className="relative h-48 overflow-hidden bg-gradient-dark">
        <img
          src={images[currentImage]}
          alt={`${project.title} screenshot ${currentImage + 1}`}
          className="w-full h-full object-cover
                     opacity-70 group-hover:opacity-100
                     transition-all duration-500"
        />

        {/* Coming Soon Badge — top-right */}
        {project.status === "Coming Soon" && (
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/75 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-lg backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              Coming Soon
            </span>
          </div>
        )}

        {/* Previous Button */}
        {hasMultipleImages && (
          <button
            type="button"
            onClick={previousImage}
            aria-label="Previous project image"
            className="absolute left-2 top-1/2 -translate-y-1/2
                       w-9 h-9 rounded-full
                       bg-black/50 backdrop-blur-sm
                       text-white flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       transition-all duration-300
                       hover:bg-black/80 hover:scale-110"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Next Button */}
        {hasMultipleImages && (
          <button
            type="button"
            onClick={nextImage}
            aria-label="Next project image"
            className="absolute right-2 top-1/2 -translate-y-1/2
                       w-9 h-9 rounded-full
                       bg-black/50 backdrop-blur-sm
                       text-white flex items-center justify-center
                       opacity-0 group-hover:opacity-100
                       transition-all duration-300
                       hover:bg-black/80 hover:scale-110"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        {/* Image Counter */}
        {hasMultipleImages && (
          <div
            className="absolute top-2 right-2
                       px-2 py-1 rounded-md
                       bg-black/60 backdrop-blur-sm
                       text-white text-xs"
          >
            {currentImage + 1} / {images.length}
          </div>
        )}

        {/* Carousel Dots */}
        {hasMultipleImages && (
          <div
            className="absolute bottom-3 left-1/2
                       -translate-x-1/2
                       flex items-center gap-1.5"
          >
            {images.map((_, imageIndex) => (
              <button
                key={imageIndex}
                type="button"
                onClick={() => setCurrentImage(imageIndex)}
                aria-label={`View image ${imageIndex + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImage === imageIndex
                    ? "w-5 bg-white"
                    : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* =====================================================
          PROJECT CONTENT
      ===================================================== */}

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">
          {project.title}
        </h3>

        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
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

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="terminal"
            size="sm"
            className="flex-1"
            onClick={() =>
              window.open(project.demo, "_blank", "noopener,noreferrer")
            }
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            Demo
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="flex-1"
            onClick={() =>
              window.open(project.github, "_blank", "noopener,noreferrer")
            }
          >
            <Github className="w-4 h-4 mr-1" />
            Code
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default Projects;
