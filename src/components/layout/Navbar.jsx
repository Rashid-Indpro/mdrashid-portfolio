import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Achievements', to: 'achievements' },
    { name: 'Services', to: 'services' },
    { name: 'Contact', to: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-[#050505] shadow-[0_4px_30px_rgba(0,0,0,0.5)] border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-2xl font-bold tracking-tighter cursor-pointer"
        >
          <span className="text-white">MD </span>
          <span className="text-cyan-400">RASHID</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              spy={true}
              activeClass="text-cyan-400"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            download
            className="px-5 py-2 text-sm font-semibold rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/50 hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050505] shadow-xl border-b border-white/5 absolute top-full left-0 w-full flex flex-col items-center py-6 gap-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth={true}
                duration={500}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="px-6 py-2 text-sm font-semibold rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/50"
            >
              Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
