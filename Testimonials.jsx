import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Ahmed Khan", role: "Homeowner", text: "ASHRAF Furniture completely transformed our living room. The attention to detail in their custom woodwork is unmatched. Highly recommended for premium interiors.", rating: 5 },
    { name: "Sarah Malik", role: "Interior Designer", text: "As a designer, I need reliable partners who can deliver perfection. Their team always exceeds my expectations with their craftsmanship and timely delivery.", rating: 5 },
    { name: "Bilal Qureshi", role: "Business Owner", text: "We hired them for our office workstations and the result was spectacular. Professional service from consultation to final setup.", rating: 5 },
  ];

  return (
    <section className="py-24 bg-primary-50 dark:bg-primary-950 transition-colors duration-300">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-accent font-semibold tracking-wider uppercase mb-2"
            >
              Client Stories
            </motion.h4>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-sora font-bold text-primary-900 dark:text-white"
            >
              What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-dark">Clients Say</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-accent"
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <span className="font-bold text-primary-900 dark:text-white ml-2">4.9/5 Average Rating</span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-white dark:bg-primary-900 p-8 rounded-3xl shadow-xl border border-primary-100 dark:border-primary-800 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-primary-50 dark:text-primary-800 rotate-180 z-0 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent/10" />
              
              <div className="relative z-10">
                <div className="flex mb-4 text-accent">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-8 leading-relaxed">"{review.text}"</p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-800 flex items-center justify-center text-primary-900 dark:text-white font-bold font-sora">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-bold text-primary-900 dark:text-white">{review.name}</h5>
                    <span className="text-xs text-accent uppercase tracking-wider">{review.role}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
