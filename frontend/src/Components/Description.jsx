import React, { useState, useContext } from "react";
import { assets } from "../assets/assets"; // Assuming assets contains the images asset1 and asset2
import { ShopContext } from "../Context/ShopContext"; // Import the context

const Description = () => {
  const { navigate } = useContext(ShopContext); // Access navigate from ShopContext
  const [isLoading, setIsLoading] = useState(false);

  const handleAboutClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate("/about"); // Use navigate from context to go to the About page
    }, 1000); // Simulate a delay (optional)
  };

  return (
    <div className="py-10 px-4 md:px-12 lg:px-20 bg-white">
      <h1 className="text-4xl md:text-5xl font-serif text-[#D4AF37] text-center mb-6">
        <span className="font-bold">#जाल</span>
        <span className="italic text-[#800020]">कार</span>
      </h1>

      <h1 className="text-4xl md:text-5xl font-serif text-black text-center mb-6">
        • WHO ARE WE?
      </h1>

      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
        {/* Left Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={assets.about_img} // Replaced placeholder with asset1
            alt="Traditional weaving"
            className="w-full h-auto max-w-md lg:max-w-none rounded-tl-[100px] rounded-br-[100px]"
          />
        </div>

        {/* Description Text */}
        <div className="lg:w-1/2 p-3 text-center bg-white lg:text-center">
          <p className="italic text-lg text-black font-medium mb-4">
            "Breathing new life into Bihar's forgotten arts"
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
            "Timeless traditions inspire modern elegance." At Jaalkaar, we
            celebrate Bihar's rich cultural heritage by reviving traditional
            crafts such as Sujani, Manjusha, Sikki, Madhubani, and Bhagalpuri
            Tussar. Our handcrafted, sustainable apparel reflects the legacy of
            these art forms while embracing eco-friendly values.
          </p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            Every thread and pattern tells a story, weaving together the vibrant
            soul of Bihar’s artistry.
          </p>

          {/* Button */}
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleAboutClick}
              disabled={isLoading} // Disable button while loading
              className="px-6 py-2 text-sm md:text-base bg-[#800020] text-[#D4AF37] rounded-md flex items-center justify-center gap-2 hover:bg-[#D4AF37] hover:text-[#800020] transition"
            >
              {isLoading ? (
                <div
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                  role="status"
                ></div>
              ) : (
                "About Jaalkaar →"
              )}
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center hidden lg:block">
          <img
            src={assets.asset2} // Replaced placeholder with asset2
            alt="Hand embroidery"
            className="w-full h-auto max-w-md lg:max-w-none rounded-tr-[100px] rounded-bl-[100px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Description;
