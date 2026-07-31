import { motion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  Plane,
  Car,
  Building2,
  Mountain,
  BadgeCheck,
  ShieldCheck,
} from "lucide-react";
import { CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: ArrowRight,
    title: "One Way Drop Taxi",
    description:
      "Pay only for one-way distance. No return fare charged. Perfect for intercity drop trips.",
  },
  {
    icon: RotateCcw,
    title: "Round Trip Taxi",
    description:
      "Multi-day journeys with flexible return. Per-day driver bata and minimum KM billing.",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop with flight tracking. Always on time.",
  },
  {
    icon: Car,
    title: "Outstation Cab",
    description:
      "Long distance taxi service across Tamil Nadu, Kerala, Karnataka and Pondicherry.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Employee transport, airport pickup and client travel with dedicated support.",
  },
  {
    icon: Mountain,
    title: "Hill Station Trips",
    description:
      "Experienced drivers for Ooty, Kodaikanal, Munnar, Yercaud and other hill stations.",
  },
];

const whyChooseUs = [
  {
    icon: Car,
    title: "Well Maintained Cars",
    description:
      "Clean Mini, Sedan, SUV and Traveller options for comfortable long distance travel.",
  },
  {
    icon: Plane,
    title: "Flexible Pickup",
    description:
      "Schedule your ride anytime based on your convenience — early morning or late night.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Experienced drivers focused on safe, secure and comfortable travel.",
  },
  {
    icon: Mountain,
    title: "Wide Route Coverage",
    description:
      "Serving major cities and destinations across Tamil Nadu, Kerala, Karnataka and Pondicherry.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Fixed pricing with no hidden charges, surge fares or unexpected costs.",
  },
  {
    icon: Building2,
    title: "24/7 Booking Support",
    description:
      "Call or WhatsApp us anytime. Our team confirms every booking personally.",
  },
];

function Services({ darkMode }) {
  return (
    <>

<section
  id="services"
  className={`relative overflow-hidden py-32 transition-all duration-500 ${
  darkMode ? "bg-[#080C16]" : "bg-white"
}`}
>
  <div
  className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-20 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
  }`}
/>
  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-14 max-w-3xl text-center"
    >

      <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
        OUR SERVICES
      </span>

      <h3 className={`mt-4 text-4xl font-extrabold leading-tight md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
        Complete{" "}
        <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Taxi Solutions
        </span>
      </h3>

      <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
        From quick city drops to multi-day outstation trips, airport transfers,
        corporate travel and hill station tours — we cover everything with fixed
        pricing, professional drivers and reliable service.
      </p>

    </motion.div>

    {/* Cards */}
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {services.map((service, index) => {
  const Icon = service.icon;

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
      }}
      viewport={{ once: true }}
      className={`group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}>
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">

        <Icon
          size={30}
          className="text-orange-400 transition-all duration-500 group-hover:text-white group-hover:scale-110"
        />

      </div>

      {/* Title */}
      <h3 className={`mt-5 text-2xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
        {service.title}
      </h3>

      {/* Description */}
      <p className={`mt-3 text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
        {service.description}
      </p>

    </motion.div>
  );
})}

    </div>

    {/* ================= HOW IT WORKS ================= */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="mt-20"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
          HOW IT WORKS
        </span>

        <h2
  className={`mt-4 text-3xl font-extrabold md:text-4xl ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
          Booked In{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            4 Easy Steps
          </span>
        </h2>

      </div>

      {/* Timeline */}

      <div className="relative mt-24">

        {/* Line */}
        <div className={`absolute left-0 top-10 hidden h-[2px] w-full lg:block ${
  darkMode ? "bg-white/10" : "bg-gray-300"
}`}></div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Step 1 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-18 w-18 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <Car size={28} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                1
              </div>

            </div>

            <h3 className={`mt-5 text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
              Choose Route
            </h3>

            <p className={`mt-3 text-sm leading-6 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
              Select pickup and destination to receive an instant fare.
            </p>

          </div>

          {/* Step 2 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-18 w-18 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <Plane size={28} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                2
              </div>

            </div>

            <h3 className={`mt-5 text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
              Confirm Booking
            </h3>

            <p className={`mt-3 text-sm leading-6 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
              Confirm your booking with transparent pricing and no hidden fees.
            </p>

          </div>

          {/* Step 3 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-18 w-18 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <BadgeCheck size={28} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                3
              </div>

            </div>

            <h3 className={`mt-5 text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
              Driver Assigned
            </h3>

            <p className={`mt-3 text-sm leading-6 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
              A professional verified driver will be assigned to your trip.
            </p>

          </div>

          {/* Step 4 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-18 w-18 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <ShieldCheck size={28} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                4
              </div>

            </div>

            <h3 className={`mt-5 text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
              Enjoy Your Ride
            </h3>

            <p className={`mt-3 text-sm leading-6 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
              Relax and travel comfortably with safe, reliable and on-time service.
            </p>

          </div>

        </div>

      </div>

    </motion.div>

  </div>
  {/* ================= WHY CHOOSE US ================= */}

<section className="mt-32">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className="text-center"
  >

    <span className="uppercase tracking-[6px] text-orange-400 font-bold">
      WHY CHOOSE US
    </span>

    <h2
  className={`mt-4 text-4xl font-extrabold md:text-5xl ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>

      Travel{" "}

      <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
        Worry-Free
      </span>

    </h2>

  </motion.div>

  <div className="mx-auto mt-12 grid max-w-7xl grid-cols-1 gap-6 px-6 md:grid-cols-2 lg:grid-cols-3">

    {whyChooseUs.map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.div
  key={index}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.5,
    delay: index * 0.1,
  }}
  viewport={{ once: true }}
  className={`group flex flex-col rounded-2xl p-5 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}
>

          {/* Icon */}

          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">

  <Icon
    size={22}
    className="text-orange-400 transition-all group-hover:text-white"
  />

</div>

          <h3 className={`mt-4 text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
  {item.title}
</h3>
          <p className={`mt-2 text-sm leading-6 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
  {item.description}
</p>

        </motion.div>

      );

    })}

  </div>

</section>

<div className="mt-20 flex flex-wrap items-center justify-center gap-6">

  {[
    "Instant Booking",
    "24/7 Available",
    "Per KM Based",
    "Transparent Pricing",
  ].map((item) => (
    <div
      key={item}
      className="group flex items-center gap-3 rounded-full
      border border-orange-500/10
      bg-orange-500/10
      px-6 py-3
      backdrop-blur-xl
      transition-all duration-300
      hover:bg-orange-500
      hover:shadow-[0_0_25px_rgba(249,115,22,.35)]
      hover:-translate-y-1"
    >
      <CheckCircle2
        size={18}
        className="text-orange-400 transition group-hover:text-white"
      />

      <span
  className={`text-sm font-semibold transition group-hover:text-white ${
    darkMode ? "text-orange-200" : "text-orange-600"
  }`}
>
  {item}
</span>
    </div>
  ))}

</div>
</section>


</>
  );
}

export default Services;