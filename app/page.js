import { personalData } from "@/utils/data/personal-data";
import ClientWrapper from "./components/client-wrapper";
import HeroWrapper from "./components/hero-wrapper";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroWrapper />
      <ClientWrapper />
    </div>
  );
}
