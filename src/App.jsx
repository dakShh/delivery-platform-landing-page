import React from "react";

// ** Animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// ** Components import
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Features from "./components/Features.jsx";
import Testimonials from "./components/Testimonials.jsx";
import CtaSection from "./components/CtaSection.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  Aos.init({
    duration: 1000,
    offset: 0,
  });

  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <Features />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default App;
