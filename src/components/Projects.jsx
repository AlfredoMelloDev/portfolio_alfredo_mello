import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const projects = [
  { id: "deputados", group: "personal", demo: "https://dadospublicos.alfredomello.com/", github: "https://github.com/AlfredoMelloDev/api-deputados-laravel", role: "roleFullStackDeveloper", technologies: ["PHP", "Laravel", "MySQL", "REST API", "Laravel Queues", "PHPUnit"] },
  { id: "flowcrm", group: "personal", github: "https://github.com/AlfredoMelloDev/flowcrm-saas", role: "roleFullStackDeveloper", technologies: ["Laravel", "React", "MySQL", "Sanctum", "TanStack Query", "Tailwind CSS"] },
  { id: "netflix", title: "Netflix Clone", group: "personal", demo: "https://cloneplataformanetflix.vercel.app/", role: "roleFrontendDeveloper", technologies: ["React", "JavaScript", "CSS", "REST API", "Vercel"] },
  { id: "woostore", title: "WooStore - Loja Virtual de Eletrônicos", group: "personal", demo: "https://woostore.alfredomello.com/", role: "roleEcomDeveloper", technologies: ["WordPress", "WooCommerce", "Elementor Pro", "Mercado Pago", "WP Rocket", "Code Snippets"] },
  { id: "hobbi", title: "Hobbi Eletro", group: "professional", demo: "https://hobbieletro.com.br/", role: "roleFullStackWebDeveloper", technologies: ["PHP", "MySQL", "JavaScript", "E-commerce"] },
  { id: "thrive", title: "Thrive Digital", group: "professional", demo: "https://thrivedigitalmkt.com.br/", role: "roleWebDeveloper", technologies: ["WordPress", "Elementor", "Canva", "SEO"] },
  { id: "proximoPasso", title: "Próximo Passo", group: "professional", demo: "https://nexsyserp.com.br/painel/painelgerencia/login", role: "roleFullStackDeveloper", technologies: ["PHP", "MySQL", "ERP", "MVC"] },
];

const buttonClass = "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-400";

const Projects = ({ t }) => (
  <section id="experience" className="scroll-mt-24 mx-auto max-w-6xl p-4 sm:p-10 text-white flex flex-col gap-10 sm:gap-16">
    <h2 className="text-4xl sm:text-6xl text-center">{t.projectsTitle}</h2>
    {[{ id: "personal", title: t.personalProjects }, { id: "professional", title: t.professionalProjects }].map((group) => (
      <section key={group.id} aria-labelledby={`${group.id}-projects`} className="flex flex-col gap-8">
        <h3 id={`${group.id}-projects`} className="text-2xl sm:text-3xl font-semibold text-blue-400">{group.title}</h3>
        {projects.filter((project) => project.group === group.id).map((project) => {
          const content = t.featuredProjects.find((item) => item.id === project.id) || t.projectsText[project.id];
          return (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} aria-labelledby={`project-${project.id}`} className="bg-gray-900 rounded-2xl p-6 sm:p-8 border border-gray-800 shadow-lg">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <h4 id={`project-${project.id}`} className="text-2xl font-semibold">{content.title || project.title}</h4>
                    <p className="text-blue-400 font-medium">{t[project.role]}</p>
                  </div>
                  {content.status && <span className={`self-start px-3 py-1 rounded-full text-sm ${project.demo ? "bg-emerald-950 text-emerald-300" : "bg-amber-950 text-amber-300"}`}>{content.status}</span>}
                </div>
                {project.id === "proximoPasso" && <p className="text-sm text-slate-400">{t.labelNextStepTimeplace}</p>}
                <p className="text-slate-300 leading-relaxed">{content.description}</p>
                <ul className="list-disc pl-5 space-y-2 text-slate-300">{content.bullets.map((item) => <li key={item}>{item}</li>)}</ul>
                <div className="flex flex-wrap gap-3">{project.technologies.map((technology) => <span key={technology} className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">{technology}</span>)}</div>
                <div className="flex flex-wrap gap-3 mt-2">
                  {project.demo && <a href={project.demo} target="_blank" rel="noopener noreferrer" className={`${buttonClass} bg-indigo-900 hover:bg-indigo-800`}>{project.group === "professional" ? t.visitProject : t.viewDemo} <FiExternalLink aria-hidden="true" /></a>}
                  {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className={`${buttonClass} border border-slate-600 hover:bg-slate-800`}>{t.viewCode} <FiGithub aria-hidden="true" /></a>}
                </div>
              </div>
            </motion.article>
          );
        })}
      </section>
    ))}
  </section>
);

export default Projects;
