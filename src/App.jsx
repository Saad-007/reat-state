import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PremiumLandingPage from './components/Landingpage';
import AboutUs from './components/AboutUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSelling from './components/HomeSelling';
import HomeBuying from './components/HomeBuying';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-[#064A38] selection:text-white">
        
        {/* Navbar hamesha top par rahega */}
        <Navbar /> 

        {/* Yeh hissa url ke hisaab se change hoga */}
        <div className="pt-24 md:pt-0"> {/* Navbar ki spacing ke liye */}
          <Routes>
            <Route path="/" element={<PremiumLandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/home-selling" element={<HomeSelling />} />
            <Route path="/home-buying" element={<HomeBuying />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </div>
        
        {/* Footer hamesha bottom par rahega */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;