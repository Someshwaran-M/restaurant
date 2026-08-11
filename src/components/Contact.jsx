import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Gold Glow */}
      <div className="fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Hero */}

      <section className="relative h-[380px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
          alt="Contact"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          <span className="uppercase tracking-[6px] font-bold text-yellow-400">
            Contact Us
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-black text-white">

            We'd Love To

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Hear From You

            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 leading-8">

            Whether you're planning a family dinner, private event,
            or simply have a question, our team is always ready
            to assist you.

          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Form */}

          <div className="rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 shadow-[0_0_35px_rgba(255,215,0,.10)]">

            <span className="uppercase tracking-[5px] font-bold text-yellow-400">
              Send Message
            </span>

            <h2 className="mt-3 text-4xl font-black text-white">
              Get In Touch
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,215,0,.35)]"
              >
                <FaPaperPlane />
                Send Message
              </button>

            </form>

          </div>

          {/* Contact Information Starts Here */}
          <div>

  <span className="uppercase tracking-[5px] font-bold text-yellow-400">
    Contact Details
  </span>

  <h2 className="mt-3 text-4xl font-black text-white">
    Visit Our Restaurant
  </h2>

  <p className="mt-5 text-gray-300 leading-8">
    We'd love to welcome you to Spice Garden Restaurant.
    Visit us for delicious food, warm hospitality, and an
    unforgettable dining experience.
  </p>

  <div className="mt-10 space-y-6">

    {/* Address */}

    <div className="flex gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaMapMarkerAlt />

      </div>

      <div>

        <h3 className="text-2xl font-bold text-yellow-400">
          Address
        </h3>

        <p className="mt-2 leading-7 text-gray-300">
          123 Food Street
          <br />
          Chennai, Tamil Nadu
          <br />
          India - 600001
        </p>

      </div>

    </div>

    {/* Phone */}

    <div className="flex gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaPhoneAlt />

      </div>

      <div>

        <h3 className="text-2xl font-bold text-yellow-400">
          Phone
        </h3>

        <p className="mt-2 text-gray-300">
          +91 98765 43210
        </p>

      </div>

    </div>

    {/* Email */}

    <div className="flex gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaEnvelope />

      </div>

      <div>

        <h3 className="text-2xl font-bold text-yellow-400">
          Email
        </h3>

        <p className="mt-2 text-gray-300">
          info@spicegarden.com
        </p>

      </div>

    </div>

    {/* Opening Hours */}

    <div className="flex gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaClock />

      </div>

      <div>

        <h3 className="text-2xl font-bold text-yellow-400">
          Opening Hours
        </h3>

        <p className="mt-2 leading-7 text-gray-300">
          Monday – Friday : 10:00 AM – 10:00 PM
          <br />
          Saturday : 09:00 AM – 11:00 PM
          <br />
          Sunday : 09:00 AM – 11:00 PM
        </p>

      </div>

    </div>

  </div>

  {/* Social Media */}

  <div className="mt-10">

    <h3 className="mb-5 text-2xl font-bold text-yellow-400">
      Follow Us
    </h3>

    <div className="flex gap-4">

      {[
        <FaFacebookF />,
        <FaInstagram />,
        <FaTwitter />,
        <FaWhatsapp />,
      ].map((icon, index) => (
        <a
          key={index}
          href="#"
          className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500/20 bg-[#111111] text-xl text-yellow-400 transition-all duration-300 hover:scale-110 hover:bg-gradient-to-br hover:from-yellow-400 hover:to-amber-500 hover:text-black"
        >
          {icon}
        </a>
      ))}

    </div>

  </div>

</div>

</div>

</section>

{/* Google Map Starts Here */}
<section className="px-6 pb-24">

  <div className="mx-auto max-w-7xl overflow-hidden rounded-[30px] border border-yellow-500/20 shadow-[0_0_35px_rgba(255,215,0,.15)]">

    <iframe
      title="Restaurant Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.219706885813!2d76.958242!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859a62d9d5f71%3A0x2df0fbb58f2d3f57!2sCoimbatore!5e0!3m2!1sen!2sin!4v1722960000000"
      width="100%"
      height="500"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
    ></iframe>

  </div>

</section>

{/* Luxury CTA */}

<section className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] py-24">

  {/* Gold Glow */}

  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[150px]" />

  <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <span className="uppercase tracking-[6px] font-bold text-yellow-400">
      Visit Spice Garden
    </span>

    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">

      Enjoy The Taste Of

      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

        Premium Dining

      </span>

    </h2>

    <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">

      Whether you're planning a romantic dinner, family gathering,
      birthday celebration, or corporate event, Spice Garden Restaurant
      is ready to serve unforgettable food and exceptional hospitality.

    </p>

    {/* Highlights */}

    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

      {[
        {
          value: "10+",
          label: "Years Experience",
        },
        {
          value: "25K+",
          label: "Happy Guests",
        },
        {
          value: "100+",
          label: "Signature Dishes",
        },
        {
          value: "4.9★",
          label: "Customer Rating",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
        >
          <h3 className="text-3xl font-black text-yellow-400">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.label}
          </p>

        </div>
      ))}

    </div>

    {/* Buttons */}

    

  </div>

</section>

</div>
);
};

export default Contact;