import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryGridSection({ title, bannerImage, items, categoryKeyword }) {
  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-5">
      <div className="bg-white border border-gray-200 rounded-lg flex flex-col xl:flex-row overflow-hidden">
        
        {/* Left Banner */}
        <div 
          className="xl:w-[280px] shrink-0 p-6 flex flex-col relative overflow-hidden h-[200px] xl:h-[260px] bg-cover bg-center"
          style={{ backgroundImage: `url(${bannerImage})` }}
        >
          <div className="absolute inset-0 bg-yellow-50/70 xl:bg-transparent"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-gray-900 w-1/2 xl:w-full leading-tight mb-4">{title}</h3>
            <Link
              to={categoryKeyword ? `/shop?category=${encodeURIComponent(categoryKeyword)}` : '/shop'}
              className="inline-block bg-white text-gray-900 px-4 py-2 font-medium rounded text-sm shadow-sm hover:bg-gray-50 border border-gray-100 transition whitespace-nowrap self-start"
            >
              Source now
            </Link>
          </div>
        </div>

        {/* 4x2 Grid Right */}
        <div className="grid grid-cols-2 md:grid-cols-4 w-full h-[260px]">
          {items.map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id || idx}
              className="p-4 border-t xl:border-t-0 xl:border-l border-b border-r xl:border-b last:border-r-0 xl:[&:nth-child(4n)]:border-r-0 border-gray-200 flex justify-between relative hover:bg-gray-50 transition min-h-[130px]"
            >
               <div className="flex flex-col z-10 z-10 pointer-events-none">
                 <span className="text-[15px] font-medium text-gray-900 mb-1 leading-snug">{item.name}</span>
                 <span className="text-[13px] text-[#8B96A5]">From <br /> USD {Number(item.price).toFixed(2)}</span>
               </div>
               <div className="absolute bottom-2 right-2 w-[70px] h-[70px] flex items-center justify-center pointer-events-none">
                  <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
               </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
