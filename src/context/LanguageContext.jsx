import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState( localStorage.getItem("Language")|| "en");

  const toggleLanguage = () => setLang(prev => (prev === "en" ? "tr" : "en"));

    useEffect(() => {
      localStorage.setItem("Language", lang);
    }, [lang]);
  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
