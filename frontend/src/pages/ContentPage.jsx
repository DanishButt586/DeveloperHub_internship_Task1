import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { contentPageMeta } from "../data/siteConfig";
import { fetchProducts } from "../services/apiService";

export default function ContentPage() {
  const { slug } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts({ sort: "newest" });
        setProducts(data.slice(0, 6));
      } catch {
        setProducts([]);
      }
    };

    loadProducts();
  }, [slug]);

  const meta = contentPageMeta[slug] || {
    title: "Information",
    subtitle: "This page includes live product highlights and relevant platform details.",
  };

  const highlights = useMemo(() => products.slice(0, 3), [products]);

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1100px] mx-auto px-4 lg:px-8 py-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{meta.title}</h1>
        <p className="text-sm text-gray-600 mb-6">{meta.subtitle}</p>

        <section className="bg-white border border-gray-200 rounded-lg p-4 md:p-6 mb-5">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Platform Snapshot</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            Our marketplace experience is now fully integrated with live backend APIs. Product listing, detail pages,
            filtering, cart checkout, and order creation are all dynamic and backed by your database.
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-lg p-4 md:p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {highlights.map((item) => (
              <Link key={item._id} to={`/product/${item._id}`} className="border border-gray-200 rounded-md p-3 hover:shadow-sm transition">
                <div className="h-[120px] flex items-center justify-center mb-2">
                  <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                </div>
                <p className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</p>
                <p className="text-[#0D6EFD] text-sm mt-2">${Number(item.price).toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
}
