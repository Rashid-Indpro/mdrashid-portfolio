import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub as Github } from 'react-icons/fa';

const projectsData = [
  {
    title: 'InteraCart',
    description: 'E-commerce platform with modern UI, product management, and responsive design. Features a seamless checkout process and dynamic product rendering.',
    tech: ['React', 'Node.js', 'Tailwind CSS', 'Redux'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'InteraMinds',
    description: 'Interactive web platform focused on user engagement and scalable architecture. Includes real-time features and complex state management.',
    tech: ['React', 'Express', 'MongoDB', 'Socket.io'],
    github: null,
    demo: 'https://interaminds.com/',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Wobbly Runner',
    description: 'Interactive game project with engaging gameplay and responsive controls. Built with web technologies focusing on performance and 60fps animations.',
    tech: ['JavaScript', 'HTML5 Canvas', 'CSS3'],
    github: null,
    demo: 'https://play.google.com/store/apps/details?id=com.wobblyrunner.app&pli=1',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Smart Car Parking System',
    description: 'IoT/Arduino-based smart parking solution that monitors available slots and provides real-time availability updates via a web interface.',
    tech: ['Arduino', 'IoT', 'C++', 'Web Dashboard'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Third Eye for Blind',
    description: 'Arduino-based assistive technology project designed to help visually impaired individuals navigate their surroundings using ultrasonic sensors.',
    tech: ['Arduino', 'Sensors', 'C++'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'News App',
    description: 'Real-time news application utilizing News API. Features category filtering, search functionality, and a clean, reading-focused interface.',
    tech: ['React', 'News API', 'Tailwind CSS'],
    github: null,
    demo: null,
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-white/[0.01] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-cyan-900/40 mix-blend-multiply z-10 group-hover:bg-transparent transition-all duration-500"></div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-cyan-200 bg-cyan-900/30 px-2.5 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-white/10">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors">
                      <Github size={16} /> GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className={`flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors ${!project.github ? '' : 'ml-auto'}`}>
                      <ExternalLink size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
