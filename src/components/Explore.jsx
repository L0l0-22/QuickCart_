import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import kitchen from "../assets/kitchen2.png";
import gym from "../assets/matt.png";
import watch from "../assets/watch.png";
import men from "../assets/men.png";
import rings from "../assets/rings.png";
import iphone from "../assets/iphone.png";
import headphones from "../assets/headphones.png";
import playstation from "../assets/playstation.png";
import flamingo from "../assets/flamingo.png";
import speaker from "../assets/speaker.png";
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function Explore() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: t('explore.products.iphone'),
      price: 1299,
      reviews: '1.4K Review',
      available: '40/100',
      image: iphone,
      isNew: true,
      category: t('explore.categories.electronics'),
      rating: 5,
    },
    {
      id: 2,
      name: t('explore.products.kitchen'),
      price: 130,
      reviews: '1.4K Review',
      available: '40/100',
      image: kitchen,
      tag: t('explore.tags.sale'),
      rating: 3,
      category: t('explore.categories.home'),
    },
    {
      id: 3,
      name: t('explore.products.ps5'),
      price: 599,
      reviews: '2.1K Review',
      available: '25/100',
      image: playstation,
      category: t('explore.categories.electronics'),
      rating: 3,
    },
    {
      id: 4,
      name: t('explore.products.watch'),
      price: 399,
      reviews: '3.4K Review',
      available: '70/100',
      image: watch,
      isNew: true,
      category: t('explore.categories.electronics'),
      rating: 5,
    },
    {
      id: 6,
      name: t('explore.products.headphones'),
      price: 199,
      reviews: '900 Review',
      available: '80/100',
      image: headphones,
      category: t('explore.categories.electronics'),
      tag: t('explore.tags.sale'),
      rating: 5,
    },
    {
      id: 7,
      name: t('explore.products.jacket'),
      price: 75,
      reviews: '2K Review',
      available: '60/100',
      image: men,
      isNew: true,
      category: t('explore.categories.fashion'),
      rating: 4,
    },
    {
      id: 8,
      name: t('explore.products.rings'),
      price: 300,
      reviews: '1.8K Review',
      available: '12/100',
      image: rings,
      isNew: true,
      category: t('explore.categories.fashion'),
      rating: 4,
    },
    {
      id: 9,
      name: t('explore.products.speaker'),
      price: 99,
      reviews: '500 Review',
      available: '95/100',
      image: speaker,
      category: t('explore.categories.electronics'),
      rating: 3,
    },
    {
      id: 10,
      name: t('explore.products.flamingo'),
      price: 45,
      reviews: '150 Review',
      available: '50/100',
      image: flamingo,
      category: t('explore.categories.home'),
      tag: t('explore.tags.sale'),
      rating: 5,
    },
    {
      id: 11,
      name: t('explore.products.gym'),
      price: 650,
      reviews: '1.1K Review',
      available: '18/100',
      image: gym,
      category: t('explore.categories.sport'),
      rating: 3,
    },
  ];

  const categories = [
    t('explore.categories.all'),
    t('explore.categories.electronics'),
    t('explore.categories.home'),
    t('explore.categories.fashion'),
    t('explore.categories.sport'),
  ];

  const [activeCategory, setActiveCategory] = useState(t('explore.categories.all'));

  return (
    <div className="px-4 lg:px-24 py-10 bg-gray-100">
      <h2 className="text-3xl font-bold flex text-center justify-center items-center mb-6">
        {t('explore.title')} 
        <div className="border border-[#FF3C3C] h-1 w-7 bg-[#FF3C3C] mt-7 mx-2"></div>
        <span className="text-[#FF3C3C]">{t('explore.highlight')}</span>
      </h2>

      <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 mb-10 overflow-x-auto font-bold text-base">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`pb-2 transition-all border-b-2 ${
              activeCategory === cat
                ? 'border-red-500 text-red-500'
                : 'border-transparent text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products
          .filter((product) =>
            activeCategory === t('explore.categories.all') ? true : product.category === activeCategory
          )
          .map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl p-4 shadow-sm border relative flex flex-col justify-between cursor-pointer hover:shadow-md transition"
              onClick={() => navigate(`/productdetails`)}
            >
              {product.isNew && (
                <span className="absolute top-3 left-3 bg-redS text-white text-xs px-2 py-1 rounded">
                  {t('explore.badges.new')}
                </span>
              )}
              <span
                className="absolute top-3 right-3 bg-gray-100 text-gray-700 p-2 overflow-visible rounded-full cursor-pointer hover:text-redS"
                onClick={(e) => e.stopPropagation()}
              >
                <FaRegHeart size={20} />
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-contain mb-4"
              />
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-semibold mb-1 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product.rating ? (
                          <AiFillStar className="text-yellow-400 text-xl" />
                        ) : (
                          <AiOutlineStar className="text-gray-300 text-xl" />
                        )}
                      </span>
                    ))}
                    <p className="text-sm text-gray-400 mb-1 ml-2">({product.reviews})</p>
                  </div>
                  <p className="text-lg font-bold text-main">${product.price.toFixed(2)}</p>
                  <p className="text-xs text-red-500 mt-1">{t('explore.available')}: {product.available}</p>
                </div>
                <button
                  className="mt-4 bg-main text-white text-sm font-semibold py-2 rounded hover:bg-mainHover transition"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/cart`);
                  }}
                >
                  {t('explore.addToCart')}
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
