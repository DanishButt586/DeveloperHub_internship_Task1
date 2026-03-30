import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function HomeOutdoorSection() {
  const items = [
    { id: 1, name: "Smart watches", price: "From USD 19", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500" },
    { id: 2, name: "Smart watches", price: "From USD 19", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
    { id: 3, name: "Smart watches", price: "From USD 19", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
    { id: 4, name: "Smart watches", price: "From USD 19", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" }
  ];

  return (
    <section className="bg-white mt-3 lg:mt-6 lg:rounded-xl lg:mx-12 lg:border lg:border-borderGray overflow-hidden border-y border-borderGray lg:border-y lg:shadow-sm mb-4 lg:mb-8">
      <div className="px-4 md:px-8 lg:px-6 py-4 border-b border-borderGray flex justify-between items-center">
        <h3 className="font-semibold text-[18px] md:text-[22px] text-dark leading-tight">Home and outdoor</h3>
        <button className="hidden md:flex items-center text-primary font-medium text-[15px] cursor-pointer hover:bg-blue-50 px-3 py-1.5 rounded transition">
          Source now <ArrowRight className="ml-2" size={18} />
        </button>
      </div>
      
      <div className="flex md:grid md:grid-cols-4 overflow-x-auto no-scrollbar">
        {items.map((item, i) => (
          <div key={item.id} className={`min-w-[140px] md:min-w-0 flex flex-col p-4 border-r border-[#EEEEEE] last:border-0 hover:bg-gray-50 transition cursor-pointer group ${i > 2 ? 'md:hidden lg:flex' : 'flex'} ${i > 3 ? 'hidden lg:flex' : 'flex'}`}>
             <div className="h-[120px] md:h-[160px] w-full flex items-center justify-center mb-4">
               <img src={item.img} alt={item.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"/>
             </div>
             <span className="text-[15px] md:text-[16px] text-dark font-medium leading-none">{item.name}</span>
             <span className="text-[13px] md:text-[15px] text-grayText mt-1.5">{item.price}</span>
          </div>
        ))}
      </div>
      <div className="px-4 py-3 border-t border-borderGray flex items-center text-primary font-medium text-[15px] md:hidden cursor-pointer hover:bg-gray-50 transition">
        Source now <ArrowRight className="ml-2" size={18} />
      </div>
    </section>
  );
}
