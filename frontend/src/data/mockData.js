import blinderImg from '../assets/Blinder.png';
import blueWalletImg from '../assets/Blue wallet for men.png';
import jeanBagImg from '../assets/Jean bag for travel.png';
import goProImg from '../assets/GoPro.png';

export const products = [
  // DEALS
  { id: 'd1', name: 'Smart watches', price: 19, originalPrice: 25.33, discount: '-25%', category: 'deals', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=150', description: 'High quality smart watch with fitness tracking.' },
  { id: 'd2', name: 'Laptops', price: 850, originalPrice: 1000, discount: '-15%', category: 'deals', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=150', description: 'Powerful laptop for professionals and gaming.' },
  { id: 'd3', name: 'GoPro cameras', price: 120, originalPrice: 200, discount: '-40%', category: 'deals', image: goProImg, description: 'Action camera for your adventures.' },
  { id: 'd4', name: 'Headphones', price: 45, originalPrice: 60, discount: '-25%', category: 'deals', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150', description: 'Noise cancelling over-ear headphones.' },
  { id: 'd5', name: 'Canon cameras', price: 300, originalPrice: 400, discount: '-25%', category: 'deals', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=150', description: 'Professional DSLR camera for photography enthusiasts.' },

  // HOME & OUTDOOR
  { id: 'h1', name: 'Soft chairs', price: 19, category: 'home', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=150', description: 'Comfortable soft chair for living room.' },
  { id: 'h2', name: 'Sofa & chair', price: 19, category: 'home', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=150', description: 'Modern sofa and chair pair.' },
  { id: 'h3', name: 'Kitchen dishes', price: 19, category: 'home', image: 'https://images.unsplash.com/photo-1581622558667-3419a8dc5f83?auto=format&fit=crop&q=80&w=150', description: 'Elegant ceramic kitchen dishes.' },
  { id: 'h4', name: 'Smart watches', price: 19, category: 'home', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=150', description: 'Home utility smart watches.' },
  { id: 'h5', name: 'Kitchen mixer', price: 100, category: 'home', image: 'https://images.unsplash.com/photo-1578643463396-0997cb5328c1?auto=format&fit=crop&q=80&w=150', description: 'Heavy duty kitchen mixer.' },
  { id: 'h6', name: 'Blenders', price: 39, category: 'home', image: blinderImg, description: 'High speed blender for smoothies.' },
  { id: 'h7', name: 'Home appliance', price: 19, category: 'home', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=150', description: 'Essential home appliances.' },
  { id: 'h8', name: 'Coffee maker', price: 10, category: 'home', image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&q=80&w=150', description: 'Automatic drip coffee maker.' },

  // ELECTRONICS
  { id: 'e1', name: 'Smart watches', price: 19, category: 'electronics', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=150', description: 'Bluetooth smartwatch.' },
  { id: 'e2', name: 'Cameras', price: 89, category: 'electronics', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=150', description: 'Digital cameras for vloggers.' },
  { id: 'e3', name: 'Headphones', price: 10, category: 'electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=150', description: 'Wired audio headphones.' },
  { id: 'e4', name: 'Smart watches pro', price: 90, category: 'electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=150', description: 'Pro version with cellular.' },
  { id: 'e5', name: 'Gaming set', price: 35, category: 'electronics', image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&q=80&w=150', description: 'Complete gaming peripheral set.' },
  { id: 'e6', name: 'Laptops & PC', price: 340, category: 'electronics', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80&w=150', description: 'Office and home computers.' },
  { id: 'e7', name: 'Smartphones', price: 19, category: 'electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=150', description: 'Latest smartphone model.' },
  { id: 'e8', name: 'Electric kattle', price: 240, category: 'electronics', image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=150', description: 'Rapid boil electric kettle.' },

  // RECOMMENDED
  { id: 'r1', name: 'T-shirts with multiple colors', price: 10.30, category: 'recommended', image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=250', description: 'T-shirts with multiple colors, for men.' },
  { id: 'r2', name: 'Jeans shorts for men', price: 10.30, category: 'recommended', image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?auto=format&fit=crop&q=80&w=250', description: 'Jeans shorts for men blue color.' },
  { id: 'r3', name: 'Brown winter coat', price: 12.50, category: 'recommended', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=250', description: 'Brown winter coat medium size.' },
  { id: 'r4', name: 'Jeans bag for travel', price: 34.00, category: 'recommended', image: jeanBagImg, description: 'Jeans bag for travel for men.' },
  { id: 'r5', name: 'Leather wallet', price: 99.00, category: 'recommended', image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=250', description: 'Premium leather wallet.' },
  { id: 'r6', name: 'Canon camera black', price: 9.99, category: 'recommended', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=250', description: 'Canon camera black, 100x zoom.' },
  { id: 'r7', name: 'Headset for gaming', price: 8.99, category: 'recommended', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=250', description: 'Headset for gaming with mic.' },
  { id: 'r8', name: 'Smartwatch silver color modern', price: 10.30, category: 'recommended', image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?auto=format&fit=crop&q=80&w=250', description: 'Smartwatch silver color modern.' },
  { id: 'r9', name: 'Blue wallet for men', price: 10.30, category: 'recommended', image: blueWalletImg, description: 'Blue wallet for men leather material.' },
  { id: 'r10', name: 'Jeans bag for travel', price: 80.95, category: 'recommended', image: 'https://images.unsplash.com/photo-1622560480654-d96214fdc887?auto=format&fit=crop&q=80&w=250', description: 'High quality Jeans bag for travel for men.' },
];
