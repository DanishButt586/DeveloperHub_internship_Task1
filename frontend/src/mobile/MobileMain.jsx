import React from 'react';
import { Menu, Search, ShoppingCart, User, ArrowRight } from 'lucide-react';

export default function MobileMain({ openSidebar, navigate }) {
  return (
    <div className="bg-bgGray min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white px-4 py-3 flex items-center justify-between border-b border-borderGray">
        <div className="flex items-center gap-3">
          <Menu className="text-dark cursor-pointer" size={24} onClick={openSidebar} />
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('main')}>
            <div className="bg-primary text-white p-1 rounded">
               <span className="font-bold text-[18px] leading-none block px-1">B</span>
            </div>
            <span className="text-primary font-bold text-[20px] tracking-tight">Brand</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ShoppingCart className="text-dark cursor-pointer" size={24} onClick={() => navigate('cart')} />
          <User className="text-dark cursor-pointer" size={24} />
        </div>
      </header>

      {/* Search */}
      <div className="bg-white px-4 pb-3">
        <div className="relative bg-bgGray border border-borderGray rounded-md flex items-center px-3 h-10">
          <Search className="text-grayText w-5 h-5 mr-2" />
          <input 
            type="text" 
            placeholder="Search" 
            className="bg-transparent flex-1 outline-none text-dark text-[15px]" 
          />
        </div>
        
        {/* Pills */}
        <div className="flex items-center gap-2 mt-3 overflow-x-auto no-scrollbar pb-1">
          <span className="px-3 py-1.5 bg-[#EFF2F4] text-primary rounded-[6px] whitespace-nowrap text-[14px]">All category</span>
          <span className="px-3 py-1.5 bg-[#EFF2F4] text-primary rounded-[6px] whitespace-nowrap text-[14px]">Gadgets</span>
          <span className="px-3 py-1.5 bg-[#EFF2F4] text-primary rounded-[6px] whitespace-nowrap text-[14px]">Clothes</span>
          <span className="px-3 py-1.5 bg-[#EFF2F4] text-primary rounded-[6px] whitespace-nowrap text-[14px]">Accessories</span>
        </div>
      </div>

      {/* Hero Banner */}
      <div className="bg-gradient-to-br from-[#E3F2E1] to-[#FFE2BF] h-[180px] p-5 relative overflow-hidden flex flex-col justify-center">
         <h2 className="text-[20px] font-normal text-dark leading-tight relative z-10 w-[60%]">
           Latest trending<br/><span className="font-bold">Electronic items</span>
         </h2>
         <button className="bg-white mt-3 text-primary text-[14px] font-medium px-4 py-1.5 rounded-[6px] w-max relative z-10 shadow-sm">
           Learn more
         </button>
         {/* Placeholder for headphone/laptop */}
         <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&q=80" alt="Electronics" className="absolute right-[-40px] top-0 bottom-0 h-full object-cover mix-blend-multiply opacity-80" />
      </div>

      {/* Deals and offers */}
      <div className="bg-white mt-3 border-y border-borderGray">
        <div className="px-4 py-3 flex items-center justify-between border-b border-borderGray">
          <div>
            <h3 className="font-semibold text-[16px] text-dark">Deals and offers</h3>
            <p className="text-[13px] text-grayText">Electronic equipments</p>
          </div>
          <div className="flex gap-1">
            <div className="bg-bgGrayDark rounded-[4px] px-1.5 py-1 text-center min-w-[36px]">
              <div className="font-bold text-dark leading-none text-[15px]">13</div>
              <div className="text-[11px] text-grayText mt-0.5">Hour</div>
            </div>
            <div className="bg-bgGrayDark rounded-[4px] px-1.5 py-1 text-center min-w-[36px]">
              <div className="font-bold text-dark leading-none text-[15px]">34</div>
              <div className="text-[11px] text-grayText mt-0.5">Min</div>
            </div>
            <div className="bg-bgGrayDark rounded-[4px] px-1.5 py-1 text-center min-w-[36px]">
              <div className="font-bold text-dark leading-none text-[15px]">56</div>
              <div className="text-[11px] text-grayText mt-0.5">Sec</div>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-auto no-scrollbar py-3 px-2">
          {/* Items */}
          {[1,2,3].map((i) => (
            <div key={i} className="min-w-[120px] flex flex-col items-center border-r border-borderGray last:border-0 px-2 cursor-pointer" onClick={() => navigate('detail')}>
              <div className="h-[90px] w-[90px] flex items-center justify-center p-2 mb-2">
                <img src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=150" alt="Watch" className="max-h-full object-contain mix-blend-multiply" />
              </div>
              <span className="text-[14px] text-dark mb-1">Smart watches</span>
              <span className="bg-paleRed text-danger text-[13px] font-medium px-2 py-0.5 rounded-[12px]">-25%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Home and outdoor */}
      <div className="bg-white mt-3 border-y border-borderGray">
        <div className="px-4 py-3 border-b border-borderGray">
          <h3 className="font-semibold text-[18px] text-dark">Home and outdoor</h3>
        </div>
        <div className="flex overflow-x-auto no-scrollbar">
          {[1,2,3].map((i) => (
            <div key={i} className="min-w-[140px] flex flex-col p-4 border-r border-borderGray last:border-0">
               <div className="h-[100px] w-full flex items-center justify-center mb-3">
                 <img src="https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=150" alt="Item" className="max-h-full object-contain mix-blend-multiply"/>
               </div>
               <span className="text-[15px] text-dark">Smart watches</span>
               <span className="text-[13px] text-grayText mt-1">From USD 19</span>
            </div>
          ))}
        </div>
        <div className="px-4 py-3 border-t border-borderGray flex items-center text-primary font-medium text-[15px] cursor-pointer" onClick={() => navigate('list')}>
          Source now <ArrowRight className="ml-2" size={18} />
        </div>
      </div>

      {/* Request blue banner */}
      <div className="bg-primary px-5 py-8 mt-3 relative overflow-hidden flex flex-col justify-center">
         {/* Background graphic simulation */}
         <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed38d1170?w=600')] bg-cover"></div>
         <h2 className="text-[22px] font-semibold text-white leading-tight relative w-[70%] z-10">An easy way to send requests to all suppliers</h2>
         <button className="bg-primary border border-white text-white font-medium text-[15px] px-4 py-2 mt-4 rounded-[6px] w-max relative z-10 hover:bg-blue-600">Send inquiry</button>
      </div>

      {/* Recommended items */}
      <div className="px-3 py-4 mt-2">
         <h3 className="font-semibold text-[18px] text-dark mb-3 px-1">Recommended items</h3>
         <div className="grid grid-cols-2 gap-2">
           {[1,2,3,4].map((i) => (
             <div key={i} className="bg-white border border-borderGray rounded-[6px] p-3 flex flex-col">
               <div className="h-[140px] w-full flex items-center justify-center p-2 mb-3">
                 <img src={i%2===0 ? "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200" : "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200"} className="max-h-full object-contain mix-blend-multiply" alt="Rec"/>
               </div>
               <div className="text-[16px] font-semibold text-dark mb-1">$10.30</div>
               <div className="text-[13px] text-grayText leading-tight">T-shirts with multiple colors, for men</div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}