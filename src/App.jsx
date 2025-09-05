import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import Mode from "./components/Mode.jsx";
import NavBar from "./components/NavBar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Profile from "./components/Profile.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import "./index.css";
import {
  DarkModeProvider,
  DarkModeContext,
} from "./context/DarkModeContext.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import text from "./locales.text.js";
import { DataContext, DataProvider } from "./context/dataContext.jsx";

function Main() {
  const { darkMode } = useContext(DarkModeContext);

  const { setData } = useContext(DataContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.body.classList.add(
      "transition-colors",
      "duration-500",
      "ease-in-out"
    );
    if (darkMode) {
      document.body.classList.add("dark", "bg-[#252128]", "text-white");
      document.body.classList.remove("bg-white", "text-black");
    } else {
      document.body.classList.remove("dark", "bg-[#252128]", "text-white");
      document.body.classList.add("bg-white", "text-black");
    }
  }, [darkMode]);

  useEffect(() => {
    axios
      .post("https://reqres.in/api/workintech", text, {
        headers: { "x-api-key": "reqres-free-v1" },
      })
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => setError(true))
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <div>Yükleniyor...</div>;
  }

  if (error) {
    return <div>Hata oluştu: {error.message}</div>;
  }

  return (
    <div className="main-container">
      <Mode />
      <NavBar />
      <About />
      <Skills />
      <Profile />
      <Projects />

      <Contact />
    </div>
  );
}

export default function App() {
  return (
    <DataProvider>
    <DarkModeProvider>
      <LanguageProvider>
        <Main />
        {/* ToastContainer'ı buraya taşı */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
        />
      </LanguageProvider>
    </DarkModeProvider>
    </DataProvider>
  );
}
