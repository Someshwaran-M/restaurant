import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-yellow-500/20">

      {/* Gold Glow */}
      <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-yellow-500/10 blur-[140px]" />

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-amber-500/10 blur-[140px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}

          <div>

            <div className="flex items-center gap-4">

              <img
                src={logo}
                alt="Spice Garden Logo"
                className="h-14 w-14 object-contain"
              />

              <div>

                <h2 className="text-3xl font-black text-white">

                  Spice

                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

                    Garden

                  </span>

                </h2>

                <p className="text-sm tracking-[4px] uppercase text-yellow-400">
                  Fine Dining
                </p>

              </div>

            </div>

            <p className="mt-6 leading-8 text-gray-400">

              Experience authentic flavours, premium ingredients,
              elegant ambience and unforgettable hospitality.
              Every meal at Spice Garden Restaurant is prepared
              with passion and served with excellence.

            </p>

            {/* Social Icons */}

            <div className="mt-8 flex gap-4">

              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaTwitter />,
                <FaYoutube />,
              ].map((icon, index) => (

                <a
                  key={index}
                  href="#"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500/20 bg-[#111111] text-yellow-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-amber-500 hover:text-black"
                >
                  {icon}
                </a>

              ))}

            </div>

          </div>

          {/* Quick Links Starts Here */}
                    {/* Quick Links */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-4">

              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Menu", link: "/menu" },
                { name: "Gallery", link: "/gallery" },
                { name: "Blog", link: "/blog" },
                { name: "Contact", link: "/contact" },
                { name: "Reserve Table", link: "/reserve" },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    className="text-gray-400 transition-all duration-300 hover:pl-2 hover:text-yellow-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}

            </ul>

          </div>

          {/* Opening Hours */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Opening Hours
            </h3>

            <div className="space-y-5">

              <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-4">

                <h4 className="font-bold text-white">
                  Monday - Friday
                </h4>

                <p className="mt-2 text-gray-400">
                  10:00 AM - 10:00 PM
                </p>

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-4">

                <h4 className="font-bold text-white">
                  Saturday
                </h4>

                <p className="mt-2 text-gray-400">
                  09:00 AM - 11:00 PM
                </p>

              </div>

              <div className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-4">

                <h4 className="font-bold text-white">
                  Sunday
                </h4>

                <p className="mt-2 text-gray-400">
                  09:00 AM - 11:00 PM
                </p>

              </div>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-6 text-2xl font-bold text-yellow-400">
              Contact Info
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black">

                  <FaMapMarkerAlt />

                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    Address
                  </h4>

                  <p className="mt-2 text-gray-400 leading-7">
                    123 Food Street
                    <br />
                    Chennai, Tamil Nadu
                    <br />
                    India
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black">

                  <FaPhoneAlt />

                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    Phone
                  </h4>

                  <p className="mt-2 text-gray-400">
                    +91 98765 43210
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black">

                  <FaEnvelope />

                </div>

                <div>

                  <h4 className="font-semibold text-white">
                    Email
                  </h4>

                  <p className="mt-2 text-gray-400">
                    info@spicegarden.com
                  </p>

                </div>

              </div>

            </div>

            {/* Newsletter */}

            <div className="mt-8">

              <h4 className="mb-4 text-xl font-bold text-yellow-400">
                Newsletter
              </h4>

              <div className="flex overflow-hidden rounded-xl border border-yellow-500/20">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-[#111111] px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none"
                />

                <button className="bg-gradient-to-r from-yellow-400 to-amber-500 px-6 font-bold text-black transition hover:brightness-110">

                  Join

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer Starts Here */}
      <div className="border-t border-yellow-500/20 bg-[#050505]">

  <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

    {/* Copyright */}

    <div>

      <p className="text-center text-gray-400 md:text-left">
        © {new Date().getFullYear()}{" "}
        <span className="font-bold bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
          Spice Garden Restaurant
        </span>
        . All Rights Reserved.
      </p>

      <p className="mt-2 text-center text-sm text-gray-500 md:text-left">
        Crafted with ❤️ for unforgettable dining experiences.
      </p>

    </div>

    {/* Footer Links */}

    <div className="flex flex-wrap items-center justify-center gap-6">

      <Link
        to="/privacy"
        className="text-gray-400 transition duration-300 hover:text-yellow-400"
      >
        Privacy Policy
      </Link>

      <span className="text-yellow-500">|</span>

      <Link
        to="/terms"
        className="text-gray-400 transition duration-300 hover:text-yellow-400"
      >
        Terms & Conditions
      </Link>

      <span className="text-yellow-500">|</span>

      <Link
        to="/reserve"
        className="text-gray-400 transition duration-300 hover:text-yellow-400"
      >
        Reserve Table
      </Link>

    </div>

  </div>

</div>

</footer>
);
};

export default Footer;