import React, { createContext, useContext, useState } from 'react';
import enTranslations from '../assets/translation/en.json';
import bnTranslations from '../assets/translation/bn.json';

const translations = {
  en: enTranslations,
  bn: bnTranslations
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const t = (key) => translations[language][key] || key;
  
  return (
    <LanguageContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}