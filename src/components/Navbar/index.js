"use client"
import React, { useState } from "react";
import { FiHeart, FiShoppingBag, FiMenu, FiX, FiSearch, FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white  py-4 px-4 md:px-8 relative">
      <div className="container mx-auto flex justify-between items-center">
        
        <button className="md:hidden text-gray-600" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

       
        <div className="text-2xl font-bold text-gray-800 flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="h-6" />
        </div>

        
        <div className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-gray-900">Mobiles</a>
          <a href="#" className="hover:text-gray-900">Chargers</a>
          <a href="#" className="hover:text-gray-900">Data Cables</a>
          <a href="#" className="hover:text-gray-900">Mobile Covers</a>
          
        </div>

        
        <div className="hidden md:flex items-center border rounded-lg px-3 py-2 w-64 focus-within:ring-2 focus-within:ring-blue-400">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="ml-2 w-full outline-none"
          />
        </div>

       
        <div className="flex items-center space-x-4">
          <FiUser className="hidden md:block text-gray-600 cursor-pointer" size={24} />
          <FiHeart className="text-gray-600 cursor-pointer" size={24} />
          <FiShoppingBag className="text-gray-600 cursor-pointer" size={24} />
        </div>
      </div>

      
      <div
        className={`fixed top-0 left-0 z-10 h-full w-3/4 bg-white shadow-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out md:hidden p-6`}
      >
        <button className="absolute top-4 right-4 text-gray-600" onClick={() => setIsOpen(false)}>
          <FiX size={24} />
        </button>
        <nav className="flex flex-col space-y-4 mt-8">
          <a href="#" className="text-gray-700">Men</a>
          <a href="#" className="text-gray-700">Women</a>
          <a href="#" className="text-gray-700">Kids</a>
          <a href="#" className="text-gray-700">Home & Living</a>
          <a href="#" className="text-gray-700">Beauty</a>
          <a href="#" className="text-red-500">Studio NEW</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
