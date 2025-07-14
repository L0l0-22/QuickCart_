import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import slide1 from '../assets/slide1.avif';
import slide2 from '../assets/slide2.avif';
import slide3 from '../assets/slide3.avif';
import slide4 from '../assets/slide4.avif';

import AllCategories from "./AllCategories";

export default function MainSlider() {
  return (
    <section id="home">
      <div className="relative">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 4000 }}
          loop={true}
          className="w-full "
        >
          <SwiperSlide>
            <div className="relative w-full">
              <img
                src={slide1}
                alt="Slide 1"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full">
              <img
                src={slide2}
                alt="Slide 2"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full">
              <img
                src={slide3}
                alt="Slide 3"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full">
              <img
                src={slide4}
                alt="Slide 4"
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <style>
          {`
            .swiper-pagination-bullet {
              background-color: #d1d5db !important;
              width: 30px !important;
              height: 5px !important;
              border-radius: 5px !important;
              opacity: 0.6 !important;
            }
            .swiper-pagination-bullet-active {
              background-color: #FF3C3C !important;
              opacity: 1 !important;
              width: 30px !important;
              height: 5px !important;
              border-radius: 5px !important;
            }
            .swiper-button-prev,
            .swiper-button-next {
              background: rgba(255, 255, 255, 0.5);
              width: 40px;
              height: 40px;
              border-radius: 9999px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .swiper-button-prev::after,
            .swiper-button-next::after {
              font-size: 20px;
              color: #02478d;
              font-weight: 700;
            }
            @media (max-width: 640px) {
              .swiper-button-prev,
              .swiper-button-next {
                width: 28px !important;
                height: 28px !important;
              }
              .swiper-button-prev::after,
              .swiper-button-next::after {
                font-size: 14px !important;
              }
            }
          `}
        </style>
        <div className="relative w-full z-30 bg-gray-100 ">
          <AllCategories />
        </div>
      </div>
    </section>
  );
}
