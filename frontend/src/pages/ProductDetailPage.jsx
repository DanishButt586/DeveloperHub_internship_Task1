import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../components/Breadcrumbs";
import ProductDetail from "../components/ProductDetail";
import { fetchProductById, fetchProducts } from "../services/apiService";
import { useShopContext } from "../ShopContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { addToCart } = useShopContext();

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      setError("");

      try {
        const productData = await fetchProductById(id);
        setProduct(productData);

        const relatedData = await fetchProducts({ category: productData.category, sort: 'newest' });
        const filteredRelated = relatedData
          .filter((item) => item._id !== productData._id)
          .slice(0, 6);

        setRelatedProducts(filteredRelated);
      } catch (err) {
        setError(err.response?.data?.message || "Unable to load this product.");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  return (
    <div className="bg-[#F7FAFC] min-h-screen">
      <Header />
      <Navbar />

      <main className="max-w-[1180px] mx-auto px-4">
        <Breadcrumbs category={product?.category || "products"} name={product?.name || "Product details"} />
      </main>

      <ProductDetail
        key={product?._id || id}
        product={product}
        relatedProducts={relatedProducts}
        loading={loading}
        error={error}
        onAddToCart={addToCart}
      />

      <Footer />
    </div>
  );
}
