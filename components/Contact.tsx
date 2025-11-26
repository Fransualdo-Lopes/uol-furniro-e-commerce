
import React from 'react';
import { ChevronRight, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative h-[316px] w-full bg-cover bg-center flex flex-col items-center justify-center text-center" 
           style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=2000&auto=format&fit=crop")' }}>
        <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>
        <div className="relative z-10 flex flex-col items-center">
          <img src="https://placehold.co/40x40/B88E2F/B88E2F?text=F" alt="Logo" className="w-8 h-8 rounded-sm mb-2 opacity-0 hidden" />
          <h1 className="text-black text-5xl font-medium mb-2">Contact</h1>
          <div className="flex items-center gap-2 text-base font-medium">
            <span className="text-black font-semibold">Home</span>
            <ChevronRight size={16} strokeWidth={3} className="text-black" />
            <span className="text-[#9F9F9F] font-light">Contact</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-24">
        {/* Header */}
        <div className="text-center mb-16 max-w-[644px] mx-auto">
          <h2 className="text-[#333333] text-4xl font-semibold mb-4">Get In Touch With Us</h2>
          <p className="text-[#9F9F9F] text-base">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Info Column */}
          <div className="flex flex-col gap-10 px-4 md:px-8">
            {/* Address */}
            <div className="flex gap-6">
              <MapPin size={24} className="text-black shrink-0 mt-1" fill="black" stroke="white" />
              <div>
                <h3 className="text-2xl font-medium text-black mb-2">Address</h3>
                <p className="text-black">236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-6">
              <Phone size={24} className="text-black shrink-0 mt-1" fill="black" stroke="white" />
              <div>
                <h3 className="text-2xl font-medium text-black mb-2">Phone</h3>
                <p className="text-black">Mobile: +(84) 546-6789</p>
                <p className="text-black">Hotline: +(84) 456-6789</p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex gap-6">
              <Clock size={24} className="text-black shrink-0 mt-1" fill="black" stroke="white" />
              <div>
                <h3 className="text-2xl font-medium text-black mb-2">Working Time</h3>
                <p className="text-black">Monday-Friday: 9:00 - 22:00</p>
                <p className="text-black">Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="px-4 md:px-8">
            <form className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <label className="text-black font-medium">Your Name</label>
                <input 
                  type="text" 
                  placeholder="Abc" 
                  className="w-full border border-[#9F9F9F] rounded-[10px] h-[75px] px-6 text-[#9F9F9F] outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-black font-medium">Email Address</label>
                <input 
                  type="email" 
                  placeholder="Abc@def.com" 
                  className="w-full border border-[#9F9F9F] rounded-[10px] h-[75px] px-6 text-[#9F9F9F] outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-black font-medium">Subject</label>
                <input 
                  type="text" 
                  placeholder="This is an optional" 
                  className="w-full border border-[#9F9F9F] rounded-[10px] h-[75px] px-6 text-[#9F9F9F] outline-none focus:border-[#B88E2F]"
                />
              </div>

              <div className="flex flex-col gap-4">
                <label className="text-black font-medium">Message</label>
                <textarea 
                  placeholder="Hi! I'd like to ask about" 
                  className="w-full border border-[#9F9F9F] rounded-[10px] h-[120px] p-6 text-[#9F9F9F] outline-none focus:border-[#B88E2F] resize-none"
                />
              </div>

              <button 
                type="submit"
                className="bg-[#B88E2F] text-white w-[237px] h-[55px] rounded-[5px] font-normal text-base hover:bg-[#9c7724] transition-colors mt-4"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
