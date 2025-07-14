import React from 'react';
import MainSlider from '../components/MainSlider';
import Categories from '../components/Categories';
import AllCategories from '../components/AllCategories';
import Featured from '../components/Featured';
import Explore from '../components/Explore';
import Deals from '../components/Deals';
import Coupons from '../components/Coupons';
import Brands from '../components/Brands';
export default function Home() {
  return (
    <div className='mb-10'>
      <div className="relative">
        <MainSlider />
      </div>
      {/* <div className='absolute -bottom-48 w-full z-10'>
        <AllCategories/>
      </div> */}
      {/* <div className="absolute -bottom-48 w-full z-10">
        <Categories />
      </div> */}
      <Deals/>
      <Featured/>
      <Coupons/>
      <Explore/>
      <Brands/>
    </div>
  );
}

