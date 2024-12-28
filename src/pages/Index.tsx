import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Navigation } from "@/components/Navigation";

const Index = () => {
  return (
    <main className="min-h-screen pt-16">
      <Navigation />
      <section id="about">
        <Hero />
      </section>
      <section id="experience" className="min-h-screen">
        {/* Experience section will be implemented later */}
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="testimonials" className="min-h-screen">
        {/* Testimonials section will be implemented later */}
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default Index;