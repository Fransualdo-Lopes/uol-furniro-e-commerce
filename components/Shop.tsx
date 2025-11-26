import React, { useEffect, useState } from 'react';
import { SlidersHorizontal, Grid, List, ChevronRight, X } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onProductClick: (product: Product) => void;
  activeCategory?: string | null;
  onClearCategory?: () => void;
}

const Shop: React.FC<ShopProps> = ({ onProductClick, activeCategory, onClearCategory }) => {
  // We'll manage filtered products based on the activeCategory prop
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  useEffect(() => {
    let filtered = PRODUCTS;
    
    // Filter first if category exists
    if (activeCategory) {
      filtered = PRODUCTS.filter(p => p.category === activeCategory);
    }

    // Simulating more products by repeating the (filtered) list
    // If filtered list is small, we might repeat it more times to fill grid, 
    // or just show what we have. Let's repeat up to 4 times to fill the grid nicely.
    const repeated = [...filtered, ...filtered, ...filtered, ...filtered];
    
    // Slice to show a reasonable number initially
    setDisplayedProducts(repeated.slice(0, 16));
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Shop Hero Section */}
      <div className="relative h-[316px] w-full bg-cover bg-center flex flex-col items-center justify-center text-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2000&auto=format&fit=crop")' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
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
            Showing 1–{displayedProducts.length > 0 ? displayedProducts.length : 0} of {displayedProducts.length} results
          </span>
        </div>

        {/* Right Side: Show & Sort */}
        <div className="flex items-center gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[20px] text-black">Show</span>
            <div className="bg-white px-3 py-3 text-[#9F9F9F] text-[20px] w-[55px] text-center">
              {displayedProducts.length}
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

      {/* Active Filter Indicator */}
      {activeCategory && (
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pt-8">
           <div className="flex items-center gap-2">
             <span className="text-lg text-gray-500">Filtered by:</span>
             <span className="bg-[#B88E2F] text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium">
               {activeCategory}
               <button onClick={onClearCategory} className="hover:bg-black/20 rounded-full p-0.5">
                 <X size={14} />
               </button>
             </span>
           </div>
        </div>
      )}

      {/* Product Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto">
        {displayedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-20">
            {displayedProducts.map((product, index) => (
              <ProductCard 
                key={`${product.id}-${index}`} 
                product={product} 
                onSeeDetails={onProductClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-xl">
            No products found in this category.
          </div>
        )}

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