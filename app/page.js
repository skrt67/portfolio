import { personalData } from "@/utils/data/personal-data";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import ClientWrapper from "./components/client-wrapper";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <ClientWrapper />
      {/* <Skills />
      <Projects />
      <Education />
      <ContactSection /> */}
    </div>
  );
}
