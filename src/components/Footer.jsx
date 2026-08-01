import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  IndianRupee,
  Car,
  PhoneCall,
} from "lucide-react";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer
      className={`relative overflow-hidden transition-all duration-500 ${
        darkMode ? "bg-[#080C16] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* top gradient line */}
      <div className="absolute top-0 left-0 h-[3px] w-40 bg-gradient-to-r from-orange-500 to-transparent" />

      {/* ambient glows */}
      <div
        className={`absolute left-0 top-0 h-64 w-64 rounded-full blur-[120px] ${
          darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
        }`}
      />
      <div
        className={`absolute right-0 bottom-0 h-64 w-64 rounded-full blur-[120px] ${
          darkMode ? "bg-amber-500/10" : "bg-yellow-300/20"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-9">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/images/Logo.png"
                alt="Nagma Tours & Travels logo"
                className="h-10 w-auto object-contain"
              />
              <h2 className="text-lg font-bold leading-tight">
                Nagma
                <br />
                <span className="text-orange-400">Tours&amp;Travels</span>
              </h2>
            </div>

            <p
              className={`mt-3 text-sm leading-6 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              One Way &amp; Outstation Cab Service across Tamil Nadu, Kerala,
              Karnataka and Pondicherry.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="tel:+919888444952"
                className="flex items-center gap-2 rounded-full border border-orange-500 px-4 py-2 text-xs font-medium text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >
                <Phone size={14} />
                Call
              </a>

              <a
                href="https://wa.me/919888444952"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-full bg-orange-500 px-4 py-2 text-xs font-medium text-white transition-all duration-300 hover:bg-orange-600"
              >
                <FaWhatsapp size={14} />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Explore Services */}
          <div>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-orange-400">
              Explore Services
            </h3>
            <div className="mb-3 h-[2px] w-8 bg-orange-500" />

            <ul className="space-y-2.5">
              {[
                { icon: Calendar, label: "Book a Cab", href: "#services" },
                {
                  icon: IndianRupee,
                  label: "Taxi Fare & Pricing",
                  href: "#services",
                },
                { icon: Car, label: "Available Cars", href: "#services" },
                {
                  icon: MapPin,
                  label: "One Way Taxi Service",
                  href: "#services",
                },
                {
                  icon: PhoneCall,
                  label: "Contact & Booking",
                  href: "#contact",
                },
              ].map(({ icon: Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`flex items-center gap-2 text-xs transition hover:text-orange-500 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Icon size={14} className="text-orange-400 shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Routes */}
          <div>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-orange-400">
              Popular Routes
            </h3>
            <div className="mb-3 h-[2px] w-8 bg-orange-500" />

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                "Chennai to Madurai Taxi",
                "Chennai to Coimbatore Taxi",
                "Chennai to Bangalore Taxi",
                "Coimbatore to Kochi Taxi",
                "Madurai to Rameswaram Taxi",
                "Trichy to Thanjavur Taxi",
              ].map((route) => (
                <li key={route}>
                  <a
                    href="#"
                    className={`flex items-center gap-2 text-xs transition hover:text-orange-500 ${
                      darkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <MapPin size={14} className="text-orange-400 shrink-0" />
                    {route}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-1 text-sm font-bold uppercase tracking-wide text-orange-400">
              Contact
            </h3>
            <div className="mb-3 h-[2px] w-8 bg-orange-500" />

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    darkMode ? "bg-orange-500/10" : "bg-orange-50"
                  }`}
                >
                  <Phone size={14} className="text-orange-400" />
                </div>
                <p
                  className={`mt-1.5 text-xs ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  +91 98884 44952
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    darkMode ? "bg-orange-500/10" : "bg-orange-50"
                  }`}
                >
                  <Mail size={14} className="text-orange-400" />
                </div>
                <p
                  className={`mt-1.5 text-xs ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  nonstopdroptaxi2026@gmail.com
                </p>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                    darkMode ? "bg-orange-500/10" : "bg-orange-50"
                  }`}
                >
                  <MapPin size={14} className="text-orange-400" />
                </div>
                <p
                  className={`mt-1.5 text-xs leading-5 ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  Tamil Nadu • Kerala • Karnataka • Pondicherry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom bar */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-6">
        <div
          className={`rounded-2xl border px-6 py-4 ${
            darkMode
              ? "border-white/10 bg-white/[0.02]"
              : "border-orange-100 bg-orange-50/30"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* social icons */}
            <div className="flex gap-3">
              {[
                { icon: FaFacebookF, href: "#" },
                { icon: FaInstagram, href: "#" },
                { icon: FaWhatsapp, href: "https://wa.me/919888444952" },
                { icon: MapPin, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 hover:bg-orange-500 hover:text-white ${
                    darkMode
                      ? "bg-white/5 text-orange-400"
                      : "bg-white text-orange-500 shadow-sm"
                  }`}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>

            {/* center tagline with car divider */}
            <div className="flex flex-col items-center gap-1.5">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-orange-500/40" />
                <Car size={16} className="text-orange-400" strokeWidth={1.5} />
                <span className="h-px w-10 bg-orange-500/40" />
              </div>
              <p
                className={`text-center text-xs ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Safe Rides.{" "}
                <span className="text-orange-400 font-medium">
                  Trusted Service.
                </span>{" "}
                Every Mile Matters.
              </p>
            </div>

            {/* copyright */}
            <div className="text-center md:text-right">
              <p
                className={`text-xs ${
                  darkMode ? "text-gray-500" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()}{" "}
                <span className="text-orange-400 font-medium">
                  Nagma Tours&amp;Travels
                </span>
                . All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
