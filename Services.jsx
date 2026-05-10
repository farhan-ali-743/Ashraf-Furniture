import React from 'react';
import { motion } from 'framer-motion';
import { Home, Grid, LayoutDashboard, BedDouble, Armchair, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    { icon: <BedDouble />, title: "Custom Furniture", desc: "Bespoke pieces crafted to fit perfectly in your space." },
    { icon: <LayoutDashboard />, title: "Kitchen Doors", desc: "Modern and durable solutions for your culinary space." },
    { icon: <Grid />, title: "Cupboards & Wardrobes", desc: "Elegant storage solutions maximizing space and style." },
    { icon: <Home />, title: "Beds & Sofa Sets", desc: "Luxurious comfort combined with stunning aesthetics." },
    { icon: <Armchair />, title: "Wooden Interior", desc: "Complete interior woodwork transformations." },
    { icon: <Hammer />, title: "All Wood Works", desc: "Expert craftsmanship for any woodwork requirement." },
  ];

  return (
    <section id="services" className="py-24 bg-primary-50 dark:bg-primary-950 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase mb-2"
          >
            What We Do
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sora font-bold text-primary-900 dark:text-white mb-6"
          >
            Our Expertise & <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-dark">Services</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-accent/30 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Subtle background glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-primary-50 dark:bg-primary-800 text-accent rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  {React.cloneElement(service.icon, { className: "w-8 h-8" })}
                </div>
                <h3 className="text-xl font-bold font-sora text-primary-900 dark:text-white mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-light">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
