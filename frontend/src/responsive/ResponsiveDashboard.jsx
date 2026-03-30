import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import CategoryScroller from './CategoryScroller';
import Hero from './Hero';
import DealSection from './DealSection';
import HomeOutdoorSection from './HomeOutdoorSection';

export default function ResponsiveDashboard() {
  return (
    <div className="bg-[#F7FAFC] min-h-screen font-sans w-full overflow-x-hidden">
       <Header />
       <main className="w-full mx-auto max-w-[1440px] pb-12 lg:pt-6">
         <div className="bg-white lg:bg-transparent pb-2 lg:pb-0">
           <SearchBar />
           <CategoryScroller />
         </div>
         <Hero />
         <DealSection />
         <HomeOutdoorSection />
       </main>
    </div>
  );
}
