import React, { useState } from 'react';
import { FaFilter, FaTimes, FaSort, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';

const ProductFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  productCount,
  sortOption,
  onSortChange 
}) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortOptions = [
    { value: 'default', label: 'Default' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'name', label: 'Name A-Z' },
    { value: 'newest', label: 'Newest First' }
  ];

  return (
    <div className="mb-8">
      {/* Heading Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Our <span className="text-amber-600">Collection</span>
          </h2>
          <p className="text-white/40 text-sm mt-1">
            {productCount || 0} products available
          </p>
        </div>

    
        <div className="hidden sm:flex items-center gap-3">
          <div className="relative ">
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-4 py-2 pr-10 rounded-full border border-white/10 text-sm font-medium transition-all duration-300 appearance-none cursor-pointer focus:outline-none focus:border-amber-600/50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#200101]">
                  {option.label}
                </option>
              ))}
            </select>
            <FaSort className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs" />
          </div>

          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="hidden max-sm:flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all duration-300"
          >
            <FaFilter />
            <span>Filter</span>
          </button>
        </div>

        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-4 py-2 rounded-full border border-white/10 transition-all duration-300"
          >
            <FaFilter />
            <span>Filter</span>
            {selectedCategory && selectedCategory !== 'all' && (
              <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
            )}
          </button>

          <div className="relative">
            <select
              value={sortOption}
              onChange={(e) => onSortChange(e.target.value)}
              className="bg-white/5 hover:bg-white/10 text-white/70 hover:text-white px-4 py-2 pr-8 rounded-full border border-white/10 text-sm font-medium transition-all duration-300 appearance-none cursor-pointer focus:outline-none focus:border-amber-600/50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value} className="bg-[#200101]">
                  {option.label}
                </option>
              ))}
            </select>
            <FaSort className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none text-xs" />
          </div>
        </div>
      </div>

      <div className="hidden sm:flex items-center gap-2 mt-4 flex-wrap">
        <button
          onClick={() => onCategoryChange('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            selectedCategory === 'all'
              ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
              : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
          }`}
        >
          All Categories
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              selectedCategory === category
                ? 'bg-amber-600 text-white shadow-lg shadow-amber-600/30'
                : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {isFilterOpen && (
        <div className="sm:hidden mt-4 bg-white/5 rounded-2xl p-4 border border-white/10">
          <div className="flex items-center justify-between mb-3">
            <span className="text-white font-medium text-sm">Categories</span>
            <button
              onClick={() => setIsFilterOpen(false)}
              className="text-white/40 hover:text-white transition-colors duration-300"
            >
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => {
                onCategoryChange('all');
                setIsFilterOpen(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === 'all'
                  ? 'bg-amber-600 text-white'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
              }`}
            >
              All
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsFilterOpen(false);
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductFilter;