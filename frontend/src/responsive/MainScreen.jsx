import React, { useEffect, useMemo, useState } from 'react';
import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
import DealsOffers from './DealsOffers';
import CategoryGridSection from './CategoryGridSection';
import InquirySection from './InquirySection';
import RecommendedItems from './RecommendedItems';
import ExtraServices from './ExtraServices';
import SuppliersRegion from './SuppliersRegion';
import FooterSection from './FooterSection';
import { fetchProducts } from '../services/apiService';

export default function MainScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      setError('');

      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Unable to load products from backend.');
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const dealsItems = useMemo(
    () => products.filter((item) => item.category === 'deals').slice(0, 5),
    [products]
  );

  const homeOutdoorItems = useMemo(
    () => products.filter((item) => item.category === 'home').slice(0, 8),
    [products]
  );

  const consumerElecItems = useMemo(
    () => products.filter((item) => item.category === 'electronics').slice(0, 8),
    [products]
  );

  const recommendedItems = useMemo(
    () => products.filter((item) => item.category === 'recommended').slice(0, 10),
    [products]
  );

  return (
    <div className="bg-[#F7FAFC] min-h-screen font-sans text-gray-800 w-full overflow-x-hidden pb-0">
       <HeaderSection />
       <main className="w-full">
         <HeroSection />
         {loading && <p className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-4 text-gray-600">Loading products...</p>}
         {error && <p className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-4 text-red-600">{error}</p>}
         {!loading && !error && dealsItems.length > 0 && <DealsOffers items={dealsItems} />}
         <CategoryGridSection 
            title="Home and outdoor" 
            bannerImage="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400"
            items={homeOutdoorItems}
            categoryKeyword="home"
         />
         <CategoryGridSection 
            title="Consumer electronics and gadgets" 
            bannerImage="https://images.unsplash.com/photo-1550009158-9ebf6d97310f?auto=format&fit=crop&q=80&w=400"
            items={consumerElecItems} 
            categoryKeyword="electronics"
         />
         <InquirySection />
         <RecommendedItems items={recommendedItems} />
         <ExtraServices />
         <SuppliersRegion />
       </main>
       <FooterSection />
    </div>
  );
}
