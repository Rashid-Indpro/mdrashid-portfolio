import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2 } from 'lucide-react';

const experienceData = [
  {
    role: 'Junior Software Engineer',
    company: 'Indpro',
    period: 'Jul 2025 – Jun 2026',
    projects: ['Jahopp (Learning Platform)', 'Job Portal', 'Attano (Testing)', 'Tessa (Testing)'],
    responsibilities: [
      'Full-stack development using modern web technologies',
      'Frontend development with React and related ecosystems',
      'Backend API integration and database management',
      'Automation testing with Playwright to ensure software reliability',
      'Manual testing to identify edge cases and improve UX',
      'Bug fixing and performance optimization',
      'Agile collaboration with cross-functional teams',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Professional <span className="text-cyan-400">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 md:p-12 rounded-3xl relative overflow-hidden group"
            >
              {/* Animated background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10 flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-cyan-400 font-semibold">{exp.company}</p>
                    </div>
                  </div>
                  <div className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-gray-300 mb-6">
                    {exp.period}
                  </div>
                  
                  <div className="mb-6 lg:mb-0">
                    <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-3">Key Projects</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.projects.map((project, pIndex) => (
                        <span key={pIndex} className="px-3 py-1 text-sm bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 rounded-md">
                          {project}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3">
                  <h4 className="text-lg font-bold text-white mb-4 border-b border-white/10 pb-2">Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle2 className="text-cyan-400 shrink-0 mt-0.5" size={18} />
                        <span className="leading-relaxed">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
