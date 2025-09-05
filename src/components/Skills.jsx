import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function Skills() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].skills;

  return (
    <section className="px-6 md:px-12 py-12 transition-colors duration-500">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? "text-[#AEBCCF]" : "text-gray-900"}`}>{t.title}</h2>
      <div className="flex flex-col md:flex-row gap-8">
        {[t.jsTitle, t.reactTitle, t.nodeTitle].map((skill, idx) => (
          <div key={idx} className="flex-1">
            <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? "text-[#AEBCCF]" : "text-indigo-700"}`}>{skill}</h3>
            <p className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`} dangerouslySetInnerHTML={{
              __html: idx === 0 ? t.jsText : idx === 1 ? t.reactText : t.nodeText
            }}></p>
          </div>
        ))}
      </div>
      <div className={`mt-10 h-[2px] w-full ${darkMode ? "bg-[#BAB2E7]" : "bg-purple-300"}`}></div>
    </section>
  );
}
