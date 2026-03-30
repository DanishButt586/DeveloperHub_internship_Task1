import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import HeaderSection from "../responsive/HeaderSection";
import FooterSection from "../responsive/FooterSection";
import { fetchProducts } from "../services/apiService";
import { useShopContext } from "../ShopContext";
import SortBar from "../components/SortBar";
import FilterSidebar from "../components/FilterSidebar";
import ActiveFilters from "../components/ActiveFilters";
import GridViewComponent from "../components/GridViewComponent";
import ListViewComponent from "../components/ListViewComponent";
import { productCategories } from "../data/siteConfig";

export default function Shop() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [minPriceInput, setMinPriceInput] = useState("");
  const [maxPriceInput, setMaxPriceInput] = useState("");

  const keyword = (searchParams.get("keyword") || "").trim();
  const category = (searchParams.get("category") || "all").trim();
  const sortBy = (searchParams.get("sort") || "newest").trim();
  const view = (searchParams.get("view") || "grid").trim();
  const tag = (searchParams.get("tag") || "").trim();
  const verifiedOnly = searchParams.get("verified") === "1";
  const minPrice = searchParams.get("minPrice") || "";
  const maxPrice = searchParams.get("maxPrice") || "";
  const { addToCart, setSearchQuery } = useShopContext();

  const updateSearchParams = (updates) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === undefined || value === null || value === "" || value === "all" || value === false) {
        params.delete(key);
      } else {
        params.set(key, String(value));
      }
    });

    navigate(params.toString() ? `/shop?${params.toString()}` : "/shop");
  };

  useEffect(() => {
    setSearchQuery(keyword);
  }, [keyword, setSearchQuery]);

  useEffect(() => {
    setMinPriceInput(minPrice);
    setMaxPriceInput(maxPrice);
  }, [minPrice, maxPrice]);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError("");

      try {
        const data = await fetchProducts({
          keyword,
          category: category !== "all" ? category : "",
          sort: sortBy,
        });
        setProducts(data);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load products right now.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, [keyword, category, sortBy]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      if (verifiedOnly && product.countInStock <= 0) {
        return false;
      }

      if (minPrice && Number(product.price) < Number(minPrice)) {
        return false;
      }

      if (maxPrice && Number(product.price) > Number(maxPrice)) {
        return false;
      }

      return true;
    });
  }, [products, verifiedOnly, minPrice, maxPrice]);

  const preparedItems = useMemo(
    () =>
      filteredProducts.map((item) => ({
        ...item,
        id: item._id,
        reviews: ((item.name.length * 13) % 90) + 10,
        originalPrice: Number((Number(item.price) * 1.18).toFixed(2)),
        details: item.description,
        shipping: "Free Shipping",
      })),
    [filteredProducts]
  );

  const activeFilters = useMemo(() => {
    const filters = [];

    if (keyword) filters.push({ key: "keyword", label: `Search: ${keyword}` });
    if (category && category !== "all") filters.push({ key: "category", label: `Category: ${category}` });
    if (verifiedOnly) filters.push({ key: "verified", label: "Verified only" });
    if (minPrice) filters.push({ key: "minPrice", label: `Min: ${minPrice}` });
    if (maxPrice) filters.push({ key: "maxPrice", label: `Max: ${maxPrice}` });
    if (sortBy && sortBy !== "newest") filters.push({ key: "sort", label: `Sort: ${sortBy}` });

    return filters;
  }, [keyword, category, verifiedOnly, minPrice, maxPrice, sortBy]);

  const titleText = useMemo(() => {
    if (tag) {
      return tag.replace(/-/g, " ");
    }

    return category === "all" ? "All products" : category;
  }, [tag, category]);

  const handleOpenProduct = (item) => {
    const itemId = item._id || item.id;
    navigate(`/product/${itemId}`);
  };

  const handleRemoveFilter = (key) => {
    updateSearchParams({ [key]: "" });
  };

  const handleClearAllFilters = () => {
    navigate("/shop");
  };

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <HeaderSection />

      <main className="max-w-[1440px] mx-auto px-4 lg:px-8 py-6">
        <div className="mb-5">
          <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
        </div>

        {loading && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">Loading products...</div>
        )}

        {error && !loading && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-red-700">{error}</div>
        )}

        {!loading && !error && products.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-6 text-gray-600">No products found.</div>
        )}

        {!loading && !error && products.length > 0 && (
          <div className="flex flex-col md:flex-row gap-5">
            <FilterSidebar
              categories={productCategories.filter((item) => item.value !== "all").map((item) => item.value)}
              selectedCategory={category}
              onCategoryChange={(nextCategory) => updateSearchParams({ category: nextCategory })}
              minPrice={minPriceInput}
              maxPrice={maxPriceInput}
              onMinPriceChange={setMinPriceInput}
              onMaxPriceChange={setMaxPriceInput}
              onApplyPrice={() => updateSearchParams({ minPrice: minPriceInput, maxPrice: maxPriceInput })}
            />

            <div className="flex-1 flex flex-col gap-4">
              <SortBar
                itemCount={filteredProducts.length}
                title={titleText}
                view={view}
                setView={(nextView) => updateSearchParams({ view: nextView })}
                sortBy={sortBy}
                onSortChange={(nextSort) => updateSearchParams({ sort: nextSort })}
                verifiedOnly={verifiedOnly}
                onVerifiedOnlyChange={(checked) => updateSearchParams({ verified: checked ? 1 : "" })}
              />

              <ActiveFilters
                filters={activeFilters}
                onRemoveFilter={handleRemoveFilter}
                onClearAll={handleClearAllFilters}
              />

              {view === "list" ? (
                <ListViewComponent
                  items={preparedItems}
                  onAddToCart={addToCart}
                  onOpenProduct={handleOpenProduct}
                />
              ) : (
                <GridViewComponent
                  items={preparedItems}
                  onAddToCart={addToCart}
                  onOpenProduct={handleOpenProduct}
                />
              )}
            </div>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
}
