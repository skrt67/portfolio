"use client";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "./helper/scroll-to-top";
import GTM from "./helper/gtm";
import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./homepage/hero-section"), {
  ssr: false,
});

const AboutSection = dynamic(() => import("./homepage/about"), {
  ssr: false,
});

const Experience = dynamic(() => import("./homepage/experience"), {
  ssr: false,
});

const Skills = dynamic(() => import("./homepage/skills"), {
  ssr: false,
});

const Projects = dynamic(() => import("./homepage/projects"), {
  ssr: false,
});

const Education = dynamic(() => import("./homepage/education"), {
  ssr: false,
});

const ContactSection = dynamic(() => import("./homepage/contact"), {
  ssr: false,
});

export default function ClientComponents() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <GTM />
      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <ContactSection />
      </div>
    </>
  );
} 