import { motion } from "framer-motion";
import {
  MapPin,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  Navigation,
  Star,
} from "lucide-react";

const featuredCities = [
  {
    name: "Chennai",
    desc: "Airport • Outstation • Local Taxi",
  },
  {
    name: "Coimbatore",
    desc: "Airport • Outstation • Local Taxi",
  },
  {
    name: "Madurai",
    desc: "Temple • Airport • Outstation",
  },
  {
    name: "Salem",
    desc: "One Way • Round Trip • Local",
  },
  {
    name: "Tiruchirappalli",
    desc: "Airport • Local • Outstation",
  },
  {
    name: "Tirunelveli",
    desc: "City • Outstation • Airport",
  },
];

const allCities = [
  "Ariyalur",
  "Bengaluru",
  "Chengalpattu",
  "Cuddalore",
  "Dharmapuri",
  "Dindigul",
  "Erode",
  "Kallakurichi",
  "Kanchipuram",
  "Kanyakumari",
  "Kodaikanal",
  "Krishnagiri",
  "Kumbakonam",
  "Mayiladuthurai",
  "Nagapattinam",
  "Namakkal",
  "Nilgiris",
  "Perambalur",
  "Puducherry",
  "Pudukkottai",
  "Ramanathapuram",
  "Rameswaram",
  "Ranipet",
  "Sivaganga",
  "Tenkasi",
  "Thanjavur",
  "Theni",
  "Thoothukudi",
  "Tiruppur",
  "Tiruvallur",
  "Tiruvannamalai",
  "Tiruvarur",
  "Vellore",
  "Virudhunagar",
  "Villupuram",
];

function ServiceAreas({ darkMode }) {

  const iconBtn =
    "group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:border-orange-300 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:shadow-[0_0_28px_rgba(249,115,22,.55)]";

  return (

<section
id="service-areas"
className={`relative overflow-hidden py-24 ${
darkMode
? "bg-[#050914]"
: "bg-gradient-to-b from-orange-50 via-white to-orange-100"
}`}
>

{/* Premium Background */}

<div className="absolute inset-0 overflow-hidden">

<div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[170px]" />

<div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[170px]" />

<div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

</div>

{/* Premium Grid */}

<div
className="absolute inset-0 opacity-[0.03]"
style={{
backgroundImage:
"linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
backgroundSize:"70px 70px",
}}
/>

<div className="relative z-10 mx-auto max-w-7xl px-5">

<motion.div
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:.7}}
viewport={{once:true}}
className="mx-auto mb-16 max-w-3xl text-center"
>

<div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/10 px-5 py-2 backdrop-blur-xl">

<Sparkles
size={16}
className="text-orange-400"
/>

<span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

Service Areas

</span>

</div>

<h2
className={`mt-6 text-4xl font-black leading-tight md:text-5xl ${
darkMode
? "text-white"
: "text-gray-900"
}`}
>

Travel Across

<span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

Tamil Nadu & South India

</span>

</h2>

<p
className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
darkMode
? "text-gray-400"
: "text-gray-600"
}`}
>

Airport transfers, local rides, one-way trips and
outstation taxis with professional drivers and fixed pricing.

</p>

</motion.div>

{/* Premium City Cards */}

<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

{/* ===========================
      PART 2
=========================== */}
{featuredCities.map((city, index) => (

  <motion.div
    key={index}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      y: -8,
      scale: 1.02,
    }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-[26px] border transition-all duration-700 ${
      darkMode
        ? "border-white/10 bg-[#111827] hover:border-orange-500/40 hover:shadow-[0_25px_60px_rgba(249,115,22,.25)]"
        : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-[0_25px_60px_rgba(249,115,22,.18)]"
    }`}
  >

    {/* Glow */}

    <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="absolute -right-16 bottom-0 h-48 w-48 rounded-full bg-yellow-400/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="relative p-5">

      {/* Header */}

      <div className="flex items-start justify-between">

        <motion.div
          whileHover={{
            rotate: 10,
            scale: 1.08,
          }}
          className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-xl"
        >

          <MapPin
            size={26}
            className="text-white"
          />

        </motion.div>

        <div className="flex gap-2">

          <motion.button
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={iconBtn}
          >

            <Navigation
              size={16}
              className="text-white"
            />

          </motion.button>

          <motion.button
            whileHover={{
              rotate: -45,
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className={iconBtn}
          >

            <ArrowUpRight
              size={16}
              className="text-white"
            />

          </motion.button>

        </div>

      </div>

      {/* City */}

      <h3
        className={`mt-5 text-2xl font-black ${
          darkMode
            ? "text-white"
            : "text-gray-900"
        }`}
      >

        {city.name}

      </h3>

      <p
        className={`mt-2 text-sm leading-7 ${
          darkMode
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >

        {city.desc}

      </p>

      {/* Features */}

      <div className="mt-5 flex flex-wrap gap-2">

        {[
          {
            icon: ShieldCheck,
            text: "Safe",
          },
          {
            icon: Star,
            text: "Premium",
          },
          {
            icon: MapPin,
            text: "24×7",
          },
        ].map((item, i) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={i}
              whileHover={{
                y: -3,
                scale: 1.05,
              }}
              className={`flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-500 ${
                darkMode
                  ? "border-orange-500/20 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-white"
                  : "border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white"
              }`}
            >

              <Icon size={13} />

              {item.text}

            </motion.div>

          );

        })}

      </div>

      {/* Button */}

      <motion.button
        whileHover={{
          scale: 1.03,
        }}
        whileTap={{
          scale: 0.96,
        }}
        className="group mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 py-3 font-semibold text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_35px_rgba(249,115,22,.45)]"
      >

        Explore City

        <ArrowUpRight
          size={18}
          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </motion.button>

    </div>

  </motion.div>

))}

{/* ===========================
      PART 3
=========================== */}
{/* ===========================
      PREMIUM CITY CHIPS
=========================== */}

</div>

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className="mt-14"
>

  <div className="mb-8 text-center">

    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-orange-500/10 px-5 py-2 backdrop-blur-xl">

      <MapPin
        size={15}
        className="text-orange-400"
      />

      <span className="text-xs font-bold uppercase tracking-[4px] text-orange-400">

        We Also Serve

      </span>

    </div>

  </div>

  <div className="flex flex-wrap justify-center gap-3">

    {allCities.map((city, index) => (

      <motion.button
        key={index}
        initial={{
          opacity: 0,
          scale: .9,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        whileHover={{
          y: -4,
          scale: 1.05,
        }}
        whileTap={{
          scale: .95,
        }}
        transition={{
          duration: .35,
          delay: index * .02,
        }}
        viewport={{
          once: true,
        }}
        className={`group relative overflow-hidden rounded-full border px-5 py-3 text-sm font-semibold transition-all duration-500 ${
          darkMode
            ? "border-white/10 bg-[#111827] text-gray-300 hover:border-orange-500/40 hover:text-white hover:shadow-[0_0_25px_rgba(249,115,22,.25)]"
            : "border-orange-100 bg-white text-gray-700 hover:border-orange-300 hover:text-orange-600 hover:shadow-lg"
        }`}
      >

        {/* Glow */}

        <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 opacity-0 transition-all duration-500 group-hover:opacity-100" />

        <span className="relative z-10 flex items-center gap-2 group-hover:text-white">

          <MapPin
            size={14}
            className="transition-all duration-500 group-hover:rotate-12"
          />

          {city}

        </span>

      </motion.button>

    ))}

  </div>

</motion.div>

{/* ===========================
      PREMIUM CTA
      PART 4
=========================== */}
{/* ===========================
      PREMIUM CTA
=========================== */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-16"
      >

        <div className="relative overflow-hidden rounded-[30px] border border-orange-400/20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-12 shadow-[0_35px_90px_rgba(249,115,22,.35)] md:px-10">

          {/* Premium Glow */}

          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-[120px]" />

          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

          <div className="relative z-10">

            {/* Floating Icon */}

            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.08,
              }}
              className="mx-auto flex h-18 w-18 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
            >

              <Navigation
                size={34}
                className="text-white"
              />

            </motion.div>

            <h2 className="mt-6 text-center text-4xl font-black text-white md:text-5xl">

              Ready To Travel

              <span className="block">

                Anywhere In South India?

              </span>

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-center text-base leading-7 text-orange-50">

              Airport pickup, local taxi, one-way trips,
              round trips and outstation rides with
              premium vehicles, professional drivers and
              transparent pricing.

            </p>

            {/* Premium Highlights */}

            <div className="mt-10 grid gap-4 md:grid-cols-4">

              {[
                {
                  icon: ShieldCheck,
                  title: "Verified",
                },
                {
                  icon: Star,
                  title: "Top Rated",
                },
                {
                  icon: MapPin,
                  title: "100+ Cities",
                },
                {
                  icon: Navigation,
                  title: "24×7",
                },
              ].map((item, index) => {

                const Icon = item.icon;

                return (

                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className="flex flex-col items-center rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-xl transition-all duration-500"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">

                      <Icon
                        size={22}
                        className="text-white"
                      />

                    </div>

                    <p className="mt-3 text-sm font-semibold text-white">

                      {item.title}

                    </p>

                  </motion.div>

                );

              })}

            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="tel:+918884449452"
                className="group flex h-14 items-center justify-center gap-3 rounded-full border border-white bg-white/10 px-8 font-bold text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-orange-600"
              >

                <Phone
                  size={20}
                  className="transition-transform duration-500 group-hover:rotate-12"
                />

                Call Now

              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.96,
                }}
                href="https://wa.me/918884449452"
                target="_blank"
                rel="noreferrer"
                className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#0B101B] px-8 font-bold text-white shadow-xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,.45)]"
              >

                <MessageCircle
                  size={20}
                  className="transition-transform duration-500 group-hover:rotate-12"
                />

                Get Instant Fare

              </motion.a>

            </div>

          </div>

        </div>

      </motion.div>

    </div>

  </section>
  );
}

export default ServiceAreas;