import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
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

function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="relative overflow-hidden bg-[#0A0F1A] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[160px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
             {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-5xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            SERVICE AREAS
          </span>

          <h2 className="mt-5 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Taxi Services Across{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Tamil Nadu
            </span>{" "}
            & South India
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
            Safe, affordable and reliable taxi services for airport transfers,
            one-way trips, round trips and outstation travel with professional
            drivers.
          </p>
        </motion.div>

        {/* Featured Cities */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {featuredCities.map((city, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="group rounded-[28px] border border-white/10 bg-[#141922] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/50 hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]"
            >

              <div className="flex items-start gap-5">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">

                  <MapPin
                    size={32}
                    className="text-orange-400 group-hover:text-white"
                  />

                </div>

                <div className="flex-1">

                  <h3 className="text-3xl font-bold text-white">
                    {city.name}
                  </h3>

                  <p className="mt-2 text-lg text-gray-400">
                    {city.desc}
                  </p>

                  <button className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-400 transition hover:text-orange-300">

                    View Taxi

                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>
                          </motion.div>

          ))}

        </div>

        {/* All Cities */}

        <div className="mt-20 flex flex-wrap justify-center gap-4">

          {allCities.map((city, index) => (

            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: index * 0.02,
              }}
              viewport={{ once: true }}
              className="rounded-full border border-white/10 bg-[#141922] px-7 py-3 text-base font-medium text-gray-300 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/20"
            >
              {city}
            </motion.button>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-orange-500/20 bg-gradient-to-r from-orange-500/10 via-[#141922] to-orange-500/10 p-10"
        >

          <section className="relative overflow-hidden bg-[#0B101B] py-20">

  {/* Background Glow */}
  <div className="absolute left-0 top-0 h-full w-1/2 bg-orange-500/10 blur-[120px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <div className="flex flex-col items-center justify-center text-center">

      <h2 className="text-4xl font-extrabold text-white md:text-5xl">
        Book Taxi from Any City Instantly
      </h2>

      <p className="mt-4 text-lg text-gray-400">
        Fixed fare • No hidden charges • Instant confirmation
      </p>

      <div className="mt-10 flex flex-col gap-5 sm:flex-row">

        {/* Call Button */}

        <a
          href="tel:+918884449452"
          className="flex items-center justify-center gap-3 rounded-full border-2 border-orange-500 px-10 py-4 text-xl font-bold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white"
        >
          <Phone size={24} />
          Call Now
        </a>

        {/* WhatsApp Button */}

        <a
          href="https://wa.me/918884449452"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-3 rounded-full bg-orange-500 px-10 py-4 text-xl font-bold text-white transition-all duration-300 hover:bg-orange-600"
        >
          <MessageCircle size={24} />
          Get Instant Fare on WhatsApp
        </a>

      </div>

    </div>

  </div>

</section>

        </motion.div>
              </div>

    </section>
  );
}

export default ServiceAreas;