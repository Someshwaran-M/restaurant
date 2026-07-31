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

function Footer({ darkMode }) {
  console.log("Footer darkMode:", darkMode);
  return (
    <footer
  className={`relative overflow-hidden transition-all duration-500 ${
    darkMode
      ? "bg-[#080C16] text-white"
      : "bg-white text-gray-900"
  }`}
>

      <div
  className={`absolute left-0 top-0 h-80 w-80 rounded-full blur-[140px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[140px] ${
    darkMode ? "bg-amber-500/10" : "bg-yellow-300/20"
  }`}
/>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div >

            <div className="flex items-center gap-4">

              <div className="flex h-10 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-amber-400">

                <Car
                  size={26}
                  className="text-[#080C16]"
                />

              </div>

              <h2 className="text-2xl font-bold">

                Nagma

                <span className="text-orange-400">
                  {" "}Tours&Travels
                </span>

              </h2>

            </div>

            <p className={`mt-5 text-lg leading-8 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>

              One Way & Outstation Cab Service across
              Tamil Nadu, Kerala, Karnataka and
              Pondicherry.

            </p>

            <div className="mt-6 flex flex-wrap gap-4">

              <a
                href="tel:+919888444952"
                className="flex items-center gap-3 rounded-full border border-orange-500 px-5 py-2.5 text-sm font-medium text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white"
              >

                <FaPhoneAlt />

                Call

              </a>

              <a
                href="https://wa.me/919888444952"
                target="_blank"
                rel="noreferrer"
               className="flex items-center gap-3 rounded-full bg-orange-500 px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-orange-600"
              >

                <FaWhatsapp />

                WhatsApp

              </a>

            </div>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold uppercase tracking-wide text-orange-400">
              Explore Services
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#services"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Book a Cab
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Taxi Fare & Pricing
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Available Cars
                </a>
              </li>

              <li>
                <a
                  href="#services"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  One Way Taxi Service
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Contact & Booking
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold uppercase tracking-wide text-orange-400">
              Popular Routes
            </h3>

            <ul className="space-y-3">

              <li>
                <a
                  href="#"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Chennai to Madurai Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                 className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Chennai to Coimbatore Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                 className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Chennai to Bangalore Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Coimbatore to Kochi Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Madurai to Rameswaram Taxi
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-400" : "text-gray-700"
}`}
                >
                  Trichy to Thanjavur Taxi
                </a>
              </li>

            </ul>

          </div>

          <div>

            <h3 className="mb-5 text-xl font-bold uppercase tracking-wide text-orange-400">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <Phone size={18} />
                </div>

                <div>

                  <p className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
                    +91 98884 44952
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <Mail size={18} />
                </div>

                <div>

                  <p className={`text-base transition hover:text-orange-500 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
                    nonstopdroptaxi2026@gmail.com
                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="mt-1 text-orange-400">
                  <MapPin size={18} />
                </div>

                <div>

                  <p className={`text-base  ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
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

      <div
  className={`border-t ${
    darkMode
      ? "border-orange-500/20"
      : "border-orange-200"
  }`}
>

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center md:flex-row">

          <p className={`text-sm ${
  darkMode ? "text-gray-500" : "text-gray-600"
}`}>
            © {new Date().getFullYear()} Nagma Tours&Travels.
            All Rights Reserved.
          </p>

          <p className={`text-sm ${
  darkMode ? "text-gray-500" : "text-gray-600"
}`}>
            • Fixed Fare • No Hidden Charges • 24/7 Booking Support
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;