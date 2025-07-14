import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMenu2Line } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function SecNavbar() {
const [open, setOpen] = useState(false);

return (
    <nav className="relative flex items-center justify-between lg:justify-center lg:gap-12 mt-1 pt-4 w-full z-40 bg-white shadow-sm px-4 lg:px-0">
    <div className="flex items-center gap-2 justify-between w-full md:w-auto md:justify-normal">
        <button className="flex items-center bg-redS text-white px-4 py-2 rounded text-xs lg:text-base font-semibold mb-3">
        <RiMenu2Line className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 lg:mr-2 mr-1" />
        Browse Categories
        <IoIosArrowDown className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 lg:ml-2 ml-1" />
        </button>
        <button 
        className="sm:hidden text-gray-600 text-xl mb-3" 
        onClick={() => setOpen(!open)}
        >
        {open ? <FaTimes /> : <FaBars />}
        </button>
    </div>
    <div
        className={`
        ${open ? 'flex' : 'hidden'} 
        sm:flex
        flex-col sm:flex-row 
        absolute sm:static top-full right-4 sm:right-auto 
        bg-white sm:bg-transparent shadow-md sm:shadow-none 
        p-4 sm:p-0 gap-3 sm:gap-6 lg:gap-16 
        rounded-md sm:rounded-none 
        text-sm lg:text-base font-bold text-gray-500 mb-3
        `}
    >
        <NavLink to="/shop" className="hover:text-redS">Shop</NavLink>
        <NavLink to="/brands" className="hover:text-redS">Brands</NavLink>
        <NavLink to="/vendor" className="hover:text-redS">Our Vendor</NavLink>
        <NavLink to="/pages" className="hover:text-redS">Page</NavLink>
        <NavLink to="/customer" className="hover:text-redS">Customer</NavLink>
        <NavLink to="/more" className="hover:text-redS">Page</NavLink>
        <NavLink to="/special" className="text-redS">Special Offer</NavLink>
    </div>
    </nav>
);
}
