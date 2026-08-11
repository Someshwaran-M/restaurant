import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../utils/orders";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [period, setPeriod] = useState("all");

  useEffect(()=>{
    setOrders(getOrders());
  },[]);

  const filtered = orders.filter(o=>{
    if (query) {
      const q = query.toLowerCase();
      if (!(o.id.toLowerCase().includes(q) || (o.customer?.name||"").toLowerCase().includes(q) || (o.customer?.mobile||"").includes(q))) return false;
    }
    if (statusFilter && o.status !== statusFilter) return false;
    if (period !== 'all') {
      const created = new Date(o.createdAt);
      const now = new Date();
      if (period==='today') {
        if (created.toDateString() !== now.toDateString()) return false;
      } else if (period==='yesterday') {
        const y = new Date(); y.setDate(now.getDate()-1);
        if (created.toDateString() !== y.toDateString()) return false;
      } else if (period==='7') {
        const p = new Date(); p.setDate(now.getDate()-7);
        if (created < p) return false;
      } else if (period==='month') {
        if (created.getMonth() !== now.getMonth() || created.getFullYear() !== now.getFullYear()) return false;
      }
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-yellow-400">Orders</h1>
          <div className="flex gap-2">
            <input placeholder="Search by ID, name or phone" value={query} onChange={(e)=>setQuery(e.target.value)} className="rounded-xl bg-[#111111] p-3" />
            <select value={statusFilter} onChange={(e)=>setStatusFilter(e.target.value)} className="rounded-xl bg-[#111111] p-3">
              <option value="">All Statuses</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Preparing</option>
              <option>Ready</option>
              <option>Out for Delivery</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
            <select value={period} onChange={(e)=>setPeriod(e.target.value)} className="rounded-xl bg-[#111111] p-3">
              <option value="all">All</option>
              <option value="today">Today</option>
              <option value="yesterday">Yesterday</option>
              <option value="7">Last 7 Days</option>
              <option value="month">This Month</option>
            </select>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {filtered.length===0 && <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-6 text-center text-gray-400">No orders found.</div>}
          {filtered.map(o=> (
            <div key={o.id} className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4 flex items-center justify-between">
              <div>
                <div className="font-bold text-yellow-400">{o.id}</div>
                <div className="text-gray-400">{o.customer?.name} • {o.customer?.mobile}</div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-400">{new Date(o.createdAt).toLocaleString()}</div>
                <div className="mt-2 flex gap-2">
                  <div className="rounded-full bg-black/60 px-3 py-1 text-sm text-yellow-400">{o.status}</div>
                  <Link to={`/admin/orders/${o.id}`} className="rounded-lg border border-yellow-500 px-4 py-2 text-yellow-400">Open</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default AdminOrders;
