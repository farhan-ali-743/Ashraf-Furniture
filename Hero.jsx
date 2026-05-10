import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618220179428-22790b46a013?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Furniture Showroom" 
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/70 to-transparent dark:from-primary-900/95 dark:via-primary-900/80 dark:to-transparent/50"></div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 mt-20 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-accent/20 border border-accent/50 text-accent font-medium text-sm mb-6 backdrop-blur-sm">
              Premium Woodwork & Design
            </span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl font-sora font-bold leading-tight mb-6"
          >
            Crafting Luxury <br />
            <span className="text-accent">Living Spaces.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 font-light mb-10 max-w-2xl"
          >
            Elevate your home with bespoke furniture and custom woodwork designed for elegance, durability, and timeless appeal.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              to="gallery" 
              smooth={true} 
              duration={800} 
              offset={-80}
              className="px-8 py-4 bg-accent hover:bg-accent-hover text-white rounded-full font-medium transition-all text-center cursor-pointer shadow-lg shadow-accent/30 hover:shadow-accent/50 hover:-translate-y-1"
            >
              View Our Work
            </Link>
            <Link 
              to="contact" 
              smooth={true} 
              duration={800} 
              offset={-80}
              className="px-8 py-4 glass-card hover:bg-white/10 rounded-full font-medium transition-all text-center cursor-pointer flex items-center justify-center gap-2"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs tracking-widest text-white/70 uppercase">Scroll</span>
        <div className="w-px h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ top: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 w-full h-1/2 bg-accent"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
