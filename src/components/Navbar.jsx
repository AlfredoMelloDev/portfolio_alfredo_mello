import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";

const Navbar = ({ t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-black/30 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto py-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#about"
          className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text hover:scale-110 transition-all duration-300"
        >
          Alfredo Mello
        </a>

        <ul className="hidden md:flex gap-10">
          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#about">{t?.nav?.about || "About"}</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#experience">{t?.nav?.projects || "Projects"}</a>
          </li>

          <li className="opacity-70 hover:opacity-100 transition-opacity duration-300">
            <a href="#contact">{t?.nav?.contact || "Contact"}</a>
          </li>
        </ul>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          <BiMenu className="text-3xl" />
        </button>

        {isMenuOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 py-16 text-center">
            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity">
              <a href="#about" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">{t?.nav?.about || "About"}</span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity mt-6">
              <a href="#experience" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">
                  {t?.nav?.projects || "Projects"}
                </span>
              </a>
            </li>

            <li className="group px-10 opacity-80 hover:opacity-100 transition-opacity mt-6">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <span className="text-lg">{t?.nav?.contact || "Contact"}</span>
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

import PropTypes from "prop-types";

Navbar.propTypes = {
  t: PropTypes.shape({
    nav: PropTypes.shape({
      about: PropTypes.string,
      projects: PropTypes.string,
      contact: PropTypes.string,
    }),
  }),
};