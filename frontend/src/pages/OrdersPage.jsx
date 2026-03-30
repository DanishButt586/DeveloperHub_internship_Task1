import React, { useEffect, useState } from "react";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { fetchOrders } from "../services/apiService";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadOrders = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchOrders();
        setOrders(data);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load orders right now.");
      } finally {
        setLoading(false);
      }
    };

    loadOrders();
  }, []);

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">My Orders</h1>

        {loading && <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">Loading orders...</div>}
        {error && !loading && <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">{error}</div>}

        {!loading && !error && orders.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">No orders found.</div>
        )}

        {!loading && !error && orders.length > 0 && (
          <div className="space-y-3">
            {orders.map((order) => (
              <article key={order._id} className="bg-white border border-gray-200 rounded-lg p-4 md:p-5">
                <div className="flex flex-wrap justify-between gap-3 mb-2">
                  <p className="font-semibold text-gray-900">Order #{order._id}</p>
                  <p className="text-sm capitalize text-[#0D6EFD]">{order.status}</p>
                </div>
                <p className="text-sm text-gray-600">Items: {order.items?.length || 0}</p>
                <p className="text-sm text-gray-600">Total: ${Number(order.totalPrice || 0).toFixed(2)}</p>
                <p className="text-sm text-gray-500 mt-2">{new Date(order.createdAt).toLocaleString()}</p>
              </article>
            ))}
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
