import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function Profile() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].profile;

  return (
    <section className="px-6 md:px-12 py-12 transition-colors duration-500">
      <h2 className={`text-3xl md:text-5xl font-bold mb-8 ${darkMode ? "text-[#AEBCCF]" : "text-gray-900"}`}>{t.title}</h2>
      <h2 className={`text-3xl md:text-4xl font-normal mb-8 ${darkMode ? "text-[#B7AAFF]" : "text-[#4338CA] font-normal"}`}>{t.subtitle}</h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center gap-x-4">
            <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-black-900"}`}>{t.dateOfBirth}</span>
            <span className={darkMode ? "text-white" : "text-black-900"}>{t.answer1}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-black-900"}`}>{t.cityOfResidence}</span>
            <span className={darkMode ? "text-white" : "text-black-900"}>{t.answer2}</span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-black-900"}`}>{t.educationalstatus}</span>
            <span className={darkMode ? "text-white" : "text-black-900"} dangerouslySetInnerHTML={{ __html: t.answer3 }}></span>
          </div>
          <div className="flex items-center gap-x-4">
            <span className={`font-semibold ${darkMode ? "text-gray-300" : "text-black-900"}`}>{t.preferredrole}</span>
            <span className={darkMode ? "text-white" : "text-black-900"}>{t.answer4}</span>
          </div>
        </div>
        <div className="flex-1 mb-8 md:mb-0">
          <h3 className={`text-2xl md:text-3xl font-normal mb-2 ${darkMode ? "text-[#B7AAFF]" : "text-indigo-700"}`}>{t.about}</h3>
          <p className={darkMode ? "text-gray-300" : "text-gray-400"} dangerouslySetInnerHTML={{ __html: t.aboutText }}></p>
        </div>
      </div>
      <div className={`mt-10 h-[2px] w-full ${darkMode ? "bg-[#BAB2E7]" : "bg-purple-300"}`}></div>
    </section>
  );
}
