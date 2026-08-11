import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ReserveTable from "./components/ReserveTable";
import Faq from "./components/Faq";
import ServiceAreas from "./components/ServiceAreas";
import Testimonials from "./components/Testimonials";
import ScrollToTopButton from "./components/ScrollToTopButton";

function App() {
  return (
    <BrowserRouter>
      <div className="app min-h-screen bg-black">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserve" element={<ReserveTable />} />

            <Route path="/faq" element={<Faq />} />
            <Route path="/serviceareas" element={<ServiceAreas />} />
            <Route path="/testimonials" element={<Testimonials />} />
          
          </Routes>
        </main>
<ScrollToTopButton />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;