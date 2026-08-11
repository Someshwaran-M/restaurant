import React, { useState } from "react";
import { findOrderByIdAndPhone } from "../utils/orders";

const steps = ["Pending","Confirmed","Preparing","Ready","Out for Delivery","Completed","Cancelled"];

const OrderTracking = () => {
  const [orderId, setOrderId] = useState("");
  const [mobile, setMobile] = useState("");
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setError("");
    const found = findOrderByIdAndPhone(orderId.trim(), mobile.trim());
    if (!found) {
      setError("Order not found. Make sure Order ID and mobile match.");
      setOrder(null);
      return;
    }
    setOrder(found);
  };

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-black text-yellow-400">Track Your Order</h1>

        <form onSubmit={handleSearch} className="mt-6 flex gap-3">
          <input value={orderId} onChange={(e)=>setOrderId(e.target.value)} placeholder="Order ID (e.g. SG-1001)" className="rounded-xl bg-[#111111] p-4 w-1/2" />
          <input value={mobile} onChange={(e)=>setMobile(e.target.value)} placeholder="Mobile number" className="rounded-xl bg-[#111111] p-4 w-1/2" />
          <button className="rounded-xl bg-yellow-400 px-5 py-3 font-bold text-black">Search</button>
        </form>

        {error && <p className="mt-4 text-red-400">{error}</p>}

        {order && (
          <div className="mt-6 rounded-xl border border-yellow-500/20 bg-[#111111] p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-yellow-400">Order {order.id}</h2>
                <p className="text-gray-400">{order.customer?.name} • {order.customer?.mobile}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">Type: {order.orderType}</p>
                <p className="text-sm text-gray-400">Payment: {order.paymentMethod}</p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-white">Status</h3>
              <div className="mt-2 flex gap-2 overflow-auto">
                {steps.map((s) => (
                  <div key={s} className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold ${s===order.status? 'bg-yellow-400 text-black' : 'bg-black/50 text-gray-300'}`}>
                    {s}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold text-white">Items</h3>
              <ul className="mt-2 space-y-2">
                {order.items.map((it) => (
                  <li key={it.id} className="flex items-center justify-between">
                    <span>{it.name} x {it.quantity}</span>
                    <span className="font-bold text-white">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-400">Table</p>
                <p className="font-bold text-yellow-400">{order.tableNo || '—'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Total</p>
                <p className="font-bold text-white">${(order.total||order.subtotal).toFixed(2)}</p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};

export default OrderTracking;
