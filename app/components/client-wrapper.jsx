"use client";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "./helper/scroll-to-top";
import GTM from "./helper/gtm";
import dynamic from "next/dynamic";

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

export default function ClientWrapper() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
      <GTM />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
    </>
  );
} 