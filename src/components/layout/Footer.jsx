import { Link } from 'react-scroll';
import { Mail, ArrowUp } from 'lucide-react';
import { FaGithub as Github, FaLinkedin as Linkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black py-12 border-t border-white/5 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-2xl font-bold tracking-tighter">
              <span className="text-white">MD </span>
              <span className="text-cyan-400">RASHID</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm text-center md:text-left">
              Building scalable applications and delivering quality software through modern web technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/Rashid-Indpro" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/md-rashid-computerengineer/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300">
              <Linkedin size={20} />
            </a>
            <a href="mailto:mdrashid06450@gmail.com" className="w-10 h-10 rounded-full glass flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>

          <Link
            to="hero"
            smooth={true}
            duration={800}
            className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-black cursor-pointer transition-all duration-300"
          >
            <ArrowUp size={24} />
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Md Rashid. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="hero" smooth={true} duration={500} className="hover:text-cyan-400 cursor-pointer transition-colors">Home</Link>
            <Link to="about" smooth={true} duration={500} className="hover:text-cyan-400 cursor-pointer transition-colors">About</Link>
            <Link to="projects" smooth={true} duration={500} className="hover:text-cyan-400 cursor-pointer transition-colors">Projects</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
