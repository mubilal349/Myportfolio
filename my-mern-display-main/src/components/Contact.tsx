import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "mubilal349@gmail.com",
      href: "mailto:mubilal349@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 3311068668",
      href: "tel:+923311068668",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rawalpindi, Punjab",
      href: "#",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/mubilal349", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mubilall?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      label: "LinkedIn",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://hook.eu1.make.com/ivclweg36ph1uco8to1ntq2oydbninys",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (response.ok) {
        alert("Message sent successfully!");
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Error occurred!");
    }
  };

  return (
    <section id="contact" className="py-20 px-4 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur border-border/50 hover:shadow-glow transition-all duration-300 text-center"
              >
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-1 text-foreground">
                  {info.label}
                </h3>
                <a
                  href={info.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {info.value}
                </a>
              </Card>
            );
          })}
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur border-border/50 mb-8">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Phone Number
                </label>
                <input
                  type="Phone"
                  id="Phone"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="your Phone Number"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2 text-foreground"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground"
                  placeholder="Project Discussion"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2 text-foreground"
              >
                Message
              </label>
              <textarea
                id="message"
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <Button type="submit" variant="neon" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </Card>

        <div className="text-center">
          <p className="text-muted-foreground mb-4">Or find me on</p>
          <div className="flex gap-6 justify-center">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-card/50 backdrop-blur border border-border/50 w-12 h-12 rounded-full flex items-center justify-center hover:bg-primary/10 hover:border-primary/50 hover:shadow-glow transition-all duration-300"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5 text-muted-foreground hover:text-primary" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
