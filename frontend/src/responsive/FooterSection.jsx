import React from 'react';
import { Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinkSections } from '../data/siteConfig';

export default function FooterSection() {
  return (
    <footer className="w-full">
      {/* Newsletter */}
      <div className="bg-[#EFF2F4] py-10 px-4 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-1">Subscribe on our newsletter</h3>
        <p className="text-[#606060] text-[15px] mb-5">Get daily news on upcoming offers from many suppliers all over the world</p>
        <div className="flex items-center gap-2 max-w-md w-full">
           <div className="relative flex-1">
             <Mail size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
             <input type="email" placeholder="Email" className="w-full py-2.5 pl-10 pr-3 rounded border border-gray-300 outline-none focus:border-blue-500 text-sm" />
           </div>
           <button className="bg-[#0D6EFD] text-white px-6 py-2.5 rounded font-medium text-sm hover:bg-blue-700 transition">
             Subscribe
           </button>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-white pt-12 pb-8 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 flex flex-col lg:flex-row justify-between gap-10">
          <div className="max-w-[280px]">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-[#0061FF] text-white p-1 rounded">
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                   <path d="M19 7L12 3L5 7V13C5 17.5 8 20.5 12 21C16 20.5 19 17.5 19 13V7Z" fill="currentColor"/>
                 </svg>
              </div>
              <span className="text-[#8CB7F5] font-bold text-2xl tracking-tight leading-none text-blue-400">Brand</span>
            </div>
            <p className="text-[#505050] text-[15px] leading-relaxed mb-4">
              Best information about the company gies here but now lorem ipsum is
            </p>
            <div className="flex items-center gap-3">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#BDC4CD] text-white flex items-center justify-center hover:bg-gray-500 transition">f</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#BDC4CD] text-white flex items-center justify-center hover:bg-gray-500 transition">in</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#BDC4CD] text-white flex items-center justify-center hover:bg-gray-500 transition">ig</a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8">
             {footerLinkSections.map((section) => (
               <div key={section.title}>
                  <h4 className="font-semibold text-gray-900 mb-4">{section.title}</h4>
                  <ul className="flex flex-col gap-3 text-[#505050] text-[15px]">
                    {section.links.map((link) => (
                      <li key={link.label}><Link to={link.path} className="hover:text-blue-600">{link.label}</Link></li>
                    ))}
                  </ul>
               </div>
             ))}
          </div>

          <div className="w-[120px] shrink-0 flex flex-col gap-3">
             <h4 className="font-semibold text-gray-900 mb-1">Get app</h4>
             <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="cursor-pointer hover:opacity-80" />
             </a>
             <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="cursor-pointer hover:opacity-80" />
             </a>
          </div>
        </div>
      </div>

      <div className="bg-[#EFF2F4] text-[#505050] text-[15px]">
         <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
           <span>&copy; 2023 Ecommerce.</span>
           <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
             <span role="img" aria-label="usd">🇺🇸</span>
             <span>English</span>
             <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
             </svg>
           </Link>
         </div>
      </div>
    </footer>
  );
}
