import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBag, FaSearch } from 'react-icons/fa';

const EmptyProducts = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="relative inline-block">
          <div className="text-7xl mb-6 opacity-30">🔍</div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-600 rounded-full animate-ping"></div>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">
          No Products Found
        </h3>
        
        <p className="text-white/50 text-sm mb-8 leading-relaxed">
          We couldn't find any products matching your criteria. 
          Try adjusting your filters or browse our full collection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-600/30"
          >
            <FaShoppingBag />
            View All Products
          </Link>
          
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 border border-white/10 hover:scale-105"
          >
            <FaSearch />
            Refresh
          </button>
        </div>
        
        <div className="mt-8 flex items-center justify-center gap-2 text-white/20 text-xs">
          <span className="w-8 h-px bg-white/10"></span>
          <span>or</span>
          <span className="w-8 h-px bg-white/10"></span>
        </div>
        
        <p className="text-white/20 text-xs mt-3">
          Try changing your filters or search terms
        </p>
      </div>
    </div>
  );
};

export default EmptyProducts;