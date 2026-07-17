import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaShoppingBag } from 'react-icons/fa';

const EmptyProducts  = () => {
  return (
    <div className="text-center py-16 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl border border-white/10">
      <div className="text-6xl mb-4">🔍</div>
      <h3 className="text-xl font-bold text-white mb-2">No Products Found</h3>
      <p className="text-white/60 max-w-md mx-auto mb-6">
        We couldn't find any products matching your criteria. Try adjusting your filters or browse our full collection.
      </p>
      <Link
        to="/products"
        className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-amber-600/30 hover:scale-105"
      >
        <FaShoppingBag />
        View All Products
      </Link>
    </div>
  );
};

export default EmptyProducts ;