import { HeroSection } from "../components/HeroSection";
import { About } from "../components/About";
import Projects from "../components/ProjectCarousel";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <About/>
      <TechStack/>
      <Experience/>
      <Projects/>
      <Contact/>
    </main>
  );
}