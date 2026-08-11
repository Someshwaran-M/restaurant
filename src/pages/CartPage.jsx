import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cart, updateQuantity, tableNo, setTableNo } = useContext(CartContext);
  const navigate = useNavigate();

  const subtotal = cart.reduce((s, it) => s + parseFloat(String(it.price).replace(/[^0-9.]/g, "")) * it.quantity, 0);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-black text-yellow-400">Your Cart</h1>

        {cart.length === 0 ? (
          <div className="mt-8 rounded-xl border border-yellow-500/20 bg-[#111111] p-8 text-center">
            <p className="text-gray-400">Your cart is empty.</p>
            <Link to="/menu" className="mt-4 inline-block rounded-xl bg-yellow-400 px-6 py-3 font-bold text-black">
              Browse Menu
            </Link>
          </div>
        ) : (
          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex items-center gap-4 rounded-2xl border border-yellow-500/20 bg-[#111111] p-4">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-xl object-cover" />
                <div className="flex-1">
                  <h3 className="font-bold text-yellow-400">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.price}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <button onClick={() => updateQuantity(item.id, -1)} className="h-7 w-7 rounded-full bg-yellow-500 font-bold text-black">−</button>
                    <span className="font-bold text-white">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)} className="h-7 w-7 rounded-full bg-yellow-500 font-bold text-black">+</button>
                  </div>
                </div>
              </div>
            ))}

            <div className="rounded-xl border border-yellow-500/20 bg-black p-4">
              <p className="text-sm text-gray-400">Selected Table</p>
              <div className="mt-2 flex items-center justify-between">
                <div>
                  <p className="font-bold text-yellow-400">{tableNo ? `Table ${tableNo}` : "Not selected"}</p>
                </div>
                <button onClick={() => navigate('/menu')} className="rounded-lg border border-yellow-500 px-4 py-2 text-sm font-bold text-yellow-400">Choose Table</button>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between rounded-xl border border-yellow-500/20 bg-[#111111] p-4">
              <div>
                <p className="text-sm text-gray-400">Subtotal</p>
                <p className="text-xl font-bold text-white">${subtotal.toFixed(2)}</p>
              </div>
              <div className="flex gap-3">
                <Link to="/menu" className="rounded-xl border border-yellow-500 px-5 py-3 font-bold text-yellow-400">Continue</Link>
                <button onClick={() => navigate('/checkout')} className="rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-5 py-3 font-bold text-black">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
