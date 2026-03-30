import React from 'react';

export default function DealSection() {
  const items = [
    { id: 1, img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800", name: "Smart watches", discount: "-25%" },
    { id: 2, img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800", name: "Smart watches", discount: "-25%" },
    { id: 3, img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800", name: "Smart watches", discount: "-25%" },
    { id: 4, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800", name: "Smart watches", discount: "-25%" },
    { id: 5, img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800", name: "Smart watches", discount: "-25%" }
  ];

  return (
    <section className="bg-white mt-3 lg:mt-0 lg:mx-12 lg:rounded-xl lg:border lg:border-borderGray overflow-hidden border-y border-borderGray lg:border-y lg:shadow-sm">
      <div className="px-4 md:px-8 lg:px-6 py-4 flex flex-col md:flex-row md:items-center md:gap-8 justify-start border-b border-borderGray gap-4">
        <div>
          <h3 className="font-semibold text-[18px] md:text-[22px] text-dark leading-tight">Deals and offers</h3>
          <p className="text-[13px] md:text-[15px] text-grayText mt-0.5">Electronic equipments</p>
        </div>
        
        <div className="flex gap-1.5 self-start md:self-auto">
          <div className="bg-[#EFF2F4] rounded-[4px] px-1.5 py-1 text-center min-w-[36px] md:min-w-[44px]">
            <div className="font-bold text-dark leading-none text-[15px] md:text-[17px]">13</div>
            <div className="text-[11px] md:text-[12px] text-grayText mt-0.5 pointer-events-none">Hour</div>
          </div>
          <span className="text-grayText font-bold self-center -mt-3 hidden md:block">:</span>
          <div className="bg-[#EFF2F4] rounded-[4px] px-1.5 py-1 text-center min-w-[36px] md:min-w-[44px]">
            <div className="font-bold text-dark leading-none text-[15px] md:text-[17px]">34</div>
            <div className="text-[11px] md:text-[12px] text-grayText mt-0.5 pointer-events-none">Min</div>
          </div>
          <span className="text-grayText font-bold self-center -mt-3 hidden md:block">:</span>
          <div className="bg-[#EFF2F4] rounded-[4px] px-1.5 py-1 text-center min-w-[36px] md:min-w-[44px]">
            <div className="font-bold text-dark leading-none text-[15px] md:text-[17px]">56</div>
            <div className="text-[11px] md:text-[12px] text-grayText mt-0.5 pointer-events-none">Sec</div>
          </div>
        </div>
      </div>
      
      {/* Product Scroller / Grid */}
      <div className="flex overflow-x-auto no-scrollbar py-3 px-2 md:grid md:grid-cols-4 lg:grid-cols-5 md:py-6 md:px-0">
        {items.map((item, i) => (
          <div key={i} className={`min-w-[124px] md:min-w-0 flex flex-col items-center border-r border-borderGray last:border-0 px-2 md:px-4 cursor-pointer group hover:bg-gray-50 transition-colors py-2 md:py-0 ${i > 2 ? 'md:hidden lg:flex' : ''} ${i > 3 ? 'hidden lg:flex' : 'flex'}`}>
            <div className="h-[90px] w-[90px] md:h-[130px] md:w-[130px] flex items-center justify-center p-2 mb-3">
              <img src={item.img} alt={item.name} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300" />
            </div>
            <span className="text-[14px] md:text-[16px] text-dark mb-2 text-center font-medium leading-none">{item.name}</span>
            <span className="bg-paleRed text-danger text-[13px] md:text-[14px] font-medium px-2.5 py-0.5 md:py-1 rounded-[12px]">-25%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
