import React from 'react';
import { Search, Monitor, Shield, Plane } from 'lucide-react';
import { Link } from 'react-router-dom';
import customiseProductImg from '../assets/Customise your product.png';

export default function ExtraServices() {
  const services = [
    { title: 'Source from Industry Hubs', icon: <Search size={22} className="text-gray-700" />, img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=400', path: '/shop?category=deals' },
    { title: 'Customize Your Products', icon: <Monitor size={22} className="text-gray-700" />, img: customiseProductImg, path: '/messages?compose=custom-order' },
    { title: 'Fast, reliable shipping by ocean or air', icon: <Plane size={22} className="text-gray-700" />, img: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400', path: '/content/shipping' },
    { title: 'Product monitoring and inspection', icon: <Shield size={22} className="text-gray-700" />, img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400', path: '/help' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-8">
      <h3 className="text-[22px] font-bold text-gray-900 mb-4 tracking-tight">Our extra services</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {services.map((svc, idx) => (
         <Link to={svc.path} key={idx} className="bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition">
             <div className="h-[120px] bg-gray-200 relative overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${svc.img})`}}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors"></div>
             </div>
             <div className="p-4 relative bg-white flex-1 flex">
                <div className="absolute right-4 -top-6 w-[50px] h-[50px] rounded-full border-2 border-white bg-[#D1E7FF] flex items-center justify-center shadow-sm">
                  {svc.icon}
                </div>
                <h4 className="font-medium text-gray-900 pr-12 w-full text-[15px] leading-snug">{svc.title}</h4>
             </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
