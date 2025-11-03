"use client";

import { createContext, useContext, useState, useEffect } from 'react';
import { translations, defaultLanguage, getLanguageFromBrowser, getStoredLanguage, setStoredLanguage } from '@/utils/translations';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(defaultLanguage);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Détection automatique de la langue
    const storedLang = getStoredLanguage();
    if (storedLang) {
      setLanguage(storedLang);
    } else {
      const browserLang = getLanguageFromBrowser();
      setLanguage(browserLang);
      setStoredLanguage(browserLang);
    }
    setIsLoading(false);
  }, []);

  const changeLanguage = (newLanguage) => {
    if (translations[newLanguage]) {
      setLanguage(newLanguage);
      setStoredLanguage(newLanguage);
    }
  };

  const t = (key) => {
    const keys = key.split('.');
    let value = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        return key; // Retourne la clé si la traduction n'existe pas
      }
    }
    
    return value || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    isLoading,
    availableLanguages: Object.keys(translations)
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
