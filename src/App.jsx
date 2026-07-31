// src/App.jsx

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import DestinationCards from "./components/DestinationCards";
import ServiceAreas from "./components/ServiceAreas";
import Faq from "./components/Faq";
import { useState } from "react";
import Tours from "./components/Tours";

function App() {
  const [showMore, setShowMore] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Scroll to Top Button */}
      <ScrollToTop />

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Main Content */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="destinationcards">
          <DestinationCards />
        </section>

        <section id="services">
          <Services darkMode={darkMode} />
        </section>

        <section id="serviceareas">
          <ServiceAreas darkMode={darkMode} />
        </section>


        <section id="testimonials">
          <Testimonials darkMode={darkMode} />
        </section>

        <section id="faq">
          <Faq darkMode={darkMode}/>
        </section>

      <Tours darkMode={darkMode} />
      <Gallery darkMode={darkMode} />
      <Contact darkMode={darkMode} />   

      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;