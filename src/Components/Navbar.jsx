import React, { useState } from 'react';
import AddressOverlay from './AddressOverlay'; // The overlay component
import Search from './Search'; // The search component
import { FaSearch, FaUserCircle, FaShoppingCart } from 'react-icons/fa'; // Icons for profile and cart
import App from '../App';

const Navbar = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const [userAddress, setUserAddress] = useState('Home - Wing-C, GCC Club Road, Phase 1');

  // Function to open overlay
  const handleOverlayOpen = () => {
    setShowOverlay(true);
  };

  // Function to close overlay
  const handleOverlayClose = () => {
    setShowOverlay(false);
  };

  // Function to update address after overlay interaction
  const saveAddress = (newAddress) => {
    setUserAddress(newAddress);
  };

  return (
    <>
      {/* Mobile View */}
      <header className="block md:hidden flex flex-col items-center justify-between py-4 px-4 bg-gradient-to-b from-purple-700 to-[#000000] text-white">
  <div className="flex items-center justify-between w-full mb-2">
    {/* Profile Icon */}
    <div  className="flex flex-col items-center">
      <a href="/"><FaUserCircle className="text-2xl text-white" /></a>
      <span className="text-xs">Profile</span>
    </div>

    {/* Delivery Info and Address */}
    <div className="flex flex-col items-center">
      <span className="font-bold text-lr font-bold">Delivery in 59 Mins</span>
      <div
        className="flex items-center space-x-1 cursor-pointer mt-1"
        onClick={handleOverlayOpen}
      >
        <span className="text-xs truncate">{userAddress}</span>
        <span className="text-xs">&#9660;</span>
      </div>
    </div>

    {/* Cart Icon */}
    <div className="flex flex-col items-center">
      <FaShoppingCart className="text-2xl text-white" />
      <span className="text-xs">Cart</span>
    </div>
  </div>

  {/* Search Bar */}
  <div className="w-full mt-2">
    <div className="relative">
      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <Search />
    </div>
  </div>

  {/* Overlay for Mobile */}
  {showOverlay && (
    <AddressOverlay closeOverlay={handleOverlayClose} saveAddress={saveAddress} />
  )}
</header>


      {/* Desktop View */}
      <header className="hidden md:flex items-center justify-between py-6 px-20 bg-gradient-to-b from-purple-700 to-[#000000] text-black">
        {/* Logo */}
        <div className="flex items-center mr-6">
          <a href="/"><img src="src/assets/logo.png" alt="logo" className="h-8 mr-4" /></a> {/* Replace with your logo */}
          <div className="text-sm">
            <span className="font-semibold text-white">Delivery in 59 Mins!</span>
            <div className="flex items-center space-x-1 cursor-pointer" onClick={handleOverlayOpen}>
              <span className="text-white">{userAddress}</span>
              <span className="text-white">&#9660;</span> {/* Down arrow for dropdown */}
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-grow ml-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Search />
          </div>
        </div>

        {/* Profile and Cart Icons */}
        <div className="flex items-center ml-0 space-x-6">
          {/* Profile Icon */}
          <div className="flex flex-col items-center">
            <FaUserCircle className="text-2xl text-white" />
            <span className="text-xs text-white">Profile</span>
          </div>

          {/* Cart Icon */}
          <div className="flex flex-col items-center">
            <FaShoppingCart className="text-2xl text-white" />
            <span className="text-xs text-white">Cart</span>
          </div>
        </div>

        {/* Address Overlay */}
        {showOverlay && (
          <AddressOverlay closeOverlay={handleOverlayClose} saveAddress={saveAddress} />
        )}
      </header>
    </>
  );
};

export default Navbar;
