import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsDash, BsPlus } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function MobileFiltersDrawer({
  drawerOpen,
  setDrawerOpen,
  selectedCategories,
  setSelectedCategories,
  selectedRatings,
  setSelectedRatings,
  selectedBrands,
  setSelectedBrands,
  price,
  setPrice,
  applyFilters,
  clearFilters,
}) {
  const [openAccordion, setOpenAccordion] = React.useState("rating");
  
  const toggleAccordion = (section) => {
    setOpenAccordion(openAccordion === section ? "" : section);
  };
  
  const toggleFilter = (value, filterList, setFilterList) => {
    setFilterList((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };
  
  const updatePrice = (value) => {
    setPrice(value);
  };

  const handleApply = () => {
    applyFilters();
    setDrawerOpen(false);
  };

  const handleClear = () => {
    clearFilters();
    setDrawerOpen(false);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out ${
        drawerOpen ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={() => setDrawerOpen(false)}
    >
      <div 
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h4 className="text-lg font-bold text-primaryBlue">Filter</h4>
          <button 
            onClick={() => setDrawerOpen(false)} 
            className="flex text-primaryBlue text-sm"
          >
            <IoClose size={22} className="text-primaryBlue" />
          </button>
        </div>
        
        <div className="overflow-y-auto h-[calc(100%-60px)] pb-4">
          {/* Rating */}
          <div className="bg-white p-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("rating")}
            >
              <h3 className="font-semibold">Rating</h3>
              {openAccordion === "rating" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "rating" && (
              <div className="mt-3 space-y-2">
                {["5", "4", "3", "2"].map((r) => (
                  <label 
                    key={r} 
                    className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
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
          <div className="bg-white p-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("category")}
            >
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
                  <label 
                    key={category} 
                    className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                  >
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
          <div className="bg-white p-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("price")}
            >
              <h3 className="font-semibold">Price</h3>
              {openAccordion === "price" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "price" && (
              <div className="mt-3">
                <input
                  type="range"
                  className="w-full accent-redS"
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
          <div className="bg-white p-4 border-b">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleAccordion("brand")}
            >
              <h3 className="font-semibold">Brand</h3>
              {openAccordion === "brand" ? <BsDash /> : <BsPlus />}
            </div>
            {openAccordion === "brand" && (
              <div className="mt-3 space-y-2">
                {["Sony", "Samsung", "FitPro", "Apple", "UrbanWear", "KitchenPro", "Diamond Co.", "DecoStyle"].map(
                  (brand) => (
                    <label 
                      key={brand} 
                      className="flex items-center space-x-2 text-sm py-1 px-2 hover:bg-gray-100 rounded cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleFilter(brand, selectedBrands, setSelectedBrands)}
                        className="accent-redS"
                      />
                      <span>{brand}</span>
                    </label>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t p-4 flex gap-3">
          <button
            onClick={handleClear}
            className="flex-1 border border-gray-300 text-gray-700 py-2 rounded font-medium"
          >
            Clear
          </button>
          <button
            onClick={handleApply}
            className="flex-1 bg-redS text-white py-2 rounded font-medium"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}