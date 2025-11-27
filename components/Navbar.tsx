
import React from 'react';
import { User, Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';

interface NavbarProps {
  onHomeClick: () => void;
  onShopClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
  onCartIconClick: () => void;
  onUserIconClick: () => void;
  cartCount?: number;
  isLoggedIn?: boolean;
  onSearch?: (query: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ 
  onHomeClick, 
  onShopClick, 
  onAboutClick, 
  onContactClick, 
  onCartIconClick, 
  onUserIconClick,
  cartCount = 0,
  isLoggedIn = false,
  onSearch
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

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
    if (onSearch) {
      onSearch(searchQuery);
    }
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
       setSearchQuery(''); // Clear when closing
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white h-[80px] shadow-sm">
      <div className="max-w-[1280px] mx-auto w-full h-full flex items-center justify-between px-4 md:px-8 lg:px-16">
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
          
          <div className="relative flex items-center">
             {isSearchOpen ? (
                <form onSubmit={handleSearchSubmit} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border border-[#B88E2F] rounded-[5px] pl-4 pr-2 py-1 flex items-center shadow-lg z-20 w-[250px]">
                    <input 
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-white outline-none text-sm text-black"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        autoFocus
                    />
                    <button type="submit" className="text-[#B88E2F] ml-2"><Search size={18} /></button>
                    <button type="button" onClick={toggleSearch} className="text-[#9F9F9F] ml-2 hover:text-red-500"><X size={18} /></button>
                </form>
             ) : (
                <button onClick={toggleSearch} className="hover:text-[#B88E2F] transition-colors"><Search size={24} /></button>
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
          <div className="flex gap-6 mt-4 pt-4 border-t items-center">
            <button onClick={handleUserClick}>
               <User size={24} fill={isLoggedIn ? "black" : "none"} />
            </button>
            {/* Mobile Search Toggle */}
            <button onClick={() => { setIsMenuOpen(false); setIsSearchOpen(true); }} className="hover:text-[#B88E2F]">
                <Search size={24} />
            </button>
            <Heart size={24} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
