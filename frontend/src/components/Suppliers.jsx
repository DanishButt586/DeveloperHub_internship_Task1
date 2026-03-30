export default function Suppliers() {
  const flags = [
    { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
    { country: "Australia", domain: "shopname.ae", flag: "🇦🇺" },
    { country: "United States", domain: "shopname.ae", flag: "🇺🇸" },
    { country: "Russia", domain: "shopname.ru", flag: "🇷🇺" },
    { country: "Italy", domain: "shopname.it", flag: "🇮🇹" },
    { country: "Denmark", domain: "denmark.com.dk", flag: "🇩🇰" },
    { country: "France", domain: "shopname.com.fr", flag: "🇫🇷" },
    { country: "Arabic Emirates", domain: "shopname.ae", flag: "🇦🇪" },
    { country: "China", domain: "shopname.ae", flag: "🇨🇳" },
    { country: "Great Britain", domain: "shopname.co.uk", flag: "🇬🇧" },
  ];

  return (
    <div className="mt-2 mb-6">
      <h2 className="text-xl font-semibold text-dark mb-4">Suppliers by region</h2>
      <div className="grid grid-cols-5 gap-y-4 gap-x-2">
        {flags.map((item, idx) => (
          <div key={idx} className="flex items-center gap-3 cursor-pointer group">
            <span className="text-2xl leading-none">{item.flag}</span>
            <div className="flex flex-col">
              <span className="font-medium text-dark text-sm group-hover:text-primary transition-colors">{item.country}</span>
              <span className="text-gray-dark text-[13px]">{item.domain}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
