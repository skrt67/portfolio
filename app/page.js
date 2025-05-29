import { personalData } from "@/utils/data/personal-data";
import HeroSection from "./components/homepage/hero-section";
import ClientWrapper from "./components/client-wrapper";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <ClientWrapper />
    </div>
  );
}
