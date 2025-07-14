import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import watch from "../assets/watch.png";
import men from "../assets/men.png";
import rings from "../assets/rings.png";
import iphone from "../assets/iphone.png";
import laptop from "../assets/laptop.png";
import headphones from "../assets/headphones.png";
import playstation from "../assets/playstation.png";
import kitchen from "../assets/kitchen2.png";
import flamingo from "../assets/flamingo.png";
import speaker from "../assets/speaker.png";

const categories = [
  { id: 1, name: 'Smart Watches', image: watch },
  { id: 2, name: 'Phones', image: iphone },
  { id: 3, name: 'Laptops', image: laptop },
  { id: 4, name: 'Headphones', image: headphones },
  { id: 5, name: 'Fashion', image: men },
  { id: 6, name: 'Gaming', image: playstation },
  { id: 7, name: 'Accessories', image: rings },
  { id: 8, name: 'Kitchen Essentials', image: kitchen },
  { id: 9, name: 'Summer Toys', image: flamingo },
  { id: 10, name: 'Speakers', image: speaker },
  { id: 11, name: 'Gaming', image: playstation },
  { id: 12, name: 'Accessories', image: rings },
  { id: 13, name: 'Kitchen Essentials', image: kitchen },
];

export default function AllCategories() {
  return (
    <div className="relative pt-12">
      <div className="mx-10 relative ">
        <Swiper
          slidesPerView={10}
          spaceBetween={20}
          freeMode={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[FreeMode, Pagination]}
          breakpoints={{
            0: { slidesPerView: 2.5 },
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 10 },
          }}
          className="scrollbar-hide relative pb-12"
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.id}>
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-lg mb-3 border border-gray-200">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-20 h-20 object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-base font-semibold">{cat.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}


