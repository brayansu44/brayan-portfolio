import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Technologies from "@/components/sections/Technologies";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>

      <main className="bg-background">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Technologies />
        <Education />
        <Contact />
      </main>

    </>
  );
}