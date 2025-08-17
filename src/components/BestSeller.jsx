import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaRegHeart } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

export default function BestSeller({
  products = [],
  titleLeft = 'explore.title',      
  titleRight = 'explore.highlight' 
    }) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="px-4 py-20 lg:px-24">
      <h2 className="flex items-center justify-center mb-6 text-3xl font-bold text-center">
        {t(titleLeft)}
        <div className="h-1 mx-2 border border-redS w-7 bg-redS mt-7"></div>
        <span className="text-redS">{t(titleRight)}</span>
      </h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
        {products
          .map((product) => (
            <div
              key={product.id}
              className="relative flex flex-col justify-between p-4 transition bg-white border shadow-sm cursor-pointer rounded-xl hover:shadow-md"
              onClick={() => navigate(`/productdetails`)}
            >
              <span
                className="absolute p-2 overflow-visible text-gray-700 bg-gray-100 rounded-full cursor-pointer top-3 right-3 hover:text-redS"
                onClick={(e) => e.stopPropagation()}
              >
                <FaRegHeart size={20} />
              </span>
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-40 mb-4"
              />
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3 className="mb-1 text-base font-semibold line-clamp-2">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    {[...Array(5)].map((_, index) => (
                      <span key={index}>
                        {index < product.rating ? (
                          <AiFillStar className="text-xl text-yellow-400" />
                        ) : (
                          <AiOutlineStar className="text-xl text-gray-300" />
                        )}
                      </span>
                    ))}
                    <p className="mb-1 ml-2 text-sm text-gray-400">({product.reviews})</p>
                  </div>
                  <p className="text-lg font-bold text-main">${product.price.toFixed(2)}</p>
                  <p className="mt-1 text-xs text-redS">{t('explore.available')}: {product.available}</p>
                </div>
                <button
                  className="py-2 mt-4 text-sm font-semibold text-white transition rounded bg-main hover:bg-mainHover"
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
