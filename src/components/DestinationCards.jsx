import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
  Star,
  MapPin,
  ShieldCheck,
  Clock3,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Chennai One Way Taxi",
    subtitle: "Airport & City Travel",
    badge: "CITY",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80",
    trips: "12K+ Trips",
  },
  {
    id: 2,
    title: "Bangalore One Way Taxi",
    subtitle: "Business & Airport Transfer",
    badge: "BUSINESS",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=1200&q=80",
    trips: "18K+ Trips",
  },
  {
    id: 3,
    title: "Coimbatore One Way Taxi",
    subtitle: "Industrial & City Ride",
    badge: "CITY",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    trips: "9K+ Trips",
  },
  {
    id: 4,
    title: "Madurai One Way Taxi",
    subtitle: "Temple & Family Tour",
    badge: "TEMPLE",
    image:
      "https://images.unsplash.com/photo-1589308454676-5a88f0df1f44?auto=format&fit=crop&w=1200&q=80",
    trips: "15K+ Trips",
  },
  {
    id: 5,
    title: "Ooty One Way Taxi",
    subtitle: "Hill Station Journey",
    badge: "HILL",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    trips: "20K+ Trips",
  },
  {
    id: 6,
    title: "Kodaikanal One Way Taxi",
    subtitle: "Lake & Nature Tour",
    badge: "HILL",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
    trips: "13K+ Trips",
  },
  {
    id: 7,
    title: "Pondicherry One Way Taxi",
    subtitle: "Beach Vacation",
    badge: "BEACH",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    trips: "11K+ Trips",
  },
  {
    id: 8,
    title: "Mysore One Way Taxi",
    subtitle: "Palace Heritage Ride",
    badge: "HERITAGE",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    trips: "14K+ Trips",
  },
];

function DestinationCards({ darkMode }) {
  return (
    <section
      className={`relative overflow-hidden py-24 ${
        darkMode
          ? "bg-gradient-to-b from-[#050816] via-[#0B1120] to-[#050816]"
          : "bg-gradient-to-b from-orange-50 via-white to-orange-50"
      }`}
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-orange-500/20 blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] rounded-full bg-orange-400/10 blur-[150px]" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-flex px-5 py-2 rounded-full bg-orange-500/10 text-orange-500 font-bold tracking-[4px] uppercase border border-orange-500/20">
            Premium Destinations
          </span>

          <h2
            className={`mt-6 text-5xl lg:text-6xl font-black leading-tight ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            One Way Taxi Across
            <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Tamil Nadu • Karnataka • Kerala
            </span>
          </h2>

          <p
            className={`mt-6 text-lg leading-8 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Travel with professional chauffeurs, luxury vehicles,
            transparent pricing and 24×7 customer support.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {destinations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`group rounded-3xl overflow-hidden border transition-all duration-500 ${
                darkMode
                  ? "bg-white/5 border-white/10 backdrop-blur-xl hover:border-orange-500/40"
                  : "bg-white border-orange-100 shadow-xl hover:shadow-2xl"
              }`}
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

                {/* Shine */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-all duration-1000" />

                {/* Badge */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-bold tracking-widest shadow-lg">
                    {item.badge}
                  </span>
                </div>

                {/* Rating */}
                <div className="absolute top-5 right-5 flex items-center gap-1 px-3 py-2 rounded-full bg-black/50 backdrop-blur-md text-white">
                  <Star
                    size={15}
                    className="fill-yellow-400 text-yellow-400"
                  />
                  <span className="text-sm font-semibold">4.9</span>
                </div>

                {/* Bottom Info */}
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-3xl font-bold">
                    {item.title}
                  </h3>

                  <div className="flex items-center gap-2 text-orange-300 mt-2">
                    <MapPin size={16} />
                    <span>{item.subtitle}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div
                    className={`rounded-2xl p-4 text-center ${
                      darkMode ? "bg-white/5" : "bg-orange-50"
                    }`}
                  >
                    <Star
                      size={20}
                      className="mx-auto text-orange-500 mb-2"
                    />
                    <p
                      className={`font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      4.9
                    </p>
                    <p className="text-xs text-gray-500">Rating</p>
                  </div>

                  <div
                    className={`rounded-2xl p-4 text-center ${
                      darkMode ? "bg-white/5" : "bg-orange-50"
                    }`}
                  >
                    <ShieldCheck
                      size={20}
                      className="mx-auto text-green-500 mb-2"
                    />
                    <p
                      className={`font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      Safe
                    </p>
                    <p className="text-xs text-gray-500">Verified</p>
                  </div>

                  <div
                    className={`rounded-2xl p-4 text-center ${
                      darkMode ? "bg-white/5" : "bg-orange-50"
                    }`}
                  >
                    <Clock3
                      size={20}
                      className="mx-auto text-blue-500 mb-2"
                    />
                    <p
                      className={`font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      24×7
                    </p>
                    <p className="text-xs text-gray-500">Support</p>
                  </div>
                </div>

                {/* Route */}
                <div
                  className={`rounded-2xl border p-4 ${
                    darkMode
                      ? "border-white/10 bg-white/5"
                      : "border-orange-100 bg-orange-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-xs text-gray-500">
                        Completed Trips
                      </p>

                      <h4
                        className={`text-xl font-bold ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {item.trips}
                      </h4>
                    </div>

                    <ArrowRight
                      className="text-orange-500"
                      size={30}
                    />
                  </div>
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <a
                    href="tel:+919888444952"
                    className="h-14 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 text-white font-bold shadow-xl shadow-orange-500/30"
                  >
                    <Phone size={18} />
                    Call Now
                  </a>

                  <a
                    href="https://wa.me/919888444952"
                    target="_blank"
                    rel="noreferrer"
                    className="h-14 rounded-2xl border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3 font-bold"
                  >
                    <MessageCircle size={18} />
                    WhatsApp
                  </a>
                </div>

                <p
                  className={`mt-5 text-center text-sm ${
                    darkMode ? "text-gray-500" : "text-gray-500"
                  }`}
                >
                  ✓ Fixed Fare &nbsp; • &nbsp; ✓ No Hidden Charges &nbsp; •
                  &nbsp; ✓ Instant Confirmation
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;