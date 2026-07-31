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

function Services() {
  return (
    <>

<section
  id="services"
  className="relative overflow-hidden bg-[#080C16] py-28"
>
  {/* Background Glow */}
  <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />
  <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[160px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >

      <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
        OUR SERVICES
      </span>

      <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
        Complete{" "}
        <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          Taxi Solutions
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
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
      className="group rounded-[32px] border border-white/10 bg-[#141922] p-9 transition-all duration-500 hover:-translate-y-3 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]"
    >
      {/* Icon */}
      <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">

        <Icon
          size={40}
          className="text-orange-400 transition-all duration-500 group-hover:text-white group-hover:scale-110"
        />

      </div>

      {/* Title */}
      <h3 className="mt-8 text-3xl font-bold text-white">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-6 text-lg leading-9 text-gray-400">
        {service.description}
      </p>

      {/* Button */}
      <button className="mt-10 inline-flex items-center gap-3 rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white">

        Learn More

        <ArrowRight
          size={18}
          className="transition group-hover:translate-x-1"
        />

      </button>

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
      className="mt-32"
    >

      {/* Heading */}

      <div className="text-center">

        <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
          HOW IT WORKS
        </span>

        <h2 className="mt-5 text-5xl font-extrabold text-white">
          Booked In{" "}
          <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
            4 Easy Steps
          </span>
        </h2>

      </div>

      {/* Timeline */}

      <div className="relative mt-24">

        {/* Line */}
        <div className="absolute left-0 top-10 hidden h-[2px] w-full bg-white/10 lg:block"></div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Step 1 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <Car size={40} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                1
              </div>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Choose Route
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              Select pickup and destination to receive an instant fare.
            </p>

          </div>

          {/* Step 2 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <Plane size={40} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                2
              </div>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Confirm Booking
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              Confirm your booking with transparent pricing and no hidden fees.
            </p>

          </div>

          {/* Step 3 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <BadgeCheck size={40} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                3
              </div>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Driver Assigned
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
              A professional verified driver will be assigned to your trip.
            </p>

          </div>

          {/* Step 4 */}
          <div className="relative text-center">

            <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-3xl border border-orange-500/40 bg-orange-500/10">

              <ShieldCheck size={40} className="text-orange-400" />

              <div className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
                4
              </div>

            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Enjoy Your Ride
            </h3>

            <p className="mt-4 text-gray-400 leading-8">
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

    <h2 className="mt-5 text-5xl md:text-6xl font-extrabold text-white">

      Travel{" "}

      <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
        Worry-Free
      </span>

    </h2>

  </motion.div>

  <div className="mt-20 mr-55 ml-55 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

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
  className="group flex h-[220px] w-[400px] flex-col rounded-[26px] border border-white/10 bg-[#141922] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_35px_rgba(249,115,22,.18)]"
>

          {/* Icon */}

          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 transition-all duration-500 group-hover:bg-orange-500">

  <Icon
    size={26}
    className="text-orange-400 transition-all group-hover:text-white"
  />

</div>

          <h3 className="mt-6 text-2xl font-bold text-white">
  {item.title}
</h3>
          <p className="mt-3 text-base leading-7 text-gray-400">
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
      px-8 py-4
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

      <span className="text-lg font-semibold text-orange-200 transition group-hover:text-white">
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