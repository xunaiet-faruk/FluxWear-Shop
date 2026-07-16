import React, { useState } from 'react';
import { Link } from 'react-router';
import { FaStar, FaHeart, FaShoppingCart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <FaStar
        key={index}
        className={`${index < rating ? 'text-amber-600' : 'text-white/20'} text-xs`}
      />
    ));
  };

  return (
    <div 
      className="group relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl overflow-hidden border border-white/5 hover:border-amber-600/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-600/20"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {product.discount && (
          <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
        )}

        <button
          onClick={(e) => {
            e.preventDefault();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm p-2 rounded-full hover:bg-black/70 transition-all duration-300"
        >
          <FaHeart className={`${isWishlisted ? 'text-red-500' : 'text-white/60'} text-sm`} />
        </button>

        <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className="bg-amber-600 hover:bg-amber-700 text-white p-3 rounded-full shadow-2xl transform hover:scale-110 transition-transform duration-300">
            <FaEye className="text-lg" />
          </button>
        </div>
      </Link>

      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-white font-semibold text-sm sm:text-base mb-1 hover:text-amber-600 transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>
        
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
          <span className="text-white/40 text-xs ml-1">({product.reviews})</span>
        </div>

        <div className="flex items-center justify-between">
          <div>
            {product.originalPrice ? (
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-sm sm:text-base">
                  ${product.price}
                </span>
                <span className="text-white/40 text-xs line-through">
                  ${product.originalPrice}
                </span>
              </div>
            ) : (
              <span className="text-white font-bold text-sm sm:text-base">
                ${product.price}
              </span>
            )}
          </div>
          
          <Link
            to={`/product/${product.id}`}
            className="bg-amber-600 hover:bg-amber-700 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
          >
            <FaShoppingCart className="text-xs" />
          </Link>
        </div>

        <span className="inline-block mt-2 text-[10px] text-white/40 bg-white/5 px-2 py-0.5 rounded-full">
          {product.category}
        </span>
      </div>

      <div className={`absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-600 rounded-tl-lg"></div>
        <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-600 rounded-tr-lg"></div>
        <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-600 rounded-bl-lg"></div>
        <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-600 rounded-br-lg"></div>
      </div>
    </div>
  );
};

export default ProductCard;