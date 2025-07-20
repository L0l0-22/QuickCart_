/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {  BsPlus, BsDash } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import img1 from "../assets/headphones.png";
import img2 from "../assets/playstation.png";
import img3 from "../assets/speaker.png";
import img4 from "../assets/iphone.png";
import img5 from "../assets/men.png";
import img6 from "../assets/rings.png";
import img7 from "../assets/flamingo.png";
import img8 from "../assets/kitchen2.png";
import banner from "../assets/banner.avif";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import MobileFiltersDrawer from "./MobileFiltersDrawer";

export default function Search() {
  const navigate = useNavigate();
  const products = [
    {
      id: 1,
      name: "Wireless Noise Cancelling Headphones",
      by: "Sony",
      image: img1,
      price: 199.99,
      oldPrice: 249.99,
      rating: 5,
      rate: "1.8K Reviews",
      available: "80/100",
      category: "Electronics",
      best: true,
    },
    {
      id: 2,
      name: "Smart Fitness Watch",
      by: "FitPro",
      image: img2,
      price: 79.99,
      oldPrice: 129.99,
      rating: 4,
      rate: "980 Reviews",
      available: "60/100",
      category: "Wearables",
    },
    {
      id: 3,
      name: "4K Ultra HD Smart TV 55\"",
      by: "Samsung",
      image: img3,
      price: 499.99,
      oldPrice: 699.99,
      rating: 5,
      rate: "3.2K Reviews",
      available: "90/100",
      category: "Home Entertainment",
      best: true,
    },
    {
      id: 4,
      name: "iPhone 14 Pro Max",
      by: "Apple",
      image: img4,
      price: 1299.99,
      oldPrice: 1399.99,
      rating: 5,
      rate: "2.4K Reviews",
      available: "50/100",
      category: "Electronics",
      best: true,
    },
    {
      id: 5,
      name: "Stylish Men’s Jacket",
      by: "UrbanWear",
      image: img5,
      price: 75.0,
      oldPrice: 99.0,
      rating: 4,
      rate: "2K Reviews",
      available: "60/100",
      category: "Fashion",
    },
    {
      id: 6,
      name: "Luxury Gold Rings Set",
      by: "Diamond Co.",
      image: img6,
      price: 300.0,
      oldPrice: 350.0,
      rating: 4,
      rate: "1.8K Reviews",
      available: "12/100",
      category: "Accessories",
    },
    {
      id: 7,
      name: "Modern Home Flamingo Decor",
      by: "DecoStyle",
      image: img7,
      price: 45.0,
      oldPrice: 60.0,
      rating: 5,
      rate: "150 Reviews",
      available: "50/100",
      category: "Home Decor",
    },
    {
      id: 8,
      name: "Multi-functional Kitchen Grinder",
      by: "KitchenPro",
      image: img8,
      price: 130.0,
      oldPrice: 179.99,
      rating: 3,
      rate: "1.4K Reviews",
      available: "40/100",
      category: "Home Appliance",
    },
  ];
  const [openAccordion, setOpenAccordion] = useState("category");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [price, setPrice] = useState(500);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const toggleFilter = (value, filterList, setFilterList) => {
    setFilterList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
 
  const applyFilters = () => {
    const filtered = products.filter((product) => {
      const matchCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchRating =
        selectedRatings.length === 0 || selectedRatings.includes(product.rating.toString());
      const matchBrand =
        selectedBrands.length === 0 || selectedBrands.includes(product.by);
        const matchPrice = product.price <= parseFloat(price);
        return matchCategory && matchRating && matchBrand && matchPrice;
    });
    setFilteredProducts(filtered);
  };
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedRatings([]);
    setSelectedBrands([]);
    setPrice(1500);
    setFilteredProducts(products);
  };

  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };

  const updatePrice = (value) => {
    setPrice(value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-6 lg:px-24 mt-14">
      <div className="flex flex-col md:flex-row items-center justify-between px-12">
        <p className="text-lg text-gray-500 mb-4">
          Home / Shop / <span className="text-redS font-medium">Search Results For “Electronics”</span>
        </p>
        <div className="relative inline-block text-left" ref={dropdownRef}>
          <div className="flex justify-end space-x-4 mt-5">
            <div className="w-48 relative">
              <select className="appearance-none w-full px-3 py-2 rounded-md text-xs lg:text-sm font-medium shadow-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryGreen focus:border-transparent bg-white text-gray-700">
                <option value="">Sort By</option>
                <option value="most-reviewed">Most Reviewed</option>
                <option value="most-relevant">Most Relevant</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="newest">Newest</option>
              </select>
              <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none text-gray-500 text-sm">
                ▼
              </div>
            </div>
            <MobileFiltersDrawer 
              drawerOpen={drawerOpen}
              setDrawerOpen={setDrawerOpen}
              selectedCategories={selectedCategories}
              setSelectedCategories={setSelectedCategories}
              selectedRatings={selectedRatings}
              setSelectedRatings={setSelectedRatings}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
              price={price}
              setPrice={setPrice}
              applyFilters={applyFilters}
              clearFilters={clearFilters}
            />
            <button className="block lg:hidden" onClick={() => setDrawerOpen(true)}>
              <MdOutlineDashboard size={32} className="text-primaryGreen" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row px-4 py-6 gap-6">
        {/* Sidebar Filters */}
        <div className="w-full hidden lg:block lg:w-1/4 space-y-4">
          {/* Rating */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion("rating")}>
              <h3 className="font-semibold">Rating</h3>
              {openAccordion === "rating" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "rating" && (
              <div className="mt-3 space-y-2">
                {["5", "4", "3", "2"].map((r) => (
                  <label key={r} className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                    <input
                      type="checkbox"
                      checked={selectedRatings.includes(r)}
                      onChange={() => toggleFilter(r, selectedRatings, setSelectedRatings)}
                      className="accent-redS"
                    />
                    <span>
                      {[...Array(parseInt(r))].map((_, i) => (
                        <AiFillStar key={i} className="text-yellow-500 inline" />
                      ))}{" "}
                      & up
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Category */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion("category")}>
              <h3 className="font-semibold">Category</h3>
              {openAccordion === "category" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "category" && (
              <div className="mt-3 space-y-2">
               {[
                "Electronics",
                "Wearables",
                "Home Entertainment",
                "Accessories",
                "Home Appliance",
                "Fashion",
                "Home Decor",
              ].map((category) => (
                <label key={category} className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category)}
                    onChange={() => toggleFilter(category, selectedCategories, setSelectedCategories)}
                    className="accent-redS"
                  />
                  <span>{category}</span>
                </label>
              ))}
              </div>
            )}
          </div>

          {/* Price */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion("price")}>
              <h3 className="font-semibold">Price</h3>
              {openAccordion === "price" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "price" && (
              <div className="mt-3">
                <input
                  type="range"
                  min="0"
                  max="1500"
                  value={price}
                  onChange={(e) => updatePrice(e.target.value)}
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>$0</span>
                  <span>${price}</span>
                </div>
              </div>
            )}
          </div>

          {/* Brand */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleAccordion("brand")}>
              <h3 className="font-semibold">Brand</h3>
              {openAccordion === "brand" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "brand" && (
              <div className="mt-3 space-y-2">
               {["Sony", "Samsung", "FitPro", "Apple", "UrbanWear", "KitchenPro", "Diamond Co.", "DecoStyle"].map(
                  (brand) => (
                    <label key={brand} className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                      />
                      <span>{brand}</span>
                    </label>
                  )
                )}
              </div>
            )}
          </div>
          <div className="flex items-center justify-center mt-4 gap-4">
          <button
            onClick={applyFilters}
            className="w-full bg-redS hover:bg-red-700 text-white py-2  rounded font-semibold"
          >
            Apply Filters
          </button>
          <button
            onClick={clearFilters}
            className="w-full bg-gray-200 hover:bg-gray-300 text-main py-2 rounded font-semibold"
          >
            Clear Filters
          </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full lg:w-3/4">
          <img src={banner} className="mb-5 rounded-lg"/>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl p-4 shadow-sm border relative flex flex-col justify-between cursor-pointer hover:shadow-md transition"
                onClick={() => navigate(`/productdetails`)}
              >
                {product.best && (
                  <span className="absolute top-3 left-3 bg-gray-400 text-white text-sm px-2 py-1 rounded font-medium">
                    Best Seller
                  </span>
                )}
                <span
                  className="absolute top-3 right-3 bg-gray-100 text-gray-700 p-2 rounded-full hover:text-red-500"
                  onClick={(e) => e.stopPropagation()}
                >
                  <FaRegHeart size={18} />
                </span>
                <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-semibold mb-1 line-clamp-2">{product.name}</h3>
                    <p className="text-xs text-gray-500 mb-1">by {product.by}</p>
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>
                          {i < product.rating ? (
                            <AiFillStar className="text-yellow-400 text-sm" />
                          ) : (
                            <AiOutlineStar className="text-gray-300 text-sm" />
                          )}
                        </span>
                      ))}
                      <p className="text-sm text-gray-400 ml-2">({product.rate})</p>
                    </div>
                    <p className="text-lg font-bold text-main">${product.price.toFixed(2)}</p>
                    <p className="text-xs text-red-500 mt-1">Available: {product.available}</p>
                  </div>
                  <button
                    className="mt-4 bg-main text-white text-sm font-semibold py-2 rounded hover:bg-mainHover transition"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate("/cart");
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
