"use client";

import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./homepage/hero-section"), {
  ssr: false,
});

export default function HeroWrapper() {
  return <HeroSection />;
} 