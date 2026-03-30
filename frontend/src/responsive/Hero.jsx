import React from 'react';

export default function Hero() {
  return (
    <div className="w-full lg:px-12 lg:mb-8 bg-white lg:bg-transparent">
      <div className="bg-gradient-to-br from-[#E3F2E1] to-[#FFE2BF] h-[180px] md:h-[280px] lg:h-[350px] p-5 md:p-8 lg:p-14 relative overflow-hidden flex flex-col justify-center lg:rounded-xl shadow-inner group cursor-pointer transition-all hover:shadow-md">
         <div className="relative z-10 w-[60%] md:w-[50%] flex flex-col gap-3 md:gap-5">
            <h2 className="text-[20px] md:text-[32px] lg:text-[42px] font-normal text-dark leading-tight">
              Latest trending<br/>
              <span className="font-bold">Electronic items</span>
            </h2>
            <button className="bg-white text-primary text-[14px] md:text-[16px] font-semibold px-4 py-2 rounded-[6px] w-max shadow-sm hover:shadow-md hover:bg-gray-50 transition-all active:scale-95 border border-transparent hover:border-gray-200">
              Learn more
            </button>
         </div>
         {/* Headphone Graphic placeholder mapping to the image */}
         <img 
            src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80" 
            alt="Electronics Hero" 
            className="absolute right-[-40px] md:right-[-20px] lg:right-12 top-0 bottom-0 h-full object-cover mix-blend-multiply opacity-80 md:w-1/2 lg:object-contain group-hover:scale-105 transition-transform duration-700 ease-out" 
         />
      </div>
    </div>
  );
}
