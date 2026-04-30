import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ServiceDetails from "./components/ServiceDetails";

import "./styles/global.css";

// ✅ Home page layout (your full portfolio)
function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* ✅ Main Portfolio Page */}
        <Route path="/" element={<Home />} />

        {/* ✅ Service Details Page */}
        <Route path="/service/:id" element={<ServiceDetails />} />
      </Routes>
    </>
  );
}

export default App;