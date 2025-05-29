import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";

const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});

const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <Experience />
      {/* <Skills />
      <Projects />
      <Education />
      <ContactSection /> */}
    </div>
  );
}
