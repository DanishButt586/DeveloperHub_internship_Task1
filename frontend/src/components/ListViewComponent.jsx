import { Heart, Star, ShoppingCart, Truck } from 'lucide-react';

const ListViewComponent = ({ items, onAddToCart, onOpenProduct }) => {
  return (
    <div className="flex flex-col gap-4">
      {items.map((item) => {
        const { name, price, originalPrice, reviews, image, details, shipping } = item;
        const itemId = item._id || item.id;
        const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

        return (
          <div key={itemId} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow flex flex-col sm:flex-row relative">
            <div className="w-full sm:w-56 p-4 bg-gray-50 flex items-center justify-center relative flex-shrink-0">
              <img src={image} alt={name} className="w-32 h-32 object-contain mix-blend-multiply" />
            </div>
            
            <div className="p-4 flex-1 flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <button
                  type="button"
                  onClick={() => onOpenProduct?.(item)}
                  className="font-semibold text-blue-900 text-lg leading-snug mb-2 text-left"
                >
                  {name}
                </button>
                
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center text-warning">
                    <Star size={14} className="fill-current" />
                  </div>
                  <span className="text-sm text-blue-600">{reviews || 0} reviews</span>
                  <span className="text-gray-300">•</span>
                  <span className="text-sm text-success flex items-center gap-1">
                    <Truck size={14} /> {shipping || 'Free Shipping'}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm line-clamp-3 mb-4">{details}</p>
                
                <button type="button" onClick={() => onOpenProduct?.(item)} className="text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline">
                  <Heart size={16} /> View details
                </button>
              </div>
              
              <div className="w-full lg:w-48 xl:w-56 bg-gray-50 p-4 rounded border border-gray-100 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-2xl text-gray-900">${price.toFixed(2)}</span>
                </div>
                {originalPrice && (
                  <div className="mb-4">
                    <span className="text-sm text-gray-500 line-through mr-2">${originalPrice.toFixed(2)}</span>
                    <span className="text-xs font-semibold text-danger bg-red-50 px-1 py-0.5 rounded">-{discount}% Off</span>
                  </div>
                )}
                
                <button
                  type="button"
                  onClick={() => onAddToCart?.(item)}
                  className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2.5 rounded font-medium hover:bg-blue-700 transition-colors shadow-sm mb-2"
                >
                  <ShoppingCart size={18} />
                  Add to cart
                </button>
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-2 rounded font-medium hover:bg-gray-50 transition-colors">
                  <Heart size={18} className="text-gray-400" />
                  Save for later
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListViewComponent;
