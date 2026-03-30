import React from 'react';
import { ArrowLeft, ShoppingCart, User, Search, Grid, List as ListIcon, Filter } from 'lucide-react';

export default function MobileItemList({ navigate }) {
  return (
    <div className="bg-bgGray min-h-screen font-sans">
      {/* Top Header */}
      <header className="bg-white px-4 py-3 border-b border-borderGray flex items-center justify-between">
        <div className="flex items-center gap-3">
          <ArrowLeft className="text-dark cursor-pointer" size={24} onClick={() => navigate('main')} />
          <h1 className="text-[18px] font-semibold text-dark">Mobile accessory</h1>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="text-dark cursor-pointer" size={24} onClick={() => navigate('cart')} />
          <User className="text-dark" size={24} />
        </div>
      </header>

      {/* Search Bar */}
      <div className="bg-white px-4 py-2 border-b border-borderGray">
        <div className="relative bg-bgGray border border-borderGray rounded-md flex items-center px-3 h-10">
          <Search className="text-grayText w-5 h-5 mr-2" />
          <input type="text" placeholder="Search" className="bg-transparent flex-1 outline-none text-[15px]" />
        </div>
        
        {/* Chips */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
          {['Tablets', 'Phones', 'Ipads', 'Ipod', 'Jack'].map((lbl, idx) => (
             <span key={idx} className="bg-bgGray border border-borderGray text-primary px-3 py-1.5 rounded-[6px] text-[14px] whitespace-nowrap">
               {lbl}
             </span>
          ))}
        </div>
      </div>

      {/* Tools Row */}
      <div className="bg-white px-4 py-3 flex items-center gap-2 border-b border-borderGray">
        <button className="flex-1 flex justify-center items-center gap-2 border border-borderGray rounded-[6px] py-1.5 text-dark text-[14px]">
          Sort: Newest <span className="rotate-90">⇋</span>
        </button>
        <button className="flex-1 flex justify-center items-center gap-2 border border-borderGray rounded-[6px] py-1.5 text-dark text-[14px]">
          Filter (3) <Filter size={16} />
        </button>
        <div className="flex border border-borderGray rounded-[6px] overflow-hidden ml-1">
          <button className="p-2 border-r border-borderGray bg-bgGray"><Grid size={16} className="text-dark"/></button>
          <button className="p-2 bg-white"><ListIcon size={16} className="text-dark"/></button>
        </div>
      </div>

      {/* Active Filters */}
      <div className="px-4 py-2 flex items-center gap-2 overflow-x-auto no-scrollbar">
         {['Huawei', 'Apple', '64GB'].map((filter, i) => (
           <div key={i} className="flex items-center gap-1 border border-primary text-dark bg-white rounded flex-shrink-0 px-2 py-1">
             <span className="text-[14px]">{filter}</span>
             <span className="text-grayText cursor-pointer text-lg leading-none shrink-0">&times;</span>
           </div>
         ))}
      </div>

      {/* Product List */}
      <div className="px-2 pb-4">
         {[1,2,3,4,5].map((i) => (
           <div key={i} className="bg-white border border-borderGray rounded-[6px] p-3 mb-2 flex gap-4 cursor-pointer hover:shadow-sm" onClick={() => navigate('detail')}>
             <div className="w-[100px] h-[100px] border border-borderGray rounded-[4px] p-2 flex-shrink-0 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=200" alt="Product" className="max-h-full max-w-full object-contain mix-blend-multiply" />
             </div>
             <div className="flex-1 flex flex-col justify-center">
               <h3 className="text-dark text-[15px] font-medium leading-tight mb-1">Regular Fit Resort Shirt</h3>
               <div className="text-dark font-bold text-[18px] mb-1">$57.70</div>
               <div className="flex items-center gap-2 text-[12px] text-grayText mb-1">
                 <div className="flex text-warning">
                   ★ <span className="tracking-tighter">★★★★</span>
                 </div>
                 <span className="text-warning">7.5</span>
                 <span className="w-[4px] h-[4px] bg-borderGray rounded-full"></span>
                 <span>154 orders</span>
               </div>
               <div className="text-success text-[13px] font-medium">Free Shipping</div>
             </div>
           </div>
         ))}
      </div>

      {/* You may also like */}
      <div className="px-3 pb-6 border-t border-borderGray mt-2 pt-4 bg-white">
         <h3 className="font-semibold text-[18px] text-dark mb-3 px-1">You may also like</h3>
         <div className="flex gap-2 overflow-x-auto no-scrollbar">
           {[1,2,3].map((i) => (
             <div key={i} className="bg-white border border-borderGray rounded-[6px] p-3 flex flex-col min-w-[140px]">
               <div className="h-[120px] w-full flex items-center justify-center p-2 mb-3">
                 <img src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200" className="max-h-full object-contain mix-blend-multiply" alt="Rec"/>
               </div>
               <div className="text-[16px] font-semibold text-dark mb-1">$10.30</div>
               <div className="text-[13px] text-grayText leading-tight">Solid Backpack blue jeans large size</div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}