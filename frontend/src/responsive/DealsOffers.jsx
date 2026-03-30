import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

export default function DealsOffers({ items = [] }) {
  const targetTimestamp = useMemo(() => {
    const now = new Date();
    now.setDate(now.getDate() + 5);
    return now.getTime();
  }, []);

  const [timeLeft, setTimeLeft] = useState({ days: '00', hours: '00', minutes: '00', seconds: '00' });

  useEffect(() => {
    const updateTimer = () => {
      const now = Date.now();
      const diff = Math.max(targetTimestamp - now, 0);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, [targetTimestamp]);

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-5">
      <div className="bg-white border text-[#505050] border-gray-200 rounded-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Timer Section */}
        <div className="p-5 md:w-[280px] shrink-0 border-b md:border-b-0 md:border-r border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-1 leading-tight">Deals and offers</h3>
          <p className="text-[#8B96A5] text-[15px] mb-4">Hygiene equipments</p>
          <div className="flex gap-1.5">
            <div className="bg-[#606060] text-white rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
              <span className="font-bold text-lg leading-none">{timeLeft.days}</span>
              <span className="text-[11px] mt-0.5">Days</span>
            </div>
            <div className="bg-[#606060] text-white rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
              <span className="font-bold text-lg leading-none">{timeLeft.hours}</span>
              <span className="text-[11px] mt-0.5">Hour</span>
            </div>
            <div className="bg-[#606060] text-white rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
              <span className="font-bold text-lg leading-none">{timeLeft.minutes}</span>
              <span className="text-[11px] mt-0.5">Min</span>
            </div>
            <div className="bg-[#606060] text-white rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
              <span className="font-bold text-lg leading-none">{timeLeft.seconds}</span>
              <span className="text-[11px] mt-0.5">Sec</span>
            </div>
          </div>
          <Link to="/shop?category=deals" className="inline-block mt-4 text-sm text-[#0D6EFD] hover:underline">View all deals</Link>
        </div>

        {/* Products */}
        <div className="flex w-full overflow-x-auto no-scrollbar">
          {items.map((item, idx) => (
            <Link
              to={`/product/${item._id}`}
              key={item._id || idx}
              className="flex flex-col items-center justify-center min-w-[140px] flex-1 p-5 border-r border-gray-200 last:border-r-0 hover:bg-gray-50 transition"
            >
               <div className="w-[100px] h-[100px] flex items-center justify-center mb-3">
                 <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
               </div>
               <span className="text-[15px] text-gray-800 mb-2">{item.name}</span>
               <span className="bg-[#FFE3E3] text-[#EB001B] font-medium text-sm px-3 py-1 rounded-full">{item.discount || 'Deal'}</span>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
