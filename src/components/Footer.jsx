// src/components/Footer.jsx

import {
  Car,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

import {
  FaWhatsapp,
  FaPhoneAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080C16] text-white">

      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">

        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* ================= COMPANY ================= */}

          <div >

            {/* Logo */}

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400">

                <Car
                  size={28}
                  className="text-[#080C16]"
                />

              </div>

              <h2 className="text-4xl font-extrabold">

                Nagma

                <span className="text-orange-400">
                  {" "}Tours&Travels
                </span>

              </h2>

            </div>

            {/* Description */}

            <p className="mt-8 text-lg leading-9 text-gray-400">

              One Way & Outstation Cab Service across
              Tamil Nadu, Kerala, Karnataka and
              Pondicherry.

              <br /><br />

              Fixed Fare • No Hidden Charges •
              24×7 Booking Support • Verified Drivers.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="tel:+919888444952"
                className="flex items-center gap-3 rounded-full border border-orange-500 px-7 py-3 font-semibold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >

                <FaPhoneAlt />

                Call

              </a>

              <a
                href="https://wa.me/919888444952"
                target="_blank"
                rel="noreferrer"
               className="flex items-center gap-3 rounded-full bg-orange-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >

                <FaWhatsapp />

                WhatsApp

              </a>

            </div>

          </div>
                    {/* ================= EXPLORE SERVICES ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-orange-400">
              Explore Services
            </h3>

            <ul className="space-y-5">

              <li>
                <a
                  href="#services"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Book a Cab
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Taxi Fare & Pricing
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Available Cars
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  One Way Taxi Service
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Contact & Booking
                </a>
              </li>

            </ul>

          </div>

          {/* ================= POPULAR ROUTES ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-orange-400">
              Popular Routes
            </h3>

            <ul className="space-y-5">

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Chennai to Madurai Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Chennai to Coimbatore Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Chennai to Bangalore Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Coimbatore to Kochi Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Madurai to Rameswaram Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-lg text-gray-400 transition hover:text-orange-400"
                >
                  Trichy to Thanjavur Taxi
                </a>
              </li>

            </ul>

          </div>
                    {/* ================= CONTACT ================= */}

          <div>

            <h3 className="mb-8 text-2xl font-bold uppercase tracking-wide text-orange-400">
              Contact
            </h3>

            <div className="space-y-8">

              {/* Phone */}

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <Phone size={22} />
                </div>

                <div>

                  <p className="text-lg text-gray-300">
                    +91 98884 44952
                  </p>

                </div>

              </div>

              {/* Email */}

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <Mail size={22} />
                </div>

                <div>

                  <p className="break-all text-lg text-gray-300">
                    nonstopdroptaxi2026@gmail.com
                  </p>

                </div>

              </div>

              {/* Address */}

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <MapPin size={22} />
                </div>

                <div>

                  <p className="text-lg leading-8 text-gray-300">
                    Tamil Nadu • Kerala • Karnataka •
                    <br />
                    Pondicherry
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
            {/* ================= BOTTOM ================= */}

      <div className="border-t border-orange-500/20">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-7 text-center md:flex-row">

          <p className="text-base text-gray-500">
            © {new Date().getFullYear()} Nagma Tours&Travels.
            All Rights Reserved.
          </p>

          <p className="text-base text-gray-500">
            • Fixed Fare • No Hidden Charges • 24/7 Booking Support
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;