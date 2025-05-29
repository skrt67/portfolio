import { personalData } from "@/utils/data/personal-data";
import dynamic from "next/dynamic";
import ClientWrapper from "./components/client-wrapper";

const HeroSection = dynamic(() => import("./components/homepage/hero-section"), {
  ssr: false,
});

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <ClientWrapper />
    </div>
  );
}
