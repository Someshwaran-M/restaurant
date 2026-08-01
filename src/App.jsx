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
  const [activeSection, setActiveSection] = useState(null);

  return (
    <div className="bg-white overflow-x-hidden">
      
      <ScrollToTop />

     <Navbar
  darkMode={darkMode}
  setDarkMode={setDarkMode}
  setActiveSection={setActiveSection}
/>
      <main>
        <section id="home">
          <Hero darkMode={darkMode} />
        </section>

        <section id="about">
          <About darkMode={darkMode}/>
        </section>

        <section id="destinationcards">
          <DestinationCards darkMode={darkMode} />
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

      {activeSection === "tours" && (
  <section id="tours">
    <Tours darkMode={darkMode} />
  </section>
)}

{activeSection === "gallery" && (
  <section id="gallery">
    <Gallery darkMode={darkMode} />
  </section>
)}

{activeSection === "contact" && (
  <section id="contact">
    <Contact darkMode={darkMode} />
  </section>
)}
      
       

      </main>

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;