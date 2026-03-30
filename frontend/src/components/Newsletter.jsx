import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="bg-[#EFF2F4] py-10 flex flex-col items-center justify-center -mx-4 mt-8">
      <h2 className="text-xl font-semibold text-dark mb-1">Subscribe on our newsletter</h2>
      <p className="text-gray-dark text-[15px] mb-6">Get daily news on upcoming offers from many suppliers all over the world</p>
      
      <div className="flex gap-2">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-dark" size={20} />
          <input 
            type="email" 
            placeholder="Email" 
            className="w-[280px] h-10 pl-10 pr-4 border border-gray-border rounded outline-none focus:border-primary text-sm bg-white"
          />
        </div>
        <button className="bg-primary hover:bg-blue-600 transition-colors text-white h-10 px-6 rounded font-medium text-sm">
          Subscribe
        </button>
      </div>
    </div>
  );
}
