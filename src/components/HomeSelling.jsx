import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Quote, Send, ArrowRight, Check } from 'lucide-react';

// Data for Sidebar Testimonials
const sidebarTestimonials = [
  {
    name: "SUSHEEL SABOO",
    text: "You did a great job selling our house and your customer service was the best I have ever seen. I will refer you to all my friends."
  },
  {
    name: "RHONDA WASH",
    text: "Thanks again for all your help in finding a house - I will highly recommend you to anyone that I know looking for a real estate agent. And if/when I'm ever ready to sell, I'll be sure to list it with you."
  },
  {
    name: "THE VERNONS",
    text: "They took care of everything and our house sold in 7 days."
  }
];

// Data for Comparison Table
const servicesTable = [
  { feature: "Install standard Share Realty sign on premises", fsbo: true, full: true, premium: false },
  { feature: "Install Richmond Association of Realtors lockbox on premises", fsbo: true, full: true, premium: true },
  { feature: "Provide outstanding Central Virginia MLS Database entry (Upload high quality photos, create dynamic description)", fsbo: true, full: true, premium: true },
  { feature: "Your home listed on Real Estate Websites (Realtor.com, Zillow, Trulia, Homes.com, etc)", fsbo: true, full: true, premium: true },
  { feature: "Conduct a minimum of one open house (as needed) with lead-in signs", fsbo: false, full: true, premium: true },
  { feature: "Printed color flyers of the home will be provided", fsbo: false, full: true, premium: false },
  { feature: "Prepare all required 'Virginia Seller Disclosure' forms", fsbo: false, full: true, premium: true },
  { feature: "Accept and pursue all phone and internet leads", fsbo: false, full: true, premium: true },
  { feature: "Schedule all showings with local Realtors as well as the public", fsbo: false, full: true, premium: true },
  { feature: "Acquire customer and Realtor feedback from showings", fsbo: false, full: true, premium: true },
  { feature: "Receive, organize, and explain all incoming offers", fsbo: false, full: true, premium: true },
  { feature: "Negotiate contract terms on your behalf", fsbo: false, full: true, premium: true },
  { feature: "Provide expertise in the forms, processes, and schedules related to a real estate transaction", fsbo: false, full: true, premium: true },
  { feature: "Recommend and consult with experienced service contractors for inspections, repairs, title & settlement", fsbo: false, full: true, premium: true },
  { feature: "Order & facilitate termite inspection", fsbo: false, full: true, premium: true },
  { feature: "Review the HUD settlement statement for accuracy", fsbo: false, full: true, premium: true },
  { feature: "Install upgraded 'For Sale' sign with a vinyl single post with swinging panel", fsbo: false, full: false, premium: true },
  { feature: "Install solar powered sign light so your for sale sign is seen at night", fsbo: false, full: false, premium: true },
  { feature: "Your home's very own website address (i.e. www.1234MainStreet.com)", fsbo: false, full: false, premium: true },
  { feature: "Custom sign rider with home website address", fsbo: false, full: false, premium: true },
  { feature: "Professionally printed bi-fold semi-gloss brochure with multiple color photos", fsbo: false, full: false, premium: true }
];

const HomeSelling = () => {
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
    <section className="py-24 bg-white" id="home-selling">
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
              Flat Fee Home Selling Options
            </h1>

            {/* Premium Image Frame */}
            <div className="relative aspect-[16/9] mb-12 bg-white p-2 shadow-[0_20px_50px_rgb(0,0,0,0.05)] border border-stone-100 rounded-sm overflow-hidden group">
              <div className="w-full h-full overflow-hidden relative">
                <div className="absolute inset-0 bg-[#064A38]/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img 
                  src="/homeselling.png" 
                  alt="Family outside home" 
                  className="w-full h-full object-cover transform transition-transform duration-1000 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Main Article Text */}
            <div className="text-stone-600 font-light leading-relaxed space-y-6 text-lg mb-16">
              <p className="text-xl font-medium text-stone-900 leading-snug">
                Need to sell your Charlottesville or Richmond Virginia Real Estate? Shocked by the total cost of percentage-based commissions?
              </p>
              <p>
                At Share Realty, we understand that today's homeowners expect and deserve a better value. With this in mind, we offer lower fees to Charlottesville and Richmond, Va area Sellers in the form of a Flat Fee Commission (versus a percentage of sales price). Share Realty offers three separate "Seller Options" for Charlottesville and Richmond Virginia homeowners. No matter which option you choose, you pay only when your home sells.
              </p>
              <p className="p-6 bg-stone-50 border-l-4 border-[#C89D6C] italic text-stone-700">
                Since 2003, Share Realty has provided savings of over ONE MILLION DOLLARS to Central Virginia Buyers and Sellers!
              </p>
              <p className="font-medium text-stone-900">
                Contact us today to have us setup a no-obligation home search for you.
              </p>
            </div>

            {/* Split Service Cards (FSBO & Full Service) */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              
              {/* FSBO Card */}
              <div className="bg-white border border-stone-200 p-8 hover:shadow-xl hover:border-[#C89D6C]/50 transition-all duration-300 group flex flex-col">
                <h2 className="text-3xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-100 group-hover:border-[#C89D6C]/30 transition-colors">
                  FSBO
                </h2>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                  The $1,800 Flat Fee For Sale By Owner Option is for those homeowners who want to be very involved in the process and want the opportunity to save money by handling some of the transaction themselves.
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#064A38] font-semibold text-sm hover:text-[#C89D6C] transition-colors uppercase tracking-wide">
                  Learn More About FSBO <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Full Service Card */}
              <div className="bg-white border border-stone-200 p-8 hover:shadow-xl hover:border-[#C89D6C]/50 transition-all duration-300 group flex flex-col">
                <h2 className="text-3xl font-serif text-stone-900 mb-6 pb-4 border-b border-stone-100 group-hover:border-[#C89D6C]/30 transition-colors">
                  Full Service Marketing
                </h2>
                <p className="text-stone-600 font-light text-sm leading-relaxed mb-8 flex-grow">
                  $3,900 Flat Fee (Richmond) $5,000 Flat Fee (Charlottesville). This is a Traditional Real Estate Listing Service, with a Non-Traditional pricing structure. Relax...Share Realty will take care of EVERYTHING!
                </p>
                <a href="#" className="inline-flex items-center gap-2 text-[#064A38] font-semibold text-sm hover:text-[#C89D6C] transition-colors uppercase tracking-wide">
                  Learn More About Full Service <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

            </div>

            {/* Services Comparison Table (NEW) */}
            <h2 className="text-4xl font-serif text-stone-900 mb-8 border-b border-stone-100 pb-6">
              Services For Your Real Estate Needs
            </h2>
            
            <div className="overflow-x-auto bg-white border border-stone-200 rounded-sm shadow-sm mb-16">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#064A38] text-white">
                    <th className="py-5 px-6 font-semibold text-sm tracking-wide uppercase border-b border-[#064A38]">Service Description</th>
                    <th className="py-5 px-6 font-semibold text-sm tracking-wide uppercase border-b border-[#064A38] text-center w-28">FSBO Service</th>
                    <th className="py-5 px-6 font-semibold text-sm tracking-wide uppercase border-b border-[#064A38] text-center w-28">Full Service</th>
                    <th className="py-5 px-6 font-semibold text-sm tracking-wide uppercase border-b border-[#064A38] text-center w-36">Premium Marketing</th>
                  </tr>
                </thead>
                <tbody className="text-stone-600 text-sm">
                  {servicesTable.map((row, index) => (
                    <tr 
                      key={index} 
                      className={`hover:bg-stone-100 transition-colors ${index % 2 === 0 ? 'bg-stone-50/50' : 'bg-white'}`}
                    >
                      <td className="py-4 px-6 border-b border-stone-100 font-light leading-relaxed">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 border-b border-stone-100 text-center">
                        {row.fsbo && <Check className="w-5 h-5 text-[#064A38] mx-auto" />}
                      </td>
                      <td className="py-4 px-6 border-b border-stone-100 text-center">
                        {row.full && <Check className="w-5 h-5 text-[#064A38] mx-auto" />}
                      </td>
                      <td className="py-4 px-6 border-b border-stone-100 text-center">
                        {row.premium && <Check className="w-5 h-5 text-[#064A38] mx-auto" />}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                    <span className="text-xs font-bold text-stone-900 tracking-wider">{testimonial.name}</span>
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
              {/* Added Calendly Booking Link under the form */}
              <p className="text-sm text-stone-500 font-light text-center">
                Or book directly at <br/>
                <a href="https://calendly.com/shannonhyatt/realty" target="_blank" rel="noreferrer" className="text-[#064A38] hover:text-[#C89D6C] font-medium transition-colors">
                  calendly.com/shannonhyatt/realty
                </a>
              </p>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HomeSelling;