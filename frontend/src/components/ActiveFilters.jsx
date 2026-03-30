import { X } from "lucide-react";

export default function ActiveFilters({ filters = [], onRemoveFilter, onClearAll }) {

  if (filters.length === 0) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 flex-wrap text-sm my-1">
      {filters.map((filter, idx) => (
        <button
          type="button"
          key={idx}
          onClick={() => onRemoveFilter?.(filter.key)}
          className="bg-white border border-gray-border text-gray-dark px-2 py-1 rounded flex items-center gap-1 cursor-pointer hover:bg-gray-50 transition-colors group"
        >
          {filter.label}
          <X size={14} className="text-gray group-hover:text-dark transition-colors" />
        </button>
      ))}
      <button type="button" onClick={onClearAll} className="text-primary hover:text-blue-700 transition-colors ml-2 font-medium">Clear all filter</button>
    </div>
  );
}
