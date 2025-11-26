
import React, { useState } from 'react';
import { User, Search, Heart, ShoppingCart, Menu } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onShopClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onCartIconClick: () => void;
  onUserIconClick: () => void;
  onSearch: (query: string) => void;
  cartCount?: number;
  isLoggedIn?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onHomeClick, 
  onShopClick, 
  onAboutClick, 
  onContactClick, 
  onCartIconClick, 
  onUserIconClick,
  onSearch,
  cartCount = 0,
  isLoggedIn = false
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleHomeClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onHomeClick();
    setIsMenuOpen(false);
  };

  const handleShopClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onShopClick();
    setIsMenuOpen(false);
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onAboutClick();
    setIsMenuOpen(false);
  };

  const handleContactClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onContactClick();
    setIsMenuOpen(false);
  };

  const handleCartClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onCartIconClick();
    setIsMenuOpen(false);
  }

  const handleUserClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    onUserIconClick();
  }

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchText);
    setIsSearchOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[80px] shadow-sm">
      <div className="max-w-[1280px] mx-auto w-full h-full flex items-center justify-between px-4 md:px-8 lg:px-16 relative">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span 
            onClick={handleHomeClick}
            className="font-bold text-2xl lg:text-3xl font-montserrat tracking-wide text-black flex items-center gap-1 cursor-pointer"
          >
             {/* Simulating the gold triangle logo with CSS/Text for simplicity if image not available */}
             <span className="text-[#B88E2F] font-bold text-3xl">▲</span>
             Furniro
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 text-base font-medium text-black">
          <a href="#" onClick={handleHomeClick} className="hover:text-[#B88E2F] transition-colors">Home</a>
          <a href="#" onClick={handleShopClick} className="hover:text-[#B88E2F] transition-colors">Shop</a>
          <a href="#" onClick={handleAboutClick} className="hover:text-[#B88E2F] transition-colors">About</a>
          <a href="#" onClick={handleContactClick} className="hover:text-[#B88E2F] transition-colors">Contact</a>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <button 
            onClick={handleUserClick}
            className={`hover:text-[#B88E2F] transition-colors ${isLoggedIn ? 'text-[#B88E2F]' : ''}`}
            title={isLoggedIn ? 'Logged In' : 'Login'}
          >
            <User size={24} fill={isLoggedIn ? "currentColor" : "none"} />
          </button>
          
          <div className="relative">
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`hover:text-[#B88E2F] transition-colors ${isSearchOpen ? 'text-[#B88E2F]' : ''}`}
            >
              <Search size={24} />
            </button>
            
            {/* Search Input Dropdown */}
            {isSearchOpen && (
              <div className="absolute top-full right-0 mt-4 w-[300px] bg-white shadow-xl p-4 rounded-lg border border-gray-100 animate-fadeIn z-50">
                <form onSubmit={handleSearchSubmit} className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="flex-1 border-b border-gray-300 py-1 px-2 outline-none focus:border-[#B88E2F] bg-white text-black"
                    autoFocus
                  />
                  <button type="submit" className="text-[#B88E2F] font-medium text-sm">GO</button>
                </form>
              </div>
            )}
          </div>

          <button className="hover:text-[#B88E2F] transition-colors"><Heart size={24} /></button>
          
          <div className="relative">
            <button 
              onClick={handleCartClick}
              className="hover:text-[#B88E2F] transition-colors flex items-center"
            >
              <ShoppingCart size={24} />
            </button>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#E97171] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border border-white pointer-events-none">
                {cartCount}
              </span>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <div className="relative mr-2">
              <button onClick={handleCartClick}>
                <ShoppingCart size={24} />
              </button>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#E97171] text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border border-white pointer-events-none">
                  {cartCount}
                </span>
              )}
          </div>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[80px] left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden border-t">
          <a href="#" onClick={handleHomeClick} className="text-lg font-medium">Home</a>
          <a href="#" onClick={handleShopClick} className="text-lg font-medium">Shop</a>
          <a href="#" onClick={handleAboutClick} className="text-lg font-medium">About</a>
          <a href="#" onClick={handleContactClick} className="text-lg font-medium">Contact</a>
          <div className="flex gap-6 mt-4 pt-4 border-t items-center justify-between">
            <button onClick={handleUserClick}>
               <User size={24} fill={isLoggedIn ? "black" : "none"} />
            </button>
            
            {/* Mobile Search */}
            <form onSubmit={(e) => {
              e.preventDefault();
              handleSearchSubmit(e);
              setIsMenuOpen(false);
            }} className="flex-1 mx-4 border-b border-gray-300">
               <input 
                  type="text" 
                  placeholder="Search..." 
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full py-1 outline-none bg-white text-black"
               />
            </form>

            <Heart size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
