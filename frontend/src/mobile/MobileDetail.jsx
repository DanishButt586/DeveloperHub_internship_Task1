import React from 'react';
import { ArrowLeft, ShoppingCart, User, Heart, ChevronRight, Check, Globe, Shield } from 'lucide-react';

export default function MobileDetail({ navigate }) {
  return (
    <div className="bg-white min-h-screen font-sans pb-20">
      {/* Header */}
      <header className="px-4 py-3 flex items-center justify-between border-b border-borderGray bg-white">
        <ArrowLeft className="text-dark cursor-pointer" size={24} onClick={() => navigate('list')} />
        <div className="flex items-center gap-4">
          <ShoppingCart className="text-dark cursor-pointer" size={24} onClick={() => navigate('cart')} />
          <User className="text-dark" size={24} />
        </div>
      </header>

      {/* Image Gallery */}
      <div className="relative w-full aspect-square bg-bgGray flex items-center justify-center border-b border-borderGray">
         <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500" alt="Product" className="max-h-full max-w-full object-contain mix-blend-multiply p-4" />
         {/* Navigation Dots Placeholder */}
         <div className="absolute right-4 bottom-4 bg-[#BDBDBD] bg-opacity-70 rounded-[16px] text-white flex px-2 py-1 gap-3">
            <span>←</span>
            <span>→</span>
         </div>
      </div>

      {/* Product Info Block */}
      <div className="px-4 py-4 border-b border-borderGray">
        <div className="flex items-center gap-3 text-[13px] text-grayText mb-2">
           <div className="flex text-warning text-sm tracking-tighter">★★★★★</div>
           <span className="w-1 h-1 bg-borderGray rounded-full"></span>
           <span>32 reviews</span>
           <span className="w-1 h-1 bg-borderGray rounded-full"></span>
           <span className="flex items-center gap-1"><ShoppingCart size={12}/> 154 sold</span>
        </div>
        
        <h2 className="text-[18px] text-dark font-medium leading-tight mb-2">
           Product name goes here
        </h2>
        
        <div className="flex items-baseline gap-2 mb-4">
           <span className="text-danger text-[20px] font-bold">$129.95</span>
           <span className="text-grayText text-[14px]">(50-100 pcs)</span>
        </div>

        <div className="flex gap-2 mb-4">
          <button className="flex-1 bg-primary text-white font-medium py-2.5 rounded-[6px] text-[15px]">Send inquiry</button>
          <button className="w-11 h-11 border border-borderGray rounded-[6px] flex items-center justify-center text-primary bg-white"><Heart size={20}/></button>
        </div>

        <div className="grid grid-cols-[100px_1fr] gap-y-2 text-[14px]">
           <div className="text-grayText">Condition</div><div className="text-[#505050]">Brand new</div>
           <div className="text-grayText">Material</div><div className="text-[#505050]">Plastic</div>
           <div className="text-grayText">Category</div><div className="text-[#505050]">Electronics, gadgets</div>
           <div className="text-grayText">Item num</div><div className="text-[#505050]">23421</div>
        </div>

        <p className="mt-4 text-[#505050] text-[15px] leading-relaxed">
          Info about edu item is an ideal companion for anyone engaged in learning. The drone provides precise and ... 
          <br/><span className="text-primary font-medium mt-1 inline-block">Read more</span>
        </p>
      </div>

      {/* Supplier Section */}
      <div className="bg-bgGray pb-4 pt-2">
        <div className="bg-white border-y border-borderGray p-4">
           <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                 <div className="w-10 h-10 bg-[#C1F1EA] text-[#4CA7A7] text-[20px] font-bold rounded flex items-center justify-center">R</div>
                 <div>
                    <div className="text-[13px] text-dark">Supplier</div>
                    <div className="text-[15px] text-[#505050] font-medium leading-tight">Guanjoi Trading LLC</div>
                 </div>
              </div>
              <ChevronRight className="text-grayText" size={20} />
           </div>

           <div className="flex items-center gap-4 text-grayText text-[14px]">
              <div className="flex items-center gap-1.5"><Globe size={16}/> Germany</div>
              <div className="flex items-center gap-1.5"><Shield size={16}/> Verified</div>
              <div className="flex items-center gap-1.5"><Globe size={16}/> Shipping</div>
           </div>
        </div>

        {/* Similar Products */}
        <div className="bg-white px-3 pb-6 mt-2 pt-4 border-y border-borderGray">
           <h3 className="font-semibold text-[18px] text-dark mb-3 px-1">Similar products</h3>
           <div className="flex gap-2 overflow-x-auto no-scrollbar">
             {[1,2].map((i) => (
               <div key={i} className="bg-white border border-borderGray rounded-[6px] p-3 flex flex-col min-w-[150px]">
                 <div className="h-[130px] w-full flex items-center justify-center p-2 mb-3">
                   <img src={i===1 ? "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200" : "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=200"} className="max-h-full object-contain mix-blend-multiply" alt="Rec"/>
                 </div>
                 <div className="text-[16px] font-semibold text-dark mb-1">$10.30</div>
                 <div className="text-[13px] text-grayText leading-tight">T-shirts with multiple colors, for men</div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}