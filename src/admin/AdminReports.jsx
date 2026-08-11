import React from "react";
import { getOrders } from "../utils/orders";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminReports = ()=>{
  const orders = getOrders();
  const now = new Date();
  const last7 = Array.from({length:7}).map((_,i)=>{ const d=new Date(); d.setDate(now.getDate()-i); return d; }).reverse();

  const labels = last7.map(d=>d.toLocaleDateString());
  const dataPoints = last7.map(d=>orders.filter(o=>new Date(o.createdAt).toDateString()===d.toDateString()).reduce((s,o)=>s+(o.total||o.subtotal||0),0));

  const data = {
    labels,
    datasets:[{ label: 'Sales', data: dataPoints, borderColor: '#f6d365', backgroundColor: '#f6d36533' }]
  }

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-black text-yellow-400">Reports</h1>
        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-[#111111] p-6">
          <h3 className="font-bold text-white">Last 7 days sales</h3>
          <div className="mt-4">
            <Line data={data} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminReports;
