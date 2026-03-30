import React from 'react';

export default function CategoryScroller() {
  const categories = ['All category', 'Gadgets', 'Clothes', 'Accessories', 'Automotive', 'Jewelry', 'Sports'];
  
  return (
    <div className="bg-white px-4 md:px-8 lg:px-0 pb-3 lg:pb-6 border-b border-borderGray lg:border-none flex justify-center w-full">
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 w-full lg:max-w-4xl lg:justify-center">
        {categories.map((cat, idx) => (
           <button 
             key={idx} 
             className="px-3 md:px-4 py-1.5 md:py-2 bg-[#EFF2F4] hover:bg-blue-100 text-primary rounded-[6px] whitespace-nowrap text-[14px] md:text-[15px] font-medium cursor-pointer transition-colors active:scale-95"
           >
             {cat}
           </button>
        ))}
      </div>
    </div>
  );
}
