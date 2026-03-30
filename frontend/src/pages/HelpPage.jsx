import React, { useMemo, useState } from "react";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";

const faqItems = [
  { question: "How do I place an order?", answer: "Add items to cart, open cart page, fill shipping details, and click Checkout." },
  { question: "How do I filter products by category?", answer: "Use the search category dropdown or the sidebar category filters on the shop page." },
  { question: "How does shipping destination work?", answer: "Use Ship to selector in the header or Settings page to switch your default destination." },
  { question: "Can I track previous orders?", answer: "Open My Orders page to review recently created order records from your backend." },
  { question: "How do I contact suppliers quickly?", answer: "Use the inquiry section on home or the Messages page compose form." },
];

export default function HelpPage() {
  const [query, setQuery] = useState("");

  const filteredFaq = useMemo(() => {
    const search = query.trim().toLowerCase();
    if (!search) return faqItems;

    return faqItems.filter((item) =>
      item.question.toLowerCase().includes(search) || item.answer.toLowerCase().includes(search)
    );
  }, [query]);

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Help Center</h1>
        <p className="text-sm text-gray-600 mb-5">Find practical answers and workflows for all major app actions.</p>

        <div className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search help topics"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm mb-5"
          />

          {filteredFaq.length === 0 && <p className="text-gray-600">No matching help topics found.</p>}

          <div className="space-y-3">
            {filteredFaq.map((item) => (
              <article key={item.question} className="border border-gray-200 rounded-md p-3">
                <h2 className="font-semibold text-gray-900">{item.question}</h2>
                <p className="text-sm text-gray-700 mt-2">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
