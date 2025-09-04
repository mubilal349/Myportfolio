import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Server, Code, Layers } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "MongoDB",
      icon: Database,
      color: "text-mongodb",
      bgColor: "bg-mongodb/10",
      borderColor: "border-mongodb/30",
      skills: ["Database Design", "Aggregation Pipeline", "Mongoose ODM", "Atlas Cloud", "Indexing & Optimization"]
    },
    {
      title: "Express.js",
      icon: Server,
      color: "text-express",
      bgColor: "bg-express/10",
      borderColor: "border-express/30",
      skills: ["RESTful APIs", "Middleware", "Authentication", "Error Handling", "API Security"]
    },
    {
      title: "React.js",
      icon: Code,
      color: "text-react",
      bgColor: "bg-react/10",
      borderColor: "border-react/30",
      skills: ["Component Architecture", "Hooks & State", "Redux/Context API", "Performance Optimization", "Testing"]
    },
    {
      title: "Node.js",
      icon: Layers,
      color: "text-node",
      bgColor: "bg-node/10",
      borderColor: "border-node/30",
      skills: ["Server Development", "NPM Ecosystem", "Async Programming", "Stream Processing", "Microservices"]
    }
  ];

  const additionalSkills = [
    "TypeScript", "GraphQL", "Docker", "AWS", "CI/CD", 
    "Jest", "Git", "WebSockets", "Redis", "PostgreSQL"
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Specialized in building full-stack JavaScript applications with the MERN stack
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index}
                className={`p-6 bg-card/50 backdrop-blur border ${category.borderColor} hover:shadow-glow transition-all duration-300 hover:scale-105`}
              >
                <div className={`${category.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-7 h-7 ${category.color}`} />
                </div>
                <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-muted-foreground">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Additional Technologies</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {additionalSkills.map((skill, index) => (
              <Badge 
                key={index}
                variant="outline"
                className="px-3 py-1 border-primary/30 hover:bg-primary/10 transition-colors"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;