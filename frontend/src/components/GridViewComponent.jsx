import { Heart, Star, ShoppingCart } from 'lucide-react';

const GridViewComponent = ({ items, onAddToCart, onOpenProduct }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) => {
        const { name, price, originalPrice, reviews, image } = item;
        const itemId = item._id || item.id;
        

        return (
          <div key={itemId} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group relative flex flex-col h-full">
            <button
              type="button"
              onClick={() => onOpenProduct?.(item)}
              className="relative aspect-square p-4 bg-gray-50 flex items-center justify-center"
            >
              <img src={image} alt={name} className="max-w-full max-h-full object-contain mix-blend-multiply transition-transform group-hover:scale-105" />
              <span className="absolute top-3 right-3 p-1.5 bg-white rounded-full shadow-sm text-gray-400 hover:text-danger opacity-0 group-hover:opacity-100 transition-opacity">
                <Heart size={18} />
              </span>
            </button>
            <div className="p-4 flex flex-col flex-grow relative">
              <button
                type="button"
                onClick={() => onOpenProduct?.(item)}
                className="font-semibold text-blue-900 leading-snug line-clamp-2 min-h-[2.5rem] mb-2 text-left"
              >
                {name}
              </button>
              <div className="mt-auto">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-bold text-xl text-gray-900">${price.toFixed(2)}</span>
                  {originalPrice && (
                    <span className="text-sm text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center text-warning">
                    <Star size={14} className="fill-current" />
                  </div>
                  <span className="text-xs text-blue-600">{reviews || 0} reviews</span>
                </div>
                <button
                  type="button"
                  onClick={() => onAddToCart?.(item)}
                  className="w-full flex items-center justify-center gap-2 border border-blue-600 text-blue-600 py-2 rounded font-medium hover:bg-blue-50 transition-colors group-hover:bg-blue-600 group-hover:text-white"
                >
                  <ShoppingCart size={18} />
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GridViewComponent;
