import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ category = "Category", name = "Product" }) {
  return (
    <div className="flex items-center gap-2 text-sm py-4 text-gray-DEFAULT">
      <Link to="/" className="hover:text-primary transition-colors">Home</Link>
      <ChevronRight size={16} className="text-gray" />
      <Link to="/shop" className="hover:text-primary transition-colors">Products</Link>
      <ChevronRight size={16} className="text-gray" />
      <Link to={`/shop?keyword=${encodeURIComponent(category)}`} className="hover:text-primary transition-colors capitalize">{category}</Link>
      <ChevronRight size={16} className="text-gray" />
      <span className="text-gray-dark line-clamp-1">{name}</span>
    </div>
  );
}
