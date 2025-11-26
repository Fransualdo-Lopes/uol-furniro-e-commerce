import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="group relative w-full h-[600px] md:h-[716px] flex items-center justify-end bg-gray-100 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop" 
          alt="Modern Interior" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Card - Positioned relative to container */}
      <div className="relative z-10 mr-4 md:mr-16 lg:mr-20 bg-[#FFF3E3] p-8 md:p-10 rounded-[4px] max-w-[90%] md:max-w-[643px] text-left opacity-0 translate-y-[50px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-1000 ease-out">
        <span className="block text-gray-800 font-semibold tracking-[3px] text-sm md:text-base mb-2 md:mb-4">
          New Arrival
        </span>
        <h1 className="text-[#B88E2F] text-3xl md:text-[52px] leading-tight font-bold mb-4 md:mb-6">
          Discover Our <br /> New Collection
        </h1>
        <p className="text-[#333333] text-sm md:text-lg mb-8 md:mb-12 font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="bg-[#B88E2F] text-white px-10 md:px-[72px] py-4 md:py-[25px] font-bold text-sm md:text-base hover:bg-[#9c7724] transition-colors uppercase">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Hero;