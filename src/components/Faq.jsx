import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  CalendarDays,
  HelpCircle,
  UtensilsCrossed,
  Clock3,
  Star,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const faqs = [
  {
    question: "Do I need a reservation?",
    answer:
      "Reservations are recommended during weekends and holidays. Walk-in guests are also welcome based on table availability.",
  },
  {
    question: "What cuisines do you serve?",
    answer:
      "We serve South Indian, North Indian, Chinese, Tandoori, Desserts, Mocktails and Chef Special dishes.",
  },
  {
    question: "Do you provide takeaway?",
    answer:
      "Yes. Fresh takeaway and home delivery are available throughout our service area.",
  },
  {
    question: "Can I celebrate birthdays?",
    answer:
      "Absolutely! We arrange birthday parties, family celebrations, anniversary dinners and corporate events.",
  },
  {
    question: "Are vegetarian dishes available?",
    answer:
      "Yes. We have an extensive vegetarian menu prepared with fresh ingredients and authentic spices.",
  },
  {
    question: "What are your opening hours?",
    answer:
      "We are open every day from 10:00 AM to 11:00 PM.",
  },
];

function Faq() {
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Gold Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[150px]" />

      </div>

      {/* Gold Grid */}

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#FFD700 1px,transparent 1px),linear-gradient(to bottom,#FFD700 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-yellow-500/20 bg-[#111111] px-5 py-2">

            <Sparkles
              size={16}
              className="text-yellow-400"
            />

            <span className="text-xs font-bold uppercase tracking-[5px] text-yellow-400">

              Restaurant FAQ

            </span>

          </div>

          <h2 className="mt-6 text-5xl font-black text-white">

            Frequently Asked

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Questions

            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-8">

            Find answers about reservations, dining, takeaway,
            celebrations, and everything you need to know before
            visiting Spice Garden Restaurant.

          </p>

        </motion.div>

        <div className="grid gap-8 lg:grid-cols-[1.45fr_.55fr]">

          {/* FAQ Accordion */}

          <div className="space-y-5">
          {faqs.map((item, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, x: -40 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.45,
      delay: index * 0.08,
    }}
    whileHover={{
      y: -6,
    }}
    className={`group relative overflow-hidden rounded-3xl border transition-all duration-500 ${
      active === index
        ? "border-yellow-500/40 bg-gradient-to-r from-yellow-500/10 via-yellow-400/5 to-transparent shadow-[0_15px_45px_rgba(255,215,0,.25)]"
        : "border-yellow-600/20 bg-[#111111] hover:border-yellow-500/40"
    }`}
  >
    {/* Gold Glow */}
    <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-yellow-500/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

    {/* Question */}
    <button
      onClick={() => setActive(active === index ? -1 : index)}
      className="flex w-full items-center justify-between p-6"
    >
      <div className="flex items-center gap-4">

        {/* Icon */}

        <motion.div
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          className={`flex h-12 w-12 items-center justify-center rounded-2xl transition-all duration-500 ${
            active === index
              ? "bg-gradient-to-br from-yellow-400 to-amber-600 text-black shadow-xl"
              : "bg-yellow-500/10 text-yellow-400"
          }`}
        >
          <HelpCircle size={20} />
        </motion.div>

        <h3 className="text-lg font-bold text-yellow-400">
          {item.question}
        </h3>

      </div>

      <motion.div
        animate={{
          rotate: active === index ? 180 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className={`flex h-11 w-11 items-center justify-center rounded-full transition-all duration-500 ${
          active === index
            ? "bg-gradient-to-br from-yellow-400 to-amber-600 text-black shadow-xl"
            : "bg-yellow-500/10 text-yellow-400"
        }`}
      >
        <ChevronDown size={20} />
      </motion.div>
    </button>

    {/* Answer */}

    <AnimatePresence>

      {active === index && (

        <motion.div
          initial={{
            height: 0,
            opacity: 0,
          }}
          animate={{
            height: "auto",
            opacity: 1,
          }}
          exit={{
            height: 0,
            opacity: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="overflow-hidden"
        >

          <div className="border-t border-yellow-500/20 px-6 pb-6 pt-5">

            <p className="text-gray-300 leading-8">
              {item.answer}
            </p>

          </div>

        </motion.div>

      )}

    </AnimatePresence>

  </motion.div>
))}

</div>

{/* Reservation Card */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <div className="sticky top-24 relative overflow-hidden rounded-[30px] border border-yellow-600/30 bg-[#111111] p-7">

    {/* Glow */}

    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-yellow-500/20 blur-[100px]" />

    <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-amber-400/20 blur-[100px]" />

    <div className="relative z-10">

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-xl"
      >

        <UtensilsCrossed
          size={28}
          className="text-black"
        />

      </motion.div>

      <h3 className="mt-5 text-center text-2xl font-black text-white">

        Reserve

        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

          Your Table

        </span>

      </h3>

      <p className="mt-4 text-center text-gray-300 leading-7">

        Enjoy premium dining, authentic flavours and unforgettable
        hospitality with your family and friends.

      </p>

      <div className="mt-8 space-y-4">
      {[
  {
    icon: UtensilsCrossed,
    title: "Freshly Prepared Meals",
  },
  {
    icon: Clock3,
    title: "Open Daily 10 AM - 11 PM",
  },
  {
    icon: Star,
    title: "Premium Dining Experience",
  },
].map((item, index) => {
  const Icon = item.icon;

  return (
    <motion.div
      key={index}
      whileHover={{ x: 5 }}
      className="group flex items-center gap-4 rounded-2xl bg-black p-4 transition-all duration-500 hover:bg-yellow-500/10"
    >
      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={18} className="text-black" />
      </div>

      <span className="font-semibold text-yellow-400">
        {item.title}
      </span>
    </motion.div>
  );
})}

</div>

{/* Stats */}

<div className="mt-8 grid grid-cols-2 gap-3">

  {[
    {
      value: "10+",
      label: "Years",
    },
    {
      value: "25K+",
      label: "Customers",
    },
    {
      value: "4.9★",
      label: "Rating",
    },
    {
      value: "100+",
      label: "Menu Items",
    },
  ].map((item, index) => (
    <motion.div
      key={index}
      whileHover={{
        y: -5,
      }}
      className="rounded-2xl border border-yellow-600/20 bg-black p-4 text-center transition-all duration-500"
    >
      <h4 className="text-2xl font-black text-yellow-400">
        {item.value}
      </h4>

      <p className="mt-1 text-xs text-gray-400">
        {item.label}
      </p>
    </motion.div>
  ))}

</div>

{/* Buttons */}

<div className="mt-8 space-y-3">

  <a
    href="tel:+919876543210"
    className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 font-bold text-black transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(255,215,0,.45)]"
  >
    <Phone
      size={18}
      className="transition-transform duration-500 group-hover:rotate-12"
    />

    Reserve Now
  </a>

  <button onClick={() => navigate("/reserve")} className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-yellow-500 font-bold text-yellow-400 transition-all duration-500 hover:scale-[1.03] hover:bg-yellow-500 hover:text-black" > <CalendarDays size={18} className="transition-transform duration-500 group-hover:rotate-12" /> Book a Table </button>

</div>

    </div>
  </div>
</motion.div>

</div>

{/* Bottom Premium CTA Starts Here */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-20"
>
  <div className="relative overflow-hidden rounded-[32px] border border-yellow-500/30 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] px-6 py-14 shadow-[0_25px_70px_rgba(255,215,0,.20)] md:px-12">

    {/* Gold Glow */}
    <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-yellow-500/20 blur-[120px]" />
    <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-amber-500/20 blur-[120px]" />

    <div className="relative z-10 text-center">

      {/* Icon */}
      <motion.div
        whileHover={{
          scale: 1.1,
          rotate: 10,
        }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 shadow-xl"
      >
        <UtensilsCrossed
          size={30}
          className="text-black"
        />
      </motion.div>

      <h2 className="mt-6 text-3xl font-black md:text-5xl text-white">

        Experience

        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

          Fine Dining

        </span>

      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-gray-300">

        From delicious recipes and premium ingredients to exceptional
        hospitality, every visit to Spice Garden Restaurant is designed
        to create unforgettable memories.

      </p>

      {/* Features */}

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">

        {[
          {
            icon: Star,
            text: "5★ Experience",
          },
          {
            icon: Clock3,
            text: "Open Everyday",
          },
          {
            icon: UtensilsCrossed,
            text: "Fresh Ingredients",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              whileHover={{
                y: -5,
                scale: 1.08,
              }}
              className="flex items-center gap-2 rounded-full border border-yellow-500/20 bg-yellow-500/10 px-5 py-3 backdrop-blur-xl"
            >
              <Icon
                size={18}
                className="text-yellow-400"
              />

              <span className="text-sm font-semibold text-white">
                {item.text}
              </span>

            </motion.div>
          );
        })}

      </div>

      {/* Buttons */}

      <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">

      
<motion.button
  whileHover={{
    scale: 1.05,
  }}
  whileTap={{
    scale: 0.95,
  }}
  onClick={() => navigate("/menu")}
  className="group flex h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-8 font-bold text-black transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,215,0,.45)]"
>
  <UtensilsCrossed
    size={18}
    className="transition-transform duration-500 group-hover:rotate-12"
  />

  Explore Menu
</motion.button>



        <motion.a
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          href="tel:+919876543210"
          className="group flex h-12 items-center justify-center gap-3 rounded-full border border-yellow-500 px-8 font-bold text-yellow-400 transition-all duration-500 hover:bg-yellow-500 hover:text-black"
        >
          <Phone
            size={18}
            className="transition-transform duration-500 group-hover:rotate-12"
          />

          Call Restaurant

        </motion.a>

      </div>

    </div>

  </div>

</motion.div>

      </div>
    </section>
  );
}

export default Faq;