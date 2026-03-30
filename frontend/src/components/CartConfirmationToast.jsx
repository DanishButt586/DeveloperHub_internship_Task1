import React from 'react';
import { CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShopContext } from '../ShopContext';

export default function CartConfirmationToast() {
  const { cartNotice, dismissCartNotice } = useShopContext();

  if (!cartNotice) {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-[120] w-[calc(100%-2rem)] max-w-sm animate-[slideIn_.25s_ease-out]">
      <div className="rounded-xl border border-green-100 bg-white shadow-[0_12px_30px_rgba(16,24,40,0.14)] p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="text-green-600 mt-0.5" size={20} />
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-gray-900">Cart updated</p>
            <p className="text-sm text-gray-600 mt-0.5 break-words">{cartNotice.message}</p>
            <Link
              to="/cart"
              onClick={dismissCartNotice}
              className="inline-block mt-2 text-sm font-medium text-[#0D6EFD] hover:underline"
            >
              View cart
            </Link>
          </div>
          <button
            type="button"
            onClick={dismissCartNotice}
            className="text-gray-400 hover:text-gray-700 transition"
            aria-label="Close notification"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}