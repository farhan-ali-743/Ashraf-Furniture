import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white dark:bg-primary-900 transition-colors duration-300 relative">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent font-semibold tracking-wider uppercase mb-2"
          >
            Get In Touch
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-sora font-bold text-primary-900 dark:text-white"
          >
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-wood-dark">Project</span>
          </motion.h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-primary-50 dark:bg-primary-800/30 rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-white dark:border-primary-800">
          
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <h3 className="text-2xl font-bold font-sora text-primary-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-400 font-light mb-10">
              Ready to start your custom woodwork project? Reach out to us for a free consultation and quotation.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-primary-900 flex items-center justify-center text-accent shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-primary-900 dark:text-white mb-1">Phone</h5>
                  <p className="text-gray-600 dark:text-gray-400">0313-5649680</p>
                  <p className="text-gray-600 dark:text-gray-400">0300-5649680</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-primary-900 flex items-center justify-center text-accent shrink-0 shadow-md">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-primary-900 dark:text-white mb-1">Email</h5>
                  <p className="text-gray-600 dark:text-gray-400">Waleedraza067@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-primary-900 flex items-center justify-center text-accent shrink-0 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-primary-900 dark:text-white mb-1">Location</h5>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    New Sabzi Mandi Kalgan Moor<br/>
                    Visit our showroom to see our quality.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <form className="bg-white dark:bg-primary-900 rounded-3xl p-8 shadow-xl border border-primary-100 dark:border-primary-800" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold font-sora text-primary-900 dark:text-white mb-6">Send an Inquiry</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-950 border-none focus:ring-2 focus:ring-accent outline-none transition-all dark:text-white" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-950 border-none focus:ring-2 focus:ring-accent outline-none transition-all dark:text-white" placeholder="03xx-xxxxxxx" />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Service Required</label>
                <select className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-950 border-none focus:ring-2 focus:ring-accent outline-none transition-all dark:text-white appearance-none">
                  <option>Custom Furniture</option>
                  <option>Kitchen Doors</option>
                  <option>Cupboards & Wardrobes</option>
                  <option>Beds & Sofa Sets</option>
                  <option>Wooden Interior Work</option>
                  <option>Other Wood Work</option>
                </select>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message Details</label>
                <textarea rows="4" className="w-full px-4 py-3 rounded-xl bg-primary-50 dark:bg-primary-950 border-none focus:ring-2 focus:ring-accent outline-none transition-all dark:text-white resize-none" placeholder="Tell us about your project requirements..."></textarea>
              </div>
              
              <button type="submit" className="w-full py-4 bg-accent hover:bg-accent-hover text-white rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/30 group">
                Send Message
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
