import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const getCurrentDate = () => {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

/* ==============================
   CURRENT TIME
============================== */
const getCurrentTime = () => {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};

const ReserveTable = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: getCurrentDate(),
    time: getCurrentTime(),
    guests: "",
    table: "",
    request: "",
  });

  const [bookedTables, setBookedTables] = useState([]);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingDetails, setBookingDetails] = useState(null);

  const tableNumbers = Array.from({ length: 20 }, (_, index) => index + 1);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBooking = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.date ||
      !formData.time ||
      !formData.guests ||
      !formData.table
    ) {
      alert("Please fill in all required fields and select a table.");
      return;
    }

    if (bookedTables.includes(Number(formData.table))) {
      alert("This table has already been booked. Please select another table.");
      return;
    }

    const newBooking = {
      ...formData,
      table: Number(formData.table),
      bookingId: `SG-${Date.now().toString().slice(-6)}`,
    };

    setBookedTables((prev) => [...prev, Number(formData.table)]);
    setBookingDetails(newBooking);
    setBookingSuccess(true);
  };

  const resetBooking = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      date: getCurrentDate(),
      time: getCurrentTime(),
      guests: "",
      table: "",
      request: "",
    });

    setBookingSuccess(false);
    setBookingDetails(null);
  };

 
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

            <form onSubmit={handleBooking} className="mt-8 space-y-5">

  {/* Name */}
  <input
    type="text"
    name="name"
    placeholder="Full Name *"
    value={formData.name}
    onChange={handleChange}
    className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
    required
  />

  {/* Email */}
  <input
    type="email"
    name="email"
    placeholder="Email Address *"
    value={formData.email}
    onChange={handleChange}
    className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
    required
  />

  {/* Phone */}
  <input
    type="tel"
    name="phone"
    placeholder="Phone Number *"
    value={formData.phone}
    onChange={handleChange}
    className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
    required
  />

  {/* Date + Time */}
  <div className="grid gap-5 md:grid-cols-2">

    <input
  type="date"
  name="date"
  value={formData.date}
  onChange={handleChange}
  min={getCurrentDate()}
  className="rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
  required
/>

<input
  type="time"
  name="time"
  value={formData.time}
  onChange={handleChange}
  className="rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
  required
/>

  </div>

  {/* Guests */}
  <select
    name="guests"
    value={formData.guests}
    onChange={handleChange}
    className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white focus:border-yellow-400 focus:outline-none"
    required
  >
    <option value="">Select Guests *</option>
    <option value="1">1 Person</option>
    <option value="2">2 People</option>
    <option value="3">3 People</option>
    <option value="4">4 People</option>
    <option value="5">5 People</option>
    <option value="6">6 People</option>
    <option value="7">More Then 6</option>
  </select>

  {/* Table Selection */}
  <div>

    <label className="mb-3 block font-semibold text-yellow-400">
      Select Table Number *
    </label>

    <div className="grid grid-cols-4 gap-3 sm:grid-cols-5">

      {tableNumbers.map((table) => {
        const isBooked = bookedTables.includes(table);
        const isSelected = Number(formData.table) === table;

        return (
          <button
            key={table}
            type="button"
            disabled={isBooked}
            onClick={() =>
              setFormData((prev) => ({
                ...prev,
                table: String(table),
              }))
            }
            className={`rounded-xl border px-3 py-3 text-sm font-bold transition-all duration-300 ${
              isBooked
                ? "cursor-not-allowed border-red-500/30 bg-red-500/10 text-red-400"
                : isSelected
                ? "border-yellow-400 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(255,215,0,.35)] scale-105"
                : "border-yellow-500/20 bg-black text-yellow-400 hover:border-yellow-400 hover:bg-yellow-500/10"
            }`}
          >
            {isBooked ? `T${table} ✕` : `Table ${table}`}
          </button>
        );
      })}

    </div>

    {formData.table && (
      <p className="mt-3 text-sm text-gray-400">
        Selected Table:
        <span className="ml-2 font-bold text-yellow-400">
          Table {formData.table}
        </span>
      </p>
    )}

  </div>

  {/* Special Request */}
  <textarea
    name="request"
    rows="4"
    placeholder="Special Request (Optional)"
    value={formData.request}
    onChange={handleChange}
    className="w-full rounded-xl border border-yellow-500/20 bg-black px-5 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
  />

  {/* Book Button */}
  <button
    type="submit"
    className="w-full rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(255,215,0,.35)]"
  >
    Book Your Table
  </button>

</form>
{bookingSuccess && bookingDetails && (
  <div className="mt-8 rounded-2xl border border-green-500/30 bg-green-500/10 p-6">

    <div className="text-center">

      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-3xl text-white">
        ✓
      </div>

      <h3 className="mt-4 text-2xl font-black text-green-400">
        Table Booked Successfully!
      </h3>

      <p className="mt-2 text-gray-300">
        Your reservation has been confirmed.
      </p>

    </div>

    <div className="mt-6 space-y-3 rounded-xl bg-black/50 p-5">

      <div className="flex justify-between">
        <span className="text-gray-400">Booking ID</span>
        <span className="font-bold text-yellow-400">
          {bookingDetails.bookingId}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Name</span>
        <span className="font-semibold text-white">
          {bookingDetails.name}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Table</span>
        <span className="font-bold text-yellow-400">
          Table {bookingDetails.table}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Guests</span>
        <span className="text-white">
          {bookingDetails.guests}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Date</span>
        <span className="text-white">
          {bookingDetails.date}
        </span>
      </div>

      <div className="flex justify-between">
        <span className="text-gray-400">Time</span>
        <span className="text-white">
          {bookingDetails.time}
        </span>
      </div>

    </div>

    <button
      type="button"
      onClick={resetBooking}
      className="mt-5 w-full rounded-xl border border-yellow-500 py-3 font-bold text-yellow-400 transition-all hover:bg-yellow-500 hover:text-black"
    >
      Make Another Reservation
    </button>

  </div>
)}
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

        Reserve Online &

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