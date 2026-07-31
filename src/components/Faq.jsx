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

function Faq() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#080C16] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >

          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            FAQ
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-white md:text-6xl">
            Good To{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Know
            </span>
          </h2>

        </motion.div>

        {/* FAQ */}
        <div className="mx-auto max-w-5xl space-y-5">
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
              className="overflow-hidden rounded-[26px] border border-white/10 bg-[#141922]"
            >

              {/* Question */}

              <button
                onClick={() =>
                  setActive(active === index ? -1 : index)
                }
                className="flex w-full items-center justify-between px-8 py-7 text-left transition hover:bg-orange-500/5"
              >

                <span className="text-2xl font-bold text-white">
                  {item.question}
                </span>

                <ChevronDown
                  size={28}
                  className={`text-orange-400 transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              {/* Answer */}

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

                    <div className="border-t border-white/10 px-8 pb-8 pt-6">

                      <p className="text-lg leading-9 text-gray-400">
                        {item.answer}
                      </p>

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

                {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24"
        >

          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 via-orange-400 to-amber-400 px-8 py-20 text-center shadow-[0_30px_80px_rgba(249,115,22,0.35)] md:px-20">

            {/* Background Glow */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
            <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

            <div className="relative z-10">

              <h2 className="text-4xl font-extrabold text-white md:text-6xl">
                Bags Packed?
                <br />
                Let's Hit The Road!
              </h2>

              <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
                Book your taxi in seconds via WhatsApp or call us directly.
                Fixed pricing, professional drivers, 24/7 support and
                comfortable rides across South India.
              </p>

              {/* Buttons */}

              <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

                {/* WhatsApp */}

                <a
                  href="https://wa.me/919888444952"
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-16 items-center justify-center gap-3 rounded-full bg-[#0B101B] px-10 text-lg font-bold text-white transition hover:scale-105"
                >
                  <MessageCircle size={24} />
                  WhatsApp Booking
                </a>

                {/* Call */}

                <a
                  href="tel:+919888444952"
                  className="flex h-16 items-center justify-center gap-3 rounded-full border-2 border-[#0B101B] px-10 text-lg font-bold text-[#0B101B] transition hover:bg-[#0B101B] hover:text-white"
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
