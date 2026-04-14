import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, MapPin, ArrowRight, Shield, Phone, Search, ChevronRight, Star } from 'lucide-react';

const backgroundImages = [
  "/2.png",
  "/3.png",
  "/3.0.jpg"
];

const PremiumLandingPage = () => {
  const [scrolled, setScrolled] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  // Handle scroll for floating nav
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle automatic background image sliding
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % backgroundImages.length);
    }, 6000); // Changes image every 6 seconds

    return () => clearInterval(timer);
  }, []);

  // Framer Motion Configurations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-[#064A38] selection:text-white">

      
      {/* Cinematic Hero Section with Image Slider */}
      <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">

        {/* Background Slider Elements */}
        <div className="absolute inset-0 z-0 bg-stone-900">
          {backgroundImages.map((img, index) => (
            <motion.div
              key={img}
              initial={false}
              animate={{
                opacity: currentImage === index ? 1 : 0,
                scale: currentImage === index ? 1 : 1.1
              }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${img}')` }}
            />
          ))}

          {/* Gradients to ensure text is readable over the rotating images */}
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/90 to-transparent w-full md:w-[65%] z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-50 via-transparent to-transparent z-10" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="max-w-2xl"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
              <div className="flex items-center gap-1 text-[#C89D6C]">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm font-medium text-stone-600 border-l border-stone-300 pl-2 ml-1">
                Your trusted real estate partner
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[1.05] mb-6 text-stone-900">
              Modern real estate. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#064A38] to-[#C89D6C]">
                Smarter fees.
              </span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-light max-w-xl">
              Experience full-service representation with a disruptive pricing model. 1% cash back for buyers, and flat-fee listings starting at just $1,800.
            </motion.p>

            {/* Smart Search Bar */}
            <motion.div variants={fadeUp} className="bg-white p-3 rounded-2xl shadow-[0_20px_40px_rgb(0,0,0,0.04)] border border-stone-200 flex flex-col sm:flex-row gap-3 max-w-xl">
              <div className="flex-1 flex items-center gap-3 px-4 py-2 bg-stone-50 rounded-xl border border-stone-100">
                <Search className="w-5 h-5 text-[#C89D6C]" />
                <input
                  type="text"
                  placeholder="Search zip, neighborhood, or city..."
                  className="bg-transparent border-none outline-none w-full text-stone-700 placeholder:text-stone-400 focus:ring-0"
                />
              </div>
              <button className="bg-[#064A38] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#043326] transition-all flex items-center justify-center gap-2 whitespace-nowrap">
                Search Properties <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Slider Indicators (The little dots at the bottom of the text) */}
            <motion.div variants={fadeUp} className="flex gap-3 mt-12">
              {backgroundImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`h-1.5 rounded-full transition-all duration-500 ${currentImage === index ? 'w-8 bg-[#064A38]' : 'w-2 bg-stone-300 hover:bg-[#C89D6C]'
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </motion.div>

          </motion.div>
        </div>
      </section>

      {/* Premium Services Split Section */}
      <section className="py-32 bg-white relative z-20" id="services">
        <div className="max-w-7xl mx-auto px-6">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
          >
            {/* Elevated Introductory Text (Editorial Style) */}
            <motion.div variants={fadeUp} className="max-w-4xl mx-auto text-center mb-24">
              <span className="text-[#C89D6C] font-semibold tracking-[0.2em] uppercase text-xs mb-6 block">Our Expertise</span>
              <h2 className="text-3xl md:text-5xl font-serif text-stone-900 leading-tight">
                Since 2003, providing excellent real estate services to Richmond buyers and sellers.
              </h2>
            </motion.div>

            {/* Two Column Grid */}
            <div className="grid md:grid-cols-2 gap-16 lg:gap-24">

              {/* Home Buyers Column */}
              <motion.div variants={fadeUp} className="group flex flex-col h-full cursor-pointer">
                {/* Section Header with Gold Accent */}
                <div className="flex items-center gap-6 mb-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Home Buyers</h2>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-stone-200 to-transparent"></div>
                </div>

                {/* Luxury Gallery Frame Image Container */}
                <div className="relative aspect-[16/10] mb-10 bg-white p-2 md:p-3 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-100 rounded-sm overflow-hidden">
                  <div className="w-full h-full overflow-hidden relative">
                    {/* Subtle dark overlay that fades on hover */}
                    <div className="absolute inset-0 bg-[#064A38]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img 
                      src="/HomeBuying.png" 
                      alt="Home Buyers" 
                      className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex-grow flex flex-col pl-2 md:pl-4 border-l border-[#C89D6C]/30">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-[#064A38] transition-colors duration-300">
                    What Could You Do With 1% Cash Back?
                  </h3>
                  
                  <p className="text-stone-500 text-base leading-relaxed mb-10 font-light">
                    At Share Realty, we work with you to find the perfect home for you and your family. Whether you are looking for a specific area within central Virginia or shopping for a specific school district for your children within the Richmond area, we can help. And by the way, we provide <strong className="text-[#064A38] font-semibold">1% cash back</strong> to you after we find that perfect home.
                  </p>

                  {/* Modern Animated Button */}
                  <div className="mt-auto flex justify-start">
                    <button className="flex items-center gap-3 bg-[#064A38] text-white px-8 py-4 rounded-none font-semibold tracking-wide hover:bg-[#C89D6C] transition-all duration-300 shadow-lg shadow-[#064A38]/10 group-hover:shadow-xl group-hover:shadow-[#C89D6C]/20">
                      Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>


              {/* Home Sellers Column */}
              <motion.div variants={fadeUp} className="group flex flex-col h-full cursor-pointer mt-12 md:mt-0">
                {/* Section Header with Gold Accent */}
                <div className="flex items-center gap-6 mb-8">
                  <h2 className="text-4xl md:text-5xl font-serif text-stone-900">Home Sellers</h2>
                  <div className="h-[1px] flex-grow bg-gradient-to-r from-stone-200 to-transparent"></div>
                </div>

                {/* Luxury Gallery Frame Image Container */}
                <div className="relative aspect-[16/10] mb-10 bg-white p-2 md:p-3 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-100 rounded-sm overflow-hidden">
                  <div className="w-full h-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-[#064A38]/10 group-hover:bg-transparent transition-colors duration-700 z-10" />
                    <img 
                      src="/HomeSeller.png" 
                      alt="Home Sellers" 
                      className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex-grow flex flex-col pl-2 md:pl-4 border-l border-[#C89D6C]/30">
                  <h3 className="text-2xl font-bold text-stone-900 mb-4 group-hover:text-[#064A38] transition-colors duration-300">
                    Selling Options From $1,800
                  </h3>
                  
                  <p className="text-stone-500 text-base leading-relaxed mb-10 font-light">
                    We understand there isn't a "one-size fits all" when it comes to selling your home. That is why we offer Flat Fee options for listing your home. We cater to both home sellers who need a full-service professional and others who just need to list their home as a For Sale By Owner.
                  </p>

                  {/* Modern Animated Button */}
                  <div className="mt-auto flex justify-start">
                    <button className="flex items-center gap-3 bg-[#064A38] text-white px-8 py-4 rounded-none font-semibold tracking-wide hover:bg-[#C89D6C] transition-all duration-300 shadow-lg shadow-[#064A38]/10 group-hover:shadow-xl group-hover:shadow-[#C89D6C]/20">
                      Learn More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
};

export default PremiumLandingPage;