export default function CategorySection({ title, bannerImg, items }) {
  return (
    <div className="bg-white border border-gray-border rounded-md flex overflow-hidden">
      {/* Banner Section */}
      <div className="w-[280px] relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bannerImg})` }}></div>
        <div className="absolute inset-0 bg-[#E0E0E0] opacity-30 mix-blend-multiply"></div>
        <div className="relative z-10 p-6 h-full flex flex-col justify-start">
          <h3 className="font-semibold text-[20px] text-dark w-[160px] leading-tight mb-4">{title}</h3>
          <button className="bg-white text-dark w-fit px-4 py-2 rounded shadow-sm hover:shadow text-sm font-medium transition-shadow">
            Source now
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <div className="flex-1 grid grid-cols-4 col-span-4 h-full">
        {items.map((item, idx) => (
          <div key={idx} className="border-r border-b border-gray-border p-4 flex justify-between h-[126px] cursor-pointer hover:bg-gray-50 transition-colors [&:nth-child(n+5)]:border-b-0 [&:nth-child(4n)]:border-r-0">
            <div className="flex flex-col">
              <span className="font-medium text-dark text-[15px]">{item.name}</span>
              <span className="text-gray-dark text-[13px]">{item.price}</span>
            </div>
            <div className="w-16 h-16 self-end -mb-1 -mr-2">
                <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
