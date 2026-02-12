import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Experience />
        <Contact />
      </main>
      <Certificates />
      <Footer />
    </div>
  );
};

export default Index;
