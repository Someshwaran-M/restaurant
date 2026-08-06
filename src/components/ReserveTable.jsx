import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const ReserveTable = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Gold Glow */}
      <div className="fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Hero */}

      <section
       id="reserve"
        className="relative h-[400px] overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600')",
        }}
      >

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative flex h-full flex-col items-center justify-center px-6 text-center">

          <span className="uppercase tracking-[6px] font-bold text-yellow-400">
            Reserve Table
          </span>

          <h1 className="mt-4 text-5xl font-black text-white md:text-6xl">

            Book Your

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Dining Experience

            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 leading-8">

            Reserve your table today and enjoy premium food,
            elegant ambience, and unforgettable hospitality at
            Spice Garden Restaurant.

          </p>

        </div>

      </section>

      {/* Reservation Section */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Reservation Form */}

          <div className="rounded-[30px] border border-yellow-500/20 bg-[#111111] p-10 shadow-[0_0_35px_rgba(255,215,0,.12)]">

            <span className="uppercase tracking-[5px] font-bold text-yellow-400">
              Reservation Form
            </span>

            <h2 className="mt-3 text-4xl font-black text-white">
              Book Your Table
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

              <div className="grid gap-5 md:grid-cols-2">

                <input
                  type="date"
                  className="rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
                />

                <input
                  type="time"
                  className="rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
                />

              </div>

              <select className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none">

                <option>Select Guests</option>
                <option>1 Person</option>
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6+ People</option>

              </select>

              <textarea
                rows="5"
                placeholder="Special Request (Optional)"
                className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,215,0,.35)]"
              >
                Reserve Now
              </button>

            </form>

          </div>

          {/* Restaurant Details Starts Here */}
          <div className="flex flex-col justify-center">

  <span className="uppercase tracking-[5px] font-bold text-yellow-400">
    Welcome
  </span>

  <h2 className="mt-3 text-4xl font-black text-white">

    Enjoy A Luxury

    <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

      Dining Experience

    </span>

  </h2>

  <p className="mt-6 leading-8 text-gray-300">

    Reserve your table in advance and enjoy authentic cuisine,
    elegant ambience, and exceptional hospitality.
    Whether it's a romantic dinner, birthday celebration,
    business meeting, or family gathering, we make every
    occasion memorable.

  </p>

  {/* Contact Cards */}

  <div className="mt-10 space-y-6">

    {/* Location */}

    <div className="flex items-center gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaMapMarkerAlt />

      </div>

      <div>

        <h3 className="text-xl font-bold text-yellow-400">
          Restaurant Location
        </h3>

        <p className="mt-2 text-gray-300">
          123 Food Street
          <br />
          Chennai, Tamil Nadu
          <br />
          India - 600001
        </p>

      </div>

    </div>

    {/* Phone */}

    <div className="flex items-center gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaPhoneAlt />

      </div>

      <div>

        <h3 className="text-xl font-bold text-yellow-400">
          Reservation Phone
        </h3>

        <p className="mt-2 text-gray-300">
          +91 98765 43210
        </p>

      </div>

    </div>

    {/* Opening Hours */}

    <div className="flex items-center gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaClock />

      </div>

      <div>

        <h3 className="text-xl font-bold text-yellow-400">
          Opening Hours
        </h3>

        <p className="mt-2 leading-7 text-gray-300">
          Monday - Sunday
          <br />
          10:00 AM - 11:00 PM
        </p>

      </div>

    </div>

    {/* Available Dates */}

    <div className="flex items-center gap-5 rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400">

      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 via-amber-500 to-yellow-600 text-2xl text-black">

        <FaCalendarAlt />

      </div>

      <div>

        <h3 className="text-xl font-bold text-yellow-400">
          Reservation Days
        </h3>

        <p className="mt-2 text-gray-300">
          Tables Available Every Day
        </p>

      </div>

    </div>

  </div>

  {/* Special Offer */}

  <div className="relative mt-10 overflow-hidden rounded-3xl border border-yellow-500/20 bg-gradient-to-r from-[#111111] via-black to-[#111111] p-8 shadow-[0_0_35px_rgba(255,215,0,.18)]">

    <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-yellow-500/20 blur-[90px]" />

    <div className="relative z-10">

      <span className="uppercase tracking-[4px] font-bold text-yellow-400">
        Exclusive Offer
      </span>

      <h3 className="mt-3 text-3xl font-black text-white">

        🎉 Reserve Online &

        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

          Get 10% OFF

        </span>

      </h3>

      <p className="mt-5 leading-8 text-gray-300">

        Make your reservation online today and enjoy
        an exclusive 10% discount on your first dining
        experience at Spice Garden Restaurant.

      </p>

    </div>

  </div>

</div>

</div>

</section>

{/* Premium Bottom CTA Starts Here */}
<section className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] py-24">

  {/* Gold Glow */}
  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />

  <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <span className="uppercase tracking-[6px] font-bold text-yellow-400">
      Fine Dining Experience
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">

      Make Every

      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

        Reservation Special

      </span>

    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">

      Celebrate birthdays, anniversaries, business meetings,
      romantic dinners, and family gatherings with premium
      food and exceptional hospitality at
      <span className="font-semibold text-yellow-400">
        {" "}Spice Garden Restaurant
      </span>.

    </p>

    {/* Statistics */}

    <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">

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
          className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(255,215,0,.25)]"
        >
          <h3 className="text-3xl font-black text-yellow-400">
            {item.value}
          </h3>

          <p className="mt-2 text-sm text-gray-400">
            {item.label}
          </p>

        </div>
      ))}

    </div>

    {/* CTA Buttons */}

    <div className="mt-14 flex flex-col items-center justify-center gap-5 md:flex-row">

      <button className="rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,.35)]">
        Reserve Your Table
      </button>

      <button className="rounded-full border border-yellow-500 px-10 py-4 font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black">
        Explore Menu
      </button>

    </div>

  </div>

</section>

</div>
);
};

export default ReserveTable;