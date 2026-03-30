import React from 'react';
import { User } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { heroCategoryLinks } from '../data/siteConfig';

export default function HeroSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const activeCategory = new URLSearchParams(location.search).get('category');

  const handleCategoryClick = (item) => {
    if (item.path) {
      navigate(item.path);
      return;
    }

    navigate(`/shop?category=${encodeURIComponent(item.category)}`);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-5">
      <div className="bg-white border text-[#505050] border-gray-200 rounded-lg p-4 flex flex-col lg:flex-row gap-4 h-auto lg:h-[400px]">
        {/* Left Sidebar */}
        <div className="w-full lg:w-[250px] shrink-0 h-full flex flex-col justify-between">
          {heroCategoryLinks.map((cat, idx) => (
            <button
              type="button"
              key={cat.label}
              onClick={() => handleCategoryClick(cat)}
              className={`px-3 py-2 cursor-pointer rounded-md transition-colors text-[15px] ${
                activeCategory === cat.category || (activeCategory === null && idx === 0)
                  ? 'bg-[#E5F1FF] text-gray-900 font-medium'
                  : 'hover:bg-gray-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Center Banner */}
        <div className="flex-1 rounded-lg bg-cover bg-center relative overflow-hidden" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200')"}}>
          <div className="absolute inset-0 bg-blue-50/80 max-w-[60%]"></div>
          <div className="relative z-10 p-8 lg:p-12 flex flex-col items-start justify-center h-full">
            <h2 className="text-xl md:text-2xl text-gray-800 mb-2">Latest trending</h2>
            <h1 className="text-3xl md:text-4xl lg:text-[40px] font-bold text-gray-900 mb-6 leading-tight">Electronic items</h1>
            <button
              type="button"
              onClick={() => navigate('/shop?category=electronics')}
              className="bg-white text-gray-900 px-6 py-2 rounded-md font-medium text-sm border shadow-sm hover:bg-gray-50 transition"
            >
              Learn more
            </button>
          </div>
        </div>

        {/* Right Columns */}
        <div className="w-full lg:w-[220px] shrink-0 flex flex-col gap-3 h-full">
           {/* Profile Box */}
           <div className="bg-[#E3F0FF] rounded-md p-4 flex flex-col pt-3">
             <div className="flex gap-3 items-center mb-3">
               <div className="w-10 h-10 bg-[#C1DDFC] rounded-full flex items-center justify-center text-white shrink-0">
                  <User size={24} className="text-white fill-white" />
               </div>
               <div className="text-sm text-gray-800 leading-tight">
                 Hi, user <br /> let's get stated
               </div>
             </div>
             <button
               type="button"
               onClick={() => navigate('/profile?tab=register')}
               className="w-full bg-[#0D6EFD] text-white py-1.5 rounded-md text-sm font-medium hover:bg-blue-700 transition mb-2"
             >
               Join now
             </button>
             <button
               type="button"
               onClick={() => navigate('/profile?tab=login')}
               className="w-full bg-white text-[#0D6EFD] py-1.5 rounded-md text-sm font-medium border border-white hover:bg-blue-50 transition"
             >
               Log in
             </button>
           </div>
           
           {/* Orange Box */}
           <button
             type="button"
             onClick={() => navigate('/shop?category=deals&tag=supplier-offer')}
             className="bg-[#F38332] rounded-md p-4 flex-1 text-white flex flex-col justify-center text-left"
           >
             <p className="text-sm leading-snug">Get US $10 off<br/>with a new<br/>supplier</p>
           </button>
           
           {/* Teal Box */}
           <button
             type="button"
             onClick={() => navigate('/messages?compose=supplier-quote')}
             className="bg-[#55BDC3] rounded-md p-4 flex-1 text-white flex flex-col justify-center text-left"
           >
             <p className="text-sm leading-snug">Send quotes with<br/>supplier<br/>preferences</p>
           </button>
        </div>
      </div>
    </div>
  );
}
