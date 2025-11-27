
import React, { useEffect, useState, useMemo } from 'react';
import { SlidersHorizontal, Grid, List, ChevronRight, X, ChevronDown } from 'lucide-react';
import ProductCard from './ProductCard';
import { PRODUCTS, CATEGORIES } from '../constants';
import { Product } from '../types';

interface ShopProps {
  onProductClick: (product: Product) => void;
  activeCategory?: string | null;
  onClearCategory?: () => void;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onCompareClick: (product: Product) => void;
}

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc';

const Shop: React.FC<ShopProps> = ({ 
  onProductClick, 
  activeCategory, 
  onClearCategory, 
  onSelectCategory, 
  searchQuery = '',
  onCompareClick
}) => {
  // Config States
  const [itemsPerPage, setItemsPerPage] = useState<number>(16);
  const [sortBy, setSortBy] = useState<SortOption>('default');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Logic: 
  // 1. Prepare Data (Simulate larger dataset by repeating)
  // 2. Filter by Category
  // 3. Filter by Search Query
  // 4. Sort
  // 5. Paginate

  // 1. Prepare Data Source & 2. Filter
  const filteredData = useMemo(() => {
    let baseData = PRODUCTS;
    
    // Simulate larger database for pagination demo (4x the products)
    baseData = [...PRODUCTS, ...PRODUCTS, ...PRODUCTS, ...PRODUCTS];

    // Filter by Category
    if (activeCategory) {
      baseData = baseData.filter(p => p.category === activeCategory);
    }

    // Filter by Search Query
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      baseData = baseData.filter(p => 
        p.name.toLowerCase().includes(lowerQuery) || 
        p.description.toLowerCase().includes(lowerQuery)
      );
    }

    return baseData;
  }, [activeCategory, searchQuery]);

  // 4. Sort
  const sortedData = useMemo(() => {
    const data = [...filteredData];
    switch (sortBy) {
      case 'price-asc':
        return data.sort((a, b) => a.price - b.price);
      case 'price-desc':
        return data.sort((a, b) => b.price - a.price);
      case 'name-asc':
        return data.sort((a, b) => a.name.localeCompare(b.name));
      default:
        return data;
    }
  }, [filteredData, sortBy]);

  // 5. Paginate
  const totalItems = sortedData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const displayedProducts = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage, itemsPerPage]);

  // Handlers
  const handleShowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (val > 0) {
      setItemsPerPage(val);
      setCurrentPage(1); // Reset to first page on count change
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value as SortOption);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 300, behavior: 'smooth' }); // Scroll to top of grid
    }
  };

  // Reset page when category or search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  return (
    <div className="w-full relative">
      {/* Shop Hero Section */}
      <div className="relative h-[316px] w-full bg-cover bg-center flex flex-col items-center justify-center text-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1484101403633-562f891dc89a?q=80&w=2000&auto=format&fit=crop")' }}>
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
      <div className="bg-[#F9F1E7] py-6 px-4 md:px-8 lg:px-16 flex flex-col md:flex-row items-center justify-between gap-4 sticky top-[80px] z-30 shadow-sm">
        {/* Left Side: Filtering & View Options */}
        <div className="flex flex-wrap items-center gap-4 md:gap-8 justify-center md:justify-start relative">
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 hover:text-[#B88E2F] transition-colors ${isFilterOpen ? 'text-[#B88E2F]' : ''}`}
          >
            <SlidersHorizontal size={20} />
            <span className="text-[20px] font-normal">Filter</span>
          </button>

          {/* Filter Dropdown Menu */}
          {isFilterOpen && (
            <div className="absolute top-full left-0 mt-4 w-[200px] bg-white shadow-xl rounded-lg p-4 z-40 animate-fadeIn border border-[#F9F1E7]">
              <h3 className="font-semibold mb-3 text-black">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      if(onClearCategory) onClearCategory();
                      setIsFilterOpen(false);
                    }}
                    className={`text-sm w-full text-left hover:text-[#B88E2F] ${!activeCategory ? 'font-bold text-[#B88E2F]' : 'text-[#333]'}`}
                  >
                    All Products
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => {
                        if(onSelectCategory) onSelectCategory(cat.name);
                        setIsFilterOpen(false);
                      }}
                      className={`text-sm w-full text-left hover:text-[#B88E2F] ${activeCategory === cat.name ? 'font-bold text-[#B88E2F]' : 'text-[#333]'}`}
                    >
                      {cat.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setViewMode('grid')}
              className={`${viewMode === 'grid' ? 'text-black' : 'text-[#9F9F9F]'} hover:text-[#B88E2F] transition-colors`}
            >
              <Grid size={20} fill={viewMode === 'grid' ? "currentColor" : "none"} />
            </button>
            <button 
              onClick={() => setViewMode('list')}
              className={`${viewMode === 'list' ? 'text-black' : 'text-[#9F9F9F]'} hover:text-[#B88E2F] transition-colors`}
            >
              <List size={20} />
            </button>
          </div>

          <div className="hidden md:block w-[2px] h-[37px] bg-[#9F9F9F]"></div>

          <span className="text-base text-black">
            Showing {(currentPage - 1) * itemsPerPage + 1}–{Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems} results
          </span>
        </div>

        {/* Right Side: Show & Sort */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-4 md:gap-8">
          <div className="flex items-center gap-3">
            <span className="text-[20px] text-black">Show</span>
            <input 
              type="number" 
              value={itemsPerPage}
              onChange={handleShowChange}
              min={1}
              max={100}
              className="bg-white px-3 py-3 text-[#9F9F9F] text-[20px] w-[65px] text-center outline-none focus:ring-1 focus:ring-[#B88E2F]"
            />
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[20px] text-black">Short by</span>
            <div className="relative">
              <select 
                value={sortBy}
                onChange={handleSortChange}
                className="bg-white px-4 py-3 pr-10 text-[#9F9F9F] text-[20px] min-w-[200px] appearance-none outline-none cursor-pointer focus:ring-1 focus:ring-[#B88E2F]"
              >
                <option value="default">Default</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A-Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9F9F9F] pointer-events-none" size={20} />
            </div>
          </div>
        </div>
      </div>

      {/* Active Filter Indicator */}
      {(activeCategory || searchQuery) && (
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pt-8">
           <div className="flex flex-wrap items-center gap-2">
             <span className="text-lg text-gray-500">Filtered by:</span>
             {activeCategory && (
                <span className="bg-[#B88E2F] text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium animate-fadeIn">
                  {activeCategory}
                  <button onClick={onClearCategory} className="hover:bg-black/20 rounded-full p-0.5">
                    <X size={14} />
                  </button>
                </span>
             )}
             {searchQuery && (
                 <span className="bg-[#B88E2F] text-white px-4 py-1 rounded-full flex items-center gap-2 text-sm font-medium animate-fadeIn">
                   Search: "{searchQuery}"
                 </span>
             )}
           </div>
        </div>
      )}

      {/* Product Grid */}
      <section className="py-12 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto">
        {displayedProducts.length > 0 ? (
          <div className={`grid gap-8 mb-20 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {displayedProducts.map((product, index) => (
              <ProductCard 
                key={`${product.id}-${index}`} 
                product={product} 
                onSeeDetails={onProductClick}
                onCompareClick={() => onCompareClick(product)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 text-xl">
            No products found matching your criteria.
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 md:gap-8 flex-wrap">
            {/* Previous Button */}
             <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 h-[60px] rounded-[10px] text-[20px] font-light flex items-center justify-center transition-colors ${
                currentPage === 1 ? 'bg-[#F9F1E7] text-gray-400 cursor-not-allowed' : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
              }`}
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
              return (
                <button 
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-[60px] h-[60px] rounded-[10px] text-[20px] font-normal flex items-center justify-center transition-colors ${
                    currentPage === page 
                      ? 'bg-[#B88E2F] text-white' 
                      : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
                  }`}
                >
                  {page}
                </button>
              );
            })}

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-6 h-[60px] rounded-[10px] text-[20px] font-light flex items-center justify-center transition-colors ${
                currentPage === totalPages ? 'bg-[#F9F1E7] text-gray-400 cursor-not-allowed' : 'bg-[#F9F1E7] text-black hover:bg-[#B88E2F] hover:text-white'
              }`}
            >
              Next
            </button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Shop;
