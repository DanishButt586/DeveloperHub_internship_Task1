import { useMemo } from "react";
import { User, MessageSquare, Heart, ShoppingCart } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useShopContext } from "../ShopContext";
import { productCategories } from "../data/siteConfig";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItemCount, setSearchQuery } = useShopContext();

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
    const keyword = String(formData.get('search') || '').trim();
    const selectedCategory = String(formData.get('category') || 'all');
    const params = new URLSearchParams();

    if (keyword) params.set('keyword', keyword);
    if (selectedCategory !== 'all') params.set('category', selectedCategory);

    setSearchQuery(keyword);
    navigate(params.toString() ? `/shop?${params.toString()}` : "/shop");
  };

  return (
    <div className="bg-white border-b border-gray-border">
      <div className="max-w-[1180px] mx-auto px-4 h-[86px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#0d6efd] rounded flex items-center justify-center text-white font-bold text-xl">
            <span className="leading-none mt-1">S</span>
          </div>
          <span className="text-2xl font-bold tracking-tight text-[#8cb7f5]">Brand</span>
        </Link>

        {/* Search Bar */}
        <form
          key={`desktop-header-search-${location.search}`}
          onSubmit={handleSearchSubmit}
          className="flex items-center flex-1 max-w-[660px] mx-8 h-10 border-2 border-primary rounded-md overflow-hidden"
        >
          <input 
            type="text" 
            placeholder="Search" 
            name="search"
            defaultValue={initialKeyword}
            className="flex-1 h-full px-3 outline-none text-sm border-r border-gray-border"
          />
          <div className="h-full border-r border-gray-border">
            <select
              name="category"
              defaultValue={initialCategory}
              className="h-full px-3 outline-none bg-white text-sm text-gray-dark cursor-pointer"
            >
              {productCategories.map((item) => (
                <option key={item.value} value={item.value}>{item.label}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="bg-primary hover:bg-blue-600 transition-colors text-white h-full px-6 font-medium text-sm">
            Search
          </button>
        </form>

        {/* Action Icons */}
        <div className="flex items-center gap-6 text-gray-DEFAULT text-xs">
          <Link to="/profile" className="flex flex-col items-center gap-1 cursor-pointer hover:text-gray-dark">
            <User size={20} />
            <span>Profile</span>
          </Link>
          <Link to="/messages" className="flex flex-col items-center gap-1 cursor-pointer hover:text-gray-dark">
            <MessageSquare size={20} />
            <span>Message</span>
          </Link>
          <Link to="/orders" className="flex flex-col items-center gap-1 cursor-pointer hover:text-gray-dark">
            <Heart size={20} />
            <span>Orders</span>
          </Link>
          <Link to="/cart" className="flex flex-col items-center gap-1 cursor-pointer hover:text-gray-dark relative">
            <ShoppingCart size={20} />
            <span>My cart</span>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                {cartItemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}
