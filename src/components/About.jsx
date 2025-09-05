import React, { useContext } from "react";

import { toast } from "react-toastify";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function About() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].about;

  const handleHireMe = () => {
    
    toast.success(lang === "en" ? "Thank you! I will contact you soon." : "Teşekkürler! Yakında sizinle iletişime geçeceğim.");
  };

  const handleGit = () => {
    toast.info(lang === "en" ? "Redirecting to GitHub..." : "GitHub'a yönlendiriliyorsunuz...");
  };

  const handleLinkedin = () => {
    toast.info(lang === "en" ? "Redirecting to LinkedIn..." : "LinkedIn'e yönlendiriliyorsunuz...");
  };
  
  return (
    <section className={`px-6 md:px-12 py-12 transition-colors duration-500 ${darkMode ? "bg-[#252128] text-white" : "bg-white text-gray-900"}`}>
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-20 h-[2px] ${darkMode ? "bg-[#B7AAFF]" : "bg-purple-300"}`}></div>
        <h3 className={`font-bold text-lg ${darkMode ? "text-[#B7AAFF]" : "text-purple-500"}`}>Almila Su</h3>
      </div>
      <h1 className={`text-4xl md:text-6xl font-bold leading-tight ${darkMode ? "text-[#AEBCCF]" : "text-gray-800"}`} dangerouslySetInnerHTML={{ __html: t.title }}></h1>
      <p className={`mt-4 text-base md:text-lg ${darkMode ? "text-gray-200" : "text-gray-500"}`} dangerouslySetInnerHTML={{ __html: t.subtitle }}></p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={handleHireMe}
          className={`px-6 py-2 rounded-md font-semibold hover:bg-indigo-600 ${darkMode ? "bg-indigo-200 text-gray-900" : "bg-[#3730A3] text-white"}`}
        >
          {t.hireMe}
        </button>
        <button
          className={`relative px-5 py-2 pl-10 rounded-md font-semibold border border-[#E1E1FF] ${darkMode ? "bg-[#383838] text-[#E1E1FF]" : "bg-white text-[#3730A3]"}`}
          onClick={handleGit}
        >
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 bg-[url('src/assets/github.png')] bg-contain bg-no-repeat"></span>
          {t.github}
        </button>
        <button
          className={`relative px-5 py-2 pl-10 rounded-md font-semibold border border-[#E1E1FF] ${darkMode ? "bg-[#383838] text-[#E1E1FF]" : "bg-white text-[#3730A3]"}`}
          onClick={handleLinkedin}
        >
          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-4 bg-[url('src/assets/linkedin.png')] bg-contain bg-no-repeat"></span>
          {t.linkedin}
        </button>
      </div>
      <img src="src/assets/img.png" alt="Profile" className="h-84 rounded-xl mt-45 shadow-lg md:absolute md:top-10 md:right-32"/>
    </section>
  );
}
