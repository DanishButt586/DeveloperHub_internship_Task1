import React, { useMemo, useState } from 'react';
import { ArrowLeft, Lock, MessageSquare, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useShopContext } from '../ShopContext';
import { validateCouponRequest } from '../services/apiService';

const initialShippingState = {
  fullName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  phone: '',
};

export default function CheckoutPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    cartTotal,
    placeOrder,
    orderLoading,
    orderError,
    lastOrder,
    resetOrderState,
  } = useShopContext();

  const [couponCode, setCouponCode] = useState('');
  const [discountRate, setDiscountRate] = useState(0);
  const [couponError, setCouponError] = useState('');
  const [couponLoading, setCouponLoading] = useState(false);
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [shippingAddress, setShippingAddress] = useState(initialShippingState);

  const discountAmount = useMemo(() => cartTotal * discountRate, [cartTotal, discountRate]);
  const taxAmount = useMemo(() => (cartTotal - discountAmount) * 0.01, [cartTotal, discountAmount]);
  const finalTotal = useMemo(() => cartTotal - discountAmount + taxAmount, [cartTotal, discountAmount, taxAmount]);

  const handleApplyCoupon = async () => {
    if (appliedCoupon || couponLoading) {
      return;
    }

    resetOrderState();
    const normalizedCode = couponCode.trim().toUpperCase();

    if (!normalizedCode) {
      setCouponError('Please enter a coupon code.');
      return;
    }

    setCouponLoading(true);
    setCouponError('');

    try {
      const response = await validateCouponRequest(normalizedCode);
      setCouponCode(response.code);
      setDiscountRate(response.discountRate);
      setAppliedCoupon({ code: response.code, discountPercentage: response.discountPercentage });
    } catch (error) {
      const message = error.response?.data?.message || 'Unable to apply coupon right now.';
      setCouponError(message);
      setDiscountRate(0);
      setAppliedCoupon(null);
    } finally {
      setCouponLoading(false);
    }
  };

  const handleInputChange = (event) => {
    resetOrderState();
    const { name, value } = event.target;
    setShippingAddress((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    try {
      await placeOrder(shippingAddress);
      setShippingAddress(initialShippingState);
      setCouponCode('');
      setDiscountRate(0);
      setCouponError('');
      setAppliedCoupon(null);
    } catch {
      // Context already stores and displays the checkout error.
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-[1180px] py-6 font-inter bg-[#F7FAFC]">
      <h2 className="text-2xl font-semibold text-[#1C1C1C] mb-6">My cart ({cart.length})</h2>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Cart Items List */}
        <div className="flex-1">
          <div className="bg-white border border-[#DEE2E7] rounded-md mb-4 p-5">
            {cart.length === 0 && (
              <div className="py-10 text-center text-[#8B96A5]">Your cart is empty.</div>
            )}

            {cart.map((item, index) => {
              const itemId = item._id || item.id;

              return (
              <div key={itemId} className={`flex flex-col sm:flex-row gap-4 py-4 ${index !== cart.length - 1 ? 'border-b border-[#DEE2E7]' : ''}`}>
                <div className="w-20 h-20 border border-[#DEE2E7] rounded p-1 flex-shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="font-medium text-[#1C1C1C] text-[16px]">{item.name}</h3>
                    <div className="font-semibold text-[16px] text-[#1C1C1C]">${Number(item.price).toFixed(2)}</div>
                  </div>
                  <div className="text-[#8B96A5] text-sm mb-3">
                    Category: <span className="capitalize">{item.category || 'general'}</span><br/>
                    In stock: {item.countInStock ?? 'N/A'}
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                       <button
                        type="button"
                        onClick={() => removeFromCart(itemId)}
                        className="text-[#FA3434] border border-[#DEE2E7] bg-white hover:bg-red-50 px-3 py-1 rounded text-sm font-medium transition"
                      >
                        Remove
                      </button>
                      <Link
                        to={`/product/${itemId}`}
                        className="text-[#0D6EFD] border border-[#DEE2E7] bg-white hover:bg-blue-50 px-3 py-1 rounded text-sm font-medium transition"
                      >
                        View product
                      </Link>
                    </div>
                    <div className="flex items-center border border-[#DEE2E7] rounded bg-white overflow-hidden">
                       <span className="px-3 py-1 text-sm text-[#1C1C1C]">Qty:</span>
                       <select
                        className="bg-transparent py-1 pr-2 outline-none text-sm cursor-pointer"
                        value={item.quantity}
                        onChange={(event) => updateQuantity(itemId, Number(event.target.value))}
                      >
                         {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => <option key={n} value={n}>{n}</option>)}
                       </select>
                    </div>
                  </div>
                </div>
              </div>
            )})}
            <div className="border-t border-[#DEE2E7] pt-4 mt-2 flex justify-between">
              <Link to="/shop" className="bg-[#0D6EFD] text-white px-4 py-2 rounded font-medium flex items-center gap-2 hover:bg-blue-700 transition"><ArrowLeft size={18}/> Back to shop</Link>
              <button type="button" onClick={clearCart} className="text-[#0D6EFD] border border-[#DEE2E7] bg-white px-4 py-2 rounded font-medium hover:bg-gray-50 transition">Remove all</button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-8 items-center mt-6 text-[#1C1C1C]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E3E8EE] flex items-center justify-center text-[#8B96A5]"><Lock size={18} /></div>
              <div><div className="font-medium">Secure payment</div><div className="text-sm text-[#8B96A5]">Have you ever finally just</div></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E3E8EE] flex items-center justify-center text-[#8B96A5]"><MessageSquare size={18} /></div>
              <div><div className="font-medium">Customer support</div><div className="text-sm text-[#8B96A5]">Have you ever finally just</div></div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#E3E8EE] flex items-center justify-center text-[#8B96A5]"><Truck size={18} /></div>
              <div><div className="font-medium">Free delivery</div><div className="text-sm text-[#8B96A5]">Have you ever finally just</div></div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-[280px]">
          <div className="bg-white border border-[#DEE2E7] rounded-md p-4 mb-4">
            <h3 className="text-[#505050] mb-2">Have a coupon?</h3>
            <div className="flex w-full mt-2">
              <input
                type="text"
                placeholder="Add coupon"
                value={couponCode}
                onChange={(event) => setCouponCode(event.target.value)}
                disabled={Boolean(appliedCoupon) || couponLoading}
                className="border border-[#DEE2E7] rounded-l flex-1 py-2 px-3 outline-none text-sm min-w-0 disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                disabled={Boolean(appliedCoupon) || couponLoading}
                className="bg-white border border-l-0 border-[#DEE2E7] text-[#0D6EFD] rounded-r px-4 hover:bg-gray-50 transition font-medium disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
              >
                {appliedCoupon ? 'Applied' : couponLoading ? 'Applying...' : 'Apply'}
              </button>
            </div>
            {!appliedCoupon && !couponError && (
              <p className="text-xs text-[#8B96A5] mt-2">Use 233606DA for 50% or 233544SA for 35% discount.</p>
            )}
            {couponError && (
              <p className="text-xs text-[#FA3434] mt-2">{couponError}</p>
            )}
            {appliedCoupon && discountRate > 0 && (
              <p className="text-xs text-[#00B517] mt-2">
                Coupon {appliedCoupon.code} applied successfully ({appliedCoupon.discountPercentage}% off). Coupon is locked for this checkout.
              </p>
            )}
          </div>

          <div className="bg-white border border-[#DEE2E7] rounded-md p-4 mb-4">
            <h3 className="text-[#505050] mb-3">Shipping details</h3>
            <div className="grid gap-2">
              <input name="fullName" value={shippingAddress.fullName} onChange={handleInputChange} placeholder="Full Name" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
              <input name="address" value={shippingAddress.address} onChange={handleInputChange} placeholder="Address" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
              <input name="city" value={shippingAddress.city} onChange={handleInputChange} placeholder="City" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
              <input name="postalCode" value={shippingAddress.postalCode} onChange={handleInputChange} placeholder="Postal Code" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
              <input name="country" value={shippingAddress.country} onChange={handleInputChange} placeholder="Country" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
              <input name="phone" value={shippingAddress.phone} onChange={handleInputChange} placeholder="Phone" className="border border-[#DEE2E7] rounded py-2 px-3 outline-none text-sm" />
            </div>
          </div>

          <div className="bg-white border border-[#DEE2E7] rounded-md p-4 shadow-sm">
            <div className="flex justify-between mb-2 text-[#505050]"><span>Subtotal:</span><span>${cartTotal.toFixed(2)}</span></div>
            <div className="flex justify-between mb-2 text-[#505050]"><span>Discount:</span><span className="text-[#FA3434]">- ${discountAmount.toFixed(2)}</span></div>
            <div className="flex justify-between mb-4 text-[#505050]"><span>Tax:</span><span className="text-[#00B517]">+ ${taxAmount.toFixed(2)}</span></div>
            <div className="border-t border-[#DEE2E7] pt-4 mb-4 flex justify-between font-bold text-lg text-[#1C1C1C]">
              <span>Total:</span><span>${finalTotal.toFixed(2)}</span>
            </div>
            <button
              type="button"
              disabled={orderLoading || cart.length === 0}
              onClick={handleCheckout}
              className="w-full bg-[#00B517] text-white py-3 rounded-md font-bold text-[16px] hover:bg-green-600 transition mb-4 shadow-[0_1px_2px_rgba(0,0,0,0.1)] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {orderLoading ? 'Placing order...' : 'Checkout'}
            </button>
            {orderError && <p className="text-xs text-[#FA3434] mb-3">{orderError}</p>}
            {lastOrder && (
              <p className="text-xs text-[#00B517] mb-3">
                Order placed successfully. ID: {lastOrder._id}
                <button type="button" onClick={resetOrderState} className="ml-2 underline">Dismiss</button>
              </p>
            )}
            <div className="flex justify-center gap-2 mt-2 flex-wrap">
              <div className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border border-gray-200">AMEX</div>
              <div className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border border-gray-200">MASTERCARD</div>
              <div className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border border-gray-200">PAYPAL</div>
              <div className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border border-gray-200">VISA</div>
              <div className="text-xs font-semibold px-2 py-1 bg-gray-100 rounded border border-gray-200">APPLE PAY</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}