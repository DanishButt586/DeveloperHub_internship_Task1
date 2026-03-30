import { Search, PenTool, Plane, ShieldCheck } from "lucide-react";
import CustomiseProductImg from '../assets/Customise your product.png';

export default function ExtraServices() {
  const services = [
    { title: "Source from Industry Hubs", icon: <Search size={20} className="text-dark" />, img: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&q=80&w=300" },
    { title: "Customize Your Products", icon: <PenTool size={20} className="text-dark" />, img: CustomiseProductImg },
    { title: "Fast, reliable shipping by ocean or air", icon: <Plane size={20} className="text-dark" />, img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=300" },
    { title: "Product monitoring and inspection", icon: <ShieldCheck size={20} className="text-dark" />, img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300" },
  ];

  return (
    <div className="mt-2">
      <h2 className="text-xl font-semibold text-dark mb-4">Our extra services</h2>
      <div className="grid grid-cols-4 gap-4">
        {services.map((svc, idx) => (
          <div key={idx} className="bg-white border border-gray-border rounded-md overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-shadow">
            <div className="h-[120px] bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-500" style={{ backgroundImage: `url(${svc.img})` }}></div>
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            </div>
            <div className="p-5 pt-4 relative flex-1 flex flex-col">
              <div className="w-[50px] h-[50px] bg-secondary rounded-full border-4 border-white flex items-center justify-center absolute -top-6 right-5 shadow-sm">
                {svc.icon}
              </div>
              <h3 className="font-medium text-dark text-base leading-tight w-[160px]">{svc.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
