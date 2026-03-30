import { ChevronRight } from "lucide-react";

export default function Breadcrumbs() {
  return (
    <div className="flex items-center gap-2 text-[15px] py-4 text-gray-dark">
      <a href="#" className="hover:text-primary transition-colors">Home</a>
      <ChevronRight size={16} className="text-gray" />
      <a href="#" className="hover:text-primary transition-colors">Clothings</a>
      <ChevronRight size={16} className="text-gray" />
      <a href="#" className="hover:text-primary transition-colors">Men's wear</a>
      <ChevronRight size={16} className="text-gray" />
      <span className="text-gray-dark">Summer clothing</span>
    </div>
  );
}
