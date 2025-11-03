import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/helper/scroll-to-top";
import GTM from "./components/helper/gtm";
import { LanguageProvider } from "../contexts/LanguageContext";
import { AuthProvider } from "../contexts/AuthContext";
import { StatsProvider } from "../contexts/StatsContext";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio de Altan DEPELI - Développeur Web",
  description:
    "Bienvenue sur le portfolio de Altan DEPELI, étudiant en BUT MMI à Haguenau, passionné par le développement web. Découvrez mes projets, mes compétences et mon parcours.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <LanguageProvider>
          <AuthProvider>
            <StatsProvider>
              <ToastContainer />
              <ScrollToTop />
              <GTM />
              {children}
            </StatsProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
