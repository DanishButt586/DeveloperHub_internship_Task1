import { Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { topNavLinks } from "../data/siteConfig";
import { useShopContext } from "../ShopContext";

export default function Navbar() {
  const { languageCurrency, shipTo } = useShopContext();

  return (
    <div className="bg-white border-b border-gray-border">
      <div className="max-w-[1180px] mx-auto px-4 h-[56px] flex items-center justify-between text-[15px] font-medium text-dark">
        <div className="flex items-center gap-6">
          <Link to="/categories" className="flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
            <Menu size={20} />
            <span>All category</span>
          </Link>
          
          <nav className="flex items-center gap-6 text-gray-dark">
            {topNavLinks.map((tab) => (
              <Link key={tab.label} to={tab.path} className="flex items-center gap-1 hover:text-dark transition-colors">
                {tab.label} {tab.label === "Help" && <ChevronDown size={14} className="text-gray" />}
              </Link>
            ))}
          </nav>
        </div>
        
        <div className="flex items-center gap-6 text-dark tracking-wide">
          <Link to="/settings?tab=locale" className="flex items-center gap-2 cursor-pointer">
            <span>{languageCurrency.language}, {languageCurrency.currency}</span>
            <ChevronDown size={14} className="text-gray" />
          </Link>
          <Link to="/settings?tab=shipping" className="flex items-center gap-2 cursor-pointer">
            <span>Ship to {shipTo.emoji}</span>
            <ChevronDown size={14} className="text-gray" />
          </Link>
        </div>
      </div>
    </div>
  );
}
