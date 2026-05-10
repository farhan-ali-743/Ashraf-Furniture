import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  
  const filters = ['All', 'Wardrobes', 'Beds', 'Kitchen', 'Living Room'];
  
  const projects = [
    { id: 1, category: 'Living Room', title: 'Modern Sofa Set', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-2' },
    { id: 2, category: 'Kitchen', title: 'Luxury Cabinets', image: 'https://images.unsplash.com/photo-1556910103-1c02745a872f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { id: 3, category: 'Wardrobes', title: 'Walk-in Closet', image: 'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
    { id: 4, category: 'Beds', title: 'Platform Bed', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 md:col-span-2 row-span-1' },
    { id: 5, category: 'Living Room', title: 'Coffee Table', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', span: 'col-span-1 row-span-1' },
  ];

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-primary-900 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase mb-2"
            >
              Our Portfolio
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sora font-bold text-primary-900 dark:text-white"
            >
              Discover Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-dark">Craftsmanship</span>
            </motion.h2>
          </div>
          
          {/* Filters */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((f, i) => (
              <button
                key={i}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                  ? 'bg-primary-900 text-white dark:bg-white dark:text-primary-900 shadow-lg' 
                  : 'bg-primary-50 text-gray-600 hover:bg-gray-200 dark:bg-primary-800 dark:text-gray-300 dark:hover:bg-primary-700'
                }`}
              >
                {f}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Bento Grid Gallery */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] gap-4">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className={`group relative rounded-3xl overflow-hidden cursor-pointer ${project.span}`}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-accent font-medium text-sm mb-1">{project.category}</span>
                  <h3 className="text-white font-sora font-bold text-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Gallery;
