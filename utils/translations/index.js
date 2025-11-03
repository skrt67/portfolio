import { fr } from './fr';
import { en } from './en';

export const translations = {
  fr,
  en
};

export const defaultLanguage = 'fr';
export const supportedLanguages = ['fr', 'en'];

export const getLanguageFromBrowser = () => {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const browserLang = navigator.language.split('-')[0];
  return supportedLanguages.includes(browserLang) ? browserLang : defaultLanguage;
};

export const getStoredLanguage = () => {
  if (typeof window === 'undefined') return defaultLanguage;
  
  const stored = localStorage.getItem('portfolio-language');
  return stored && supportedLanguages.includes(stored) ? stored : defaultLanguage;
};

export const setStoredLanguage = (language) => {
  if (typeof window === 'undefined') return;
  
  if (supportedLanguages.includes(language)) {
    localStorage.setItem('portfolio-language', language);
  }
};
