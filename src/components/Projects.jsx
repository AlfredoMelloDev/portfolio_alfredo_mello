import React from "react";
import { motion } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";

const Projects = ({ t }) => {
  const thriveBulletsFallback = [
    "Built and customized pages using WordPress and Elementor.",
    "Improved the site's structure, layout, and visual consistency.",
    "Created and adjusted design assets using Canva.",
    "Implemented SEO, cookies, and chatbot integrations with WordPress plugins.",
    "Ensured full responsiveness across mobile, tablet, and desktop.",
    "Structured essential pages such as Privacy Policy, Cookies, and Terms & Conditions.",
  ];

  const hobbiBulletsFallback = [
    "Built product pages, shopping flow, and dynamic interface components.",
    "Developed backend features using PHP for data handling and business logic.",
    "Managed database structure and integrations with MySQL.",
    "Worked on responsive layouts for a consistent cross-device experience.",
    "Organized code structure to improve maintenance and scalability.",
    "Focused on delivering a practical and user-friendly e-commerce experience.",
  ];

  const netflixBulletsFallback = [
    "Developed the project from initial structure to deployment.",
    "Consumed movie and series data using The Movie Database API.",
    "Used React Hooks such as useState and useEffect for state and lifecycle management.",
    "Managed states for the movie catalog, featured content, and header behavior.",
    "Built interactive UI behavior with JavaScript and custom CSS styling.",
    "Published the project on Vercel and planned future improvements such as user screens and content detail pages.",
  ];

  const proximoPassoBulletsFallback = [
    "Developed ERP features for business management workflows.",
    "Integrated financial, inventory, and sales modules.",
    "Built backend functionality using PHP and MySQL.",
    "Focused on scalability, performance, and maintainable code.",
    "Helped create a practical and intuitive solution for daily business operations.",
  ];

  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-6xl text-center"
      >
        {t?.projectsTitle || "Experience"}
      </motion.h1>

      <div className="flex flex-col gap-8">
        {/* Thrive Digital */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">
                  {t?.roleWebDeveloper || "Web Developer"}
                </h2>
                <p className="text-blue-400 font-medium">Thrive Digital</p>
              </div>

              <a
                href="https://thrivedigitalmkt.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                {t?.visitProject || "Visit Project"} <FiExternalLink />
              </a>
            </div>

            <p className="text-sm text-slate-400">
              {t?.labelFreelanceBrazil || "Freelance Project | Brazil"}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {t?.projectsText?.thrive?.description ||
                "Developed and redesigned the Thrive Digital website, creating a more modern and strategic online presence aligned with the brand’s new positioning. The project focused on responsiveness, visual identity, performance, and user experience."}
            </p>

            <div className="flex flex-col gap-2 text-slate-300 mt-2">
              {(t?.projectsText?.thrive?.bullets || thriveBulletsFallback).map(
                (item, idx) => (
                  <p key={idx}>• {item}</p>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                WordPress
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                Elementor
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                Canva
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                SEO
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                Responsive Design
              </span>
            </div>
          </div>
        </motion.div>

        {/* Hobbi Eletro */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">
                  {t?.roleFullStackWebDeveloper || "Full Stack Web Developer"}
                </h2>
                <p className="text-blue-400 font-medium">Hobbi Eletro</p>
              </div>

              <a
                href="https://hobbieletro.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                {t?.visitProject || "Visit Project"} <FiExternalLink />
              </a>
            </div>

            <p className="text-sm text-slate-400">
              {t?.labelPersonalEcommerce || "Personal E-commerce Project"}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {t?.projectsText?.hobbi?.description ||
                "Developed an e-commerce project focused on electronics, building both the frontend and backend structure to support product display, shopping flow, and data management. The project emphasized usability, organization, and scalable development."}
            </p>

            <div className="flex flex-col gap-2 text-slate-300 mt-2">
              {(t?.projectsText?.hobbi?.bullets || hobbiBulletsFallback).map(
                (item, idx) => (
                  <p key={idx}>• {item}</p>
                ),
              )}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                PHP
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                MySQL
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                E-commerce
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                Responsive Design
              </span>
            </div>
          </div>
        </motion.div>

        {/* Netflix Clone */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">
                  {t?.roleFrontendDeveloper || "Front-End Developer"}
                </h2>
                <p className="text-blue-400 font-medium">Netflix Clone</p>
              </div>

              <a
                href="https://cloneplataformanetflix.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                {t?.visitProject || "Visit Project"} <FiExternalLink />
              </a>
            </div>

            <p className="text-sm text-slate-400">
              {t?.labelPersonalReact || "Personal React Project"}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {t?.projectsText?.netflix?.description ||
                "Built a Netflix-inspired interface from scratch as a React study project, focusing on component structure, API consumption, dynamic rendering, and visual detail. The application was deployed on Vercel and uses data from The Movie Database API."}
            </p>

            <div className="flex flex-col gap-2 text-slate-300 mt-2">
              {(
                t?.projectsText?.netflix?.bullets || netflixBulletsFallback
              ).map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                CSS
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                REST API
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                Vercel
              </span>
            </div>
          </div>
        </motion.div>

        {/* Próximo Passo / ERP */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-lg"
        >
          <div className="flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold">
                  {t?.roleFullStackDeveloper || "Full Stack Developer"}
                </h2>
                <p className="text-blue-400 font-medium">Próximo Passo</p>
              </div>

              <a
                href="https://nexsyserp.com.br/painel/painelgerencia/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-900 hover:bg-indigo-800 transition-all duration-300 hover:scale-105 text-sm font-medium"
              >
                {t?.visitProject || "Visit Project"} <FiExternalLink />
              </a>
            </div>

            <p className="text-sm text-slate-400">
              {t?.labelNextStepTimeplace ||
                "November 2024 – September 2025 | Sorocaba, São Paulo, Brazil"}
            </p>

            <p className="text-slate-300 leading-relaxed">
              {t?.projectsText?.proximoPasso?.description ||
                "Worked on the development and maintenance of a business ERP system designed to optimize internal company processes. Contributed to a centralized platform focused on improving operational efficiency, automation, and usability for different types of businesses."}
            </p>

            <div className="flex flex-col gap-2 text-slate-300 mt-2">
              {(
                t?.projectsText?.proximoPasso?.bullets ||
                proximoPassoBulletsFallback
              ).map((item, idx) => (
                <p key={idx}>• {item}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                PHP
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                MySQL
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                ERP Development
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                MVC
              </span>
              <span className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">
                System Maintenance
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
