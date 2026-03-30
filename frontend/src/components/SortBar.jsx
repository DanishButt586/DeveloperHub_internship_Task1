import { LayoutGrid, List } from "lucide-react";

export default function SortBar({
  view,
  setView,
  itemCount,
  title = "Products",
  sortBy = "newest",
  onSortChange,
  verifiedOnly = false,
  onVerifiedOnlyChange,
}) {
  return (
    <div className="bg-white border border-gray-border rounded-md px-4 py-3 flex items-center justify-between">
      <div className="text-[15px]">
        <span className="font-semibold text-dark">{itemCount} items in </span>
        <span className="font-bold text-dark">{title}</span>
      </div>

      <div className="flex items-center gap-4">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(event) => onVerifiedOnlyChange?.(event.target.checked)}
            className="w-4 h-4 rounded border-gray-border text-primary cursor-pointer focus:ring-1 focus:ring-primary"
          />
          <span className="text-dark text-[15px]">Verified only</span>
        </label>
        
        <select
          value={sortBy}
          onChange={(event) => onSortChange?.(event.target.value)}
          className="border border-gray-border rounded px-4 py-2 text-[15px] outline-none bg-white cursor-pointer hover:border-gray-400 min-w-[160px]"
        >
          <option value="newest">Newest</option>
          <option value="price_asc">Price: low to high</option>
          <option value="price_desc">Price: high to low</option>
          <option value="name_asc">Name A-Z</option>
        </select>
        
        <div className="flex items-center border border-gray-border rounded overflow-hidden h-[42px]">
          <button 
            onClick={() => setView('grid')}
            className={`w-10 h-full flex items-center justify-center transition-colors ${view === 'grid' ? 'bg-gray-200 text-dark' : 'bg-white text-gray-dark hover:bg-gray-50'}`}
          >
            <LayoutGrid size={18} />
          </button>
          <div className="w-[1px] h-full bg-gray-border"></div>
          <button 
            onClick={() => setView('list')}
            className={`w-10 h-full flex items-center justify-center transition-colors ${view === 'list' ? 'bg-gray-200 text-dark' : 'bg-white text-gray-dark hover:bg-gray-50'}`}
          >
            <List size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
