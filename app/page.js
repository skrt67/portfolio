import { personalData } from "@/utils/data/personal-data";
import ClientComponents from "./components/client-components";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <ClientComponents />
    </div>
  );
}
