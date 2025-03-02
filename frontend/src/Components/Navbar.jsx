import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const Navbar = () => {
  const [visible, setVisible] = useState(false); // For mobile sidebar
  const [isCollectionsOpen, setIsCollectionsOpen] = useState(false); // For toggling nested collections in sidebar
  const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);
  const logout = () => {
    navigate('/login')
    localStorage.removeItem('token')
    setToken('')
    setCartItems({})
  }

  return (
    <div className="relative z-30 bg-white shadow-sm">
      <div className="flex items-center justify-between py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[4vw]">
        {/* Burger Menu (Moved to the left of the logo) */}
        <div className='flex flex-row gap-6 sm:hidden'>
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
        <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer sm:hidden"
            alt="Search"
          />
          </div>

        {/* Navbar links */}
        <ul className="hidden sm:flex gap-5 text-sm text-[#D4AF37]">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>

          {/* Collections with hover dropdown */}
          <div className="group relative flex flex-col items-center gap-1 cursor-pointer">
            <p>Collections</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
            {/* Dropdown */}
            <div className="group-hover:block hidden absolute top-full left-0 bg-white border rounded shadow-lg text-black w-40 z-40">
              <NavLink
                to="/tussar-collection"
                className="block px-4 py-2 hover:bg-gray-200 text-sm font-medium text-gray-600"
              >
                Tussar Saree
              </NavLink>
              <NavLink
                to="/cotton-collection"
                className="block px-4 py-2 hover:bg-gray-200 text-sm font-medium text-gray-600"
              >
                Cotton Saree
              </NavLink>
              <NavLink
                to="/stoles-scarves"
                className="block px-4 py-2 hover:bg-gray-200 text-sm font-medium text-gray-600"
              >
                Stole
              </NavLink>
              <NavLink
                to="/dupatta-collection"
                className="block px-4 py-2 hover:bg-gray-200 text-sm font-medium text-gray-600"
              >
                Dupatta
              </NavLink>
            </div>
          </div>

          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-[#D4AF37] hidden" />
          </NavLink>
        </ul>

        {/* Logo */}
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="w-36" />
        </Link>
        
        {/* Icons */}
        <div className="flex items-center gap-6 z-10">
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-5 cursor-pointer hidden sm:block"
            alt="Search"
          />

          {/* Profile Dropdown */}
          <div className="group relative">
            <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
            {/* Dropdown Menu */}
            {token && 
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <p onClick={()=>navigate('/orders')} className="cursor-pointer hover:text-black">Orders</p>
                <p onClick={logout} className="cursor-pointer hover:text-black">Logout</p>
              </div>
            </div>}
          </div>

          <Link to="/cart" className="relative">
            <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {getCartCount()}
            </p>
          </Link>
        </div>
      </div>

      {/* Sidebar menu for small screens */}
      <div
        className={`fixed top-0 left-0 bottom-0 overflow-hidden z-50 bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}
      >
        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/">
            Home
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/about">
            About
          </NavLink>
          <NavLink onClick={() => setVisible(false)} className="py-2 pl-6 border" to="/contact">
            Contact
          </NavLink>

          {/* Collections Section in Sidebar */}
          <div
            onClick={() => setIsCollectionsOpen(!isCollectionsOpen)}
            className="py-2 pl-6 border cursor-pointer"
          >
            <p>Collections</p>
          </div>

          {/* Nested Collections Sidebar */}
          {isCollectionsOpen && (
            <div className="flex flex-col">
              <NavLink onClick={() => setVisible(false)} className="py-2 pl-8 border" to="/tussar-collection">
                Tussar Saree
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 pl-8 border" to="/cotton-collection">
                Cotton Saree
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 pl-8 border" to="/stoles-scarves">
                Stole
              </NavLink>
              <NavLink onClick={() => setVisible(false)} className="py-2 pl-8 border" to="/dupatta-collection">
                Dupatta
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
