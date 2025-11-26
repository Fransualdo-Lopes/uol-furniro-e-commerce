
import React from 'react';
import { SlidersHorizontal, Grid, List, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onProductClick: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick }) => {
  // Simulating 32 products by repeating the existing list 4 times
  const shopProducts = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];
  // Taking the first 16 for the "first page" view
  const currentProducts = shopProducts.slice(0, 16);

  return (
    <div className="w-full">
      {/* Shop Hero Section */}
      <div className="relative h-[316px] w-full bg-cover bg-center flex flex-col items-center justify-center text-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2000&auto=format&fit=crop")' }}>
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <img src="https://placehold.co/40x40/B88E2F/B88E2F?text=F" alt="Logo" className="w-8 h-8 rounded-sm mb-2 opacity-0 hidden" />
          <h1 className="text-black text-5xl font-medium mb-2">Shop</h1>
          <div className="flex items-center gap-2 text-base font-medium">
            <span className="text-black font-semibold">Home</span>
            <ChevronRight size={16} strokeWidth={3} className="text-black" />
            <span className="text-[#9F9F9F] font-light">Shop</span>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-[#F9F1E7] py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side: Filtering & View Options */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center md:justify-start">
          <button className="flex items-center gap-2 hover:text-[#B88E2F] transition-colors">
            <SlidersHorizontal size={20} />
            <span className="text-[20px] font-normal">Filter</span>
          </button>
          
          <div className="flex items-center gap-4">
            <button className="hover:text-[#B88E2F] transition-colors">
              <Grid size={20} fill="currentColor" />
            </button>
            <button className="hover:text-[#B88E2F] transition-colors">
              <List size={20} />
            </button>
          </div>

          <div className="hidden md:block w-[2px] h-[37px] bg-[#9F9F9F]"></div>

          <span className="text-base text-black">
            Showing 1–16 of 32 results
          </span>
        </div>

        {/* Right Side: Show & Sort */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[20px] text-black">Show</span>
            <div className="bg-white px-3 py-3 text-[#9F9F9F] text-[20px] w-[55px] text-center">
              16
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[20px] text-black">Short by</span>
            <div className="bg-white px-4 py-3 text-[#9F9F9F] text-[20px] min-w-[188px]">
              Default
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
          {currentProducts.map((product, index) => (
            <ProductCard 
              key={`${product.id}-${index}`} 
              product={product} 
              onSeeDetails={onProductClick}
            />
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 md:gap-8">
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#B88E2F] text-white text-[20px] font-normal flex items-center justify-center hover:bg-[#9c7724] transition-colors">
            1
          </button>
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-normal flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition-colors">
            2
          </button>
          <button className="w-[60px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-normal flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition-colors">
            3
          </button>
          <button className="w-[98px] h-[60px] rounded-[10px] bg-[#F9F1E7] text-black text-[20px] font-light flex items-center justify-center hover:bg-[#B88E2F] hover:text-white transition-colors">
            Next
          </button>
        </div>
      </section>
    </div>
  );
};

export default Shop;
