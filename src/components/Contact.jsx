import { motion } from "framer-motion";
import { Phone, Mail, Globe, MapPin, Send } from "lucide-react";

const FacebookIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={props.size}
    height={props.size}
  >
    <path d="M13.5 21v-8.1h2.72l.41-3.16h-3.13V7.71c0-.92.25-1.54 1.57-1.54h1.68V3.35C15.98 3.24 15 3.15 13.84 3.15c-2.32 0-3.91 1.42-3.91 4.02v2.57H7.2v3.16h2.73V21h3.57z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    width={props.size}
    height={props.size}
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const TwitterIcon = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={props.size}
    height={props.size}
  >
    <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4 4 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1c.5 1.6 2.1 2.8 3.9 2.9A8.3 8.3 0 0 1 2 18.6a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
  </svg>
);

function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`relative overflow-hidden py-12 sm:py-16 transition-all duration-500 ${
        darkMode ? "bg-[#080C16]" : "bg-white"
      }`}
    >
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-600/10 blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-8">
          <span className="text-lg sm:text-xl font-bold uppercase tracking-[4px] text-orange-400">
            Contact Us
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-8">
          {/* FORM - LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="space-y-3">
              <input
                type="text"
                placeholder="Your Name"
                className={`w-full rounded-lg px-4 py-2.5 text-sm outline-none transition ${
                  darkMode
                    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
                    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
                }`}
              />

              <input
                type="email"
                placeholder="Your Email"
                className={`w-full rounded-lg px-4 py-2.5 text-sm outline-none transition ${
                  darkMode
                    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
                    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
                }`}
              />

              <input
                type="text"
                placeholder="Subject"
                className={`w-full rounded-lg px-4 py-2.5 text-sm outline-none transition ${
                  darkMode
                    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
                    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
                }`}
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className={`w-full rounded-lg px-4 py-2.5 text-sm outline-none transition resize-none ${
                  darkMode
                    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
                    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
                }`}
              ></textarea>

              <button
                type="submit"
                className="flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-orange-500 px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* INFO - RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2
              className={`mb-6 text-4xl sm:text-5xl font-extrabold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Get In Touch
            </h2>

            <div className="grid grid-cols-2 gap-4 sm:gap-3 mb-6">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Phone className="text-orange-500" size={16} />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`text-sm font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Call Us
                  </h3>
                  <p
                    className={`text-xs break-words ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    +91 98765 43210
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Mail className="text-orange-500" size={16} />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`text-sm font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Email Us
                  </h3>
                  <p
                    className={`text-xs break-words ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    info@nagmatravels.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <Globe className="text-orange-500" size={16} />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`text-sm font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Website
                  </h3>
                  <p
                    className={`text-xs break-words ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    www.nagmatravels.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2 sm:gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-500/10">
                  <MapPin className="text-orange-500" size={16} />
                </div>
                <div className="min-w-0">
                  <h3
                    className={`text-sm font-bold ${
                      darkMode ? "text-white" : "text-gray-900"
                    }`}
                  >
                    Address
                  </h3>
                  <p
                    className={`text-xs break-words ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            <h4
              className={`mb-2 text-sm font-semibold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Follow Us On
            </h4>

            <div className="flex gap-2">
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                <FacebookIcon size={15} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-orange-500/10 text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                <TwitterIcon size={15} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* MAP */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className={`mt-8 overflow-hidden rounded-2xl ${
            darkMode
              ? "border border-white/10"
              : "border border-gray-200 shadow-lg"
          }`}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[220px] sm:h-[280px] md:h-[320px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
