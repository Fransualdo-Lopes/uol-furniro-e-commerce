
import React from 'react';
import ProductCard from './ProductCard';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ProductGridProps {
  onShowMoreClick: () => void;
  onProductClick?: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onShowMoreClick, onProductClick }) => {
  return (
    <section id="shop" className="py-12 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto">
      <h2 className="text-[#3A3A3A] text-[40px] font-bold text-center mb-8">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
        {PRODUCTS.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            onSeeDetails={onProductClick}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <button 
          onClick={onShowMoreClick}
          className="border border-[#B88E2F] text-[#B88E2F] px-[74px] py-[12px] font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors"
        >
          Show More
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
