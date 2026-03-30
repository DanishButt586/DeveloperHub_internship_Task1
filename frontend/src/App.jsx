import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ShopProvider } from './ShopContext';
import MainScreen from './responsive/MainScreen';
import Shop from './pages/Shop';
import ProductDetailPage from './pages/ProductDetailPage';
import Cart from './pages/Cart';
import ProfilePage from './pages/ProfilePage';
import MessagesPage from './pages/MessagesPage';
import HelpPage from './pages/HelpPage';
import SettingsPage from './pages/SettingsPage';
import CategoriesPage from './pages/CategoriesPage';
import ContentPage from './pages/ContentPage';
import OrdersPage from './pages/OrdersPage';
import CartConfirmationToast from './components/CartConfirmationToast';

function App() {
  return (
    <ShopProvider>
      <Router>
        <div className="font-inter bg-[#F7FAFC] min-h-screen">
          <Routes>
            <Route path="/" element={<MainScreen />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/messages" element={<MessagesPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/content/:slug" element={<ContentPage />} />
            <Route path="*" element={<MainScreen />} />
          </Routes>
          <CartConfirmationToast />
        </div>
      </Router>
    </ShopProvider>
  );
}

export default App;
