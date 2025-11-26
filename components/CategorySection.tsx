import React from 'react';
import { CATEGORIES } from '../constants';

const CategorySection: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 max-w-[1280px] mx-auto text-center">
      <div className="mb-12">
        <h2 className="text-[#333333] text-3xl font-bold mb-2">Browse The Range</h2>
        <p className="text-[#666666] text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {CATEGORIES.map((category) => (
          <div key={category.id} className="group cursor-pointer">
            <div className="overflow-hidden rounded-lg mb-6 h-[300px] md:h-[480px]">
              <img 
                src={category.image} 
                alt={category.name} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className="text-[#333333] text-2xl font-semibold">{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;