import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { fetchProducts } from "../services/apiService";
import { heroCategoryLinks } from "../data/siteConfig";

export default function CategoriesPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch {
        setProducts([]);
      }
    };

    loadProducts();
  }, []);

  const categoryCounts = useMemo(() => {
    return products.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});
  }, [products]);

  const cards = heroCategoryLinks.filter((item) => !item.path).map((item) => ({
    ...item,
    path: `/shop?category=${encodeURIComponent(item.category)}`,
    count: categoryCounts[item.category] || 0,
  }));

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-5">All Categories</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card) => (
            <Link key={card.label} to={card.path} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
              <h2 className="text-lg font-semibold text-gray-900">{card.label}</h2>
              <p className="text-sm text-gray-600 mt-2">Mapped category: {card.category}</p>
              <p className="text-sm text-[#0D6EFD] mt-3">{card.count} products available</p>
            </Link>
          ))}
        </div>
      </main>

      <FooterSection />
    </div>
  );
}
