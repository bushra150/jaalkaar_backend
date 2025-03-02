import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';

const Footer = () => {
    const { navigate } = useContext(ShopContext); // Access navigate function

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
        window.scrollTo(0, 0);
    };

    return (
        <div>
            <hr />
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm px-4 sm:px-[5vw] md:px-[7vw] lg:px-[8vw]'>
                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="" />
                    <p className='w-full md:w-2/3 text-gray-600'>
                        At JaalKaar, we celebrate the art of handcrafted heritage. Our collections blend traditional craftsmanship with modern elegance, bringing you unique pieces made with passion and precision. Every item tells a story of artistry and culture, crafted by skilled artisans. Discover timeless beauty and support the legacy of handmade art with us.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li className='cursor-pointer' onClick={() => handleNavigation('/')}>Home</li>
                        <li className='cursor-pointer' onClick={() => handleNavigation('/about')}>About Us</li>
                        <li className='cursor-pointer' onClick={() => handleNavigation('/delivery')}>Shipping Policy</li>
                        <li className='cursor-pointer' onClick={() => handleNavigation('/privacy-policy')}>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+91-9304192707</li>
                        <li>care.jaalkaar@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-row items-center justify-center mb-2 gap-3'>
                <a href="https://www.instagram.com/jaalkaar_/" target="_blank" rel="noopener noreferrer">
                    <img className='w-8' src={assets.instagram_logo} alt="Instagram" />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img className='w-9' src={assets.linkedin_logo} alt="LinkedIn" />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61572210685233" target="_blank" rel="noopener noreferrer">
                    <img className='w-7' src={assets.facebook_logo} alt="Facebook" />
                </a>
            </div>

            <div>
                <hr />
                <p className='py-5 text-sm text-center text-gray-600'>Copyright 2024 @ JaalKaar - All Rights Reserved</p>
            </div>
        </div>
    );
};

export default Footer;
