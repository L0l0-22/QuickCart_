import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiMenu2Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function SecNavbar() {
  return (
    <nav className="relative flex flex-col xl:flex-row items-start xl:items-center justify-between xl:justify-center mt-1 pt-4 w-full z-40 bg-white shadow-sm px-4 xl:px-0 container mx-auto">
      {/* Browse Categories Button */}
      <div className="flex items-center w-auto justify-between">
        <button className="flex justify-between items-center bg-redS text-white p-2 rounded text-xs lg:text-base font-semibold mb-3 mr-5 h-fit w-56">
          <RiMenu2Line className="w-4 h-4 lg:w-5 lg:h-5 mr-1" />
          Browse Categories
          <IoIosArrowDown className="w-4 h-4 lg:w-5 lg:h-5 ml-1" />
        </button>
      </div>

      {/* Swiper Nav */}
      <div className="relative overflow-visible w-full max-w-full">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          navigation
          className="w-full mb-3"
           breakpoints={{
                0: {
                slidesPerView: 2.5,
                },
                480: {
                slidesPerView: 3.5,
                },
                640: {
                slidesPerView: 4.5,
                },
                768: {
                slidesPerView: 5.5,
                },
                1024: {
                slidesPerView: 6.5,
                },
                1280: {
                slidesPerView: 'auto',
                },
            }}
        >
          <style>
            {`
            .swiper-button-next,
            .swiper-button-prev {
                color: #dc2626 !important;
                top: 50% !important;
                transform: translateY(-50%) !important;
                z-index: 10;
            }

            .swiper-button-next::after,
            .swiper-button-prev::after {
                font-size: 16px !important;
                font-weight: bold;
            }
            `}
          </style>

          {[
            { label: 'Electronics', path: '/shop' },
            { label: "Women's Fashion", path: '/brands' },
            { label: "Men's Fashion", path: '/brands' },
            { label: 'Kids Fashion', path: '/brands' },
            { label: 'Health & Nutrition', path: '/Health' },
            { label: 'Home & Appliances', path: '/customer' },
            { label: 'Beauty & Fragrance', path: '/more' },
            { label: 'Toys & Games', path: '/more' },
            { label: 'Supermarket', path: '/more' },
            { label: 'Sports & Outdoors', path: '/more' },
          ].map((item, idx) => (
            <SwiperSlide key={idx} className="!w-auto">
              <NavLink
                to={item.path}
                className="hover:text-redS font-semibold text-sm lg:text-lg text-gray-500 whitespace-nowrap"
              >
                {item.label}
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </nav>
  );
}
