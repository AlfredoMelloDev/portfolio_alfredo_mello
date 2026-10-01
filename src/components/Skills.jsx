import PropTypes from "prop-types";

const skillGroups = [
  { key: "backend", items: ["PHP", "Laravel", "CodeIgniter 4", "MySQL / SQL", "APIs REST"] },
  { key: "frontend", items: ["JavaScript", "TypeScript", "React", "Next.js", "HTML / CSS"] },
  { key: "workflow", items: ["Git / GitHub", "Docker"] },
  { key: "ai", items: ["Claude Code", "ChatGPT / Codex"] },
  { key: "complementary", items: ["WordPress", "WooCommerce"] },
];

function Skills({ t }) {
  return (
    <section id="skills" aria-labelledby="skills-title" className="mx-auto max-w-6xl w-full p-4 md:p-8 lg:p-12">
      <h2 id="skills-title" className="text-3xl md:text-4xl font-semibold text-center bg-gradient-to-r from-blue-600 via-sky-500 to-blue-400 text-transparent bg-clip-text mb-8">
        {t.skillsTitle}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map(({ key, items }) => (
          <div key={key} className="p-6 bg-zinc-900 rounded-xl">
            <h3 className="text-xl font-medium text-white mb-3">{t.skillGroups[key].title}</h3>
            <p className="text-slate-300 leading-relaxed mb-4">{t.skillGroups[key].description}</p>
            <div className="flex flex-wrap gap-3">
              {[...items, ...(key === "workflow" ? [t.automatedTests] : [])].map((skill) => (
                <span key={skill} className="px-3 py-1 bg-indigo-900 rounded-xl text-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

Skills.propTypes = {
  t: PropTypes.shape({
    skillsTitle: PropTypes.string.isRequired,
    automatedTests: PropTypes.string.isRequired,
    skillGroups: PropTypes.objectOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })).isRequired,
  }).isRequired,
};

export default Skills;
