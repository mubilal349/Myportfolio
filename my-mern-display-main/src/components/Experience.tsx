import { useEffect, useRef, useState, type ComponentType } from "react";
import { createPortal } from "react-dom";
import { Card } from "@/components/ui/card";
import {
  Calendar,
  MapPin,
  Building2,
  Code,
  Database,
  Globe,
  Users2,
  Trophy,
  CheckCircle,
  Rocket,
  Code2,
  FileText,
  ExternalLink,
  ChevronDown,
  X,
} from "lucide-react";

/* =========================================================
   TYPES & DATA
========================================================= */

type IconType = ComponentType<{ className?: string }>;

interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  type:
    | "Full-time"
    | "On-site"
    | "Part-time"
    | "Contract"
    | "Freelance"
    | "Internship";
  description: string;
  achievements: string[];
  technologies: string[];
  icon: IconType;
  certificate?: string;
}

interface Skill {
  name: string;
  level: number;
  icon: IconType;
}

const VISIBLE_ACHIEVEMENTS = 3;

// Newest first, so the timeline reads from the latest role down.
const experiences: Experience[] = [
  {
    id: 5,
    company: "WebEra Solutions",
    position: "Front-End Developer Intern",
    location: "Remote",
    duration: "Sep 2026 - Oct 2026",
    type: "Internship",
    description:
      "Completed a front-end development internship focused on building responsive and interactive web interfaces using HTML, CSS, JavaScript, and React.",
    achievements: [
      "Completed front-end development internship training",
      "Built responsive user interfaces using HTML and CSS",
      "Implemented interactive functionality using JavaScript",
      "Developed reusable UI components with React",
      "Received an internship completion certificate",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    icon: Code2,
    certificate: "/Images/certificates/webera-frontend-certificate.png",
  },
  {
    id: 3,
    company: "All Medex LLC",
    position: "Full Stack Developer & WordPress Developer",
    location: "Rawalpindi, Pakistan",
    duration: "Jan 2026 - Apr 2026",
    type: "On-site",
    description:
      "Built and maintained websites using WordPress and custom development, while contributing to full-stack application development.",
    achievements: [
      "Delivered MVP applications within project deadlines",
      "Implemented real-time features using Socket.io",
      "Built authentication and authorization systems",
      "Worked on database query optimization",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Socket.io",
      "JWT",
      "WordPress",
    ],
    icon: Rocket,
  },
  {
    id: 2,
    company: "RCMB LLC",
    position: "Web Developer",
    location: "Rawalpindi, Punjab",
    duration: "Dec 2025 - Jan 2026",
    type: "Full-time",
    description:
      "Developed and maintained WordPress websites with Google Sheets integration.",
    achievements: [
      "Built responsive medical billing websites",
      "Worked on website performance optimization",
      "Collaborated with design teams to implement responsive interfaces",
      "Integrated chatbot functionality",
    ],
    technologies: [
      "WordPress",
      "Elementor",
      "Google Sheets",
      "Custom Theme Development",
    ],
    icon: Code,
  },
  {
    id: 1,
    company: "Elite Marketing Technology Pvt. Ltd., Rawalpindi",
    position: "Full Stack Developer Intern",
    location: "Rawalpindi, Punjab",
    duration: "Sep 2025 - Dec 2025",
    type: "Full-time",
    description:
      "Developed scalable websites using the MERN stack, collaborating with cross-functional teams to deliver software solutions.",
    achievements: [
      "Worked on application performance optimization",
      "Learned Git, GitHub, and deployment workflows",
      "Implemented chatbot integration with websites",
      "Learned WebSockets and built a chat application using Laravel Reverb",
    ],
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
      "Vercel",
      "Netlify",
    ],
    icon: Building2,
  },
  {
    id: 4,
    company: "Kamyab Jawan Markaz, Swat",
    position: "Junior Web Developer",
    location: "Swat, Khyber Pakhtunkhwa",
    duration: "Oct 2023 - Apr 2024",
    type: "Internship",
    description:
      "Started my professional journey as an intern, learning development practices and contributing to projects.",
    achievements: [
      "Successfully completed startup projects",
      "Learned version control and collaborative development",
      "Gained experience with waterfall development methodologies",
      "Received mentorship from senior developers",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React", "Git", "Figma"],
    icon: Users2,
  },
];

const skills: Skill[] = [
  { name: "Frontend Development", level: 90, icon: Globe },
  { name: "Backend Development", level: 85, icon: Database },
  { name: "Full Stack Integration", level: 88, icon: Code },
  { name: "Team Leadership", level: 75, icon: Users2 },
];

const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    "Full-time":
      "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
    "On-site": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    "Part-time":
      "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    Contract:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
    Freelance:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
    Internship: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
  };
  return colors[type] || colors["Full-time"];
};

/* =========================================================
   HOOKS & SMALL HELPERS
========================================================= */

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/** True once the element has scrolled into view (fires once). */
const useInView = <T extends HTMLElement>(threshold = 0.3) => {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined" || prefersReducedMotion()) {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
};

/** Counts up to `value` once `start` is true. */
const CountUp = ({
  value,
  suffix = "",
  start,
}: {
  value: number;
  suffix?: string;
  start: boolean;
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (prefersReducedMotion()) {
      setDisplay(value);
      return;
    }
    const duration = 1200;
    const t0 = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return (
    <>
      {display}
      {suffix}
    </>
  );
};

/* =========================================================
   EXPERIENCE SECTION
========================================================= */

const Experience = () => {
  const skillsView = useInView<HTMLDivElement>();
  const statsView = useInView<HTMLDivElement>();

  const stats = [
    { value: 2, suffix: "+", label: "Years Experience", color: "text-primary" },
    {
      value: experiences.length,
      suffix: "",
      label: "Organizations",
      color: "text-secondary",
    },
    {
      value: 50,
      suffix: "+",
      label: "Projects Delivered",
      color: "text-terminal",
    },
    {
      value: 15,
      suffix: "+",
      label: "Technologies Mastered",
      color: "text-primary",
    },
  ];

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Professional Experience
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional development and the impact
            I&apos;ve made in various organizations.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mb-16 pl-8 md:pl-10">
          {/* Timeline rail */}
          <div
            aria-hidden="true"
            className="absolute left-[11px] md:left-[15px] top-2 bottom-2 w-px
                       bg-gradient-to-b from-primary/70 via-border to-transparent"
          />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={exp.id} exp={exp} isLatest={index === 0} />
            ))}
          </div>
        </div>

        {/* Skills Overview */}
        <div className="bg-gradient-glow rounded-xl p-[1px] mb-12">
          <div ref={skillsView.ref} className="bg-background rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Core Competencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const SkillIcon = skill.icon;

                return (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <SkillIcon className="w-5 h-5 text-primary mr-2" />
                        <span className="font-medium text-foreground">
                          {skill.name}
                        </span>
                      </div>

                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      role="progressbar"
                      aria-label={skill.name}
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="w-full bg-muted rounded-full h-2 overflow-hidden"
                    >
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full
                                   transition-[width] duration-1000 ease-out"
                        style={{
                          width: skillsView.inView ? `${skill.level}%` : "0%",
                          transitionDelay: `${index * 120}ms`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Experience Summary */}
        <div className="bg-gradient-glow rounded-xl p-[1px]">
          <div ref={statsView.ref} className="bg-background rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center text-foreground">
              Experience Summary
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                    <CountUp
                      value={stat.value}
                      suffix={stat.suffix}
                      start={statsView.inView}
                    />
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* =========================================================
   EXPERIENCE CARD
========================================================= */

const ExperienceCard = ({
  exp,
  isLatest,
}: {
  exp: Experience;
  isLatest: boolean;
}) => {
  const Icon = exp.icon;
  const [expanded, setExpanded] = useState(false);
  const [certOpen, setCertOpen] = useState(false);
  const [certFailed, setCertFailed] = useState(false);

  const canCollapse = exp.achievements.length > VISIBLE_ACHIEVEMENTS;
  const shownAchievements =
    expanded || !canCollapse
      ? exp.achievements
      : exp.achievements.slice(0, VISIBLE_ACHIEVEMENTS);
  const hiddenCount = exp.achievements.length - shownAchievements.length;

  return (
    <div className="relative">
      {/* Timeline dot */}
      <span
        aria-hidden="true"
        className={`absolute -left-[26px] md:-left-[30px] top-8 h-3 w-3 rounded-full border-2 border-primary bg-background ${
          isLatest ? "bg-primary shadow-glow" : ""
        }`}
      />

      <Card className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300">
        <div className="flex flex-col lg:flex-row lg:items-start gap-6">
          {/* Company Icon and Employment Type */}
          <div className="flex-shrink-0">
            <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
              <Icon className="w-8 h-8 text-primary" />
            </div>

            <div className="flex flex-wrap lg:flex-col lg:items-start gap-2">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                  exp.type,
                )}`}
              >
                {exp.type}
              </span>

              {isLatest && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border border-primary/40 text-primary">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  Most recent
                </span>
              )}
            </div>
          </div>

          {/* Experience Details */}
          <div className="flex-grow min-w-0">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-3">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {exp.position}
                </h3>

                <p className="text-lg font-semibold text-primary mb-2">
                  {exp.company}
                </p>
              </div>

              <div className="flex flex-col sm:text-right">
                <div className="flex items-center sm:justify-end text-muted-foreground mb-1">
                  <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{exp.duration}</span>
                </div>

                <div className="flex items-center sm:justify-end text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-muted-foreground mb-4">{exp.description}</p>

            {/* Achievements */}
            <div className="mb-4">
              <h4 className="font-semibold text-foreground mb-2 flex items-center">
                <Trophy className="w-4 h-4 mr-2 text-primary" />
                Key Achievements
              </h4>

              <ul className="space-y-1">
                {shownAchievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="flex items-start text-sm text-muted-foreground"
                  >
                    <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {canCollapse && (
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  aria-expanded={expanded}
                  className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-primary
                             hover:opacity-80 transition-opacity rounded
                             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
                >
                  {expanded ? "Show less" : `Show ${hiddenCount} more`}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 ${
                      expanded ? "rotate-180" : ""
                    }`}
                  />
                </button>
              )}
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Technologies Used
              </h4>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Internship Certificate */}
            {exp.certificate && (
              <div className="mt-6 border-t border-border/50 pt-5">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  Internship Certificate
                </h4>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {!certFailed && (
                    <button
                      type="button"
                      onClick={() => setCertOpen(true)}
                      aria-label="Enlarge internship certificate"
                      className="group relative h-24 w-36 flex-shrink-0 overflow-hidden rounded-lg
                                 border border-border/50 bg-muted cursor-zoom-in
                                 hover:border-primary/50 transition-colors"
                    >
                      <img
                        src={exp.certificate}
                        alt={`${exp.company} internship certificate`}
                        loading="lazy"
                        onError={() => setCertFailed(true)}
                        className="h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                      />
                    </button>
                  )}

                  <a
                    href={exp.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 self-start rounded-lg bg-primary px-4 py-2.5
                               text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <FileText className="w-4 h-4" />
                    View Certificate
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </Card>

      {certOpen && exp.certificate && (
        <CertificateModal
          src={exp.certificate}
          title={`${exp.company} internship certificate`}
          onClose={() => setCertOpen(false)}
        />
      )}
    </div>
  );
};

/* =========================================================
   CERTIFICATE MODAL (portal, so card transforms can't
   interfere with position: fixed)
========================================================= */

const CertificateModal = ({
  src,
  title,
  onClose,
}: {
  src: string;
  title: string;
  onClose: () => void;
}) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={title}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close certificate"
        className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full
                   bg-white/10 text-white transition-colors hover:bg-white/20"
      >
        <X className="h-5 w-5" />
      </button>

      <img
        src={src}
        alt={title}
        onClick={(e) => e.stopPropagation()}
        className="max-h-[85vh] max-w-full rounded-lg border border-white/10 object-contain shadow-2xl"
      />
    </div>,
    document.body,
  );
};

export default Experience;
