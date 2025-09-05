import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function Contact() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].contact;

  const handleLinkClick = (e) => {
    e.preventDefault();
    console.log("Link clicked, page not refreshed.");
  };

  return (
    <section className={`px-6 md:px-12 py-20 ${darkMode ? "bg-[#141414]" : "bg-[#F9F9F9]"}`}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col items-start mb-8 md:mb-0">
          <h2 className={`text-3xl md:text-5xl font-bold mb-4 ${darkMode ? "text-[#AEBCCF]" : "text-[#1F2937]"}`} dangerouslySetInnerHTML={{ __html: t.text }}></h2>
          <a href={`mailto:${t.mail}`} onClick={handleLinkClick} className={`text-xl md:text-2xl font-semibold ${darkMode ? "text-[#AEBCCF]" : "text-[#AF0C48]"}`}>
            <span className="mr-2">👉</span>{t.mail}
          </a>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-40">
          <a href="#" onClick={handleLinkClick} className={`text-sm font-semibold ${darkMode ? "text-[#AEBCCF]" : "text-gray-900"}`}>Personal Blog</a>
          <a href="#" onClick={handleLinkClick} className="text-sm font-semibold text-[#00AB6B]">Github</a>
          <a href="#" onClick={handleLinkClick} className="text-sm font-semibold text-[#0077B5]">Linkedin</a>
        </div>
      </div>
    </section>
  );
}
