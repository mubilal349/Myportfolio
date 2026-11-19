import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Star,
  X,
  ImageOff,
} from "lucide-react";

/* =========================================================
   TYPES & DATA
========================================================= */

type Category = "Full-Stack" | "Frontend" | "WordPress" | "AI";

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string[];
  demo: string;
  github: string;
  categories: Category[];
  featured?: boolean;
  status?: "Coming Soon";
}

const FILTERS: ("All" | Category)[] = [
  "All",
  "Full-Stack",
  "Frontend",
  "WordPress",
  "AI",
];

const INITIAL_VISIBLE = 6;
const MAX_VISIBLE_TECH = 5;

const projects: Project[] = [
  {
    title: "FleetFlow",
    status: "Coming Soon",
    featured: true,
    categories: ["Full-Stack"],
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
      "../Images/FleetFlow/FleetFlow-homepage.png",
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
  {
    title: "RouteMate",
    featured: true,
    categories: ["Frontend"],
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
    title: "SupportAI",
    featured: true,
    categories: ["Full-Stack", "AI"],
    description:
      "AI-powered customer support SaaS platform with ticket management, AI assistance, real-time communication, notifications, SLA tracking, and role-based access.",
    tech: [
      "JavaScript",
      "React.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Socket.IO",
      "RAG",
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
    title: "InvoiceFlow",
    featured: true,
    categories: ["Full-Stack"],
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
    categories: ["Full-Stack"],
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
    title: "E-Commerce Website",
    categories: ["Full-Stack"],
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
    title: "Messaging Web App",
    categories: ["Full-Stack"],
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
    title: "Next.js Chatbot",
    categories: ["AI", "Frontend"],
    description:
      "AI-powered chatbot built with Next.js and OpenAI API integration that provides conversational responses to user questions.",
    tech: ["Next.js", "OpenAI API", "JavaScript", "CSS"],
    image: ["../Images/nextjschatbot.png"],
    demo: "https://nextjs-chatbot-ynq1.vercel.app/",
    github: "https://github.com/mubilal349/Nextjs_chatbot",
  },
  {
    title: "Bit Blog Web App",
    categories: ["Full-Stack"],
    description:
      "Bit Blog is a modern platform for sharing articles and insights. Stay updated with the latest posts and explore new topics daily.",
    tech: ["Laravel", "PHP", "Admin Panel", "Basic Auth", "Tailwind CSS"],
    image: ["../Images/Bit Blog.png"],
    demo: "https://my-blog-alpha-rouge.vercel.app",
    github: "https://github.com/mubilal349/MyBlog",
  },
  {
    title: "Blog Website",
    categories: ["Frontend"],
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
    title: "SteerLine",
    categories: ["Frontend"],
    description:
      "E-commerce website featuring a dynamic product catalog with filtering options, shopping functionality, and a responsive user interface.",
    tech: ["React", "CSS", "Context API"],
    image: ["../Images/steerline.png"],
    demo: "https://steerline.co.uk",
    github: "https://github.com/mubilal349/my-app",
  },
  {
    title: "BestMedex",
    categories: ["WordPress"],
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
    github: "",
  },
  {
    title: "InsureAmeri",
    categories: ["WordPress"],
    description:
      "Medical-related website developed using WordPress with a custom theme, Elementor, and custom coding.",
    tech: ["WordPress", "Custom Theme", "Custom Coding", "Elementor"],
    image: ["../Images/insureameri-project-image.png"],
    demo: "https://insureameri.com/",
    github: "https://github.com/mubilal349/insureAmeri",
  },
  {
    title: "Quartz Website",
    categories: ["Frontend"],
    description:
      "Construction-related e-commerce website featuring a dynamic product catalog, shopping functionality, filtering, and dynamically rendered products.",
    tech: ["HTML", "CSS", "JavaScript", "JSON"],
    image: ["../Images/quartz.png"],
    demo: "https://soft-churros-5198f6.netlify.app/",
    github: "https://github.com/mubilal349/support-ai",
  },
  {
    title: "Marketing Agency Website",
    categories: ["Frontend"],
    description:
      "Marketing agency website showcasing landing page sections, services, business information, and a modern responsive interface.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ["../Images/marketing.png"],
    demo: "https://soft-churros-5198f6.netlify.app/",
    github: "https://github.com/mubilal349/support-ai",
  },
  {
    title: "Bankist Website Design",
    categories: ["Frontend"],
    description:
      "Modern banking website interface built with HTML, CSS, and JavaScript featuring interactive sections and smooth user interactions.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ["../Images/Bankist website.png"],
    demo: "https://bankist-website-design.vercel.app",
    github: "https://github.com/mubilal349/Bankist-website-design",
  },
  {
    title: "Live Weather Dashboard",
    categories: ["Frontend"],
    description:
      "Weather dashboard that allows users to search for a city and view current weather information using a weather API.",
    tech: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
    image: ["../Images/valid-search-desktop.png"],
    demo: "https://soft-churros-5198f6.netlify.app/",
    github: "https://github.com/mubilal349/Live-pakistan-task-02",
  },
  {
    title: "Pig Game",
    categories: ["Frontend"],
    description:
      "Interactive two-player dice game built with HTML, CSS, and JavaScript where players roll the dice and compete to reach the winning score.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: ["../Images/pig game.png"],
    demo: "https://pig-game-ten-ashy.vercel.app",
    github: "https://github.com/mubilal349/Pig-Game",
  },
];

const openLink = (url: string) =>
  window.open(url, "_blank", "noopener,noreferrer");

/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  const [filter, setFilter] = useState<"All" | Category>("All");
  const [showAll, setShowAll] = useState(false);

  const counts = useMemo(() => {
    const result: Record<string, number> = { All: projects.length };
    projects.forEach((p) =>
      p.categories.forEach((c) => (result[c] = (result[c] ?? 0) + 1)),
    );
    return result;
  }, []);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? projects
        : projects.filter((p) => p.categories.includes(filter)),
    [filter],
  );

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_VISIBLE);
  const hiddenCount = filtered.length - visible.length;

  const changeFilter = (next: "All" | Category) => {
    setFilter(next);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>

        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Showcasing full-stack applications, web platforms, and modern projects
          built with different technologies.
        </p>

        {/* Filters */}
        <div
          role="tablist"
          aria-label="Filter projects by category"
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {FILTERS.map((item) => {
            const active = filter === item;
            return (
              <button
                key={item}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => changeFilter(item)}
                className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium
                            transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                            ${
                              active
                                ? "border-primary bg-primary/15 text-foreground shadow-card"
                                : "border-border/50 bg-card/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            }`}
              >
                {item}
                <span
                  className={`rounded-full px-1.5 text-xs ${
                    active
                      ? "bg-primary/25 text-foreground"
                      : "bg-border/40 text-muted-foreground"
                  }`}
                >
                  {counts[item] ?? 0}
                </span>
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div
          key={filter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500"
        >
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>

        {/* Show more / less */}
        {filtered.length > INITIAL_VISIBLE && (
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={() => setShowAll((prev) => !prev)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show fewer projects"
                : `Show ${hiddenCount} more project${hiddenCount > 1 ? "s" : ""}`}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

/* =========================================================
   PROJECT CARD
========================================================= */

const ProjectCard = ({ project }: { project: Project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = project.image;
  const hasMultipleImages = images.length > 1;
  const isComingSoon = project.status === "Coming Soon";

  const hasDemo = Boolean(project.demo) && !isComingSoon;
  const hasCode = project.github.includes("github.com");

  const visibleTech = project.tech.slice(0, MAX_VISIBLE_TECH);
  const extraTech = project.tech.length - visibleTech.length;

  const next = () => setCurrentImage((p) => (p + 1) % images.length);
  const prev = () =>
    setCurrentImage((p) => (p - 1 + images.length) % images.length);

  const arrowClass = `absolute top-1/2 -translate-y-1/2 w-9 h-9 rounded-full
                      bg-black/50 backdrop-blur-sm text-white
                      flex items-center justify-center
                      opacity-0 group-hover:opacity-100 focus-visible:opacity-100
                      transition-all duration-300 hover:bg-black/80 hover:scale-110`;

  return (
    <>
      <Card
        className="overflow-hidden bg-card/50 backdrop-blur border-border/50
                   hover:shadow-card transition-all duration-300
                   hover:scale-[1.02] group flex flex-col"
      >
        {/* ---------- Image carousel ---------- */}
        <div className="relative h-48 overflow-hidden bg-gradient-dark">
          {failed[currentImage] ? (
            <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-muted-foreground">
              <ImageOff className="w-8 h-8" />
              <span className="text-xs">Preview unavailable</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setLightboxOpen(true)}
              aria-label={`Enlarge ${project.title} screenshot`}
              className="block w-full h-full cursor-zoom-in"
            >
              <img
                src={images[currentImage]}
                alt={`${project.title} screenshot ${currentImage + 1}`}
                loading="lazy"
                onError={() =>
                  setFailed((f) => ({ ...f, [currentImage]: true }))
                }
                className="w-full h-full object-cover opacity-70
                           group-hover:opacity-100 group-hover:scale-105
                           transition-all duration-500"
              />
            </button>
          )}

          {/* Top-left: featured */}
          {project.featured && (
            <span
              className="absolute top-3 left-3 z-20 inline-flex items-center gap-1.5 rounded-full
                         border border-primary/40 bg-black/70 px-2.5 py-1 text-xs font-semibold
                         text-foreground backdrop-blur-md"
            >
              <Star className="w-3 h-3 fill-current text-primary" />
              Featured
            </span>
          )}

          {/* Top-right: coming soon, else counter */}
          {isComingSoon ? (
            <div className="absolute top-3 right-3 z-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-black/75 px-3 py-1.5 text-xs font-bold text-amber-300 shadow-lg backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 motion-safe:animate-pulse" />
                Coming Soon
              </span>
            </div>
          ) : (
            hasMultipleImages && (
              <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-black/60 backdrop-blur-sm text-white text-xs">
                {currentImage + 1} / {images.length}
              </div>
            )
          )}

          {/* Zoom hint */}
          <div
            className="pointer-events-none absolute bottom-3 right-3 w-8 h-8 rounded-full
                       bg-black/50 backdrop-blur-sm text-white flex items-center justify-center
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Maximize2 className="w-4 h-4" />
          </div>

          {hasMultipleImages && (
            <>
              <button
                type="button"
                onClick={prev}
                aria-label="Previous project image"
                className={`${arrowClass} left-2`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next project image"
                className={`${arrowClass} right-2`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setCurrentImage(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentImage === i
                        ? "w-5 bg-white"
                        : "w-2 bg-white/50 hover:bg-white/80"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* ---------- Content ---------- */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.categories.map((c) => (
              <span key={c} className="text-xs font-medium text-primary">
                {c}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 text-foreground">
            {project.title}
          </h3>

          <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-5">
            {visibleTech.map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="text-xs border-primary/30"
              >
                {tech}
              </Badge>
            ))}
            {extraTech > 0 && (
              <Badge
                variant="outline"
                title={project.tech.slice(MAX_VISIBLE_TECH).join(", ")}
                className="text-xs border-border/50 text-muted-foreground"
              >
                +{extraTech} more
              </Badge>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-auto">
            <Button
              variant="terminal"
              size="sm"
              className="flex-1"
              disabled={!hasDemo}
              onClick={() => hasDemo && openLink(project.demo)}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              {isComingSoon ? "Coming soon" : "Demo"}
            </Button>

            {hasCode && (
              <Button
                variant="outline"
                size="sm"
                className="flex-1"
                onClick={() => openLink(project.github)}
              >
                <Github className="w-4 h-4 mr-1" />
                Code
              </Button>
            )}
          </div>
        </div>
      </Card>

      {lightboxOpen && (
        <Lightbox
          title={project.title}
          images={images}
          index={currentImage}
          onChange={setCurrentImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
};

/* =========================================================
   LIGHTBOX
   Rendered in a portal so the card's hover transform
   can't break `position: fixed`.
========================================================= */

interface LightboxProps {
  title: string;
  images: string[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox = ({
  title,
  images,
  index,
  onChange,
  onClose,
}: LightboxProps) => {
  const count = images.length;
  const go = (delta: number) => onChange((index + delta + count) % count);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && count > 1) onChange((index + 1) % count);
      if (e.key === "ArrowLeft" && count > 1)
        onChange((index - 1 + count) % count);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, count, onChange, onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} screenshots`}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-black/90 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close preview"
        className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 text-white
                   flex items-center justify-center hover:bg-white/20 transition-colors"
      >
        <X className="w-5 h-5" />
      </button>

      <div
        className="text-center text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="font-semibold">{title}</p>
        {count > 1 && (
          <p className="text-xs text-white/60">
            {index + 1} / {count}
          </p>
        )}
      </div>

      <div
        className="relative flex w-full max-w-5xl items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[index]}
          alt={`${title} screenshot ${index + 1}`}
          className="max-h-[70vh] w-auto max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
        />

        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous image"
              className="absolute left-2 w-10 h-10 rounded-full bg-black/60 text-white
                         flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next image"
              className="absolute right-2 w-10 h-10 rounded-full bg-black/60 text-white
                         flex items-center justify-center hover:bg-black/90 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}
      </div>

      {count > 1 && (
        <div
          className="flex max-w-full gap-2 overflow-x-auto pb-1"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => onChange(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-14 w-24 shrink-0 overflow-hidden rounded-md border-2 transition-all ${
                i === index
                  ? "border-primary opacity-100"
                  : "border-transparent opacity-50 hover:opacity-90"
              }`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>,
    document.body,
  );
};

export default Projects;
