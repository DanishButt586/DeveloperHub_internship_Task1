import React, { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { fetchProducts } from "../services/apiService";

export default function MessagesPage() {
  const [searchParams] = useSearchParams();
  const [messages, setMessages] = useState([]);
  const [subject, setSubject] = useState(searchParams.get("subject") || "");
  const [details, setDetails] = useState(searchParams.get("details") || "");
  const [quantity, setQuantity] = useState(searchParams.get("quantity") || "");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProductsAsMessages = async () => {
      setLoading(true);
      try {
        const products = await fetchProducts({ category: "deals", sort: "newest" });
        const seeded = products.slice(0, 4).map((item, index) => ({
          id: `${item._id}-seed`,
          from: "Supplier Team",
          title: `Offer available: ${item.name}`,
          body: `Current price is $${Number(item.price).toFixed(2)}. Reply to receive a quote and timeline.`,
          createdAt: new Date(Date.now() - index * 3600000).toISOString(),
        }));
        setMessages(seeded);
      } catch {
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    loadProductsAsMessages();
  }, []);

  const sortedMessages = useMemo(
    () => [...messages].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    [messages]
  );

  const handleSend = (event) => {
    event.preventDefault();
    if (!subject.trim() && !details.trim()) return;

    const nextMessage = {
      id: crypto.randomUUID(),
      from: "You",
      title: subject || "Untitled message",
      body: `${details}${quantity ? ` | Quantity: ${quantity}` : ""}`,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [nextMessage, ...prev]);
    setSubject("");
    setDetails("");
    setQuantity("");
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1200px] mx-auto px-4 lg:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-5">
        <section className="lg:col-span-2 bg-white border border-gray-200 rounded-lg p-4 md:p-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Messages</h1>

          {loading && <p className="text-gray-600">Loading inbox...</p>}

          {!loading && sortedMessages.length === 0 && (
            <p className="text-gray-600">No messages yet.</p>
          )}

          <div className="space-y-3">
            {sortedMessages.map((message) => (
              <article key={message.id} className="border border-gray-200 rounded-md p-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-gray-900">{message.title}</p>
                  <span className="text-xs text-gray-500">{new Date(message.createdAt).toLocaleString()}</span>
                </div>
                <p className="text-xs text-blue-600 mt-1">From: {message.from}</p>
                <p className="text-sm text-gray-700 mt-2">{message.body}</p>
              </article>
            ))}
          </div>
        </section>

        <aside className="bg-white border border-gray-200 rounded-lg p-4 md:p-5 h-fit">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Compose</h2>
          <form onSubmit={handleSend} className="space-y-3">
            <input
              value={subject}
              onChange={(event) => setSubject(event.target.value)}
              placeholder="Subject"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <textarea
              value={details}
              onChange={(event) => setDetails(event.target.value)}
              placeholder="Write your message"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm h-[130px] resize-none"
            ></textarea>
            <input
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
              placeholder="Quantity (optional)"
              className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
            />
            <button type="submit" className="w-full bg-[#0D6EFD] text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700">
              Send Message
            </button>
          </form>
        </aside>
      </main>

      <FooterSection />
    </div>
  );
}
