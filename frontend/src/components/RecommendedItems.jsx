import JeansBagImg from '../assets/Jean bag for travel.png';
import BlueWalletImg from '../assets/Blue wallet for men.png';

export default function RecommendedItems() {
  const items = [
    { price: "$10.30", desc: "T-shirts with multiple colors, for men", img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=200" },
    { price: "$10.30", desc: "Jeans shorts for men blue color", img: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&q=80&w=200" },
    { price: "$12.50", desc: "Brown winter coat medium size", img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=200" },
    { price: "$34.00", desc: "Jeans bag for travel for men", img: JeansBagImg },
    { price: "$99.00", desc: "Leather wallet", img: "https://images.unsplash.com/photo-1559563458-527698bf5295?auto=format&fit=crop&q=80&w=200" },
    { price: "$9.99", desc: "Canon camera black, 100x zoom", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=200" },
    { price: "$8.99", desc: "Headset for gaming with mic", img: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=200" },
    { price: "$10.30", desc: "Smartwatch silver color modern", img: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&q=80&w=200" },
    { price: "$10.30", desc: "Blue wallet for men leather material", img: BlueWalletImg },
    { price: "$80.95", desc: "Jeans bag for travel for men", img: JeansBagImg },
  ];

  return (
    <div className="mt-2">
      <h2 className="text-xl font-semibold text-dark mb-4">Recommended items</h2>
      <div className="grid grid-cols-5 gap-4">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border border-gray-border rounded-md p-4 flex flex-col gap-3 cursor-pointer hover:shadow-md transition-shadow">
            <div className="h-[150px] w-full flex items-center justify-center mb-2">
              <img src={item.img} alt={item.desc} className="max-w-full max-h-full object-contain mix-blend-multiply" />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-dark text-base">{item.price}</span>
              <span className="text-gray-dark text-sm leading-tight mt-1">{item.desc}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
