import React, { useMemo, useState } from 'react';
import { Check, Star, MessageSquare, ShoppingBag, Shield, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductDetail({
  product,
  relatedProducts = [],
  loading = false,
  error = '',
  onAddToCart,
}) {
  const [mainImage, setMainImage] = useState('');
  const displayedImage = mainImage || product?.image || '';

  const thumbnails = useMemo(() => {
    const imagePool = [product?.image, ...relatedProducts.map((item) => item.image)].filter(Boolean);
    return [...new Set(imagePool)].slice(0, 6);
  }, [product?.image, relatedProducts]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 max-w-[1180px] py-4 font-inter">
        <div className="bg-white border border-[#DEE2E7] rounded-md p-6 text-[#505050]">Loading product details...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 max-w-[1180px] py-4 font-inter">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-md p-6">{error}</div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 max-w-[1180px] py-4 font-inter">
        <div className="bg-white border border-[#DEE2E7] rounded-md p-6 text-[#505050]">Product not found.</div>
      </div>
    );
  }

  const currentPrice = Number(product.price || 0);
  const midTierPrice = Number((currentPrice * 0.92).toFixed(2));
  const highTierPrice = Number((currentPrice * 0.85).toFixed(2));

  return (
    <div className="container mx-auto px-4 max-w-[1180px] py-4 font-inter">
      {/* Main Product Section */}
      <div className="bg-white border border-[#DEE2E7] rounded-md p-4 flex flex-col lg:flex-row gap-6 mb-5">
        
        {/* Gallery */}
        <div className="w-full lg:w-[380px] flex-shrink-0">
          <div className="border border-[#DEE2E7] rounded-md p-4 mb-4 h-[380px] flex items-center justify-center">
            <img src={displayedImage} alt={product.name} className="max-h-full object-contain" />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {thumbnails.map((img, idx) => (
              <button key={idx} onClick={() => setMainImage(img)} className={`border rounded-md p-1 w-14 h-14 flex-shrink-0 ${displayedImage === img ? 'border-[#0D6EFD]' : 'border-[#DEE2E7]'}`}>
                <img src={img} className="w-full h-full object-cover" alt={`thumb ${idx + 1}`} />
              </button>
            ))}
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <div className="text-[#00b517] flex items-center gap-1 text-sm mb-2">
            <Check size={16}/>
            {product.countInStock > 0 ? 'In stock' : 'Out of stock'}
          </div>
          <h1 className="text-xl font-semibold text-[#1C1C1C] mb-3">{product.name}</h1>
          
          <div className="flex items-center gap-4 text-sm text-[#8B96A5] mb-4">
            <div className="flex items-center text-[#FF9017]"><Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} fill="currentColor"/> <Star size={16} className="text-[#DEE2E7]"/><span className="ml-1 text-[#FF9017]">9.3</span></div>
            <div className="flex items-center gap-1"><MessageSquare size={16}/> 32 reviews</div>
            <div className="flex items-center gap-1"><ShoppingBag size={16}/> 154 sold</div>
          </div>

          <div className="flex bg-[#FFF0DF] gap-4 p-4 rounded-md mb-4 max-w-md border border-[#FFD09E]">
             <div className="border-r border-[#FFD09E] pr-4">
                <div className="text-lg font-bold text-[#FA3434]">${currentPrice.toFixed(2)}</div>
                <div className="text-xs text-[#8B96A5]">50-100 pcs</div>
             </div>
             <div className="border-r border-[#FFD09E] pr-4">
                <div className="text-lg font-bold text-[#1C1C1C]">${midTierPrice.toFixed(2)}</div>
                <div className="text-xs text-[#8B96A5]">100-700 pcs</div>
             </div>
             <div>
                <div className="text-lg font-bold text-[#1C1C1C]">${highTierPrice.toFixed(2)}</div>
                <div className="text-xs text-[#8B96A5]">700+ pcs</div>
             </div>
          </div>

          <div className="grid grid-cols-[120px_1fr] gap-y-3 gap-x-4 text-sm max-w-md border-b border-[#DEE2E7] pb-4 mb-4">
            <div className="text-[#8B96A5]">Price:</div><div className="text-[#505050]">${currentPrice.toFixed(2)}</div>
            <div className="text-[#8B96A5]">Type:</div><div className="text-[#505050] capitalize">{product.category}</div>
            <div className="text-[#8B96A5]">Material:</div><div className="text-[#505050]">Premium mixed material</div>
            <div className="text-[#8B96A5]">Design:</div><div className="text-[#505050]">Modern contemporary</div>
          </div>

          <div className="grid grid-cols-[120px_1fr] gap-y-3 gap-x-4 text-sm max-w-md">
            <div className="text-[#8B96A5]">Customization:</div><div className="text-[#505050]">Customized logo and packaging support</div>
            <div className="text-[#8B96A5]">Protection:</div><div className="text-[#505050]">Refund Policy</div>
            <div className="text-[#8B96A5]">Warranty:</div><div className="text-[#505050]">2 years full warranty</div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onAddToCart?.(product)}
              className="bg-[#0D6EFD] text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
              Add to cart
            </button>
            <Link
              to="/cart"
              className="bg-white text-[#0D6EFD] border border-[#DEE2E7] px-5 py-2 rounded-md font-medium hover:bg-blue-50 transition"
            >
              Go to cart
            </Link>
          </div>
        </div>

        {/* Supplier Sidebar */}
        <div className="w-full lg:w-[280px] border border-[#DEE2E7] rounded-md p-4 h-fit">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#C1F1EA] text-[#4CA7A7] text-2xl font-bold flex items-center justify-center rounded uppercase">R</div>
            <div>
              <div className="text-sm text-[#1C1C1C]">Supplier</div>
              <div className="font-semibold text-[#1C1C1C]">Guanjoi Trading LLC</div>
            </div>
          </div>
          <div className="space-y-3 text-[#8B96A5] text-sm mb-6 border-t border-[#DEE2E7] pt-4">
            <div className="flex items-center gap-2"><Globe size={18}/> Germany, Berlin</div>
            <div className="flex items-center gap-2"><Shield size={18}/> Verified Seller</div>
            <div className="flex items-center gap-2"><Globe size={18}/> Worldwide shipping</div>
          </div>
          <button
            type="button"
            onClick={() => onAddToCart?.(product)}
            className="w-full bg-[#0D6EFD] text-white py-2 rounded-md font-medium mb-2 hover:bg-blue-700 transition"
          >
            Send inquiry
          </button>
          <Link to="/shop" className="w-full inline-flex justify-center bg-white text-[#0D6EFD] border border-[#DEE2E7] py-2 rounded-md font-medium mb-4 hover:bg-gray-50 transition">Seller's profile</Link>
          <div className="flex justify-center"><Link to="/cart" className="flex items-center gap-2 text-[#0D6EFD] font-medium"><Heart size={18}/> Save for later</Link></div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="bg-white border border-[#DEE2E7] rounded-md p-4">
          <h3 className="text-[20px] font-semibold text-[#1C1C1C] mb-4">Related products</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {relatedProducts.map((item) => (
              <Link key={item._id} to={`/product/${item._id}`} className="border border-[#DEE2E7] rounded-md p-2 hover:shadow-sm transition">
                <div className="h-[100px] flex items-center justify-center mb-2 bg-white">
                  <img src={item.image} alt={item.name} className="max-h-full object-contain" />
                </div>
                <p className="text-[13px] text-[#1C1C1C] line-clamp-2 mb-1">{item.name}</p>
                <p className="text-[13px] font-semibold text-[#1C1C1C]">${Number(item.price).toFixed(2)}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}