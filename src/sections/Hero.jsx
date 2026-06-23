import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';
import { Download, Mail, ChevronDown } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';
import profileImg from '../assets/rashidprofile.jfif';

const Hero = () => {

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 w-max text-sm font-medium tracking-wide">
            Software Engineer | Full Stack Developer | QA
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Md Rashid
            </span>
          </h1>

          <div className="text-2xl md:text-3xl font-medium text-gray-300 h-10">
            I specialize in{' '}
            <span className="text-cyan-400 font-bold">
              <Typewriter
                words={[
                  'React.js',
                  'Angular',
                  'Svelte',
                  'Node.js',
                  'FastAPI',
                  'Python',
                  'Playwright',
                  'Automation Testing',
                ]}
                loop={true}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Results-driven Software Engineer with experience in Full Stack Development, Automation Testing, and Manual Testing. Passionate about building scalable applications, delivering quality software, and solving real-world problems.
          </p>

          <div className="flex flex-wrap gap-4 mt-4">
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-400 text-gray-900 font-semibold hover:bg-cyan-300 hover:shadow-[0_0_20px_#00f0ff] transition-all duration-300"
            >
              <Download size={20} />
              Resume
            </a>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-transparent border border-gray-600 text-white font-semibold hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300 cursor-pointer"
            >
              <Mail size={20} />
              Contact Me
            </Link>
          </div>

          <div className="flex gap-6 mt-4">
            <a href="https://github.com/Rashid-Indpro" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/md-rashid-computerengineer/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300">
              <Linkedin size={28} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Profile Image / Abstract representation */}
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 rounded-full border-2 border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-8 rounded-full bg-cyan-900/20 border border-white/10 flex items-center justify-center overflow-hidden">
              <img src={profileImg} alt="Md Rashid" className="w-full h-full object-cover" />
            </div>
            {/* Floating tech icons around the profile */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-10 left-10 w-12 h-12 glass rounded-xl flex items-center justify-center text-cyan-400 font-bold"
            >
              Re
            </motion.div>
            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute bottom-20 right-10 w-12 h-12 glass rounded-xl flex items-center justify-center text-purple-400 font-bold"
            >
              Py
            </motion.div>
            <motion.div 
              animate={{ y: [-5, 5, -5] }} 
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute top-20 right-5 w-12 h-12 glass rounded-xl flex items-center justify-center text-yellow-400 font-bold"
            >
              JS
            </motion.div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <Link to="about" smooth={true} duration={500} className="cursor-pointer text-gray-400 hover:text-cyan-400 transition-colors">
          <ChevronDown size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
