import React from 'react';
import apple from '../assets/apple.png';
import rolex from '../assets/rolex.png';
import adidas from '../assets/adidas.png';
import xiaomi from '../assets/xiaomi.png';
import amazfit from '../assets/Amazfit.png';
import oneplus from '../assets/One Plus.png';
import samsung from '../assets/samsung.png';
import nike from '../assets/nike.png';
import sony from '../assets/sony.png';
import lg from '../assets/lg.png';
import hp from '../assets/hp.png';
import dell from '../assets/dell.png';
import lenovo from '../assets/lenovo.png';
import huawei from '../assets/huawei.png';
import canon from '../assets/canon.png';
import philips from '../assets/philips.png';

const brands = [
  { name: 'Apple', img: apple },
  { name: 'Rolex', img: rolex },
  { name: 'Adidas', img: adidas },
  { name: 'Xiaomi', img: xiaomi },
  { name: 'Amazfit', img: amazfit },
  { name: 'One Plus', img: oneplus },
  { name: 'Samsung', img: samsung },
  { name: 'Nike', img: nike },
  { name: 'Sony', img: sony },
  { name: 'LG', img: lg },
  { name: 'HP', img: hp },
  { name: 'Dell', img: dell },
  { name: 'Lenovo', img: lenovo },
  { name: 'Huawei', img: huawei },
  { name: 'Canon', img: canon },
  { name: 'Philips', img: philips },
];

export default function Brands() {
  return (
    <div className="py-10 px-4 lg:px-20 bg-white">
      <h2 className="text-3xl font-bold flex text-center justify-center items-center mb-8">
        Explore Our 
        <div className="border border-[#FF3C3C] h-1 w-7 bg-[#FF3C3C] mt-7 mx-2"></div>
        <span className="text-[#FF3C3C]">Brand Partners</span>
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6 place-items-center">
        {brands.map((brand, idx) => (
          <div
            key={idx}
            className="bg-gray-100 shadow-md hover:shadow-xl p-6 rounded-full transition-all duration-300 w-36 h-36 flex flex-col items-center justify-center text-center"
          >
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <img
                src={brand.img}
                alt={brand.name}
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-base font-semibold text-main mt-2">{brand.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

