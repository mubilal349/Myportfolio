import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  GraduationCap,
  FileCheck,
  Medal,
  CodeIcon,
  CloudIcon,
  LayersIcon,
} from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "MERN Stack Development",
      issuer: "Coursera",
      icon: Award,
      color: "text-primary",
      bgColor: "bg-primary/10",
      borderColor: "border-primary/30",
      details: ["MongoDB", "Express.js", "React.js", "Node.js"],
    },
    {
      title: "Web Designing",
      issuer: "VertexSoft computer institute,swat",
      icon: CodeIcon,
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      details: ["HTML", "CSS", "Bootstrap", "Javascript [ES6+]"],
    },
    {
      title: "Agile/Scrum methedologies",
      issuer: "Coursera",
      icon: CloudIcon,
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      details: [
        "Agile/Scrum Fundamentals",
        "Core Principles of Kanban",
        "Pair Programming",
        "BDD",
      ],
    },
    {
      title: "Git/Github",
      issuer: "Coursera",
      icon: LayersIcon,
      color: "text-cyan-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      details: [
        "Collaboration",
        "Branches",
        ,
        "Merging conflicts",
        "CI/CD Integration",
      ],
    },
  ];

  const achievements = [
    "Hackathon Winner 2024",
    "Open Source Contributor",
    "LeetCode 300+ Problems",
    "GitHub Star Projects",
    "Live Pakistan Front End Web Development Internship",
  ];

  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Certificates & Achievements
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Recognitions and certifications showcasing expertise in software
          engineering and modern technologies.
        </p>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <Card
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border ${cert.borderColor} hover:shadow-glow transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`${cert.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon className={`w-7 h-7 ${cert.color}`} />
                </div>
                <h3 className={`text-xl font-bold mb-1 ${cert.color}`}>
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Issued by: {cert.issuer}
                </p>
                <ul className="space-y-1">
                  {cert.details.map((detail, detailIndex) => (
                    <li
                      key={detailIndex}
                      className="text-sm text-muted-foreground"
                    >
                      • {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Achievements Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">
            Additional Achievements
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {achievements.map((achieve, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-3 py-1 border-primary/30 hover:bg-primary/10 transition-colors"
              >
                {achieve}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
