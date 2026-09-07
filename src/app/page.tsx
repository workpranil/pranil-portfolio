import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main
      id="home"
      className="min-h-screen bg-[var(--background)] text-[var(--foreground)] transition-colors duration-500"
    >
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Education />

      <Projects />

      <Contact />
    </main>
  );
}