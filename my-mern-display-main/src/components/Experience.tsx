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
} from "lucide-react";

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
  icon: any;
  certificate?: string;
}

const Experience = () => {
  const experiences: Experience[] = [
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
      id: 4,
      company: "Kamyab Jawan Markaz, Swat",
      position: "Junior Web Developer",
      location: "On-site",
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
    {
      id: 5,
      company: "WebEra Solutions",
      position: "Front-End Developer Intern",
      location: "Remote",
      // Replace this with your actual internship dates.
      duration: "07 sep 2026 - 10 oct 2026",
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
  ];

  const skills = [
    { name: "Frontend Development", level: 90, icon: Globe },
    { name: "Backend Development", level: 85, icon: Database },
    { name: "Full Stack Integration", level: 88, icon: Code },
    { name: "Team Leadership", level: 75, icon: Users2 },
  ];

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      "Full-time":
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      "On-site":
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      "Part-time":
        "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      Contract:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
      Freelance:
        "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
      Internship:
        "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
    };

    return colors[type] || colors["Full-time"];
  };

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
        <div className="space-y-8 mb-16">
          {experiences.map((exp) => {
            const Icon = exp.icon;

            return (
              <Card
                key={exp.id}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Company Icon and Employment Type */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>

                    <div className="space-y-2">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                          exp.type,
                        )}`}
                      >
                        {exp.type}
                      </span>
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
                        <div className="flex items-center text-muted-foreground mb-1">
                          <Calendar className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm">{exp.duration}</span>
                        </div>

                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center">
                        <Trophy className="w-4 h-4 mr-2 text-primary" />
                        Key Achievements
                      </h4>

                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="flex items-start text-sm text-muted-foreground"
                          >
                            <CheckCircle className="w-4 h-4 mr-2 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">
                        Technologies Used
                      </h4>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
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

                        {/* View Certificate Button */}
                        <a
                          href={exp.certificate}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 mt-4 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                        >
                          <FileText className="w-4 h-4" />
                          View Certificate
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Skills Overview */}
        <div className="bg-gradient-glow rounded-xl p-[1px] mb-12">
          <div className="bg-background rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-center text-foreground">
              Core Competencies
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const SkillIcon = skill.icon;

                return (
                  <div key={index} className="space-y-2">
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

                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
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
          <div className="bg-background rounded-xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center text-foreground">
              Experience Summary
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5</div>
                <div className="text-muted-foreground">Organizations</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-terminal mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>

              <div>
                <div className="text-3xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">
                  Technologies Mastered
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
