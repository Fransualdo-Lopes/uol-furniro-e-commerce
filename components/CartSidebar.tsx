
import React from 'react';
import { X, ShoppingBag } from 'lucide-react';
import { CartItem } from '../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onRemoveItem: (productId: string) => void;
  onCheckout: () => void;
  onClearCart: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({ isOpen, onClose, cartItems, onRemoveItem, onCheckout, onClearCart }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

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
          <h2 className="text-2xl font-semibold text-black">Shopping Cart</h2>
          <button onClick={onClose} className="text-[#9F9F9F] hover:text-black transition-colors">
            <ShoppingBag size={20} />
          </button>
        </div>
        
        <div className="mx-8 h-[1px] bg-[#D9D9D9]"></div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-[#9F9F9F]">
              <p>Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.product.id} className="flex items-center gap-4">
                <div className="w-[105px] h-[105px] rounded-[10px] bg-[#F9F1E7] overflow-hidden shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-base font-normal text-black mb-1">{item.product.name}</h4>
                  <div className="flex items-center gap-3">
                    <span className="text-base font-light text-black">{item.quantity}</span>
                    <span className="text-xs font-light text-black">X</span>
                    <span className="text-xs font-medium text-[#B88E2F]">{formatPrice(item.product.price)}</span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveItem(item.product.id)}
                  className="w-6 h-6 rounded-full bg-[#9F9F9F] text-white flex items-center justify-center hover:bg-[#B88E2F] transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-8 bg-white border-t border-[#D9D9D9]">
          <div className="flex items-center justify-between mb-6">
            <span className="text-base font-normal text-black">Subtotal</span>
            <span className="text-base font-semibold text-[#B88E2F]">{formatPrice(subtotal)}</span>
          </div>
          
          <div className="w-full h-[1px] bg-[#D9D9D9] mb-6"></div>

          <div className="flex gap-4">
            <button 
              onClick={onClearCart}
              className="flex-1 border border-black rounded-[50px] py-3 text-xs font-normal hover:bg-black hover:text-white transition-colors"
            >
              Clean
            </button>
            <button 
              onClick={onCheckout}
              className="flex-1 border border-black rounded-[50px] py-3 text-xs font-normal hover:bg-black hover:text-white transition-colors"
            >
              Checkout
            </button>
            <button 
              onClick={onCheckout}
              className="flex-1 border border-black rounded-[50px] py-3 text-xs font-normal hover:bg-black hover:text-white transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
