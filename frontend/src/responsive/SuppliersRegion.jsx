import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useShopContext } from '../ShopContext';

export default function SuppliersRegion() {
  const navigate = useNavigate();
  const { updateShipTo } = useShopContext();

  const regions = [
    { country: 'Arabic Emirates', domain: 'shopname.ae', flag: '🇦🇪', code: 'AE' },
    { country: 'Australia', domain: 'shopname.au', flag: '🇦🇺', code: 'AU' },
    { country: 'United States', domain: 'shopname.us', flag: '🇺🇸', code: 'US' },
    { country: 'Russia', domain: 'shopname.ru', flag: '🇷🇺', code: 'RU' },
    { country: 'Italy', domain: 'shopname.it', flag: '🇮🇹', code: 'IT' },
    { country: 'Denmark', domain: 'denmark.com.dk', flag: '🇩🇰', code: 'DK' },
    { country: 'France', domain: 'shopname.com.fr', flag: '🇫🇷', code: 'FR' },
    { country: 'China', domain: 'shopname.cn', flag: '🇨🇳', code: 'CN' },
    { country: 'Great Britain', domain: 'shopname.co.uk', flag: '🇬🇧', code: 'GB' }
  ];

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-8 pb-10">
      <h3 className="text-[22px] font-bold text-gray-900 mb-6 tracking-tight">Suppliers by region</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-2">
         {regions.map((reg, idx) => (
           <button
             type="button"
             key={idx}
             onClick={() => {
               updateShipTo({ code: reg.code, label: reg.country, emoji: reg.flag });
               navigate(`/shop?category=recommended&region=${encodeURIComponent(reg.code)}`);
             }}
             className="flex items-center gap-3 text-left hover:bg-white rounded-md p-2 transition"
           >
              <span className="text-2xl leading-none" role="img" aria-label="flag">{reg.flag}</span>
              <div className="flex flex-col">
                <span className="font-medium text-[15px] text-gray-900 leading-snug">{reg.country}</span>
                <span className="text-[13px] text-[#8B96A5]">{reg.domain}</span>
              </div>
           </button>
         ))}
      </div>
    </div>
  );
}
