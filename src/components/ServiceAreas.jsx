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
function ServiceAreas({ darkMode }) {
  return (
    <section
      id="service-areas"
      className={`relative overflow-hidden py-20 transition-all duration-500 ${
  darkMode ? "bg-[#0A0F1A]" : "bg-white"
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
          
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            SERVICE AREAS
          </span>

          <h3 className={`mt-4 text-4xl font-extrabold leading-tight md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
            Taxi Services Across{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Tamil Nadu
            </span>{" "}
            & South India
          </h3>

          <p className={`mx-auto mt-5 max-w-3xl text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
            Safe, affordable and reliable taxi services for airport transfers,
            one-way trips, round trips and outstation travel with professional
            drivers.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

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
              className={`group rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/50 hover:shadow-[0_0_30px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}
            >

              <div className="flex items-start gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">

                  <MapPin
                    size={26}
                    className="text-orange-400 group-hover:text-white"
                  />

                </div>

                <div className="flex-1">

                  <h3 className={`text-2xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                    {city.name}
                  </h3>

                  <p className={`mt-2 text-base ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                    {city.desc}
                  </p>

                  <button className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-600">

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


        <div className="mt-12 flex flex-wrap justify-center gap-3">

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
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
  darkMode
    ? "border border-white/10 bg-[#141922] text-gray-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
    : "border border-gray-200 bg-white text-gray-700 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
}`}
            >
              {city}
            </motion.button>

          ))}

        </div>

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mt-14"
>
  <div
    className={`relative overflow-hidden rounded-3xl px-6 py-10 md:px-12 ${
      darkMode
        ? "border border-white/10 bg-[#101827]"
        : "border border-gray-200 bg-gray-50 shadow-lg"
    }`}
  >
  
    <div
      className={`absolute -left-20 top-0 h-48 w-48 rounded-full blur-[100px] ${
        darkMode ? "bg-orange-500/20" : "bg-orange-300/20"
      }`}
    />

    <div
      className={`relative z-10 flex flex-col items-center text-center`}
    >
      <h2
        className={`text-2xl font-bold md:text-4xl ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Book Taxi from Any City Instantly
      </h2>

      <p
        className={`mt-3 text-sm md:text-base ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}
      >
        Fixed fare • No hidden charges • Instant confirmation
      </p>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
    
        <a
          href="tel:+918884449452"
          className={`flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-all duration-300 ${
            darkMode
              ? "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >
          <Phone size={18} />
          Call Now
        </a>

        <a
          href="https://wa.me/918884449452"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600"
        >
          <MessageCircle size={18} />
          Get Instant Fare on Whatsapp
        </a>
      </div>
    </div>
  </div>
</motion.div>
              </div>

    </section>
  );
}

export default ServiceAreas;