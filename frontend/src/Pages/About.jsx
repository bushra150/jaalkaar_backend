import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';

const About = () => {
  return (
    <>
    <div className="relative">
        {/* Scrolling Background Section */}
        {/* <div
          className="h-[85vh] bg-fixed bg-contain sm:bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${assets.asset6})`, // Replace with your desired image
          }}
        >
          <h1 className="text-white prata-regular text-center text-4xl sm:text-6xl font-light px-8 py-4 rounded-md">
            Discover the Art of Jaalkaar
          </h1>
        </div> */}
      </div>
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[2vw] py-8">
      {/* About Jaalkaar Section */}
      <div className="mt-8">
        <Title text1={'About'} text2={'Jaalkaar'} />
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] w-full lg:w-[40rem] lg:my-12">
            <img 
              className="w-full h-auto transition-transform duration-500 hover:scale-105" 
              src={assets.asset3} 
              alt="Jaalkaar About" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-tl-[100px] rounded-br-[100px]"></div>
          </div>
          {/* Text Section */}
          <p className="text-justify text-gray-600 px-4 sm:px-0 lg:pr-4 lg:w-[30rem] hover:text-gray-800 transition-colors duration-300">
            In the heart of Bihar, Jaalkaar, launched in 2024, is more than a saree brand—it’s a tribute to Bihar’s rich heritage and timeless craftsmanship. 
            While Madhubani paintings and Bhagalpuri silk shine brightly, Jaalkaar brings forward the enchanting beauty of Bavan Buti sarees, a hidden treasure of the region. 
            Blending traditional handloom techniques with modern aesthetics, each saree in our collection is a masterpiece. With fine hand-weaving, intricate buti patterns, and subtle textures, 
            Jaalkaar seamlessly combines heritage with contemporary elegance, celebrating the artisans who keep these traditions alive.
          </p>
        </div>
      </div>

      {/* About Bushra Section */}
      <div className="mt-14">
        <Title text1={'About'} text2={'Founder'} />
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
          {/* Image Section */}
          <div className="relative overflow-hidden rounded-tl-[100px] rounded-br-[100px] w-full lg:w-[40rem] lg:my-12">
            <img 
              className="w-full h-auto transition-transform duration-500 hover:scale-105" 
              src={assets.p_img_founder} 
              alt="About Founder" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 rounded-tl-[100px] rounded-br-[100px]"></div>
          </div>
          {/* Text Section */}
          <p className="text-justify text-gray-600 px-4 sm:px-0 lg:pr-4 lg:w-[30rem] hover:text-gray-800 transition-colors duration-300">
            Meet Bushra: a visionary designer, cultural enthusiast, and the creative force behind Jaalkaar, a brand dedicated to reviving Bihar’s artistic heritage. A proud graduate of NIFT Patna (2020-2024), Bushra's journey into the world of fashion was shaped by her deep connection to her roots and an unwavering passion for craftsmanship.
            The idea for Jaalkaar sparked from countless conversations with artisans and her admiration for the intricate artistry of Bihar's Bavan Buti sarees. Determined to give these hidden treasures a global stage, Bushra envisioned Jaalkaar as more than a brand—it became her mission to honor traditional weavers and bridge the gap between heritage and contemporary fashion.
            Bushra’s work is not just about sarees; it’s about celebrating stories, sustaining livelihoods, and weaving the essence of Bihar into every thread.
          </p>
        </div>
      </div>
    </div>
    {/* Crafts Info */}
    <div className="mt-14 bg-[#800020]">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
        {/* Image Section */}
        <div className="relative overflow-hidden w-full lg:w-[40rem] lg:my-12">
          <img 
            className="w-full h-auto transition-transform duration-500 hover:scale-105" 
            src={assets.asset10} 
            alt="About Founder" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        {/* Text Section */}
        <div className='flex flex-col'>
          <h1 className='text-[#D4AF37] px-4 text-2xl'>Reviving Timeless Traditions</h1>
          <p className="text-justify text-gray-400 px-4 pb-10 lg:w-[30rem] mt-4 hover:text-white transition-colors duration-300">
            Jaalkaar is devoted to breathing new life into Bihar's traditional craftsmanship, 
            with a special focus on the exquisite yet underappreciated art of Bavan Buti sarees. 
            These intricate handwoven treasures, crafted with unparalleled skill and dedication, 
            risk being overshadowed in the fast-paced modern world. By celebrating and promoting this heritage, 
            Jaalkaar not only preserves the artistry of Bihar's weavers but also ensures that these timeless 
            traditions find their place on a global stage, connecting the past with the present in every thread.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#D4AF37]">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
        {/* Text Section */}
        <div className='flex flex-col'>
          <h1 className='text-[#800020] px-4 text-2xl'>Empowering Local Artisans</h1>
          <p className="text-justify text-black px-4 pb-8 lg:w-[30rem] mt-4 hover:text-white transition-colors duration-300">
          At Jaalkaar, we are committed to uplifting Bihar's skilled artisans, particularly the weavers behind the enchanting 
          Bavan Buti sarees. Through dedicated partnerships, we have formed artisan clusters that provide employment and skill 
          development opportunities. Starting with a few master weavers, these clusters have grown into a thriving community where 
          traditional techniques are preserved and passed on to the next generation. In addition, Jaalkaar works closely with 
          multiple weaving communities, offering training and guidance to adapt their crafts to contemporary markets. 
          This initiative not only sustains Bihar’s rich heritage but also empowers local artisans by providing them with a stable 
          livelihood and a platform to showcase their artistry to the world.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative overflow-hidden w-full lg:w-[40rem] lg:my-12">
          <img 
            className="w-full h-auto transition-transform duration-500 hover:scale-105" 
            src={assets.asset5} 
            alt="About Founder" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
    <div className="bg-[#800020]">
      <div className="flex flex-col lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
        {/* Image Section */}
        <div className="relative overflow-hidden w-full lg:w-[40rem] lg:my-12">
          <img 
            className="w-full h-[400px] object-cover transition-transform duration-500 hover:scale-105" 
            src={assets.asset17} 
            alt="About Founder" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        {/* Text Section */}
        <div className='flex flex-col'>
          <h1 className='text-[#D4AF37] px-4 text-2xl'>Uplifting Women Through Craft</h1>
          <p className="text-justify text-gray-400 px-4 pb-10 lg:w-[30rem] mt-4 hover:text-white transition-colors duration-300">
          Jaalkaar proudly contributes to women’s empowerment by creating opportunities for female artisans and weavers to thrive. 
          By employing skilled women from local communities, Jaalkaar not only helps preserve the intricate art of Bavan Buti sarees 
          but also provides them with a platform to showcase their exceptional talents. This initiative fosters financial independence, 
          encourages creativity, and ensures that the rich heritage of Bihar is celebrated and sustained through the hands of its 
          dedicated craftswomen.
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#D4AF37]">
      <div className="flex flex-col-reverse lg:flex-row gap-12 items-center justify-center lg:gap-8 transition-all">
        {/* Text Section */}
        <div className='flex flex-col'>
          <h1 className='text-[#800020] px-4 text-2xl'>Celebrating Bihar’s Heritage</h1>
          <p className="text-justify text-black px-4 pb-8 lg:w-[30rem] mt-4 hover:text-white transition-colors duration-300">
          AJaalkaar shines a spotlight on Bihar’s unique artistry, especially the exquisite Bavan Buti sarees, 
          to inspire regional pride and preserve cultural identity. By crafting high-quality, contemporary designs rooted in tradition, 
          Jaalkaar aims to redefine perceptions of Bihar. The brand’s efforts celebrate the region’s rich heritage, counter stereotypes, 
          and instill a deep sense of pride among the local community and beyond.
          </p>
        </div>
        {/* Image Section */}
        <div className="relative overflow-hidden w-full lg:w-[40rem] lg:my-12">
          <img 
            className="w-full h-auto transition-transform duration-500 hover:scale-105" 
            src={assets.asset13} 
            alt="" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </>
  );
};

export default About;
