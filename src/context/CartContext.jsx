import React, { createContext, useEffect, useState } from "react";
import { getOrders, saveOrder, generateOrderId } from "../utils/orders";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("spicegarden_cart");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });

  const [tableNo, setTableNo] = useState(() => {
    return localStorage.getItem("spicegarden_table") || "";
  });

  useEffect(() => {
    localStorage.setItem("spicegarden_cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (tableNo) localStorage.setItem("spicegarden_table", tableNo);
    else localStorage.removeItem("spicegarden_table");
  }, [tableNo]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === item.id);
      if (existing) {
        return prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, change) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
        )
        .filter((it) => it.quantity > 0)
    );
  };

  const clearCart = () => setCart([]);

  const placeOrder = ({ customer, orderType, paymentMethod, address }) => {
    if (!cart || cart.length === 0) throw new Error("Cart is empty");

    const orderId = generateOrderId();

    const subtotal = cart.reduce((s, it) => s + parseFloat(String(it.price).replace(/[^0-9.]/g, "")) * it.quantity, 0);
    const order = {
      id: orderId,
      customer,
      items: cart,
      tableNo: tableNo || null,
      orderType,
      paymentMethod,
      address: address || null,
      subtotal,
      discount: 0,
      total: subtotal,
      status: "Pending",
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    saveOrder(order);
    clearCart();
    setTableNo("");
    return order;
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateQuantity, clearCart, tableNo, setTableNo, placeOrder }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
