import React, { useContext } from "react";

import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function NavBar() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].navbar;

  const handleClick = (e) => {
    e.preventDefault();
    toast.success(lang === "en" ? "Thank you! I will contact you soon." : "Teşekkürler! Yakında sizinle iletişime geçeceğim.");
  };

  return (
    <div className="flex justify-between items-center p-5 transition-colors duration-500">
      <h5 className={`ml-8 w-12 h-12 rounded-full flex items-center justify-center transform rotate-30 text-2xl font-normal ${darkMode ? "bg-[#4731D3] text-[#8F88FF]" : "bg-gray-200 text-purple-600"}`}>A</h5>
      <div className="flex items-center gap-16">
        <a href="#skills"  className={`font-normal transition-colors duration-500 ${darkMode ? "text-gray-500 hover:text-purple-300" : "text-gray-500 hover:text-indigo-700"}`}>{t.skills}</a>
        <a href="#projects" className={`font-normal transition-colors duration-500 ${darkMode ? "text-gray-500 hover:text-purple-300" : "text-gray-500 hover:text-indigo-700"}`}>{t.projects}</a>
        <a href="#hire-me" onClick={handleClick} className={`font-normal border-1 rounded-lg px-7 py-3 transition-colors duration-500 ${darkMode ? "border-[#3730A3] text-[#3730A3] bg-white" : "border-indigo-700 text-indigo-700 hover:bg-indigo-700 hover:text-white"}`}>{t.hireMe}</a>
      </div>
    </div>
  );
}
