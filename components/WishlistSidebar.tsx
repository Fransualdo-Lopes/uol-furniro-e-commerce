
import React from 'react';
import { X, Heart, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  wishlistItems: Product[];
  onRemoveItem: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const WishlistSidebar: React.FC<WishlistSidebarProps> = ({ 
  isOpen, 
  onClose, 
  wishlistItems, 
  onRemoveItem,
  onAddToCart
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/20 z-[60] transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-[350px] md:w-[417px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="p-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-black">Wishlist</h2>
          <button onClick={onClose} className="text-[#9F9F9F] hover:text-black transition-colors">
            <Heart size={20} />
          </button>
        </div>
        
        <div className="mx-8 h-[1px] bg-[#D9D9D9]"></div>

        {/* Wishlist Items List */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          {wishlistItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#9F9F9F]">
              <p>Your wishlist is empty.</p>
            </div>
          ) : (
            wishlistItems.map((product) => (
              <div key={product.id} className="flex items-center gap-4">
                <div className="w-[80px] h-[80px] rounded-[10px] bg-[#F9F1E7] overflow-hidden shrink-0">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-normal text-black mb-1">{product.name}</h4>
                  <span className="text-sm font-medium text-[#B88E2F] block mb-2">{formatPrice(product.price)}</span>
                  <button 
                    onClick={() => onAddToCart(product)}
                    className="text-xs font-semibold text-black border-b border-black hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
                <button 
                  onClick={() => onRemoveItem(product)}
                  className="w-8 h-8 rounded-full bg-[#F9F1E7] text-[#9F9F9F] flex items-center justify-center hover:bg-[#E97171] hover:text-white transition-colors"
                  title="Remove from Wishlist"
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishlistSidebar;
