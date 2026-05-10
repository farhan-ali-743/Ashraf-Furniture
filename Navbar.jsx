import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Moon, Sun, Sofa } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ darkMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Services', to: 'services' },
    { name: 'Gallery', to: 'gallery' },
    { name: 'Process', to: 'process' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <Sofa className="w-8 h-8 text-accent" />
          <div className="flex flex-col">
            <span className="font-sora font-bold text-xl leading-none tracking-tight">ASHRAF</span>
            <span className="font-inter text-xs tracking-widest text-primary-500">FURNITURE & SONS</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth={true}
              duration={800}
              offset={-80}
              className="text-sm font-medium hover:text-accent cursor-pointer transition-colors"
            >
              {link.name}
            </Link>
          ))}
          
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-primary-900/10 dark:hover:bg-white/10 transition-colors">
            {darkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-primary-900" />}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={toggleTheme} className="p-2 rounded-full">
            {darkMode ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5" />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary-900 dark:text-white">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass absolute top-full left-0 right-0 border-t border-white/10"
          >
            <div className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={800}
                  offset={-80}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium hover:text-accent cursor-pointer transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
