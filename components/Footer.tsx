
import React from 'react';

interface FooterProps {
  onHomeClick: () => void;
  onShopClick: () => void;
  onAboutClick: () => void;
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onHomeClick, onShopClick, onAboutClick, onContactClick }) => {
  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onHomeClick();
  };

  const handleShopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onShopClick();
  };

  const handleAboutClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onAboutClick();
  };

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onContactClick();
  }

  return (
    <footer className="bg-white border-t pt-12 pb-8 w-full">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-[#D9D9D9] pb-12">
        {/* Company Info */}
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold font-montserrat">Funiro.</h2>
          <address className="not-italic text-[#9F9F9F] text-base leading-relaxed">
            400 University Drive Suite 200 Coral <br /> Gables, <br />
            FL 33134 USA
          </address>
        </div>

        {/* Links */}
        <div className="flex flex-col gap-6 md:ml-12">
          <h3 className="text-[#9F9F9F] font-medium">Links</h3>
          <a href="#" onClick={handleHomeClick} className="font-medium hover:underline">Home</a>
          <a href="#" onClick={handleShopClick} className="font-medium hover:underline">Shop</a>
          <a href="#" onClick={handleAboutClick} className="font-medium hover:underline">About</a>
          <a href="#" onClick={handleContactClick} className="font-medium hover:underline">Contact</a>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#9F9F9F] font-medium">Help</h3>
          <a href="#" className="font-medium hover:underline">Payment Options</a>
          <a href="#" className="font-medium hover:underline">Returns</a>
          <a href="#" className="font-medium hover:underline">Privacy Policies</a>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-6">
          <h3 className="text-[#9F9F9F] font-medium">Newsletter</h3>
          <div className="flex flex-wrap gap-4">
            <input 
              type="email" 
              placeholder="Enter Your Email Address" 
              className="bg-white border-b border-black text-sm py-1 outline-none flex-1 min-w-[150px] text-black placeholder:text-[#9F9F9F]"
            />
            <button className="border-b border-black text-sm font-medium uppercase py-1 hover:text-[#B88E2F] hover:border-[#B88E2F] transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-[#242424] text-base">2023 furino. All rights reverved</p>
      </div>
    </footer>
  );
};

export default Footer;
