import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "How does the booking work?",
    answer:
      "Simply call us or send your pickup and drop locations on WhatsApp. We will confirm the fare instantly and assign a verified driver.",
  },
  {
    question: "Do I need to pay any advance?",
    answer:
      "No. Most bookings require no advance payment. You can pay directly to the driver after your trip unless informed otherwise.",
  },
  {
    question: "What is included in the fare?",
    answer:
      "Your fare includes the vehicle, driver, fuel and standard travel charges. Toll, parking and state permit charges are billed separately when applicable.",
  },
  {
    question: "What is the minimum billing distance?",
    answer:
      "One Way trips have a minimum billing of 150 KM and Round Trips have a minimum of 300 KM per day.",
  },
  {
    question: "Is one way cheaper than a round trip?",
    answer:
      "Yes. One Way taxi services are generally cheaper because you only pay for the distance travelled instead of return charges.",
  },
  {
    question: "Can I book for early morning or late night?",
    answer:
      "Absolutely. Our taxi service operates 24×7 including early morning airport drops and midnight pickups.",
  },
  {
    question: "Which areas do you cover?",
    answer:
      "We provide taxi services across Tamil Nadu, Kerala, Karnataka, Pondicherry and nearby cities.",
  },
];
function Faq({ darkMode }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className={`relative overflow-hidden py-20 transition-all duration-500 ${
  darkMode ? "bg-[#080C16]" : "bg-white"
}`}
    >
      <div
  className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
  }`}
/>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >

          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            FAQ
          </span>

          <h2 className={`mt-4 text-4xl font-extrabold md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
            Good To{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Know
            </span>
          </h2>

        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
                      {faqs.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.05,
              }}
              viewport={{ once: true }}
              className={`overflow-hidden rounded-2xl transition-all duration-300 ${
  darkMode
    ? "border border-white/10 bg-[#141922]"
    : "border border-gray-200 bg-white shadow-md"
}`}
            >

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className={`flex w-full items-center justify-between px-6 py-5 transition ${
  darkMode
    ? "hover:bg-orange-500/5"
    : "hover:bg-orange-50"
}`}
              >

                <span className={`text-lg font-semibold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                  {item.question}
                </span>

                <ChevronDown
                  size={28}
                  className={`text-orange-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >

                    <div className={`px-6 pb-6 pt-5 ${
  darkMode
    ? "border-t border-white/10"
    : "border-t border-gray-200"
}`}>

                      <p className={`text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                        {item.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >

          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-8 py-14 text-center shadow-[0_20px_50px_rgba(249,115,22,0.3)] md:px-16">

            {/* Background Glow */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-3xl font-extrabold text-white md:text-5xl">
                Bags Packed?
                <br />
                Let's Hit The Road!
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-100">
                Book your taxi in seconds via WhatsApp or call us directly.
                Fixed pricing, professional drivers, 24/7 support and
                comfortable rides across South India.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">

                <a
                  href="https://wa.me/919888444952"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-full bg-[#0B101B] px-8 text-base font-semibold text-white transition hover:scale-105"
    >
    <MessageCircle size={24} />
                  WhatsApp Booking
                </a>

                <a
                  href="tel:+919888444952"
                  className="flex h-12 items-center justify-center gap-2 rounded-full border-2 border-[#0B101B] px-8 text-base font-semibold text-[#0B101B] transition hover:bg-[#0B101B] hover:text-white"
                >
                  <Phone size={24} />
                  +91 98884 44952
                </a>

              </div>

            </div>

          </div>

        </motion.div>

        </div>

    </section>
  );
}

export default Faq;
