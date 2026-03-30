export default function QuoteSection() {
  return (
    <div className="rounded-md flex overflow-hidden mt-2 border border-gray-border">
      {/* Left blue area */}
      <div className="relative flex-1 bg-[#2C7CF1]">
        {/* Abstract background elements */}
        <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1565439390238-66258ed68817?auto=format&fit=crop&q=80')" }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-transparent opacity-80"></div>
        
        <div className="relative z-10 p-10 h-full flex flex-col justify-center">
          <h2 className="text-[32px] font-semibold text-white leading-tight mb-4 w-3/4">
            An easy way to send requests to all suppliers
          </h2>
          <p className="text-white opacity-80 text-[15px] w-3/4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.
          </p>
        </div>
      </div>

      {/* Right form area */}
      <div className="w-[490px] bg-white p-8">
        <h3 className="text-xl font-semibold text-dark mb-4">Send quote to suppliers</h3>
        <form className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="What item you need?" 
            className="w-full border border-gray-border rounded px-4 py-2 text-sm outline-none focus:border-primary"
          />
          <textarea 
            placeholder="Type more details" 
            rows="3" 
            className="w-full border border-gray-border rounded px-4 py-2 text-sm outline-none focus:border-primary resize-none"
          ></textarea>
          <div className="flex gap-2">
            <input 
              type="text" 
              placeholder="Quantity" 
              className="w-full border border-gray-border rounded px-4 py-2 text-sm outline-none focus:border-primary"
            />
            <select className="w-full border border-gray-border rounded px-4 py-2 text-sm outline-none focus:border-primary bg-white">
              <option>Pcs</option>
            </select>
          </div>
          <button type="button" className="bg-primary hover:bg-blue-600 transition-colors text-white font-medium rounded px-4 py-[10px] w-fit mt-1">
            Send inquiry
          </button>
        </form>
      </div>
    </div>
  );
}
