import { motion } from 'framer-motion';
import { Layers, Smartphone, Database, Server, PenTool, LayoutTemplate } from 'lucide-react';

const servicesData = [
  {
    title: 'Full Stack Web Development',
    description: 'End-to-end development of robust and scalable web applications tailored to business needs.',
    icon: Layers,
  },
  {
    title: 'Frontend Development',
    description: 'Crafting pixel-perfect, highly interactive, and responsive user interfaces with modern frameworks.',
    icon: LayoutTemplate,
  },
  {
    title: 'Backend API Development',
    description: 'Building secure, scalable, and efficient RESTful APIs to power your applications.',
    icon: Server,
  },
  {
    title: 'QA Automation Testing',
    description: 'Implementing robust automation testing frameworks to guarantee product reliability.',
    icon: Database,
  },
  {
    title: 'Responsive Web Design',
    description: 'Ensuring your website looks stunning and functions perfectly across all devices and screen sizes.',
    icon: Smartphone,
  },
  {
    title: 'UI/UX Implementation',
    description: 'Translating design mockups into fully functional, accessible, and interactive web experiences.',
    icon: PenTool,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white/[0.01] relative">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services <span className="text-cyan-400">Offered</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300 border border-white/5 shadow-lg">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
