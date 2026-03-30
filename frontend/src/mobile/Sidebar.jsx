import React from 'react';
import { User, Home, List, Heart, Box, Globe, Headphones, Info, X } from 'lucide-react';

export default function Sidebar({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex font-sans">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Drawer */}
      <div className="relative w-[80vw] max-w-[320px] bg-white h-full overflow-y-auto flex flex-col transform transition-transform shadow-2xl">
        <div className="bg-bgGray p-5 pb-5">
          <div className="w-[48px] h-[48px] bg-borderGray rounded-full flex items-center justify-center mb-3">
            <User className="text-white w-6 h-6" />
          </div>
          <div className="text-dark text-[16px]">
            <span className="cursor-pointer font-medium hover:text-primary">Sign in</span> | <span className="cursor-pointer font-medium hover:text-primary">Register</span>
          </div>
        </div>

        <button 
          onClick={onClose} 
          className="absolute top-4 right-[-40px] text-white p-2 bg-transparent"
        >
          <X size={28} />
        </button>

        <div className="py-2">
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Home className="text-grayText" size={22} /> Home
          </div>
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <List className="text-grayText" size={22} /> Categories
          </div>
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Heart className="text-grayText" size={22} /> Favorites
          </div>
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Box className="text-grayText" size={22} /> My orders
          </div>
        </div>

        <hr className="mx-5 border-borderGray my-1" />

        <div className="py-2">
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Globe className="text-grayText" size={22} /> English | USD
          </div>
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Headphones className="text-grayText" size={22} /> Contact us
          </div>
          <div className="px-5 py-3 flex items-center gap-4 text-dark text-[16px] hover:bg-bgGray cursor-pointer">
            <Info className="text-grayText" size={22} /> About
          </div>
        </div>

        <hr className="mx-5 border-borderGray my-1" />

        <div className="py-2 flex-1">
          <div className="px-5 py-3 text-[#505050] text-[16px] hover:bg-bgGray cursor-pointer">User agreement</div>
          <div className="px-5 py-3 text-[#505050] text-[16px] hover:bg-bgGray cursor-pointer">Partnership</div>
          <div className="px-5 py-3 text-[#505050] text-[16px] hover:bg-bgGray cursor-pointer">Privacy policy</div>
        </div>
      </div>
    </div>
  );
}