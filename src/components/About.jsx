import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Info,
  ArrowRightLeft,
  RotateCcw,
  CheckCircle2,
  Sparkles,
  User,
  Phone,
  Calendar,
  Clock,
  MessageCircle,
} from "lucide-react";

// Animated count-up component
function CountUp({ value }) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);

  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  const numPart = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  const hasComma = numPart.includes(",");
  const isDecimal = numPart.includes(".");
  const target = parseFloat(numPart.replace(/,/g, ""));

  const formatNumber = (num) => {
    if (isDecimal) return num.toFixed(1);
    const rounded = Math.round(num);
    return hasComma ? rounded.toLocaleString("en-IN") : rounded.toString();
  };

  const runCount = () => {
    if (started || Number.isNaN(target)) return;
    setStarted(true);

    const durationMs = 1800;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(formatNumber(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(formatNumber(target));
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <motion.h6
      onViewportEnter={runCount}
      viewport={{ once: true, amount: 0.6 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 tracking-tight"
    >
      {display}
      {suffix}
    </motion.h6>
  );
}

// Exact 7 cars & prices requested by user
const selectCars = [
  { id: 1, name: "MINI", price: "₹15/km", img: "/images/Car1.png" },
  { id: 2, name: "SEDAN", price: "₹16/km", img: "/images/Car2.png" },
  { id: 3, name: "ERTIGA", price: "₹21/km", img: "/images/Car3.png" },
  { id: 4, name: "INNOVA", price: "₹22/km", img: "/images/Car4.png" },
  { id: 5, name: "INNOVA CRYSTA", price: "₹25/km", img: "/images/Car5.png" },
  { id: 6, name: "TEMPO TRAVELLER", price: "₹30/km", img: "/images/Car6.png" },
  { id: 7, name: "FORCE URBANIA", price: "₹35/km", img: "/images/Car7.png" },
];

function About({ darkMode }) {
  const openWhatsAppBooking = (carName, carPrice) => {
    const msg = `Hi, I would like to book the *${carName}* (${carPrice}) for my upcoming trip.`;
    window.open(
      `https://wa.me/919888444952?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  // Quick Taxi Booking form state
  const [bookingData, setBookingData] = useState({
    pickup: "",
    drop: "",
    name: "",
    mobile: "",
    pickupDate: "",
    pickupTime: "",
    returnDate: "",
    tripType: "One Way",
    acType: "AC",
  });

  const handleBookingChange = (e) => {
    const { name, value } = e.target;
    setBookingData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const returnLine =
      bookingData.tripType === "Round Trip"
        ? `%0A*Return Date:* ${bookingData.returnDate}`
        : "";
    const msg =
      `Hi, I would like to book a taxi.` +
      `%0A*Pickup Location:* ${bookingData.pickup}` +
      `%0A*Drop Location:* ${bookingData.drop}` +
      `%0A*Full Name:* ${bookingData.name}` +
      `%0A*Mobile Number:* ${bookingData.mobile}` +
      `%0A*Pickup Date:* ${bookingData.pickupDate}` +
      `%0A*Pickup Time:* ${bookingData.pickupTime}` +
      returnLine +
      `%0A*Trip Type:* ${bookingData.tripType}` +
      `%0A*AC / Non-AC:* ${bookingData.acType}`;
    window.open(`https://wa.me/918884449452?text=${msg}`, "_blank");
  };

  const cities = [
    "Madurai",
    "Salem",
    "Trichy",
    "Tirunelveli",
    "Bangalore",
    "Pondicherry",
    "Ooty",
    "Kodaikanal",
    "Erode",
    "Vellore",
    "Thanjavur",
    "Dindigul",
    "Karur",
  ];

  const stats = [
    { number: "10,000+", label: "HAPPY TRIPS" },
    { number: "55+", label: "CITIES COVERED" },
    { number: "4.8★", label: "AVERAGE RATING" },
    { number: "24/7", label: "BOOKING SUPPORT" },
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-8 sm:py-16 transition-colors duration-500 font-outfit ${
        darkMode ? "bg-[#080C16] text-white" : "bg-slate-50 text-slate-900"
      }`}
    >
      {/* Floating Cities Marquee Strip */}
      <div
        className={`border-b transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#0d1220]"
            : "border-slate-200 bg-white"
        }`}
      >
        <div className="max-w-[1800px] mx-auto overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...cities, ...cities].map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5"
              >
                <MapPin size={16} className="text-orange-500 shrink-0" />
                <span
                  className={`font-medium text-base sm:text-lg ${
                    darkMode ? "text-gray-300" : "text-slate-700"
                  }`}
                >
                  {city}
                </span>
                <span className="text-orange-500/40 text-xs ml-4">•</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full px-4 sm:px-10 lg:px-20 mt-8 sm:mt-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-4">
            About Us
          </div>
          <p
            className={`text-sm sm:text-base lg:text-[1.05rem] leading-7 text-center sm:text-justify hyphens-auto ${
              darkMode ? "text-gray-300" : "text-slate-600"
            }`}
          >
            Travel with confidence across South India with our trusted one-way
            taxi service. We provide safe, comfortable, and affordable rides for
            outstation trips, airport transfers, and city-to-city travel across{" "}
            <span className="text-orange-500 font-semibold">
              Tamil Nadu, Kerala, and Karnataka
            </span>
            . With fixed fares, well-maintained vehicles, and verified
            professional drivers, we ensure every journey is smooth, reliable,
            and hassle-free. Whether you're traveling for business, family, or
            leisure, we're committed to making your trip comfortable from pickup
            to drop.
          </p>

          {/* Trust badges row */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4 sm:gap-10">
            {[
              "Toll charges as per actual",
              "No hidden fees",
              "Transparent billing",
            ].map((badge, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center shrink-0">
                  <div className="w-2 h-2 rounded-full bg-orange-500" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    darkMode ? "text-gray-300" : "text-slate-600"
                  }`}
                >
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Quick Taxi Booking Card + Car Image */}
      <div className="w-full px-4 sm:px-6 lg:px-12 mt-10 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left: Quick Taxi Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="order-1 rounded-[20px] sm:rounded-[24px] p-4 sm:p-5 bg-transparent border-2 border-orange-500 shadow-xl shadow-orange-500/10"
          >
            <h2
              className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
                darkMode ? "text-white" : "text-slate-900"
              }`}
            >
              Quick Taxi Booking
            </h2>
            <p className="text-orange-500 font-semibold text-xs sm:text-sm mt-0.5 mb-4">
              One Way • Outstation • Airport Drop
            </p>

            <form onSubmit={handleBookingSubmit} className="space-y-2.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="text"
                    name="pickup"
                    required
                    value={bookingData.pickup}
                    onChange={handleBookingChange}
                    placeholder="Pickup Location"
                    className={`w-full h-11 pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>

                <div className="relative">
                  <MapPin
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="text"
                    name="drop"
                    required
                    value={bookingData.drop}
                    onChange={handleBookingChange}
                    placeholder="Drop Location"
                    className={`w-full h-11 pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="relative">
                  <User
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="text"
                    name="name"
                    required
                    value={bookingData.name}
                    onChange={handleBookingChange}
                    placeholder="Full Name"
                    className={`w-full h-11 pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>

                <div className="relative">
                  <Phone
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={bookingData.mobile}
                    onChange={handleBookingChange}
                    placeholder="Mobile Number"
                    className={`w-full h-11 pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>
              </div>

              <div
                className={`grid grid-cols-1 gap-2.5 ${
                  bookingData.tripType === "Round Trip"
                    ? "sm:grid-cols-3"
                    : "sm:grid-cols-2"
                }`}
              >
                <div className="relative">
                  <Calendar
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="date"
                    name="pickupDate"
                    required
                    value={bookingData.pickupDate}
                    onChange={handleBookingChange}
                    className={`w-full pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>

                <div className="relative">
                  <Clock
                    size={16}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                  />
                  <input
                    type="time"
                    name="pickupTime"
                    required
                    value={bookingData.pickupTime}
                    onChange={handleBookingChange}
                    className={`w-full pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                      darkMode
                        ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                        : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                    }`}
                  />
                </div>

                {bookingData.tripType === "Round Trip" && (
                  <div className="relative">
                    <Calendar
                      size={16}
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500"
                    />
                    <input
                      type="date"
                      name="returnDate"
                      required
                      value={bookingData.returnDate}
                      onChange={handleBookingChange}
                      placeholder="Return Date"
                      className={`w-full pl-10 pr-3 py-2 text-sm rounded-xl outline-none bg-transparent transition-colors ${
                        darkMode
                          ? "border border-white/15 text-white placeholder:text-gray-500 focus:border-orange-500"
                          : "border border-slate-300 text-slate-900 placeholder:text-slate-400 focus:border-orange-500"
                      }`}
                    />
                  </div>
                )}
              </div>

              {/* Trip Type */}
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
                    darkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  Trip Type
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setBookingData((prev) => ({
                        ...prev,
                        tripType: "One Way",
                      }))
                    }
                    className={`rounded-xl py-2 text-center transition-all duration-200 border text-sm ${
                      bookingData.tripType === "One Way"
                        ? "bg-orange-500 border-orange-500 text-white"
                        : darkMode
                          ? "bg-transparent border-white/15 text-gray-300 hover:border-white/30"
                          : "bg-transparent border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    <span className="block font-bold">One Way</span>
                    <span className="block text-[10px] opacity-70">
                      Min 150 KM
                    </span>
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setBookingData((prev) => ({
                        ...prev,
                        tripType: "Round Trip",
                      }))
                    }
                    className={`rounded-xl py-2 text-center transition-all duration-200 border text-sm ${
                      bookingData.tripType === "Round Trip"
                        ? "bg-orange-500 border-orange-500 text-white"
                        : darkMode
                          ? "bg-transparent border-white/15 text-gray-300 hover:border-white/30"
                          : "bg-transparent border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    <span className="block font-bold">Round Trip</span>
                    <span className="block text-[10px] opacity-70">
                      Min 300 KM / Day
                    </span>
                  </button>
                </div>
              </div>

              {/* AC / Non-AC */}
              <div>
                <p
                  className={`text-xs font-bold uppercase tracking-wider mb-1.5 ${
                    darkMode ? "text-gray-400" : "text-slate-500"
                  }`}
                >
                  AC / Non-AC
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() =>
                      setBookingData((prev) => ({ ...prev, acType: "AC" }))
                    }
                    className={`rounded-xl py-2 text-center font-bold text-sm transition-all duration-200 border ${
                      bookingData.acType === "AC"
                        ? "bg-orange-500 border-orange-500 text-white"
                        : darkMode
                          ? "bg-transparent border-white/15 text-gray-300 hover:border-white/30"
                          : "bg-transparent border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    AC
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setBookingData((prev) => ({ ...prev, acType: "Non AC" }))
                    }
                    className={`rounded-xl py-2 text-center font-bold text-sm transition-all duration-200 border ${
                      bookingData.acType === "Non AC"
                        ? "bg-orange-500 border-orange-500 text-white"
                        : darkMode
                          ? "bg-transparent border-white/15 text-gray-300 hover:border-white/30"
                          : "bg-transparent border-slate-300 text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    Non AC
                  </button>
                </div>
              </div>

              {/* Send Booking via WhatsApp / Call Directly */}
              <div className="rounded-xl overflow-hidden border border-orange-500 mt-1">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-colors"
                >
                  <MessageCircle size={18} />
                  Send Booking via WhatsApp
                </button>
                <div className="bg-black py-2 text-center text-gray-400 text-xs">
                  or call directly
                </div>
                <div className="border-t border-orange-500" />
                <a
                  href="tel:+918884449452"
                  className="block bg-black text-center py-3 text-orange-500 font-extrabold text-base tracking-wide"
                >
                  +91 8884449452
                </a>
              </div>
            </form>
          </motion.div>

          {/* Right: Animated Car Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="flex justify-center items-center order-2"
          >
            <motion.img
              src="/images/Aboutcar.png"
              alt="Tour car"
              animate={{ y: [0, -18, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-full max-w-md lg:max-w-lg object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.35)]"
            />
          </motion.div>
        </div>
      </div>

      {/* Select Car Topic */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-500 text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles size={14} /> Fleet Rates & Selection
          </div>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              darkMode ? "text-white" : "text-slate-900"
            }`}
          >
            Select <span className="text-orange-500">Car</span>
          </h2>
        </div>

        {/* Fleet Slider */}
        <div className="relative w-full overflow-hidden py-4">
          <motion.div
            className="flex items-center gap-12 sm:gap-16 w-max select-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...selectCars, ...selectCars].map((car, idx) => (
              <div
                key={`${car.id}-${idx}`}
                className="flex flex-col items-center justify-center shrink-0 group transition-transform duration-300 hover:scale-105"
              >
                <div className="h-32 sm:h-44 w-52 sm:w-72 flex items-center justify-center relative">
                  <img
                    src={car.img}
                    alt={car.name}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_15px_20px_rgba(0,0,0,0.35)] transition-transform duration-300 group-hover:-translate-y-2"
                  />
                  <div className="absolute bottom-1 w-[80%] h-3 bg-black/40 blur-md rounded-full -z-10" />
                </div>

                <div className="text-center mt-3">
                  <h3
                    className={`text-base sm:text-xl font-black uppercase tracking-wider ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {car.name}
                  </h3>
                  <div className="mt-1 inline-block px-3.5 py-1 rounded-full bg-orange-500 text-white font-extrabold text-xs sm:text-sm shadow-md shadow-orange-500/30">
                    {car.price}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Info Cards — exact reference image ── */}
      <div className="w-full px-4 sm:px-8 lg:px-12 mt-16 sm:mt-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
          {[
            {
              icon: Info,
              title: ["Important", "Information"],
              delay: 0,
              leftGlow: true,
              waveDeco: false,
              items: [
                "Toll, parking and permit charges are billed as per actual.",
                "Driver bata varies depending on the selected vehicle.",
                "Route or distance changes may affect the final fare.",
                "Vehicle allocation depends on availability and trip type.",
                "Night travel and hill station charges may apply when required.",
              ],
            },
            {
              icon: ArrowRightLeft,
              title: ["One Way", "Travel Terms"],
              delay: 0.15,
              leftGlow: false,
              waveDeco: false,
              items: [
                "Minimum 150 KM billing.",
                "Driver bata ₹400 (Mini) to ₹500 (Sedan & above).",
                "Toll & parking charges extra (actual).",
                "No return fare charged.",
                "Ideal for city-to-city drop trips.",
              ],
            },
            {
              icon: RotateCcw,
              title: ["Round Trip", "Travel Terms"],
              delay: 0.3,
              leftGlow: false,
              waveDeco: true,
              items: [
                "Minimum 300 KM billing.",
                "Driver bata ₹400–₹500/day (Tempo Traveller ₹800).",
                "Flexible return schedule.",
                "Extra KM charged separately.",
                "Best suited for multi-day journeys.",
              ],
            },
          ].map(
            ({ icon: Icon, title, delay, leftGlow, waveDeco, items }, ci) => (
              <motion.div
                key={ci}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.55 }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                  boxShadow:
                    "0 0 0 1.5px rgba(249,115,22,0.8), 0 0 30px 6px rgba(249,115,22,0.25), 0 20px 50px rgba(249,115,22,0.15)",
                }}
                className={`relative rounded-2xl overflow-hidden p-6 sm:p-8 cursor-default group transition-shadow duration-300 ${
                  darkMode
                    ? "bg-[#0c1322] border border-white/8"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
                style={{ isolation: "isolate" }}
              >
                {/* ── Shimmer sweep on hover ── */}
                <motion.div
                  className="pointer-events-none absolute inset-0 z-10"
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{ x: "120%", opacity: 1 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  style={{
                    background:
                      "linear-gradient(105deg, transparent 40%, rgba(249,115,22,0.12) 50%, transparent 60%)",
                  }}
                />

                {/* ── Left orange glow border (card 1 only) ── */}
                {leftGlow && (
                  <div className="absolute left-0 top-6 bottom-6 w-[3px] rounded-full bg-gradient-to-b from-orange-500/0 via-orange-500 to-orange-500/0" />
                )}

                {/* ── Wave decoration bottom-right (card 3) ── */}
                {waveDeco && (
                  <div className="absolute bottom-0 right-0 pointer-events-none opacity-30 overflow-hidden w-40 h-28">
                    {[0, 8, 16, 24].map((offset) => (
                      <svg
                        key={offset}
                        className="absolute"
                        style={{ bottom: offset, right: -10 }}
                        width="160"
                        height="40"
                        viewBox="0 0 160 40"
                        fill="none"
                      >
                        <path
                          d="M0 20 Q40 0 80 20 Q120 40 160 20"
                          stroke="#f97316"
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    ))}
                  </div>
                )}

                {/* ── Dot grid (card 3) ── */}
                {waveDeco && (
                  <div className="absolute bottom-6 right-5 grid grid-cols-7 gap-[4px] pointer-events-none opacity-25">
                    {Array.from({ length: 35 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-[3px] h-[3px] rounded-full bg-orange-500"
                      />
                    ))}
                  </div>
                )}

                {/* ── Icon + Title row (side by side, exactly like reference) ── */}
                <div className="flex items-start gap-4">
                  {/* Circular icon */}
                  <div className="shrink-0 w-14 h-14 rounded-full border-2 border-orange-500 bg-orange-500/10 flex items-center justify-center">
                    <Icon size={24} className="text-orange-500" />
                  </div>
                  {/* Title — two separate lines, bold */}
                  <h3
                    className={`text-2xl sm:text-3xl font-extrabold leading-tight ${
                      darkMode ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {title[0]}
                    <br />
                    {title[1]}
                  </h3>
                </div>

                {/* ── Orange dash divider ── */}
                <div className="mt-5 mb-5 flex items-center gap-[5px]">
                  <div className="h-[2px] w-10 bg-orange-500 rounded-full" />
                  <div className="h-[2px] w-3  bg-orange-500/50 rounded-full" />
                  <div className="h-[2px] w-1.5 bg-orange-500/25 rounded-full" />
                </div>

                {/* ── Checklist items ── */}
                <div className="space-y-[18px]">
                  {items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {/* Circle-check icon matching reference */}
                      <div className="mt-[3px] shrink-0 w-[18px] h-[18px] rounded-full border-[1.8px] border-orange-500 flex items-center justify-center">
                        <CheckCircle2 size={11} className="text-orange-500" />
                      </div>
                      <p
                        className={`text-sm leading-snug ${
                          darkMode ? "text-gray-300" : "text-slate-600"
                        }`}
                      >
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>

      {/* ── Stats Bar — full-width, edge-to-edge, reference design ── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className={`mt-16 sm:mt-20 w-full border-t border-b py-10 sm:py-14 transition-colors duration-500 ${
          darkMode
            ? "bg-[#080c16] border-white/8"
            : "bg-slate-50 border-slate-200"
        }`}
      >
        <div className="w-full flex flex-col sm:flex-row items-center divide-y sm:divide-y-0 sm:divide-x divide-orange-500/20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center justify-center py-6 sm:py-0 relative"
            >
              {/* Vertical orange dot in divider (matches reference) */}
              {index > 0 && (
                <div className="hidden sm:block absolute -left-px top-1/2 -translate-y-1/2 w-[3px] h-[3px] rounded-full bg-orange-500 z-10" />
              )}

              <CountUp value={stat.number} />

              {/* Orange dot + underline accent */}
              <div className="mt-2 flex items-center gap-1.5">
                <div className="w-[5px] h-[5px] rounded-full bg-orange-500" />
                <div className="h-[2px] w-8 bg-orange-500/60 rounded-full" />
              </div>

              <p
                className={`mt-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[3px] ${
                  darkMode ? "text-gray-400" : "text-slate-500"
                }`}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default About;
