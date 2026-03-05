import React from "react";
import { motion } from "framer-motion";
import { BiLogoLinkedin, BiLogoWhatsapp, BiLogoGithub } from "react-icons/bi";
import image from "../../public/alfredo-.png";

const About = () => {
  return (
    <div
      className="mx-auto max-w-6xl w-full min-h-screen p-4 md:p-8 lg:p-28 flex items-center justify-center"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex flex-col-reverse items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center md:items-start justify-center gap-3"
        >
          <span className="px-2 py-1 text-white bg-zinc-800 rounded-full text-xs md:text-sm">
            Open to hire
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-6xl font-semibold text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text">
            Alfredo Mello
          </h1>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r from-blue-600 via-sky-400 to-blue-400 text-transparent bg-clip-text">
            Web Developer
          </h3>

          <p className="text-slate-400 text-center md:text-left text-pretty">
            I develop websites and web applications that combine performance,
            design, and functionality. With a focus on WordPress, PHP,
            JavaScript, and React, I turn ideas into modern, responsive, and
            well-structured digital experiences. I have advanced English
            proficiency, which strengthens my ability to work with technologies,
            documentation, and projects in a global environment.
          </p>

          <div className="flex gap-5 mt-3">
            <a
              href="https://www.linkedin.com/in/alfredo-mello-687653230/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BiLogoLinkedin className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-blue-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>

            <a
              href="https://github.com/AlfredoMelloDev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BiLogoGithub className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-indigo-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>

            <a
              href="https://wa.me/5551991315941"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <BiLogoWhatsapp className="text-2xl md:text-3xl text-white cursor-pointer hover:scale-110 hover:text-green-500 hover:rotate-12 transition-all duration-300 ease-in-out" />
            </a>
          </div>
        </motion.div>

        <img
          src={image}
          className="w-[300px] md:w-[400px] rounded-full hover:shadow-2xl hover:shadow-blue-800 hover:scale-105 hover:rotate-2 transition-all duration-500"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default About;
