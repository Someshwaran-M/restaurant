import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getOrders } from "../utils/orders";

const AdminDashboard = () => {
  const navigate = useNavigate();
  const orders = getOrders();

  const today = new Date().toISOString().slice(0,10);
  const todaysOrders = orders.filter(o=>o.createdAt.slice(0,10)===today);

  const counts = orders.reduce((acc,o)=>{ acc[o.status]= (acc[o.status]||0)+1; return acc },{});

  const revenueToday = todaysOrders.reduce((s,o)=>s+(o.total||o.subtotal||0),0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-black text-yellow-400">Admin Dashboard</h1>
          <div className="flex gap-3">
            <button onClick={()=>{sessionStorage.removeItem('spicegarden_admin'); navigate('/');}} className="rounded-xl border border-yellow-500 px-4 py-2 text-yellow-400">Logout</button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4">
            <p className="text-sm text-gray-400">Today's Orders</p>
            <p className="text-2xl font-bold">{todaysOrders.length}</p>
          </div>
          <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4">
            <p className="text-sm text-gray-400">Pending</p>
            <p className="text-2xl font-bold">{counts['Pending']||0}</p>
          </div>
          <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4">
            <p className="text-sm text-gray-400">Preparing</p>
            <p className="text-2xl font-bold">{counts['Preparing']||0}</p>
          </div>
          <div className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4">
            <p className="text-sm text-gray-400">Today's Revenue</p>
            <p className="text-2xl font-bold">${revenueToday.toFixed(2)}</p>
          </div>
        </div>

        <div className="mt-8 flex gap-3">
          <Link to="/admin/orders" className="rounded-xl border border-yellow-500 px-5 py-3 font-bold text-yellow-400">View Orders</Link>
          <Link to="/admin/customers" className="rounded-xl border border-yellow-500 px-5 py-3 font-bold text-yellow-400">Customers</Link>
          <Link to="/admin/reports" className="rounded-xl border border-yellow-500 px-5 py-3 font-bold text-yellow-400">Reports</Link>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-white">Recent Orders</h2>
          <div className="mt-4 space-y-3">
            {orders.slice(0,6).map(o=> (
              <div key={o.id} className="rounded-xl border border-yellow-500/20 bg-[#111111] p-4 flex items-center justify-between">
                <div>
                  <div className="font-bold text-yellow-400">{o.id}</div>
                  <div className="text-gray-400">{o.customer?.name} • {o.customer?.mobile}</div>
                </div>
                <div className="flex gap-3">
                  <Link to={`/admin/orders/${o.id}`} className="rounded-lg border border-yellow-500 px-4 py-2 text-yellow-400">View</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
};

export default AdminDashboard;
