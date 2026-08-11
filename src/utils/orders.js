const ORDERS_KEY = "spicegarden_orders";
const NEXT_KEY = "spicegarden_nextOrderNumber";

export function getOrders() {
  try {
    const raw = localStorage.getItem(ORDERS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

export function saveOrders(list) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(list));
}

export function saveOrder(order) {
  const list = getOrders();
  list.unshift(order);
  saveOrders(list);
}

export function generateOrderId() {
  try {
    let next = parseInt(localStorage.getItem(NEXT_KEY) || "1000", 10);
    next = next + 1;
    localStorage.setItem(NEXT_KEY, String(next));
    return `SG-${next}`;
  } catch (e) {
    return `SG-${Date.now().toString().slice(-6)}`;
  }
}

export function updateOrderStatus(orderId, status) {
  const list = getOrders();
  const idx = list.findIndex((o) => o.id === orderId);
  if (idx === -1) return null;
  list[idx].status = status;
  list[idx].updatedAt = new Date().toISOString();
  saveOrders(list);
  return list[idx];
}

export function findOrderByIdAndPhone(id, phone) {
  const list = getOrders();
  return list.find((o) => o.id === id && (!phone || (o.customer && o.customer.mobile === phone)));
}

export function clearAllOrders() {
  localStorage.removeItem(ORDERS_KEY);
}

export default { getOrders, saveOrder, generateOrderId, updateOrderStatus, findOrderByIdAndPhone };
