import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

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

// pages
import CartPage from "./pages/CartPage";
import Checkout from "./pages/Checkout";
import OrderTracking from "./pages/OrderTracking";

// admin
import AdminLogin from "./admin/AdminLogin";
import AdminDashboard from "./admin/AdminDashboard";
import AdminOrders from "./admin/AdminOrders";
import AdminOrderDetail from "./admin/AdminOrderDetail";
import AdminCustomers from "./admin/AdminCustomers";
import AdminReports from "./admin/AdminReports";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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

              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/tracking" element={<OrderTracking />} />

              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/orders" element={<AdminOrders />} />
              <Route path="/admin/orders/:id" element={<AdminOrderDetail />} />
              <Route path="/admin/customers" element={<AdminCustomers />} />
              <Route path="/admin/reports" element={<AdminReports />} />
            </Routes>
          </main>
          <ScrollToTopButton />
          <Footer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;