import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function InquirySection() {
  const navigate = useNavigate();
  const [itemName, setItemName] = useState('');
  const [details, setDetails] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Pcs');

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new URLSearchParams();

    if (itemName.trim()) params.set('subject', itemName.trim());
    if (details.trim()) params.set('details', details.trim());
    if (quantity.trim()) params.set('quantity', `${quantity.trim()} ${unit}`);

    navigate(`/messages${params.toString() ? `?${params.toString()}` : ''}`);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 lg:px-8 mt-5">
      <div className="rounded-lg overflow-hidden flex flex-col md:flex-row relative bg-gradient-to-r from-[#2C7CF1] to-[#00D1FF] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to right, rgba(44, 124, 241, 0.8), rgba(0, 209, 255, 0.8)), url('https://images.unsplash.com/photo-1542314831-c53cd4b85ca4?auto=format&fit=crop&q=80&w=1200')"}}>
         <div className="flex-1 p-8 lg:p-10 text-white flex flex-col justify-center max-w-xl relative z-10">
            <h2 className="text-[32px] font-semibold leading-tight mb-4 tracking-tight">An easy way to send<br/>requests to all suppliers</h2>
            <p className="text-white/90 text-sm md:text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing<br className="hidden md:block"/> elit, sed do eiusmod tempor incididunt.
            </p>
         </div>
         
        <div className="p-6 md:p-10 relative z-10 md:w-[480px] shrink-0">
          <form onSubmit={handleSubmit} className="bg-white rounded-md p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Send quote to suppliers</h3>
            <input
             type="text"
             value={itemName}
             onChange={(event) => setItemName(event.target.value)}
             placeholder="What item you need?"
             className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 outline-none focus:border-blue-500"
            />
            <textarea
             value={details}
             onChange={(event) => setDetails(event.target.value)}
             placeholder="Type more details"
             className="w-full border border-gray-300 rounded px-3 py-2 text-sm mb-4 h-[75px] resize-none outline-none focus:border-blue-500"
            ></textarea>
              <div className="flex gap-2 mb-5">
              <input
                type="text"
                value={quantity}
                onChange={(event) => setQuantity(event.target.value)}
                placeholder="Quantity"
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500"
              />
              <select
                value={unit}
                onChange={(event) => setUnit(event.target.value)}
                className="w-1/2 border border-gray-300 rounded px-3 py-2 text-sm outline-none focus:border-blue-500 bg-white text-[#505050]"
              >
                    <option>Pcs</option>
                <option>Units</option>
                <option>Kg</option>
                 </select>
              </div>
            <button type="submit" className="bg-[#0D6EFD] text-white px-6 py-2 rounded font-medium text-sm hover:bg-blue-700 transition shadow-sm">
                Send inquiry
              </button>
          </form>
         </div>
      </div>
    </div>
  );
}
