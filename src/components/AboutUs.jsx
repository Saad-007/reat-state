import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Send } from 'lucide-react';

// Team Data (Aap isme aur log add kar sakte hain)
const teamMembers = [
  {
    name: "Karen Walton",
    title: "Co-Founder",
    bio: "A native of Richmond, Karen has lived all around the Richmond Va area.",
    img: "/one.jpeg" // Public folder image path
  },
  {
    name: "Kelly Bump",
    title: "Realtor",
    bio: "A native of Richmond, Kelly grew up in Chesterfield County and currently resides there.",
    img: "/two.jpg"
  },
  {
    name: "Shannon Hyatt",
    title: "Realtor",
    bio: "Shannon combines 17 years of experience in real estate investing and renovation.",
    img: "/three.png"
  }
];

// Extended Testimonials Data (Based on your image)
const testimonials = [
  {
    name: "Rhonda Walsh",
    text: "Thanks again for all your help in finding a house - I will highly recommend you to anyone that I know looking for a real estate agent. And if/when I'm ever ready to sell, I'll be sure to list it..."
  },
  {
    name: "Beverly Baker",
    text: "I was looking for a hard to find floor plan and Karen Walton helped me find just the right home in a perfect location, within my price range. She was very patient and never tried to pressure me or show..."
  },
  {
    name: "Kelly Rohring",
    text: "Thank you so much for ALL of your help with selling my house. It certainly wouldn't have been possible without you! I will most definitely recommend Share Realty to anyone I know looking to buy/sell..."
  },
  {
    name: "Rita Bartol",
    text: "I can't thank you enough for all of your help and support in selling my home. Your professionalism and expertise, as well as your direct approach far exceeded my expectations. You did a fabulous job!"
  },
  {
    name: "The Robersons",
    text: "Knowledgeable, Professional, and Excellent Customer Service. We highly recommend this Realtor at the best price and quality out there!"
  }
];

const AboutUs = () => {
  // Slider reference for smooth scrolling
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  };

  const slideRight = () => {
    if (sliderRef.current) sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
  };

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
    <section className="py-24 bg-white" id="about-us">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}>
          
          {/* SECTION 1: A few words about us */}
          <motion.div variants={fadeUp} className="mb-24">
            <h2 className="text-4xl font-serif text-[#064A38] mb-8 border-b border-stone-100 pb-4">
              A few words about us
            </h2>
            <div className="grid md:grid-cols-12 gap-10 lg:gap-16 items-start">
              
              {/* Image Container */}
              <div className="md:col-span-4 relative aspect-square md:aspect-[4/5] bg-white p-2 shadow-[0_10px_30px_rgb(0,0,0,0.05)] border border-stone-100 rounded-sm">
                <img 
                  src="/SRAbout.png" 
                  alt="Team hand shake" 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="md:col-span-8 text-stone-600 font-light leading-relaxed space-y-6 text-base md:text-lg">
                <p>
                  <strong className="font-semibold text-stone-900">Share Realty</strong> was started back in 2003 by Jerry Ancarrow and Karen Walton with a goal of providing significant savings to Richmond consumers in the very expensive world of Real Estate services.
                </p>
                <p>
                  After researching other alternative real estate companies across the United States, our current pricing model was created.
                </p>
                <p>
                  The "traditional" pricing for real estate sales is averaged at 6% of the sales price, regardless of how expensive the home, and this pricing model has been in place since real estate services first became licensed in the early 1900's. However, recent technology has drastically changed Real Estate sales...
                </p>
                <p>
                  Today, around 90% of Home Listings are sold through the combined efforts of Cooperating Realtors. With this in mind, Share Realty has created saving opportunities for our clients when they sell a house AND when they buy a house.
                </p>
              </div>
            </div>
          </motion.div>


          {/* SECTION 2: Split Area (Who we are & Our team) */}
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-16 mb-24">
            
            {/* Left Column: Who we are */}
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <h2 className="text-3xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-4">
                Who we are
              </h2>
              
              <div className="space-y-10">
                {/* Item 1 */}
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 bg-[#064A38] group-hover:bg-[#C89D6C] transition-colors duration-300 text-white flex items-center justify-center text-3xl font-serif shadow-md">1</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#064A38] mb-2 group-hover:text-[#C89D6C] transition-colors duration-300">Our Mission</h4>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">To provide home sellers and home buyers with highly experienced agents at a fair price.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 bg-[#064A38] group-hover:bg-[#C89D6C] transition-colors duration-300 text-white flex items-center justify-center text-3xl font-serif shadow-md">2</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#064A38] mb-2 group-hover:text-[#C89D6C] transition-colors duration-300">Your Share</h4>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">Part of our commitment to our home buyers is providing 1% cash back on the purchase of your home. We feel it is a great house warming gift.</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="flex gap-6 group cursor-pointer">
                  <div className="w-16 h-16 shrink-0 bg-[#064A38] group-hover:bg-[#C89D6C] transition-colors duration-300 text-white flex items-center justify-center text-3xl font-serif shadow-md">3</div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#064A38] mb-2 group-hover:text-[#C89D6C] transition-colors duration-300">Seller Options</h4>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">We realize each home and home seller has unique needs which is why we offer "right-fit" Flat Fee options when it comes to selling your home.</p>
                  </div>
                </div>
              </div>
            </motion.div>


            {/* Right Column: Our team */}
            <motion.div variants={fadeUp} className="lg:col-span-8">
              <div className="flex justify-between items-end mb-8 border-b border-stone-100 pb-4">
                <h2 className="text-3xl font-serif text-stone-900">Our team</h2>
                <div className="flex gap-2 text-[#064A38]">
                  <button className="p-1 hover:text-[#C89D6C] transition-colors"><ChevronLeft className="w-6 h-6" /></button>
                  <button className="p-1 hover:text-[#C89D6C] transition-colors"><ChevronRight className="w-6 h-6" /></button>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {teamMembers.map((member, idx) => (
                  <div key={idx} className="group cursor-pointer">
                    <div className="aspect-[4/5] bg-white p-2 shadow-[0_10px_30px_rgb(0,0,0,0.04)] border border-stone-100 rounded-sm mb-6 overflow-hidden">
                      <div className="w-full h-full overflow-hidden relative">
                         <div className="absolute inset-0 bg-[#064A38]/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                         <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-stone-900">{member.name}</h4>
                    <span className="text-xs text-[#C89D6C] uppercase tracking-wider font-semibold block mb-3">{member.title}</span>
                    <p className="text-sm text-stone-500 font-light leading-relaxed">{member.bio}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>


          {/* SECTION 3: What Our Clients Are Saying (UPGRADED SLIDER) */}
          <motion.div variants={fadeUp} className="border-t border-stone-200 pt-24 mb-24">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-6">
              What Our Clients Are Saying
            </h2>
            
            {/* Draggable/Scrollable Container */}
            <div className="relative mt-12">
              <div 
                ref={sliderRef}
                className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} // Hide scrollbar
              >
                {testimonials.map((client, idx) => (
                  <div key={idx} className="min-w-[300px] md:min-w-[350px] snap-start relative bg-stone-50 p-8 border border-stone-100 group hover:shadow-lg hover:border-[#C89D6C]/30 transition-all duration-300">
                    <Quote className="absolute top-6 left-6 w-12 h-12 text-[#C89D6C]/10 group-hover:text-[#C89D6C]/20 transition-colors" />
                    <div className="relative z-10">
                      <h4 className="text-xl font-serif font-bold text-stone-900 mb-4">{client.name}</h4>
                      <p className="text-sm text-stone-500 font-light leading-relaxed line-clamp-6">
                        {client.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Slider Controls */}
              <div className="flex justify-center gap-4 mt-4">
                <button onClick={slideLeft} className="w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-[#064A38] hover:border-[#064A38] transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={slideRight} className="w-12 h-12 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-[#064A38] hover:border-[#064A38] transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* SECTION 4: Contact Us Form (NEW) */}
          <motion.div variants={fadeUp} className="border-t border-stone-200 pt-24">
            <h2 className="text-3xl md:text-4xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-6">
              Contact Us
            </h2>

            <div className="max-w-2xl mt-12">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-stone-600 mb-2">Your Name (required)</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-stone-600 mb-2">Your Email (required)</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-stone-600 mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    rows="5"
                    className="w-full bg-stone-50 border border-stone-200 px-4 py-3 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div>
                  <button type="submit" className="flex items-center justify-center gap-2 w-full md:w-auto bg-[#064A38] text-white px-10 py-4 font-semibold hover:bg-[#C89D6C] transition-all duration-300 shadow-md hover:shadow-lg rounded-sm">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </div>

              </form>
            </div>
          </motion.div>

        </motion.div>
      </div>

      {/* Global CSS for hiding scrollbar in testimonials slider */}
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
};

export default AboutUs;