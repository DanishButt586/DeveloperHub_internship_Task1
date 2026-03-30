import { ChevronUp, ChevronDown } from "lucide-react";

export default function FilterSidebar({
  categories = [],
  selectedCategory = "all",
  onCategoryChange,
  minPrice,
  maxPrice,
  onMinPriceChange,
  onMaxPriceChange,
  onApplyPrice,
}) {

  return (
    <div className="w-full md:w-[240px] flex-shrink-0 flex flex-col gap-0 border-t border-gray-border md:border-t-0 md:bg-transparent bg-white">
      <div className="border-b border-gray-border py-4">
          <div className="flex items-center justify-between group">
            <h3 className="font-semibold text-dark text-[15px]">Category</h3>
            <ChevronUp size={18} className="text-gray-dark group-hover:text-dark" />
          </div>

          <div className="mt-3 flex flex-col gap-2 text-[15px]">
            <button
              type="button"
              onClick={() => onCategoryChange?.("all")}
              className={`text-left py-0.5 ${selectedCategory === "all" ? "text-primary font-medium" : "text-gray-dark hover:text-primary"}`}
            >
              All category
            </button>
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange?.(category)}
                className={`text-left capitalize py-0.5 ${selectedCategory === category ? "text-primary font-medium" : "text-gray-dark hover:text-primary"}`}
              >
                {category}
              </button>
            ))}
          </div>
      </div>

      <div className="border-b border-gray-border py-4">
          <div className="flex items-center justify-between group">
            <h3 className="font-semibold text-dark text-[15px]">Price range</h3>
            <ChevronDown size={18} className="text-gray-dark group-hover:text-dark" />
          </div>

          <div className="mt-4 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="flex-1">
                <label className="text-dark text-sm block mb-1">Min</label>
                <input
                  type="number"
                  value={minPrice}
                  onChange={(event) => onMinPriceChange?.(event.target.value)}
                  placeholder="0"
                  className="w-full border border-gray-border rounded px-3 py-1.5 text-sm outline-none bg-white focus:border-primary"
                />
              </div>
              <div className="flex-1">
                <label className="text-dark text-sm block mb-1">Max</label>
                <input
                  type="number"
                  value={maxPrice}
                  onChange={(event) => onMaxPriceChange?.(event.target.value)}
                  placeholder="999999"
                  className="w-full border border-gray-border rounded px-3 py-1.5 text-sm outline-none bg-white focus:border-primary"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={onApplyPrice}
              className="w-full mt-2 bg-white hover:bg-gray-50 border border-gray-border text-primary font-medium rounded py-2 transition-colors"
            >
              Apply
            </button>
          </div>
      </div>

      <div className="border-b border-gray-border py-4">
          <div className="flex items-center justify-between group">
            <h3 className="font-semibold text-dark text-[15px]">Help</h3>
            <ChevronDown size={18} className="text-gray-dark group-hover:text-dark" />
          </div>

          <div className="mt-3 flex flex-col gap-2 text-[15px] text-gray-dark">
            <p>Use filters to quickly narrow products.</p>
            <p>Switch grid/list view based on how much detail you need.</p>
          </div>
        </div>
    </div>
  );
}
