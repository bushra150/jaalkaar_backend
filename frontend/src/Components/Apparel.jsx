import React, { useContext } from 'react';
import { assets } from '../assets/assets';
import Title from './Title';
import { ShopContext } from '../Context/ShopContext';

const Apparel = () => {
  const { navigate } = useContext(ShopContext);

  const categories = [
    {
      name: 'Tussar Silk Sarees',
      image: assets.p_img1,
      alt: 'Tussar Saree',
      route: '/tussar-collection', // Add route for navigation
    },
    {
      name: 'Cotton Sarees',
      image: assets.p_img12_1,
      alt: 'Cotton Saree',
      route: '/cotton-collection', // Add route for navigation
    },
    {
      name: 'Stoles & Scarves',
      image: assets.asset_stole,
      alt: 'Stoles & Scarves',
      route: '/stoles-scarves', // Add route for navigation
    },
    {
      name: 'Dupatta',
      image: assets.asset_dupatta,
      alt: 'Dupatta',
      route: '/dupatta-collection', // Add route for navigation
    },
  ];

  return (
    <div className="my-10 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw] text-center">
      <Title text1={'Shop'} text2={'Categories'} />
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-16">
        {categories.map((category, index) => (
          <div key={index} className="text-center group">
            <div className="relative">
              <div className="w-full aspect-square overflow-hidden rounded-lg shadow-md">
                <img
                  src={category.image}
                  alt={category.alt}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  className="bg-[#800020] text-[#D4AF37] px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#800020] transition cursor-pointer"
                  onClick={() => navigate(category.route)} // Navigate to the route
                >
                  Shop Now
                </button>
              </div>
            </div>
            <h3 className="pt-3 pb-1 text-sm">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apparel;
