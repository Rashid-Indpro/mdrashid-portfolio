import { motion } from 'framer-motion';

const skillsData = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 80 },
      { name: 'Svelte', level: 75 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 80 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    category: 'Backend & DB',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'FastAPI', level: 75 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 80 },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { name: 'Playwright', level: 85 },
      { name: 'Automation Testing', level: 85 },
      { name: 'Manual Testing', level: 90 },
      { name: 'Regression/Functional', level: 90 },
    ],
  },
  {
    category: 'Other',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Agile/SDLC', level: 85 },
      { name: 'Python', level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-white/[0.01] relative">
      {/* Decorative blurred blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Technical <span className="text-cyan-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {skillsData.map((category, catIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <h3 className="text-2xl font-bold mb-6 text-white tracking-wide border-b border-white/10 pb-4">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full relative"
                      >
                        <div className="absolute top-0 right-0 bottom-0 left-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[progress_1s_linear_infinite]"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress {
          0% { background-position: 20px 0; }
          100% { background-position: 0 0; }
        }
      `}} />
    </section>
  );
};

export default Skills;
