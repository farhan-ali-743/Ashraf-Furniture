import React from 'react';
import { motion } from 'framer-motion';

const Process = () => {
  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your vision, space requirements, and budget to understand your needs perfectly.' },
    { num: '02', title: 'Design & Planning', desc: 'Our experts create 3D models and detailed layouts for your approval before material selection.' },
    { num: '03', title: 'Crafting', desc: 'Skilled artisans meticulously build your furniture using premium wood and materials.' },
    { num: '04', title: 'Delivery & Setup', desc: 'Safe delivery and professional installation to ensure everything is perfect in your space.' },
  ];

  return (
    <section id="process" className="py-24 bg-primary-900 dark:bg-primary-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase mb-2"
          >
            How We Work
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sora font-bold mb-6"
          >
            Our Custom <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-light">Work Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-24 h-24 rounded-full glass border border-white/10 flex items-center justify-center mb-8 relative z-10 shadow-xl shadow-black/20">
                <span className="text-3xl font-sora font-bold text-accent">{step.num}</span>
              </div>
              <h3 className="text-xl font-bold font-sora mb-3">{step.title}</h3>
              <p className="text-gray-400 font-light text-sm px-4 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
