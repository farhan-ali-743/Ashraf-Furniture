import React from 'react';
import { Link } from 'react-scroll';
import { Sofa, Share2, ArrowUp } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-950 pt-20 pb-10 text-white relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6 cursor-pointer">
              <Sofa className="w-8 h-8 text-accent" />
              <div className="flex flex-col">
                <span className="font-sora font-bold text-xl leading-none tracking-tight">ASHRAF</span>
                <span className="font-inter text-xs tracking-widest text-primary-500">FURNITURE & SONS</span>
              </div>
            </div>
            <p className="text-gray-400 font-light text-sm leading-relaxed mb-6">
              Crafting premium furniture and bespoke woodwork that elevates your living and working spaces with timeless elegance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sora font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Gallery', 'Process'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item.toLowerCase()} 
                    smooth={true} 
                    duration={800}
                    className="text-gray-400 hover:text-accent cursor-pointer transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sora font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400 text-sm">Custom Furniture</li>
              <li className="text-gray-400 text-sm">Kitchen Doors & Cabinets</li>
              <li className="text-gray-400 text-sm">Wardrobes & Cupboards</li>
              <li className="text-gray-400 text-sm">Beds & Sofa Sets</li>
              <li className="text-gray-400 text-sm">Wooden Interior Works</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sora font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Call Us</span>
                <span>0313-5649680</span>
                <span>0300-5649680</span>
              </li>
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Email</span>
                <span>Waleedraza067@gmail.com</span>
              </li>
              <li className="text-gray-400 text-sm flex flex-col gap-1">
                <span className="text-white/60 text-xs uppercase tracking-wider">Location</span>
                <span>New Sabzi Mandi Kalgan Moor</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} ASHRAF Furniture & Sons. All rights reserved.
          </p>
          <Link 
            to="hero" 
            smooth={true} 
            duration={1000}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent transition-colors cursor-pointer"
          >
            <ArrowUp className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
