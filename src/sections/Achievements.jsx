import { motion } from 'framer-motion';
import { Award, Code2, Database, ShieldCheck, TerminalSquare, Cpu } from 'lucide-react';

const achievementsData = [
  {
    title: 'Full Stack Development',
    description: 'Developed scalable end-to-end applications with modern frontend and backend architectures.',
    icon: Code2,
  },
  {
    title: 'QA Automation Testing',
    description: 'Ensured software reliability through comprehensive automated test suites using Playwright.',
    icon: TerminalSquare,
  },
  {
    title: 'Manual Testing',
    description: 'Conducted rigorous manual testing to identify edge cases and ensure a flawless user experience.',
    icon: ShieldCheck,
  },
  {
    title: 'Multiple Industry Internships',
    description: 'Gained extensive real-world experience and professional insights through successive internships.',
    icon: Award,
  },
  {
    title: 'Software Engineering',
    description: 'Contributed to complex software systems and successfully delivered projects like Jahopp & Job Portal.',
    icon: Database,
  },
  {
    title: 'Arduino & IoT Projects',
    description: 'Built hardware-software integrated systems like Smart Parking and Third Eye for Blind.',
    icon: Cpu,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            My <span className="text-cyan-400">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {achievementsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all duration-300">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
