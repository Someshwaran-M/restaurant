import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

function Contact({ darkMode }) {
  return (
    <section
  id="contact"
  className={`relative overflow-hidden py-32 transition-all duration-500 ${
  darkMode
    ? "bg-[#080C16]"
    : "bg-white"
}`}
>

<div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

<div className="relative z-10 max-w-7xl mx-auto px-6">

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .6 }}
  viewport={{ once: true }}
  className="mx-auto mb-14 max-w-3xl text-center"
>

  <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
    CONTACT US
  </span>

  <h2 className={`mt-4 text-4xl font-extrabold md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
    Let's Plan Your{" "}
    <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
      Dream Vacation
    </span>
  </h2>

  <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
    Have questions or need a customized travel package?
    Our travel experts are always ready to help you.
  </p>

</motion.div>
        <div className="grid lg:grid-cols-2 gap-10 mt-12">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">

              <div className={`group flex gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-md hover:border-orange-400"
}`}>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Phone className="text-orange-400 group-hover:text-white transition" size={24} />
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    Call Us
                  </h3>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +91 98765 43210
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    +91 98765 43211
                  </p>
                </div>

              </div>

              <div className={`group flex gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-md hover:border-orange-400"
}`}>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Mail className="text-orange-400 group-hover:text-white transition" size={24} />
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    Email
                  </h3>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    info@nagmatravels.com
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    support@nagmatravels.com
                  </p>
                </div>

              </div>

              <div className={`group flex gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-md hover:border-orange-400"
}`}>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <MapPin className="text-orange-400 group-hover:text-white transition" size={24} />
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    Office Address
                  </h3>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    123 Travel Street,
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

              </div>

              <div className={`group flex gap-4 rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_25px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-md hover:border-orange-400"
}`}>

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Clock className="text-orange-400 group-hover:text-white transition" size={24} />
                </div>

                <div>
                  <h3 className={`text-lg font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    Working Hours
                  </h3>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    Monday - Saturday
                  </p>

                  <p className={darkMode ? "text-gray-400" : "text-gray-600"}>
                    09:00 AM - 07:00 PM
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-3xl p-8 shadow-xl transition-all duration-500 ${
  darkMode
    ? "border border-white/10 bg-[#141922]"
    : "border border-gray-200 bg-white"
}`}>

              <h3 className={`mb-6 text-2xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                Send Us a Message
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className={`w-full rounded-xl px-4 py-3 outline-none transition ${
  darkMode
    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
}`}
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full rounded-xl px-4 py-3 outline-none transition ${
  darkMode
    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
}`}
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`w-full rounded-xl px-4 py-3 outline-none transition ${
  darkMode
    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
}`}
                />

                <input
                  type="text"
                  placeholder="Destination"
                 className={`w-full rounded-xl px-4 py-3 outline-none transition ${
  darkMode
    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
}`}
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your travel plan..."
                  className={`w-full rounded-xl px-4 py-3 outline-none transition ${
  darkMode
    ? "border border-white/10 bg-[#1B2230] text-white placeholder:text-gray-400 focus:border-orange-500"
    : "border border-gray-300 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:border-orange-500"
}`}
                ></textarea>

                <button
                  type="submit"
                  className="flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-lg font-semibold text-white transition-all duration-300 hover:bg-orange-600"
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>

            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className={`mt-14 overflow-hidden rounded-3xl ${
  darkMode
    ? "border border-white/10"
    : "border border-gray-200 shadow-lg"
}`}
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[350px] md:h-[420px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;