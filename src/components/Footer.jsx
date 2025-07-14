import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from "../assets/logoWhite.png";
import { NavLink } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#1E1E1E] to-[#3A3A3A] text-gray-300 mt-12 ">
      <div className="px-6 lg:px-24 py-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
        {/* Logo & Description */}
        <div className="col-span-2">
          <NavLink to="/">
            <img src={logo} alt="QuickCart Logo" className="w-[150px] h-auto mb-3" />
          </NavLink>
            <p className="text-gray-300 text-sm max-w-sm leading-6 lg:leading-5">
            QuickCart is your ultimate solution for launching a modern, high-performance e-commerce platform. With ready-to-use components, clean design, and full customization flexibility, it helps you build, manage, and scale your online store effortlessly.
            </p>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">Products</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Shoes</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Gift Cards</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">Shop</h4>
          <ul className="space-y-2 text-gray-400">
            <li>New Arrivals</li>
            <li>Best Sellers</li>
            <li>Release Dates</li>
            <li>Sale</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">About</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Blog</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>About</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold mb-3 text-lg">Help</h4>
          <ul className="space-y-2 text-gray-400">
            <li>Shipping</li>
            <li>Returns</li>
            <li>Order Status</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-300 py-4 px-2 lg:px-6 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; 2025 - All rights reserved.</p>
        <div className="flex space-x-6 mt-2 sm:mt-0 text-xs md:text-base">
          <a href="#" className="hover:text-redS">Data setting</a>
          <a href="#" className="hover:text-redS">Privacy policy</a>
          <a href="#" className="hover:text-redS">Terms & Conditions</a>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0 sm:ml-6 text-xl">
          <FaFacebookF className="hover:text-redS cursor-pointer" />
          <FaInstagram className="hover:text-redS cursor-pointer" />
          <FaTwitter className="hover:text-redS cursor-pointer" />
          <FaYoutube className="hover:text-redS cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
