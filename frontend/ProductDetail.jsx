import React from 'react';
import { Share, Heart, ArrowLeft, Star, ShoppingCart, MessageSquare, ChevronRight } from 'lucide-react';
import { products } from './src/data/products';

const ProductDetail = ({ productId = 1, onBack }) => {
  const product = products.find(p => p.id === productId) || products[0];

  return (
    <div className="bg-[#F7FAFC] min-h-screen pb-12">
      <div className="bg-white shadow-sm p-4 flex items-center justify-between sticky top-0 z-50 transition-all">
        <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full">
          <ArrowLeft size={24} className="text-gray-700" />
        </button>
        <h1 className="text-lg font-semibold text-gray-800">Product Details</h1>
        <div className="flex gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500">
            <Share size={20} />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full text-danger">
            <Heart size={20} className="fill-current" />
          </button>
        </div>
      </div>
      <div className="bg-white p-4 max-w-2xl mx-auto mt-4 rounded-lg shadow-sm">
         <h2 className="text-2xl font-bold">{product.name}</h2>
         <p className="text-gray-500 mt-2">{product.details}</p>
         <div className="text-3xl font-bold text-gray-900 mt-4">${product.price}</div>
      </div>
    </div>
  );
};
export default ProductDetail;
