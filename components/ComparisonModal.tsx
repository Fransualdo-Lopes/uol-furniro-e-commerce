
import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { Product } from '../types';

interface ComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onRemoveProduct: (productId: string) => void;
  onAddToCart: (product: Product) => void;
}

const ComparisonModal: React.FC<ComparisonModalProps> = ({ 
  isOpen, 
  onClose, 
  products, 
  onRemoveProduct,
  onAddToCart
}) => {
  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-[1200px] max-h-[90vh] overflow-hidden flex flex-col animate-fadeIn">
        <div className="p-6 border-b flex justify-between items-center bg-[#F9F1E7]">
          <div>
            <h2 className="text-2xl font-bold text-black">Product Comparison</h2>
            <p className="text-sm text-gray-600">{products.length} products selected</p>
          </div>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="overflow-x-auto flex-1 p-6">
          {products.length === 0 ? (
            <div className="text-center py-20 text-gray-500">
              <p className="text-xl">No products selected for comparison.</p>
              <button onClick={onClose} className="mt-4 text-[#B88E2F] hover:underline">
                Browse products
              </button>
            </div>
          ) : (
            <table className="w-full min-w-[800px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="p-4 w-[200px] bg-gray-50 border-b font-semibold text-gray-600">Feature</th>
                  {products.map(product => (
                    <th key={product.id} className="p-4 border-b min-w-[250px] relative">
                      <button 
                        onClick={() => onRemoveProduct(product.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                        title="Remove"
                      >
                        <X size={18} />
                      </button>
                      <div className="h-[150px] w-full bg-[#F9F1E7] rounded-lg mb-4 overflow-hidden">
                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="text-xl font-bold text-black">{product.name}</h3>
                      <p className="text-[#B88E2F] font-semibold">{formatPrice(product.price)}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr>
                  <td className="p-4 bg-gray-50 font-medium">Category</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4">{product.category || '-'}</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium">Description</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4 text-sm text-gray-600">{product.description}</td>
                  ))}
                </tr>
                {/* Simulated Specs */}
                <tr>
                  <td className="p-4 bg-gray-50 font-medium">Rating</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4">
                      <div className="flex text-[#FFC700]">
                         ★★★★★
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium">Availability</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4 text-green-600 font-medium">In Stock</td>
                  ))}
                </tr>
                <tr>
                  <td className="p-4 bg-gray-50 font-medium">Action</td>
                  {products.map(product => (
                    <td key={product.id} className="p-4">
                      <button 
                        onClick={() => onAddToCart(product)}
                        className="bg-[#B88E2F] text-white px-6 py-2 rounded-[5px] text-sm hover:bg-[#9c7724] transition-colors w-full flex items-center justify-center gap-2"
                      >
                        <ShoppingCart size={16} /> Add to Cart
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ComparisonModal;
