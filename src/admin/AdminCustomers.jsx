import React from "react";
import { getOrders } from "../utils/orders";

const AdminCustomers = () => {
  const orders = getOrders();

  const customers = Object.values(
    orders.reduce((acc,o)=>{
      const key = o.customer?.mobile || o.customer?.email || o.customer?.name;
      if (!acc[key]) acc[key] = { name: o.customer?.name, phone: o.customer?.mobile, email: o.customer?.email, orders: 0, spent: 0, last: o.createdAt };
      acc[key].orders += 1;
      acc[key].spent += (o.total||o.subtotal||0);
      if (new Date(o.createdAt) > new Date(acc[key].last)) acc[key].last = o.createdAt;
      return acc;
    }, {})
  );

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-black text-yellow-400">Customers</h1>
        <div className="mt-6 space-y-3">
          {customers.length===0 && <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-6 text-center text-gray-400">No customers yet.</div>}
          {customers.map(c=> (
            <div key={c.phone||c.email||c.name} className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-yellow-400">{c.name}</div>
                <div className="text-gray-400">{c.phone} • {c.email}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">Orders: {c.orders}</div>
                <div className="text-sm text-gray-400">Spent: ${c.spent.toFixed(2)}</div>
                <div className="text-sm text-gray-400">Last: {new Date(c.last).toLocaleString()}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AdminCustomers;
