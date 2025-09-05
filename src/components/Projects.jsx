import React, { useContext } from "react";

import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";
import { DataContext } from "../context/dataContext.jsx";

export default function Projects() {
  const { data } = useContext(DataContext);
  const { darkMode } = useContext(DarkModeContext);
  const { lang } = useContext(LanguageContext);
  const t = data[lang].projects;

  return (
    <section className={`px-6 md:px-12 py-12 transition-colors duration-500 `}>
      {/* Title */}
      <h2 className={`text-3xl md:text-5xl font-bold mb-12 ${darkMode ? "text-[#AEBCCF]" : "text-gray-900"}`}>
        {t.title}
      </h2>
      {/* Projects Grid */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Project 1 */}
        <div className="flex-1">
          <img
            src="src/assets/project.png"
            alt="Workintech"
            className="w-78 h-48 mb-4"
          />
          <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? "text-[#AEBCCF]" : "text-indigo-700"}`}>
            Workintech
          </h3>
          <p
            className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            dangerouslySetInnerHTML={{ __html: t.text }}
          ></p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["react", "redux", "axios"].map((tech, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 border-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? "border-[#8F88FF] text-[#8F88FF] bg-[#383838]"
                    : "border-indigo-700 text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="ml-2 flex gap-48 w-full mt-4">
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>Github</a>
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>View Site</a>
          </div>
        </div>
        {/* Project 2 */}
        <div className="flex-1">
          <img
            src="src/assets/project2.png"
            alt="Random Jokes"
            className="w-78 h-48 mb-4"
          />
          <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? "text-[#AEBCCF]" : "text-indigo-700"}`}>
            Random Jokes
          </h3>
          <p
            className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            dangerouslySetInnerHTML={{ __html: t.text2 }}
          ></p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["react", "redux", "axios"].map((tech, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 border-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? "border-[#8F88FF] text-[#8F88FF] bg-[#383838]"
                    : "border-indigo-700 text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="ml-2 flex gap-48 w-full mt-4">
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>Github</a>
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>View Site</a>
          </div>
        </div>
        {/* Project 3 */}
        <div className="flex-1">
          <img
            src="src/assets/project3.png"
            alt="Journey"
            className="w-78 h-48 mb-4"
          />
          <h3 className={`text-xl md:text-2xl font-semibold mb-2 ${darkMode ? "text-[#AEBCCF]" : "text-indigo-700"}`}>
            Journey
          </h3>
          <p
            className={`text-sm md:text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}
            dangerouslySetInnerHTML={{ __html: t.text3 }}
          ></p>
          <div className="flex flex-wrap gap-4 mt-4">
            {["react", "redux", "axios"].map((tech, idx) => (
              <button
                key={idx}
                className={`px-3 py-1 border-1 rounded-md text-sm font-medium transition-colors duration-200 ${
                  darkMode
                    ? "border-[#8F88FF] text-[#8F88FF] bg-[#383838]"
                    : "border-indigo-700 text-indigo-700 hover:bg-indigo-50"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
          <div className="ml-2 flex gap-48 w-full mt-4">
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>Github</a>
            <a className={`text-sm font-semibold underline pointer-events-none cursor-default ${darkMode ? "text-[#E1E1FF]" : "text-indigo-700"}`}>View Site</a>
          </div>
        </div>
      </div>
    </section>
  );
}
