"use client";

import Link from "next/link";
import LanguageToggle from "./language-toggle";
import { useLanguage } from "@/contexts/LanguageContext";

function Navbar() {
  const { t } = useLanguage();
  
  return (
    <nav className="bg-transparent">
      <div className="flex items-center justify-between py-5">
        <div className="flex flex-shrink-0 items-center">
          <Link
            href="/"
            className=" text-[#16f2b3] text-3xl font-bold">
            Altan DEPELI
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100" id="navbar-default">
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#about">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t('nav.about')}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#experience">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t('nav.experience')}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#skills">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t('nav.skills')}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#education">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t('nav.education')}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/#projects">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{t('nav.projects')}</div>
              </Link>
            </li>
            <li>
              <Link className="block px-4 py-2 no-underline outline-none hover:no-underline" href="/admin">
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">ADMIN</div>
              </Link>
            </li>
          </ul>
          <LanguageToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
