/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState, useContext } from 'react';
import { createOrderRequest } from './services/apiService';

// Create Context
const ShopContext = createContext();

// Create Provider
export const ShopProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cartNotice, setCartNotice] = useState(null);
  const [languageCurrency, setLanguageCurrency] = useState(() => {
    if (typeof window === 'undefined') return { language: 'English', currency: 'USD' };
    const cached = window.localStorage.getItem('languageCurrency');
    return cached ? JSON.parse(cached) : { language: 'English', currency: 'USD' };
  });
  const [shipTo, setShipTo] = useState(() => {
    if (typeof window === 'undefined') return { code: 'DE', label: 'Germany', emoji: '🇩🇪' };
    const cached = window.localStorage.getItem('shipTo');
    return cached ? JSON.parse(cached) : { code: 'DE', label: 'Germany', emoji: '🇩🇪' };
  });
  const [orderLoading, setOrderLoading] = useState(false);
  const [orderError, setOrderError] = useState('');
  const [lastOrder, setLastOrder] = useState(null);

  const getItemId = (item) => item._id || item.id;

  // Cart Functions
  const addToCart = (product) => {
    const productId = getItemId(product);
    const productName = product?.name || 'Item';
    const existingProduct = cart.find((item) => getItemId(item) === productId);

    setCart((prevCart) => {
      const matchedProduct = prevCart.find((item) => getItemId(item) === productId);

      if (matchedProduct) {
        return prevCart.map((item) =>
          getItemId(item) === productId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...prevCart, { ...product, quantity: 1 }];
    });

    setCartNotice({
      id: Date.now(),
      message: existingProduct
        ? `${productName} quantity updated in cart.`
        : `${productName} added to cart.`,
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => getItemId(item) !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
      if (newQuantity <= 0) {
          removeFromCart(productId);
          return;
      }

      setCart((prevCart) =>
          prevCart.map((item) =>
            getItemId(item) === productId ? { ...item, quantity: newQuantity } : item
          )
      );
  };

  const clearCart = () => {
    setCart([]);
  };

  const placeOrder = async (shippingAddress) => {
    if (cart.length === 0) {
      throw new Error('Cannot place an order with an empty cart.');
    }

    setOrderLoading(true);
    setOrderError('');

    try {
      const payload = {
        items: cart.map((item) => ({
          product: getItemId(item),
          name: item.name,
          qty: item.quantity,
          price: Number(item.price),
          image: item.image,
        })),
        shippingAddress,
      };

      const response = await createOrderRequest(payload);
      setLastOrder(response.order);
      clearCart();
      return response.order;
    } catch (error) {
      const message = error.response?.data?.message || 'Failed to place order. Please try again.';
      setOrderError(message);
      throw error;
    } finally {
      setOrderLoading(false);
    }
  };

  const resetOrderState = () => {
    setOrderError('');
    setLastOrder(null);
  };

  const updateLanguageCurrency = (nextValue) => {
    setLanguageCurrency(nextValue);
  };

  const updateShipTo = (nextValue) => {
    setShipTo(nextValue);
  };

  const dismissCartNotice = () => {
    setCartNotice(null);
  };

  useEffect(() => {
    if (!cartNotice) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setCartNotice(null);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [cartNotice]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('languageCurrency', JSON.stringify(languageCurrency));
    }
  }, [languageCurrency]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('shipTo', JSON.stringify(shipTo));
    }
  }, [shipTo]);

  // derived state
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartItemCount,
    cartTotal,
    searchQuery,
    setSearchQuery,
    isSidebarOpen,
    setIsSidebarOpen,
    placeOrder,
    orderLoading,
    orderError,
    lastOrder,
    resetOrderState,
    languageCurrency,
    updateLanguageCurrency,
    shipTo,
    updateShipTo,
    cartNotice,
    dismissCartNotice,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

// Custom Hook for easier use
export const useShopContext = () => {
  return useContext(ShopContext);
};
