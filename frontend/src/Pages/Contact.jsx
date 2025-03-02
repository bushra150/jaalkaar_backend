import React from 'react';
import Title from '../Components/Title';
import { assets } from '../assets/assets';

const Contact = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[10vw] py-8">
      <Title text1="Contact us" />
      <div className="flex flex-col lg:flex-row justify-between mt-8 gap-10">
        {/* Left Section - Form */}
        <div className="lg:w-[45%]">
          <h2 className="text-xl font-semibold text-gray-800">
            Questions on your mind?
          </h2>
          <p className="text-gray-600 mb-6">
            Let’s chat and make things clear!
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <textarea
              placeholder="Comment"
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500"
            />
            <button
              type="submit"
              className="px-8 py-2 bg-[#800020] text-[#D4AF37] rounded-md hover:bg-[#D4AF37] hover:text-[#800020]"
            >
              Get Contacted →
            </button>
          </form>
        </div>

        {/* Right Section - Image */}
        <div className="lg:w-[45%] flex flex-col items-start">
          <h2 className="text-xl font-semibold text-gray-800">
            Connect with Us!
          </h2>
          <p className="text-gray-600 mb-6">
            We’re always here to assist you online!
          </p>
          <img
            src={assets.asset16}
            alt="Contact Image"
            className="w-full rounded-md shadow-md object-[70%_62%]"
            style={{ height: '300px', objectFit: 'cover' }}
          />
          <div className="mt-4 text-gray-600">
            <p>📞 9304192707</p>
            <p>✉️ care.jaalkaar@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
