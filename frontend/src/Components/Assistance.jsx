import React, { useState, useContext } from "react";
import Title from "./Title";
import { assets } from "../assets/assets";
import { ShopContext } from "../Context/ShopContext"; // Import your context

const Assistance = () => {
  const { navigate } = useContext(ShopContext); // Access navigate from context
  const [isLoading, setIsLoading] = useState(false);

  const handleContactClick = () => {
    setIsLoading(true); // Start loading
    setTimeout(() => {
      navigate("/contact"); // Use navigate to go to the Contact page
    }, 1000); // Simulate a delay (optional)
  };

  return (
    <div className="my-8 px-4 sm: px-[5vw] md: px-[7vw] lg: px-[2vw]">
      <div className="text-center text-3xl py-8">
        <Title text1={"Quick"} text2={"Assistance"} />
      </div>
      <div className="flex flex-col lg:flex-row justify-center gap-8 items-center">
        {/* Text Section */}
        <div className="flex flex-col text-center lg:text-left lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-serif text-black mb-6">
            We are here to assist you.
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Reach out to us anytime. <br /> Let’s find a solution together.
          </p>
          <div className="mt-6 flex justify-center lg:justify-start">
            <button
              onClick={handleContactClick}
              disabled={isLoading} // Disable button while loading
              className="px-6 py-2 text-sm md:text-base bg-[#800020] text-[#D4AF37] rounded-md flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#800020] transition"
            >
              {isLoading ? (
                <div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                  role="status"
                ></div>
              ) : (
                "Contact Us →"
              )}
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/3 flex justify-center">
          <img
            src={assets.contact_img2} // Replaced placeholder with asset2
            alt="Hand embroidery"
            className="w-full max-w-md object-cover sm:h-[32rem] lg:max-w-none rounded-tr-[100px] rounded-bl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Assistance;
