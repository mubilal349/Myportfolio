import { Card } from "@/components/ui/card";
import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working effectively in agile teams and pair programming"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Staying current with latest technologies and best practices"
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimizing applications for speed and efficiency"
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Passionate full-stack developer specializing in JavaScript ecosystems
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div className="space-y-6">
            <div className="prose prose-lg text-muted-foreground">
              <p>
                I'm a dedicated MERN stack developer with over 5 years of experience building 
                scalable web applications. My journey in web development started with a curiosity 
                about how modern applications work, which evolved into a passion for creating 
                efficient, user-friendly solutions.
              </p>
              <p>
                I specialize in developing full-stack JavaScript applications, from designing 
                robust MongoDB databases to creating intuitive React interfaces. My expertise 
                spans the entire development lifecycle, including system architecture, implementation, 
                testing, and deployment.
              </p>
              <p>
                When I'm not coding, I contribute to open-source projects, write technical blog posts, 
                and explore emerging technologies in the JavaScript ecosystem. I believe in continuous 
                learning and staying ahead of industry trends.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card 
                  key={index}
                  className="p-4 bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300"
                >
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1 text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-glow rounded-xl p-[1px]">
          <div className="bg-background rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Experience Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">5+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-terminal mb-2">100%</div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;