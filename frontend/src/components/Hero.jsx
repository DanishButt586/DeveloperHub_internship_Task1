export default function Hero() {
  const categories = [
    { name: "Automobiles", active: true },
    { name: "Clothes and wear", active: false },
    { name: "Home interiors", active: false },
    { name: "Computer and tech", active: false },
    { name: "Tools, equipments", active: false },
    { name: "Sports and outdoor", active: false },
    { name: "Animal and pets", active: false },
    { name: "Machinery tools", active: false },
    { name: "More category", active: false },
  ];

  return (
    <div className="bg-white border border-gray-border rounded-md p-4 flex gap-4 h-[400px]">
      {/* Sidebar Categories */}
      <div className="w-[250px] flex flex-col pt-1">
        {categories.map((cat, idx) => (
          <div 
            key={idx} 
            className={`px-3 py-2 rounded text-sm cursor-pointer transition-colors ${cat.active ? 'bg-secondary font-medium text-dark' : 'text-gray-dark hover:bg-gray-light hover:text-dark'}`}
          >
            {cat.name}
          </div>
        ))}
      </div>

      {/* Main Banner */}
      <div className="flex-1 relative rounded-md overflow-hidden bg-[#E3EDF6]">
        {/* Replace with actual background image class or src */}
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#E3EDF6] to-transparent"></div>
        
        <div className="relative z-10 p-12 h-full flex flex-col justify-center">
          <h2 className="text-3xl text-dark mb-1">Latest trending</h2>
          <h1 className="text-[44px] font-bold text-dark leading-tight mb-6">Electronic items</h1>
          <button className="bg-white text-dark px-6 py-2 rounded shadow-sm hover:shadow font-medium max-w-[140px]">
            Learn more
          </button>
        </div>
      </div>

      {/* Right User/Promo Section */}
      <div className="w-[220px] flex flex-col gap-3">
        <div className="bg-[#E3F0FF] p-4 rounded-md flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="w-[44px] h-[44px] rounded-full bg-blue-200 flex items-center justify-center overflow-hidden">
                <img src="https://ui-avatars.com/api/?name=User&background=random" alt="avatar" />
            </div>
            <div className="text-sm">
              <div>Hi, user</div>
              <div className="text-gray-dark">let's get stated</div>
            </div>
          </div>
          <button className="w-full bg-primary hover:bg-blue-600 text-white rounded py-2 text-sm font-medium transition-colors">Join now</button>
          <button className="w-full bg-white hover:bg-gray-50 text-primary border border-gray-border rounded py-2 text-sm font-medium transition-colors">Log in</button>
        </div>

        <div className="bg-[#F38332] text-white p-4 rounded-md flex-1 flex flex-col justify-center cursor-pointer hover:opacity-95">
          <div className="text-base mb-1">Get US $10 off</div>
          <div className="text-base">with a new</div>
          <div className="text-base">supplier</div>
        </div>

        <div className="bg-[#55BDC3] text-white p-4 rounded-md flex-1 flex flex-col justify-center cursor-pointer hover:opacity-95">
          <div className="text-base mb-1">Send quotes with</div>
          <div className="text-base">supplier</div>
          <div className="text-base">preferences</div>
        </div>
      </div>
    </div>
  );
}
