import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getOrders, updateOrderStatus } from "../utils/orders";

const statuses = ["Pending","Confirmed","Preparing","Ready","Out for Delivery","Completed","Cancelled"];

const AdminOrderDetail = ()=>{
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(()=>{
    const list = getOrders();
    const found = list.find(o=>o.id===id);
    setOrder(found);
  },[id]);

  const changeStatus = (s) =>{
    const updated = updateOrderStatus(order.id, s);
    setOrder(updated);
  }

  if (!order) return <div className="min-h-screen bg-black text-white p-6">Order not found.</div>;

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-black text-yellow-400">{order.id}</h1>
          <button onClick={()=>navigate('/admin/orders')} className="rounded-xl border border-yellow-500 px-4 py-2 text-yellow-400">Back</button>
        </div>

        <div className="mt-6 rounded-xl border border-yellow-500/20 bg-[#111111] p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-400">Customer</p>
              <div className="font-bold">{order.customer?.name}</div>
              <div className="text-gray-400">{order.customer?.mobile}</div>
              <div className="text-gray-400">{order.customer?.email}</div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Details</p>
              <div>Type: {order.orderType}</div>
              <div>Payment: {order.paymentMethod}</div>
              <div>Table: {order.tableNo || '—'}</div>
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-white">Items</h3>
            <ul className="mt-2 space-y-2">
              {order.items.map(it=> (
                <li key={it.id} className="flex items-center justify-between">
                  <span>{it.name} x {it.quantity}</span>
                  <span className="font-bold">{it.price}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Subtotal</p>
              <div className="font-bold">${(order.subtotal||0).toFixed(2)}</div>
            </div>
            <div>
              <p className="text-sm text-gray-400">Status</p>
              <div className="mt-2 flex gap-2">
                {statuses.map(s=> (
                  <button key={s} onClick={()=>changeStatus(s)} className={`rounded-full px-3 py-1 text-sm ${s===order.status? 'bg-yellow-400 text-black' : 'bg-black/60 text-gray-300'}`}>{s}</button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default AdminOrderDetail;
