import { motion } from 'framer-motion';

const timelineData = [
  {
    date: 'B.Tech - Computer Engineering',
    title: 'Presidency University',
    description: 'Graduated with a strong foundation in computer science principles and software engineering.',
  },
  {
    date: '05 Aug 2024 – 17 Sep 2024',
    title: 'Internship',
    description: 'Indpro - Gained initial industry experience and exposure to professional software development.',
  },
  {
    date: '21 Sep 2024 – 20 Oct 2024',
    title: 'Internship',
    description: 'Gowri Software Solutions - Worked on real-world projects and honed development skills.',
  },
  {
    date: '30 Jan 2025 – 04 Apr 2025',
    title: 'Internship',
    description: 'Indpro - Advanced internship focusing on specific technologies and project delivery.',
  },
  {
    date: '25 Jul 2025 – 23 Jun 2026',
    title: 'Junior Software Engineer',
    description: 'Indpro - Full-stack development, QA automation, and contributing to major projects like Jahopp and Job Portal.',
    highlight: true,
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10 rounded-full"></div>

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_10px_#00f0ff] z-10 border-4 border-black"></div>

                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className={`glass-card p-6 rounded-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(0,240,255,0.1)] ${item.highlight ? 'border-cyan-400/50 relative overflow-hidden' : ''}`}>
                    {item.highlight && (
                      <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/20 blur-[30px] rounded-full"></div>
                    )}
                    <span className="text-cyan-400 text-sm font-bold tracking-wider mb-2 block">
                      {item.date}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
