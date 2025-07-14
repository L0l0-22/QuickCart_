import React from 'react';
import { FaTag } from 'react-icons/fa';

export default function Coupons() {
  return (
    <div className="bg-gradient-to-r from-[#A6A6A6] to-[#1E1E1E] text-white py-10 px-6 ">
      <div className="max-w-full lg:max-w-6xl lg:mx-auto text-center md:space-y-3 lg:space-y-6 space-y-6">
        <div className="flex justify-center items-center gap-2 text-red-400 font-semibold text-sm uppercase tracking-wide">
          <FaTag size={16} />
          Black Friday Sale 20%
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
          Save up to
          <span className="inline-block mx-3 align-middle">
            <div className="w-12 h-1 bg-redS rounded-sm mt-3 mx-auto"></div>
          </span> 
          <span className="text-redS">50%</span> on Exclusive Deals
        </h2>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Unlock unbeatable discounts and limited-time offers with our special coupons curated just for you.
        </p>
        <button className="bg-redS hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200">
          View All Coupons
        </button>
      </div>
    </div>
  );
}
