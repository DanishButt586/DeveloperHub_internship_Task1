import React from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="bg-white px-4 md:px-8 lg:px-0 py-3 lg:py-6 border-b border-borderGray lg:border-none w-full flex justify-center">
      <div className="relative bg-bgGray border border-borderGray hover:border-primary transition-colors duration-200 rounded-md flex items-center px-3 h-10 md:h-12 w-full lg:max-w-2xl shadow-sm focus-within:ring-2 ring-primary/20">
        <Search className="text-grayText w-5 h-5 mr-3 flex-shrink-0" />
        <input 
          type="text" 
          placeholder="Search items..." 
          className="bg-transparent flex-1 outline-none text-dark text-[15px] md:text-[16px] w-full" 
        />
        <button className="hidden md:block bg-primary text-white h-full px-6 rounded-r-md -mr-3 text-[15px] font-medium hover:bg-blue-600 transition-colors">
           Search
        </button>
      </div>
    </div>
  );
}
