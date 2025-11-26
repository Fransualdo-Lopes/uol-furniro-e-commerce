import React from 'react';
import { Trophy, CheckCircle, Truck, Headset } from 'lucide-react';

const FeaturesBar: React.FC = () => {
  const features = [
    {
      icon: <Trophy size={50} strokeWidth={1} />,
      title: 'High Quality',
      subtitle: 'crafted from top materials'
    },
    {
      icon: <CheckCircle size={50} strokeWidth={1} />,
      title: 'Warranty Protection',
      subtitle: 'Over 2 years'
    },
    {
      icon: <Truck size={50} strokeWidth={1} />,
      title: 'Free Shipping',
      subtitle: 'Order over 150 $'
    },
    {
      icon: <Headset size={50} strokeWidth={1} />,
      title: '24 / 7 Support',
      subtitle: 'Dedicated support'
    }
  ];

  return (
    <div className="bg-[#FAF3EA] py-16 mt-12 w-full">
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="text-[#242424]">
              {feature.icon}
            </div>
            <div>
              <h4 className="text-[#242424] text-2xl font-semibold mb-1">{feature.title}</h4>
              <p className="text-[#898989] font-medium">{feature.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBar;