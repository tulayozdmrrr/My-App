import React, { useContext } from "react";
import { FaMoon } from "react-icons/fa";
import { DarkModeContext } from "../context/DarkModeContext.jsx";
import { LanguageContext } from "../context/LanguageContext.jsx";

export default function Mode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { lang, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className="flex items-center justify-end p-5 space-x-3">
      <div
        onClick={toggleDarkMode}
        className={`w-12 h-6 rounded-full relative cursor-pointer transition-colors flex items-center ${
          darkMode ? "bg-gray-700" : "bg-[#4731D3]"
        }`}
      >
        <div
          className={`w-4 h-4 ml-1 flex items-center justify-center rounded-full absolute transition-transform ${
            darkMode
              ? "translate-x-1 text-yellow-400"
              : "translate-x-6 bg-[#FFE86E]"
          }`}
        >
          {darkMode && <FaMoon size={13} />}
        </div>
      </div>
      <span
        className={`font-bold ml-2 ${
          darkMode ? "text-gray-400" : "text-gray-400"
        }`}
      >
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
      <div className="w-[3px] h-5 bg-gray-500 mx-4"></div>
      <button
        onClick={toggleLanguage}
        className={`font-bold text-x bg-transparent border-none cursor-pointer ${
          darkMode ? "text-[#777777]" : "text-gray-400"
        }`}
      >
        {lang === "en" ? (
          <>
            <span className="text-blue-600">TÜRKÇE</span>'YE GEÇ
          </>
        ) : (
          "SWITCH TO ENGLISH"
        )}
      </button>
    </div>
  );
}
