
import React from 'react';
import { ChevronRight, Star, Facebook, Linkedin, Twitter, Minus, Plus, ArrowRightLeft } from 'lucide-react';
import { Product } from '../types';
import { PRODUCTS } from '../constants';
import ProductCard from './ProductCard';

interface ProductDetailsProps {
  product: Product;
  onHomeClick: () => void;
  onShopClick: () => void;
  onProductClick: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onCompareClick: (product: Product) => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ 
  product, 
  onHomeClick, 
  onShopClick, 
  onProductClick, 
  onAddToCart,
  onCompareClick
}) => {
  // Mock data for internal view logic
  const [quantity, setQuantity] = React.useState(1);
  const [selectedSize, setSelectedSize] = React.useState('L');
  const [selectedColor, setSelectedColor] = React.useState('purple');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  const handleQuantityChange = (type: 'minus' | 'plus') => {
    if (type === 'minus' && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === 'plus') {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCartClick = () => {
    onAddToCart(product, quantity);
  };

  // Get 4 related products
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="w-full">
      {/* Breadcrumb Bar */}
      <div className="bg-[#F9F1E7] py-6 px-4 md:px-8 lg:px-16 w-full flex items-center gap-4">
        <div className="max-w-[1280px] mx-auto w-full flex items-center gap-4 text-base">
          <button onClick={onHomeClick} className="text-[#9F9F9F] hover:text-black">Home</button>
          <ChevronRight size={16} className="text-black" />
          <button onClick={onShopClick} className="text-[#9F9F9F] hover:text-black">Shop</button>
          <ChevronRight size={16} className="text-black" />
          <div className="w-[2px] h-[30px] bg-[#9F9F9F] mx-2"></div>
          <span className="text-black font-medium">{product.name}</span>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Images Section */}
          <div className="flex flex-col-reverse md:flex-row gap-8">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={`w-[76px] h-[80px] bg-[#F9F1E7] rounded-[10px] cursor-pointer overflow-hidden ${item === 1 ? 'border border-[#B88E2F]' : ''}`}>
                  <img 
                    src={product.image} 
                    alt="Thumbnail" 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Main Image */}
            <div className="flex-1 bg-[#F9F1E7] rounded-[10px] overflow-hidden h-[300px] md:h-[500px]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details Section */}
          <div>
            <h1 className="text-[42px] text-black font-normal mb-2">{product.name}</h1>
            <p className="text-[#9F9F9F] text-2xl font-medium mb-4">{formatPrice(product.price)}</p>
            
            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-[#FFC700]">
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" />
                <Star size={20} fill="currentColor" className="opacity-50" />
              </div>
              <div className="w-[1px] h-[30px] bg-[#9F9F9F]"></div>
              <span className="text-[#9F9F9F] text-[13px]">5 Customer Review</span>
            </div>

            <p className="text-[13px] text-black mb-8 leading-relaxed">
              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </p>

            {/* Size Selector */}
            <div className="mb-6">
              <span className="block text-[#9F9F9F] text-sm mb-3">Size</span>
              <div className="flex gap-4">
                {['L', 'XL', 'XS'].map((size) => (
                  <button 
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-[30px] h-[30px] rounded-[5px] text-[13px] flex items-center justify-center transition-colors ${
                      selectedSize === size ? 'bg-[#B88E2F] text-white' : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selector */}
            <div className="mb-8">
              <span className="block text-[#9F9F9F] text-sm mb-3">Color</span>
              <div className="flex gap-4">
                {[
                  { name: 'purple', class: 'bg-[#816DFA]' },
                  { name: 'black', class: 'bg-black' },
                  { name: 'gold', class: 'bg-[#B88E2F]' }
                ].map((color) => (
                  <button 
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-[30px] h-[30px] rounded-full ${color.class} ${
                      selectedColor === color.name ? 'ring-2 ring-offset-2 ring-gray-400' : ''
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              {/* Quantity */}
              <div className="flex items-center justify-between border border-[#9F9F9F] rounded-[10px] px-4 w-[123px] h-[64px]">
                <button onClick={() => handleQuantityChange('minus')}><Minus size={16} /></button>
                <span className="font-medium">{quantity}</span>
                <button onClick={() => handleQuantityChange('plus')}><Plus size={16} /></button>
              </div>

              {/* Add To Cart */}
              <button 
                onClick={handleAddToCartClick}
                className="border border-black rounded-[15px] px-10 h-[64px] text-[20px] font-normal hover:bg-black hover:text-white transition-colors"
              >
                Add To Cart
              </button>

              {/* Compare */}
              <button 
                onClick={() => onCompareClick(product)}
                className="border border-black rounded-[15px] px-10 h-[64px] text-[20px] font-normal flex items-center gap-2 hover:bg-black hover:text-white transition-colors"
              >
                <ArrowRightLeft size={20} /> Compare
              </button>
            </div>

            <div className="w-full h-[1px] bg-[#D9D9D9] mb-10"></div>

            {/* Meta Data */}
            <div className="flex flex-col gap-3 text-[#9F9F9F] text-base">
              <div className="grid grid-cols-[100px_1fr]">
                <span>SKU</span>
                <span>: SS001</span>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <span>Category</span>
                <span>: Sofas</span>
              </div>
              <div className="grid grid-cols-[100px_1fr]">
                <span>Tags</span>
                <span>: Sofa, Chair, Home, Shop</span>
              </div>
              <div className="grid grid-cols-[100px_1fr] items-center">
                <span>Share</span>
                <div className="flex gap-4 text-black">
                  <Facebook size={20} fill="black" className="cursor-pointer" />
                  <Linkedin size={20} fill="black" className="cursor-pointer" />
                  <Twitter size={20} fill="black" className="cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full h-[1px] bg-[#D9D9D9] mb-10"></div>

      {/* Tabs (Description) */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-14 mb-8">
          <button className="text-black text-2xl font-medium">Description</button>
          <button className="text-[#9F9F9F] text-2xl font-normal hover:text-black">Additional Information</button>
          <button className="text-[#9F9F9F] text-2xl font-normal hover:text-black">Reviews [5]</button>
        </div>

        <div className="max-w-[1026px] mx-auto text-[#9F9F9F] text-base space-y-6 text-justify">
          <p>
            Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>
      </section>

      {/* Related Products */}
      <section className="border-t border-[#D9D9D9] pt-12 pb-20 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto">
        <h2 className="text-[#3A3A3A] text-4xl font-medium text-center mb-12">Related Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {relatedProducts.map((p) => (
             <ProductCard 
               key={p.id} 
               product={p} 
               onSeeDetails={onProductClick}
               onCompareClick={() => onCompareClick(p)}
             />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <button 
            onClick={onShopClick}
            className="border border-[#B88E2F] text-[#B88E2F] px-[74px] py-[12px] font-semibold hover:bg-[#B88E2F] hover:text-white transition-colors"
          >
            Show More
          </button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
