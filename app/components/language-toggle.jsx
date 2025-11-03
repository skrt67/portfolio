"use client";

import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { IoLanguage } from 'react-icons/io5';

const LanguageToggle = () => {
  const { language, changeLanguage, availableLanguages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  const languages = {
    fr: { name: 'Français', flag: '🇫🇷' },
    en: { name: 'English', flag: '🇬🇧' }
  };

  const handleLanguageChange = (lang) => {
    changeLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a1443] text-white hover:bg-[#2a2453] transition-colors duration-300"
        aria-label="Changer de langue"
      >
        <IoLanguage size={20} />
        <span className="text-sm font-medium">
          {languages[language]?.flag} {languages[language]?.name}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#1a1443] rounded-lg shadow-lg border border-[#2a2453] z-50">
          <div className="py-2">
            {availableLanguages.map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-[#2a2453] transition-colors duration-200 ${
                  language === lang ? 'bg-[#2a2453] text-[#16f2b3]' : 'text-white'
                }`}
              >
                <span className="text-lg">{languages[lang]?.flag}</span>
                <span className="text-sm font-medium">{languages[lang]?.name}</span>
                {language === lang && (
                  <span className="ml-auto text-[#16f2b3]">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Overlay pour fermer le menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default LanguageToggle;
