import React, { useState, useContext } from "react";
import { assets } from "../assets/assets"; // Ensure this matches your import structure
import { ShopContext } from "../Context/ShopContext"; // Import the context

const Hero2 = () => {
  const { navigate } = useContext(ShopContext); // Access navigate from ShopContext
  const [isLoading, setIsLoading] = useState(false);

  const handleShopNowClick = () => {
    setIsLoading(true); // Show loader
    window.scrollTo(0, 0);
    setTimeout(() => {
      navigate("/collection"); // Use navigate from context to go to the Collection page
    }, 1000); // Simulate a delay (optional)
  };

  return (
    <div>
      {/* Announcement Banner */}
      {/* <div className="bg-[#D4AF37] w-full h-10 text-[#800020] flex items-center justify-center text-center p-2">
        <h4 className="text-sm">
          Enjoy a flat 17% off on all items—discount applied at checkout, no
          hassle!
        </h4>
      </div> */}

      {/* Hero Section */}
      <div className="relative w-full h-screen flex items-center justify-start px-6 lg:px-20">
        
        {/* Video Background */}
        <div className="absolute top-0 left-0 w-full h-full z-[-1]">
          <video
            className="w-full h-full object-cover"
            src={assets.hero_vid2}
            autoPlay
            loop
            muted
          ></video>
        </div>

        {/* Overlay for Text */}
        <div className="absolute inset-0 bg-black/30 z-[-1]"></div>

        {/* Text Content */}
        <div className="relative max-w-lg space-y-4 z-0 text-white mt-96 sm:mt-24 lg:mt-0">
          {/* Title */}
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#D4AF37]"></p>
            <p className="font-medium text-[#D4AF37] text-lg lg:text-xl md:text-base">
              Bihar’s Finest Creations
            </p>
          </div>
          <h1 className="text-xl prata-regular text-[#D4AF37] sm:py-3 lg:text-4xl leading-relaxed">
            INSPIRED BY TRADITION
          </h1>

          {/* Button */}
          <button
            onClick={handleShopNowClick}
            className="bg-[#800020] text-[#D4AF37] px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#800020] transition cursor-pointer"
            disabled={isLoading} // Disable button while loading
          >
            {isLoading ? (
              <div
                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                role="status"
              ></div>
            ) : (
              "Shop Now →"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
