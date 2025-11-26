
import React from 'react';
import { ChevronRight, Award, Users, PenTool } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[316px] w-full bg-cover bg-center flex flex-col items-center justify-center text-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="https://placehold.co/40x40/B88E2F/B88E2F?text=F" alt="Logo" className="w-8 h-8 rounded-sm mb-2 opacity-0 hidden" />
          <h1 className="text-black text-5xl font-medium mb-2">About</h1>
          <div className="flex items-center gap-2 text-base font-medium">
            <span className="text-black font-semibold">Home</span>
            <ChevronRight size={16} strokeWidth={3} className="text-black" />
            <span className="text-[#9F9F9F] font-light">About</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1">
            <h2 className="text-[#B88E2F] text-lg font-bold uppercase tracking-wider mb-2">Who We Are</h2>
            <h3 className="text-[#333333] text-3xl md:text-4xl font-bold mb-6">Designing Your Dreams With Passion</h3>
            <p className="text-[#666666] leading-relaxed mb-6 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
            </p>
            <p className="text-[#666666] leading-relaxed mb-8 text-justify">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-[#B88E2F] text-white px-8 py-3 font-semibold hover:bg-[#9c7724] transition-colors shadow-md">
              Learn More
            </button>
          </div>

          {/* Image Grid */}
          <div className="order-1 md:order-2 grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=600&auto=format&fit=crop" 
              alt="Furniture Workshop" 
              className="w-full h-[240px] object-cover rounded-lg shadow-lg translate-y-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=600&auto=format&fit=crop" 
              alt="Interior Design" 
              className="w-full h-[240px] object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Stats / Mission Section */}
      <section className="bg-[#FAF3EA] py-16">
        <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center mb-12">
            <h2 className="text-[#333333] text-3xl font-bold mb-4">Why Choose Furniro</h2>
            <p className="text-[#666666] max-w-2xl mx-auto">
              We prioritize quality, durability, and aesthetics in every piece we create.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#FAF3EA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B88E2F] transition-colors">
                <Award size={32} className="text-[#B88E2F] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">High Quality</h4>
              <p className="text-[#666666]">Crafted from top materials to ensure long-lasting durability and style.</p>
            </div>

            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#FAF3EA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B88E2F] transition-colors">
                <Users size={32} className="text-[#B88E2F] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">Expert Team</h4>
              <p className="text-[#666666]">Our designers and craftsmen are dedicated to bringing your vision to life.</p>
            </div>

            <div className="bg-white p-8 text-center rounded-lg shadow-sm hover:shadow-md transition-shadow group">
              <div className="w-16 h-16 bg-[#FAF3EA] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#B88E2F] transition-colors">
                <PenTool size={32} className="text-[#B88E2F] group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-[#333333] mb-3">Modern Design</h4>
              <p className="text-[#666666]">Contemporary styles that fit perfectly into any modern home environment.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
