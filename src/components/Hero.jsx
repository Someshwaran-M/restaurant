import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  Clock,
  BadgeDollarSign,
  User,
  Phone,
  Calendar,
  ArrowRight,
  ArrowLeftRight,
  X,
  Send,
} from "lucide-react";

const heroCar = "/images/Herobg.png";

const vehicles = [
  { id: 1, name: "MINI", price: "₹15/km", img: "/images/Car1.png" },
  { id: 2, name: "SEDAN", price: "₹16/km", img: "/images/Car2.png" },
  { id: 3, name: "ERTIGA", price: "₹21/km", img: "/images/Car3.png" },
  { id: 4, name: "INNOVA", price: "₹22/km", img: "/images/Car4.png" },
  { id: 5, name: "INNOVA CRYSTA", price: "₹25/km", img: "/images/Car5.png" },
  { id: 6, name: "TEMPO TRAVELLER", price: "₹30/km", img: "/images/Car6.png" },
  { id: 7, name: "FORCE URBANIA", price: "₹35/km", img: "/images/Car7.png" },
];

function Hero({ darkMode = true }) {
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [tripType, setTripType] = useState("oneway");
  const [acType, setAcType] = useState("ac");
  const [vehicle, setVehicle] = useState(2);
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [pickupTime, setPickupTime] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const selectedVehicleObj = vehicles.find((v) => v.id === vehicle) || vehicles[1];

  const handleWhatsAppBooking = (e) => {
    e?.preventDefault();
    const msg = `*NEW TAXI BOOKING REQUEST*%0A` +
      `----------------------------------%0A` +
      `📍 *Pickup:* ${pickup || "Not specified"}%0A` +
      `🏁 *Drop:* ${drop || "Not specified"}%0A` +
      `👤 *Name:* ${name || "Not specified"}%0A` +
      `📞 *Phone:* ${phone || "Not specified"}%0A` +
      `📅 *Date:* ${pickupDate || "Not specified"} ${pickupTime ? `at ${pickupTime}` : ""}%0A` +
      (tripType === "roundtrip" ? `🔄 *Return Date:* ${returnDate || "Not specified"}%0A` : "") +
      `🚖 *Trip Type:* ${tripType === "oneway" ? "One Way" : "Round Trip"}%0A` +
      `❄️ *AC Option:* ${acType.toUpperCase()}%0A` +
      `🚗 *Vehicle:* ${selectedVehicleObj.name} (${selectedVehicleObj.price})%0A` +
      `----------------------------------`;

    window.open(`https://wa.me/919888444952?text=${msg}`, "_blank");
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className={`relative w-full min-h-screen transition-colors duration-500 overflow-hidden flex flex-col justify-between pt-4 pb-8 px-4 sm:px-8 lg:px-14 font-outfit ${
        darkMode ? "bg-[#111115] text-white" : "bg-[#f8fafc] text-slate-900"
      }`}
    >
      {/* Background SVG Curve & Concentric Rings */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="none"
        >
          {/* Vibrant Orange Curved Left Block */}
          <path
            d="M 0,0 L 480,0 C 740,260 740,640 430,900 L 0,900 Z"
            fill="#f95400"
          />

          {/* Concentric Subtle Line Rings on the right side */}
          <path
            d="M 530,0 C 790,260 790,640 480,900"
            fill="none"
            stroke={darkMode ? "rgba(255, 255, 255, 0.07)" : "rgba(0, 0, 0, 0.08)"}
            strokeWidth="1.5"
          />
          <path
            d="M 590,0 C 850,260 850,640 540,900"
            fill="none"
            stroke={darkMode ? "rgba(255, 255, 255, 0.04)" : "rgba(0, 0, 0, 0.05)"}
            strokeWidth="1.5"
          />
          <path
            d="M 650,0 C 910,260 910,640 600,900"
            fill="none"
            stroke={darkMode ? "rgba(255, 255, 255, 0.025)" : "rgba(0, 0, 0, 0.03)"}
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Top Header / Navigation */}
      <header className="relative z-20 flex items-center justify-between w-full max-w-7xl mx-auto pt-2">
        {/* Brand Logo - THE TAXI
        <div className="flex items-center">
          <h1 className="text-2xl sm:text-3xl font-black tracking-widest text-black uppercase cursor-pointer select-none">
            THE TAXI
          </h1>
        </div> */}

        {/* Right Nav Links */}
        <nav className={`flex items-center gap-4 sm:gap-10 text-xs sm:text-sm font-semibold transition-colors ${
          darkMode ? "text-gray-300" : "text-slate-700"
        }`}>
          <button
            onClick={() => scrollToSection("about")}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-orange-500 transition cursor-pointer"
          >
            Contact Us
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="hover:text-orange-500 transition cursor-pointer hidden sm:block"
          >
            How It Works
          </button>

          <button
            onClick={() => setShowBookingModal(true)}
            className="px-4 sm:px-7 py-2 sm:py-2.5 rounded-lg border border-orange-500 text-orange-500 font-bold text-xs uppercase tracking-wider hover:bg-orange-500 hover:text-white transition duration-300 cursor-pointer shadow-md shadow-orange-500/20"
          >
            BOOK NOW
          </button>
        </nav>
      </header>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto w-full my-auto py-6 sm:py-10 lg:py-16 flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-6 items-center">
        
        {/* Car Image — shows BELOW text on mobile, left column on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1 lg:col-span-6 relative flex flex-col items-center justify-center"
        >
          {/* Animated Floating Car */}
          <div className="relative w-full max-w-[300px] sm:max-w-[440px] lg:max-w-[600px] mx-auto">
            <motion.img
              animate={{ y: [-5, 5, -5] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              src={heroCar}
              alt="The Taxi Car"
              className="w-full h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
            />
            {/* Subtle Tire Shadow */}
            <motion.div
              animate={{ scale: [0.95, 1.05, 0.95], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="w-[75%] h-5 sm:h-6 bg-black/60 blur-lg rounded-[100%] mx-auto -mt-6 sm:-mt-8"
            />
          </div>
        </motion.div>

        {/* Right Side: Headline, Description & Feature Pills */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-1 lg:order-2 lg:col-span-6 lg:pl-6 flex flex-col justify-center text-left"
        >
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.2] ${
            darkMode ? "text-white" : "text-slate-900"
          }`}>
            Book One Way Taxi
            <br />
            Across{" "}
            <span className="font-caveat text-orange-500 font-bold relative inline-block text-3xl sm:text-5xl lg:text-6xl pl-1 tracking-normal">
              South India
              <svg className="absolute -bottom-2 left-0 w-full h-3 text-orange-500" viewBox="0 0 120 12" fill="none">
                <path d="M3 9C30 3 90 3 117 9" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          {/* Subtitle / Paragraph Description in Exactly Two Lines */}
          <div className={`mt-4 sm:mt-5 text-sm sm:text-base max-w-xl leading-relaxed space-y-1 ${
            darkMode ? "text-gray-300" : "text-slate-700 font-medium"
          }`}>
            <p>Travel anywhere in Tamil Nadu, Kerala & Karnataka with reliable taxi service.</p>
            <p>Fixed fare, clean vehicles and professional drivers for safe outstation and airport rides.</p>
          </div>

          {/* Feature Pills — wrap on mobile, single line on desktop */}
          <div className="mt-4 flex items-center justify-start gap-1.5 sm:gap-2 flex-wrap w-full py-1">
            {[
              { icon: BadgeDollarSign, text: "Fixed Fare" },
              { icon: ShieldCheck, text: "No Hidden Charges" },
              { icon: Clock3, text: "24/7 Support" },
              { icon: MapPin, text: "Verified Drivers" },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className={`flex items-center gap-1 sm:gap-1.5 rounded-full border px-2.5 sm:px-3.5 py-1.5 text-[10px] sm:text-xs font-semibold whitespace-nowrap shadow-sm transition shrink-0 ${
                  darkMode
                    ? "border-white/10 bg-black/40 backdrop-blur-md text-white hover:border-orange-500/40"
                    : "border-orange-200 bg-white text-slate-800 shadow-orange-500/5 hover:border-orange-400"
                }`}
              >
                <Icon size={12} className="text-orange-500 shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* QUICK BOOKING MODAL */}
      <AnimatePresence>
        {showBookingModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-xl rounded-3xl border border-gray-800 bg-[#14161d] p-6 sm:p-8 text-white shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowBookingModal(false)}
                className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:text-white hover:bg-white/20 transition cursor-pointer"
              >
                <X size={20} />
              </button>

              <h3 className="text-2xl font-bold text-white">Quick Taxi Booking</h3>
              <p className="text-xs text-gray-400 mt-1">One Way • Outstation • Airport Drop</p>

              <form onSubmit={handleWhatsAppBooking} className="mt-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Pickup Location</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="text"
                        placeholder="Enter pickup"
                        value={pickup}
                        onChange={(e) => setPickup(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Drop Location</label>
                    <div className="relative">
                      <MapPin size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="text"
                        placeholder="Enter drop"
                        value={drop}
                        onChange={(e) => setDrop(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Full Name</label>
                    <div className="relative">
                      <User size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Mobile Number</label>
                    <div className="relative">
                      <Phone size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="tel"
                        placeholder="Mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Pickup Date</label>
                    <div className="relative">
                      <Calendar size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Pickup Time</label>
                    <div className="relative">
                      <Clock size={16} className="absolute left-3 top-3 text-orange-400" />
                      <input
                        type="time"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                        className="w-full h-10 rounded-xl border border-gray-700 bg-gray-900 pl-9 pr-3 text-sm text-white focus:border-orange-500 outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Trip Type */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Trip Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setTripType("oneway")}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition ${
                        tripType === "oneway" ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-gray-800 bg-gray-900 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-xs">
                        <ArrowRight size={14} /> One Way
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setTripType("roundtrip")}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition ${
                        tripType === "roundtrip" ? "border-orange-500 bg-orange-500/10 text-orange-400" : "border-gray-800 bg-gray-900 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-2 font-bold text-xs">
                        <ArrowLeftRight size={14} /> Round Trip
                      </div>
                    </button>
                  </div>
                </div>

                {/* Vehicle Selection */}
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">Select Vehicle</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                    {vehicles.map((v) => (
                      <div
                        key={v.id}
                        onClick={() => setVehicle(v.id)}
                        className={`p-2 rounded-xl border cursor-pointer text-center transition ${
                          vehicle === v.id ? "border-orange-500 bg-orange-500/20" : "border-gray-800 bg-gray-900"
                        }`}
                      >
                        <img src={v.img} alt={v.name} className="h-8 w-full object-contain mx-auto" />
                        <p className="text-[10px] font-bold text-orange-400 mt-1">{v.price}</p>
                        <p className="text-[9px] font-semibold text-gray-300 truncate">{v.name}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 font-bold text-white shadow-lg shadow-orange-500/30 hover:from-orange-600 hover:to-orange-700 transition cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  <span>Send Booking via WhatsApp</span>
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Hero;
