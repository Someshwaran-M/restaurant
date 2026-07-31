// src/components/Contact.jsx

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
  id="contact"
  className="relative overflow-hidden bg-[#080C16] py-28"
>
      {/* Background Glow */}

<div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

<div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: .6 }}
  viewport={{ once: true }}
  className="mx-auto mb-20 max-w-4xl text-center"
>

  <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
    CONTACT US
  </span>

  <h2 className="mt-5 text-5xl font-extrabold text-white md:text-6xl">
    Let's Plan Your{" "}
    <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
      Dream Vacation
    </span>
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
    Have questions or need a customized travel package?
    Our travel experts are always ready to help you.
  </p>

</motion.div>
        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">

              <div className="group flex gap-5 rounded-[28px] border border-white/10 bg-[#141922] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Phone className="text-orange-400 group-hover:text-white transition" size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Call Us
                  </h3>

                  <p className="text-gray-400 mt-2">
                    +91 98765 43210
                  </p>

                  <p className="text-gray-400">
                    +91 98765 43211
                  </p>
                </div>

              </div>

              <div className="group flex gap-5 rounded-[28px] border border-white/10 bg-[#141922] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Mail className="text-orange-400 group-hover:text-white transition" size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Email
                  </h3>

                  <p className="text-gray-400 mt-2">
                    info@nagmatravels.com
                  </p>

                  <p className="text-gray-400">
                    support@nagmatravels.com
                  </p>
                </div>

              </div>

              <div className="group flex gap-5 rounded-[28px] border border-white/10 bg-[#141922] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <MapPin className="text-orange-400 group-hover:text-white transition" size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Office Address
                  </h3>

                  <p className="text-gray-400 mt-2">
                    123 Travel Street,
                  </p>

                  <p className="text-gray-400">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

              </div>

              <div className="group flex gap-5 rounded-[28px] border border-white/10 bg-[#141922] p-6 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
                  <Clock className="text-orange-400 group-hover:text-white transition" size={30} />
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Working Hours
                  </h3>

                  <p className="text-gray-400 mt-2">
                    Monday - Saturday
                  </p>

                  <p className="text-gray-400">
                    09:00 AM - 07:00 PM
                  </p>
                </div>

              </div>

            </div>
          </motion.div>

          {/* Contact Form */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
          >
            <div className="rounded-[30px] border border-white/10 bg-[#141922] p-10 shadow-2xl">

              <h3 className="mb-8 text-3xl font-bold text-white">
                Send Us a Message
              </h3>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-white/10 bg-[#1B2230] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-orange-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-white/10 bg-[#1B2230] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-orange-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl border border-white/10 bg-[#1B2230] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-orange-500"
                />

                <input
                  type="text"
                  placeholder="Destination"
                  className="w-full rounded-xl border border-white/10 bg-[#1B2230] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-orange-500"
                />

                <textarea
                  rows="5"
                  placeholder="Tell us about your travel plan..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-[#1B2230] px-5 py-4 text-white placeholder:text-gray-400 outline-none transition focus:border-orange-500"
                ></textarea>

                <button
                  type="submit"
                  className="flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 text-xl font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
                >
                  <Send size={20} />
                  Send Message
                </button>

              </form>

            </div>
          </motion.div>

        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[30px] border border-white/10 shadow-2xl"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Chennai&output=embed"
            className="w-full h-[500px] border-0"
            loading="lazy"
          ></iframe>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;