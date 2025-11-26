import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategorySection from './components/CategorySection';
import ProductGrid from './components/ProductGrid';
import FeaturesBar from './components/FeaturesBar';
import Footer from './components/Footer';
import Shop from './components/Shop';
import ProductDetails from './components/ProductDetails';
import About from './components/About';
import Contact from './components/Contact';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'shop' | 'product' | 'about' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // State for filtering shop by category
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const navigateToHome = () => {
    setCurrentView('home');
    setSelectedCategory(null); // Reset filter when going home
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToShop = () => {
    setCurrentView('shop');
    // We don't necessarily reset category here if they clicked "Show More", 
    // but typically "Shop" in menu implies "All Products" unless a filter is active.
    // Let's reset it for a clean "Shop" click, but preserve it if navigating internally.
    // For simple menu clicks, we reset.
    setSelectedCategory(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentView('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setCurrentView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(item => item.product.id === product.id);
      if (existingItemIndex >= 0) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += quantity;
        return newItems;
      } else {
        return [...prev, { product, quantity }];
      }
    });
    // Open the cart sidebar when adding an item for better UX
    setIsCartOpen(true);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const handleCheckout = () => {
    if (!isLoggedIn) {
      // Close cart and open login modal if not logged in
      setIsCartOpen(false);
      setIsLoginModalOpen(true);
    } else {
      // Logic for logged in users (e.g. proceed to payment gateway)
      alert("Proceeding to checkout...");
    }
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
    // Optionally reopen cart if they were trying to checkout
    // setIsCartOpen(true); 
  };

  const handleUserIconClick = () => {
    if (!isLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
       // Typically would open profile menu or logout option
       const confirmLogout = window.confirm("Do you want to logout?");
       if (confirmLogout) {
         setIsLoggedIn(false);
       }
    }
  };

  // Calculate total number of items for the badge
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-[#333]">
      <Navbar 
        onHomeClick={navigateToHome} 
        onShopClick={navigateToShop} 
        onAboutClick={navigateToAbout}
        onContactClick={navigateToContact}
        onCartIconClick={() => setIsCartOpen(true)}
        onUserIconClick={handleUserIconClick}
        cartCount={cartCount}
        isLoggedIn={isLoggedIn}
      />
      
      <CartSidebar 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems}
        onRemoveItem={handleRemoveFromCart}
        onCheckout={handleCheckout}
      />

      <LoginModal 
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
      
      {/* Add padding-top to account for fixed navbar height (80px) */}
      <main className="pt-[80px]">
        {currentView === 'home' && (
          <>
            <Hero />
            <CategorySection onCategoryClick={handleCategoryClick} />
            <ProductGrid 
              onShowMoreClick={navigateToShop} 
              onProductClick={navigateToProduct}
            />
          </>
        )}
        
        {currentView === 'shop' && (
          <Shop 
            onProductClick={navigateToProduct} 
            activeCategory={selectedCategory}
            onClearCategory={() => setSelectedCategory(null)}
          />
        )}

        {currentView === 'about' && (
          <About />
        )}

        {currentView === 'contact' && (
          <Contact />
        )}

        {currentView === 'product' && selectedProduct && (
          <ProductDetails 
            product={selectedProduct}
            onHomeClick={navigateToHome}
            onShopClick={navigateToShop}
            onProductClick={navigateToProduct}
            onAddToCart={handleAddToCart}
          />
        )}

        {currentView !== 'product' && <FeaturesBar />}
      </main>

      <Footer 
        onHomeClick={navigateToHome}
        onShopClick={navigateToShop}
        onAboutClick={navigateToAbout}
        onContactClick={navigateToContact}
      />
    </div>
  );
};

export default App;