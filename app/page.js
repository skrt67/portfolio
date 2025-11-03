import { personalData } from "@/utils/data/personal-data";
import ClientComponents from "./components/client-components";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import PageTracker from "./components/PageTracker";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <PageTracker />
      <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
        <Navbar />
        <ClientComponents />
      </main>
      <Footer />
    </div>
  );
}
