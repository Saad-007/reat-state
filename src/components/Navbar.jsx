import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex justify-between items-center rounded-2xl transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/40 px-6 py-3' : 'bg-transparent px-2'
        }`}>
          
          <div className="flex items-center gap-3">
             {/* Make sure your logo is in the public folder */}
            <a href="/"><img src="/ShareRealty.png" alt="Share Realty Logo" className="h-12 w-auto object-contain drop-shadow-sm" /></a>
          </div>
          
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-stone-600">
            {/* Note: I changed the Home link to "/" so it goes back to main page */}
            <a href="/" className="hover:text-[#064A38] transition-colors">Home</a>
            <a href="/about" className="hover:text-[#064A38] transition-colors">About</a>
            {/* Pehle yeh wapis home page pe le ja raha tha, ab yeh naye page par jayega */}
<a href="/home-selling" className="hover:text-[#064A38] transition-colors">Home Selling</a>
            <a href="/home-buying" className="hover:text-[#064A38] transition-colors">Home Buying</a>
            {/* Contact link ko update karein */}
<a href="/contact" className="hover:text-[#064A38] transition-colors">Contact</a>
          </div>

          <button className="hidden md:block bg-[#064A38] text-white px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-[#043326] transition-colors duration-300 shadow-lg shadow-[#064A38]/20">
            Client Portal
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;