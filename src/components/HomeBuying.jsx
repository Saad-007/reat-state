import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Send } from 'lucide-react';

// Data for Sidebar Testimonials (Updated from your Home Buyers image)
const sidebarTestimonials = [
  {
    name: "BEVERLY BAKER",
    text: "I was looking for a hard to find floor plan and Karen Walton helped me find just the right home in a perfect location, within my price range. She was very patient and never tried to pressure me or show me houses that didn't fit my criteria. Karen was also a wise advocate when dealing with the seller's agent."
  },
  {
    name: "BARBARA AND STEVE HAVENS",
    text: "Thanks so much for everything you have done! You have been great and have gone above and beyond! We really appreciate all of your effort and time."
  },
  {
    name: "GARY JACOBSEN",
    text: "We really picked the right Realtor. You were knowledgeable and sold the house quickly. Thanks so much for everything."
  }
];

const HomeBuying = () => {
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
    <section className="py-24 bg-white" id="home-buying">
      <div className="max-w-7xl mx-auto px-6">
        
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }} 
          variants={stagger}
          className="grid lg:grid-cols-12 gap-16 relative items-start"
        >
          
          {/* =========================================
              LEFT COLUMN: MAIN CONTENT (Takes 8 columns)
              ========================================= */}
          <motion.div variants={fadeUp} className="lg:col-span-8">
            
            <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-6">
              Homebuyers Services
            </h1>

            {/* Premium Image Frame */}
            <div className="relative aspect-[16/9] mb-12 bg-white p-2 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-100 rounded-sm overflow-hidden group">
              <div className="w-full h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#064A38]/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                {/* Note: Save an image as buying-main.jpg in your public folder */}
                <img 
                  src="/Homebuyers.png" 
                  alt="Family bringing home" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Main Article Text */}
            <div className="text-stone-600 font-light leading-relaxed space-y-6 text-lg mb-16">
              
              <h2 className="text-2xl font-serif text-[#064A38] mb-4">
                We SHARE our (seller paid) sales commission with you!
              </h2>

              <div className="p-8 bg-stone-50 border-l-4 border-[#C89D6C] shadow-sm mb-8">
                <p className="text-xl font-medium text-stone-900 leading-snug">
                  When Share Realty helps you find and buy your home (as your Buyer's Agent), you'll receive a personal cash closing gift (from us) equal to <strong className="text-[#064A38] font-bold">1% OF THE SALES PRICE.</strong>
                </p>
              </div>

              <p>
                As a Buyer, you do not pay for Share Realty's services. All the houses that are listed for sale by real estate agents are currently offering commission to Buyer's Agents. Your Share Realty agent will arrange to show you the homes that interest you, and when you purchase one, Share Realty will be paid commission at closing. This commission is taken from the seller's proceeds, so you do not pay anything for this.
              </p>
              
              <p>
                While commissions are set by individual brokerages, commission offered to Buyer's Agents here in Richmond and surrounding areas is frequently 3% of the sales price. Using that example, Share Realty gives 1/3 of that 3% (1% of the sales price) back to our clients as a gift. It can help pay for your closing costs associated with your loan, or you can simply accept it after closing and spend it however you like!
              </p>

              <p>
                Put our more than 30 years of experience to work for you. Having successfully sold over 60 million dollars in real estate since 2003, you can be assured of the best in professional service.
              </p>

              <p className="font-medium text-stone-900 pt-4">
                Contact us to begin your search!
              </p>
            </div>

          </motion.div>


          {/* =========================================
              RIGHT COLUMN: STICKY SIDEBAR (Takes 4 cols)
              ========================================= */}
          <motion.div variants={fadeUp} className="lg:col-span-4 lg:sticky lg:top-32 space-y-16">
            
            {/* Our Services Navigation List */}
            <div>
              <h3 className="text-3xl font-light text-stone-800 mb-6 pb-4 border-b border-stone-200">Our Services</h3>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="group flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-stone-500 hover:text-[#064A38] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#C89D6C] group-hover:translate-x-1 transition-transform" /> Home Selling Overview
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-stone-500 hover:text-[#064A38] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#C89D6C] group-hover:translate-x-1 transition-transform" /> Full Service Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="group flex items-center gap-3 text-xs tracking-widest uppercase font-semibold text-stone-500 hover:text-[#064A38] transition-colors">
                    <ChevronRight className="w-4 h-4 text-[#C89D6C] group-hover:translate-x-1 transition-transform" /> Assisted For Sale By Owner
                  </a>
                </li>
              </ul>
            </div>

            {/* Sidebar Testimonials */}
            <div>
              <h3 className="text-3xl font-light text-stone-800 mb-6 pb-4 border-b border-stone-200">Testimonials</h3>
              <div className="space-y-8 mb-8">
                {sidebarTestimonials.map((testimonial, idx) => (
                  <div key={idx} className="relative">
                    <p className="text-stone-500 text-sm font-light leading-relaxed italic mb-3">
                      "{testimonial.text}"
                    </p>
                    <span className="text-xs font-bold text-stone-900 tracking-wider uppercase">{testimonial.name}</span>
                  </div>
                ))}
              </div>
              <button className="bg-[#064A38] text-white px-8 py-3 text-sm font-semibold hover:bg-[#C89D6C] transition-colors rounded-sm shadow-sm">
                View All
              </button>
            </div>

            {/* Compact Sidebar Contact Form */}
            <div>
              <div className="bg-stone-50 p-6 md:p-8 border border-stone-100 shadow-[0_10px_40px_rgb(0,0,0,0.03)] mb-4">
                <h3 className="text-3xl font-light text-stone-800 mb-6 pb-4 border-b border-stone-200">Contact us</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-2">Your Name (required)</label>
                    <input type="text" className="w-full bg-white border border-stone-200 px-4 py-2 text-sm text-stone-800 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-2">Your Email (required)</label>
                    <input type="email" className="w-full bg-white border border-stone-200 px-4 py-2 text-sm text-stone-800 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-stone-500 mb-2">Your Message</label>
                    <textarea rows="4" className="w-full bg-white border border-stone-200 px-4 py-2 text-sm text-stone-800 focus:outline-none focus:border-[#064A38] focus:ring-1 focus:ring-[#064A38] transition-all rounded-sm resize-none"></textarea>
                  </div>
                  <button type="submit" className="w-full bg-[#064A38] text-white px-4 py-3 text-sm font-semibold hover:bg-[#C89D6C] transition-colors rounded-sm flex justify-center items-center gap-2">
                    Send <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeBuying;