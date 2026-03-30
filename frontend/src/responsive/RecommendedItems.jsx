import React from 'react';
import { Link } from 'react-router-dom';

export default function RecommendedItems({ items = [] }) {

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-6">
      <h3 className="text-[22px] font-bold text-gray-900 mb-4 tracking-tight">Recommended items</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {items.map((item, idx) => (
          <Link to={`/product/${item._id}`} key={item._id || idx} className="bg-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition cursor-pointer">
             <div className="w-full h-[150px] mb-3 flex items-center justify-center p-2">
                 <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
             </div>
             <div className="flex flex-col">
               <span className="font-semibold text-gray-900 leading-none mb-1">${Number(item.price).toFixed(2)}</span>
               <span className="text-[13px] text-[#8B96A5] leading-snug line-clamp-2">{item.description}</span>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
