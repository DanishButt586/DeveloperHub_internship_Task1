import GoProImg from '../assets/GoPro.png';

export default function Deals() {
  const deals = [
    { name: "Smart watches", discount: "-25%", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=150" },
    { name: "Laptops", discount: "-15%", img: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=150" },
    { name: "GoPro cameras", discount: "-40%", img: GoProImg },
    { name: "Headphones", discount: "-25%", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150" },
    { name: "Canon cameras", discount: "-25%", img: "https://images.unsplash.com/photo-1514315384763-ba401779410f?auto=format&fit=crop&q=80&w=150" },
  ];

  return (
    <div className="bg-white border border-gray-border rounded-md flex overflow-hidden">
      {/* Timer Section */}
      <div className="p-5 w-[280px] border-r border-gray-border flex flex-col justify-start">
        <h3 className="font-semibold text-lg text-dark mb-1">Deals and offers</h3>
        <p className="text-gray-dark text-sm mb-4">Hygiene equipments</p>
        
        <div className="flex gap-2 text-white">
          <div className="bg-gray-dark rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
            <span className="font-bold text-lg leading-none">04</span>
            <span className="text-[11px]">Days</span>
          </div>
          <div className="bg-gray-dark rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
            <span className="font-bold text-lg leading-none">13</span>
            <span className="text-[11px]">Hour</span>
          </div>
          <div className="bg-gray-dark rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
            <span className="font-bold text-lg leading-none">34</span>
            <span className="text-[11px]">Min</span>
          </div>
          <div className="bg-gray-dark rounded w-[45px] h-[50px] flex flex-col items-center justify-center">
            <span className="font-bold text-lg leading-none">56</span>
            <span className="text-[11px]">Sec</span>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="flex-1 flex">
        {deals.map((deal, idx) => (
          <div key={idx} className="flex-1 border-r border-gray-border last:border-r-0 p-5 flex flex-col items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors">
            <div className="w-[110px] h-[110px] mb-3 flex items-center justify-center">
                <img src={deal.img} alt={deal.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            <div className="text-center font-medium text-dark text-[15px] mb-2">{deal.name}</div>
            <span className="bg-[#FFE3E3] text-[#EB001B] px-3 py-1 rounded-full text-sm font-medium">
              {deal.discount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
