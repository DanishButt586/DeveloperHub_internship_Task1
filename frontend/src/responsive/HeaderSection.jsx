import React, { useMemo } from 'react';
import { User, MessageSquare, Heart, ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useShopContext } from '../ShopContext';
import { localeOptions, productCategories, shipToOptions, topNavLinks } from '../data/siteConfig';

export default function HeaderSection() {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    cartItemCount,
    setSearchQuery,
    languageCurrency,
    updateLanguageCurrency,
    shipTo,
    updateShipTo,
  } = useShopContext();

  const { initialKeyword, initialCategory } = useMemo(() => {
    const params = new URLSearchParams(location.search);
    const keyword = params.get('keyword') || '';
    const category = params.get('category') || 'all';

    return {
      initialKeyword: keyword,
      initialCategory: productCategories.some((item) => item.value === category) ? category : 'all',
    };
  }, [location.search]);

  const handleSearchSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const trimmed = String(formData.get('search') || '').trim();
    const selectedCategory = String(formData.get('category') || 'all');
    const params = new URLSearchParams();

    if (trimmed) {
      params.set('keyword', trimmed);
    }

    if (selectedCategory !== 'all') {
      params.set('category', selectedCategory);
    }

    setSearchQuery(trimmed);
    navigate(params.toString() ? `/shop?${params.toString()}` : '/shop');
  };

  const navigateFromTopNav = (path) => {
    setSearchQuery('');
    navigate(path);
  };

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 lg:px-8">
        {/* Top Header */}
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#0061FF] text-white p-1 rounded">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M19 7L12 3L5 7V13C5 17.5 8 20.5 12 21C16 20.5 19 17.5 19 13V7Z" fill="currentColor"/>
               </svg>
            </div>
            <span className="text-[#8CB7F5] font-bold text-2xl tracking-tight leading-none text-blue-400">Brand</span>
          </Link>

          {/* Search Bar */}
          <form
            key={`responsive-header-search-${location.search}`}
            onSubmit={handleSearchSubmit}
            className="hidden md:flex items-center border-[2px] border-[#0D6EFD] rounded-lg overflow-hidden shrink-0 w-full max-w-[660px] mx-8"
          >
            <input
              type="text"
              placeholder="Search"
              name="search"
              defaultValue={initialKeyword}
              className="flex-1 px-3 py-2 outline-none text-sm h-10"
            />
            <div className="border-l border-gray-300 h-10 flex items-center px-2 text-sm text-gray-800 bg-white w-[160px]">
              <select
                name="category"
                defaultValue={initialCategory}
                className="w-full h-full bg-transparent outline-none text-sm cursor-pointer"
              >
                {productCategories.map((item) => (
                  <option key={item.value} value={item.value}>{item.label}</option>
                ))}
              </select>
              <ChevronDown size={16} className="text-gray-400 pointer-events-none" />
            </div>
            <button type="submit" className="bg-[#0D6EFD] text-white px-6 h-10 font-medium hover:bg-blue-700 transition">
              Search
            </button>
          </form>

          {/* Right Icons */}
          <div className="flex items-center gap-4 lg:gap-6 text-[#8B96A5]">
            <Link to="/profile" className="flex flex-col items-center cursor-pointer hover:text-gray-900">
              <User size={20} strokeWidth={1.5} />
              <span className="text-xs mt-1 hidden lg:block text-[#8B96A5]">Profile</span>
            </Link>
            <Link to="/messages" className="flex flex-col items-center cursor-pointer hover:text-gray-900">
              <MessageSquare size={20} strokeWidth={1.5} />
              <span className="text-xs mt-1 hidden lg:block text-[#8B96A5]">Message</span>
            </Link>
            <Link to="/orders" className="flex flex-col items-center cursor-pointer hover:text-gray-900">
              <Heart size={20} strokeWidth={1.5} />
              <span className="text-xs mt-1 hidden lg:block text-[#8B96A5]">Orders</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center cursor-pointer hover:text-gray-900 relative">
              <ShoppingCart size={20} strokeWidth={1.5} />
              <span className="text-xs mt-1 hidden lg:block text-[#8B96A5]">My cart</span>
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Sub Navbar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 lg:px-8 py-3 flex items-center justify-between text-sm md:text-[15px]">
          <div className="flex items-center gap-6 overflow-x-auto whitespace-nowrap no-scrollbar">
            <button
              type="button"
              onClick={() => navigateFromTopNav('/categories')}
              className="flex items-center gap-1 font-medium cursor-pointer"
            >
              <Menu size={20} />
              <span>All category</span>
            </button>
            {topNavLinks.map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => navigateFromTopNav(item.path)}
                className="font-medium hover:text-blue-600"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6 font-medium">
            <div className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-md px-2 py-1">
              <select
                value={`${languageCurrency.language}-${languageCurrency.currency}`}
                onChange={(event) => {
                  const [language, currency] = event.target.value.split('-');
                  const option = localeOptions.find((item) => item.language === language && item.currency === currency);
                  if (option) {
                    updateLanguageCurrency({ language: option.language, currency: option.currency });
                  }
                }}
                className="bg-transparent outline-none cursor-pointer"
              >
                {localeOptions.map((option) => (
                  <option key={`${option.language}-${option.currency}`} value={`${option.language}-${option.currency}`}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-2 cursor-pointer border border-gray-200 rounded-md px-2 py-1">
              <select
                value={shipTo.code}
                onChange={(event) => {
                  const option = shipToOptions.find((item) => item.code === event.target.value);
                  if (option) {
                    updateShipTo(option);
                  }
                }}
                className="bg-transparent outline-none cursor-pointer"
              >
                {shipToOptions.map((option) => (
                  <option key={option.code} value={option.code}>{`${option.emoji} ${option.label}`}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
