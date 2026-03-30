import React from 'react';
import { Menu, ShoppingCart, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-white px-4 md:px-8 lg:px-12 py-3 flex items-center justify-between border-b border-borderGray sticky top-0 z-50 w-full shadow-sm">
      <div className="flex items-center gap-4">
        <button className="text-dark cursor-pointer hover:bg-gray-100 p-1.5 rounded-md transition-colors lg:hidden">
          <Menu size={24} />
        </button>
        <div className="flex items-center gap-2 cursor-pointer group">
          <div className="bg-primary text-white p-1 rounded transition-transform group-hover:scale-105">
             <span className="font-bold text-[18px] leading-none block px-1">B</span>
          </div>
          <span className="text-primary font-bold text-[22px] tracking-tight">Brand</span>
        </div>
      </div>
      
      {/* Desktop Quick Nav Injection */}
      <nav className="hidden lg:flex items-center gap-8 text-[#505050] font-medium text-[15px]">
         <a href="#" className="hover:text-primary transition-colors">Home</a>
         <a href="#" className="hover:text-primary transition-colors">Categories</a>
         <a href="#" className="hover:text-primary transition-colors">Projects</a>
         <a href="#" className="hover:text-primary transition-colors">Help</a>
      </nav>

      <div className="flex items-center gap-4 md:gap-5">
        <button className="text-dark cursor-pointer hover:bg-bgGray p-2 rounded-full transition-colors relative">
           <ShoppingCart size={24} />
           <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border border-white">2</span>
        </button>
        <button className="text-dark cursor-pointer hover:bg-bgGray p-2 rounded-full transition-colors">
          <User size={24} />
        </button>
      </div>
    </header>
  );
}
