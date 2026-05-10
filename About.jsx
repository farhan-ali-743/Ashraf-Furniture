import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Clock } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-primary-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Images Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-4 relative">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="col-span-1 rounded-2xl overflow-hidden shadow-2xl mt-12"
              >
                <img src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Woodworking" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="col-span-1 rounded-2xl overflow-hidden shadow-2xl"
              >
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Modern Interior" className="w-full h-full object-cover" />
              </motion.div>
              
              {/* Experience Badge */}
              <motion.div 
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent text-white w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-white dark:border-primary-900"
              >
                <span className="text-3xl font-sora font-bold">15+</span>
                <span className="text-xs font-medium uppercase tracking-wider text-center px-2">Years of Excellence</span>
              </motion.div>
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-accent font-semibold tracking-wider uppercase mb-2">Our Story</h4>
              <h2 className="text-4xl md:text-5xl font-sora font-bold text-primary-900 dark:text-white mb-6 leading-tight">
                Mastering the Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-dark">Fine Woodwork</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg font-light leading-relaxed">
                At ASHRAF Furniture & Sons, we blend traditional craftsmanship with modern design aesthetics to create pieces that define luxury and comfort. Our passion for woodwork transforms raw timber into masterpieces for your home and office.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-800 rounded-xl text-accent">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-900 dark:text-white mb-1">Premium Quality</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Finest materials and finishing.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-50 dark:bg-primary-800 rounded-xl text-accent">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-900 dark:text-white mb-1">Custom Design</h5>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Tailored to your specific needs.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
