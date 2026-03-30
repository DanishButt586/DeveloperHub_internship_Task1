import React, { useState } from 'react';
import { ArrowLeft, MoreVertical } from 'lucide-react';

export default function MobileCart({ navigate }) {
  const [items, setItems] = useState([
    { id: 1, name: 'T-shirts with multiple colors for men', specs: 'Size: medium, Color: blue\nSeller: Artel Market', price: 78.99, qty: 2, img: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200' },
    { id: 2, name: 'Solid Backpack blue jeans large size', specs: 'Size: medium, Color: blue\nSeller: Artel Market', price: 78.99, qty: 1, img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200' },
    { id: 3, name: 'Water boiler black for kitchen, 1200 Watt', specs: 'Size: medium, Color: blue\nSeller: Artel Market', price: 78.99, qty: 2, img: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=200' }
  ]);

  const updateQty = (id, delta) => {
    setItems(items.map(it => it.id === id ? { ...it, qty: Math.max(1, it.qty + delta) } : it));
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.qty, 0);

  return (
    <div className="bg-bgGray min-h-screen font-sans pb-10">
      {/* Header */}
      <header className="px-4 py-3 flex items-center gap-3 border-b border-borderGray bg-white">
        <ArrowLeft className="text-dark cursor-pointer" size={24} onClick={() => navigate('main')} />
        <h1 className="text-[20px] font-semibold text-dark">Shopping cart</h1>
      </header>

      {/* Cart Items */}
      <div className="bg-white pt-2 border-b border-borderGray">
        {items.map((item, idx) => (
          <div key={item.id} className={`p-4 flex gap-4 ${idx !== items.length - 1 ? 'border-b border-borderGray' : ''}`}>
            <div className="w-[80px] h-[80px] border border-borderGray rounded-[4px] p-1 flex-shrink-0 flex items-center justify-center">
              <img src={item.img} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-dark text-[15px] font-medium leading-tight w-[85%]">{item.name}</h3>
                <MoreVertical className="text-grayText -mr-2" size={20} />
              </div>
              <p className="text-grayText text-[13px] leading-snug whitespace-pre-line mb-3">
                {item.specs}
              </p>
              
              <div className="flex justify-between items-center">
                {/* Stepper */}
                <div className="flex items-center border border-borderGray rounded-[4px] overflow-hidden shadow-sm h-8">
                  <button onClick={() => updateQty(item.id, -1)} className="px-3 bg-white hover:bg-gray-50 flex items-center justify-center text-grayText border-r border-borderGray h-full">&minus;</button>
                  <span className="w-10 text-center font-medium text-dark text-[14px]">{item.qty}</span>
                  <button onClick={() => updateQty(item.id, 1)} className="px-3 bg-white hover:bg-gray-50 flex items-center justify-center text-grayText border-l border-borderGray h-full">+</button>
                </div>
                {/* Price */}
                <div className="font-semibold text-dark text-[15px]">${item.price.toFixed(2)}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Order Summary */}
      <div className="bg-white mt-3 border-y border-borderGray p-4">
         <div className="space-y-2 mb-3">
           <div className="flex justify-between text-[#505050] text-[15px]"><span>Items ({totalItems}):</span><span>$32.00</span></div>
           <div className="flex justify-between text-[#505050] text-[15px]"><span>Shipping:</span><span>$10.00</span></div>
           <div className="flex justify-between text-[#505050] text-[15px]"><span>Tax:</span><span>$7.00</span></div>
         </div>
         <div className="flex items-center justify-between font-bold text-dark text-[18px] pt-3 pb-4">
           <span>Total:</span><span>$220.00</span>
         </div>
         <button className="w-full bg-[#00B517] text-white font-medium text-[16px] py-3.5 rounded-[6px] shadow-[0_1px_2px_rgba(0,0,0,0.1)] hover:bg-green-600 transition">
           Checkout ({totalItems} items)
         </button>
      </div>

      {/* Saved for later */}
      <div className="bg-bgGray pt-4 px-3">
         <h3 className="font-semibold text-[18px] text-dark mb-3 px-1">Saved for later</h3>
         <div className="space-y-3 pb-6">
           {[1,2,3].map((i) => (
             <div key={i} className="bg-white border border-borderGray rounded-[6px] p-3 flex gap-3 items-center">
               <div className="w-[80px] h-[80px] p-1 flex-shrink-0 flex items-center justify-center">
                 <img src={i===2 ? "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=150" : "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150"} alt="Saved" className="max-w-full max-h-full object-contain mix-blend-multiply"/>
               </div>
               <div className="flex-1">
                 <h4 className="text-[#505050] text-[15px] mb-1">Regular Fit Resort Shirt</h4>
                 <div className="font-bold text-dark text-[16px] mb-2">$57.70</div>
                 <div className="flex gap-2">
                   <button className="flex-1 border border-borderGray text-primary rounded px-3 py-1.5 text-[14px] font-medium bg-white">Move to cart</button>
                   <button className="flex-1 border border-borderGray text-danger rounded px-3 py-1.5 text-[14px] font-medium bg-white">Remove</button>
                 </div>
               </div>
             </div>
           ))}
         </div>
      </div>
    </div>
  );
}