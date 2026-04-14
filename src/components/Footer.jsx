import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 max-w-4xl">
          <div className="opacity-100">
            <h2 className="text-3xl font-light text-stone-600 mb-6 pb-4 border-b border-stone-200">Contact us</h2>
            <div className="text-stone-600 text-sm leading-relaxed space-y-6">
              <div><p>Telephone: +1 804 378 7775</p><p>FAX: +1 804 548 4123</p></div>
              <p>E-mail: <a href="mailto:info@ShareRealty.com" className="hover:text-[#064A38] transition-colors">info@ShareRealty.com</a></p>
            </div>
          </div>
          <div className="opacity-100">
            <h2 className="text-3xl font-light text-stone-600 mb-6 pb-4 border-b border-stone-200">Location</h2>
            <div className="text-stone-600 text-sm leading-relaxed">
              <p>14336 Regatta Pointe Road</p>
              <p>Midlothian, Virginia 23112</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#064A38] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-sm font-light mb-8 text-white/90">
            Share Realty© {new Date().getFullYear()} • <a href="#" className="hover:text-[#C89D6C] transition-colors">Privacy Policy</a>
          </div>
          <p className="text-xs leading-[1.8] text-white/70 font-light text-justify md:text-left">
            <strong className="font-semibold text-white/90">Areas Serviced:</strong> Chesterfield County, Henrico County, Hanover County, King William County, New Kent County, Richmond, Goochland County, Powhatan County, Amelia County, Ashland, Colonial Heights, Chester, Midlothian, Mechanicsville, Atlee, Highland Springs, Sandston, Varina, Lakeside, Glen Allen, Western Henrico, Rockville, Manakin, Montpelier, Salisbury, Brandermill, Kings Charter, Winterpock, Skinquarter, Westover Hills, Bon Air, Short Pump, Charlottesville, Albemarle County, Palmyra, Crozet, Orange County, Fluvanna County, Gordonsville, Louisa County, Nelson County, Belmont, Forest Lakes, Hollymead, Zion Crossroads, Dunlora. All Information Deemed Reliable But Not Guaranteed. Buyer Cash Gift Amounts Subject To A 2.5% To 3% Buyer Agent Commission Offered.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;