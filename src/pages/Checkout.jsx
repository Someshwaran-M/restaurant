import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, tableNo, placeOrder } = useContext(CartContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [orderType, setOrderType] = useState("Dine-in");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [error, setError] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!name || !mobile) {
      setError("Name and mobile are required");
      return;
    }

    if (orderType === "Dine-in" && !tableNo) {
      setError("Please select a table for Dine-in orders.");
      return;
    }

    if (orderType === "Delivery" && !address) {
      setError("Please provide a delivery address.");
      return;
    }

    const customer = { name, mobile, email };

    try {
      const order = placeOrder({ customer, orderType, paymentMethod, address });
      setOrderPlaced(order);
      // navigate to order tracking or confirmation
    } catch (err) {
      setError(err.message || "Could not place order");
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-black text-white px-6 py-12">
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-4xl text-black">✓</div>
          <h2 className="mt-6 text-3xl font-black text-white">Order Confirmed</h2>
          <p className="mt-3 text-gray-400">Order ID: <span className="font-bold text-yellow-400">{orderPlaced.id}</span></p>
          <p className="mt-2 text-gray-400">Thank you — your order has been saved locally in your browser.</p>
          <div className="mt-6 flex flex-col gap-3">
            <button onClick={() => navigate(`/tracking`)} className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">Track Order</button>
            <button onClick={() => navigate('/menu')} className="rounded-xl border border-yellow-500 px-5 py-3 font-bold text-yellow-400">Back to Menu</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-black text-yellow-400">Checkout</h1>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="Full name" className="rounded-xl bg-[#111111] p-4" />
            <input value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile number" className="rounded-xl bg-[#111111] p-4" />
          </div>

          <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email (optional)" className="rounded-xl bg-[#111111] p-4" />

          <div>
            <label className="text-sm text-gray-400">Order Type</label>
            <select value={orderType} onChange={(e)=>setOrderType(e.target.value)} className="mt-2 rounded-xl bg-[#111111] p-3 w-full">
              <option>Dine-in</option>
              <option>Takeaway</option>
              <option>Delivery</option>
            </select>
          </div>

          {orderType === 'Delivery' && (
            <textarea value={address} onChange={(e)=>setAddress(e.target.value)} placeholder="Delivery address" className="rounded-xl bg-[#111111] p-4" />
          )}

          <div>
            <label className="text-sm text-gray-400">Payment Method</label>
            <select value={paymentMethod} onChange={(e)=>setPaymentMethod(e.target.value)} className="mt-2 rounded-xl bg-[#111111] p-3 w-full">
              <option>Cash</option>
              <option>Card</option>
            </select>
          </div>

          <div className="mt-4">
            <button type="submit" className="rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-5 py-3 font-bold text-black">Place Order</button>
          </div>

          {error && <p className="text-red-400">{error}</p>}
        </form>

      </div>
    </div>
  );
};

export default Checkout;
