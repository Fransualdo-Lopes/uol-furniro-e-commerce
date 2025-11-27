
import React from 'react';
import { Share2, ArrowRightLeft, Heart } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onSeeDetails?: (product: Product) => void;
  onCompareClick?: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSeeDetails, onCompareClick }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const handleDetailsClick = () => {
    if (onSeeDetails) {
      onSeeDetails(product);
    }
  };

  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCompareClick) {
      onCompareClick(product);
    }
  };

  return (
    <div className="group relative bg-[#F4F5F7] overflow-hidden">
      {/* Product Image */}
      <div className="relative h-[301px] w-full">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        
        {/* Tags */}
        {product.tag && (
          <div className={`absolute top-5 right-5 w-12 h-12 rounded-full flex items-center justify-center text-white text-sm font-medium ${
            product.tag.type === 'new' ? 'bg-[#2EC1AC]' : 'bg-[#E97171]'
          }`}>
            {product.tag.value}
          </div>
        )}
      </div>

      {/* Product Info (Default View) */}
      <div className="p-4 pb-8">
        <h3 className="text-[#3A3A3A] text-2xl font-semibold mb-1">{product.name}</h3>
        <p className="text-[#898989] font-medium mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-[#3A3A3A] text-xl font-semibold">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="text-[#B0B0B0] text-sm line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out z-10">
         <button 
           onClick={handleDetailsClick}
           className="bg-white text-[#B88E2F] px-12 py-3 font-semibold mb-6 hover:bg-[#B88E2F] hover:text-white transition-colors"
         >
           See Details
         </button>
         
         <div className="flex items-center gap-6 text-white text-sm font-semibold">
           <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
             <Share2 size={16} /> Share
           </button>
           <button 
             onClick={handleCompareClick}
             className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors"
           >
             <ArrowRightLeft size={16} /> Compare
           </button>
           <button className="flex items-center gap-1 hover:text-[#B88E2F] transition-colors">
             <Heart size={16} /> Like
           </button>
         </div>
      </div>
    </div>
  );
};

export default ProductCard;
