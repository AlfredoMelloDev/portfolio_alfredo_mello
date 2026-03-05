import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const translations = {
  en: {
    nav: { about: "About", projects: "Projects", contact: "Contact" },
    aboutTitle: "About",
    projectsTitle: "Projects",
    contactTitle: "Contact Me",
    contactText:
      "Have an exciting mobile or web project in mind? Let's bring it to life with cutting-edge technology.",
    contactBtn: "Get in Touch",
  },
  pt: {
    nav: { about: "Sobre", projects: "Projetos", contact: "Contato" },
    aboutTitle: "Sobre",
    projectsTitle: "Projetos",
    contactTitle: "Entre em contato",
    contactText:
      "Tem um projeto mobile ou web em mente? Vamos tirar do papel com tecnologia de ponta.",
    contactBtn: "Fale comigo",
  },
};

function App() {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    const userLang = navigator.language?.toLowerCase() || "en";
    setLang(userLang.startsWith("pt") ? "pt" : "en");
  }, []);

  const t = translations[lang];

  return (
    <div className="min-h-screen">
      <div className="fixed top-0 -z-10 min-h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,RGB(79,100,229,0.3),rgba(255,255,255,0))]"></div>

      <Navbar t={t} />

      <About t={t} />

      <Projects t={t} />

      <Contact t={t} />
    </div>
  );
}

export default App;
