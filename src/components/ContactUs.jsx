import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Printer } from 'lucide-react';

const ContactUs = () => {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <section className="py-24 bg-stone-50 min-h-screen" id="contact-page">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden" 
          animate="visible" 
          variants={stagger}
        >
          {/* Header Title */}
          <motion.div variants={fadeUp} className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-[#C89D6C] font-semibold tracking-[0.2em] uppercase text-xs mb-4 block">Get In Touch</span>
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6">
              Contact Share Realty
            </h1>
          </motion.div>

          {/* =========================================
              TOP SECTION: GOOGLE MAP EMBED
              ========================================= */}
          <motion.div variants={fadeUp} className="mb-20">
            <div className="w-full h-[400px] md:h-[500px] bg-white p-2 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-200 rounded-sm overflow-hidden">
              <iframe 
                title="Share Realty Location"
                src="https://maps.google.com/maps?q=14336%20Regatta%20Pointe%20Rd,%20Midlothian,%20VA%2023112&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale-[20%] hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          </motion.div>

          {/* =========================================
              BOTTOM SECTION: INFO & FORM SPLIT
              ========================================= */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Left Column: Contact Info */}
            <motion.div variants={fadeUp} className="lg:col-span-5">
              <h2 className="text-3xl font-serif text-stone-900 mb-8 border-b border-stone-200 pb-4">
                Contact info
              </h2>
              
              <div className="text-stone-600 font-light leading-relaxed space-y-6 text-base md:text-lg mb-10">
                <p className="font-medium text-stone-900">
                  Contact the team at Share Realty to experience the difference.
                </p>
                <p>
                  Share Realty helps you get the most out of your home buying or home selling experience. We have experience on our side and let you have a share of the proceeds. Let us help you get the most for you and your family.
                </p>
              </div>

              <div className="bg-white p-8 border border-stone-100 shadow-sm rounded-sm space-y-6">
                <h3 className="text-xl font-bold text-stone-900 mb-2">Share Realty</h3>
                
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-[#C89D6C] shrink-0 mt-1" />
                  <p className="text-stone-600 text-sm leading-relaxed">
                    14336 Regatta Pointe Road<br />
                    Midlothian, Virginia 23112
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#C89D6C] shrink-0" />
                  <p className="text-stone-600 text-sm">Telephone: +1 804 378 7775</p>
                </div>

                <div className="flex items-center gap-4">
                  <Printer className="w-5 h-5 text-[#C89D6C] shrink-0" />
                  <p className="text-stone-600 text-sm">FAX: +1 804 548 4123</p>
                </div>

                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#C89D6C] shrink-0" />
                  <p className="text-stone-600 text-sm">
                    E-mail: <a href="mailto:info@ShareRealty.com" className="text-[#064A38] hover:text-[#C89D6C] font-medium transition-colors">info@ShareRealty.com</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Contact Form */}
            <motion.div variants={fadeUp} className="lg:col-span-7">
              <h2 className="text-3xl font-serif text-stone-900 mb-8 border-b border-stone-200 pb-4">
                Contact form
              </h2>
              
              <div className="bg-white p-8 md:p-10 border border-stone-100 shadow-[0_10px_40px_rgb(0,0,0,0.03)] rounded-sm">
                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  
                  {/* Name Input */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-stone-600 mb-2">Your Name (required)</label>
                    <input 
                      type="text" 
                      id="contact-name" 
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-stone-600 mb-2">Your Email (required)</label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm"
                    />
                  </div>

                  {/* Message Input */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-stone-600 mb-2">Your Message</label>
                    <textarea 
                      id="contact-message" 
                      rows="6"
                      className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button type="submit" className="flex items-center justify-center gap-3 w-full md:w-auto bg-[#064A38] text-white px-10 py-4 font-semibold tracking-wide hover:bg-[#C89D6C] transition-all duration-300 shadow-md hover:shadow-xl rounded-sm">
                      Send <Send className="w-4 h-4" />
                    </button>
                  </div>

                </form>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;